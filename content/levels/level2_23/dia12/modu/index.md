---
title: "Módulos, introducción"
date: 2023-03-22T16:26:58-05:00
draft: false
showPagination: false
---

A medida que nuestra aplicación crece, queremos dividirla en múltiples archivos, llamados “módulos”. Un módulo puede contener una clase o una biblioteca de funciones para un propósito específico.

Durante mucho tiempo, JavaScript existió sin una sintaxis de módulo a nivel de lenguaje. Eso no fue un problema, porque inicialmente los scripts eran pequeños y simples, por lo que no era necesario.

Pero con el tiempo los scripts se volvieron cada vez más complejos, por lo que la comunidad inventó una variedad de formas de organizar el código en módulos, bibliotecas especiales para cargar módulos a pedido.

Para nombrar algunos (por razones históricas):

- [AMD](https://es.wikipedia.org/wiki/Asynchronous_module_definition) -- uno de los sistemas de módulos más antiguos, implementado inicialmente por la biblioteca [require.js](https://requirejs.org/).
- [CommonJS](https://wiki.commonjs.org/wiki/Modules/1.1) -- el sistema de módulos creado para el servidor Node.js.
- [UMD](https://github.com/umdjs/umd) -- un sistema de módulos más, sugerido como universal, compatible con AMD y CommonJS.

Ahora, todo esto se convierte lentamente en una parte de la historia, pero aún podemos encontrarlos en viejos scripts.

El sistema de módulos a nivel de idioma apareció en el estándar en 2015, evolucionó gradualmente desde entonces y ahora es compatible con todos los principales navegadores y en Node.js. Así que estudiaremos los módulos modernos de Javascript de ahora en adelante.

## Qué es un módulo?

Un módulo es solo un archivo. Un script es un módulo. Tan sencillo como eso.

Los módulos pueden cargarse entre sí y usar directivas especiales `export` e `import` para intercambiar funcionalidad, llamar a funciones de un módulo de otro:

- La palabra clave `export` etiqueta las variables y funciones que deberían ser accesibles desde fuera del módulo actual.
- `import` permite importar funcionalidades desde otros módulos.

Por ejemplo, si tenemos un archivo `sayHi.js` que exporta una función:

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

...Luego, otro archivo puede importarlo y usarlo:

```js
// 📁 main.js
import {sayHi} from './sayHi.js';
alert(sayHi); // function...
sayHi('John'); // Hello, John!
```
La directiva `import` carga el módulo por la ruta `./sayHi.js` relativo con el archivo actual, y asigna la función exportada `sayHi` a la variable correspondiente.

Ejecutemos el ejemplo en el navegador.

Como los módulos admiten palabras clave y características especiales, debemos decirle al navegador que un script debe tratarse como un módulo, utilizando el atributo `<script type =" module ">`.

Tu etiqueta script dentro del head tiene que verse así:

```html
  <script type="module" src="./main.js" defer></script>

```

El navegador busca y evalúa automáticamente el módulo importado (y sus importaciones si es necesario), y luego ejecuta el script.

## Modules: Tutorial por Fazt Code

{{< youtube 0t-Le4kdaMg >}}