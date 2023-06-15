---
title: "Repetición controlada por contador"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

La repetición controlada por contador en Java es un tipo de estructura de control que permite ejecutar un bloque de código un número específico de veces utilizando un contador. Es decir, se establece una condición inicial para el contador, una condición de continuación y un incremento o decremento del contador en cada iteración del bucle.

En Java, existen dos formas comunes de implementar la repetición controlada por contador:

Bucle for: El bucle for es una estructura de control que se utiliza cuando se conoce la cantidad exacta de repeticiones necesarias. Se compone de tres partes separadas por punto y coma (;): la inicialización del contador, la condición de continuación y la actualización del contador en cada iteración. Aquí hay un ejemplo:

    for (int contador = 0; contador < 5; contador++) {
        // Bloque de código a repetir
        System.out.println("Iteración: " + contador);
    
    }

En este ejemplo, el bucle for se ejecutará cinco veces, incrementando el contador en cada iteración. El resultado será la impresión de "Iteración: " seguido del valor del contador en cada iteración, desde 0 hasta 4.

Bucle while: El bucle while se utiliza cuando no se conoce de antemano la cantidad exacta de repeticiones necesarias y se basa en una condición de continuación. Se verifica la condición antes de cada iteración. Aquí hay un ejemplo:

    int contador = 0;
    while (contador < 5) {
        // Bloque de código a repetir
        System.out.println("Iteración: " + contador);
        contador++;
    }

En este ejemplo, el bucle while se ejecutará mientras la condición contador < 5 sea verdadera. El contador se incrementa en cada iteración y el bloque de código se repite hasta que el contador alcanza el valor 5.

Ambas formas de repetición controlada por contador son útiles en situaciones donde se requiere ejecutar un bloque de código un número específico de veces y se conoce o se puede calcular la cantidad de repeticiones necesarias.