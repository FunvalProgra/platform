---
title: "Atributos y métodos - solución"
date: 2023-11-10T15:37:05-05:00
draft: false
showPagination: false
---

[Regresar a ver los ejercicios](../ejercicios/)

Aquí tienes una implementación básica para cada uno de los ejercicios propuestos. Ten en cuenta que estas soluciones son simples y pueden mejorarse o modificarse según los requisitos específicos.

Además, es recomendable que tú, como estudiante, intentes resolver los ejercicios por ti mismo antes de revisar esta solución debido a que así lograrás una comprensión más profunda de los conceptos.

### Ejercicio 1: Biblioteca Virtual

Crea un sistema de biblioteca virtual en PHP utilizando programación orientada a objetos. Debes diseñar al menos tres clases: `Libro`, `Autor` y `Biblioteca`. Los libros deben tener atributos como título, autor, año de publicación, y disponibilidad. La biblioteca debe permitir agregar libros, mostrar la información de un libro específico y listar todos los libros disponibles.

```php
<?php

class Autor {
    public $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }
}

class Libro {
    public $titulo;
    public $autor;
    public $anoPublicacion;
    public $disponibilidad;

    public function __construct($titulo, $autor, $anoPublicacion, $disponibilidad) {
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->anoPublicacion = $anoPublicacion;
        $this->disponibilidad = $disponibilidad;
    }

    public function obtenerInformacion() {
        return "Título: $this->titulo, Autor: $this->autor->nombre, Año de Publicación: $this->anoPublicacion, Disponibilidad: $this->disponibilidad";
    }
}

class Biblioteca {
    public $libros = [];

    public function agregarLibro($libro) {
        $this->libros[] = $libro;
    }

    public function mostrarInformacionLibro($indice) {
        if (isset($this->libros[$indice])) {
            return $this->libros[$indice]->obtenerInformacion();
        } else {
            return "Libro no encontrado";
        }
    }

    public function listarLibrosDisponibles() {
        $librosDisponibles = [];
        foreach ($this->libros as $libro) {
            if ($libro->disponibilidad) {
                $librosDisponibles[] = $libro->titulo;
            }
        }
        return $librosDisponibles;
    }
}

// Uso del sistema
$autor1 = new Autor("Autor 1");
$autor2 = new Autor("Autor 2");

$libro1 = new Libro("Libro 1", $autor1, 2000, true);
$libro2 = new Libro("Libro 2", $autor2, 2010, false);

$biblioteca = new Biblioteca();
$biblioteca->agregarLibro($libro1);
$biblioteca->agregarLibro($libro2);

echo $biblioteca->mostrarInformacionLibro(0) . PHP_EOL;
echo "Libros disponibles: " . implode(", ", $biblioteca->listarLibrosDisponibles()) . PHP_EOL;

?>
```

---

### Ejercicio 2: Tienda en Línea

Desarrolla un sistema básico para una tienda en línea utilizando programación orientada a objetos en PHP. Crea las clases `Producto`, `Carrito` y `Cliente`. Los productos deben tener atributos como nombre, precio y cantidad disponible. El carrito debe permitir agregar productos, calcular el total de la compra y finalizar la compra, disminuyendo la cantidad de productos disponibles.

```php
<?php

class Producto {
    public $nombre;
    public $precio;
    public $cantidadDisponible;

    public function __construct($nombre, $precio, $cantidadDisponible) {
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->cantidadDisponible = $cantidadDisponible;
    }
}

class Carrito {
    public $productos = [];

    public function agregarProducto($producto) {
        $this->productos[] = $producto;
    }

    public function calcularTotal() {
        $total = 0;
        foreach ($this->productos as $producto) {
            $total += $producto->precio;
        }
        return $total;
    }

    public function finalizarCompra() {
        foreach ($this->productos as $producto) {
            $producto->cantidadDisponible--;
        }
        $this->productos = [];
        return "Compra realizada con éxito";
    }
}

class Cliente {
    public $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }
}

// Uso del sistema
$producto1 = new Producto("Producto 1", 50, 10);
$producto2 = new Producto("Producto 2", 30, 5);

$carrito = new Carrito();
$carrito->agregarProducto($producto1);
$carrito->agregarProducto($producto2);

echo "Total de la compra: $" . $carrito->calcularTotal() . PHP_EOL;
echo $carrito->finalizarCompra() . PHP_EOL;

?>
```

---

### Ejercicio 3: Gestión de Empleados

Diseña un sistema de gestión de empleados en PHP. Crea las clases `Empleado`, `Departamento` y `Empresa`. Los empleados deben tener atributos como nombre, salario y departamento al que pertenecen. La empresa debe permitir agregar empleados, asignarlos a departamentos y calcular el salario total de la empresa.

```php
<?php

class Departamento {
    public $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }
}

class Empleado {
    public $nombre;
    public $salario;
    public $departamento;

    public function __construct($nombre, $salario, $departamento) {
        $this->nombre = $nombre;
        $this->salario = $salario;
        $this->departamento = $departamento;
    }
}

class Empresa {
    public $empleados = [];

    public function agregarEmpleado($empleado) {
        $this->empleados[] = $empleado;
    }

    public function asignarDepartamento($empleado, $departamento) {
        $empleado->departamento = $departamento;
    }

    public function calcularSalarioTotal() {
        $total = 0;
        foreach ($this->empleados as $empleado) {
            $total += $empleado->salario;
        }
        return $total;
    }
}

// Uso del sistema
$departamento1 = new Departamento("Departamento 1");
$departamento2 = new Departamento("Departamento 2");

$empleado1 = new Empleado("Empleado 1", 50000, $departamento1);
$empleado2 = new Empleado("Empleado 2", 60000, $departamento2);

$empresa = new Empresa();
$empresa->agregarEmpleado($empleado1);
$empresa->agregarEmpleado($empleado2);

$empresa->asignarDepartamento($empleado1, $departamento2);

echo "Salario total de la empresa: $" . $empresa->calcularSalarioTotal() . PHP_EOL;

?>
```
