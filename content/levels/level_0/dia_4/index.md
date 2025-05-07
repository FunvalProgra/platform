---
title: "Día 4"
date: 2022-12-16T11:18:33-05:04
draft: false
---

## Día 4 : Intro a JavaScript

# Introducción a JavaScript

JavaScript es un lenguaje de programación que permite crear interactividad en páginas web. Es uno de los lenguajes más utilizados en el desarrollo web.

---

## ¿Para qué sirve JavaScript?

- Hacer sitios web interactivos (botones, formularios, animaciones).
- Crear aplicaciones web y móviles.
- Controlar contenido dinámico, etc.

---

## ¿Dónde se usa?

En el navegador, junto con HTML y CSS.

---

## Primer programa: ¡Hola Mundo!

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola JavaScript</h1>
    <script>
      alert("¡Hola mundo!");
      console.log("Esto se muestra en la consola.");
    </script>
  </body>
</html>
```

## Tipos de Datos y Operadores

En JavaScript trabajamos con distintos valores, cada valor pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.
En JavaScript hay ocho tipos de datos básicos. En esta sección aprenderemos sobre algunos de ellos.

Recuerda que podemos almacenar cualquier tipo de dato en una variable, incluso podemos reasignar el valor de una variable con un tipo de dato distinto:

```js
// Sin error
let number = "3"; // variable que contiene un string
number = 6; // cambiamos el valor a un dato tipo number
```

### Cadenas de Texto (Strings)

{{< youtube s-C8OpALC6E >}}

### Números

{{< youtube o4p6p1z2P5A >}}

### Booleanos

{{< youtube Csu9tRuuX0M >}}

### Tipos de Operadores

Hasta este punto, hemos visto los tipos de datos más básicos dentro del lenguaje, conocidos como **primitivos**. Existen otros tipos de datos llamados **compuestos** como: Objetos, Arrays, Functions y Classes; los cuales por ahora no cubriremos. Con los tipos de datos primitivos tenemos una base para entender más conceptos de JavaScript.

{{< youtube _8Z5AeGVIXE >}}

### Condicionales

Algunas veces, necesitamos ejecutar diferentes acciones basadas en diferentes condiciones.

Para esto podemos usar la sentencia `if(...)` la cual evalúa la condicion entre los paréntesis, y si el resultado es `true` ejecuta un bloque de código.

Por ejemplo:

```js
if (year == 2015) alert("¡Estás en lo cierto!");
```

Aquí la condición es de igualdad (`year == 2015`), en caso sea `true` se ejecutará la alerta, pero podría ser más compleja.

Si quisiéramos ejecutar más de una sentencia, debemos encerrar nuestro bloque de código entre llaves:

```js
if (year == 2015) {
  alert("¡Es Correcto!");
  alert("¡Eres muy inteligente!");
}
```

Se recomienda siempre encerrar nuestro bloque de código en llaves `{}` siempre que se utilice la sentencia `if`, inclusive si solo se va a ejecutar una sola sentencia en este caso. Hacer eso mejora la legibilidad.

Para aprender más de este concepto, mira el siguiente video. Por el momento solo es importante la seccion donde se menciona el uso de la condicional `if`, `else` y `else if`. **La sección sobre la condición `switch` , y los bucles `for` no es necesaria por el momento**.

{{< youtube  9h5hyh_wDjo >}}
