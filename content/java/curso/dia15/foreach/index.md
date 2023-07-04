---
title: "Foreach"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Introducción a foreach en Java

El bucle "foreach" en Java, también conocido como "for-each", es una forma simplificada de iterar sobre elementos de una colección o matriz. Fue introducido en Java 5 como una mejora para trabajar con colecciones y arrays de manera más eficiente y legible. El bucle foreach se utiliza para recorrer elementos sin necesidad de usar índices o contadores, lo que lo hace más sencillo y menos propenso a errores.

## Sintaxis y Funcionalidades de foreach

La sintaxis básica del bucle foreach es la siguiente:
``` java
for (tipo elemento : coleccion) {
    // Cuerpo del bucle
}
```
Donde:
<ol>
    <li>"tipo" es el tipo de dato de los elementos en la colección.</li>
    <li>"elemento" es la variable que se utilizará para representar cada elemento en la iteración.</li>
    <li>"coleccion" es la colección o matriz que se desea recorrer.</li>
</ol>
El bucle foreach recorre automáticamente cada elemento en la colección y ejecuta el código dentro del bloque del bucle para cada elemento.

## Usos y Ejemplos de foreach en Java

El bucle foreach es ampliamente utilizado para recorrer colecciones y matrices en Java. Algunos de los usos comunes incluyen:

<ol>
    <li>Recorrer una lista de objetos para realizar operaciones en cada elemento.</li>
    <li>Iterar sobre un mapa para acceder a las claves o valores.</li>
    <li>Recorrer un array para realizar cálculos o manipulaciones en los elementos.</li>
</ol>
A continuación, se presentan ejemplos comentados de uso de foreach en diferentes situaciones.

## Ejemplos

``` java
List<String> frutas = Arrays.asList("manzana", "pera", "plátano");

for (String fruta : frutas) {
    System.out.println(fruta);
}
```

En este ejemplo, utilizamos el bucle foreach para recorrer una lista de frutas e imprimir cada fruta en una línea separada.

``` java
Map<Integer, String> alumnos = new HashMap<>();
alumnos.put(1, "Juan");
alumnos.put(2, "María");
alumnos.put(3, "Pedro");

for (Map.Entry<Integer, String> entry : alumnos.entrySet()) {
    int numeroAlumno = entry.getKey();
    String nombreAlumno = entry.getValue();
    System.out.println("Alumno #" + numeroAlumno + ": " + nombreAlumno);
}
```
En este ejemplo, utilizamos el bucle foreach para iterar sobre un mapa que contiene los nombres de los alumnos asociados a sus números de estudiante. El bucle foreach nos permite acceder a las claves y valores de cada entrada en el mapa.

``` java
int[] numeros = {1, 2, 3, 4, 5};

for (int numero : numeros) {
    System.out.print(numero + " ");
}
```

En este ejemplo, utilizamos el bucle foreach para recorrer un array de números enteros e imprimir cada número en la misma línea separados por espacios.

{{< youtube BlhKHFh-ywc >}}

# Ejercicios

Dada una lista de palabras, implementa un programa que utilice el bucle foreach para contar y mostrar las palabras que aparecen más de una vez en la lista.

Dada una matriz de números enteros, implementa un programa que utilice el bucle foreach para ordenar los números de forma ascendente y mostrarlos, además de definir cuales se repiten y cuales se repiten más.