---
title: "do while"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

La instrucción de repetición do...while es similar a la instrucción while, ya que el programa evalúa la condición de continuación de ciclo al principio, antes de ejecutar el cuerpo del ciclo. Si la condición es falsa, el cuerpo nunca se ejecuta. La instrucción do...while evalúa la condición de continuación de ciclo después de ejecutar el cuerpo del ciclo; por lo tanto, el cuerpo siempre se ejecuta por lo menos una vez. Cuando termina una instrucción do...while, la ejecución continúa con la siguiente instrucción en la secuencia. El siguiente ejemplo utiliza una instrucción do...while para imprimir los números del 1 al 10.

La línea 8 declara e inicializa la variable de control contador. Al entrar a la instrucción do...while, la 
línea 12 imprime el valor de contador y la 13 incrementa a contador. Después, el programa evalúa la prueba de 
continuación de ciclo al fi nal del mismo (línea 14). Si la condición es verdadera, el ciclo continúa a partir de la 
primera instrucción del cuerpo en la instrucción do...while (línea 12). Si la condición es falsa, el ciclo termina 
y el programa continúa con la siguiente instrucción después del ciclo.

El diagrama de actividad de UML para la instrucción do...while. Este diagrama hace evidente que la condición de continuación de ciclo no se evalúa sino hasta después que el ciclo ejecuta el estado de acción, por lo menos una vez.

No es necesario utilizar llaves en la estructura de repetición do...while si sólo hay una instrucción en el cuerpo. Sin embargo, la mayoría de los programadores incluyen las llaves para evitar la confusión entre las instrucciones while y do...while. Por ejemplo:
while ( condición )
``` java
        2 // La instrucción de repetición do...while.
        3 
        4 public class PruebaDoWhile 
        5 {
        6 public static void main( String args[] )
        7 {
        8 int contador = 1; // inicializa contador
        9 
        10 do
        11 {
        12 System.out.printf( "%d ", contador );
        13 ++contador;
        14 } while ( contador <= 10 ); // fin de do...while
        15 
        16 System.out.println(); // imprime una nueva línea
        17 } // fin de main
        18 } // fin de la clase PruebaDoWhile
```
{{< figure src="./dowhile.png">}}

generalmente es la primera línea de una instrucción while. Una instrucción do...while sin llaves, alrededor de un cuerpo con una sola instrucción, aparece así:.
``` java
        do
                instrucción
            while ( condición );
```
o cual puede ser confuso. Un lector podría malinterpretar la última línea [while( condición );], como una instrucción while que contiene una instrucción vacía (el punto y coma por sí solo). Por ende, la instrucción do...
while con una instrucción en su cuerpo se escribe generalmente así:
``` java
    do
    {
    Instrucción
    } while ( condición );
```
DEITEL, PAUL J. Y HARVEY M. DEITE, (2008) Java como programar. Recuperardo el 13 de junio de 2023