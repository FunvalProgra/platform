---
title: "Polimorfismo"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Polimorfismo

El polimorfismo, que literalmente significa "formas diferentes", es uno de los conceptos centrales de POO. El polimorfismo explora cómo crear y usar dos métodos con el mismo nombre para ejecutar dos funcionalidades diferentes, como agregar dos funciones con el mismo nombre pero que aceptan parámetros diferentes.

Por ejemplo, exploremos cómo puede definir dos funciones con el nombre Multiply(). Uno se usa para calcular el producto de dos enteros, y el otro se usa para calcular el producto de dos dobles.

``` java
public class Main {   
     public static void main(String[] args) {        
        Multiplier.Multiply(3,5);        
        Multiplier.Multiply(3.5,5.1);    
    }}
```
Cuando se ejecuta el código, el resultado es el siguiente:

Multiplicación de enteros, resultado = 15
doble multiplicación, resultado = 17,849999999999998

Notará que al llamar a los dos métodos, no hay diferencia, excepto por los parámetros pasados. Además, tenga en cuenta que la salida depende del tipo de parámetros pasados.

## Diferencias entre herencia y polimorfismo

Comprensiblemente, los desarrolladores a veces confunden el polimorfismo con otro concepto central de POO: herencia. Sin embargo, los dos principios son sustancialmente diferentes.

En la herencia, una clase a la que se hace referencia como clase secundaria puede heredar los métodos y atributos de otra clase (la clase principal). Vea el siguiente ejemplo:4

``` java
class Shape {class}class Square extends Shape {// methods of Shape class are not specified here but are automatically accessible to this Square class thanks to inheritance// methods of Square class}