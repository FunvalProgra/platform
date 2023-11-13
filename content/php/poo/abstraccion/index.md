---
title: "Abstracción en la Programación Orientada a Objetos (POO) con PHP"
date: 2023-11-10T12:52:45-05:00
draft: false
showPagination: false
---

## Introducción

La abstracción es uno de los cuatro pilares fundamentales de la Programación Orientada a Objetos (POO), junto con la encapsulación, la herencia y el polimorfismo. La abstracción se refiere al proceso de ocultar los detalles de implementación y mostrar solo la funcionalidad al usuario.

## ¿Qué es la Abstracción?

En términos simples, la abstracción es el proceso de identificar las características y comportamientos esenciales de un objeto, ignorando los detalles menos relevantes. En el contexto de la POO, la abstracción a menudo se logra mediante el uso de clases y objetos.

Por ejemplo, si consideramos un objeto `Coche`, las características esenciales podrían ser la marca, el modelo y el color del coche, y los comportamientos podrían ser arrancar, acelerar y frenar. Los detalles menos relevantes, como cómo se fabrica el coche o qué tipo de tornillos se utilizan en su construcción, se ignoran.

## ¿Cómo se Implementa la Abstracción en POO con PHP?

La abstracción se implementa en POO mediante el uso de clases y métodos abstractos.

### Clases Abstractas

Una clase abstracta es una que no puede ser instanciada por sí misma, sino que debe ser extendida por otras clases. Una clase abstracta puede contener tanto métodos concretos (métodos con una implementación) como métodos abstractos (métodos sin implementación).

```php
abstract class Animal {
    abstract public function mover();
}
```

### Métodos Abstractos

Un método abstracto es un método que se declara en una clase abstracta pero no se implementa. La implementación de estos métodos se proporciona en las clases que extienden la clase abstracta.

```php
class Perro extends Animal {
    public function mover() {
        echo "El perro corre";
    }
}
```

## Beneficios de la Abstracción

La abstracción ofrece varios beneficios en la programación orientada a objetos:

1. **Simplicidad**: Al ocultar los detalles de implementación y mostrar solo la funcionalidad al usuario, la abstracción hace que el sistema sea más fácil de entender y utilizar.

2. **Reutilización de código**: Las clases abstractas y los métodos abstractos permiten la reutilización de código, ya que una clase abstracta puede proporcionar una implementación predeterminada que las subclases pueden heredar.

3. **Seguridad**: Al ocultar los detalles de implementación, la abstracción también mejora la seguridad del código, ya que los usuarios no pueden modificar los datos internos de un objeto directamente.

## Conclusión

La abstracción es un concepto fundamental en la programación orientada a objetos que permite a los programadores ocultar los detalles de implementación y mostrar solo la funcionalidad al usuario. Aunque este artículo proporciona una introducción a la abstracción, hay muchos otros aspectos de la POO, como la encapsulación, la herencia y el polimorfismo, que también son importantes para escribir código eficiente y mantenible.

## Recursos

### Videos

{{< youtube 7npqxD4XB7s >}}

<br>

{{< youtube R5MTvkRgeMk >}}

### Más lectura

Esta página está en inglés pero puedes traducirla en tu navegador.

https://www.w3schools.com/php/php_oop_classes_abstract.asp
