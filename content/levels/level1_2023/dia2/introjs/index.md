---
title: "JavaScript"
date: 2023-01-23T17:50:44-05:00
draft: false
showPagination: false

---

<!-- JS: intro, tipos de datos, palabras clave y operaciones basicas - buenas practicas -->


## Una introducción a JavaScript

Veamos qué tiene de especial JavaScript, qué podemos lograr con este lenguaje y qué otras tecnologías se integran bien con él.

### ¿Qué es JavaScript?

JavaScript fue creado para “dar vida a las páginas web”.

Los programas en este lenguaje se llaman scripts. Se pueden escribir directamente en el HTML de una página web y ejecutarse automáticamente a medida que se carga la página.

Los scripts se proporcionan y ejecutan como texto plano. No necesitan preparación especial o compilación para correr.

En este aspecto, JavaScript es muy diferente a otro lenguaje llamado [Java](https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)).

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex py-3 items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>¿Por qué se llama JavaScript?</b>
  </div>
  <span class="dark:text-neutral-300">
Cuando JavaScript fue creado, inicialmente tenía otro nombre: “LiveScript”. Pero Java era muy popular en ese momento, así que se decidió que el posicionamiento de un nuevo lenguaje como un “Hermano menor” de Java ayudaría. Pero a medida que evolucionaba, JavaScript se convirtió en un lenguaje completamente independiente con su propia especificación llamada <a href="https://es.wikipedia.org/wiki/ECMAScript" target="_blank">ECMAScript</a>, y ahora no tiene ninguna relación con Java.
  </span>
</div>

Hoy, JavaScript puede ejecutarse no solo en los navegadores, sino también en servidores o incluso en cualquier dispositivo que cuente con un programa especial llamado [El motor o intérprete de JavaScript](https://es.wikipedia.org/wiki/Int%C3%A9rprete_de_JavaScript).

Diferentes motores tienen diferentes “nombres en clave”. Por ejemplo:

- [V8](https://es.wikipedia.org/wiki/V8_(int%C3%A9rprete_de_JavaScript)) – en Chrome, Opera y Edge.
- [SpiderMonkey](https://es.wikipedia.org/wiki/SpiderMonkey) – en Firefox.
- …Existen otros nombres en clave como “Chakra” para IE , “JavaScriptCore”, “Nitro” y “SquirrelFish” para Safari, etc.

Es bueno recordar estos términos porque son usados en artículos para desarrolladores en internet. Por ejemplo, si “la característica X es soportada por V8”, entonces probablemente funciona en Chrome, Opera y Edge.

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex py-3 items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>¿Como trabajan los motores?</b>
  </div>
  <span class="dark:text-neutral-300">
Los motores son complicados, pero los fundamentos son fáciles.

1. El motor (embebido si es un navegador) lee (“analiza”) el script.
2. Luego convierte (“compila”) el script a lenguaje de máquina.
3. Por último, el código máquina se ejecuta, muy rápido.


El motor aplica optimizaciones en cada paso del proceso. Incluso observa como el script compilado se ejecuta, analiza los datos que fluyen a través de él y aplica optimizaciones al código maquina basadas en ese conocimiento.
  </span>
</div>

## Tipos de datos

Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.

Hay ocho tipos de datos básicos en JavaScript. En esta semana cubriremos la mayoría en general y posteriormente hablaremos de cada uno de ellos en detalle.

Podemos almacenar un valor de cualquier tipo dentro de una variable. Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número

```js
// no hay error
let message = "hola";
message = 123456;
```

Los lenguajes de programación que permiten estas cosas, como JavaScript, se denominan “dinámicamente tipados”, lo que significa que allí hay tipos de datos, pero las variables no están vinculadas rígidamente a ninguno de ellos.

### Number

```js
let n = 123;
n = 12.345;
```

El tipo _number_ representa tanto números enteros como de punto flotante.

Hay muchas operaciones para números. Por ejemplo, multiplicación `*`, división `/`, suma `+`, resta `-`, y demás.

### String

Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.

```js
let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;
```

En JavaScript, hay 3 tipos de comillas.

1. Comillas dobles: `  "Hola"  `.
2. Comillas simples: `  'Hola'  `.
3. Backticks (comillas invertidas): <code>  &#96;Hola&#96;  </code>.

Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.

Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en `${...}`, por ejemplo:

```js run
let name = "John";
// incrustar una variable
alert( `Hola, *!*${name}*/!*!` ); // Hola, John!
// incrustar una expresión
alert( `el resultado es *!*${1 + 2}*/!*` ); // el resultado es 3
```

La expresión dentro de `${...}` se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como `name`, una expresión aritmética como `1 + 2`, o algo más complejo.

Toma en cuenta que esto sólo se puede hacer con los backticks. ¡Las otras comillas no tienen esta capacidad de incrustación!

```js
alert( "el resultado es ${1 + 2}" ); 
// el resultado es ${1 + 2} 
// (las comillas dobles no hacen nada)
```

### Boolean (tipo lógico)
El tipo boolean tiene sólo dos valores posibles: `true` y `false`.

Este tipo se utiliza comúnmente para almacenar valores de sí/no: `true` significa “sí, correcto, verdadero”, y `false` significa “no, incorrecto, falso”.

Por ejemplo:

```js
let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado
```

Los valores booleanos también son el resultado de comparaciones:

```js
let isGreater = 4 > 1;

alert( isGreater ); // verdadero (el resultado de la comparación es "sí")
```

### Object
El tipo `object` (objeto) es especial.

Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.

Siendo así de importantes, los objetos merecen un trato especial. Nos ocuparemos de ellos más adelante después de aprender más sobre los primitivos.

### El operador typeof
El operador `typeof` devuelve el tipo de dato del operando. Es útil cuando queremos procesar valores de diferentes tipos de forma diferente o simplemente queremos hacer una comprobación rápida.

La llamada a `typeof x` devuelve un string con el nombre del tipo:

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

## Operadores Básicos

Conocemos varios operadores matemáticos porque nos los enseñaron en la escuela. Son cosas como la suma `+`, multiplicación `*`, resta `-`, etcétera.

### Términos: “unario”, “binario”, “operando”

Antes de continuar, comprendamos la terminología común.

- Un operando – es a lo que se aplican los operadores. Por ejemplo, en la multiplicación de `5 * 2` hay dos operandos: el operando izquierdo es `5` y el operando derecho es `2`. A veces, la gente los llama “argumentos” en lugar de “operandos”.

- Un operador es unario si tiene un solo operando. Por ejemplo, la negación unaria `-` invierte el signo de un número:

  ```js
  let x = 1;

  x = -x;
  alert( x ); // -1, se aplicó negación unaria
  ```

- Un operador es binario si tiene dos operandos. El mismo negativo también existe en forma binaria:

  ```js
  let x = 1, y = 3;
  alert( y - x ); // 2, binario negativo resta valores
  ```

Formalmente, estamos hablando de dos operadores distintos: la negación unaria (un operando: revierte el símbolo) y la resta binaria (dos operandos: resta).

### Matemáticas

Están soportadas las siguientes operaciones:

- Suma `+`,
- Resta `-`,
- Multiplicación `*`,
- División `/`,
- Resto `%`,
- Exponenciación *`*`.

Los primeros cuatro son conocidos mientras que `%` y `**` deben ser explicados más ampliamente.

### Resto %

El operador resto `%`, a pesar de su apariencia, no está relacionado con porcentajes.

El resultado de `a % b` es el resto de la división entera de `a` por `b`.

Por ejemplo:

```js
alert( 5 % 2 ); // 1, es el resto de 5 dividido por 2
alert( 8 % 3 ); // 2, es el resto de 8 dividido por 3
alert( 8 % 4 ); // 0, es el resto de 8 dividido por 4
```

### Exponenciación **

El operador exponenciación `a ** b` eleva a a la potencia de `b`.

En matemáticas de la escuela, lo escribimos como a<sup>b</sup>.

Por ejemplo:

```js
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
```

Matemáticamente, la exponenciación está definida para operadores no enteros también.

Por ejemplo, la raíz cuadrada es el exponente ½:

```js
alert( 4 ** (1/2) ); // 2 (potencia de 1/2 es lo mismo que raíz cuadrada)
alert( 8 ** (1/3) ); // 2 (potencia de 1/3 es lo mismo que raíz cúbica)
```

### Concatenación de cadenas con el binario +

Ahora veamos las características de los operadores de JavaScript que van más allá de la aritmética escolar.

Normalmente el operador `+` suma números.

Pero si se aplica el `+` binario a una cadena, los une (concatena):

```js
let s = "my" + "string";
alert(s); // mystring
```

Tenga presente que si uno de los operandos es una cadena, el otro es convertido a una cadena también.

Por ejemplo:

```js run
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

Vieron, no importa si el primer operando es una cadena o el segundo.

Aquí hay un ejemplo algo más complejo:

```js run
alert(2 + 2 + '1' ); // "41" y no "221"
```

Aquí, los operadores trabajan uno después de otro. El primer `+` suma dos números entonces devuelve `4`, luego el siguiente `+` le agrega la cadena `1`, así que se evalúa como `4 + '1' = 41`.

```js run
alert('1' + 2 + 2); // "122", no es "14"
```
Aquí el primer operando es una cadena, el compilador trata los otros dos operandos como cadenas también. El `2` es concatenado a `'1'`, entonces es como `'1' + 2 = "12"` y `"12" + 2 = "122"`.

El binario `+` es el único operador que soporta cadenas en esa forma. Otros operadores matemáticos trabajan solamente con números y siempre convierten sus operandos a números.

Por ejemplo, resta y división:

```js run
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3
```

## Operadores Lógicos

Hay cuatro operadores lógicos en JavaScript: `||` (O), `&&` (Y), `!` (NO), `??` (Fusión de nulos). Aquí cubrimos los primeros tres, el operador  `??` se verá más adelante. 

Aunque sean llamados lógicos, pueden ser aplicados a valores de cualquier tipo, no solo booleanos. El resultado también puede ser de cualquier tipo.

Veamos los detalles.

### || (OR)

El operador `OR` se representa con dos símbolos de linea vertical:

```js
result = a || b;
```

En la programación clásica, el OR lógico esta pensado para manipular solo valores booleanos. Si cualquiera de sus argumentos es `true`, retorna `true`, de lo contrario retorna `false`.

En JavaScript, el operador es un poco más complicado y poderoso. Pero primero, veamos qué pasa con los valores booleanos.

Hay cuatro combinaciones lógicas posibles:

```js run
alert(true || true); // true (verdadero)
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false (falso)
```

Como podemos ver, el resultado es siempre `true` excepto cuando ambos operandos son `false`.

Si un operando no es un booleano, se lo convierte a booleano para la evaluación.

Por ejemplo, el número `1` es tratado como `true`, el número `0` como `false`:

```js run
if (1 || 0) { // Funciona como if( true || false )
	alert("valor verdadero!");
}
```

La mayoría de las veces, OR `||` es usado en una declaración `if` para probar si *alguna* de las condiciones dadas es `true`.

Por ejemplo:

```js run
let hour = 9;
*!*
if (hour < 10 || hour > 18) {
*/!*
  alert( 'La oficina esta cerrada.' );
}
```

Podemos pasar mas condiciones:

```js run
let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
	alert("La oficina esta cerrada."); // Es fin de semana
}
```

### && (AND)

El operador AND es representado con dos ampersands `&&`:

```js
result = a && b;
```

En la programación clásica, AND retorna `true` si ambos operandos son valores verdaderos y `false` en cualquier otro caso.

```js run
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

Un ejemplo con `if`:

```js run
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
	alert("La hora es 12:30");
}
```

Al igual que con OR, cualquier valor es permitido como operando de AND: 

```js run
if (1 && 0) { // evaluado como true && false
  alert( "no funcionará porque el resultado es un valor falso" );
}
```

### Más operadores en JS

Para seguir aprendiendo de estos operadores, mira el siguiente video donde reforzarás el conocimiento sobre los operadores que acabamos de ver y aprenderás algunos más que son comuness:

{{< youtube _8Z5AeGVIXE >}}