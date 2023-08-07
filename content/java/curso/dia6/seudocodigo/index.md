---
title: "Algoritmos y seudocodigos"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---
# Algoritmos

Cualquier problema de computación puede resolverse ejecutando una serie de acciones en un orden específi co. 
Un procedimiento para resolver un problema en términos de:
    <ol>
        <li> las acciones a ejecutar y </li>
        <li> el orden en el que se ejecutan estas acciones </li>
    </ol>
se conoce como un algoritmo. El siguiente ejemplo demuestra que es importante especifi car de manera correcta 
el orden en el que se ejecutan las acciones.

Considere el “algoritmo para levantarse y arreglarse” que sigue un ejecutivo para levantarse de la cama e ir 
a trabajar: (1) levantarse; (2) quitarse la pijama; (3) bañarse; (4) vestirse; (5) desayunar; (6) transportarse al trabajo. Esta rutina logra que el ejecutivo llegue al trabajo bien preparado para tomar decisiones críticas. Suponga que los mismos pasos se realizan en un orden ligeramente distinto: (1) levantarse; (2) quitarse la pijama; (3) vestirse; (4) bañarse; (5) desayunar; (6) transportarse al trabajo. En este caso nuestro ejecutivo llegará al trabajo todo mojado.

Al proceso de especifi car el orden en el que se ejecutan las instrucciones (acciones) en un programa, se le llama control del programa. En este capítulo investigaremos el control de los programas mediante el uso de las instrucciones de control de Java.

# Seudocódigo

El seudocódigo es un lenguaje informal que ayuda a los programadores a desarrollar algoritmos sin tener que preocuparse por los estrictos detalles de la sintaxis del lenguaje Java. El seudocódigo que presentaremos es especialmente útil para desarrollar algoritmos que se convertirán en porciones estructuradas de programas en Java. El seudocódigo es similar al lenguaje cotidiano; es conveniente y amigable con el usuario, aunque no es realmente un lenguaje de programación de computadoras.

El seudocódigo no se ejecuta en las computadoras. En vez de ello, ayuda al programador a “organizar” un programa antes de que intente escribirlo en un lenguaje de programación como Java. Este capítulo presenta varios ejemplos de cómo utilizar el seudocódigo para desarrollar programas en Java.
El estilo de seudocódigo que presentaremos consiste solamente en caracteres, de manera que los programadores pueden escribir el seudocódigo, utilizando cualquier programa editor de texto. Un programa en seudocódigo preparado de manera cuidadosa puede convertirse fácilmente en su correspondiente programa en Java. 

En muchos casos, esto requiere tan sólo reemplazar las instrucciones en seudocódigo con sus instrucciones equivalentes en Java.
Por lo general, el seudocódigo describe sólo las instrucciones que representan las acciones que ocurren después de que un programador convierte un programa de seudocódigo a Java, y el programa se ejecuta en una computadora. Dichas acciones podrían incluir la entrada, salida o un cálculo. Por lo general no incluimos las declaraciones de variables en nuestro seudocódigo, pero algunos programadores optan por listar las variables y mencionar sus propósitos al principio de su seudocódigo.

DEITEL, PAUL J. Y HARVEY M. DEITE, (2008) Java como programar. Recuperardo el 13 de junio de 2023

Este es un ejemplo de pseudocódigo en java:
``` java
    // Declarar variables
    Entero numero1
    Entero numero2
    Entero suma

    // Obtener el primer número
    Escribir "Ingrese el primer número:"
    Leer numero1

    // Obtener el segundo número
    Escribir "Ingrese el segundo número:"
    Leer numero2

    // Calcular la suma
    suma = numero1 + numero2

    // Mostrar el resultado
    Escribir "La suma es: " + suma
```
Este pseudocódigo describe el proceso paso a paso para realizar la suma de dos números en Java. Ten en cuenta que el pseudocódigo no es un lenguaje de programación real, sino una representación simplificada y no ejecutable del algoritmo. Para implementar este pseudocódigo en un programa Java real, tendrías que convertirlo en código Java válido, utilizando la sintaxis correcta del lenguaje.

{{< youtube Lub5qOmY4JQ >}}