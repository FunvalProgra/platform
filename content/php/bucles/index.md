---
title: "Bucles en PHP"
date: 2023-07-10T18:56:44-05:00
draft: false
showPagination: false
---

Los ordenadores, como cualquier máquina, están diseñados para realizar tareas repetitivas. Es por ello que nuestros programas pueden aprovecharse de este principio para realizar una determinada secuencia de instrucciones un cierto número de veces. Para ello, utilizamos las estructuras llamadas en bucle que nos ayudan a, usando unas pocas líneas, realizar una tarea incluida dentro del bucle un cierto numero de veces definido por nosotros mismos.

PHP propone varios tipos de bucle cada uno con características especificas:

## Bucle while

Lo usamos para ejecutar las instrucciones contenidas en su interior siempre y cuando la condición definida sea verdadera. La estructura sintáctica es la siguiente:

```php
while (condición)
{
   instruccion1;
   instruccion2;
   ...
}
```

Un ejemplo sencillo es este bucle que aumenta el tamaño de la fuente en una unidad a cada nueva vuelta por el bucle:

```php
<?php
$size=1;
While ($size<=6)
{
   echo"<font size=$size>Tamaño $size</font><br>";
   $size++;
}
?>
```

Hemos de definir el valor de la variable que vamos a evaluar en la condición. Algo absolutamente obvio pero fácil de olvidar. En este caso le hemos atribuido un valor de 1 que corresponde a la letra más pequeña.

El paso siguiente es crear el bucle en el que imponemos la condición que la variable no exceda el valor de 6.

La instrucción a ejecutar será imprimir en nuestro documento un código HTML en el que la etiqueta font y el mensaje que contiene varían a medida que $size cambia su valor.

El siguiente paso es incrementar en una unidad el valor de $size. Esto se puede hacer con una expresión como la mostrada en el bucle ($size++) que en realidad es sinónima de:

```php
$size=$size+1
```

El bucle while se suele utiliza cuando no se sabe exactamente cuantas iteraciones se deben realizar antes de acabar. Vamos a utilizarlo en otro ejemplo, en el que hay que recorrer una cadena hasta encontrar un carácter dado. Si lo encuentra, escribir su posición. Si no, escribir que no se ha encontrado.

{{< alert >}}
<b>Nota:</b> Para hacer este ejercicio necesitamos conocer la función de cadena `strlen()`, que obtiene la longitud de la cadena que se le pase por parámetro.

```php
int strlen (string cad)
```

Devuelve un entero igual a la longitud de la cadena.
{{</ alert >}}

```php
<?php
$cadena = "mhola a todo el mundo";

//recorro la cadena hasta encontrar una "m"
$i = 0;
while ($cadena[$i] != "m" && $i < strlen($cadena)) {
    $i++;
}

if ($i == strlen($cadena))
    echo "No se encuentra...";
else
    echo "Está en la posición $i";
?>
```

En este ejemplo se define una cadena con el valor "hola a todo el mundo". Posteriormente se recorre esa cadena hasta el final de la cadena o hasta encontrar el caracter "m", utilizando una variable $i que lleva la cuenta de los caracteres recorridos.

Al final del bucle while, si se salió porque se encontró el caracter "m", la variable $i valdrá un número menor que la longitud de la cadema. Si se salió por llegar al final de la cadena, la variable $i valdrá lo mismo que la longitud en caracteres de esa cadena. En el condicional simplemente se comprueba si $i vale o no lo mismo que la longitud de la cadena, mostrando los mensajes adecuados en cada caso.

## Bucle do/while

Como ya hemos visto anteriormente, este bucle es muy similar al anterior. La sintaxis es la siguiente:

```php
do
{
   instruccion1;
   instruccion2;
   ...
}
while (condición)
```

La diferencia con respecto a los bucles while es que este tipo de bucle evalúa la condición al final con lo que, incluso siendo falsa desde el principio, éste se ejecuta al menos una vez.

## Bucle for

PHP está provisto de otros tipos de bucle que también resultan muy prácticos en determinadas situaciones. El más popular de ellos es el bucle "for" que, como para los casos anteriores, se encarga de ejecutar las instrucciones entre llaves. La diferencia con los anteriores radica en cómo se plantea la condición de finalización del bucle. Para aclarar su funcionamiento vamos a expresar el ejemplo de bucle while visto en el capítulo anterior en forma de bucle for:

```php
<?php
for ($size = 1; $size <= 6; $size++) {
    echo "<font size=$size>Tamaño $size</font><br>";
}
?>
```

## Bucle foreach

Este bucle, implementado en las versiones de PHP4, nos ayuda a recorrer los valores de un array lo cual puede resultar muy útil por ejemplo para efectuar una lectura rápida del mismo. Recordamos que un array es una variable que guarda un conjunto de elementos (valores) catalogados por claves.

La estructura general es la siguiente:

```php
foreach ($array as $clave => $valor) {
    instruccion1;
    instruccion2;
    ;
}
```

Un ejemplo práctico es la lectura de un array lo cual podría hacerse del siguiente modo:

```php
<?php
$moneda=array("España"=> "Peseta","Francia" => "Franco","USA" => "Dolar");
foreach ($moneda as $clave=>$valor)
{
   echo "Pais: $clave Moneda: $valor<br>";
}
?>
```

## Break y continue

Estas dos instrucciones se introducen dentro de la estructura y nos sirven respectivamente para escapar del bucle o saltar a la iteración siguiente. Pueden resultarnos muy prácticas en algunas situaciones.

Durante una iteración de un bucle podemos saltar directamente a la siguiente iteración, sin seguir con la actual, con la instrucción continue.

También podemos detener completamente las repeticiones de cualquier bucle con break, lo que parará la ejecución de la iteración actual y de las siguientes que pudiera haber.

## Video de repaso

{{< youtube Pgm966AnBp0 >}}
