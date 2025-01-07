# API de Autenticación Laravel 11

## Preparar el proyecto con Laravel 11
Instala Laravel con con siguiente bash en windows
```bash
laravel new nombre-del-proyecto
```

## Registrar un usuario `/create - POST`

| Parámetro | Tipo    | Requerido | Descripción                     |
| :-------- | :------ | :-------- | :------------------------------ |
| `name`    | string  | Sí        | Nombre del usuario              |
| `email`   | email   | Sí        | Correo electrónico del usuario  |
| `password`| string  | Sí        | Contraseña del usuario          |

**Respuestas:**

| Código | Descripción            | Respuesta - JSON                            |
| :----- | :--------------------- | :------------------------------------------- |
| 201    | Registro exitoso       | `{"status": true, "message": "User created successfully","token": "token_generado"}`    |
| 500    | Error de validación    | `{"status": false, "message": "getMessage"}`                                            |

## Login de un usuario `/login - POST`

| Parámetro | Tipo    | Requerido | Descripción                     |
| :-------- | :------ | :-------- | :------------------------------ |
| `email`   | email   | Sí        | Correo electrónico del usuario  |
| `password`| string  | Sí        | Contraseña del usuario          |

**Respuestas:**

| Código | Descripción            | Respuesta - JSON                            |
| :----- | :--------------------- | :------------------------------------------- |
| 200    | Registro exitoso       | `{"status": true, "message": "User logged in successfully","token": "token_generado"}`  |
| 401    | Error de validación    | `{"status": false, "message": "Invalid credentials"}`                                   |

