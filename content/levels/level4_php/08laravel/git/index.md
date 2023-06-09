---
title: "Laravel middlewares"
date: 2023-03-12T11:50:06-06:00
draft: false
showPagination: false
---
 
# Laravel middlewares 1

En Laravel, los middlewares son componentes clave que permiten agregar capas de lógica entre las solicitudes entrantes y las respuestas salientes de una aplicación. Proporcionan una forma conveniente de filtrar, modificar o manipular las solicitudes HTTP antes de que sean manejadas por los controladores y de procesar las respuestas antes de que sean enviadas de vuelta al cliente.

Los middlewares en Laravel son clases que implementan la interfaz `Middleware` o la interfaz `MiddlewareInterface`, dependiendo de la versión de Laravel que estés utilizando. Estas clases tienen un método principal llamado `handle` que acepta la solicitud entrante y un cierre de argumento de siguiente paso (`$next`), que se invoca para pasar la solicitud al siguiente middleware o al controlador final.

Puedes crear tus propios middlewares en Laravel utilizando el comando de Artisan `make:middleware`. Por ejemplo, si deseas crear un middleware llamado `VerificarEdadMiddleware`, puedes ejecutar el siguiente comando en la línea de comandos:

```
php artisan make:middleware VerificarEdadMiddleware
```

Esto generará una clase de middleware en la ubicación `app/Http/Middleware/VerificarEdadMiddleware.php`. En el método `handle` de esta clase, puedes escribir la lógica que deseas aplicar antes de pasar la solicitud al siguiente paso o incluso abortar la solicitud si se cumplen ciertas condiciones.

Una vez que hayas creado un middleware, puedes utilizarlo en tus rutas o en grupos de rutas para aplicar la lógica específica del middleware a esas rutas. Puedes hacerlo utilizando el método `middleware` en tus definiciones de ruta o utilizando el middleware global en el archivo `app/Http/Kernel.php`.

Por ejemplo, para aplicar el middleware `VerificarEdadMiddleware` a una ruta, puedes hacer lo siguiente:

```php
Route::get('/perfil', function () {
    //
})->middleware('VerificarEdadMiddleware');
```

Esto asegurará que antes de que se ejecute la función anónima de la ruta, la solicitud pasará por el middleware `VerificarEdadMiddleware` y se ejecutará la lógica definida en su método `handle`.

Además de los middlewares personalizados, Laravel también incluye una serie de middlewares integrados que realizan tareas comunes, como autenticación, verificación CSRF, etc. Estos middlewares se pueden encontrar en el directorio `app/Http/Middleware` y se pueden utilizar de manera similar a los middlewares personalizados.

En resumen, los middlewares en Laravel son componentes flexibles que te permiten agregar y aplicar lógica de procesamiento a las solicitudes y respuestas HTTP en tu aplicación. Son una parte fundamental del flujo de solicitud y te brindan un gran control sobre el manejo de las solicitudes entrantes y las respuestas salientes.

# Clases de middlewares
En Laravel, existen diferentes clases de middlewares disponibles que puedes utilizar según tus necesidades. Estas clases de middlewares están destinadas a realizar tareas comunes, como la autenticación, la verificación CSRF, la comprobación de roles y permisos, y más. A continuación, se presentan algunas de las clases de middlewares integrados en Laravel:

1. `Authenticate`: Este middleware se utiliza para autenticar a los usuarios. Verifica si el usuario ha iniciado sesión antes de permitir el acceso a rutas o controladores específicos.

2. `Authorize`: Este middleware se utiliza para autorizar a los usuarios. Verifica si el usuario tiene los roles y permisos necesarios para acceder a una determinada ruta o controlador.

3. `EncryptCookies`: Este middleware se encarga de cifrar las cookies de la aplicación para garantizar la seguridad de los datos almacenados en ellas.

4. `VerifyCsrfToken`: Este middleware protege tu aplicación contra ataques CSRF (Cross-Site Request Forgery) al verificar si el token CSRF en la solicitud coincide con el token almacenado en la sesión.

5. `TrimStrings`: Este middleware se utiliza para recortar automáticamente los espacios en blanco de las cadenas de texto en las solicitudes entrantes. Es útil para mantener la consistencia en los datos recibidos.

6. `RedirectIfAuthenticated`: Este middleware redirige automáticamente a los usuarios autenticados a una ruta específica, como la página de inicio, para evitar que accedan a rutas de autenticación como el formulario de inicio de sesión o registro.

7. `ThrottleRequests`: Este middleware limita la cantidad de solicitudes que un usuario puede hacer en un período de tiempo determinado. Es útil para prevenir ataques de fuerza bruta o solicitudes excesivas a la aplicación.

Estas son solo algunas de las clases de middlewares integrados en Laravel. Puedes encontrar más clases de middlewares en el directorio `app/Http/Middleware` de tu proyecto Laravel. Además, puedes crear tus propias clases de middlewares personalizados para adaptarlos a tus necesidades específicas utilizando el comando `make:middleware` de Artisan.


#  Laravel MiMiddleware
{{< youtube  X-z2hKo7GFY&t=29s >}}
