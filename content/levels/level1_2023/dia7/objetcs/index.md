---
title: "Objetos"
date: 2023-01-26T09:51:37-05:00
draft: false
showPagination: false
---

JavaScript es uno de los lenguajes de programación más populares en el mundo, y una de las razones de su éxito radica en su capacidad para manejar y organizar datos a través de objetos y arrays. 

Los objetos en JavaScript son estructuras de datos clave-valor que nos permiten almacenar y acceder a la información de una manera sencilla y eficiente. 

Los arrays, por otro lado, son un tipo especial de objeto que nos permite almacenar y acceder a una colección ordenada de valores. 

En esta clase, vamos a explorar en profundidad el uso de objetos en JavaScript, desde cómo se crean y se accede a sus propiedades, hasta cómo se utilizan en conjunto con otras características del lenguaje para crear programas más complejos. Veremos ejemplos prácticos y explicaciones detalladas para entender cómo sacar el máximo provecho de estas herramientas fundamentales de JavaScript.

Lee la información a continuación con calma y toma nota de las dudas que surgan para que las puedas resolver en clase.

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

## Literales y propiedades

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

## Tutotial de Objetos

En el siguiente video, aprenderás más sobre los objetos:

{{< youtube 4xig5UPRC00 >}}