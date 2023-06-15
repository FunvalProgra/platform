---
title: "Variables de instancia, métodos establecer y métodos obtener"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

Por lo general, una clase consiste en uno o más métodos que manipulan los atributos pertenecientes a un 
objeto específi co de la clase. Los atributos se representan como variables en la declaración de la clase. Dichas variables se llaman campos, y se declaran dentro de la declaración de una clase, pero fuera de los cuerpos de las declaraciones de los métodos de la clase. Cuando cada objeto de una clase mantiene su propia copia de un atributo, el campo que representa a ese atributo se conoce también como variable de instancia; cada objeto (instancia) de la clase tiene una instancia separada de la variable en memoria. El ejemplo en esta sección demuestra una clase LibroCalificaciones, que contiene una variable de instancia llamada nombreDelCurso para representar el nombre del curso de un objeto LibroCalificaciones específico.

### La clase LibroCalificaciones con una variable de instancia, un método establecer y un método obtener 

En nuestra siguiente aplicación (fi guras 3.7 y 3.8), la clase LibroCalificaciones (código anterior) mantiene el nombre del curso como una variable de instancia, para que pueda usarse o modifi carse en cualquier momento, durante la ejecución de una aplicación. Esta clase contiene tres métodos: establecerNombreDelCurso, obtenerNombreDelCurso y mostrarMensaje. El método establecerNombreDelCurso almacena el nombre de un curso en 
un LibroCalificaciones. El método obtenerNombreDelCurso obtiene el nombre del curso de un LibroCalificaciones. El método mostrarMensaje, que en este caso no especifi ca parámetros, sigue mostrando un mensaje 
de bienvenida que incluye el nombre del curso; como veremos más adelante, el método ahora obtiene el nombre 
del curso mediante una llamada a otro método en la misma clase: obtenerNombreDelCurso.

Por lo general, un instructor enseña más de un curso, cada uno con su propio nombre. La línea 7 declara que 
nombreDelCurso es una variable de tipo String. Como la variable se declara en el cuerpo de la clase, pero fuera de los cuerpos de los métodos de la misma (líneas 10 a la 13, 16 a la 19 y 22 a la 28), la línea 7 es una declaración para una variable de instancia. Cada instancia (es decir, objeto) de la clase LibroCalificaciones contiene una copia de cada variable de instancia. Por ejemplo, si hay dos objetos LibroCalificaciones, cada objeto tiene su propia copia de nombreDelCurso (una por cada objeto). Un benefi cio de hacer de nombreDelCurso una variable de instancia es que todos los métodos de la clase (en este caso, LibroCalificaciones) pueden manipular cualquier variable de instancia que aparezca en la clase (en este caso, nombreDelCurso).

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

### Método de establecer y obtener

Los campos private de una clase pueden manipularse sólo mediante los métodos de esa clase. Por lo tanto, un 
cliente de un objeto (es decir, cualquier clase que llame a los métodos del objeto) llama a los métodos public de la clase para manipular los campos private de un objeto de esa clase. Esto explica por qué las instrucciones en el método main, llaman a los métodos establecerNombreDelCurso, obtenerNombreDelCurso y 
mostrarMensaje en un objeto LibroCalificaciones. A menudo, las clases proporcionan métodos public para 
permitir a los clientes de la clase establecer (es decir, asignar valores a) u obtener (es decir, obtener los valores de) variables de instancia private. Los nombres de estos métodos no necesitan empezar con establecer u obtener, pero esta convención de nomenclatura es muy recomendada en Java, y es requerida para ciertos componentes de software especiales de Java, conocidos como JavaBeans, que pueden simplifi car la programación en muchos entornos de desarrollo integrados (IDEs). El método que establece la variable nombreDelCurso en este ejemplo se llama establecerNombreDelCurso, y el método que obtiene el valor de la variable de instancia nombreDelCurso se llama obtenerNombreDelCurso.

    2 // Crea y manipula un objeto LibroCalificaciones.
    3 import java.util.Scanner; // el programa usa la clase Scanner
    4 
    5 public class PruebaLibroCalificaciones
    6 {
    7 // el método main empieza la ejecución del programa
    8 public static void main( String args[] )
    9 {
    10 // crea un objeto Scanner para obtener la entrada de la ventana de comandos
    11 Scanner entrada = new Scanner( System.in );
    12 
    13 // crea un objeto LibroCalificaciones y lo asigna a miLibroCalificaciones
    14 LibroCalificaciones miLibroCalificaciones = new LibroCalificaciones();
    15 
    16 // muestra el valor inicial de nombreDelCurso
    17 System.out.printf( “El nombre inicial del curso es: %s\n\n”,
    18 miLibroCalificaciones.obtenerNombreDelCurso() );
    19 
    20 // pide y lee el nombre del curso
    21 System.out.println( “Escriba el nombre del curso:” );
    22 String elNombre = entrada.nextLine(); // lee una línea de texto
    23 miLibroCalificaciones.establecerNombreDelCurso( elNombre ); // establece el nombre 
    del curso 
    24 System.out.println(); // imprime una línea en blanco
    25 
    26 // muestra el mensaje de bienvenida después de especificar el nombre del curso
    27 miLibroCalificaciones.mostrarMensaje();
    28 } // fin de main
    29 
    30 } // fin de la clase PruebaLibroCalificaciones