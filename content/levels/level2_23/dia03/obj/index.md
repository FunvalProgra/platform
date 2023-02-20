---
title: "Arrays y Objetos"
date: 2023-02-17T17:53:18-05:00
draft: false
showPagination: false
---

# Arrays

Hace algunas clases atras, aprendimos las bases de los arrays, sus bases y tambien vimos como este tipo de dato nos permite almacenar multiples valores en una sola variable. También vimos que por medio de algunos metodos, nos permite recorrer su información de manera más sencilla, sin embargo, entender estos métodos no es necesariamente sencillo.

Hoy vamos a aprender un poco más sobre los arrays, y veremos como podemos utilizarlos para almacenar información de manera más compleja. También repasaremos los distintos métodos que tiene y cómo las funciones flecha nos pueden ayudar a simplificar el código.

## Arrays Multidimensionales

Los arrays pueden tener items que a su vez sean arrays. Podemos usarlos como arrays multidimensionales, por ejemplo para almacenar matrices(arrays):

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

```

En este caso, `matrix` es una matriz de 3 filas y 3 columnas. Podemos acceder a los elementos de la matriz utilizando dos índices, uno para la fila y otro para la columna. Por ejemplo, para acceder al elemento en la segunda fila y la tercera columna, podemos hacerlo así:

```js
alert( matrix[1][1] ); // 5, el elemento central

```

También podemos utilizar un bucle for anidado para recorrer todos los elementos de la matriz. Por ejemplo:

```js
for (let i = 0; i < miMatriz.length; i++) {
  for (let j = 0; j < miMatriz[i].length; j++) {
    console.log(miMatriz[i][j]);
  }
}

```

## toString

Los arrays tienen su propia implementación del método `toString` que devuelve un lista de elementos separados por coma.

Por ejemplo:

```javascript
let arr = [1, 2, 3];

alert( String(arr) === '1,2,3' ); // true
alert( arr.toString() === '1,2,3' ); // true
```

Probemos esto también:

```javascript
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
```

Los arrays no tienen `Symbol.toPrimitive` ni un `valueOf` viable, ellos implementan la conversión `toString` solamente, así `[]` se vuelve una cadena vacía, `[1]` se vuelve `"1"` y `[1,2]` se vuelve `"1,2"`.

Cuando el operador binario más `"+"` suma algo a una cadena, lo convierte a cadena también, entonces lo siguiente se ve así:

```javascript
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"
```

## No compares arrays con ==

Las arrays en JavaScript, a diferencia de otros lenguajes de programación, no deben ser comparadas con el operador `==`.

Este operador no tiene un tratamiento especial para arrays, trabaja con ellas como con cualquier objeto.

Recordemos las reglas:


- Dos objetos son iguales `==` solo si hacen referencia al mismo objeto.
- Si uno de los argumentos de `==` es un objeto y el otro es un primitivo, entonces el objeto se convierte en primitivo.
- …Con la excepción de `null` y `undefined` que son iguales `==` entre sí y nada más.

La comparación estricta `===` es aún más simple, ya que no convierte tipos.

Entonces, si comparamos arrays con `==`, nunca son iguales, a no ser que comparemos dos variables que hacen referencia exactamente a la misma array.

Por ejemplo:
```js
alert( [] == [] ); // falso
alert( [0] == [0] ); // falso
```

Estas arrays son técnicamente objetos diferentes. Así que no son iguales. El operador `==` no hace comparaciones de elemento a elemento.

Comparaciones con primitivos también pueden dar resultados aparentemente extraños:

```js
alert( 0 == [] ); // verdadero
alert('0' == [] ); // falso
```

Aquí, en ambos casos, comparamos un primitivo con un objeto array. Entonces la array `[]` se convierte a primitivo para el propósito de comparar y se convierte en una string vacía `''`.

Luego el proceso de comparación continúa con los primitivos.
```js
// después de que [] se convierta en ''
alert( 0 == '' ); // verdadero, ya que '' se convierte en el número 0
alert('0' == '' ); // falso, sin conversión de tipos, strings diferentes
```

Entonces, ¿cómo comparamos arrays?

Simple: no utilices el operador `==`. En lugar, compáralas elemento a elemento en un bucle o utilizando métodos de iteración explicados en la siguiente sección.

## Métodos de Array

{{< youtube bkgXlQp5hbI >}}

# Objects

## Atajo para valores de propiedad


En el código real, a menudo usamos variables existentes como valores de los nombres de propiedades.

Por ejemplo:

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...otras propiedades
  };
}
let user = makeUser("John", 30);
alert(user.name); // John
```

En el ejemplo anterior las propiedades tienen los mismos nombres que las variables. El uso de variables para la creación de propiedades es tán común que existe un *atajo para valores de propiedad* especial para hacerla más corta.

En lugar de `name:name`, simplemente podemos escribir `name`, tal cual:

{{< highlight js "hl_lines=2-6" >}}
function makeUser(name, age) {
  return {
  name, // igual que name:name
  age,  // igual que age:age
  // ...
  };
}
{{< /highlight >}}

Podemos usar ambos tipos de notación en un mismo objeto, la normal y el atajo:

```js
let user = {
  name,  // igual que name:name
  age: 30
};
```

## La prueba de propiedad existente, el operador "in"

Una notable característica de los objetos en JavaScript, en comparación con muchos otros lenguajes, es que es posible acceder a cualquier propiedad. ¡No habrá error si la propiedad no existe!

La lectura de una propiedad no existente solo devuelve `undefined`. Así que podemos probar fácilmente si la propiedad existe:

```js run
let user = {};
alert( user.noSuchProperty === undefined ); // true significa que "no existe tal propiedad"
```

También existe un operador especial para ello: `in`.

La sintaxis es:
```js
"key" in object
```

Por ejemplo:

```js run
let user = { name: "John", age: 30 };
alert( "age" in user );    // mostrará "true", porque user.age sí existe
alert( "blabla" in user ); // mostrará false, porque user.blabla no existe
```

Nota que a la izquierda de `in` debe estar el *nombre de la propiedad* que suele ser un string entre comillas.

Si omitimos las comillas, significa que es una variable. Esta variable debe almacenar la clave real que será probada. Por ejemplo:

```js run
let user = { age: 30 };
let key = "age";
alert( key in user ); // true, porque su propiedad "age" sí existe dentro del objeto
```

Pero... ¿Por qué existe el operador `in`? ¿No es suficiente comparar con `undefined`?

La mayoría de las veces las comparaciones con `undefined` funcionan bien. Pero hay un caso especial donde esto falla y aún así `in` funciona correctamente.

Es cuando existe una propiedad de objeto, pero almacena  `undefined`:

```js run
let obj = {
  test: undefined
};
alert( obj.test ); // es undefined, entonces... ¿Quiere decir realmente existe tal propiedad?
alert( "test" in obj ); //es true, ¡La propiedad sí existe!
```

En el código anterior, la propiedad  `obj.test` técnicamente existe. Entonces el operador `in` funciona correctamente.

Situaciones como esta suceden raramente ya que `undefined` no debe ser explícitamente asignado. Comúnmente usamos `null` para valores "desconocidos" o "vacíos". Por lo que el operador `in` es un invitado exótico en nuestro código.

## Métodos del objeto

Los objetos son creados usualmente para representar entidades del mundo real, como usuarios, órdenes, etc.:

```js
let user = {
  name: "John",
  age: 30
};
```

Y en el mundo real un usuario puede *actuar*: seleccionar algo del carrito de compras, hacer login, logout, etc.

Las acciones son representadas en JavaScript por funciones en las propiedades.

{{< youtube NWt6-iYJJnA >}}

### Ejemplos de Métodos

Para empezar, enseñemos al usuario `user` a decir hola:

{{< highlight js "hl_lines=5-7" >}}

let user = {
  name: "John",
  age: 30
};
user.sayHi = function() {
  alert("¡Hola!");
};
user.sayHi(); // ¡Hola!
{{< /highlight >}}

Aquí simplemente usamos una expresión de función para crear la función y asignarla a la propiedad `user.sayHi` del objeto.

Entonces la llamamos con `user.sayHi()`. ¡El usuario ahora puede hablar!

Una función que es la propiedad de un objeto es denominada su *método*.

Así, aquí tenemos un método `sayHi` del objeto `user`.

Por supuesto, podríamos usar una función pre-declarada como un método, parecido a esto:

{{< highlight js "linenos=table,hl_lines=4-9" >}}

let user = {
  // ...
};
// primero, declara
function sayHi() {
  alert("¡Hola!");
};
// entonces la agrega como un método
user.sayHi = sayHi;
user.sayHi(); // ¡Hola!
{{< /highlight >}}

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>Programación orientada a objetos</b>
  </div>
  <span class="dark:text-neutral-300">

  Cuando escribimos nuestro código usando objetos que representan entidades, eso es llamado [Programación Orientada a Objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos), abreviado: "POO".

  POO (OOP sus siglas en inglés) es una cosa grande, un ciencia interesante en sí misma. ¿Cómo elegir las entidades correctas? ¿Cómo organizar la interacción entre ellas? Eso es arquitectura, y hay muy buenos libros del tópico como "Patrones de diseño: Elementos de software orientado a objetos reutilizable" de E. Gamma, R. Helm, R. Johnson, J. Vissides o "Análisis y Diseño Orientado a Objetos" de G. Booch, y otros.
  </span>
</div>

## "this" en métodos

Es común que un método de objeto necesite acceder a la información almacenada en el objeto para cumplir su tarea.

Por ejemplo, el código dentro de `user.sayHi()` puede necesitar el nombre del usuario `user`.

**Para acceder al objeto, un método puede usar la palabra clave `this`.**

El valor de `this` es el objeto "antes del punto", el usado para llamar al método.

Por ejemplo:

{{< highlight js "linenos=table,hl_lines=5-6" >}}
let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" es el "objeto actual"
    alert(this.name);
  }
};
user.sayHi(); // John
{{< /highlight >}}

Aquí durante la ejecución de `user.sayHi()`, el valor de `this` será `user`.

Técnicamente, también es posible acceder al objeto sin `this`, haciendo referencia a él por medio de la variable externa:

{{< highlight js "linenos=table,hl_lines=5" >}}
let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert(user.name); // "user" en vez de "this"
  }
};
{{< /highlight >}}

...Pero tal código no es confiable. Si decidimos copiar `user` a otra variable, por ejemplo `admin = user` y sobrescribir `user` con otra cosa, entonces accederá al objeto incorrecto.

Eso queda demostrado en las siguientes lineas:

{{< highlight js "linenos=table,hl_lines=5 15" >}}
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // lleva a un error
  }

};


let admin = user;
user = null; // sobrescribimos para hacer las cosas evidentes

admin.sayHi(); // TypeError: No se puede leer la propiedad 'name' de null
{{< /highlight >}}

Si usamos `this.name` en vez de `user.name` dentro de `alert`, entonces el código funciona.

## Complejidad de Objetos

El método "this" es un concepto simple, pero tiene algunas peculiaridades que pueden ser confusas al principio. Si bien es cierto en este curso no tocaremos a fondo la POO, es importante entender cómo funciona `this`, ya que es un concepto clave en JavaScript.

Si deseas saber más de este concepto, puedes ver el siguiente video donde se realiza ejemplo de apliacación de este concepto. Aunque no es obligatorio verlo, te lo recomendamos para que tengas una mejor comprensión de este concepto:

{{< youtube NWt6-iYJJnA >}}