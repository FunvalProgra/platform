---
title: "Model y Migraciones / Modelos con Propiedades"
date: 2023-03-12T11:50:42-06:00
draft: false
showPagination: false
---

# Modelos y Migraciones en Laravel y la definición de propiedades en los modelos.

Introducción:
En Laravel, los modelos y las migraciones son componentes fundamentales para trabajar con bases de datos. Los modelos representan las entidades de tu aplicación y las migraciones se utilizan para definir y modificar la estructura de la base de datos. En esta lección, exploraremos cómo crear modelos y migraciones en Laravel, así como cómo definir propiedades en los modelos para interactuar con la base de datos.

1. Crear modelos y migraciones en Laravel:
- Paso 1: Asegúrate de tener Laravel instalado correctamente en tu proyecto.

- Paso 2: Para crear un modelo y su migración asociada, puedes utilizar el comando `make:model` de Artisan. Por ejemplo:
```bash
php artisan make:model NombreDelModelo -m
```
Esto generará un nuevo archivo de modelo en el directorio `app/Models` y una migración en el directorio `database/migrations`.

- Paso 3: Abre el archivo de migración recién creado y define la estructura de la tabla de la base de datos utilizando los métodos proporcionados por Laravel, como `create`, `table`, `string`, `integer`, etc. Por ejemplo:
```php
public function up()
{
    Schema::create('nombre_de_la_tabla', function (Blueprint $table) {
        $table->id();
        $table->string('nombre_columna');
        $table->timestamps();
    });
}
```
Aquí, se define una tabla con una columna de ID, una columna de nombre y columnas de timestamps para el registro de la creación y actualización de los registros.

- Paso 4: Ejecuta la migración para crear la tabla en la base de datos utilizando el comando `migrate` de Artisan. Por ejemplo:
```bash
php artisan migrate
```
Esto creará la tabla definida en la migración en tu base de datos.

2. Definición de propiedades en los modelos:
- Paso 1: Abre el archivo del modelo creado previamente en el directorio `app/Models`. Dentro de la clase del modelo, puedes definir las propiedades que representarán las columnas de la tabla de la base de datos. Por ejemplo:
```php
class NombreDelModelo extends Model
{
    protected $table = 'nombre_de_la_tabla';

    protected $fillable = ['nombre_columna'];

    // Otros métodos y relaciones del modelo
}
```
Aquí, `$table` indica el nombre de la tabla asociada al modelo y `$fillable` especifica las columnas que se pueden asignar masivamente.

- Paso 2: Utiliza las propiedades definidas en los modelos para interactuar con la base de datos. Por ejemplo:
```php
// Crear un nuevo registro
$registro = NombreDelModelo::create(['nombre_columna' => 'Valor']);

// Obtener todos los registros
$registros = NombreDelModelo::all();

// Obtener un registro por su ID
$registro = NombreDelModelo::find($id);

// Actualizar un registro
$registro->nombre_columna = 'Nuevo valor';
$registro->save();

// Eliminar un registro
$registro->delete();
```
Aquí, se muestran ejemplos básicos de cómo crear, obtener, actualizar y eliminar registros utilizando el modelo.

Conclusión:
En Laravel, los modelos y las migraciones son componentes clave para trabajar con bases de datos. Al crear modelos y migraciones, puedes definir la estructura de la base de datos y utilizar propiedades en los modelos para interactuar con los registros de la tabla correspondiente. Esto facilita la manipulación de los datos de la base de datos y ofrece una capa de abstracción para trabajar con las entidades de tu aplicación de manera eficiente y segura.