---
title: "JavaScript"
date: 2023-01-23T17:50:44-05:00
draft: false
showPagination: false

---

<!-- JS: intro, tipos de datos, palabras clave y operaciones basicas - buenas practicas -->


## Una introducción a JavaScript

Veamos qué tiene de especial JavaScript, qué podemos lograr con este lenguaje y qué otras tecnologías se integran bien con él.

### ¿Qué es JavaScript?

JavaScript fue creado para “dar vida a las páginas web”.

Los programas en este lenguaje se llaman scripts. Se pueden escribir directamente en el HTML de una página web y ejecutarse automáticamente a medida que se carga la página.

Los scripts se proporcionan y ejecutan como texto plano. No necesitan preparación especial o compilación para correr.

En este aspecto, JavaScript es muy diferente a otro lenguaje llamado [Java](https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)).

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex py-3 items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "triangle-exclamation" >}}</span>
    <b>¿Por qué se llama JavaScript?</b>
  </div>
  <span class="dark:text-neutral-300">
Cuando JavaScript fue creado, inicialmente tenía otro nombre: “LiveScript”. Pero Java era muy popular en ese momento, así que se decidió que el posicionamiento de un nuevo lenguaje como un “Hermano menor” de Java ayudaría. Pero a medida que evolucionaba, JavaScript se convirtió en un lenguaje completamente independiente con su propia especificación llamada <a href="https://es.wikipedia.org/wiki/ECMAScript" target="_blank">ECMAScript</a>, y ahora no tiene ninguna relación con Java.
  </span>
</div>

Hoy, JavaScript puede ejecutarse no solo en los navegadores, sino también en servidores o incluso en cualquier dispositivo que cuente con un programa especial llamado [El motor o intérprete de JavaScript](https://es.wikipedia.org/wiki/Int%C3%A9rprete_de_JavaScript).

Diferentes motores tienen diferentes “nombres en clave”. Por ejemplo:

- [V8](https://es.wikipedia.org/wiki/V8_(int%C3%A9rprete_de_JavaScript)) – en Chrome, Opera y Edge.
- [SpiderMonkey](https://es.wikipedia.org/wiki/SpiderMonkey) – en Firefox.
- …Existen otros nombres en clave como “Chakra” para IE , “JavaScriptCore”, “Nitro” y “SquirrelFish” para Safari, etc.

Es bueno recordar estos términos porque son usados en artículos para desarrolladores en internet. Por ejemplo, si “la característica X es soportada por V8”, entonces probablemente funciona en Chrome, Opera y Edge.

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex py-3 items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "triangle-exclamation" >}}</span>
    <b>¿Como trabajan los motores?</b>
  </div>
  <span class="dark:text-neutral-300">
Los motores son complicados, pero los fundamentos son fáciles.

1. El motor (embebido si es un navegador) lee (“analiza”) el script.
2. Luego convierte (“compila”) el script a lenguaje de máquina.
3. Por último, el código máquina se ejecuta, muy rápido.


El motor aplica optimizaciones en cada paso del proceso. Incluso observa como el script compilado se ejecuta, analiza los datos que fluyen a través de él y aplica optimizaciones al código maquina basadas en ese conocimiento.
  </span>
</div>

## Tipos de datos

Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.

Hay ocho tipos de datos básicos en JavaScript. En esta semana cubriremos la mayoría en general y posteriormente hablaremos de cada uno de ellos en detalle.

Podemos almacenar un valor de cualquier tipo dentro de una variable. Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número

```js
// no hay error
let message = "hola";
message = 123456;
```

Los lenguajes de programación que permiten estas cosas, como JavaScript, se denominan “dinámicamente tipados”, lo que significa que allí hay tipos de datos, pero las variables no están vinculadas rígidamente a ninguno de ellos.

### Number

```js
let n = 123;
n = 12.345;
```

El tipo _number_ representa tanto números enteros como de punto flotante.

Hay muchas operaciones para números. Por ejemplo, multiplicación `*`, división `/`, suma `+`, resta `-`, y demás.

### String

Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.

```js
let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;
```

En JavaScript, hay 3 tipos de comillas.

1. Comillas dobles: `  "Hola"  `.
2. Comillas simples: `  'Hola'  `.
3. Backticks (comillas invertidas): <code>  &#96;Hola&#96;  </code>.

Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.

Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en `${...}`, por ejemplo:

```js run
let name = "John";
// incrustar una variable
alert( `Hola, *!*${name}*/!*!` ); // Hola, John!
// incrustar una expresión
alert( `el resultado es *!*${1 + 2}*/!*` ); // el resultado es 3
```

La expresión dentro de `${...}` se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como `name`, una expresión aritmética como `1 + 2`, o algo más complejo.

Toma en cuenta que esto sólo se puede hacer con los backticks. ¡Las otras comillas no tienen esta capacidad de incrustación!

```js
alert( "el resultado es ${1 + 2}" ); 
// el resultado es ${1 + 2} 
// (las comillas dobles no hacen nada)
```