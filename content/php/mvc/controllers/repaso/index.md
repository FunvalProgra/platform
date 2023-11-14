---
title: "Controladores en PHP: Inyección de Dependencias"
date: 2023-11-14T13:02:05-05:00
draft: false
showPagination: false
---

## Introducción a Controladores en PHP

En el vasto mundo del desarrollo web en PHP, los controladores destacan como piezas cruciales para la implementación del patrón Modelo-Vista-Controlador (MVC). Estos actúan como mediadores entre la interfaz del usuario y la lógica de la aplicación, brindando una estructura organizada para manejar las solicitudes del usuario. En este repaso, nos sumergiremos en la esencia de los controladores y exploraremos cómo la inyección de dependencias mejora significativamente la modularidad y la testabilidad de nuestro código.

## ¿Qué es un Controlador?

En términos sencillos, un **controlador** en PHP es una clase que agrupa lógica relacionada y maneja las solicitudes HTTP. Su objetivo principal es interpretar las acciones del usuario y coordinar las interacciones entre el modelo de datos y la vista.

### Creación de un Controlador Básico

```php
class UserController {
    public function index() {
        // Lógica para mostrar la lista de usuarios
    }

    public function show($id) {
        // Lógica para mostrar los detalles de un usuario específico
    }
    // ... Métodos adicionales para otras acciones ...
}
```

Aquí, cada método del controlador representa una acción específica relacionada con la gestión de usuarios, siguiendo el patrón REST.

## El Ciclo de Vida de un Controlador

Cuando un usuario realiza una solicitud HTTP, el controlador correspondiente se activa para manejarla. El ciclo de vida típico de un controlador abarca desde la recepción de la solicitud hasta la preparación y envío de la respuesta.

1. **Recepción de la Solicitud:** El controlador captura la solicitud entrante.
2. **Procesamiento:** Se realiza la lógica de negocio necesaria.
3. **Interacción con el Modelo:** Si es necesario, se interactúa con el modelo para recuperar o actualizar datos.
4. **Preparación de la Respuesta:** Se preparan los datos para la vista.
5. **Envío de la Respuesta:** La respuesta se devuelve al usuario, ya sea renderizando una vista o proporcionando datos en formato JSON.

## Uso de Parámetros en Controladores

Los controladores a menudo necesitan acceder a parámetros de la solicitud, como datos de formularios o segmentos de URL. En PHP, estos parámetros se pueden acceder fácilmente mediante las variables superglobales `$_GET` y `$_POST`.

```php
class UserController {
    public function show($id) {
        // $id se obtiene de la URL, por ejemplo, /user/show/1
        $user = $this->getUserById($id);
        // Resto de la lógica para mostrar los detalles del usuario
    }
}
```

## Problemas de Acoplamiento y Solución: Inyección de Dependencias

Una práctica común al construir aplicaciones más grandes es la **inyección de dependencias (DI)**. En términos simples, la DI consiste en proporcionar a un objeto las dependencias que necesita en lugar de que el objeto las cree internamente. Esto promueve la modularidad y facilita las pruebas unitarias.

### Sin Inyección de Dependencias

Supongamos que nuestro controlador necesita interactuar con un servicio de usuarios. Sin usar inyección de dependencias, podríamos instanciar directamente el servicio dentro del controlador.

```php
class UserController {
    protected $userService;

    public function __construct() {
        $this->userService = new UserService();
    }

    public function index() {
        $users = $this->userService->getAllUsers();
        // Resto de la lógica para mostrar la lista de usuarios
    }
}
```

### Con Inyección de Dependencias

En cambio, con inyección de dependencias, el servicio se pasa como parámetro al constructor, lo que facilita la modificación y prueba del código.

```php
class UserController {
    protected $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    public function index() {
        $users = $this->userService->getAllUsers();
        // Resto de la lógica para mostrar la lista de usuarios
    }
}
```

La inyección de dependencias reduce el acoplamiento entre las clases y hace que el código sea más flexible y mantenible. También mejora la capacidad de prueba, ya que podemos proporcionar fácilmente simulacros (mocks) de dependencias durante las pruebas unitarias.

## Conclusiones

En conclusión, los controladores en PHP son componentes fundamentales para estructurar aplicaciones web de manera eficiente. Al abrazar prácticas sólidas, como la organización modular, la gestión adecuada de parámetros y, especialmente, la inyección de dependencias, podemos construir aplicaciones más sólidas y mantenibles. La inyección de dependencias emerge como una herramienta valiosa para mejorar la modularidad, la testabilidad y la flexibilidad de nuestro código, allanando el camino hacia un desarrollo más robusto y escalable.

## Recursos

{{< youtube -7tOp-KJiGg >}}
