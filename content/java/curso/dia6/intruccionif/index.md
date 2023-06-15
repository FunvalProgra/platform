---
title: "Intrucción if e if else"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Intrucción if

Los programas utilizan instrucciones de selección para elegir entre los cursos alternativos de acción. Por ejemplo, suponga que la califi cación para aprobar un examen es 60. La instrucción en seudocódigo

        Si la califi cación del estudiante es mayor o igual a 60
            Imprimir “Aprobado”

determina si la condición “la califi cación del estudiante es mayor o igual a 60” es verdadera o falsa. Si la condición es verdadera se imprime “Aprobado”, y se “ejecuta” en orden la siguiente instrucción en seudocódigo. (Recuerde que el seudocódigo no es un verdadero lenguaje de programación). Si la condición es falsa se ignora la instrucción Imprimir, y se ejecuta en orden la siguiente instrucción en seudocódigo. La sangría de la segunda línea de esta instrucción de selección es opcional, pero se recomienda ya que enfatiza la estructura inherente de los programas estructurados
    La instrucción anterior if en seudocódigo puede escribirse en Java de la siguiente manera:

                if ( calificacionEstudiante >= 60 )
                System.out.println( "Aprobado" );

Observe que el código en Java corresponde en gran medida con el seudocódigo. Ésta es una de las propiedades que hace del seudocódigo una herramienta de desarrollo de programas tan útil.

En la siguiente figura muestra la instrucción if de selección simple. Esta fi gura contiene lo que quizá sea el símbolo 
más importante en un diagrama de actividad: el rombo o símbolo de decisión, el cual indica que se tomará 
una decisión. El flujo de trabajo continuará a lo largo de una ruta determinada por las condiciones de guardia
asociadas de ese símbolo, que pueden ser verdaderas o falsas. Cada flecha de transición que sale de un símbolo 
de decisión tiene una condición de guardia (especifi cada entre corchetes, a un lado de la flecha de transición). 
Si una condición de guardia es verdadera, el flujo de trabajo entra al estado de acción al que apunta la flecha de 
transición. Ssi la calificación es mayor o igual a 60, el programa imprime “Aprobado” y luego se 
dirige al estado final de esta actividad. Si la calificación es menor a 60, el programa se dirige inmediatamente al 
estado final sin mostrar ningún mensaje.

La instrucción if es una instrucción de control de una sola entrada/una sola salida. Pronto veremos que los 
diagramas de actividad para las instrucciones de control restantes también contienen estados iniciales, flechas
de transición, estados de acción que indican las acciones a realizar, símbolos de decisión (con sus condiciones de
guardia asociadas) que indican las decisiones a tomar, y estados finales. Esto es consistente con el modelo
de programación acción/decisión que hemos estado enfatizando.

Imagine siete cajones, en donde cada uno contiene sólo un tipo de instrucción de control de Java. Todas 
las instrucciones de control están vacías. Su tarea es ensamblar un programa a partir de tantas instrucciones de 
control de cada tipo como lo requiera el algoritmo, combinando esas instrucciones de control en sólo dos formas 
posibles (apilando o anidando), y después llenando los estados de acción y las decisiones con expresiones de 
acción y condiciones de guardia, en una manera que sea apropiada para el algoritmo. Hablaremos sobre la variedad de formas en que pueden escribirse las acciones y las decisiones.

DEITEL, PAUL J. Y HARVEY M. DEITE, (2008) Java como programar. Recuperardo el 13 de junio de 2023

{{< figure src="./if.png">}}

# Doble if..else

La instrucción if de selección simple realiza una acción indicada solamente cuando la condición es verdadera 
(true); de no ser así, se evita dicha acción. La instrucción if...else de selección doble permite al programador 
especifi car una acción a realizar cuando la condición es verdadera, y otra distinta cuando la condición es falsa. Por 
ejemplo, la instrucción en seudocódigo:

        Si la califi cación del estudiante es mayor o igual a 60
            Imprimir “Aprobado”
        De lo contrario
            Imprimir “Reprobado

imprime “Aprobado” si la califi cación del estudiante es mayor o igual a 60, y, “Reprobado” si la califi cación del 
estudiante es menor a 60. En cualquier caso, después de que ocurre la impresión se “ejecuta”, según la secuencia, 
la siguiente instrucción en seudocódigo.

La instrucción anterior if...else en seudocódigo puede escribirse en Java como:

        if ( calificacion >= 60 )
            System.out.println( "Aprobado" );
        else
            System.out.println( "Reprobado" );

Observe que el cuerpo de la instrucción else también tiene sangría. Cualquiera que sea la convención de sangría 
que usted elija, debe aplicarla consistentemente en todos sus programas. Es difícil leer programas que no obedecen las convenciones de espaciado uniformes.

Otro ejemplo que tenemos de if else es:

        public class IfElseExample {
            public static void main(String[] args) {
                int edad = 18;

                if (edad >= 18) {
                    System.out.println("Eres mayor de edad");
                } else {
                    System.out.println("Eres menor de edad");
                }
            }
        }

En este ejemplo, utilizamos la estructura if-else para determinar si una persona es mayor o menor de edad según su edad.

La variable edad se inicializa con el valor 18.
La condición edad >= 18 se evalúa, lo cual verifica si la edad es igual o mayor que 18. Si esta condición es verdadera, se ejecuta el bloque de código dentro del if.
En este caso, como la condición es verdadera (la edad es igual a 18), se muestra el mensaje "Eres mayor de edad" en la consola.
Si la condición es falsa, se ejecuta el bloque de código dentro del else. En este caso, si la edad fuera menor a 18, se mostraría el mensaje "Eres menor de edad".
La estructura if-else en Java permite tomar decisiones basadas en una condición. Si la condición dentro del if es verdadera, se ejecuta el bloque de código dentro de ese if. Si la condición es falsa, se ejecuta el bloque de código dentro del else. Esto nos permite controlar el flujo del programa según las diferentes situaciones.

Es importante tener en cuenta que el bloque else es opcional. Si solo se desea ejecutar un bloque de código cuando la condición del if es verdadera, no es necesario incluir el else.

# Operadores condicionales

Java cuenta con el operador condicional (?:), que en ocasiones puede utilizarse en lugar de una instrucción 
if...else. Éste es el único operador ternario en Java; es decir, que utiliza tres operandos. En conjunto, los 
operandos y el símbolo ?: forman una expresión condicional. El primer operando (a la izquierda del ?) es una 
expresión booleana (es decir, una condición que se evalúa a un valor booleano: true o false), el segundo 
operando (entre el ? y :) es el valor de la expresión condicional si la expresión booleana es verdadera, y el tercer operando (a la derecha de :) es el valor de la expresión condicional si la expresión booleana se evalúa como 
false. Por ejemplo, la instrucción

    System.out.println( calificacionEstudiante >= 60 ? "Aprobado" : "Reprobado" );

imprime el valor del argumento de println, que es una expresión condicional. La expresión condicional en esta 
instrucción produce como resultado la cadena "Aprobado" si la expresión booleana calificacionEstudiante >= 60 es verdadera, o produce como resultado la cadena "Reprobado" si la expresión booleana es falsa. Por lo tanto, esta instrucción con el operador condicional realiza en esencia la misma función que la instrucción if...else que se mostró anteriormente, en esta sección. La precedencia del operador condicional es baja, por lo que toda la expresión condicional se coloca normalmente entre paréntesis. Pronto veremos que las expresiones cpndicionales pueden usarse en algunas situaciones en las que no se pueden utilizar if .. else.

Como lo son:

<ol>
        <li>Operador de igualdad (==): Compara si dos valores son iguales.</li>
        <li>Operador de desigualdad (!=): Compara si dos valores son diferentes.</li>
        <li>Operador de mayor que (>): Compara si un valor es mayor que otro.</li>
        <li>Operador de menor que (<): Compara si un valor es menor que otro.</li>
        <li>Operador de mayor o igual que (>=): Compara si un valor es mayor o igual que otro.</li>
        <li>Operador de menor o igual que (<=): Compara si un valor es menor o igual que otro.</li>
        <li>Operador lógico AND (&&): Evalúa dos condiciones y devuelve true si ambas son verdaderas.</li>
        <li>Operador lógico OR (||): Evalúa dos condiciones y devuelve true si al menos una de ellas es verdadera.</li>
        <li>Operador lógico NOT (!): Niega el resultado de una condición, es decir, si la condición es true, devuelve false, y si la condición es false, devuelve true.</li>
        <li>Estos operadores se utilizan en combinación con las estructuras de control, como if, else, while, for, entre otras, para tomar decisiones y controlar el flujo del programa en base a condiciones lógicas.</li>
    </ol>