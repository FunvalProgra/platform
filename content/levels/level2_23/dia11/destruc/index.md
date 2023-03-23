---
title: "Destructuring (Destructuración)"
date: 2023-02-21T16:24:50-05:00
draft: false
showPagination: false
---

Las dos estructuras de datos más usadas en JavaScript son `Object` y `Array`.

- Los objetos nos permiten crear una simple entidad que almacena items con una clave cada uno.
- los arrays nos permiten reunir items en una lista ordenada.

Pero cuando los pasamos a una función, tal vez no necesitemos un objeto o array como un conjunto sino en piezas individuales.

La asignación desestructurante es una sintaxis especial que nos permite “desempaquetar” arrays u objetos en varias variables, porque a veces es más conveniente.

La desestructuración también funciona bien con funciones complejas que tienen muchos argumentos, valores por defecto, etcétera. Pronto lo veremos.

## Desestructuración de Arrays

Un ejemplo de cómo el array es desestructurado en variables:

{{< highlight js "linenos=table,hl_lines=4-7" >}}

// tenemos un array con el nombre y apellido
let arr = ["John", "Smith"]

// asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
{{< /highlight >}}

Ahora podemos trabajar con variables en lugar de miembros de array.

Se ve genial cuando se combina con `split` u otro método que devuelva un array:

```js
let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith
```

Como puedes ver, la sintaxis es simple. Aunque hay varios detalles peculiares. Veamos más ejemplos para entenderlo mejor.

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>“Desestructuración” no significa “destructivo”.</b>
  </div>
  <span > <!-- class="dark:text-neutral-300" -->

Se llama "asignación desestructurante" porque "desestructura" al copiar elementos dentro de variables, pero el array en sí no es modificado.
Es sólo una manera más simple de escribir:
```js
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
```
  </span>
</div>

<br>

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>Ignorar elementos utilizando comas</b>
  </div>
  <span > <!-- class="dark:text-neutral-300" -->
  
Los elementos no deseados de un array también pueden ser descartados por medio de una coma extra:

{{< highlight js "hl_lines=1-2" >}}
// segundo elemento no es necesario 
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
{{< /highlight >}}
  </span>
</div>

<br>

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>Truco para intercambiar variables</b>
  </div>
  <span > <!-- class="dark:text-neutral-300" -->
  
Hay un conocido truco para intercambiar los valores de dos variables usando asignación desestructurante:

{{< highlight js "hl_lines=5" >}}
let guest = "Jane";
let admin = "Pete";
// Intercambiemos valores: hagamos guest=Pete, admin=Jane

[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (¡intercambiados con éxito!)
{{< /highlight >}}

Aquí creamos un array temporal de dos variables e inmediatamente lo desestructuramos con el orden cambiado.

Podemos intercambiar más de dos variables de este modo.
  </span>
</div>

## Desestructuración de objetos

La asignación desestructurante también funciona con objetos.

La sintaxis básica es:

```js
let {var1, var2} = {var1:…, var2:…}
```

Debemos tener un símil-objeto en el lado derecho, el que queremos separar en variables. El lado izquierdo contiene un símil-objeto "pattern" para sus propiedades correspondientes. En el caso más simple, es la lista de nombres de variables en `{...}`.

Por ejemplo:

{{< highlight js "hl_lines=7" >}}
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
{{< /highlight >}}

Las propiedades `options.title`, `options.width` y `options.height` son asignadas a las variables correspondientes. 

No importa el orden sino los nombres. Esto también funciona:

```js
// cambiado el orden en let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
```

El patrón de la izquierda puede ser más complejo y especificar el mapeo entre propiedades y variables.

Si queremos asignar una propiedad a una variable con otro nombre, por ejemplo que `options.width` vaya en la variable llamada `w`, lo podemos establecer usando dos puntos:

{{< highlight js "hl_lines=7-8" >}}
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { propiedadOrigen: variableObjetivo }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
{{< /highlight >}}

Los dos puntos muestran "qué : va dónde". En el ejemplo de arriba la propiedad `width` va a `w`, `height` va a `h`, y `title` es asignado al mismo nombre.

Si tenemos un objeto complejo con muchas propiedades, podemos extraer solamente las que necesitamos:

```js
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
// sólo extrae título como variable
let { title } = options;
alert(title); // Menu
```

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>La trampa si no hay `let`</b>
  </div>
  <span > <!-- class="dark:text-neutral-300" -->

En los ejemplos de arriba, las variables fueron declaradas en la asignación: `let {…} = {…}`. Por supuesto que también podemos usar variables existentes, sin `let`. Pero hay una trampa.
Esto no funcionará:
```js
let title, width, height;
// error en esta línea
{title, width, height} = {title: "Menu", width: 200, height: 100};
```
El problema es que JavaScript trata al `{...}` como un bloque de código en el flujo principal de código (no dentro de otra expresión). Estos bloques de código pueden ser usados para agrupar sentencias, de esta manera:
```js
{
  // una bloque de código
  let message = "Hola";
  // ...
  alert( message );
}
```
Aquí JavaScript supone que tenemos un bloque de código, es por eso que hay un error. Nosotros en cambio queremos desestructuración.
Para mostrarle a JavaScript que no es un bloque de código, podemos rodear la expresión entre paréntesis `(...)`:
{{< highlight js "hl_lines=3" >}}

let title, width, height;
// ahora está bien
( {title, width, height} = {title: "Menu", width: 200, height: 100} );

alert( title ); // Menu
{{< /highlight >}}

  </span>
</div>

## Tutorial Desestructuración

En el siguiente video verás algunos ejemplos de desestructuración de objetos y arrays.

<!-- Video desestructuracion -->
{{< youtube YTtZ9TUQ48E >}}