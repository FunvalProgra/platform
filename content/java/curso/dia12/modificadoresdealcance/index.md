---
title: "Modificadores de Alcance"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Modificadores de Alcance: default, private, protected, public

En Java, los modificadores de alcance (o de acceso) se utilizan para controlar la visibilidad y accesibilidad de las clases, variables, métodos y constructores en un programa. Existen cuatro modificadores de alcance en Java: default, private, protected y public. En esta explicación detallada, abordaremos cada uno de ellos y proporcionaremos ejemplos para ilustrar su uso.

## Modificador de Alcance default (alcance de paquete)

Si no se especifica ningún modificador de alcance, se considera el modificador default, también conocido como alcance de paquete. Los miembros declarados con este modificador son accesibles dentro del mismo paquete (paquete o package) y no pueden ser accedidos desde paquetes diferentes.

Ejemplo:
``` java
package com.ejemplo.paquete;

class ClaseDefault {
    int variableDefault;  // Miembro con alcance de paquete

    void metodoDefault() {
        // Código del método
    }
}

public class Ejemplo {
    public static void main(String[] args) {
        ClaseDefault instancia = new ClaseDefault();
        instancia.variableDefault = 10;  // Acceso válido dentro del mismo paquete
        instancia.metodoDefault();       // Acceso válido dentro del mismo paquete
    }
}
```

## Modificador de Alcance private

El modificador private restringe la visibilidad de un miembro a la clase en la que está definido. Los miembros private no son accesibles desde ninguna otra clase, incluso si pertenecen al mismo paquete. Este modificador se utiliza para encapsular y ocultar los detalles internos de una clase.

Ejemplo:

``` java
public class ClasePrivate {
    private int variablePrivada;  // Miembro privado

    private void metodoPrivado() {
        // Código del método privado
    }
}

public class Ejemplo {
    public static void main(String[] args) {
        ClasePrivate instancia = new ClasePrivate();
        instancia.variablePrivada = 10;  // Error: No se puede acceder a un miembro privado
        instancia.metodoPrivado();       // Error: No se puede acceder a un método privado
    }
}
```

## Modificador de Alcance protected

El modificador protected permite que los miembros de una clase sean accesibles dentro del mismo paquete y desde las subclases, incluso si estas están en paquetes diferentes. Esto significa que los miembros protected tienen una visibilidad más amplia que los miembros default, pero más restringida que los miembros public.

Ejemplo:

``` java
package com.ejemplo.paquete;

public class ClasePadre {
    protected int variableProtegida;  // Miembro protegido

    protected void metodoProtegido() {
        // Código del método protegido
    }
}

public class ClaseHija extends ClasePadre {
    public static void main(String[] args) {
        ClaseHija instancia = new ClaseHija();
        instancia.variableProtegida = 10;  // Acceso válido desde una subclase
        instancia.metodoProtegido();       // Acceso válido desde una subclase
    }
}
```
## Modificador de Alcance public

El modificador public indica que un miembro es accesible desde cualquier parte del programa. Los miembros public pueden ser accedidos desde cualquier clase y desde cualquier paquete. Este modificador se utiliza cuando se desea que un miembro sea visible y accesible de forma global.

Ejemplo:

``` java 
public class ClasePublic {
    public int variablePublica;  // Miembro público

    public void metodoPublico() {
        // Código del método público
    }
}

public class Ejemplo {
    public static void main(String[] args) {
        ClasePublic instancia = new ClasePublic();
        instancia.variablePublica = 10;  // Acceso válido desde cualquier parte
        instancia.metodoPublico();       // Acceso válido desde cualquier parte
    }
}
```

Es importante utilizar los modificadores de alcance adecuadamente para lograr una encapsulación efectiva y un diseño de clase coherente. Recuerda que la elección correcta de los modificadores de alcance contribuye a la modularidad, reutilización y seguridad de tu código.

{{< youtube 9CszZI2O7fs>}}