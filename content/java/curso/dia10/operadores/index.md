---
title: "Operadores"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

Cada una de las instrucciones if, if...else, while, do...while y for requieren una condición para determinar cómo continuar con el fl ujo de control de un programa. Hasta ahora sólo hemos estudiado las condiciones simples, como cuenta <= 10, numero != valorCentinela y total > 1000. Las condiciones simples se expresan en términos de los operadores relacionales >, <, >= y <=, y los operadores de igualdad == y !=; cada expresión evalúa sólo una condición.
 Para evaluar condiciones múltiples en el proceso de tomar una decisión, ejecutamos 
estas pruebas en instrucciones separadas o en instrucciones if o if...else anidadas. En ocasiones, las instrucciones de control requieren condiciones más complejas para determinar el fl ujo de control de un programa.
Java cuenta con los operadores lógicos para que usted pueda formar condiciones más complejas, al combinar las condiciones simples. Los operadores lógicos son && (AND condicional), || (OR condicional), & (AND 
lógico booleano), | (OR inclusivo lógico booleano), ^ (OR exclusivo lógico booleano) y ! (NOT lógico).

Los operadores lógicos en Java son utilizados para combinar o negar expresiones booleanas y evaluar su veracidad. Los operadores lógicos más comunes son:

<ol>
    <li>Operador AND (&&): Retorna true si ambas expresiones son verdaderas. Si alguna de las expresiones es falsa, el resultado será false.</li>
    <li>Operador OR (||): Retorna true si al menos una de las expresiones es verdadera. Si ambas expresiones son falsas, el resultado será false.</li>
    <li>Operador NOT (!): Invierte el valor de una expresión booleana. Si la expresión es true, el resultado será false, y si la expresión es false, el resultado será true.</li>
</ol>

Ten en cuenta que los operadores lógicos se evalúan de izquierda a derecha y pueden combinarse para formar expresiones más complejas. También se pueden utilizar paréntesis para controlar el orden de evaluación y agrupar expresiones.

Es importante comprender cómo funcionan los operadores lógicos y cómo afectan la evaluación de expresiones booleanas en Java, ya que son fundamentales para tomar decisiones basadas en condiciones en programas.

### Operador AND (&&) condicional

Suponga que deseamos asegurar en cierto punto de una aplicación que dos condiciones sean ambas verdaderas, 
antes de elegir cierta ruta de ejecución. En este caso, podemos utilizar el operador && (AND condicional) de 
la siguiente manera:
``` java
    if ( genero == FEMENINO && edad >= 65 )
    ++mujeresMayores;
```
Esta instrucción if contiene dos condiciones simples. La condición genero == FEMENINO compara la variable 
genero con la constante FEMENINO. Por ejemplo, esto podría evaluarse para determinar si una persona es mujer. 
La condición edad >= 65 podría evaluarse para determinar si una persona es un ciudadano mayor. La instrucción 
if considera la condición combinada

    genero == FEMENINO && edad >= 65

la cual es verdadera si, y sólo si ambas condiciones simples son verdaderas. Si la condición combinada es verdadera, el cuerpo de la instrucción if incrementa a mujeresMayores en 1. Si una o ambas condiciones simples son 
falsas, el programa omite el incremento. Algunos programadores consideran que la condición combinada anterior 
es más legible si se agregan paréntesis redundantes, como por ejemplo:

    ( genero == FEMENINO ) && ( edad >= 65 )

La tabla de la fi gura 5.14 sintetiza el uso del operador &&. Esta tabla muestra las cuatro combinaciones posibles 
de valores false y true para expresión1 y expresión2. A dichas tablas se les conoce como tablas de verdad. Java 
evalúa todas las expresiones que incluyen operadores relacionales, de igualdad o lógicos como true o false.

### Operador OR condicional (||)

Ahora suponga que deseamos asegurar que cualquiera o ambas condiciones sean verdaderas antes de elegir cierta 
ruta de ejecución. En este caso, utilizamos el operador || (OR condicional), como se muestra en el siguiente 
segmento de un programa:
``` java
    if ( ( promedioSemestre >= 90 ) || ( examenFinal >= 90 ) )
    System.out.println ( “La calificacion del estudiante es A” );
```
Esta instrucción también contiene dos condiciones simples. La condición promedioSemestre >= 90 se evalúa 
para determinar si el estudiante merece una A en el curso, debido a que tuvo un sólido rendimiento a lo largo 
del semestre. La condición examenFinal >= 90 se evalúa para determinar si el estudiante merece una A en el 
curso debido a un desempeño sobresaliente en el examen fi nal. Después, la instrucción if considera la condición 
combinada
( promedioSemestre >= 90 ) || ( examenFinal >= 90 )
y otorga una A al estudiante si una o ambas de las condiciones simples son verdaderas. La única vez que no se 
imprime el mensaje “La calificación del estudiante es A” es cuando ambas condiciones simples son 
falsas. El operador && tiene mayor 
precedencia que el operador ||. Ambos operadores se asocian de izquierda a derecha.

### Operadores AND lógico booleano (&) y OR inclusivo lógico booleano (|)

Los operadores AND lógico booleano (&) y OR inclusivo lógico booleano (|) funcionan en forma idéntica 
a los operadores && (AND condicional) y || (OR condicional), con una excepción: los operadores lógicos booleanos siempre evalúan ambos operandos (es decir, no realizan una evaluación en corto circuito). Por lo tanto, la 
expresión

    ( genero == 1 ) & ( edad >= 65 )

evalúa edad >= 65, sin importar que genero sea igual o no a 1. Esto es útil si el operando derecho del operador 
AND lógico booleano o del OR inclusivo lógico booleano tiene un efecto secundario requerido: la modifi cación 
del valor de una variable. Por ejemplo, la expresión

    ( cumpleanios == true ) | ( ++edad >= 65 )

garantiza que se evalúe la condición ++edad >= 65. Por ende, la variable edad se incrementa en la expresión 
anterior, sin importar que la expresión total sea true o false

### Operador lógico de negación (!)

El operador ! (NOT lógico, también conocido como negación lógica o complemento lógico) “invierte” el significado de una condición. A diferencia de los operadores lógicos &&, ||, &, | y ^, que son operadores binarios 
que combinan dos condiciones, el operador lógico de negación es un operador unario que sólo tiene una condición como operando. Este operador se coloca antes de una condición para elegir una ruta de ejecución si la 
condición original (sin el operador lógico de negación) es false, como en el siguiente segmento de código:
``` java
    if ( ! ( calificacion == valorCentinela ) )
    System.out.printf( “La siguiente calificación es %d\n”, calificacion );
```
que ejecuta la llamada a printf sólo si calificacion no es igual a valorCentinela. Los paréntesis alrededor 
de la condición calificacion == valorCentinela son necesarios, ya que el operador lógico de negación tiene 
mayor precedencia que el de igualdad.
En la mayoría de los casos, puede evitar el uso de la negación lógica si expresa la condición en forma distinta, 
con un operador relacional o de igualdad apropiado. Por ejemplo, la instrucción anterior también puede escribirse 
de la siguiente manera:
``` java
    if ( calificacion != valorCentinela )
    System.out.printf( “La siguiente calificación es %d\n”, calificacion );
```
Esta flexibilidad le puede ayudar a expresar una condición de una manera más conveniente.

{{< figure src="./operadores.png" >}} 

``` java
 1 // OperadoresLogicos.java
 2 // Los operadores lógicos.
 3 
 4 public class OperadoresLogicos 
 5 {
 6 public static void main( String args[] )
 7 {
 8 // crea tabla de verdad para el operador && (AND condicional)
 9 System.out.printf( "s\n%s: %b\n%s: %b\n%s: %b\n%s: %b\n\n",
 10 "AND condicional (&&)", "false && false"( false && false ),
 11 "false && true", ( false && true ), 
 12 "true && false", ( true && false ),
 13 "true && true", ( true && true ) );
 14 
 15 // crea tabla de verdad para el operador || (OR condicional)
 16 System.out.printf( "%s\n%s: %b\n%s: %b\n%s: %b\n%s: %b\n\n",
 17 "OR condicional (||)", "false || false", ( false || false ),
 18 "false || true", ( false || true ),
 19 "true || false", ( true || false ),
 20 "true || true", ( true || true ) );
 21 
 22 // crea tabla de verdad para el operador & (AND lógico booleano)
 23 System.out.printf( "%s\n%s: %b\n%s: %b\n%s: %b\n%s: %b\n\n",
 24 "AND logico booleano (&)", "false & false", ( false & false ),
 25 "false & true", ( false & true ),
 26 "true & false", ( true & false ),
 27 "true & true", ( true & true ) );
 28 
 29 // crea tabla de verdad para el operador | (OR inclusivo lógico booleano)
 30 System.out.printf( "%s\n%s: %b\n%s: %b\n%s: %b\n%s: %b\n\n",
 31 "OR inclusivo logico booleano (|)",
 32 "false | false", ( false | false ),
 33 "false | true", ( false | true ),
 34 "true | false", ( true | false ),
 35 "true | true", ( true | true ) );
 36 
 37 // crea tabla de verdad para el operador ^ (OR exclusivo lógico booleano)
 38 System.out.printf( "%s\n%s: %b\n%s: %b\n%s: %b\n%s: %b\n\n",
 39 "OR exclusivo logico booleano (^)",
 40 "false ^ false", ( false ^ false ),
 41 "false ^ true", ( false ^ true ),
 42 "true ^ false", ( true ^ false ),
 43 "true ^ true", ( true ^ true ) );
 44 
 45 // crea tabla de verdad para el operador ! (negación lógica)
 46 System.out.printf( "%s\n%s: %b\n%s: %b\n", "NOT logico (!)",
 47 "!false"( !false ), "!true", ( !true ) );
 48 } // fin de main
 49 } // fin de la clase OperadoresLogicos
 ```