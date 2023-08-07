---
title: "Estructura  switch"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

En los días anteriores  sobre la instrucción if de selección simple y la instrucción if...else de selección doble. Java cuenta con la instrucción switch de selección múltiple para realizar distintas acciones, con base en los posibles valores de una variable o expresión entera. Cada acción se asocia con un valor de una expresión entera constante (es decir, un valor constante de tipo byte, short, int o char, pero no long) que la variable o expresión en la que se basa la instrucción switch pueda asumir.

{{< youtube 3asmLRCsASs >}}

La versión de la clase que presentamos ahora no sólo calcula el promedio de un conjunto de califi caciones numéricas introducidas por el usuario, sino que utiliza una instrucción switch para determinar si cada califi cación es el equivalente de A, B, C, D o F, y para incrementar el contador de la calificación apropiada. La clase también imprime en pantalla un resumen del número de estudiantes que 
recibieron cada califi cación. La entrada y la salida de ejemplo de la aplicación PruebaLibroCalificaciones, que utiliza la clase LibroCalificaciones para procesar un conjunto de calificaciones
``` java
        2 // La clase LibroCalificaciones usa la instrucción switch para contar las calificaciones
            A, B, C, D y F.
        3 import java.util.Scanner; // el programa usa la clase Scanner
        4 
        5 public class LibroCalificaciones
        6 {
        7 private String nombreDelCurso; // nombre del curso que representa este 
        LibroCalificaciones
        8 private int total; // suma de las calificaciones
        9 private int contadorCalif; // número de calificaciones introducidas
        10 private int aCuenta; // cuenta de calificaciones A
        11 private int bCuenta; // cuenta de calificaciones B
        12 private int cCuenta; // cuenta de calificaciones C
        13 private int dCuenta; // cuenta de calificaciones D
        14 private int fCuenta; // cuenta de calificaciones F
        15 
        16 // el constructor inicializa nombreDelCurso; 
        17 // las variables de instancia int se inicializan en 0 de manera predeterminada
        18 public LibroCalificaciones( String nombre )
        19 {
        20 nombreDelCurso = nombre; // inicializa nombreDelCurso
        21 } // fin del constructor
        22 
        23 // método para establecer el nombre del curso
        24 public void establecerNombreDelCurso( String nombre )
        25 {
        26 nombreDelCurso = nombre; // almacena el nombre del curso
        27 } // fin del método establecerNombreDelCurso
        28 
        29 // método para obtener el nombre del curso
        30 public String obtenerNombreDelCurso()
        31 {
        32 return nombreDelCurso;
        33 } // fin del método obtenerNombreDelCurso
        34 
        35 // muestra un mensaje de bienvenida al usuario de LibroCalificaciones
        36 public void mostrarMensaje()
        37 {
        38 // obtenerNombreDelCurso obtiene el nombre del curso
        39 System.out.printf( "Bienvenido al libro de calificaciones para\n%s!\n\n",
        40 obtenerNombreDelCurso() );
        41 } // fin del método mostrarMensaje
        42 
        43 // introduce un número arbitrario de calificaciones del usuario
        44 public void introducirCalif()
        45 {
        46 Scanner entrada = new Scanner( System.in );
        47 
        48 int calificacion; // calificación introducida por el usuario
        49 
        50 System.out.printf( "%s\n%s\n %s\n %s\n",
        51 "Escriba las calificaciones enteras en el rango de 0 a 100.",
        52 "Escriba el indicador de fin de archivo para terminar la entrada:",
        53 "En UNIX/Linux/Mac OS X escriba <ctrl> d y después oprima Intro",
        54 "En Windows escriba <ctrl> z y después oprima Intro" );
        55 
        56 // itera hasta que el usuario introduzca el indicador de fin de archivo
        57 while ( entrada.hasNext() ) 
        58 {
        59 calificacion = entrada.nextInt(); // lee calificación
        60 total += calificacion; // suma calificación a total
        61 ++contadorCalif; // incrementa el número de calificaciones
        62 
        63 // llama al método para incrementar el contador apropiado
        64 incrementarContadorCalifLetra( calificacion );
        65 } // fin de while 
        66 } // fin del método introducirCalif
        67 
        68 // suma 1 al contador apropiado para la calificación especificada
        69 public void incrementarContadorCalifLetra( int calificacion )
        70 {
        71 // determina cuál calificación se introdujo
        72 switch ( calificacion / 10 )
        73 {
        74 case 9: // calificación está entre 90
        75 case 10: // y 100 
        76 ++aCuenta; // incrementa aCuenta
        77 break; // necesaria para salir del switch
        78 
        79 case 8: // calificación está entre 80 y 89
        80 ++bCuenta; // incrementa bCuenta
        81 break; // sale del switch
        82 
        83 case 7: // calificación está entre 70 y 79
        84 ++cCuenta; // incrementa cCuenta
        85 break; // sale del switch
        86 
        87 case 6: // calificación está entre 60 y 69
        88 ++dCuenta; // incrementa dCuenta
        89 break; // sale del switch
        90 
        91 default: // calificación es menor que 60
        92 ++fCuenta; // incrementa fCuenta
        93 break; // opcional; de todas formas sale del switch
        94 } // fin de switch
        95 } // fin del método incrementarContadorCalifLetra
        96 
        97 // muestra un reporte con base en las calificaciones introducidas por el usuario 
        98 public void mostrarReporteCalif()
        99 {
        100 System.out.println( "\nReporte de calificaciones:" );
        101 
        102 // si el usuario introdujo por lo menos una calificación...
        103 if ( contadorCalif != 0 ) 
        104 {
        105 // calcula el promedio de todas las calificaciones introducidas
        106 double promedio = (double) total / contadorCalif;
        107 
        108 // imprime resumen de resultados
        109 System.out.printf( "El total de las %d calificaciones introducidas es %d\n",
        110 contadorCalif, total );
        111 System.out.printf( "El promedio de la clase es %.2f\n", promedio );
        112 System.out.printf( "%s\n%s%d\n%s%d\n%s%d\n%s%d\n%s%d\n",
        113 "Numero de estudiantes que recibieron cada calificacion:",
        114 "A: ", aCuenta, // muestra el número de calificaciones A
        115 "B: ", bCuenta, // muestra el número de calificaciones B
        116 "C: ", cCuenta, // muestra el número de calificaciones C
        117 "D: ", dCuenta, // muestra el número de calificaciones D
        118 "F: ", fCuenta ); // muestra el número de calificaciones F
        119 } // fin de if
        120 else // no se introdujeron calificaciones, por lo que imprime el mensaje 
        apropiado
        121 System.out.println( "No se introdujeron calificaciones" );
        122 } // fin del método mostrarReporteCalif
        123 } // fin de la clase LibroCalificaciones
```
Al igual que las versiones anteriores de la clase, LibroCalificaciones declara la variable de instancia nombreDelCurso (línea 7) y contiene los métodos establecerNombreDelCurso (líneas 24 a 27), obtenerNombreDelCurso (líneas 30 a 33) y mostrarMensaje (líneas 36 a 41), que establecen el nombre del curso, lo almacenan y muestran un mensaje de bienvenida al usuario, respectivamente. La clase también contiene un 
constructor (líneas 18 a 21) que inicializa el nombre del curso.

La clase LibroCalificaciones también declara las variables de instancia total (línea 8) y contadorCalif(línea 9), que llevan la cuenta de la suma de las califi caciones introducidas por el usuario y el número de calificaciones introducidas, respectivamente. Las líneas 10 a 14 declaran las variables contador para cada categoría de califi caciones. La clase LibroCalificaciones mantiene a total, contadorCalif y a los cinco contadores de las letras de califi cación como variables de instancia, de manera que estas variables puedan utilizarse o modifi carse  en cualquiera de los métodos de la clase. Observe que el constructor de la clase (líneas 18 a 21) establece sólo el nombre del curso; las siete variables de instancia restantes son de tipo int y se inicializan con 0, de manera predeterminada.

La clase LibroCalificaciones (fi gura 5.9) contiene tres métodos adicionales: introducirCalif, incrementarContadorCalifLetra y mostrarReporteCalif. El método introducirCalif (líneas 44 a 66) lee un número arbitrario de califi caciones enteras del usuario mediante el uso de la repetición controlada por un centinela, y actualiza las variables de instancia total y contadorCalif. El método introducirCalif llama al método incrementarContadorCalifLetra (líneas 69 a 95) para actualizar el contador de letra de calificación apropiado para cada calificación introducida. La clase LibroCalificaciones también contiene el método mostrarReporteCalif (líneas 98 a 122), el cual imprime en pantalla un reporte que contiene el total de todas las califi caciones introducidas, el promedio de las mismas y el número de estudiantes que recibieron cada letra de califi cación. 

Examinaremos estos métodos con más detalle. La línea 48 en el método introducirCalif declara la variable calificacion que almacenará la entrada del usuario. Las líneas 50 a 54 piden al usuario que introduzca califi caciones enteras y escriba el indicador de fin de archivo para terminar la entrada. El indicador de fin de archivo es una combinación de teclas dependiente del sistema, que el usuario introduce para indicar que no hay más datos que introducir. En el capítulo 14, Archivos y flujos, veremos cómo se utiliza el indicador de fi n de archivo cuando un programa lee su entrada desde un archivo. En los sistemas UNIX/Linux/Mac OS X, el fi n de archivo se introduce escribiendo la secuencia

                <ctrl> d

en una línea por sí sola. Esta notación signifi ca que hay que oprimir al mismo tiempo la tecla ctrl y la tecla d. En los sistemas Windows, para introducir el fi n de archivo se escribe

                <ctrl> z

La instrucción while (líneas 57 a 65) obtiene la entrada del usuario. La condición en la línea 57 llama al método hasNext de Scanner para determinar si hay más datos a introducir. Este método devuelve el valor boolean true si hay más datos; en caso contrario, devuelve false. Después, el valor devuelto se utiliza como el valor de la condición en la instrucción while. Mientras no se haya escrito el indicador de fin de archivo, el método hasNext devolverá true.

La línea 59 recibe como entrada un valor del usuario. La línea 60 utiliza el operador += para sumar calificacion a total. La línea 61 incrementa contadorCalif. El método mostrarReporteCalif de la clase utiliza estas variables para calcular el promedio de las calificaciones. La línea 64 llama al método incrementarContadorCalifLetra de la clase (declarado en las líneas 69 a 95) para incrementar el contador de letra de califi cación apropiado, con base en la calificación numérica introducida.

El método incrementarContadoraCalifLetra contiene una instrucción switch (líneas 72 a 94) que determina cuál contador se debe incrementar. En este ejemplo, suponemos que el usuario introduce una calificación válida en el rango de 0 a 100. Una califi cación en el rango de 90 a 100 representa la A: de 80 a 89, la B; de 70 a 79, la C; de 60 a 69, la D y de 0 a 59, la F. La instrucción switch consiste en un bloque que contiene una secuencia de etiquetas case y una instrucción case default opcional. Estas etiquetas se utilizan en este ejemplo para determinar cuál contador se debe incrementar, con base en la calificación.

Cuando el fl ujo de control llega al switch, el programa evalúa la expresión entre paréntesis (calificacion / 10) que va después de la palabra clave switch. A esto se le conoce como la expresión de control de la instrucción switch. El programa compara el valor de la expresión de control (que se debe evaluar como un valor entero de tipo byte, char, short o int) con cada una de las etiquetas case. La expresión de control de la línea 72 realiza la división entera, que trunca la parte fraccionaria del resultado. Por ende, cuando dividimos cualquier valor en el rango de 0 a 100 entre 10, el resultado es siempre un valor de 0 a 10. Utilizamos varios de estos valores en nuestras  etiquetas case. Por ejemplo, si el usuario introduce el entero 85, la expresión de control se evalúa como el valor int 8. La instrucción switch compara a 8 con cada etiqueta case. Si ocurre una coincidencia (case 8: en la línea 79), el programa ejecuta las instrucciones para esa instrucción case. Para el entero 8, la línea 80 incrementa a bCuenta, ya que una califi cación entre 80 y 89 es una B. La instrucción break (línea 81) hace que el control del programa proceda con la primera instrucción después del switch; en este programa, llegamos al final del cuerpo del método incrementarContadorCalifLetra, por lo que el control regresa a la línea 65 en el método introducirCalif (la primeralínea después de la llamada a incrementarContadorCalifLetra). Esta línea marca el fin del cuerpo del ciclo while que recibe las calificaciones de entrada (líneas 57 a 65), por lo que el control fluye hacia la condición del while (línea 57) para determinar si el ciclo debe seguir ejecutándose. 

Las etiquetas case en nuestro switch evalúan explícitamente los valores 10, 9, 8, 7 y 6. Observe los casos en las líneas 74 y 75, que evalúan los valores 9 y 10 (los cuales representan la califi cación A). Al listar las etiquetas case en forma consecutiva, sin instrucciones entre ellas, pueden ejecutar el mismo conjunto de instrucciones; cuando la expresión de control se evalúa como 9 o 10, se ejecutan las instrucciones de las líneas 76 y 77. 
La instrucción switch no cuenta con un mecanismo para evaluar rangos de valores, por lo que cada valor que deba evaluarse se tiene que listar en una etiqueta case separada. Observe que cada case puede tener varias instrucciones. La instrucción switch es distinta de otras instrucciones de control, en cuanto a que no requiere llaves alrededor de varias instrucciones en cada case.

Sin instrucciones break, cada vez que ocurre una coincidencia en el switch, se ejecutan las instrucciones para ese case y los subsiguientes hasta encontrar una instrucción break o el fi nal del switch. A menudo a esto se le conoce como que las etiquetas case “se pasarían” hacia las instrucciones en las etiquetas case subsiguientes.

DEITEL, PAUL J. Y HARVEY M. DEITE, (2008) Java como programar. Recuperardo el 13 de junio de 2023