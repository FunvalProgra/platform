---
title: "while"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

Una instrucción de repetición (también llamada instrucción de ciclo, o un ciclo) permite al programador 
especificar que un programa debe repetir una acción mientras cierta condición sea verdadera. La instrucción en 
seudocódigo

        Mientras existan más artículos en mi lista de compras
             Comprar el siguiente artículo y quitarlo de mi lista

describe la repetición que ocurre durante una salida de compras. La condición “existan más artículos en mi lista de compras” puede ser verdadera o falsa. Si es verdadera, entonces se realiza la acción “Comprar el siguiente artículo y quitarlo de mi lista”. Esta acción se realizará en forma repetida mientras la condición sea verdadera. La instrucción (o instrucciones) contenida en la instrucción de repetición while constituye el cuerpo de esta estructura, el cual puede ser una sola instrucción o un bloque. En algún momento, la condición será falsa (cuando el último artículo de la lista de compras sea adquirido y eliminado de la lista). En este punto la repetición terminará y se ejecutará la primera instrucción que esté después de la instrucción de repetición.

Como ejemplo de la instrucción de repetición while en Java, considere un segmento de programa diseñado para encontrar la primera potencia de 3 que sea mayor a 100. Suponga que la variable producto de tipo int se inicializa en 3. Cuando la siguiente instrucción while termine de ejecutarse, producto contendrá el resultado:

        int producto = 3;
        while ( producto <= 100 )
            producto = 3 * producto;.

Cuando esta instrucción while comienza a ejecutarse, el valor de la variable producto es 3. Cada iteración de la instrucción while multiplica a producto por 3, por lo que producto toma los valores de 9, 27, 81 y 243, sucesivamente. Cuando la variable producto se vuelve 243, la condición de la instrucción while (producto <= 1000) se torna falsa. Esto termina la repetición, por lo que el valor fi nal de producto es 243. En este punto, la ejecución del programa continúa con la siguiente instrucción después de la instrucción while.

El diagrama de actividad de UML muestra el flujo de control que corresponde a la instrucción while anterior. Una vez más (aparte del estado inicial, las flechas de transición, un estado final y tres notas), los símbolos en el diagrama representan un estado de acción y una decisión. Este diagrama también introduce el símbolo de fusión. UML representa tanto al símbolo de fusión como al símbolo de decisión como rombos. El símbolo de fusión une dos flujos de actividad en uno solo. En este diagrama, el símbolo de fusión une las transiciones del estado inicial y del estado de acción, de manera que ambas fluyan en la decisión que determina si el ciclo debe empezar a ejecutarse (o seguir ejecutándose). Los símbolos de decisión y de fusión pueden diferenciarse por el número de flechas de transición “entrante “salientes”. Un símbolo de decisión tiene una flecha de transición que apunta hacia el rombo y dos o más flechas de transición que apuntan hacia fuera del rombo, para indicar las posibles transiciones desde ese punto. Además, cada flecha de transición que apunta hacia fuera de un símbolo de decisión tiene una condición de guardia junto a ella. Un símbolo de fusión tiene dos o más flechas de transición que apuntan hacia el rombo, y sólo una flecha de transición que apunta hacia fuera del rombo, para indicar múltiples flujos de actividad que se fusionan para continuar la actividad. Ninguna de las flechas de transición asociadas con un símbolo de fusión tiene una condición de guardia.

{{< figure src="./while.png">}}

DEITEL, PAUL J. Y HARVEY M. DEITE, (2008) Java como programar. Recuperardo el 13 de junio de 2023

La condición es una expresión booleana que se evalúa antes de cada iteración. Si la condición es verdadera, el bloque de código se ejecuta. Si la condición es falsa, el programa sale del bucle y continúa con la siguiente instrucción después del while.

Aquí tienes un ejemplo para ilustrar el uso de while en Java

    int contador = 1;

    while (contador <= 5) {
        System.out.println("Contador: " + contador);
        contador++;
    }

En este ejemplo, el bucle while se ejecutará mientras la variable contador sea menor o igual a 5. En cada iteración, se imprimirá el valor del contador y luego se incrementará en 1. El bucle se repetirá 5 veces, mostrando los valores del contador del 1 al 5.

Es importante tener cuidado al usar la instrucción while para evitar bucles infinitos. Asegúrate de que la condición dentro del while cambie en algún momento para que el bucle tenga una condición de finalización. De lo contrario, el bucle se ejecutará indefinidamente y el programa quedará atrapado en un ciclo infinito.

El bucle while es útil cuando no se conoce de antemano la cantidad exacta de repeticiones necesarias y se basa en una condición de continuación. Permite ejecutar un bloque de código repetidamente mientras se cumpla una condición específica.
