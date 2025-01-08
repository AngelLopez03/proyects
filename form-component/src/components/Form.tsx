// ICONOS
//-----------------------------
import { VisibilityIcon, VisibilityIconOff } from "../icons/VisibilityIcon"
import { CloseIcon } from "../icons/CloseIcon";


//-----------------------------

import React, { FormEvent, ChangeEvent, useState } from 'react'
import * as FormTypes from '../types';
import classNames from 'classnames';



const visibility : Array<React.ReactNode> = [
  <VisibilityIcon width={"20px"} height={"20px"} fill="#1F2937"/>,
  <VisibilityIconOff width={"20px"} height={"20px"} fill="#1F2937"/>
]

/**
 * FormComponent
 * @param {Array<Inputs>} [inputs] - Se pasa como parametro en un arreglo de inputs
 * @param {string} title - Se usa para el titulo del Formulario
 * @param {string} textButton - Se usa para el texto del botón encargado de hacer submit
 * @param {string} className - Estilos personalizados para el formulario usando tailwind
 * @param {Function} [submit] - Función que se llama cuando se envía el formulario.
 * @param {children} [children] - Cualquier elemento JSX que se agregue ira debajo del Formulario
 */

export function FormComponent({ inputs, title, textButton, className, submit, children }:FormTypes.Form) {

  const [values, setValues] = useState({})
  const [passwordVisible, setPasswordVisible] = useState<{[key: string]: boolean}>({});

  const handleValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClearable = (name: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: '',
    }));
  }

  const togglePasswordVisibility = (id:string) => {
    setPasswordVisible((prevState) => ({
       ...prevState,
       [id]: !passwordVisible[id] 
    }));
  };

  

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar los datos del formulario
    console.log({ values });
    if(!submit) return;
    submit({values, event: e});
  }

  return (
    <>
      <form 
        className={classNames(
          "bg-[#285cbdce] min-w-[500px] flex flex-col justify-center items-center gap-5 p-5",
          className
        )}
        onSubmit={handleSubmit}
      >
        <h1 className="text-[#222] dark:text-white text-3xl font-bold">{title}</h1>
        {
          inputs?.map((input, index) => {
            const {label, clearable, toggleable, required, className, type, ...inputProps} = input;
            return (
              <div key={index} className="w-full flex items-center justify-center">
                <div key={index} className="w-[80%]">
                  {label && (
                    <label htmlFor={inputProps.id} className="inline-block mb-2 font-bold text-[#222]">{label}</label>
                  )}
                  <div className="relative w-full">
                    <input
                      key={index}
                      {...inputProps}
                      type={toggleable && passwordVisible[inputProps.id!] ? "text" : type}
                      className={classNames(
                        "text-base p-2 rounded-lg outline-none w-full",
                        className // Combina las clases pasadas a través de props
                      )}
                      onChange={handleValues}
                      value={values[inputProps.name as keyof typeof values] ?? ''}
                      {...(required && {required: true})}
                    />
                    <div className="absolute right-0 top-0 flex justify-center items-center p-1 gap-1">
                      {clearable && values[inputProps.name as keyof typeof values] && (
                        <button
                          type="button"
                          onClick={() => handleClearable(inputProps.name)}
                          className="size-[30px] flex justify-center items-center rounded-full bg-[#ddd] outline-none"
                        >
                          <CloseIcon width={"20px"} height={"20px"} fill="#1F2937"/>
                        </button>
                      )}
                      {toggleable && (
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility(inputProps.id!)}
                          className="size-[30px] flex justify-center items-center rounded-full bg-[#ddd]"
                        >
                        {passwordVisible[inputProps.id] ? visibility[1] : visibility[0]}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        {textButton && (<button type='submit' className="p-4 bg-yellow-300 rounded-lg font-bold shadow-lg">{textButton}</button>)}
      </form>

      {children && (children)}
    </>
  )
}

// FormComponent
