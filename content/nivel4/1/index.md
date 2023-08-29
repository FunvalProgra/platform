---
title: "Introducción a Laravel"
date: 2023-03-09T10:55:15-06:00
draft: false
showPagination: false
---

**Resumen:** En el mundo actual del desarrollo web, es esencial que de informática adquieran habilidades prácticas en marcos de trabajo modernos. Laravel, un popular marco de trabajo de código abierto basado en PHP, ha ganado reconocimiento por su elegante sintaxis, amplias características y comunidad activa. Este artículo tiene como objetivo proporcionar una introducción práctica a Laravel para estudiantes, permitiéndoles practicar y desarrollar sus habilidades durante todo el día. Exploraremos los conceptos fundamentales de Laravel a través de ejemplos concretos y ejercicios prácticos.

## 1. Introducción a Laravel

Laravel es un marco de trabajo de desarrollo web que sigue el patrón de arquitectura Modelo-Vista-Controlador (MVC). Su diseño orientado a la simplicidad y la legibilidad del código ha llevado a su popularidad en la comunidad de desarrollo. Antes de sumergirnos en ejemplos prácticos, es crucial comprender algunos conceptos clave:

### 1.1 Modelo-Vista-Controlador (MVC)

MVC es un patrón de diseño arquitectónico que separa la aplicación en tres componentes principales:

- **Modelo:** Representa la estructura y lógica de los datos de la aplicación.
- **Vista:** Maneja la presentación y la interfaz de usuario.
- **Controlador:** Gestiona las solicitudes del usuario y coordina las interacciones entre el Modelo y la Vista.

### 1.2 Composición de Laravel

Laravel se basa en una variedad de componentes que simplifican el desarrollo web, como el enrutamiento, las migraciones de base de datos, el sistema de plantillas Blade y el manejo de solicitudes HTTP.

## 2. Configuración del Entorno

Antes de comenzar a trabajar con Laravel, es esencial configurar adecuadamente el entorno de desarrollo. Para ello, necesitamos instalar PHP, Composer y Laravel. A continuación, se detallan los pasos:

1. Instalación de PHP: Descarga e instala la última versión de PHP desde [php.net](https://www.php.net/downloads.php).

2. Instalación de Composer: Composer es un administrador de paquetes de PHP que facilita la gestión de dependencias. Sigue las instrucciones en [getcomposer.org](https://getcomposer.org/download/) para instalar Composer.

3. Instalación de Laravel: Abre una terminal y ejecuta el siguiente comando para instalar Laravel de forma global:

```bash
composer global require laravel/installer
```

## 3. Creación de un Proyecto Laravel

Una vez que hayas configurado el entorno, estás listo para crear tu primer proyecto Laravel. Abre una terminal y sigue estos pasos:

1. Navega a la ubicación deseada para tu proyecto y ejecuta el siguiente comando para crear un nuevo proyecto Laravel llamado "MiProyecto":

```bash
laravel new MiProyecto
```

2. Cambia al directorio del proyecto:

```bash
cd MiProyecto
```

## 4. Rutas y Controladores

En Laravel, las rutas y los controladores son fundamentales para manejar las solicitudes HTTP y organizar la lógica de la aplicación. Consideremos un ejemplo sencillo de cómo crear una ruta y un controlador:

1. Crea una nueva ruta en el archivo `routes/web.php`:

```php
Route::get('/saludo', 'SaludoController@index');
```

2. Crea un controlador llamado `SaludoController` con el siguiente comando:

```bash
php artisan make:controller SaludoController
```

3. Abre el archivo `app/Http/Controllers/SaludoController.php` y define el método `index`:

```php
public function index()
{
    return '¡Hola, bienvenido a mi sitio web!';
}
```

Ahora, cuando accedas a la URL `http://localhost:8000/saludo`, verás el mensaje de saludo.

## 5. Vistas y Plantillas Blade

Las vistas permiten presentar contenido al usuario, y Laravel utiliza el motor de plantillas Blade para facilitar la creación de vistas. Veamos cómo crear y renderizar una vista:

1. Crea una nueva vista en `resources/views/saludo.blade.php` con el siguiente contenido:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Saludo</title>
  </head>
  <body>
    <h1>{{ $mensaje }}</h1>
  </body>
</html>
```

2. Modifica el método `index` en `SaludoController.php` para renderizar la vista:

```php
public function index()
{
    $mensaje = '¡Hola, bienvenido a mi sitio web!';
    return view('saludo', compact('mensaje'));
}
```

Visita `http://localhost:8000/saludo` nuevamente para ver la vista renderizada.

## Conclusión

En este artículo, hemos explorado los conceptos básicos de Laravel a través de ejemplos prácticos y ejercicios. Hemos cubierto la configuración del entorno, la creación de un proyecto Laravel, la definición de rutas y controladores, y la creación de vistas con Blade. Estos fundamentos sientan las bases para que puedan practicar y desarrollar sus habilidades en Laravel durante todo el día. A medida que adquieran más experiencia, podrán explorar características avanzadas como las migraciones de bases de datos, el manejo de autenticación y la creación de API. ¡Continúa explorando y expandiendo tus conocimientos en el emocionante mundo de Laravel!

## Recursos

### Primeros pasos

{{< youtube 3e1IsZJuYAw >}}

<br>

{{< youtube NdsFC4FnzXQ >}}

### Estensiones útiles

https://laravel.com/docs/10.x
