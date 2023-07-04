---
title: "List y Arrays"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---
# List y Array

En Java, List es una interfaz que define una colección ordenada de elementos, mientras que ArrayList es una de las implementaciones más comunes de esta interfaz. En esta explicación, te proporcionaré una descripción detallada de List y ArrayList, junto con ejemplos explicados para ilustrar su uso.

## List

List es una interfaz que extiende la interfaz Collection en Java. Define una colección ordenada de elementos, lo que significa que los elementos se mantienen en un orden específico según se agregan. Algunas características clave de List son:

Puede contener elementos duplicados.
Permite el acceso a los elementos por índice.
Proporciona métodos para agregar, eliminar, buscar y manipular elementos.
La sintaxis básica para declarar una lista es la siguiente:
``` java
List<tipo> nombreLista = new ArrayList<>();
```
Donde tipo es el tipo de datos de los elementos que se almacenarán en la lista y nombreLista es el nombre que le asignas a la lista.

A continuación, se muestra un ejemplo de cómo utilizar List en Java:
``` java
import java.util.List;
import java.util.ArrayList;

public class EjemploList {
    public static void main(String[] args) {
        List<String> listaNombres = new ArrayList<>();
        
        // Agregar elementos a la lista
        listaNombres.add("Juan");
        listaNombres.add("María");
        listaNombres.add("Pedro");
        
        // Acceder a los elementos de la lista
        String primerNombre = listaNombres.get(0);
        System.out.println("Primer nombre: " + primerNombre);
        
        // Iterar sobre la lista
        for (String nombre : listaNombres) {
            System.out.println(nombre);
        }
        
        // Eliminar un elemento de la lista
        listaNombres.remove("María");
        System.out.println("Lista después de eliminar un nombre: " + listaNombres);
    }
}
```

En este ejemplo, creamos una lista de nombres utilizando ArrayList. Luego, agregamos elementos a la lista, accedemos a los elementos utilizando el método get(), iteramos sobre la lista utilizando un bucle for-each y eliminamos un elemento utilizando el método remove().

## Array

ArrayList es una implementación de la interfaz List en Java. Internamente, utiliza un arreglo dinámico para almacenar los elementos y proporciona métodos adicionales para agregar, eliminar y manipular elementos de manera eficiente. Algunas características clave de ArrayList son:

Proporciona acceso rápido a los elementos mediante índices.
Aumenta automáticamente su tamaño según se agregan elementos.
Permite agregar elementos en cualquier posición.
La sintaxis básica para declarar un ArrayList es similar a la declaración de una lista:
``` java
ArrayList<tipo> nombreArrayList = new ArrayList<>();
```

Aquí hay un ejemplo que muestra cómo utilizar ArrayList en Java:
``` java
import java.util.ArrayList;

public class EjemploArrayList {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();
        
        // Agregar elementos al ArrayList
        numeros.add(10);
        numeros.add(20);
        numeros.add(30);
        
        // Obtener el tamaño del ArrayList
        int tamaño = numeros.size();
        System.out.println("Tamaño del ArrayList: " + tamaño);
        
        // Acceder a los elementos del ArrayList
        int primerNumero = numeros.get(0);
        System.out.println("Primer número: " + primerNumero);
        
        // Iterar sobre el ArrayList
        for (int numero : numeros) {
            System.out.println(numero);
        }
        
        // Eliminar un elemento del ArrayList
        numeros.remove(1);
        System.out.println("ArrayList después de eliminar un número: " + numeros);
    }
}
```
En este ejemplo, creamos un ArrayList de números enteros. Luego, agregamos elementos al ArrayList, obtenemos su tamaño utilizando el método size(), accedemos a los elementos utilizando el método get(), iteramos sobre el ArrayList utilizando un bucle for-each y eliminamos un elemento utilizando el método remove().

En resumen, List es una interfaz que define una colección ordenada de elementos, y ArrayList es una implementación común de esta interfaz. Ambos proporcionan métodos para agregar, eliminar, buscar y manipular elementos de la colección. Puedes utilizar List cuando solo necesites la funcionalidad básica de una lista, mientras que ArrayList es útil cuando necesites un rendimiento rápido de acceso a los elementos y manipulaciones frecuentes.

{{< youtube yHFacwFar0A>}}

{{< youtube 8NkHXYVpciI >}}

# ArrayList

En Java, ArrayList es una clase que proporciona una implementación dinámica de un arreglo. A diferencia de los arreglos regulares, que tienen un tamaño fijo, los ArrayList pueden cambiar su tamaño dinámicamente según sea necesario. Esto los convierte en una estructura de datos muy versátil y ampliamente utilizada en programación.

## Declaración e importación de ArrayList

Para utilizar ArrayList, primero debemos importar la clase:
``` java
import java.util.ArrayList;
```

Luego, podemos declarar un ArrayList de la siguiente manera:
``` java
ArrayList<TipoDeDato> nombreArrayList = new ArrayList<>();
```

Reemplaza TipoDeDato con el tipo de elementos que deseas almacenar en el ArrayList, como Integer, String, Double, etc.

## Añadir elementos a un ArrayList
Para agregar elementos a un ArrayList, utilizamos el método add():
``` java
nombreArrayList.add(elemento);
```

Donde elemento es el valor que deseas agregar al ArrayList.

## Acceder a elementos del ArrayList
Podemos acceder a los elementos del ArrayList utilizando el método get() y proporcionando el índice del elemento que queremos obtener:
``` java
TipoDeDato elemento = nombreArrayList.get(indice);
```

Donde TipoDeDato es el tipo de elementos que contiene el ArrayList y indice es el índice del elemento que queremos obtener.

## Modificar elementos del ArrayList
Para modificar un elemento existente en el ArrayList, utilizamos el método set() y proporcionamos el índice del elemento que deseamos modificar y el nuevo valor:
``` java
nombreArrayList.set(indice, nuevoValor);
```
Donde indice es el índice del elemento que queremos modificar y nuevoValor es el valor que queremos asignarle al elemento.

## Eliminar elementos del ArrayList
Para eliminar elementos de un ArrayList, podemos utilizar el método remove() y proporcionar el índice del elemento que deseamos eliminar:
``` java
nombreArrayList.remove(indice);
```

También podemos eliminar un elemento proporcionando directamente el valor que queremos eliminar:
``` java
nombreArrayList.remove(elemento);
```

## Tamaño del ArrayList
Podemos obtener el tamaño actual del ArrayList utilizando el método size():
``` java
int tamaño = nombreArrayList.size();
```

## Recorrer un ArrayList
Podemos recorrer los elementos de un ArrayList utilizando un bucle for o un bucle foreach:
``` java
// Usando for
for (int i = 0; i < nombreArrayList.size(); i++) {
    TipoDeDato elemento = nombreArrayList.get(i);
    // Hacer algo con el elemento
}

// Usando foreach
for (TipoDeDato elemento : nombreArrayList) {
    // Hacer algo con el elemento
}
```

## ArrayList de objetos personalizados
También podemos crear un ArrayList que contenga objetos de una clase personalizada que hayamos definido. Por ejemplo, si tenemos una clase Persona con atributos como nombre, edad y género, podemos crear un ArrayList de Persona de la siguiente manera:
``` java
ArrayList<Persona> listaPersonas = new ArrayList<>();
```

Luego podemos crear objetos Persona y agregarlos al ArrayList:
``` java
Persona persona1 = new Persona("Juan", 30, "Masculino");
Persona persona2 = new Persona("María", 25, "Femenino");

listaPersonas.add(persona1);
listaPersonas.add(persona2);
```

El ArrayList es una estructura de datos muy útil en Java que nos permite almacenar y manipular elementos de manera dinámica. Puede adaptarse a diferentes tipos de datos y ofrece una amplia gama de métodos para agregar, acceder, modificar y eliminar elementos. Conocer y comprender cómo utilizar ArrayList es fundamental para desarrollar aplicaciones robustas y eficientes en Java.

## Ejercicios para practicar 

1.- Suma de elementos en un Array
Escribe un programa que tome un array de números enteros y calcule la suma de todos los elementos. El programa debe imprimir la suma total

2.- Eliminar elementos duplicados de una Lista
Escribe un programa que tome una lista de cadenas y elimine los elementos duplicados. El programa debe imprimir la lista resultante sin elementos duplicados.