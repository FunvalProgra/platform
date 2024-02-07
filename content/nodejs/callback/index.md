---
title: "Callback en JavaScript"
date: 2024-02-05T17:50:57-05:00
draft: false
showPagination: false
---

**Título: Explorando las Callback Functions en JavaScript: Una Guía Integral**

**Resumen:**
Este artículo se centra en las Callback Functions en JavaScript, sin abordar operaciones asíncronas ni entornos específicos como Node.js. Desde los fundamentos hasta la aplicación práctica, exploraremos cómo las callbacks mejoran la modularidad del código y manejan eventos, sin introducir complejidades asociadas con la asincronía.

## Introducción:

Las Callback Functions en JavaScript son herramientas versátiles que van más allá de la asincronía y los entornos específicos como Node.js. Este artículo se enfoca en los conceptos fundamentales de las callbacks, su utilidad en la modularidad del código y el manejo de eventos, proporcionando una comprensión integral de esta característica esencial de JavaScript.

## I. Definición de Callback Function:

Una Callback Function es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha completado su ejecución.

### Ejemplo Básico:

```javascript
function saludar(nombre, callback) {
  console.log("Hola, " + nombre + "!");
  callback();
}

function despedirse() {
  console.log("Hasta luego.");
}

saludar("Carlos", despedirse);
```

En este ejemplo, la función `despedirse` es una callback que se ejecuta después de imprimir el saludo.

## II. Utilidad de las Callbacks:

### 1. Modularidad del Código:

Las Callback Functions permiten la modularidad, facilitando la reutilización y el mantenimiento independiente de porciones específicas de código.

### Ejemplo de Modularidad:

```javascript
function tareaA(callback) {
  console.log("Tarea A completada.");
  callback();
}

function tareaB() {
  console.log("Tarea B completada.");
}

tareaA(tareaB);
```

En este caso, `tareaA` y `tareaB` pueden modificarse o utilizarse de forma independiente.

### 2. Manejo de Eventos:

Las callbacks son esenciales para el manejo de eventos en el desarrollo de interfaces de usuario y aplicaciones web.

```javascript
document.getElementById("boton").addEventListener("click", function () {
  console.log("Botón clickeado.");
});
```

Aquí, la función que maneja el evento de clic es una callback que se ejecuta cuando ocurre el evento.

## III. Evitar Callback Hell:

En situaciones donde múltiples callbacks anidadas pueden volverse difíciles de leer, conocido como "Callback Hell", otras estructuras pueden ser preferibles.

```javascript
function tareaAsincrona(callback) {
  setTimeout(function () {
    console.log("Tarea asíncrona completada.");
    callback();
  }, 2000);
}

tareaAsincrona(function () {
  console.log("Callback de la tarea asíncrona.");
});
```

Este ejemplo ilustra cómo evitar el anidamiento excesivo de callbacks.

## Conclusión:

Las Callback Functions en JavaScript son esenciales para mejorar la modularidad del código y manejar eventos. Este artículo ha proporcionado una guía integral, desde los fundamentos hasta ejemplos prácticos, sin adentrarse en la complejidad de las operaciones asíncronas. Al comprender cómo y cuándo utilizar callbacks, los desarrolladores pueden fortalecer la estructura y la claridad de su código en cualquier contexto JavaScript.

## Video

{{< youtube kjCH7vvISsE >}}
