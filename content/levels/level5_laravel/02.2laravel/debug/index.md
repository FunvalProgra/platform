---
title: "Migraciones"
date: 2023-03-12T11:49:44-06:00
draft: false
showPagination: false
---
# Migraciones
En Laravel, las migraciones son una forma conveniente y controlada de administrar los cambios en la estructura de la base de datos. Las migraciones te permiten crear, modificar o eliminar tablas y columnas de manera fácil y consistente, y también te ayudan a colaborar en equipo y mantener un historial de versiones de tu esquema de base de datos.

A continuación, te mostraré los pasos básicos para trabajar con migraciones en Laravel:

1. **Crear una migración:** Puedes generar una nueva migración utilizando el comando Artisan `make:migration`. Por ejemplo, para crear una migración para crear una nueva tabla, puedes ejecutar el siguiente comando en tu terminal:

   ```shell
   php artisan make:migration create_nueva_tabla --create=nombre_tabla
   ```

   Esto creará un nuevo archivo de migración en el directorio `database/migrations`.

2. **Definir la estructura de la tabla:** Abre el archivo de migración recién creado y utiliza los métodos de la clase `Schema` para definir la estructura de la tabla. Por ejemplo, puedes utilizar métodos como `create()`, `addColumn()`, `dropColumn()`, etc. para especificar las columnas y las modificaciones de la tabla.

   ```php
   <?php

   use Illuminate\Database\Migrations\Migration;
   use Illuminate\Database\Schema\Blueprint;
   use Illuminate\Support\Facades\Schema;

   class CreateNuevaTabla extends Migration
   {
       public function up()
       {
           Schema::create('nombre_tabla', function (Blueprint $table) {
               $table->id();
               $table->string('nombre');
               $table->integer('edad');
               $table->timestamps();
           });
       }

       public function down()
       {
           Schema::dropIfExists('nombre_tabla');
       }
   }
   ```

   En este ejemplo, se crea una nueva tabla llamada `nombre_tabla` con las columnas `id`, `nombre`, `edad` y las columnas `timestamps` para registrar la fecha y hora de creación y actualización de los registros.

3. **Ejecutar las migraciones:** Una vez que hayas definido la migración, puedes ejecutarla para aplicar los cambios en la base de datos. Utiliza el comando Artisan `migrate` para ejecutar todas las migraciones pendientes:

   ```shell
   php artisan migrate
   ```

   Esto ejecutará todas las migraciones que aún no se hayan aplicado.

4. **Rollback y reset de migraciones:** Si necesitas revertir o deshacer los cambios realizados por una o todas las migraciones, puedes utilizar los comandos `migrate:rollback` y `migrate:reset` respectivamente.

   ```shell
   php artisan migrate:rollback
   ```

   Este comando deshará la última migración.

   ```shell
   php artisan migrate:reset
   ```

   Este comando deshará todas las migraciones y eliminará todas las tablas de la base de datos.

Estos son los conceptos básicos para trabajar con migraciones en Laravel. Las migraciones te permiten mantener un control y seguimiento de los cambios en la estructura de la base de datos de tu aplicación, facilitando el trabajo en equipo y la gestión del esquema de la base de datos.

# AppService Provider Laravel
El archivo `AppServiceProvider` en Laravel es una clase que se encuentra en el directorio `app/Providers` y proporciona un punto de entrada para configurar y registrar enlaces de servicio en la aplicación. Es una de las clases de proveedores incluidas por defecto en Laravel y juega un papel importante en la configuración inicial de la aplicación.

El `AppServiceProvider` tiene dos métodos principales que puedes utilizar:

1. **`register()`:** Este método se utiliza para registrar enlaces de servicio y realizar enlaces de dependencia en la aplicación. Puedes utilizarlo para enlazar interfaces con implementaciones concretas de clases.

   ```php
   public function register()
   {
       $this->app->bind(Interface::class, ConcreteClass::class);
   }
   ```

   En este ejemplo, se registra una implementación concreta `ConcreteClass` para la interfaz `Interface`. Esto permite que en otros lugares de la aplicación se inyecte automáticamente la instancia de `ConcreteClass` cuando se solicite una instancia de `Interface`.

2. **`boot()`:** Este método se ejecuta después de que todos los servicios se hayan registrado y está destinado a la configuración adicional de la aplicación. Puedes utilizarlo para definir rutas, vistas, eventos, enlaces de base de datos, etc.

   ```php
   public function boot()
   {
       Route::middleware('web')
           ->namespace('App\Http\Controllers')
           ->group(function () {
               Route::get('/', 'HomeController@index');
           });
   }
   ```

   En este ejemplo, se define una ruta para la página de inicio de la aplicación. La función `group()` permite agrupar varias rutas bajo un middleware y un espacio de nombres específicos.

El `AppServiceProvider` también es un buen lugar para definir enlaces de base de datos, configuraciones de cache, configuraciones de log, eventos, etc. Puedes personalizar este proveedor según tus necesidades y agregar más lógica en los métodos `register()` y `boot()`.

Es importante destacar que el `AppServiceProvider` es cargado automáticamente por Laravel durante el inicio de la aplicación, por lo que no es necesario registrar manualmente este proveedor en el archivo `config/app.php`.

Recuerda que, además del `AppServiceProvider`, Laravel también incluye otros proveedores útiles como `RouteServiceProvider`, `EventServiceProvider`, `AuthServiceProvider`, entre otros, que te permiten personalizar y configurar diferentes aspectos de tu aplicación.

# Middleware
En Laravel, el middleware es una capa de software que se encuentra entre la solicitud entrante y la respuesta enviada por la aplicación. Actúa como un filtro o una tubería a través de la cual pasan las solicitudes antes de ser procesadas por la aplicación. El middleware permite realizar acciones específicas en una solicitud, como autenticación, validación, registro de actividad, etc., antes de que la solicitud llegue a su destino final.

Laravel incluye varios middlewares predefinidos, como el middleware de autenticación, el middleware de verificación CSRF (Cross-Site Request Forgery), el middleware de enrutamiento, entre otros. Además, puedes crear tus propios middlewares personalizados según tus necesidades.

A continuación, te mostraré los pasos básicos para trabajar con middleware en Laravel:

1. **Creación de un middleware:** Puedes generar un nuevo middleware utilizando el comando Artisan `make:middleware`. Por ejemplo, para crear un middleware llamado `MiMiddleware`, ejecuta el siguiente comando en tu terminal:

   ```shell
   php artisan make:middleware MiMiddleware
   ```

   Esto creará un nuevo archivo de middleware en el directorio `app/Http/Middleware`.

2. **Definición del middleware:** Abre el archivo de middleware recién creado y, en el método `handle()`, implementa la lógica que deseas ejecutar en cada solicitud que pase a través de este middleware. Puedes realizar acciones como verificar la autenticación del usuario, validar datos, agregar encabezados personalizados, etc.

   ```php
   <?php

   namespace App\Http\Middleware;

   use Closure;

   class MiMiddleware
   {
       public function handle($request, Closure $next)
       {
           // Lógica del middleware

           return $next($request);
       }
   }
   ```

   El método `handle()` recibe la solicitud actual y una clausura `$next`, que representa la siguiente capa de middleware o el controlador final. Debes asegurarte de llamar a la clausura `$next` para permitir que la solicitud continúe su flujo normal.

3. **Registro del middleware:** Para que Laravel utilice el middleware, debes registrarlo en la aplicación. Puedes hacerlo en el archivo `app/Http/Kernel.php`. En este archivo, encontrarás un arreglo llamado `$middleware` que contiene la lista de middlewares globales que se aplicarán a todas las solicitudes.

   ```php
   protected $middleware = [
       // ...
       \App\Http\Middleware\MiMiddleware::class,
   ];
   ```

   Agrega la referencia al middleware recién creado en este arreglo. Ten en cuenta que la posición en el arreglo determina el orden de ejecución de los middlewares. Si necesitas aplicar el middleware solo a rutas específicas, puedes utilizar el middleware de ruta en lugar del middleware global.

4. **Asignación del middleware a rutas:** Puedes asignar el middleware a rutas específicas en el archivo `routes/web.php` o `routes/api.php`. Puedes hacerlo utilizando los métodos `middleware()` o `group()`.

   ```php
   Route::get('/ruta', function () {
       // Lógica de la ruta
   })->middleware('MiMiddleware');
   ```

   En este ejemplo, el middleware `MiMiddleware` se aplicará solo a la ruta `/ruta`.

Estos son los pasos básicos para trabajar con middleware en Laravel. El middleware te permite realizar tareas específicas en las solicitudes antes de que lleguen a su destino final,

# Controller
En Laravel, los controladores son clases que se utilizan para agrupar la lógica relacionada con la manipulación de solicitudes HTTP. Los controladores manejan las solicitudes entrantes, procesan los datos y devuelven una respuesta al usuario. Proporcionan una forma estructurada de separar la lógica de la aplicación de las rutas y las vistas.

Aquí hay un ejemplo básico de cómo crear un controlador en Laravel:

1. Generar un controlador:
   Puedes generar un nuevo controlador utilizando el comando `make:controller` de Artisan. Por ejemplo, para crear un controlador llamado `UserController`, ejecuta el siguiente comando en tu terminal:
   
   ```
   php artisan make:controller UserController
   ```

   Esto generará un archivo `UserController.php` en el directorio `app/Http/Controllers` con una estructura básica de controlador.

2. Definir métodos de acción:
   En el archivo `UserController.php`, encontrarás un método de acción por defecto llamado `__invoke()`. Puedes definir otros métodos de acción dentro del controlador para manejar diferentes rutas o acciones. Por ejemplo, puedes agregar un método `index()` para mostrar una lista de usuarios:

   ```php
   public function index()
   {
       // Lógica para obtener la lista de usuarios
       $users = User::all();
       
       // Retornar una vista con los datos
       return view('users.index', ['users' => $users]);
   }
   ```

3. Enrutamiento:
   Después de definir los métodos de acción en el controlador, debes definir las rutas correspondientes en el archivo `routes/web.php` o `routes/api.php`, dependiendo del tipo de ruta que necesites. Puedes hacer esto utilizando el método `Route::` y el nombre del controlador y el método de acción. Por ejemplo:

   ```php
   Route::get('/users', 'UserController@index');
   ```

   Esto establecerá una ruta GET `/users` que será manejada por el método `index()` del controlador `UserController`.

4. Inyección de dependencias:
   Los controladores de Laravel también admiten la inyección de dependencias. Puedes declarar dependencias en el constructor del controlador y Laravel automáticamente las inyectará cuando se instancie el controlador. Por ejemplo:

   ```php
   use App\Services\UserService;
   
   class UserController extends Controller
   {
       protected $userService;
       
       public function __construct(UserService $userService)
       {
           $this->userService = $userService;
       }
       
       // ...
   }
   ```

   En este ejemplo, se inyecta la dependencia `UserService` en el controlador `UserController` a través del constructor.

5. Responder a las solicitudes:
   Los métodos de acción de un controlador pueden realizar cualquier lógica necesaria, como interactuar con modelos, realizar consultas a la base de datos, ejecutar servicios, etc. Una vez que se complete la lógica, puedes devolver una respuesta al usuario. Esto puede ser una vista, una respuesta JSON, una redirección, entre otros.

   Por ejemplo, para devolver una vista desde un método de acción:

   ```php
   public function index()
   {
       $users = User::all();
       return view('users.index', ['users' => $users]);
   }
   ```

   En este caso, estamos devolviendo la vista `users.index` y pasando la variable `$users` como datos a

 la vista.

Los controladores en Laravel juegan un papel central en la estructura MVC (Modelo-Vista-Controlador) del framework. Permiten mantener la lógica de la aplicación separada de las rutas y las vistas, promoviendo así la reutilización del código y un mejor mantenimiento.


#  Laravel Migraciones
 {{< youtube  LkSeELpdj4k >}}
#  Laravel MiMiddleware
 {{< youtube  P4ehlI6btNQ >}}