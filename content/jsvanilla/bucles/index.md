---
title: "Estructura de Control: Bucles"
date: 2023-01-24T11:11:24-05:00
draft: false
showPagination: false
---

## Bucles

Usualmente necesitamos repetir acciones.

Por ejemplo, mostrar los elementos de una lista uno tras otro o simplemente ejecutar el mismo código para cada número del 1 al 10.

Los Bucles son una forma de repetir el mismo código varias veces.

### El bucle "while"

El bucle `while` (mientras) tiene la siguiente sintaxis:

```js
while (condition) {
  // código
  // llamado "cuerpo del bucle"
}
```

Mientras la condición `condition` sea verdadera, el `código` del cuerpo del bucle será ejecutado.

Por ejemplo, el bucle debajo imprime `i` mientras se cumpla `i < 3`:

```js run
let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  alert( i );
  i++;
}
```

Cada ejecución del cuerpo del bucle se llama *iteración*. El bucle en el ejemplo de arriba realiza 3 iteraciones.

Si faltara `i++` en el ejemplo de arriba, el bucle sería repetido (en teoría) eternamente. En la práctica, el navegador tiene maneras de detener tales bucles desmedidos; y en el JavaScript del lado del servidor, podemos eliminar el proceso.

Cualquier expresión o variable puede usarse como condición del bucle, no solo las comparaciones: El `while` evaluará y transformará la condición a un booleano.

Por ejemplo, una manera más corta de escribir `while (i != 0)` es `while (i)`:

```js
let i = 3;

while (i) { // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá

  alert( i );
  i--;
}
```
### El bucle "for"

El bucle `for` es más complejo, pero también el más usado.

Se ve así:

```js
for (begin; condition; step) { // (comienzo, condición, paso)
  // ... cuerpo del bucle ...
}
```

Aprendamos el significado de cada parte con un ejemplo. El bucle debajo corre `alert(i)` para `i` desde `0` hasta (pero no incluyendo) `3`:

```js run
for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
  alert(i);
}
```

Vamos a examinar la declaración `for` parte por parte:

| parte  |          |                         |
|-------|----------|----------------------------------------------------------------------------|
| comienzo | `let i = 0`    | Se ejecuta una vez al comienzo del bucle.                         |
| condición | `i < 3`| Comprobada antes de cada iteración del bucle. Si es falsa, el bucle finaliza.             |
| cuerpo | `alert(i)`| Se ejecuta una y otra vez mientras la condición sea verdadera.                         |
| paso | `i++`  | Se ejecuta después del cuerpo en cada iteración. |

El algoritmo general del bucle funciona de esta forma:
```
Se ejecuta comenzar
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ ...
```

Si eres nuevo en bucles, te podría ayudar regresar al ejemplo y reproducir cómo se ejecuta paso por paso en una pedazo de papel.

Esto es lo que sucede exactamente en nuestro caso:

```js
// for (let i = 0; i < 3; i++) alert(i)
// se ejecuta comenzar
let i = 0
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) { alert(i); i++ }
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) { alert(i); i++ }
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) { alert(i); i++ }
// ...finaliza, porque ahora i == 3
```

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>Declaración de variable en línea</b>
  </div>
  <span class="dark:text-neutral-300">
Aquí, la variable "counter" `i` es declarada en el bucle. Esto es llamado una declaración de variable "en línea". Dichas variables son visibles solo dentro del bucle.

{{< highlight js "hl_lines=1" >}}
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no existe dicha variable
{{< /highlight >}}
En vez de definir una variable, podemos usar una que ya exista:
```js
let i = 0;
for (i = 0; i < 3; i++) { // usa una variable existente
  alert(i); // 0, 1, 2
}
alert(i); // 3, visible, porque fue declarada fuera del bucle
```
  </span>
</div>

## Recursos Externos

Para seguir aprendiendo sobre los bucles y como funcionan, puedes visitar los siguientes enlaces:

### Recursos de aprendejavascript.dev

- [Bucles con while](https://www.aprendejavascript.dev/clase/estructuras-de-control/bucles-con-while)
- [Bucles con do while](https://www.aprendejavascript.dev/clase/estructuras-de-control/bucles-con-do-while)
- [Expresiones y declaraciones](https://www.aprendejavascript.dev/clase/estructuras-de-control/expresiones-y-declaraciones)
- [Bucles con for](https://www.aprendejavascript.dev/clase/estructuras-de-control/bucles-con-for)

Asímismo continúa con las lecciones de freecodecamp:

[Javascript - FreeCodeCamp](https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/#basic-javascript)