---
title: "Tipos de Funciones"
date: 2023-01-27T00:50:10-05:00
draft: false
showPagination: false
---

En JavaScript, existen tres tipos de funciones: funciones declaradas, funciones de expresión y funciones de flecha.

1. Funciones declaradas: Son funciones que se declaran con la palabra clave "function" seguida del nombre de la función. Ejemplo:

```js
function sum(a, b) {
  return a + b;
}

```

Estas funciones son hoisted, es decir, son elevadas al inicio del scope donde son declaradas, por lo tanto son accesibles antes de ser declaradas.

2. Funciones de expresión: son funciones que son asignadas a una variable y son definidas mediante una expresión. Ejemplo:

```js
const sum = function(a, b) {
  return a + b;
}
```

3. Funciones de flecha: son funciones cuyo sintaxis es abreviada y se definen mediante una flecha "=>" y no tiene un nombre. Ejemplo:

```js
const sum = (a, b) => a + b;
```

<br>

## 3 tipos de funciones

Para entender a detalle como funciona cada uno de estas, mira el siguiente tutorial donde verás qué diferencia a estas 3 formas de escribir una función:

{{< youtube -O6HUo-P4Mk >}}