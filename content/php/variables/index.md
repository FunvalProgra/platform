---
title: "Variables y operadores en PHP"
date: 2023-07-07T20:44:24-05:00
draft: false
showPagination: false
---

## Sintaxis PHP

Reforcemos la sintaxis:

1. **Etiquetas de apertura y cierre**: Para iniciar el código PHP, se utiliza la etiqueta `<?php` y para cerrarlo se utiliza la etiqueta `?>`. Dentro de estas etiquetas se escribe el código PHP.

```php
<?php
// Código PHP aquí
?>
```

#### Nota:

En PHP 7 se eliminaron otros estilos de apertura y cierre del código PHP: <% y %>, así como

```php
<script language="php"> // eliminado en PHP 7
```

2. **Comentarios**: Puedes agregar comentarios en tu código para hacerlo más legible. Los comentarios en PHP se pueden hacer de dos formas: de una sola línea utilizando `//` o en varias líneas usando `/* */`.

```php
// Esto es un comentario de una sola línea

/*
Esto es un comentario
de múltiples líneas
*/
```

3. **Variables**: En PHP, las variables se declaran utilizando el símbolo de `$` seguido del nombre de la variable. No es necesario declarar el tipo de dato.

```php
$nombre = "Juan";
$edad = 25;
```

4. **Impresión de texto**: Puedes imprimir texto en pantalla utilizando la función `echo` o `print`. Ambas funciones se utilizan de manera similar.

```php
echo "Hola, mundo!";
print "Hola, mundo!";
```

5. **Concatenación de cadenas**: Para concatenar cadenas de texto, se utiliza el operador `.`.

```php
$nombre = "Juan";
$apellido = "Pérez";
$nombreCompleto = $nombre . " " . $apellido;
echo $nombreCompleto; // Imprime "Juan Pérez"
```

Estos son solo algunos ejemplos de la sintaxis básica de PHP. El lenguaje ofrece muchas más características, como arrays, bucles más avanzados, manejo de excepciones, clases y objetos, entre otros. Puedes consultar la documentación oficial de PHP para obtener más información sobre la sintaxis y las características del lenguaje.

## Variables y tipos de datos

En PHP, las variables se utilizan para almacenar y manipular datos. Aquí tienes ejemplos de cómo declarar variables y los diferentes tipos de operadores disponibles:

### Variables

En PHP, las variables se declaran utilizando el símbolo de `$` seguido del nombre de la variable. No es necesario especificar el tipo de dato al declarar una variable, ya que PHP es un lenguaje de programación con variables de tipado dinámico.

```php
$nombre = "Juan"; // Variable de tipo string
$edad = 25; // Variable de tipo entero
$precio = 10.5; // Variable de tipo float
$esEstudiante = true; // Variable de tipo boolean
```

### Matrices, tablas o arrays

Es un tipo de datos en el que, en lugar de tener un dato, podemos almacenar un conjunto de ellos, a los que accedemos a través de índices. Cada una de las casillas de un array o los datos de nuestra matriz a su vez almancenan informaciones numéricas y/o alfanuméricas, pudiendo mezclar tipos de variables de manera arbitraria entre sus distintas casillas. Te muestro algunos ejemplos:

```php
$sentido[1]="ver";
$sentido[2]="tocar";
$sentido[3]="oir";
$sentido[4]="gusto";
$sentido[5]="oler";
```

Más adelante hablaremos más profundamente acerca de los arrays en PHP.

### Objetos

Se trata de conjuntos de variables y funciones asociadas. Presentan una complejidad mayor que las variables vistas hasta ahora pero su utilidad es más que interesante. Entraremos con detalle en los objetos más adelante, ya que su complejidad hace difícil explicarlas ahora.

## PHP tiene tipado dinámico

A diferencia de otros lenguajes, PHP posee una gran flexibilidad a la hora de operar con variables. En efecto, cuando definimos una variable asignándole un valor, el ordenador le atribuye un tipo. Si por ejemplo definimos una variable entre comillas, la variable será considerada de tipo cadena:

```php
$variable="5"; //esto es una cadena
```

Sin embargo, si pedimos en nuestro script realizar una operación matemática con esta variable, no obtendremos un mensaje de error sino que la variable cadena será asimilada a numérica (PHP hará todo lo posible por interpretar nuestra operación, aunque técnicamente no tenga mucho sentido hacer determinadas operaciones):

```php
<?
$cadena="5"; //esto es una cadena
$entero=3; //esto es un entero
echo $cadena+$entero
?>
```

Este script dará como resultado 8. La variable cadena ha sido asimilada en entero (aunque su tipo sigue siendo cadena) para poder realizar la operación matemática. Del mismo modo, podemos operar entre variables tipo entero y real. No debemos preocuparnos de nada, PHP se encarga durante la ejecución de interpretar el tipo de variable necesario para el buen funcionamiento del programa.

{{<alert>}}
**Nota:** Los lenguajes como PHP que permiten mayor flexibilidad en los tipos de las variables se dicen que tienen tipado dinámico. En ellos una variable puede tener distintos tipos a lo largo de su vida, es decir, a medida que el programa se ejecuta una variable podrá cambiar de tipo. Generalmente durante el procesamiento del programa se va infiriendo los tipos de las variables, en tiempo de ejecución, según el tipo de datos del valor que se le asigna o las operaciones que se realizan sobre ellas. Otra manera de referirse a este tipo de lenguajes de programación es "débilmente tipados", aunque esta segunda denominación es menos correcta, porque puede inducir a una comprensión errónea, ya que en la realidad las variables siempre tienen tipos, aunque estos puedan variar con el tiempo.
{{</alert>}}

## Operadores

**Operadores aritméticos:**
PHP proporciona operadores aritméticos para realizar operaciones matemáticas básicas.

```php
$a = 10;
$b = 5;

$suma = $a + $b; // Suma: 15
$resta = $a - $b; // Resta: 5
$producto = $a * $b; // Multiplicación: 50
$division = $a / $b; // División: 2
$modulo = $a % $b; // Módulo: 0 (resto de la división)
$exponente = $a ** $b; // Exponente: 100000
```

**Operadores de asignación:**
Los operadores de asignación se utilizan para asignar valores a variables.

```php
$a = 10;
$b = 5;

$c = $a; // Asignación: $c tiene el valor de $a (10)
$a += $b; // Suma y asignación: $a se incrementa en $b (15)
$a -= $b; // Resta y asignación: $a se decrementa en $b (10)
$a *= $b; // Multiplicación y asignación: $a se multiplica por $b (50)
$a /= $b; // División y asignación: $a se divide por $b (2)
$a %= $b; // Módulo y asignación: $a se asigna al resto de la división por $b (0)
```

**Operadores de concatenación:**
En PHP, el operador de concatenación `.` se utiliza para unir cadenas de texto.

```php
$nombre = "Juan";
$apellido = "Pérez";

$nombreCompleto = $nombre . " " . $apellido; // Concatenación de cadenas
```

**Operadores de comparación:**
Los operadores de comparación se utilizan para comparar valores y devuelven un resultado booleano.

```php
$a = 10;
$b = 5;

$igual = $a == $b; // Igualdad: false
$diferente = $a != $b; // Desigualdad: true
$mayor = $a > $b; // Mayor que: true
$menor = $a < $b; // Menor que: false
$mayorIgual = $a >= $b; // Mayor o igual que: true
$menorIgual = $a <= $b; // Menor o igual que: false
```

# Variables y operadores PHP

{{< youtube q3_jcSsCLkQ >}}
