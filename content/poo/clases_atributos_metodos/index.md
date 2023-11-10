---
title: "Clases, Atributos y Métodos en PHP"
date: 2023-11-10T12:43:07-05:00
draft: false
showPagination: false
---

## Introducción

PHP es un lenguaje de programación de scripts del lado del servidor que se utiliza principalmente para el desarrollo web. Aunque originalmente no fue diseñado con la Programación Orientada a Objetos (POO) en mente, PHP ha evolucionado para incluir un conjunto completo de características de POO. En este artículo, exploraremos tres conceptos fundamentales de la POO en PHP: clases, atributos y métodos.

## Clases

Una clase es una plantilla o un plano que define qué datos y comportamientos puede tener un objeto. En PHP, definimos una clase usando la palabra clave `class`, seguida del nombre de la clase.

```php
class Coche {
    // Atributos y métodos
}
```

## Atributos

Los atributos, también conocidos como propiedades, son las variables que se definen dentro de una clase. Estos representan el estado o los datos de un objeto. En PHP, los atributos se definen utilizando una de las palabras clave `public`, `protected` o `private`, seguida del nombre del atributo.

```php
class Coche {
    public $color;
    private $velocidad;
    protected $motor;
}
```

## Métodos

Los métodos son funciones que se definen dentro de una clase. Estos representan el comportamiento de un objeto. Al igual que los atributos, los métodos también pueden ser `public`, `protected` o `private`.

```php
class Coche {
    // Atributos...

    public function acelerar() {
        // Código para acelerar
    }

    private function encenderMotor() {
        // Código para encender el motor
    }
}
```

## Creando Objetos

Para crear un objeto de una clase, usamos la palabra clave `new` seguida del nombre de la clase.

```php
$miCoche = new Coche();
```

## Accediendo a Atributos y Métodos

Para acceder a los atributos y métodos de un objeto, usamos el operador `->`.

```php
$miCoche->color = 'rojo';
$miCoche->acelerar();
```

## Conclusión

Las clases, atributos y métodos son conceptos fundamentales de la Programación Orientada a Objetos en PHP. Aunque este artículo proporciona una introducción, hay muchos otros aspectos de la POO en PHP, como la herencia, el polimorfismo y el encapsulamiento, que también son importantes para escribir código eficiente y mantenible.

## Recursos

### Videos

{{< youtube YxlmXbxH8v0 >}}

<br>

{{< youtube G1FmkFoai84 >}}

<br>

{{< youtube BSsx7QGlhpo >}}

### Más lectura

Esta página está en inglés pero puedes traducirla en tu navegador.

https://www.w3schools.com/php/php_oop_classes_objects.asp
