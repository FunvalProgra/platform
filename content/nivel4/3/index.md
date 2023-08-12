---
title: "Intro"
date: 2023-03-09T10:55:15-06:00
draft: false
showPagination: false
---
# Explorando Eloquent Models, Seeders y Factories en Laravel

**Resumen:** En el emocionante mundo del desarrollo web con Laravel, el manejo de bases de datos es fundamental. Eloquent Models, Seeders y Factories son componentes esenciales que permiten a los desarrolladores crear, poblar y manipular datos de manera eficiente en aplicaciones Laravel. Este artículo tiene como objetivo proporcionar a  una comprensión sólida y práctica de Eloquent Models, Seeders y Factories, a través de ejemplos concretos y ejercicios desafiantes para practicar durante todo el día.

## 1. Introducción a Eloquent Models, Seeders y Factories

Eloquent es el ORM (Object-Relational Mapping) incorporado en Laravel, que simplifica la interacción con bases de datos al permitir a los desarrolladores trabajar con modelos y objetos en lugar de consultas SQL directas. Seeders y Factories son herramientas que complementan Eloquent al permitir la generación y el llenado de datos de manera automatizada.

## 2. Eloquent Models

Los Eloquent Models son representaciones de tablas de bases de datos en forma de objetos. A través de ellos, los desarrolladores pueden interactuar con la base de datos de manera orientada a objetos. Veamos cómo crear y utilizar un Eloquent Model:

### 2.1 Creación de un Eloquent Model

```bash
php artisan make:model Tarea
```

### 2.2 Definición de un Eloquent Model

```php
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    protected $fillable = ['nombre', 'descripcion', 'completada'];
}
```

### 2.3 Uso de Eloquent Model

```php
// Crear una nueva tarea
$tarea = new Tarea([
    'nombre' => 'Realizar presentación',
    'descripcion' => 'Preparar la presentación para el seminario.',
    'completada' => false,
]);

$tarea->save();

// Obtener todas las tareas completadas
$tareasCompletadas = Tarea::where('completada', true)->get();
```

## 3. Seeders

Los Seeders permiten la inserción masiva de datos de prueba en la base de datos. Son útiles para poblar la base de datos con información falsa para pruebas y desarrollo:

### 3.1 Creación de un Seeder

```bash
php artisan make:seeder TareasTableSeeder
```

### 3.2 Definición de un Seeder

```php
use Illuminate\Database\Seeder;

class TareasTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Tarea::class, 10)->create();
    }
}
```

### 3.3 Ejecución de un Seeder

```bash
php artisan db:seed --class=TareasTableSeeder
```

## 4. Factories

Las Factories son generadores de datos que permiten crear registros de prueba de manera controlada. Son especialmente útiles para crear datos falsos coherentes y diversificados:

### 4.1 Creación de una Factory

```bash
php artisan make:factory TareaFactory
```

### 4.2 Definición de una Factory

```php
use Illuminate\Database\Eloquent\Factories\Factory;

class TareaFactory extends Factory
{
    protected $model = Tarea::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->sentence,
            'descripcion' => $this->faker->paragraph,
            'completada' => $this->faker->boolean,
        ];
    }
}
```

### 4.3 Uso de una Factory

```php
// Crear una sola tarea utilizando la Factory
$tarea = Tarea::factory()->create();

// Crear múltiples tareas utilizando la Factory
$tareas = Tarea::factory()->count(5)->create();
```
## Recursos

{{< youtube vEY-b6-2cao >}}

Base de datos

{{< youtube C91FOKq7v-k >}}

{{< youtube zNTF3U2Hsq0 >}}

{{< youtube lLyWpWA8J0s >}}

Migraciones

https://laravel.com/docs/10.x/database

https://laravel.com/docs/10.x/migrations