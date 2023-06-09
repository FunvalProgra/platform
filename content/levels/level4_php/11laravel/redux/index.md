---
title: "CRUD"
date: 2023-03-12T11:52:06-06:00
draft: false
showPagination: false
---

# CRUD LARAVEL 4
paso a paso completo para crear un CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Laravel:

Paso 1: Configurar un proyecto Laravel
Comienza por configurar un nuevo proyecto Laravel utilizando el comando `composer create-project`. Abre una terminal y ejecuta el siguiente comando:

```
composer create-project --prefer-dist laravel/laravel nombre-proyecto
```

Esto creará un nuevo proyecto Laravel en un directorio llamado "nombre-proyecto".

Paso 2: Configurar la base de datos
Accede al archivo `.env` en la raíz de tu proyecto y configura la conexión a la base de datos. Asegúrate de tener una base de datos creada y configurada correctamente en tu entorno de desarrollo.

Paso 3: Crear una migración y modelo
Utiliza las migraciones de Laravel para crear la estructura de la base de datos. Ejecuta el siguiente comando en la terminal:

```
php artisan make:migration create_nombre_tabla_table --create=nombre_tabla
```

Esto creará un archivo de migración en el directorio `database/migrations`. Abre el archivo de migración y define los campos de la tabla.

Una vez que hayas creado la migración, ejecuta el siguiente comando para migrar la tabla a la base de datos:

```
php artisan migrate
```

Después de crear la migración, crea un modelo correspondiente utilizando el comando `make:model`:

```
php artisan make:model NombreModelo
```

Esto generará un archivo de modelo en el directorio `app/Models`.

Paso 4: Crear rutas y controladores
Define las rutas y los controladores para tu CRUD. Abre el archivo `routes/web.php` y define las rutas del CRUD. Puedes utilizar los métodos `Route::get()`, `Route::post()`, `Route::put()`, `Route::delete()`, entre otros, para definir las diferentes rutas y los controladores que manejarán esas rutas.

Crea un controlador utilizando el comando `make:controller`:

```
php artisan make:controller NombreControlador --resource
```

Esto generará un archivo de controlador en el directorio `app/Http/Controllers` con los métodos CRUD predefinidos.

Paso 5: Implementar la lógica del CRUD
En el controlador, implementa la lógica para cada uno de los métodos CRUD. Por ejemplo, en el método `index()`, puedes obtener todos los registros de la base de datos utilizando el modelo correspondiente y devolverlos a la vista. En el método `store()`, puedes crear un nuevo registro en la base de datos utilizando los datos recibidos del formulario.

Utiliza los métodos proporcionados por Laravel en el controlador y el modelo para realizar operaciones de base de datos, como `all()`, `find()`, `create()`, `update()`, `delete()`, etc.

Paso 6: Crear vistas
Crea las vistas correspondientes para tu CRUD en el directorio `resources/views`. Puedes crear una vista para mostrar todos los registros, una vista para mostrar un formulario de creación, una vista para mostrar un formulario de edición, y así sucesivamente.

Dentro de las vistas, utiliza la sintaxis de Blade de Laravel para mostrar los datos, crear formularios, etc.

Paso 7: Asociar rutas a controladores
Asocia las rutas definidas en el paso 4 a los métodos del controlador correspondiente. Ab


 # Video Crud con Laravel
{{< youtube  TA9U517ISOo >}}
