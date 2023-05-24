---
title: "Object Methods - Métodos de Objeto"
date: 2023-05-22T19:54:51-05:00
draft: false
showPagination: false
---

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

<!-- ## La prueba de propiedad existente, el operador "in"

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

Situaciones como esta suceden raramente ya que `undefined` no debe ser explícitamente asignado. Comúnmente usamos `null` para valores "desconocidos" o "vacíos". Por lo que el operador `in` es un invitado exótico en nuestro código. -->

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

## Más sobre Métodos

<!-- 15 minutos -->
{{< youtube B8-RBdKVKug >}}

# Profundizando en Arrays

Sabemos que asi como los objetos, los arrays tienen su complejidad, no solo por la cantidad de datos que pueden organizar, sino tambien por los métodos que nos permiten manipularlos. Hoy repasaremos todo sobre este tipo de dato. Ten en cuenta tomar nota de los métodos que mas te interesen, ya que no es necesario memorizarlos todos, sino saber que existen y como buscarlos cuando los necesitemos. 

{{< youtube LYF4FeJyccc >}}