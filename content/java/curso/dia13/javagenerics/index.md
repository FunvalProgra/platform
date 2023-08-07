---
title: "Java Generics"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Introducción a Java Generics

Java Generics es una característica del lenguaje que permite crear clases, interfaces y métodos que pueden trabajar con diferentes tipos de datos de manera segura y sin problemas de tipos en tiempo de compilación. Proporciona una forma de parametrizar clases y métodos para que puedan ser reutilizables con diferentes tipos de datos, lo que mejora la legibilidad y la seguridad del código.

## Sintaxis de Java Generics

La sintaxis básica de Java Generics utiliza paréntesis angulares (<>) para indicar el tipo genérico. Se coloca el tipo genérico entre los paréntesis angulares al definir una clase, una interfaz o un método.

``` java
class NombreClase<T> {
    // Código de la clase
}

interface NombreInterfaz<T> {
    // Código de la interfaz
}

class NombreClase {
    <T> void nombreMetodo(T parametro) {
        // Código del método
    }
}
```

En el ejemplo anterior, <T> es el tipo genérico que se utiliza en la definición de la clase, la interfaz y el método. Puede elegir cualquier identificador para representar el tipo genérico.

## Funcionamiento de Java Generics

El objetivo principal de Java Generics es proporcionar reutilización de código y seguridad de tipos en tiempo de compilación. Al utilizar generics, podemos especificar el tipo de datos con el que queremos trabajar al crear instancias de clases o al invocar métodos.

Por ejemplo, podemos crear una lista genérica que almacene cualquier tipo de datos:
``` java
List<String> listaCadenas = new ArrayList<>();
listaCadenas.add("Hola");
listaCadenas.add("Mundo");

String primerElemento = listaCadenas.get(0);
System.out.println(primerElemento);
```

En este ejemplo, hemos creado una lista genérica utilizando List<String>, lo que significa que solo podemos agregar y obtener elementos de tipo String. Esto garantiza que solo se puedan agregar cadenas a la lista y que los elementos que obtengamos serán de tipo String.

{{< youtube MFu8a_LpnIc >}}

## Ejercicios Prácticos

Crea una clase genérica llamada Contenedor que pueda almacenar cualquier tipo de dato. La clase debe tener métodos para agregar y obtener elementos del contenedor.

Crea un método genérico llamado imprimirLista() que acepte una lista genérica y la imprima en la consola.