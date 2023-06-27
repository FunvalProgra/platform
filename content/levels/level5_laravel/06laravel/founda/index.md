---
title: " Laravel Livewire / Istalacion Livewire "
date: 2023-03-12T11:48:09-06:00
draft: false
showPagination: false
---
# Laravel Livewire / Istalacion Livewire

Introducción:
Laravel Livewire es una biblioteca de código abierto para Laravel que permite desarrollar interfaces de usuario interactivas y dinámicas utilizando componentes de PHP y HTML. En esta lección, aprenderemos cómo instalar Livewire en un proyecto Laravel y exploraremos los pasos necesarios para comenzar a utilizarlo.

1. Requisitos previos:
- Un proyecto Laravel existente (asegúrate de tener Laravel instalado en tu entorno de desarrollo antes de comenzar).
- Composer, la herramienta de administración de paquetes de PHP, instalada en tu sistema.

2. Instalación de Livewire:
Puedes instalar Livewire en tu proyecto Laravel siguiendo estos pasos:

- Paso 1: Abre una terminal o línea de comandos y navega hasta el directorio raíz de tu proyecto Laravel.
- Paso 2: Ejecuta el siguiente comando para instalar Livewire a través de Composer:
  ```
  composer require livewire/livewire
  ```
  Esto descargará e instalará la biblioteca Livewire y sus dependencias en tu proyecto.

- Paso 3: Después de que se complete la instalación, ejecuta el siguiente comando para publicar los assets de Livewire:
  ```
  php artisan livewire:publish --assets
  ```
  Esto copiará los archivos de assets necesarios de Livewire en tu proyecto.

- Paso 4: En el archivo `app/Http/Kernel.php`, asegúrate de que la clase `App\Http\Middleware\VerifyCsrfToken` tenga la propiedad `$except` configurada para incluir el prefijo `/livewire/*`. Esto permitirá que Livewire funcione correctamente sin errores de token CSRF.

- Paso 5: Ahora, puedes comenzar a utilizar Livewire en tus componentes. Puedes crear un componente Livewire ejecutando el siguiente comando:
  ```
  php artisan make:livewire NombreDelComponente
  ```
  Esto generará un nuevo archivo de componente Livewire en el directorio `app/Http/Livewire`.

- Paso 6: Para utilizar el componente Livewire en una vista, simplemente incluye el tag de Livewire en tu archivo de blade:
  ```html
  <livewire:nombre-del-componente />
  ```
  Donde `nombre-del-componente` es el nombre del componente Livewire que creaste en el paso anterior.

- Paso 7: Puedes agregar lógica y funcionalidad al componente Livewire en el archivo correspondiente en `app/Http/Livewire`. Puedes responder a eventos, interactuar con bases de datos, realizar validaciones y más.

3. Uso de Livewire:
Una vez que hayas instalado Livewire y creado tus componentes, puedes utilizar sus funcionalidades para crear interfaces de usuario dinámicas y reactivas. Livewire utiliza una combinación de PHP y JavaScript para manejar la interactividad sin tener que escribir código JavaScript adicional.

- Puedes definir propiedades y métodos en tus componentes Livewire para manejar la lógica y la presentación de la interfaz de usuario.
- Livewire se encarga de manejar las solicitudes de acciones y actualizaciones de componentes de forma transparente, lo que permite una experiencia de desarrollo más sencilla y centrada en PHP.

Conclusión:
Laravel Livewire es una poderosa biblioteca que permite desarrollar interfaces de usuario interactivas en proyectos Laravel utilizando componentes de PHP y HTML. Con los pasos de instal  y uso proporcionados en esta lección, puedes comenzar a utilizar Livewire en tu proyecto y aprovechar su funcionalidad para crear interfaces de usuario dinámicas y reactivas.


#  Laravel Livewire 
 {{< youtube  LkSeELpdj4k >}}
#  Istalacion Livewire
 {{< youtube  P4ehlI6btNQ >}}