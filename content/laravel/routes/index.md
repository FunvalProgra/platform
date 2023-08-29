---
title: "Routes (rutas) en Laravel"
date: 2023-08-01T09:06:02-05:00
draft: false
showPagination: false
---

El enrutamiento es una parte esencial de cualquier aplicación web, ya que permite a los desarrolladores dirigir las solicitudes entrantes a las acciones correspondientes del controlador. Laravel, un framework de PHP ampliamente utilizado, ofrece un sistema de enrutamiento flexible y potente conocido como "rutas".

## Concepto de Rutas en Laravel

Las rutas en Laravel son una forma de asociar una URL específica con una acción o función dentro de la aplicación web. Cuando un usuario realiza una solicitud HTTP (GET, POST, PUT, DELETE, etc.) a una URL específica, el sistema de enrutamiento de Laravel determina qué acción del controlador debe ejecutarse para manejar esa solicitud. Esto permite separar la lógica del enrutamiento de la lógica de la aplicación y facilita la organización y el mantenimiento del código.

## Definición de Rutas:

En Laravel, las rutas se definen principalmente en dos archivos: `routes/web.php` y `routes/api.php`. El archivo `web.php` se utiliza para definir rutas que responden a solicitudes HTTP enviadas por navegadores web, mientras que `api.php` se utiliza para definir rutas que responden a solicitudes de API.

Para definir una ruta básica en Laravel, se utiliza el método `Route::` seguido del verbo HTTP correspondiente (por ejemplo, `get`, `post`, `put`, `delete`, etc.) y el URI que debe responder. A continuación, se proporciona un ejemplo simple:

```php
// routes/web.php
Route::get('/inicio', function () {
    return view('welcome');
});
```

En este ejemplo, cuando un usuario accede a `/inici`o en su navegador, se ejecutará la función anónima que devuelve la vista `welcome.blade.php`.

## Parámetros en las Rutas

Las rutas en Laravel pueden contener parámetros para capturar valores variables de la URL. Estos parámetros se especifican entre llaves `{}` en la definición de la ruta. Los valores capturados se pasarán como argumentos a la función de la ruta. Aquí hay un ejemplo de ruta con parámetro:

```php
// routes/web.php
Route::get('/usuario/{id}', function ($id) {
    return "ID del usuario: " . $id;
});
```

Cuando un usuario accede a `/usuario/123`, el valor `123` será capturado y pasado como argumento a la función anónima. La respuesta será "ID del usuario: 123".

## Agrupación de Rutas

La agrupación de rutas en Laravel permite aplicar filtros y middleware a un conjunto de rutas relacionadas. Esto ayuda a mantener un código más organizado y a reutilizar lógica en varias rutas. Para agrupar rutas, se utiliza el método `Route::group()`. Un ejemplo de agrupación de rutas con middleware sería el siguiente:

```php
// routes/web.php
Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', 'DashboardController@index');
    Route::get('/perfil', 'PerfilController@index');
    // Otras rutas que requieran autenticación
});
```

En este caso, todas las rutas dentro del grupo requerirán que el usuario esté autenticado, ya que el middleware `auth` se ejecutará antes de manejar la solicitud en cada ruta.

## Rutas con Nombre y URL Amigables

Las rutas en Laravel se pueden nombrar para facilitar su referencia en diferentes partes de la aplicación, como en la generación de enlaces. Para asignar un nombre a una ruta, se utiliza el método `name()`. Un ejemplo sería:

```php
// routes/web.php
Route::get('/articulo/{id}', function ($id) {
    return "Mostrar artículo con ID: " . $id;
})->name('articulo.show');
```

Luego, en otras partes del código, se puede hacer referencia a esta ruta utilizando el nombre:

```php
<a href="{{ route('articulo.show', ['id' => 123]) }}">Ver artículo</a
```

Además, Laravel permite generar URLs amigables y flexibles utilizando rutas con parámetros opcionales y restricciones. Esto se puede lograr utilizando expresiones regulares o claves que definen el formato del parámetro.

## Rutas y Seguridad

Para garantizar la seguridad en las rutas, Laravel ofrece una variedad de herramientas, como protección contra CSRF (Cross-Site Request Forgery) y autenticación integrada. Laravel incluye middleware de autenticación y autorización que se pueden aplicar a rutas específicas para asegurarse de que solo los usuarios autorizados puedan acceder a determinadas partes de la aplicación.

## Video de refuerzo

{{< youtube PDbOsGlCf7o >}}
