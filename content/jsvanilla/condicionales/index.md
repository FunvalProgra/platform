---
title: "Estructura de Control: Condicionales"
date: 2023-01-24T11:11:22-05:00
draft: false
showPagination: false
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

{{< youtube 9h5hyh_wDjo >}}
