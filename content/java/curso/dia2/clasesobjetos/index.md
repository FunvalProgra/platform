---
title: "Clases, Objetos, métodos y Variables"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

## Objetos

Un objeto es la instanciación de una clase y tiene un estado y un funcionamiento. El estado está contenido en sus variables (variables miembro), y el funcionamiento viene determinado por sus métodos. Las variables miembro pueden ser variables de instancia o variables de clase. Se activa el funcionamiento del objeto invocando a uno de sus métodos, que realizará una acción o modificará su estado, o ambas cosas.

Un objeto es (de nuevo) una instancia de una clase. En Java, la creación de un objeto se realiza en tres pasos (aunque se pueden combinar):
<ol>
    <li> Declaración, proporcionar un nombre al objeto</li>
    <li> Instanciación, asignar memoria al objeto </li>
    <li> Inicialización, opcionalmente se pueden proporcionar valores iniciales a las variables de instancia del objeto </li>
</ol>
Cuando se trata de Java, es importante reconocer la diferencia entre objetos y variables de tipos básicos:

    init miVariable;

Se puede inicializar la variable con un valor determinado en el momento de declararla, es decir, podemos resumir los tres pasos anteriormente citados de declaración, instanciación e inicialización, en una sola sentencia:

    int miVariable = 7;

El formato en que se presenta un objeto en Java, cuando el compilador no conoce el tipo de que se trata, consiste en el identificador de la clase y el valor hexadecimal de la dirección.

En Java no siempre es necesaria la declaración de un objeto (darle un nombre). En el siguiente ejemplo, java502.java, se instancia un nuevo objeto que se usa en una expresión, sin previamente haberlo declarado.

import java.util.*;
        
class java502 { 
    public static void main( String args[] ) {
        System.out.println( new Date() );
        }
    }

Una vez que se tiene declarado un objeto con sus variables y sus métodos, podemos acceder a ellos para que el uso para el que se ha creado ese objeto entre en funcionamiento. No hay diferencias apreciables entre los dos lenguajes a la hora de la invocación de los métodos de un objeto. Sin embargo, algunos métodos o variables pueden estar ocultos y el acceso a ellos resultar imposible.

## Clases


Las clases son lo más simple de Java. Todo en Java forma parte de una clase, es una clase o describe como funciona una clase. El conocimiento de las clases es fundamental para poder entender los programas Java.Todas las acciones de los programas Java se colocan dentro del bloque de una clase o un objeto. Un objeto es una instancia de una clase. Todos los métodos se definen dentro del bloque de la clase, Java no soporta funciones o variables globales

La definición de una clase consta de dos partes, la declaración y el cuerpo, según la siguiente sintaxis:

DeclaracionClase {
    CuerpoClase
    }

sin el punto y coma (;)

Cada clase Java deriva, directa o indirectamente, de la clase Object. La clase padre inmediatamente superior a la clase que se está declarando se conoce como superclass. Si no se especifica la superclase de la que deriva una clase, se entiende que deriva directamente de la clase Object (definida en el paquete java.lang).

En la declaración de una clase se utiliza la palabra clave extends para especificar la superclase, de la forma:

class MiClase extends SuperClase {
    // cuerpo de la clase
    }

Hasta ahora sólo se ha utilizado la palabra clave public para calificar el nombre de las clases que hemos visto, pero hay tres modificadores más. Los tipos de clases que podemos definir son:

### Public

Las clases public son accesibles desde otras clases, bien sea directamente o por herencia, desde clases declaradas fuera del paquete que contiene a esas clases públicas, ya que, por defecto, las clases solamente son accesibles por otras clases declaradas dentro del mismo paquete en el que se han declarado. Para acceder desde otros paquetes, primero tienen que ser importadas. La sintaxis es:

public class miClase extends SuperClase implements miInterface,TuInterface {
    // cuerpo de la clase
    }

Aquí la palabra clave public se utiliza en un contexto diferente del que se emplea cuando se define internamente la clase, junto con private y protected.

### Abstract

Una clase abstract tiene al menos un método abstracto. Una clase abstracta no se instancia, sino que se utiliza como clase base para la herencia.

### Final

Una clase final se declara como la clase que termina una cadena de herencia, es lo contrario a una clase abstracta. Nadie puede heredar de una clase final. Por ejemplo, la clase Math es una clase final. Aunque es técnicamente posible declarar clases con varias combinaciones de public, abstract y final, la declaración de una clase abstracta y a la vez final no tiene sentido, y el compilador no permitirá que se declare una clase con esos dos modificadores juntos.

### Synchronizable

Este modificador especifica que todos los métodos definidos en la clase son sincronizados, es decir, que no se puede acceder al mismo tiempo a ellos desde distintos threads; el sistema se encarga de colocar los flags necesarios para evitarlo. Este mecanismo hace que desde threads diferentes se puedan modificar las mismas variables sin que haya problemas de que se sobreescriban.

Si no se utiliza alguno de los modificadores expuestos, por defecto, Java asume que una clase es:

No final
No abstracta
Subclase de la clase Object
No implementa interfaz alguno

## Variables

Una clase en Java puede contener variables y métodos. Las variables pueden ser tipos primitivos como int, char, etc. Los métodos son funciones.

Por ejemplo, en el siguiente trozo de código podemos observarlo:

    public class MiClase {
        int i;

        public MiClase() {
            i = 10;
            }
        public void Suma_a_i( int j ) {
            int suma;
            suma = i + j;
            }
        }
La clase MiClase contiene una variable (i) y dos métodos, MiClase() que es el constructor de la clase y Suma_a_i( int j ).

La declaración de una variable miembro aparece dentro del cuerpo de la clase, pero fuera del cuerpo de cualquier método de esa clase. Si se declara dentro de un métodos, será una variable local del método y no una variable miembro de la clase. En el ejemplo anterior, i es una variable miembro de la clase y suma es una variable local del método Suma_ a_i().

El tipo de una variable determina los valores que se le pueden asignar y las operaciones que se pueden realizar con ella.

El nombre de una variable ha de ser un identificador válido en Java. Por convenio, los programadores Java empiezan los nombres de variables con una letra minúscula, pero no es imprescindible. Los nombres de las variables han de ser únicos dentro de la clase y se permite que haya variables y métodos con el mismo nombre, a diferencia de otros lenguajes como C++, en donde se produce un error de compilación si se da este caso.

## Métodos

Los métodos son funciones que pueden ser llamadas dentro de la clase o por otras clases. La implementación de un método consta de dos partes, una declaración y un cuerpo. La declaración en Java de un método se puede expresar esquemáticamente como:

    tipoRetorno nombreMetodo( [lista_de_argumentos] ) {
        cuerpoMetodo
        }

En Java, la definición completa del método debe estar dentro de la definición de la clase y no se permite la posibilidad de métodos inline, por lo tanto, Java no proporciona al programador distinciones entre métodos normales y métodos inline.

Todos los lenguajes tiene su propua sintaxis para la declaración de un método, Java no es la excepción, pero debemos identifica la sitaxis adecuada:

    public void [nombre del método](){
        [algoritmo]
    }

### Nombre del Método

El nombre del método puede ser cualquier identificador legal en Java. Java soporta el concepto de sobrecarga de métodos, es decir, permite que dos métodos compartan el mismo nombre pero con diferente lista de argumentos, de forma que el compilador pueda diferenciar claramente cuando se invoca a uno o a otro, en función de los parámetros que se utilicen en la llamada al método.

El siguiente fragmento de código muestra una clase Java con cuatro métodos sobrecargados, el último no es legal porque tiene el mismo nombre y lista de argumentos que otro previamente declarado:

    class MiClase {
        . . .
        void miMetodo( int x,int y ) { . . . }
        void miMetodo( int x ) { . . . }
        void miMetodo( int x,float y ) { . . . }
        // void miMetodo( int a,float b ) { . . . } // no válido
        }

Todo lenguaje de programación orientado a objetos debe soportar las características de encapsulación, herencia y polimorfismo. La sobrecarga de métodos es considerada por algunos autores como polimorfismo en tiempo de compilación.

### Método de Instancia

Cuando se incluye un método en una definición de una clase Java sin utilizar la palabra clave static, estamos generando un método de instancia. Aunque cada objeto de la clase no contiene su propia copia de un método de instancia (no existen múltiples copias del método en memoria), el resultado final es como si fuese así, como si cada objeto dispusiese de su propia copia del método.

Cuando se invoca un método de instancia a través de un objeto determinado, si este método referencia a variables de instancia de la clase, en realidad se están referenciando variables de instancia específicas del objeto específico que se está invocando.

La llamada a los métodos de instancia en Java se realiza utilizando el nombre del objeto, el operador punto y el nombre del método.

    miObjeto.miMetodoDeInstancia();

### Método Estático

Cuando una función es incluida en una definición de clase, o un método e incluso en una definición de una clase Java, y se utiliza la palabra static, se obtiene un método estático o método de clase.

Lo más significativo de los métodos de clase es que pueden ser invocados sin necesidad de que haya que instanciar ningún objeto de la clase. En Java se puede invocar un método de clase utilizando el nombre de la clase, el operador punto y el nombre del método.

    MiClase.miMetodoDeClase();

{{< youtube DlphYPc_HKk >}}