import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// ICONOS
//-----------------------------
import { VisibilityIcon, VisibilityIconOff } from "../icons/VisibilityIcon";
import { CloseIcon } from "../icons/CloseIcon";
//-----------------------------
import { useState } from 'react';
import classNames from 'classnames';
const visibility = [
    _jsx(VisibilityIcon, { width: "20px", height: "20px", fill: "#1F2937" }),
    _jsx(VisibilityIconOff, { width: "20px", height: "20px", fill: "#1F2937" })
];
/**
 * FormComponent
 * @param {Array<Inputs>} [inputs] - Se pasa como parametro en un arreglo de inputs
 * @param {string} title - Se usa para el titulo del Formulario
 * @param {string} textButton - Se usa para el texto del botón encargado de hacer submit
 * @param {string} className - Estilos personalizados para el formulario usando tailwind
 * @param {Function} [submit] - Función que se llama cuando se envía el formulario.
 * @param {children} [children] - Cualquier elemento JSX que se agregue ira debajo del Formulario
 */
export function FormComponent({ inputs, title, textButton, className, submit, children }) {
    const [values, setValues] = useState({});
    const [passwordVisible, setPasswordVisible] = useState({});
    const handleValues = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const handleClearable = (name) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: '',
        }));
    };
    const togglePasswordVisibility = (id) => {
        setPasswordVisible((prevState) => ({
            ...prevState,
            [id]: !passwordVisible[id]
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar los datos del formulario
        console.log({ values });
        if (!submit)
            return;
        submit({ values, event: e });
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", { className: classNames("bg-[#285cbdce] min-w-[500px] flex flex-col justify-center items-center gap-5 p-5", className), onSubmit: handleSubmit, children: [_jsx("h1", { className: "text-[#222] dark:text-white text-3xl font-bold", children: title }), inputs?.map((input, index) => {
                        const { label, clearable, toggleable, required, className, type, ...inputProps } = input;
                        return (_jsx("div", { className: "w-full flex items-center justify-center", children: _jsxs("div", { className: "w-[80%]", children: [label && (_jsx("label", { htmlFor: inputProps.id, className: "inline-block mb-2 font-bold text-[#222]", children: label })), _jsxs("div", { className: "relative w-full", children: [_jsx("input", { ...inputProps, type: toggleable && passwordVisible[inputProps.id] ? "text" : type, className: classNames("text-base p-2 rounded-lg outline-none w-full", className // Combina las clases pasadas a través de props
                                                ), onChange: handleValues, value: values[inputProps.name] ?? '', ...(required && { required: true }) }, index), _jsxs("div", { className: "absolute right-0 top-0 flex justify-center items-center p-1 gap-1", children: [clearable && values[inputProps.name] && (_jsx("button", { type: "button", onClick: () => handleClearable(inputProps.name), className: "size-[30px] flex justify-center items-center rounded-full bg-[#ddd] outline-none", children: _jsx(CloseIcon, { width: "20px", height: "20px", fill: "#1F2937" }) })), toggleable && (_jsx("button", { type: "button", onClick: () => togglePasswordVisibility(inputProps.id), className: "size-[30px] flex justify-center items-center rounded-full bg-[#ddd]", children: passwordVisible[inputProps.id] ? visibility[1] : visibility[0] }))] })] })] }, index) }, index));
                    }), textButton && (_jsx("button", { type: 'submit', className: "p-4 bg-yellow-300 rounded-lg font-bold shadow-lg", children: textButton }))] }), children && (children)] }));
}
