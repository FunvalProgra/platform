---
title: "Instrucciones break y continue"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

Java también cuenta con las instrucciones break y continue etiquetadas, para usarlas en los casos en los que 
es conveniente alterar el fl ujo de control en las instrucciones de control anidadas. En el apéndice N hablaremos 
sobre las instrucciones break y continue etiqueta.

En el contexto de programación, el break es una intrucción que utilizamos para salir de un bucle como lo puede ser un for o un while, antes de que haya completado la intrucción con normalidad.
Cuando se encuentra una declaración "break", el programa sale inmediatamente del bucle o de la estructura de control en la que se encuentra y continúa con la siguiente instrucción después del bucle o estructura.

En el siguiente ejemplo podemos ver el funcionamiento de este:

        public class EjemploBreak {
            public static void main(String[] args) {
                int[] numeros = {1, 2, 3, 4, 5};

                for (int numero : numeros) {
                    System.out.println(numero);
                    
                    if (numero == 3) {
                        break; // Salir del bucle cuando el número sea 3
                    }
                }
            }
        }

En este ejemplo, se declara un arreglo de números y se itera sobre ellos utilizando un bucle "for-each". En cada iteración, se imprime el número actual. Sin embargo, si el número es igual a 3, se encuentra la declaración "break" y el bucle se interrumpe, saliendo del bucle antes de que todos los números sean impresos. 

{{< youtube C1W9nfdYlnI >}}