---
title: "Expresión Lambda"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Expresiones Lambda en Java

Las expresiones lambda son una característica introducida en Java 8 que permite escribir de forma más concisa y expresiva funciones anónimas. Proporcionan una manera elegante de trabajar con interfaces funcionales, lo que simplifica el código y mejora la legibilidad. En esta explicación, abordaremos la sintaxis de las expresiones lambda, su funcionamiento y proporcionaremos dos ejercicios para practicar en clase.

## Sintaxis de las Expresiones Lambda

La sintaxis básica de una expresión lambda consta de tres partes:
``` java
(parámetros) -> {cuerpo}
```
<ol>
    <li>Los parámetros representan los datos de entrada que toma la expresión lambda.</li>
    <li>El operador de flecha (->) separa los parámetros del cuerpo de la expresión lambda.</li>
    <li>El cuerpo contiene el código ejecutable de la expresión lambda.</li>
</ol>

A continuación, se muestra un ejemplo básico de una expresión lambda que suma dos números:
``` java
(int a, int b) -> {
    return a + b;
}
```

En este caso, la expresión lambda toma dos parámetros a y b de tipo entero, y devuelve la suma de los dos números.

## Funcionamiento de las Expresiones Lambda

Las expresiones lambda se basan en interfaces funcionales, que son interfaces que tienen un único método abstracto. La expresión lambda se puede utilizar para implementar el método abstracto de la interfaz funcional de manera concisa.

Para utilizar una expresión lambda, es necesario que la interfaz funcional correspondiente esté presente en Java. Algunas interfaces funcionales predefinidas en Java incluyen Predicate, Consumer, Supplier y Function, entre otras. Estas interfaces proporcionan un conjunto de métodos abstractos que se pueden implementar utilizando expresiones lambda.

A continuación, se muestra un ejemplo de cómo utilizar una expresión lambda con la interfaz funcional Predicate para verificar si un número es par:

``` java
import java.util.function.Predicate;

public class EjemploLambda {
    public static void main(String[] args) {
        Predicate<Integer> esPar = (num) -> num % 2 == 0;
        
        boolean resultado = esPar.test(4);
        System.out.println("¿Es 4 un número par? " + resultado);
    }
}
```

En este ejemplo, definimos una expresión lambda que toma un número como parámetro y devuelve true si es par y false si no lo es. Utilizamos el método test() de la interfaz Predicate para aplicar la expresión lambda al número 4 y obtener el resultado.

{{< youtube 84Er9T0H_AY >}}

## Ejercicios para Practicar en Clase

Aquí tienes dos ejercicios para practicar el uso de expresiones lambda en clase:

Ejercicio 1: Filtrar una Lista
Escribe un programa que tome una lista de números enteros y utilice una expresión lambda para filtrar los números pares. Luego, imprime la lista resultante.