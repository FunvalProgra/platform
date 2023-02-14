---
title: "Manipulación del DOM"
date: 2023-02-14T15:13:43-05:00
draft: false
---

Cuando el navegador carga la página, lee (o “parser”(analiza en inglés)) el HTML y genera objetos DOM a partir de él. Para los nodos de elementos, la mayoría de los atributos HTML estándar se convierten automáticamente en propiedades de los objetos DOM.

Por ejemplo, si la etiqueta es `<body id="page">`, entonces el objeto DOM tiene `body.id="page"`.

¡Pero el mapeo de propiedades y atributos no es uno a uno! En esta clase, prestaremos atención para separar estas dos nociones, para ver cómo trabajar con ellos, cuándo son iguales y cuándo son diferentes.

## Propiedads del DOM

Ya hemos visto propiedades DOM integradas. Hay muchas. Pero técnicamente nadie nos limita, y si no hay suficientes, podemos agregar las nuestras.

Los nodos DOM son objetos JavaScript normales. Podemos alterarlos.

Por ejemplo, creemos una nueva propiedad en `document.body`:

```js
document.body.myData = {
  name: 'Cesar',
  title: 'Emperador'
};
alert(document.body.myData.title); // Emperador
```

También podemos agregar un método:

```js
document.body.sayTagName = function() {
  alert(this.tagName);
};
document.body.sayTagName(); // BODY (el valor de 'this' en el método es document.body)
```

<!-- https://javascript.info/dom-attributes-and-properties -->

<!-- https://www.youtube.com/watch?v=l6npGZa_vgc -->