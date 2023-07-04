---
title: "Stream"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

##  Introducción a Stream en Java

Stream es una característica introducida en Java 8 que permite manipular y procesar colecciones de manera eficiente y concisa. Un Stream es una secuencia de elementos que puede ser procesada en paralelo o en secuencia. Proporciona una interfaz de programación funcional para realizar operaciones como filtrado, mapeo, clasificación y reducción en los elementos de la secuencia.

En esta documentación, exploraremos la sintaxis, funcionalidades, usos y ejemplos de cómo trabajar con Stream en Java.

## Sintaxis y Funcionalidades de Stream

Para trabajar con Stream en Java, es necesario seguir una serie de pasos básicos:

Obtener un Stream: Puedes obtener un Stream de una colección existente utilizando el método stream() o parallelStream() dependiendo de si quieres trabajar en forma secuencial o en paralelo.
Realizar operaciones intermedias: Las operaciones intermedias son aquellas que se aplican a los elementos del Stream y devuelven un nuevo Stream. Algunas operaciones intermedias comunes son filter(), map(), distinct(), sorted(), entre otras.
Realizar operaciones terminales: Las operaciones terminales son aquellas que producen un resultado final o una acción en el Stream. Algunas operaciones terminales comunes son forEach(), collect(), reduce(), count(), entre otras.
Página 3: Usos y Ejemplos de Stream

Stream proporciona una forma elegante y concisa de trabajar con colecciones en Java. Algunos de los usos comunes de Stream son:

Filtrado de elementos: Puedes usar Stream para filtrar elementos de una colección en base a ciertos criterios. Por ejemplo, filtrar números pares de una lista de enteros.
Transformación de elementos: Stream te permite transformar elementos de una colección utilizando operaciones como map(). Por ejemplo, convertir una lista de objetos a una lista de sus atributos específicos.
Operaciones de reducción: Stream facilita las operaciones de reducción en los elementos de una colección. Por ejemplo, calcular la suma total de una lista de números.
A continuación, se presentan ejemplos comentados de uso de Stream en diferentes situaciones.

## Ejemplos Comentados de Stream

Filtrado de Números Pares:
``` java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> pares = numeros.stream()
                            .filter(num -> num % 2 == 0)
                            .collect(Collectors.toList());

System.out.println(pares); // Imprime [2, 4, 6, 8, 10]
```

Transformación de Nombres a Mayúsculas:
``` java
List<String> nombres = Arrays.asList("Juan", "María", "Pedro", "Ana");

List<String> nombresMayusculas = nombres.stream()
                                        .map(String::toUpperCase)
                                        .collect(Collectors.toList());

System.out.println(nombresMayusculas); // Imprime [JUAN, MARÍA, PEDRO, ANA]
```

Suma de Números
``` java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);

int suma = numeros.stream()
                  .reduce(0, (a, b) -> a + b);

System.out.println(suma); // Imprime 15
```
Estos ejemplos muestran cómo utilizar Stream para realizar operaciones comunes en colecciones de manera más elegante y concisa. Puedes experimentar con diferentes operaciones intermedias y terminales para adaptar el Stream a tus necesidades específicas.

{{< youtube etQN4EfYN7k >}}

# Ejercicios

 Filtrado y Transformación de Elementos

Dado un conjunto de nombres, crea un programa que realice las siguientes operaciones utilizando Stream:

Filtra los nombres que contengan más de 5 letras.
Transforma los nombres filtrados a mayúsculas.
Imprime los nombres resultantes separados por comas.
