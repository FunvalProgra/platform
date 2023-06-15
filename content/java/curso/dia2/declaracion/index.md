---
title: "Declaración de clases"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Declaración de una clase

Una declaración de clase especifica un nuevo tipo de referencia con nombre.
Hay dos tipos de declaraciones de clase: declaraciones de clase normal y enumeración
declaraciones.

        Declaración de clase:
            Declaración de clase normalNormalClassDeclaration
            EnumDeclaration

        Declaración de clase normal:
            {ClassModifier} Identificador de clase [TypeParameters]
                [Superclase] [Superinterfaces] ClassBody

Las reglas de esta sección se aplican a todas las declaraciones de clase, incluidas las declaraciones de enumeración. Sin embargo, se aplican reglas especiales a las declaraciones de enumeración con respecto a los modificadores de clase, clases internas y superclases.

El identificador en una declaración de clase especifica el nombre de la clase.

Es un error de tiempo de compilación si una clase tiene el mismo nombre simple que cualquiera de sus
clases o interfaces.

### Control de Acceso

El control de acceso también tiene un significado especial cuando se trata de constructores. Aunque en otra sección se trata a fondo el tela del control de acceso en Java, con referencia a los constructores se puede decir que el control de acceso que se indique determina la forma en que otros objetos van a pode instanciar objetos de la clase. En la siguiente descripción, se indica cómo se trata el control de acceso cuando se tienen entre manos a los constructores:

<b>Private</b>

Ninguna otra clase puede instanciar objetos de la clase. La clase puede contener métodos públicos, y estos métodos pueden construir un objeto y devolverlo, pero nadie más puede hacerlo.

<b>Protected</b>

Solamente las subclases de la clase pueden crear instancias de ella.

<b>Public</b>

Cualquier otra clase puede crear instancias de la clase.

Como ejemplo, vamos a definir una clase Persona.
Clase Persona en Java:

    public class Persona {

        private String nombre;
        private int edad;

        public void setNombre(String nom) {                                                                           
            nombre = nom;
        }

        public String getNombre() {
            return nombre;
        }

        public void setEdad(int ed) {
            edad = ed;
        }

        public int getEdad() {
            return edad;
        }
    }

La clase Persona es pública y tiene dos atributos, nombre y edad, y cuatro métodos.
Los métodos que aparecen en esta clase se conocen como métodos de acceso ó setters/getters.
Son métodos que solo sirven para asignar y obtener los valores de los atributos individualmente.
En cada clase es conveniente escribir un método set y otro get para cada atributo.

{{< youtube oMWrJwMPd6k >}}