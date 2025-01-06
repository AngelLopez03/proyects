import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormComponent from './Form.tsx'
import { Inputs } from './types'

const inputs:Array<Inputs> = [
  {
    id: 'input1',
    name: 'name',
    type: 'text',
    required: true,

    label: 'Nombre Completo',
    clearable: true,
    placeholder: 'Nombre Completo'
  },
  {
    id: 'input2',
    name: 'email',
    type: 'email',
    required: true,

    label: 'Correo Electrónico',
    clearable: true,
    placeholder: 'example@gmail.com'
  },
  {
    id: 'input3',
    name: 'phone',
    type: 'tel',
    required: true,

    label: 'Teléfono',
    clearable: true,
    pattern: '[0-9]{4}-[0-9]{6}',
    placeholder: 'Formato: xxxx-xxxxxx'
  },
  {
    id: 'input4',
    name: 'pass',
    type: 'password',
    required: true,

    clearable: true,
    toggleable: true,
    label: 'Contraseña',
    placeholder: 'Contraseña'
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex items-center justify-center w-screen h-screen'>
      <FormComponent title='Iniciar Sesion' textButton='Iniciar Sesion' inputs={inputs} submit={({values}) => {
        console.log("Es un json", values);
      }}/>
    </div>
  </StrictMode>,
)
