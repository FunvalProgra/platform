---
title: "Comparación entre tipos primitivos y tipos por referencia"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

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

Los tipos de datos en Java se dividen en dos categorías: tipos primitivos y tipos por referencia (algunas veces conocidos como tipos no primitivos). Los tipos primitivos son boolean, byte, char, short, int, long, 
float y double. Todos los tipos no primitivos son tipos por referencia, por lo cual las clases, que especifi can los tipos de objetos, son tipos por referencia.

Una variable de tipo primitivo puede almacenar sólo un valor de su tipo declarado a la vez. Por ejemplo, una 
variable int puede almacenar un número completo (como 7) a la vez. Cuando se asigna otro valor a esa variable, 
se sustituye su valor inicial. Las variables de instancia de tipo primitivo se inicializan de manera predeterminada; las variables de los tipos byte, char, short, int, long, float y double se inicializan con 0, y las variables de tipo boolean se inicializan con false. Usted puede especifi car sus propios valores iniciales para las variables de tipo primitivo. Recuerde que las variables locales no se inicializan de manera predeterminada. 

Tip para prevenir errores
Cualquier intento de utilizar una variable local que no se haya inicializado produce un error de compilación.

Los programas utilizan variables de tipo por referencia (que por lo general se llaman referencias) para almacenar las ubicaciones de los objetos en la memoria de la computadora. Se dice que dicha variable hace referencia a un objeto en el programa. Cada uno de los objetos a los que se hace referencia pueden contener muchas variables de instancia y métodos. La línea 14 del código crea un objeto de la clase LibroCalificaciones, y la variable miLibroCalificaciones contiene una referencia a ese objeto LibroCalificaciones. Las variables de instancia de tipo por referencia se inicializan de manera predeterminada con el valor null: una palabra reservada que representa una “referencia a nada”. Esto explica por qué la primera llamada a obtenerNombreDelCurso en la línea 18 del código anterior; no se había establecido el valor de nombreDelCurso, por lo que se devolvía el valor inicial predeterminado null. En el apéndice C, Palabras clave y palabras reservadas, se muestra una lista completa de las palabras reservadas y las palabras clave.

Es obligatorio que una referencia a un objeto invoque (es decir, llame) a los métodos de un objeto. En la 
aplicación anterior, las instrucciones en el método main utilizan la variable miLibroCalificaciones para enviar mensajes al objeto LibroCalificaciones. Estos mensajes son llamadas a métodos (como establecer NombreDelCurso y obtenerNombreDelCurso) que permiten al programa interactuar con el objeto LibroCalificaciones. Por ejemplo, la instrucción en la línea 23 utiliza a miLibroCalificaciones para enviar el mensaje establecerNombreDelCurso al objeto LibroCalificaciones. El mensaje incluye el argumento que requiere establecerNombreDelCurso para realizar su tarea. El objeto LibroCalificaciones utiliza esta información para 
establecer la variable de instancia nombreDelCurso. Tenga en cuenta que las variables de tipo primitivo no hacen referencias a objetos, por lo que dichas variables no pueden utilizarse para invocar métodos