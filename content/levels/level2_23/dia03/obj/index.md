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