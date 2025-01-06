# Form component React + TypeScript + TailwindCSS

## Descripción

## Ejemplo de uso:
```tsx

import React from 'react';
import FormComponent from 'FormComponent';
import { Inputs } from './types';

const inputs:Array<Inputs> = [
  {
    // Campos obligatorios
    id: 'username',
    name: 'username',
    type: 'text',
    required: true,
    // Campos opcionales
    label: 'Username',
    className: 'text-[#333]', // Clases de tailwindcss
    placeholder: 'Ingresa tu username',
    clearable: true, // Si quieres activar el limpiar el campo
    toggleable: false, // Sirve para mostrar o ocultar contraseña solo sirve para el campo de tipo password
  }
]

function App() {
  return (
    <FormComponent
      title="Iniciar Sesión"
      textButton="Iniciar Sesión"
      inputs={inputs}
      submit={({values, event}) => {
        console.log("Es un JSON", event, values);
      }}
    />
  );
};

export default App;
```