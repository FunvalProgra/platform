---
title: "Constructores"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

Java soporta la noción de constructor. El constructor es un tipo específico de método que siempre tiene el mismo nombre que la clase y se utiliza para construir objetos de esa clase. No tiene tipo de dato específico de retorno, ni siquiera void. Esto se debe a que el tipo específico que debe devolver un constructor de clase es el propio tipo de la clase.

En este caso, pues, no se puede especificar un tipo de retorno, ni se puede colocar ninguna sentencia que devuelva un valor. Los constructores pueden sobrecargarse, y aunque puedan contener código, su función primordial es inicializar el nuevo objeto que se instancia de la clase. En Java, ha de hacerse una llamada explícita al constructor para instanciar un nuevo objeto.

Cuando se declara una clase en Java, se pueden declarar uno o más constructores opcionales que realizan la inicialización cuando se instancia (se crea una ocurrencia) un objeto de dicha clase.

Utilizando el código de la sección anterior, cuando se crea una nueva instancia de MiClase, se crean (instancias) todos los métodos y variables, y se llama al constructor de la clase:

    MiClase mc;
    mc = new MiClase();

La palabra clave new se usa para crear una instancia de la clase. Antes de ser instanciada con new no consume memoria, simplemente es una declaración de tipo. Después de ser instanciado un nuevo objeto mc, el valor de i en el objeto mc será igual a 10. Se puede referenciar la variable (de instancia) i con el nombre del objeto:

    mc.i++; // incrementa la instancia de i de mc

Al tener mc todas las variables y métodos de MiClase, se puede usar la primera sintaxis para llamar al método Suma_a_i() utilizando el nuevo nombre de clase mc:

    mc.Suma_a_i( 10 );

y ahora la variable mc.i vale 21.

Luego, en Java, cuando se instancia un objeto, siempre se hace una llamada directa al constructor como argumento del operador new. Este operador se encarga de que el sistema proporcione memoria para contener al objeto que se va a crear.

En el siguiente ejemplo, se ilustran algunos de los conceptos sobre constructores que se han planteado en esta sección.
``` java
    class MiClase {
        int varInstancia;
        
        // Este es el constructor parametrizado
        MiClase( int dato ) {
            // rellenamos la variable de instancia con los datos
            // que se pasan al constructor
            varInstancia = dato;
            }
        
        void verVarInstancia() {
            System.out.println( "El Objeto contiene " + varInstancia );
            }
        }
        
    class java507 { 
        public static void main( String args[] ) {
            System.out.println( "Lanzando la aplicacion" );
            // Instanciamos un objeto de este tipo llamando al 
            // constructor de defecto
            java507 obj = new java507();
            // Llamamos a la funcion pasandole un constructor 
            // parametrizado como parametro
            obj.miFuncion( new MiClase( 100 ) );
            }
        
        // Esta funcion recibe un objeto y llama a uno de sus metodos
        // para presentar en pantalla el dato que contiene el objeto
        void miFuncion( MiClase objeto){
            objeto.verVarInstancia();
            }
        }
```
{{< youtube pDYXaXt7fkE >}}