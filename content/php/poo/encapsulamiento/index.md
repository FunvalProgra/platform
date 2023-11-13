---
title: "Encapsulamiento en la Programación Orientada a Objetos (POO) con PHP"
date: 2023-11-10T16:40:30-05:00
draft: false
showPagination: false
---

## Introducción

El encapsulamiento es uno de los cuatro pilares fundamentales de la Programación Orientada a Objetos (POO), junto con la herencia, la abstracción y el polimorfismo. En términos sencillos, el encapsulamiento se refiere a la práctica de ocultar los detalles de implementación de un objeto y exponer solo las funcionalidades necesarias.

## ¿Qué es el encapsulamiento?

El encapsulamiento es un mecanismo que permite restringir el acceso a algunos componentes de un objeto. Es una forma de proteger los datos del objeto de ser modificados directamente. En PHP, esto se logra mediante el uso de modificadores de acceso en las propiedades y métodos de la clase.

## Modificadores de acceso en PHP

PHP proporciona tres modificadores de acceso:

1. **Public**: Las propiedades y métodos declarados como públicos pueden ser accedidos desde cualquier parte del código.

2. **Private**: Las propiedades y métodos declarados como privados solo pueden ser accedidos dentro de la clase donde fueron declarados.

3. **Protected**: Las propiedades y métodos declarados como protegidos pueden ser accedidos dentro de la clase donde fueron declarados y por las clases que heredan de esta clase.

## Ejemplo de encapsulamiento en PHP

### Ejemplo 1: Cuenta Bancaria

```php
class CuentaBancaria {
    private $balance;

    public function __construct($balanceInicial) {
        $this->balance = $balanceInicial;
    }

    public function depositar($cantidad) {
        if ($cantidad > 0) {
            $this->balance += $cantidad;
            return true;
        } else {
            return false;
        }
    }

    public function retirar($cantidad) {
        if ($cantidad > 0 && $this->balance >= $cantidad) {
            $this->balance -= $cantidad;
            return true;
        } else {
            return false;
        }
    }

    public function getBalance() {
        return $this->balance;
    }
}

$cuenta = new CuentaBancaria(1000);
$cuenta->depositar(500);
echo $cuenta->getBalance(); // Imprime: 1500
$cuenta->retirar(200);
echo $cuenta->getBalance(); // Imprime: 1300
```

### Ejemplo 2: Libro

```php
class Libro {
    private $titulo;
    private $autor;
    private $paginasLeidas;

    public function __construct($titulo, $autor) {
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->paginasLeidas = 0;
    }

    public function leerPaginas($numeroPaginas) {
        $this->paginasLeidas += $numeroPaginas;
    }

    public function getPaginasLeidas() {
        return $this->paginasLeidas;
    }
}

$libro = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes");
$libro->leerPaginas(42);
echo $libro->getPaginasLeidas(); // Imprime: 42
```

## Beneficios del encapsulamiento

El encapsulamiento ofrece varios beneficios:

- **Control del acceso a los datos**: Al ocultar los detalles de implementación, podemos controlar cómo se accede o se modifica el estado interno de un objeto.

- **Flexibilidad y mantenibilidad del código**: Al encapsular los detalles de implementación, podemos cambiar la implementación interna de una clase sin afectar a otras partes del código que usan esa clase.

- **Prevención de errores**: Al restringir el acceso directo a las propiedades de un objeto, podemos prevenir que se asignen valores no válidos o inesperados.

## Conclusión

El encapsulamiento es una técnica poderosa que nos permite ocultar los detalles de implementación de un objeto y exponer solo las operaciones que son seguras y necesarias. Esto nos permite construir código más seguro, más flexible y más fácil de mantener. En PHP, el encapsulamiento se logra mediante el uso de modificadores de acceso en las propiedades y métodos de una clase. Aunque puede parecer un concepto simple, el encapsulamiento es fundamental para la Programación Orientada a Objetos y es esencial para el diseño de software eficaz.

## Recursos

### Videos

{{< youtube 8aQSD36paWU >}}

<br>

{{< youtube BlSkc88L_xA >}}

<br>

{{< youtube O48QPz-m35w >}}
