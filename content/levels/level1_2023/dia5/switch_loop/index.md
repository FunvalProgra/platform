---
title: "Switch y Bucles"
date: 2023-01-25T12:52:12-05:00
draft: false
showPaginations: false
---

## Switch

Una sentencia `switch` puede reemplazar múltiples condiciones `if`.

Provee una mejor manera de comparar un valor con múltiples variantes.

### La sintaxis

`switch` tiene uno o mas bloques `case`y un opcional `default`.

Se ve de esta forma:

```js no-beautify
switch(x) {
  case 'valor1':  // if (x === 'valor1')
    ...
    [break]
  case 'valor2':  // if (x === 'valor2')
    ...
    [break]
  default:
    ...
    [break]
}
```

- El valor de `x` es comparado contra el valor del primer `case` (en este caso, `valor1`), luego contra el segundo (`valor2`) y así sucesivamente, todo esto bajo una igualdad estricta.
- Si la igualdad es encontrada, `switch` empieza a ejecutar el código iniciando por el primer `case` correspondiente, hasta el `break` más cercano (o hasta el final del `switch`).
- Si no se cumple ningún caso entonces el código `default` es ejecutado (si existe).

### Ejemplo

Un ejemplo de `switch` (se resalta el código ejecutado):

```js run
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Muy pequeño' );
    break;
  case 4:
    alert( '¡Exacto!' ); // Se ejecuta esta línea
    break;
  case 5:
    alert( 'Muy grande' );
    break;
  default:
    alert( "Desconozco estos valores" );
}
```

Aquí el `switch` inicia comparando `a` con la primera variante `case` que es `3`. La comparación falla.

Luego `4`. La comparación es exitosa, por tanto la ejecución empieza desde `case 4` hasta el `break` más cercano.

**Si no existe `break` entonces la ejecución continúa con el próximo `case` sin ninguna revisión.**

Un ejemplo sin `break`:

```js run
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Muy pequeño' );
// Se ejecuta todas las lineas de abajo
  case 4:
    alert( '¡Exacto!' );
  case 5:
    alert( 'Muy grande' );
  default:
    alert( "Desconozco estos valores" );
// Se ejecuta todas las lineas de arriba

}
```

En el ejemplo anterior veremos ejecuciones de tres `alert` secuenciales:

```js
alert( '¡Exacto!' );
alert( 'Muy grande' );
alert( "Desconozco estos valores" );
```
### El tipo importa

Vamos a enfatizar que la comparación de igualdad es siempre estricta. Los valores deben ser del mismo tipo para coincidir.

Por ejemplo, consideremos el código:

```js run
let arg = prompt("Ingrese un valor");
switch (arg) {
  case '0':
  case '1':
    alert( 'Uno o cero' );
    break;
  case '2':
    alert( 'Dos' );
    break;
  case 3:
    alert( '¡Nunca ejecuta!' );
    break;
  default:
    alert( 'Un valor desconocido' );
}
```

1. Para `0`, `1`, se ejecuta el primer `alert`.
2. Para `2` se ejecuta el segundo `alert`.
3. Pero para `3`, el resultado del `prompt` es un string `"3"`, el cual no es estrictamente igual `===` al número `3`. Por tanto ¡Tenemos un código muerto en `case 3`! La variante `default` se ejecutará.
 
### Debería usar switch?

Si bien es cierto, switch puede parecer una alternativa viable para ciertas situaciones con las que nos encontremos, en la actualidad hay muchas formas y motivos por los que su uso ha descendido y se debería evitar, sobre todo al escalar nuestro proyecto. En el siguiente video aprenderás como evitar su uso y mantener buenas prácticas en tu código (en el ejemplo se hace uso de la estructura objetos, ternarias y operadores lógicos, por ahora enfocate en el concepto en sí más que en las estructuras que se usan):

{{< youtube 0NlsJuwFsrQ >}}

## Bucles

Hasta el momento hemos aprendido 3 tipos de bucles: `while`, `do while` y `for`. En el siguiente video repasaremos el uso de ellos y tambien veremos el uso de algunas variaciones de este último que son `for in` y `for of`:

{{< youtube AapgtR0Rwk0 >}}

Dentro de W3Schools encontramos información detallada acerca de cada uno, aquí te dejo articulos sobre los distintos loops(ciclos), puedes cambiar el idioma a español en tu navegador Chrome o Edge dando click derecho en la pagina y seleccionando la opción "Traducir a español":

- [Ciclo For](https://www.w3schools.com/js/js_loop_for.asp)
- [ciclo For in](https://www.w3schools.com/js/js_loop_forin.asp)
- [Ciclo For Of](https://www.w3schools.com/js/js_loop_forof.asp)
- [Ciclo While ](https://www.w3schools.com/js/js_loop_while.asp)