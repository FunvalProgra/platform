---
title: "Set, List y Map"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Introducción a Set en Java

En esta hoja, introduciremos el concepto de Set en Java y su importancia en el manejo de colecciones. Un Set es una interfaz en Java que se utiliza para almacenar elementos únicos, es decir, no permite duplicados. Explicaremos cómo difiere de otras interfaces de colecciones, como List y Map, y cómo se representa en la jerarquía de colecciones en Java.

También discutiremos las principales implementaciones de Set en Java, como HashSet, TreeSet y LinkedHashSet, y las características distintivas de cada una.

## Sintaxis y Funcionalidades Básicas de Set en Java

En esta hoja, nos centraremos en la sintaxis y las funcionalidades básicas de Set en Java. Exploraremos cómo crear e inicializar un Set utilizando las diferentes implementaciones disponibles. Aprenderemos a agregar y eliminar elementos del Set utilizando los métodos add() y remove(). Además, veremos cómo verificar si un elemento existe en el Set utilizando el método contains().

También discutiremos el uso del método size() para obtener el tamaño del Set, así como el método isEmpty() para verificar si el Set está vacío.

## Funcionalidades Avanzadas de Set en Java

En esta hoja, nos adentraremos en las funcionalidades avanzadas de Set en Java. Discutiremos cómo utilizar métodos como clear() para eliminar todos los elementos del Set, retainAll() para retener solo los elementos comunes entre dos Sets, y removeAll() para eliminar los elementos de un Set que también están presentes en otro Set.

También exploraremos las características únicas de las implementaciones HashSet, TreeSet y LinkedHashSet. Discutiremos la diferencia en el orden de los elementos, el rendimiento y las características de almacenamiento de cada una.

## Usos y Ejemplos Comentados de Set en Java

En esta hoja final, nos enfocaremos en los usos y ejemplos comentados de Set en Java. Discutiremos los escenarios en los que el uso de Set puede ser beneficioso, como la eliminación de duplicados en una lista de elementos, la verificación de membresía en un conjunto de datos y la implementación de operaciones de conjuntos, como la unión, intersección y diferencia.

Ejemplo 1: Eliminación de duplicados en una lista

``` java
import java.util.HashSet;
import java.util.Set;

public class EliminarDuplicados {
    public static void main(String[] args) {
        Set<Integer> numeros = new HashSet<>();
        numeros.add(10);
        numeros.add(20);
        numeros.add(30);
        numeros.add(20);

        System.out.println("Elementos originales: " + numeros);

        Set<Integer> numerosSinDuplicados = new HashSet<>(numeros);

        System.out.println("Elementos sin duplicados: " + numerosSinDuplicados);
    }
}
```

En este ejemplo, creamos un Set llamado "numeros" y agregamos algunos elementos, incluido un elemento duplicado. Luego, creamos otro Set llamado "numerosSinDuplicados" utilizando el constructor de HashSet y pasando el Set original como argumento. Como HashSet no permite duplicados, el Set resultante solo contendrá elementos únicos.

Ejemplo 2: Verificación de membresía en un conjunto
``` java
import java.util.HashSet;
import java.util.Set;

public class VerificarMembresia {
    public static void main(String[] args) {
        Set<String> colores = new HashSet<>();
        colores.add("rojo");
        colores.add("verde");
        colores.add("azul");

        String color = "rojo";

        if (colores.contains(color)) {
            System.out.println(color + " está presente en el conjunto");
        } else {
            System.out.println(color + " no está presente en el conjunto");
        }
    }
}
```
En este ejemplo, creamos un Set llamado "colores" y agregamos algunos elementos. Luego, verificamos si el color "rojo" está presente en el conjunto utilizando el método contains(). Dependiendo del resultado, mostramos un mensaje apropiado en la salida.

# Introducción a List en Java

En esta hoja, introduciremos el concepto de List en Java y su importancia en el manejo de colecciones. Una List es una interfaz en Java que se utiliza para almacenar elementos en orden secuencial y permite duplicados. Explicaremos cómo difiere de otras interfaces de colecciones, como Set y Map, y cómo se representa en la jerarquía de colecciones en Java.

También discutiremos las principales implementaciones de List en Java, como ArrayList, LinkedList y Vector, y las características distintivas de cada una.

## Sintaxis y Funcionalidades Básicas de List en Java

En esta hoja, nos centraremos en la sintaxis y las funcionalidades básicas de List en Java. Exploraremos cómo crear e inicializar una List utilizando las diferentes implementaciones disponibles. Aprenderemos a agregar y eliminar elementos de la List utilizando los métodos add() y remove(). Además, veremos cómo acceder y modificar elementos de la List utilizando los métodos get() y set().

También discutiremos el uso del método size() para obtener el tamaño de la List, así como el método isEmpty() para verificar si la List está vacía.

## Funcionalidades Avanzadas de List en Java

En esta hoja, nos adentraremos en las funcionalidades avanzadas de List en Java. Discutiremos cómo utilizar métodos como contains() para verificar la presencia de un elemento en la List, indexOf() para obtener el índice de la primera aparición de un elemento, y lastIndexOf() para obtener el índice de la última aparición de un elemento.

También exploraremos métodos como subList() para obtener una sublista de la List, sort() para ordenar los elementos de la List, y reverse() para invertir el orden de los elementos.

## Usos y Ejemplos Comentados de List en Java

En esta hoja final, nos enfocaremos en los usos y ejemplos comentados de List en Java. Discutiremos los escenarios en los que el uso de List puede ser beneficioso, como el almacenamiento y manipulación de elementos en orden secuencial, la implementación de estructuras de datos como pilas y colas, y la búsqueda y filtrado de elementos.

Ejemplo 1: Almacenamiento y Manipulación de Elementos en una Lista
``` java
import java.util.ArrayList;
import java.util.List;

public class ListaEmpleados {
    public static void main(String[] args) {
        List<String> empleados = new ArrayList<>();
        empleados.add("Juan");
        empleados.add("María");
        empleados.add("Pedro");

        System.out.println("Lista de empleados: " + empleados);

        empleados.remove("María");

        System.out.println("Lista de empleados después de eliminar a María: " + empleados);
    }
}
```
En este ejemplo, creamos una List llamada "empleados" y agregamos algunos nombres utilizando el método add(). Luego, eliminamos un elemento de la List utilizando el método remove(). Finalmente, mostramos el contenido de la List antes y después de la eliminación.

Ejemplo 2: Búsqueda y Filtrado de Elementos en una Lista
``` java
import java.util.ArrayList;
import java.util.List;

public class FiltrarNumerosPares {
    public static void main(String[] args) {
        List<Integer> numeros = new ArrayList<>();
        numeros.add(10);
        numeros.add(5);
        numeros.add(8);
        numeros.add(3);
        numeros.add(12);

        List<Integer> numerosPares = new ArrayList<>();

        for (Integer numero : numeros) {
            if (numero % 2 == 0) {
                numerosPares.add(numero);
            }
        }

        System.out.println("Números pares: " + numerosPares);
    }
}
```
En este ejemplo, creamos una List llamada "numeros" y agregamos algunos números. Luego, creamos otra List llamada "numerosPares" y utilizamos un bucle for-each para iterar sobre los elementos de la List "numeros". Utilizamos una expresión condicional para filtrar los números pares y los agregamos a la List "numerosPares". Finalmente, mostramos los números pares en la salida.

# Introducción a Map en Java

En esta hoja, introduciremos el concepto de Map en Java y su importancia en el manejo de colecciones. Un Map es una interfaz en Java que se utiliza para almacenar pares clave-valor, donde cada clave es única y se utiliza para acceder a su correspondiente valor. Explicaremos cómo difiere de otras interfaces de colecciones, como List y Set, y cómo se representa en la jerarquía de colecciones en Java.

También discutiremos las principales implementaciones de Map en Java, como HashMap, TreeMap y LinkedHashMap, y las características distintivas de cada una.

## Sintaxis y Funcionalidades Básicas de Map en Java

En esta hoja, nos centraremos en la sintaxis y las funcionalidades básicas de Map en Java. Exploraremos cómo crear e inicializar un Map utilizando las diferentes implementaciones disponibles. Aprenderemos a agregar pares clave-valor al Map utilizando el método put() y a obtener el valor correspondiente a una clave utilizando el método get(). También veremos cómo verificar la presencia de una clave en el Map utilizando el método containsKey().

Además, discutiremos el uso de los métodos keySet() y values() para obtener conjuntos de claves y valores del Map, respectivamente.

## Funcionalidades Avanzadas de Map en Java

En esta hoja, nos adentraremos en las funcionalidades avanzadas de Map en Java. Discutiremos cómo utilizar métodos como remove() para eliminar un par clave-valor del Map, size() para obtener el tamaño del Map, y isEmpty() para verificar si el Map está vacío.

También exploraremos métodos como entrySet() para obtener un conjunto de pares clave-valor del Map, y cómo utilizarlos en un bucle for-each para iterar sobre el Map y realizar operaciones en cada par.

## Usos y Ejemplos Comentados de Map en Java

En esta hoja final, nos enfocaremos en los usos y ejemplos comentados de Map en Java. Discutiremos los escenarios en los que el uso de Map puede ser beneficioso, como el almacenamiento y recuperación eficiente de información relacionada, la implementación de diccionarios y la realización de conteos y agrupaciones.

Ejemplo 1: Almacenamiento y Recuperación de Información en un Diccionario
``` java
import java.util.HashMap;
import java.util.Map;

public class Diccionario {
    public static void main(String[] args) {
        // Creamos un Map para almacenar las palabras y sus traducciones
        Map<String, String> diccionario = new HashMap<>();
        
        // Agregamos palabras y sus traducciones al diccionario
        diccionario.put("Hello", "Hola");
        diccionario.put("Goodbye", "Adiós");
        diccionario.put("Thank you", "Gracias");

        // Palabra a buscar en el diccionario
        String palabra = "Hello";

        // Verificamos si la palabra está presente en el diccionario
        if (diccionario.containsKey(palabra)) {
            // Obtenemos la traducción de la palabra
            String traduccion = diccionario.get(palabra);
            System.out.println("Traducción de " + palabra + ": " + traduccion);
        } else {
            System.out.println("No se encontró traducción para " + palabra);
        }
    }
}

```
En este ejemplo, creamos un Map llamado "diccionario" y agregamos algunas palabras en inglés junto con sus traducciones en español. Luego, verificamos si una palabra específica está presente en el diccionario utilizando el método containsKey(). Si la palabra está presente, obtenemos su traducción utilizando el método get() y la mostramos en la salida. Si la palabra no está presente, mostramos un mensaje indicando que no se encontró traducción.

Ejemplo 2: Conteo de Palabras en un Texto
``` java
import java.util.HashMap;
import java.util.Map;

public class ConteoPalabras {
    public static void main(String[] args) {
        // Texto de ejemplo
        String texto = "Este es un ejemplo de texto. Es un texto de prueba.";

        // Dividimos el texto en palabras utilizando el método split()
        String[] palabras = texto.split(" ");
        
        // Creamos un Map para almacenar las palabras y su conteo
        Map<String, Integer> conteoPalabras = new HashMap<>();

        // Iteramos sobre las palabras y realizamos el conteo
        for (String palabra : palabras) {
            if (conteoPalabras.containsKey(palabra)) {
                // Si la palabra ya está en el Map, aumentamos su conteo en 1
                int conteo = conteoPalabras.get(palabra);
                conteoPalabras.put(palabra, conteo + 1);
            } else {
                // Si la palabra no está en el Map, la agregamos con un conteo inicial de 1
                conteoPalabras.put(palabra, 1);
            }
        }

        // Mostramos el conteo de palabras en la salida
        for (Map.Entry<String, Integer> entry : conteoPalabras.entrySet()) {
            String palabra = entry.getKey();
            int conteo = entry.getValue();
            System.out.println("Palabra: " + palabra + ", Apariciones: " + conteo);
        }
    }
}
```

En este ejemplo, tomamos un texto y lo dividimos en palabras utilizando el método split(). Luego, creamos un Map llamado "conteoPalabras" para almacenar las palabras y su conteo correspondiente.

Utilizamos un bucle for-each para iterar sobre las palabras y verificar si están presentes en el Map. Si una palabra ya está en el Map, aumentamos su conteo en 1. Si la palabra no está en el Map, la agregamos con un conteo inicial de 1.

Finalmente, utilizamos el método entrySet() para obtener un conjunto de pares clave-valor del Map y lo recorremos en un bucle for-each. Mostramos cada palabra y su conteo en la salida.

{{< youtube ltwlQKMn1hk >}}

# Ejercicios

Ejercicio para Set:

Crea una clase llamada "UniqueWords" que solicite al usuario ingresar una serie de palabras separadas por espacios.
Utiliza un Set para almacenar las palabras únicas ingresadas por el usuario.
Imprime en la pantalla las palabras únicas en orden alfabético.

Ejercicio para Map:

Crea una clase llamada "StudentGrades" que almacene las calificaciones de los estudiantes.
Utiliza un Map donde la clave sea el nombre del estudiante y el valor sea una lista de calificaciones.
Implementa métodos para agregar calificaciones a un estudiante, obtener las calificaciones de un estudiante y calcular el promedio de calificaciones de un estudiante.
Permite al usuario ingresar el nombre del estudiante y sus calificaciones, y luego muestra el promedio de calificaciones.