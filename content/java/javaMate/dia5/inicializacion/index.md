---
title: "Inicialización de objetos mediante constructores"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

    2 // Clase LibroCalificaciones que contiene una variable de instancia nombreDelCurso 
    3 // y métodos para establecer y obtener su valor.
    4 
    5 public class LibroCalificaciones
    6 {
    7 private String nombreDelCurso; // nombre del curso para este LibroCalificaciones
    8 
    9 // método para establecer el nombre del curso
    10 public void establecerNombreDelCurso( String nombre )
    11 {
    12 nombreDelCurso = nombre; // almacena el nombre del curso
    13 } // fin del método establecerNombreDelCurso
    14 
    15 // método para obtener el nombre del curso
    16 public String obtenerNombreDelCurso()
    17 {
    18 return nombreDelCurso;
    19 } // fin del método obtenerNombreDelCurso
    20 
    21 // muestra un mensaje de bienvenida al usuario de LibroCalificaciones
    22 public void mostrarMensaje()
    23 {
    24 // esta instrucción llama a obtenerNombreDelCurso para obtener el 
    25 // nombre del curso que representa este LibroCalificaciones
    26 System.out.printf( “Bienvenido al libro de calificaciones para\n%s!\n”,
    27 obtenerNombreDelCurso() );
    28 } // fin del método mostrarMensaje
    29 
    30 } // fin de la clase LibroCalificaciones

Cuando se crea un objeto de la clase LibroCalificaciones, su variable de instancia nombreCurso se inicializa con null de manera predeterminada. ¿Qué pasa si usted desea proporcionar el nombre de un curso a la hora de crear un objeto LibroCalificaciones? Cada clase que usted declare puede proporcionar un constructor, el cual puede utilizarse para inicializar un objeto de una clase al momento de crear ese objeto. De hecho, Java requiere una llamada al constructor para cada objeto que se crea.

La palabra clave new llama al constructor de la clase para realizar la inicialización. La llamada al constructor se indica mediante el nombre de la clase, seguido de paréntesis; el constructor debe tener el mismo nombre que la clase. Por ejemplo, la línea 14 de la fi gura 3.8 primero utiliza new para crear un objeto LibroCalificaciones. Los paréntesis vacíos después de "new LibroCalificaciones" indican una llamada sin argumentos al constructor de la clase. De manera predeterminada, el compilador proporciona un constructor predeterminado sin parámetros, en cualquier clase que no incluya un constructor en forma explícita. Cuando una clase sólo tiene el constructor predeterminado, sus variables de instancia se inicializan con sus valores predeterminados. Las variables de los tipos char, byte, short, int, long, float y double se inicializan con 0, las variables de tipo boolean se inicializan con false, y las variables de tipo por referencia se inicializan con null.

Cuando usted declara una clase, puede proporcionar su propio constructor para especifi car una inicialización 
personalizada para los objetos de su clase. Por ejemplo, tal vez un programador quiera especifi car el nombre de un curso para un objeto LibroCalificaciones cuando se crea este objeto, como en

 LibroCalificaciones miLibroCalificaciones =
new LibroCalificaciones( "CS101 Introduccion a la programacion en Java" );

En este caso, el argumento "CS101 Introduccion a la programacion en Java" se pasa al constructor del 
objeto LibroCalificaciones y se utiliza para inicializar el nombreDelCurso. La instrucción anterior requiere que la clase proporcione un constructor con un parámetro String.

    2 // La clase LibroCalificaciones con un constructor para inicializar el nombre del curso.
    3 
    4 public class LibroCalificaciones
    5 {
    6 private String nombreDelCurso; // nombre del curso para este LibroCalificaciones
    7 
    8 // el constructor inicializa nombreDelCurso con el objeto String que se provee como
    argumento
    9 public LibroCalificaciones( String nombre )
    10 {
    11 nombreDelCurso = nombre; // inicializa nombreDelCurso
    12 } // fin del constructor
    13 
    14 // método para establecer el nombre del curso
    15 public void establecerNombreDelCurso( String nombre )
    16 {
    17 nombreDelCurso = nombre; // almacena el nombre del curso
    18 } // fin del método establecerNombreDelCurso
    19 
    20 // método para obtener el nombre del curso
    21 public String obtenerNombreDelCurso()
    22 {
    23 return nombreDelCurso;
    24 } // fin del método obtenerNombreDelCurso
    25 
    26 // muestra un mensaje de bienvenida al usuario de LibroCalificaciones
    27 public void mostrarMensaje()
    28 {
    29 // esta instrucción llama a obtenerNombreDelCurso para obtener el 
    30 // nombre del curso que este LibroCalificaciones representa
    31 System.out.printf( “Bienvenido al Libro de calificaciones para\n%s!\n”,
    32 obtenerNombreDelCurso() );
    33 } // fin del método mostrarMensaje
    34 
    35 } // fin de la clase LibroCalificaciones

Las líneas 9 a la 12 declaran el constructor para la clase LibroCalificaciones. Un constructor debe tener el 
mismo nombre que su clase. Al igual que un método, un constructor especifi ca en su lista de parámetros los datos que requiere para realizar su tarea. Cuando usted crea un nuevo objeto, estos datos se colocan en los paréntesis que van después del nombre de la clase. La línea 9 indica que el constructor de la clase LibroCalificaciones tiene un parámetro String llamado nombre. El nombre que se pasa al constructor se asigna a la variable de instancia nombreCurso en la línea 11 del cuerpo del constructor.

El siguiente código demuestra la inicialización de objetos LibroCalificaciones mediante el uso de este constructor. Las líneas 11 y 12 crean e inicializan el objeto libroCalificaciones1 de LibroCalificaciones. El 
constructor de la clase LibroCalificaciones se llama con el argumento "CS101 Introduccion a la programacion en Java" para inicializar el nombre del curso. La expresión de creación de la instancia de la clase a la derecha del signo = en las líneas 11 y 12 devuelve una referencia al nuevo objeto, el cual se asigna a la variable libroCalificaciones1. Las líneas 13 y 14 repiten este proceso para otro objeto LibroCalificaciones llamado libroCalificaciones2, pero esta vez se le pasa el argumento "CS102 Estructuras de datos en Java" para  inicializar el nombre del curso para libroCalificaciones2. Las líneas 17 a la 20 utilizan el método obtenerNombreDelCurso de cada objeto para obtener los nombres de los cursos y mostrar que, sin duda, se inicializaron en el momento en el que se crearon los objetos. En la introducción a la sección 3.5, aprendió que cada instancia (es decir, objeto) de una clase contiene su propia copia de las variables de instancia de la clase. La salida confirma que cada objeto LibroCalificaciones mantiene su propia copia de la variable de instancia nombreCurso.

    2 // El constructor de LibroCalificaciones se utiliza para especificar el
    3 // nombre del curso cada vez que se crea cada objeto LibroCalificaciones.
    4 
    5 public class PruebaLibroCalificaciones
    6 {
    7 // el método main empieza la ejecución del programa
    8 public static void main( String args[] )
    9 {
    10 // crea objeto LibroCalificaciones
    11 LibroCalificaciones libroCalificaciones1 = new LibroCalificaciones(
    12 “CS101 Introduccion a la programacion en Java” );
    13 LibroCalificaciones libroCalificaciones2 = new LibroCalificaciones(
    14 “CS102 Estructuras de datos en Java” );
    15 
    16 // muestra el valor inicial de nombreDelCurso para cada LibroCalificaciones
    17 System.out.printf( “El nombre del curso de libroCalificaciones1 es: %s\n”,
    18 libroCalificaciones1.obtenerNombreDelCurso() );
    19 System.out.printf( “El nombre del curso de libroCalificaciones2 es: %s\n”,
    20 libroCalificaciones2.obtenerNombreDelCurso() );
    21 } // fin de main
    22 
    23 } // fin de la clase PruebaLibroCalificaciones

Al igual que los métodos, los constructores también pueden recibir argumentos. No obstante, una importante diferencia entre los constructores y los métodos es que los constructores no pueden devolver valores, por lo cual no pueden especifi car un tipo de valor de retorno (ni siquiera void). Por lo general, los constructores se declaran como public. Si una clase no incluye un constructor, las variables de instancia de esa clase se inicializan con sus valores predeterminados. Si un programador declara uno o más constructores para una clase, el compilador de Java no creará un constructor predeterminado para esa clase