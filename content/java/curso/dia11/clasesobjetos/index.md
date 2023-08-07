---
title: "Clases y Objetos"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

# Clases

Una clase representa al conjunto de objetos que comparten una estructura y un comportamiento comunes. Una clase es una combinación específica de atributos y métodos y puede considerarse un tipo de dato de cualquier tipo no primitivo. Así, una clase es una especie de plantilla o prototipo de objetos: define los atributos que componen ese tipo de objetos y los métodos que pueden emplearse para trabajar con esos objetos. Aunque, por otro lado, una clase también puede estar compuesta por métodos estáticos que no necesitan de objetos (como las clases construidas en los capítulos anteriores que contienen un método estático main). La declaración de una clase sigue la siguiente sintaxis:

``` java
[modificadores] class IdentificadorClase {
    // Declaraciones de atributos y metodos
    ...
}

```
Convención de los programadores en Java: los identificadores de las clases deberían ser simples, descriptivos y sustantivos y, en el caso de nombres compuestos, con la primera letra de cada uno en mayúsculas. Es conveniente utilizar las palabras completas y evitar los acrónimos, a menos que la abreviatura sea mucho más utilizada que la forma no abreviada como en URL o HTML.

Una instancia es un elemento tangible (ocupa memoria durante la ejecución del programa) generado a partir de una definición de clase. Todos los objetos empleados en un programa han de pertenecer a una clase determinada.

Aunque el término a veces se emplea de una forma imprecisa, un objeto es una instancia de una clase predefinida en Java o declarada por el usuario y referenciada por una variable que almacena su dirección de memoria. Cuando se dice que Java no tiene punteros simplemente se indica que Java no tiene punteros que el programador pueda ver, ya que todas las referencias a objeto son de hecho punteros en la representación interna.

En general, el acceso a los atributos se realiza a través del operador punto, que separa al identificador de la referencia del identificador del atributo (idReferencia.idAtributo). Las llamadas a los métodos para realizar las distintas acciones se llevan a cabo separando los identificadores de la referencia y del método correspondiente con el operador punto (idReferencia.idMetodo(parametros)).

Ejemplo sencillo de clase y de instancia

El siguiente código muestra la declaración de la clase Precio. La clase Precio consta de un único atributo (euro) y dos métodos: uno que asigna un valor al atributo (pone) sin devolver ningún valor y otro que devuelve el valor del atributo (da).

``` java

/**
 *  Ejemplo de declaracion de la clase Precio
 *  double da() --> devuelve el valor almacenado en euros
 *  void pone( double x ) --> almacena valor en euros
 */
public class Precio {
    // Atributo o variable miembro
    public double euros;
 
    // Metodos   
    public double da() {
        return this.euros;
    }
 
    public void pone(double x) {
        this.euros = x;
    }
}
```

{{< figure src="./clases.png" >}} 

# Interfaz Gráfica en Java Eclipse

La interfaz gráfica de usuario (GUI) es una parte fundamental de muchas aplicaciones modernas, ya que permite a los usuarios interactuar de manera visual con el software. Java ofrece un conjunto de bibliotecas y herramientas para crear interfaces gráficas utilizando el entorno de desarrollo Eclipse. A continuación, te proporcionaré una explicación detallada sobre cómo trabajar con interfaces gráficas en Java Eclipse.

##  Creación de una interfaz gráfica en Java Eclipse

Para crear una interfaz gráfica en Java Eclipse, se utilizan principalmente dos bibliotecas: Swing y JavaFX. En este caso, nos enfocaremos en Swing, que es una biblioteca estándar de Java para la creación de GUI.

<lo>
    <li>Abre Eclipse y crea un nuevo proyecto Java.</li>
    <li>Haz clic derecho en el proyecto y selecciona "New" > "Class" para crear una nueva clase Java.</li>
    <li>En la clase recién creada, importa las clases necesarias para trabajar con Swing:</li>
</lo>

``` java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JButton;
```

Dentro del método main, crea una instancia de la clase JFrame, que será la ventana principal de la interfaz:

``` java
JFrame ventana = new JFrame("Mi Aplicación");
ventana.setSize(300, 200);
ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
```

Agrega componentes a la ventana, como etiquetas y botones:

``` java
JLabel etiqueta = new JLabel("¡Hola, mundo!");
ventana.add(etiqueta);

JButton boton = new JButton("Haz clic");
ventana.add(boton);
```

Haz que la ventana sea visible:

``` java
ventana.setVisible(true);
```
Ejecuta la aplicación y verás la interfaz gráfica que has creado.

{{< youtube IgU4DFrpbsY >}}


# Ejemplos para practicar

A continuación, te presento dos ejemplos sencillos de interfaces gráficas en Java Eclipse para que puedas practicar:

## Ejemplo 1: Calculadora básica

Crea una interfaz gráfica que simule una calculadora básica con los botones de los dígitos, operadores aritméticos y un campo de texto para mostrar el resultado. Utiliza los componentes de Swing, como JFrame, JLabel y JButton, para construir la calculadora. Implementa la lógica para realizar las operaciones y mostrar los resultados en el campo de texto.

## Ejemplo 2: Lista de tareas

Crea una interfaz gráfica que permita al usuario ingresar tareas en un campo de texto y agregarlas a una lista. Utiliza componentes como JFrame, JTextField, JButton y JList para construir la interfaz. Implementa la funcionalidad para agregar tareas a la lista y mostrarlas visualmente. Puedes permitir al usuario marcar las tareas como completadas y eliminarlas de la lista.

Estos ejemplos te ayudarán a practicar la creación de interfaces gráficas en Java Eclipse. Puedes expandir la funcionalidad de los ejemplos, mejorar la apariencia de la interfaz y explorar otros componentes de Swing para enriquecer la experiencia del usuario.

Recuerda que la práctica constante es clave para dominar la creación de interfaces gráficas en Java Eclipse. Explora la documentación y los recursos disponibles en línea para ampliar tus conocimientos y mejorar tus habilidades en este campo.