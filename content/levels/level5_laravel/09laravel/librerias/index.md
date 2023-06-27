---
title: "Model y Migraciones / Modelos con Propiedades"
date: 2023-03-12T11:50:42-06:00
draft: false
showPagination: false
---
# Route Con Get Laravel
En Laravel, puedes definir rutas GET utilizando el método `get` del objeto `Route`. Las rutas GET se utilizan para manejar las solicitudes HTTP GET que llegan a tu aplicación. Puedes especificar una URL y una acción que se ejecutará cuando se acceda a esa URL.

Aquí tienes un ejemplo básico de cómo definir una ruta GET en Laravel:

```php
use Illuminate\Support\Facades\Route;

Route::get('/users', function () {
    // Lógica para manejar la solicitud GET a /users

    // Devolver una vista o una respuesta
    return view('users.index');
});
```

En este ejemplo, estamos definiendo una ruta GET en la URL `/users`. Cuando se acceda a esta URL, se ejecutará la función anónima pasada como segundo argumento de `get()`. Dentro de esta función, puedes realizar cualquier lógica necesaria, como interactuar con modelos, obtener datos de la base de datos o ejecutar servicios. Finalmente, puedes devolver una vista o una respuesta al usuario.

También puedes utilizar un controlador para manejar la acción de la ruta en lugar de una función anónima. Esto ayuda a mantener tu código más estructurado y permite una mejor separación de la lógica de la ruta y la lógica de la aplicación. Aquí tienes un ejemplo:

```php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/users', [UserController::class, 'index']);
```

En este caso, estamos usando el controlador `UserController` y el método `index()` para manejar la solicitud GET a `/users`. El controlador y el método se pasan como un array, donde el primer elemento es la clase del controlador y el segundo elemento es el nombre del método.

Puedes definir tantas rutas GET como necesites en tu aplicación Laravel, y cada una puede tener su propia lógica y acción específicas. Esto te permite crear una API RESTful o construir diferentes vistas y páginas para tu aplicación web.