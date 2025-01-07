# API de Autenticación Laravel 11

## Preparar el proyecto con Laravel 11
Instala Laravel con el siguiente comando
```bash
laravel new nombre-del-proyecto
```

## Preparar la base de datos a utilizar en el archivo .env
DB_CONNECTION=mysql
DB_HOST=`ruta-host`
DB_PORT=`puerto`
DB_DATABASE=`nombre-base-de-datos`
DB_USERNAME=`usuario`
DB_PASSWORD=`password`

APP_KEY=`puedes-usar-el-comando-de-artisan`

```bash
php artisan key:generate
```

## Nota.
No olvides realizar la migración a la base de datos, usa el comando artisan:

```bash
php artisan migrate
```

## Crea el controlador AuthController.php
Utiliza el comando artisan make:controller

```bash
php artisan make:controller AuthController
```

## Crea los Requests CreateUserRequest.php y LoginRequest.php
Utiliza el comando artisan make:request

```bash
php artisan make:request CreateUserRequest
```
```bash
php artisan make:request LoginRequest
```

## Nota.
No olvides usar-importar los archivos:
    * `use App\Http\Requests\CreateUserRequest;`
    * `use App\Http\Requests\LoginRequest;`
    * `use App\Models\User;`
    * `use Illuminate\Http\JsonResponse;`
    * `use Illuminate\Support\Facades\Auth;`
    * `use Illuminate\Support\Facades\Hash;`

## Preparar la ruta api.php
En caso de que no tengas el archivo api.php en routes, usa el comando artisan: install:api y realiza la migracion correspondiente

```bash
php artisan install:api
```

## Nota.
Al crear las rutas no olvides usar-importar los archivos:
    * `use App\Http\Controllers\AuthController;`

## Autenticación con Sanctum
    * En caso de no tener sanctum instalado utiliza el comando de composer.

    ```bash
    composer require laravel/sanctum
    ```

    * Publicar la configuración y las migraciones de Sanctum:
    Ejecuta los siguientes comandos:

    ```bash
    php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
    php artisan migrate
    ```

    El primer comando publica el archivo de configuración de Sanctum `(config/sanctum.php)` y el segundo ejecuta las migraciones que crea la tabla `personal_access_tokens` en tu base de datos, que es donde se almacenan los tokens de Sanctum.

    * Agregar el trait `HasApiTokens` al modelo `User`:

    Abre tu modelo `User` (generalmente en `app/Models/User.php`) y agrega el trait `HasApiTokens`:

    ```php
    <?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Foundation\Auth\User as Authenticatable;
    use Illuminate\Notifications\Notifiable;
    use Laravel\Sanctum\HasApiTokens; // Importa el trait

    class User extends Authenticatable
    {
        use HasApiTokens, HasFactory, Notifiable; // Usa el trait
        // ... (resto del código del modelo)
    }
    ```

    * Configurar el middleware `EnsureFrontendRequestsAreStateful` en caso de que uses la api en un dominio diferente:
    Este middleware es crucial para que Sanctum funcione correctamente, especialmente si tu frontend está en un dominio diferente al de tu API. Asegúrate de que esté configurado en el grupo de middleware `api` en bootstrap/app.php:

    ```php
    protected $middlewareGroups = [
        'api' => [
            \App\Http\Middleware\EnsureFrontendRequestsAreStateful::class, // Asegúrate de que esté aquí
            'throttle:api',
        ],
        'web' => [
            // ... Grupo de rutas
        ],
    ];
    ```

    * Limpiar la caché
    Después de realizar estos cambios, es una buena práctica limpiar la caché de la aplicación:

    ```bash
    php artisan cache:clear
    php artisan config:clear
    php artisan route:clear
    php artisan view:clear
    ```

    * Reiniciar el Servidor de Desarrollo: `php artisan serve`.

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

