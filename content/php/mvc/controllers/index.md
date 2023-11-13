---
title: "MVC: Controllers"
date: 2023-11-13T15:36:01-05:00
draft: false
showPagination: false
---

## Introducción

En el desarrollo web, la arquitectura Modelo-Vista-Controlador (MVC) es una metodología comúnmente utilizada para organizar el código y mejorar la mantenibilidad de las aplicaciones. Uno de los componentes clave en esta arquitectura es el **controlador**. En este artículo, exploraremos a fondo los controladores en PHP, destacando buenas prácticas, convenciones de nomenclatura y proporcionando ejemplos completos y sencillos.

## ¿Qué es un Controlador?

En el patrón MVC, el controlador maneja las solicitudes del usuario y gestiona la lógica de la aplicación. Se encarga de recibir la entrada del usuario, procesarla y coordinar con el modelo y la vista para producir la salida adecuada. Los controladores son esenciales para separar la lógica del negocio de la interfaz de usuario, lo que facilita la escalabilidad y el mantenimiento del código.

## Buenas Prácticas al Nombrar Controladores

Nombrar adecuadamente los controladores es crucial para mantener un código limpio y comprensible. Algunas buenas prácticas incluyen:

1. **Singular y en PascalCase:** Nombra tus controladores en singular y utilizando el estilo PascalCase. Por ejemplo, si estás manejando usuarios, el controlador podría llamarse `UsuarioController`.

2. **Utiliza el sufijo "Controller":** Esto ayuda a identificar claramente que el archivo o clase es un controlador. Siguiendo el ejemplo anterior, el nombre del archivo podría ser `UsuarioController.php`.

3. **Coherencia en la Nomenclatura:** Mantén una nomenclatura coherente en toda tu aplicación. Si decides utilizar singular para un controlador, sigue esa convención en todos los controladores.

## Estructura Básica de un Controlador

Un controlador básico podría tener la siguiente estructura:

```php
<?php

class UsuarioController {

    public function index() {
        // Lógica para mostrar la lista de usuarios
    }

    public function show($id) {
        // Lógica para mostrar un usuario específico
    }

    public function create() {
        // Lógica para mostrar el formulario de creación
    }

    public function store() {
        // Lógica para procesar el formulario de creación
    }

    public function edit($id) {
        // Lógica para mostrar el formulario de edición
    }

    public function update($id) {
        // Lógica para procesar el formulario de edición
    }

    public function destroy($id) {
        // Lógica para eliminar un usuario
    }
}
?>
```

En este ejemplo, el controlador `UsuarioController` tiene métodos para listar, mostrar, crear, guardar, editar, actualizar y eliminar usuarios. Estos métodos reflejan las operaciones típicas que realizarías en una aplicación CRUD (Create, Read, Update, Delete).

## Implementación en un Entorno MVC

Supongamos que estamos construyendo una aplicación web utilizando una estructura MVC. Tendríamos una estructura de carpetas similar a la siguiente:

```
- /proyecto
  - /app
    - /controladores
      - UsuarioController.php
    - /modelos
      - UsuarioModel.php
    - /vistas
      - usuario
        - index.php
        - show.php
        - create.php
        - edit.php
  - /public
    - index.php
```

Aquí, el archivo `index.php` en la carpeta `public` actuaría como punto de entrada único para todas las solicitudes. Este archivo podría inicializar el enrutador y enviar la solicitud al controlador correspondiente, según la URL.

Supongamos que una solicitud se hace a `http://miapp.com/usuario/index`. El enrutador podría analizar la URL y dirigirla al método `index` del controlador `UsuarioController`. Este método, a su vez, podría interactuar con el modelo `UsuarioModel` para obtener datos y cargar la vista `index.php`.

## Conclusión

Los controladores desempeñan un papel fundamental en la arquitectura MVC, proporcionando un lugar centralizado para gestionar la lógica de la aplicación. Al seguir buenas prácticas, como la nomenclatura consistente y la separación clara de responsabilidades, podemos construir aplicaciones web más mantenibles y escalables.

En este artículo, hemos explorado la estructura básica de un controlador en PHP, así como su implementación dentro de una arquitectura MVC. Los ejemplos proporcionados son simples pero completos, ofreciendo una base sólida para desarrollar aplicaciones web robustas.
