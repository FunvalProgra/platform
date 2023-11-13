---
title: "Encapsulamiento - solución"
date: 2023-11-13T14:29:40-05:00
draft: false
showPagination: false
---

[Regresar a ver los ejercicios](../ejercicios/)

Aquí tienes una implementación básica para cada uno de los ejercicios propuestos. Ten en cuenta que estas soluciones son simples y pueden mejorarse o modificarse según los requisitos específicos.

Además, es recomendable que tú, como estudiante, intentes resolver los ejercicios por ti mismo antes de revisar esta solución debido a que así lograrás una comprensión más profunda de los conceptos.

### Ejercicio 1: Sencillo

Crea una clase llamada `Persona` con dos propiedades privadas, `nombre` y `edad`. La clase debe tener métodos públicos para establecer y obtener el nombre y la edad.

```php
<?php
class Persona {
    // Propiedades privadas
    private $nombre;
    private $edad;

    // Constructor
    public function __construct($nombre, $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    // Métodos para obtener y establecer el nombre
    public function getNombre() {
        return $this->nombre;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    // Métodos para obtener y establecer la edad
    public function getEdad() {
        return $this->edad;
    }

    public function setEdad($edad) {
        $this->edad = $edad;
    }
}

// Uso de la clase Persona
$persona = new Persona("Juan", 25);
echo "Nombre: " . $persona->getNombre() . ", Edad: " . $persona->getEdad();
?>
```

---

### Ejercicio 2: Encapsulamiento en Tienda de Libros:

Crea dos clases: `Libro` y `Biblioteca`.

- La clase `Libro` debe tener propiedades privadas para el título, el autor y el año de publicación. Implementa métodos para obtener y establecer estos atributos, asegurándote de encapsular adecuadamente el acceso a las propiedades.
- La clase `Biblioteca` debe tener una lista privada de libros disponibles. Implementa métodos públicos para agregar un libro, eliminar un libro y obtener la lista de libros. Asegúrate de que los libros no puedan ser accedidos directamente desde fuera de la clase.

```php
<?php
class Libro {
    // Propiedades privadas
    private $titulo;
    private $autor;
    private $anioPublicacion;

    // Constructor
    public function __construct($titulo, $autor, $anioPublicacion) {
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->anioPublicacion = $anioPublicacion;
    }

    // Métodos para obtener y establecer el título
    public function getTitulo() {
        return $this->titulo;
    }

    public function setTitulo($titulo) {
        $this->titulo = $titulo;
    }

    // Métodos para obtener y establecer el autor
    public function getAutor() {
        return $this->autor;
    }

    public function setAutor($autor) {
        $this->autor = $autor;
    }

    // Métodos para obtener y establecer el año de publicación
    public function getAnioPublicacion() {
        return $this->anioPublicacion;
    }

    public function setAnioPublicacion($anioPublicacion) {
        $this->anioPublicacion = $anioPublicacion;
    }
}

class Biblioteca {
    // Lista privada de libros
    private $libros = [];

    // Método para agregar un libro.
    // "Libro $libro": Se está haciendo una instancia de la clase Libro al momento de recibir el parámetro.
    public function agregarLibro(Libro $libro) {
        $this->libros[] = $libro;
    }

    // Método para eliminar un libro
    public function eliminarLibro($titulo) {
        foreach ($this->libros as $index => $libro) {
            if ($libro->getTitulo() === $titulo) {
                unset($this->libros[$index]);
                return true;
            }
        }
        return false;
    }

    // Método para obtener la lista de libros
    public function obtenerListaLibros() {
        return $this->libros;
    }
}

// Uso de las clases
$libro1 = new Libro("La Sombra del Viento", "Carlos Ruiz Zafón", 2001);
$libro2 = new Libro("1984", "George Orwell", 1949);

$biblioteca = new Biblioteca();
$biblioteca->agregarLibro($libro1);
$biblioteca->agregarLibro($libro2);

$listaLibros = $biblioteca->obtenerListaLibros();
foreach ($listaLibros as $libro) {
    echo "Libro: " . $libro->getTitulo() . ", Autor: " . $libro->getAutor() . ", Año de Publicación: " . $libro->getAnioPublicacion() . "\n";
}
?>
```
