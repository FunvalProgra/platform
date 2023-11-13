---
title: "Modificadores de Acceso en Programación Orientada a Objetos (POO) con PHP"
date: 2023-11-10T16:08:26-05:00
draft: false
showPagination: false
---

# Modificadores de Acceso en Programación Orientada a Objetos (POO) con PHP

## Introducción

Los modificadores de acceso son una característica fundamental de la Programación Orientada a Objetos (POO). Estos modificadores definen el nivel de visibilidad de las propiedades y métodos de una clase. En PHP, existen tres tipos de modificadores de acceso: `public`, `protected` y `private`.

## Modificadores de Acceso

### Public

El modificador `public` es el más simple de los tres. Cuando una propiedad o método se declara como `public`, significa que puede ser accedido desde cualquier parte del código, incluso fuera de la clase en la que se declaró.

```php
class Ejemplo {
    public $propiedadPublica = "Soy una propiedad pública";

    public function metodoPublico() {
        echo $this->propiedadPublica;
    }
}

$objeto = new Ejemplo();
echo $objeto->propiedadPublica; // Salida: Soy una propiedad pública
$objeto->metodoPublico(); // Salida: Soy una propiedad pública
```

En este ejemplo, tanto `$propiedadPublica` como `metodoPublico()` pueden ser accedidos desde cualquier parte del código.

### Protected

El modificador `protected` es un poco más restrictivo. Cuando una propiedad o método se declara como `protected`, significa que solo puede ser accedido desde la clase en la que se declaró, o desde cualquier clase que herede de ella.

```php
class Ejemplo {
    protected $propiedadProtegida = "Soy una propiedad protegida";

    public function metodoPublico() {
        echo $this->propiedadProtegida;
    }
}

class Hija extends Ejemplo {
    public function metodoHija() {
        echo $this->propiedadProtegida;
    }
}

$objeto = new Hija();
$objeto->metodoPublico(); // Salida: Soy una propiedad protegida
$objeto->metodoHija(); // Salida: Soy una propiedad protegida
```

En este ejemplo, `$propiedadProtegida` solo puede ser accedida desde la clase `Ejemplo` o desde cualquier clase que herede de `Ejemplo`.

### Private

El modificador `private` es el más restrictivo de los tres. Cuando una propiedad o método se declara como `private`, significa que solo puede ser accedido desde la clase en la que se declaró.

```php
class Ejemplo {
    private $propiedadPrivada = "Soy una propiedad privada";

    public function metodoPublico() {
        echo $this->propiedadPrivada;
    }
}

class Hija extends Ejemplo {
    public function metodoHija() {
        echo $this->propiedadPrivada; // Error: Cannot access private property Ejemplo::$propiedadPrivada
    }
}

$objeto = new Ejemplo();
$objeto->metodoPublico(); // Salida: Soy una propiedad privada
```

En este ejemplo, `$propiedadPrivada` solo puede ser accedida desde la clase `Ejemplo`.

## Conclusión

Los modificadores de acceso son una herramienta poderosa en la programación orientada a objetos que permite a los desarrolladores controlar el nivel de visibilidad de las propiedades y métodos de una clase. PHP, como lenguaje de programación orientado a objetos, proporciona tres modificadores de acceso: `public`, `protected` y `private`, cada uno con su propio nivel de visibilidad.

## Recursos

### Más lectura

Esta página está en inglés pero puedes traducirla en tu navegador.

https://www.w3schools.com/php/php_oop_access_modifiers.asp