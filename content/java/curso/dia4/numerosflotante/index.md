---
title: "Números de punto flotante y double"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

En nuestra siguiente aplicación, dejaremos por un momento nuestro ejemplo práctico con la clase LibroCalificaciones para declarar una clase llamada Cuenta, la cual mantiene el saldo de una cuenta bancaria. 

La mayoría de los saldos de las cuentas no son números enteros (por ejemplo, 0, –22 y 1024). Por esta razón, la clase Cuenta epresenta el saldo de las cuentas como un número de punto fl otante (es decir, un número con un punto decimal, como 7.33, 0.0975 o 1000.12345). Java cuenta con dos tipos primitivos para almacenar números de punto flotante en la memoria: float y double. La principal diferencia entre ellos es que las variables tipo double pueden almacenar números con mayor magnitud y detalle (es decir, más dígitos a la derecha del punto decimal; lo que también se conoce como precisión del número) que las variables float.

Las variables de tipo float representan números de punto fl otante de precisión simple y tienen siete dígitos 
significativos. Las variables de tipo double representan números de punto fl otante de precisión doble. Éstos 
requieren el doble de memoria que las variables float y proporcionan 15 dígitos signifi cativos; aproximadamente el doble de precisión de las variables float. Para el rango de valores requeridos por la mayoría de los programas, debe bastar con las variables de tipo float, pero podemos utilizar variables tipo double para “ir a la segura”. En algunas aplicaciones, incluso hasta las variables de tipo double serán inadecuadas; dichas aplicaciones se encuentran más allá del alcance de este libro. La mayoría de los programadores representan los números de punto fl otante con el tipo double. De hecho, Java trata a todos los números de punto fl otante que escribimos en el código fuente de un programa (como 7.33 y 0.0975) como valores double de manera predeterminada. Dichos valores en el código fuente se conocen como literales de punto fl otante. En el apéndice D, Tipos primitivos, podrá consultar los rangos de los valores para los tipos float y double.

Aunque los números de punto fl otante no son siempre 100% precisos, tienen numerosas aplicaciones. Por 
ejemplo, cuando hablamos de una temperatura corporal “normal” de 36.8, no necesitamos una precisión con un 
número extenso de dígitos. Cuando leemos la temperatura en un termómetro como 36.8, en realidad podría ser 
36.7999473210643. Si consideramos a este número simplemente como 36.8, está bien para la mayoría de las aplicaciones en las que se trabaja con las temperaturas corporales. Debido a la naturaleza imprecisa de los números de punto flotante, se prefi ere el tipo double al tipo float ya que las variables double pueden representar números de punto flotante con más precisión. Por esta razón, utilizaremos el tipo double a lo largo de este libro.

Los números de punto fl otante también surgen como resultado de la división. En la aritmética convencional, 
cuando dividimos 10 entre 3 el resultado es 3.3333333…, y la secuencia de números 3 se repite en forma indefinida. La computadora asigna sólo una cantidad fi ja de espacio para almacenar un valor de este tipo, por lo que, sin duda, el valor de punto fl otante almacenado sólo puede ser una aproximación.
``` java
    2 // La clase Cuenta con un constructor para
    3 // inicializar la variable de instancia saldo.
    4 
    5 public class Cuenta
    6 {
    7 private double saldo; // variable de instancia que almacena el saldo
    8 
    9 // constructor
    10 public Cuenta( double saldoInicial )
    11 {
    12 // valida que saldoInicial sea mayor que 0.0; 
    13 // si no lo es, saldo se inicializa con el valor predeterminado 0.0
    14 if ( saldoInicial > 0.0 )
    15 saldo = saldoInicial; 
    16 } // fin del constructor de Cuenta
    17
    18 // abona (suma) un monto a la cuenta
    19 public void abonar( double monto )
    20 {
    21 saldo = saldo + monto; // suma el monto al saldo 
    22 } // fin del método abonar
    23 
    24 // devuelve el saldo de la cuenta
    25 public double obtenerSaldo()
    26 {
    27 return saldo; // proporciona el valor de saldo al método que hizo la llamada
    28 } // fin del método obtenerSaldo
    29 
    30 } // fin de la clase Cuenta
```
La clase Cuenta contiene un constructor y dos métodos. Debido a que es común que alguien abra una cuenta 
para depositar dinero de inmediato, el constructor (líneas 10 a la 16) recibe un parámetro llamado saldoInicial
de tipo double, el cual representa el saldo inicial de la cuenta. Las líneas 14 y 15 aseguran que saldoInicial sea mayor que 0.0. De ser así, el valor de saldoInicial se asigna a la variable de instancia saldo. En caso contrario, saldo permanece en 0.0, su valor inicial predeterminado.

El método abonar (líneas 19 a la 22) no devuelve datos cuando completa su tarea, por lo que su tipo de valor 
de retorno es void. El método recibe un parámetro llamado monto: un valor double que se sumará al saldo. La 
línea 21 suma monto al valor actual de saldo, y después asigna el resultado a saldo (con lo cual se sustituye el monto del saldo anterior).

El método obtenerSaldo (líneas 25 a la 28) permite a los clientes de la clase (es decir, otras clases que utilicen esta clase) obtener el valor del saldo de un objeto Cuenta específi co. El método especifi ca el tipo de valor de retorno double y una lista de parámetros vacía.

Observe una vez más que las instrucciones en las líneas 15, 21 y 27 utilizan la variable de instancia saldo,
aun y cuando no se declaró en ninguno de los métodos. Podemos usar saldo en estos métodos, ya que es una 
variable de instancia de la clase