---
title: "Condicionales y Bucles"
date: 2023-01-24T11:11:22-05:00
draft: false
---

Algunas veces, necesitamos ejecutar diferentes acciones basadas en diferentes condiciones.

Para esto podemos usar la sentencia `if` y el operador condicional `?`, también llamado operador de “signo de interrogación”.

## La sentencia "if"

La sentencia `if(...)` evalúa la condición en los paréntesis, y si el resultado es `true` ejecuta un bloque de código.

Por ejemplo:

```js run
let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');

if (year == 2015) alert( '¡Estás en lo cierto!' );

```

Aquí la condición es una simple igualdad (`year == 2015`), pero podría ser mucho mas complejo.

Si quisiéramos ejecutar más de una sentencia, debemos encerrar nuestro bloque de código entre llaves:

```js
if (year == 2015) {
  alert( "¡Es Correcto!" );
  alert( "¡Eres muy inteligente!" );
}
```

Recomendamos siempre encerrar nuestro bloque de código entre llaves `{}` siempre que se utilice la sentencia `if`, inclusive si solo se va a ejecutar una sola sentencia en este caso. Hacer eso mejora la legibilidad.

### Conversión Booleana

La sentencia `if (…)` evalúa la expresión dentro de sus paréntesis y convierte el resultado en booleano.

- El número `0`, un string vacío `""`, `null`, `undefined`, y `NaN` se convierte en `false`. Por esto son llamados valores "falso".
- El resto de los valores se convierten en  `true`, entonces los llamaremos valores "verdadero".

Entonces, el código bajo esta condición nunca se ejecutaría:

```js
if (0) { // 0 es falso
  ...
}
```

...y dentro de esta condición siempre se ejecutará:

```js
if (1) { // 1 es verdadero
  ...
}
```

### La cláusula "else"

La sentencia `if` quizás contenga un bloque "else" opcional. Este se ejecutará cuando la condición sea falsa.

Por ejemplo:
```js run
let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');
if (year == 2015) {
  alert( '¡Lo adivinaste, correcto!' );
} else {
  alert( '¿Cómo puedes estar tan equivocado?' ); // cualquier valor excepto 2015
}
```

### Muchas condiciones: "else if"

Algunas veces, queremos probar variantes de una condición. La clausula `else if` nos permite hacer esto.

Por ejemplo:

```js run
let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');
if (year < 2015) {
  alert( 'Muy poco...' );
} else if (year > 2015) {
  alert( 'Muy Tarde' );
} else {
  alert( '¡Exactamente!' );
}
```

En el código de arriba, JavaScript primero revisa si `year < 2015`. Si esto es falso, continúa a la siguiente condición `year > 2015`. Si esta también es falsa, mostrará la última `alert`.

Podría haber más bloques `else if`.  Y el último  `else` es opcional.

### Ejemplos de Condicionales

En el siguiente video encontrarás mas informción de condicionales e incluso podrás ver el uso de `switch`, una tipo de condicion que no estaremos usando en el curso pero que es importante que conozcas.

{{< youtube 30MAXrqPxKY >}}

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
### El bucle "do..while"

La comprobación de la condición puede ser movida *debajo* del cuerpo del bucle usando la sintaxis `do..while`:

```js
do {
  // cuerpo del bucle
} while (condition);
```

El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.

Por ejemplo:

```js run
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado **al menos una vez** sin importar que la condición sea verdadera. Usualmente, se prefiere la otra forma: `while(…) {…}`.

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

```js run
for (*!*let*/!* i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no existe dicha variable
```
En vez de definir una variable, podemos usar una que ya exista:
```js run
let i = 0;
for (i = 0; i < 3; i++) { // usa una variable existente
  alert(i); // 0, 1, 2
}
alert(i); // 3, visible, porque fue declarada fuera del bucle
```
  </span>
</div>


#### Omitiendo partes

Cualquier parte de `for` puede ser omitida.

Por ejemplo, podemos quitar `comienzo` si no necesitamos realizar nada al inicio del bucle.

Como aquí:

```js run
let i = 0; // Ya tenemos i declarada y asignada
for (; i < 3; i++) { // no hay necesidad de "comenzar"
  alert( i ); // 0, 1, 2
}
```

También podemos eliminar la parte `paso`:

```js run
let i = 0;
for (; i < 3;) {
  alert( i++ );
}
```

Esto hace al bucle idéntico a `while (i < 3)`.

En realidad podemos eliminar todo, creando un bucle infinito:

```js
for (;;) {
  // se repite sin limites
}
```

Por favor, nota que los dos punto y coma `;` del `for` deben estar presentes. De otra manera, habría un error de sintaxis.

### Rompiendo el bucle

Normalmente, se sale de un bucle cuando la condición se vuelve falsa.

Pero podemos forzar una salida en cualquier momento usando la directiva especial `break`.

Por ejemplo, el bucle debajo le pide al usuario por una serie de números, "rompiéndolo" cuando un número no es ingresado:

```js
let sum = 0;
while (true) {
  let value = +prompt("Ingresa un número", '');
*!*
  if (!value) break; // (*)
*/!*
  sum += value;
}
alert( 'Suma: ' + sum );
```

La directiva `break` es activada en la línea `(*)` si el usuario ingresa una línea vacía o cancela la entrada. Detiene inmediatamente el bucle, pasando el control a la primera línea después de el bucle. En este caso, `alert`.

La combinación "bucle infinito + `break` según sea necesario" es ideal en situaciones donde la condición del bucle debe ser comprobada no al inicio o al final de el bucle, sino a la mitad o incluso en varias partes del cuerpo. 

### Continuar a la siguiente iteración

La directiva `continue` es una "versión más ligera" de `break`. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

Podemos usarlo si hemos terminado con la iteración actual y nos gustaría movernos a la siguiente.

El bucle debajo usa `continue` para mostrar solo valores impares:

```js 
for (let i = 0; i < 10; i++) {
  // si es verdadero, saltar el resto del cuerpo
  *!*if (i % 2 == 0) continue;*/!*
  alert(i); // 1, luego 3, 5, 7, 9
}
```

Para los valores pares de `i`, la directiva `continue` deja de ejecutar el cuerpo y pasa el control a la siguiente iteración de `for` (con el siguiente número). Así que el `alert` solo es llamado para valores impares.

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>La directiva `continue` ayuda a disminuir la anidación</b>
  </div>
  <span class="dark:text-neutral-300">
Un bucle que muestra valores impares podría verse así:

```js
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert( i );
  }
}
```
Desde un punto de vista técnico, esto es idéntico al ejemplo de arriba. Claro, podemos simplemente envolver el código en un bloque `if` en vez de usar `continue`.

Pero como efecto secundario, esto crearía un nivel más de anidación (la llamada a `alert` dentro de las llaves). Si el código dentro de `if` posee varias líneas, eso podría reducir la legibilidad en general.
  </span>
</div>

### Más sobre bucles

En el siguiente video vamos a ver algunos ejemplos de como aplicar los bucles que hemos mencionado:

{{< youtube 5ct-3tDiRUY >}}