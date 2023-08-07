---
title: "Condicionales en PHP"
date: 2023-07-10T18:33:34-05:00
draft: false
showPagination: false
---

Los condicionales son una parte fundamental de cualquier lenguaje de programación, y PHP no es una excepción. Los condicionales permiten tomar decisiones en el flujo de ejecución de un programa, lo que permite que el código se adapte dinámicamente a diferentes situaciones. En este artículo, exploraremos los condicionales en PHP y cómo se utilizan para controlar el comportamiento de tus programas.

## ¿Qué son los condicionales?

Los condicionales son fundamentales para controlar el flujo de ejecución de un programa. Permiten que el código tome diferentes caminos en función de las condiciones que se cumplan en tiempo de ejecución. Esto proporciona flexibilidad y adaptabilidad a nuestros programas, ya que pueden responder de manera diferente según las circunstancias.

Las condiciones en los condicionales suelen estar compuestas por operadores de comparación, como igualdad (==), desigualdad (!=), mayor que (>), menor que (<), etc. También se pueden utilizar operadores lógicos como && (AND), || (OR) y ! (NOT) para combinar múltiples condiciones y obtener resultados más complejos.

Cuando queremos que el programa, llegado a un cierto punto, tome un camino concreto en determinados casos y otro diferente si las condiciones de ejecución difieren, nos servimos del conjunto de instrucciones if, else y elseif.

## Sintaxis

La estructura de base de este tipo de instrucciones en PHP es la siguiente:

```php
if (condición)
{
   Instrucción 1;
   Instrucción 2;
   ...
}
else
{
   Instrucción A;
   Instrucción B;
   ...
}
```

Llegados a este punto, el programa verificará el cumplimiento o no de la condición. Si la condición es cierta las instrucciones 1 y 2 serán ejecutadas. De lo contrario (else), las instrucciones A y B serán llevadas a cabo.

Esta estructura de base puede complicarse un poco más si tenemos cuenta que no necesariamente todo es blanco o negro y que muchas posibilidades pueden darse. Es por ello que otras condiciones pueden plantearse dentro de la condición principal. Hablamos por lo tanto de condiciones anidadas que tendrían una estructura del siguiente tipo:

```php
if (condición1)
{
   Instrucción 1;
   Instrucción 2;
   ...
}
else
{
   if (condición2)
   {
      Instrucción A;
      Instrucción B;
      ...
   }
   else
   {
      Instrucción X
      ...
   }
}
```

De este modo podríamos introducir tantas condiciones como queramos dentro de una condición principal.

De gran ayuda es la instrucción elseif que permite en una sola línea introducir una condición adicional. Este tipo de instrucción simpifica ligeramente la sintaxis que acabamos de ver:

```php
if (condición1)
{
   Instrucción 1;
   Instrucción 2;
   ...
}
elseif (condición2)
{
   Instrucción A;
   Instrucción B;
   ...
}
else
{
   Instrucción X
   ...
}
```

El uso de esta herramienta resultará claro con un poco de práctica. Pongamos un ejemplo sencillo de utilización de condiciones. El siguiente programa permitiría detectar la lengua empleada por el navegador y visualizar un mensaje en dicha lengua.

```php
<HTML>

<HEAD>
    <TITLE>Detector de Lengua</TITLE>
</HEAD>

<BODY>
    <?php

    //Antes de nada introducimos mensajes en forma de variables
    $espanol = "Hola";
    $ingles = "Hello";
    $frances = "Bonjour";

    //Ahora leemos del navegador cuál es su lengua oficial
    $idioma = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

    //Formulamos las posibilidades que se pueden dar
    if ($idioma == "es") {
        echo "$espanol";
    } elseif ($idioma == "fr") {
        echo "$frances";
    } else {
        echo "$ingles";
    }
    ?>
</BODY>

</HTML>

```

Para leer la lengua aceptada por el navegador lo que hacemos es definir una variable ($idioma) y, mediante la función substr, recogemos las dos primeras letras del código correspondiente al idioma aceptado por el navegador ```$_SERVER['HTTP_ACCEPT_LANGUAGE']```.

La tercera parte de script se encarga de ver si el navegador está en español (es), francés (fr) o en cualquier otro idioma que no sea ninguno de estos dos y de imprimir el mensaje que proceda en cada caso.

A notar que, cuando se trata de comparar variables, ponemos un doble igual "==" en lugar de un simple "=". Este último queda reservado exclusivamente para asignar valores a variables.