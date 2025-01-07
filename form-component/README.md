# Form component React + TypeScript + TailwindCSS

## Descripción
**FormComponent** es un componente de formulario flexible y personalizable construido con React, TypeScript y TailwindCSS. Este componente te permite crear formularios rápidamente y de manera eficiente, con la capacidad de personalizar los inputs, el título del formulario y el texto del botón de envío. Además, cuenta con soporte para `children`, permitiéndote agregar contenido adicional abajo del formulario, como enlaces para registro de nuevos usuarios o métodos alternativos de inicio de sesión.

### Características
* **Inputs Personalizables:** Define los campos de entrada del formulario según tus necesidades, especificando etiquetas, tipos, nombres, IDs y más.
* **Título Personalizable:** Establece el título del formulario para que se adapte a su propósito específico.
* **Texto del Botón Personalizable:** Personaliza el texto del botón de envío para que sea claro y relevante para los usuarios.
* **Soporte para Children:** Añade contenido adicional en el footer del formulario, ideal para enlaces, instrucciones adicionales o métodos alternativos de autenticación.
* **Estilizado con TailwindCSS:** Aprovecha las utilidades de TailwindCSS para un diseño rápido y responsivo.

## Instalación
Puedes instalar el paquete utilizando npm. Ejecuta el siguiente comando en tu terminal:

```bash
npm install @modular-web/rc-form
```

O si prefieres usar Yarn, puedes instalarlo con el siguiente comando:

```bash
yarn add @modular-web/rc-form
```

## Props
| Prop         | Tipo                          | Descripción                    | Opcional  |
|--------------|-------------------------------|--------------------------------|-----------|
| `title`      | `string`                      | El título del formulario       | No        |
| `textButton` | `string`                      | El texto del botón de envío    | No        |
| `inputs`     | `Array<{label?: string, className?: string, type: string, placeholder?: string, name: string, id: string, clearable?: boolean, toggleable?: boolean, required: boolean, pattern? string }>` | Lista de objetos de entrada que definen los campos del formulario        | Sí       |
| `submit`     | `(data: { values: any; event?: FormEvent<HTMLFormElement> }) => void` | Función que se llama cuando se envía el formulario. Incluye valores y evento | Sí        |
| `Children`   | `JSX`                         | Aquí puedes agregar cualquier jsx debajo del formulario | Sí       |

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

## Contribuir
Si desea contribuir a este proyecto, por favor sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funconalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](./LICENSE).
[MIT](https://choosealicense.com/licenses/mit/)