---
title: "Arrays y Objetos"
date: 2023-07-30T20:52:41-05:00
draft: false
showPagination: false
---

Los Arrays y Objetos son estructuras de datos que nos permiten almacenar y acceder a la información de una manera sencilla y eficiente, sobre todo cuando tenemos que manejar grandes cantidades de datos. Este material lo abarcaremos gran parte de esta semana, por lo que no te sientas obligado a entenderlo todo de una vez. Lo importante es que entiendas los conceptos básicos y que puedas aplicarlos en tus proyectos. Si tienes dudas, no dudes en preguntar.

## Tutoriales

### FreeCodeCamp

- [Arrays (10 lecciones a partir de la indicada)](https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays)


### 30 Days of JavaScript

- [Arreglos (arrays)](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/dia_05_Arreglos/dia_05_arreglos.md)
- [Objetos (objects)](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/dia_08_Objetos/dia_08_objetos.md)

### aprendejavascript.dev

Estos links abren la primera lección de cada tema.  Para avanzar a la siguiente lección, haz click en el botón de siguiente lección en la parte inferior de la página.

- [Arrays](https://www.aprendejavascript.dev/clase/arrays/arrays-que-son)
- [Objects](https://www.aprendejavascript.dev/clase/objetos/introduccion)

## Objetos

Como aprendimos en clases anteriores, hay ocho tipos de datos en JavaScript. Siete de ellos se denominan "primitivos", porque sus valores contienen solo un dato (sea un `string`, un número o lo que sea).

En contraste, los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave. En JavaScript, los objetos penetran casi todos los aspectos del lenguaje. Por lo tanto, debemos comprenderlos primero antes de profundizar en cualquier otro lugar. 

Podemos crear un objeto usando las llaves `{…}` con una lista opcional de *propiedades*. Una propiedad es un par "key:value", donde `key` es un string (también llamado "nombre clave"), y `value` puede ser cualquier cosa. P.D. Para fines prácticos de la lección, nos referiremos a este par de conceptos como "clave:valor".

Podemos imaginar un objeto como un gabinete con archivos firmados. Cada pieza de datos es almacenada en su archivo por la clave. Es fácil encontrar un archivo por su nombre o agregar/eliminar un archivo.

{{< figure src="./object.svg">}}


Se puede crear un objeto vacío ("gabinete vacío") utilizando una de estas dos sintaxis:

```js
let user = new Object(); // sintaxis de "constructor de objetos"
let user = {};  // sintaxis de "objeto literal"
```

{{< figure src="./object-user-empty.svg">}}

Normalmente se utilizan las llaves `{...}`. Esa declaración se llama *objeto literal*.

### Literales y propiedades

Podemos poner inmediatamente algunas propiedades dentro de `{...}` como pares "clave:valor":

```js
let user = {     // un objeto
  name: "John",  // En la clave "name" se almacena el valor "John"
  age: 30        // En la clave "age" se almacena el valor 30
};
```

Una propiedad tiene una clave (también conocida como "nombre" o "identificador") antes de los dos puntos `":"` y un valor a la derecha.

En el objeto `user` hay dos propiedades:

1. La primera propiedad tiene la clave `"name"` y el valor `"John"`.
2. La segunda tienen la clave `"age"` y el valor `30`.

Podemos imaginar al objeto `user` resultante como un gabinete con dos archivos firmados con las etiquetas "name" y "age".

{{< figure src="./object-user.svg">}}

Podemos agregar, eliminar y leer archivos de él en cualquier momento.

Se puede acceder a los valores de las propiedades utilizando la notación de punto:

```js
// Obteniendo los valores de las propiedades del objeto:
alert( user.name ); // John
alert( user.age ); // 30
```

El valor puede ser de cualquier tipo. Agreguemos uno booleano:

```js
user.isAdmin = true;
```

{{< figure src="./object-user-isadmin.svg">}}

Para eliminar una propiedad podemos usar el operador `delete`:

```js
delete user.age;
```

{{< figure src="./object-user-delete.svg">}}

También podemos nombrar propiedades con más de una palabra. Pero, de ser así, debemos colocar la clave entre comillas `"..."`:

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // Las claves con más de una palabra deben ir entre comillas
};
```

{{< figure src="./object-user-props.svg">}}


La última propiedad en la lista puede terminar con una coma:
```js
let user = {
  name: "John",
  age: 30, // termina con una ","
}
```
Eso se llama una coma "final" o "colgante".  Facilita agregar, eliminar y mover propiedades, porque todas las líneas se vuelven similares.

## Arrays

Los objetos te permiten almacenar colecciones de datos a través de nombres. Eso está bien.

Pero a menudo necesitamos una *colección ordenada*, donde tenemos un 1ro, un 2do, un 3er elemento y así sucesivamente. Por ejemplo, necesitamos almacenar una lista de algo: usuarios, bienes, elementos HTML, etc.

No es conveniente usar objetos aquí, porque no proveen métodos para manejar el orden de los elementos. No podemos insertar una nueva propiedad “entre” los existentes. Los objetos no están hechos para eso.

Existe una estructura llamada `Array` (llamada en español arreglo o matriz/vector) para almacenar colecciones ordenadas.

### Declaración

Hay dos sintaxis para crear un array vacío:

```js
let arr = new Array();
let arr = [];
```

Casi siempre se usa la segunda. Podemos suministrar elementos iniciales entre los corchetes:

```js
let fruits = ["Apple", "Orange", "Plum"];
```

Los elementos del array están numerados comenzando desde cero.

Podemos obtener un elemento por su número entre corchetes:

```js run
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

Podemos reemplazar un elemento:

```js
fruits[2] = 'Pear'; // ahora ["Apple", "Orange", "Pear"]
```

...o agregar uno nuevo al array:

```js
fruits[3] = 'Lemon'; // ahora ["Apple", "Orange", "Pear", "Lemon"]
```

La cuenta total de elementos en el array es su longitud `length`:

```js run
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3
```

También podemos usar `alert` para mostrar el array completo.

```js run
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits ); // Apple,Orange,Plum
```

Un array puede almacenar elementos de cualquier tipo.

Por ejemplo:

```js run no-beautify
// mezcla de valores
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// obtener el objeto del índice 1 y mostrar su nombre
alert( arr[1].name ); // John
// obtener la función del índice 3 y ejecutarla
arr[3](); // hello
```
