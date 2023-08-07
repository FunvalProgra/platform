---
title: "Funciones en PHP"
date: 2023-07-11T18:09:11-05:00
draft: false
showPagination: false
---

PHP basa su eficacia principalmente en su enorme biblioteca de funciones. Una gran librería que crece constantemente, a medida que nuevas versiones van surgiendo y se van incorporando nuevas áreas de trabajo dentro del lenguaje. Las funciones de PHP nos permiten realizar de una manera sencilla tareas habituales y a la hora de desarrollar una aplicación, pero además nosotros podemos hacer nuevas funciones para resolver todo tipo de tareas más específicas de nuestra aplicación.

Para acceder a todas las utilidades que hay detrás de una función tan sólo hemos de realizar la llamada (o invocación) de la forma apropiada y especificar los parámetros necesarios para que la función realice su tarea.

{{< alert >}}
**Nota:** Después de la llegada de PHP 5, en el momento en el que PHP pasó a ser un lenguaje con una orientación a objetos potente, las funciones de la biblioteca del lenguaje tienen en muchos casos alternativas en base a clases y objetos. Nosotros como programadores podemos escoger trabajar con funciones corrientes o con métodos de objetos y clases, pero en general la funcionalidad a la que llegaremos es exactamente la misma.
{{</ alert >}}

## Ejemplo de funciones existentes en PHP

Antes de lanzarnos a crear nuestra propia función, merece la pena echar un vistazo a la <a href="https://www.php.net/manual/es/funcref.php" target="_blank">documentación</a> para ver si dicha función ya existe o podemos aprovecharnos de alguna de las existentes para aligerar nuestro trabajo. Aquí te daré algunos ejemplos:

```php
// Función predefinida: strlen()
$longitud = strlen("Hola, mundo"); // Devuelve la longitud de una cadena

// Función predefinida: strtolower()
$cadena = "Hola, mundo";
$cadenaMinusculas = strtolower($cadena); // Convierte una cadena a minúsculas
```

## Crear nuestras propias funciones en PHP

Lo que puede parecer ligeramente más complicado, pero que con un mínimo de experiencia resultará muy sencillo y sin lugar a dudas muy práctico, es crear nuestras propias funciones. De una forma general, podríamos crear nuestras propias funciones para conectarnos a una base de datos o crear los encabezados o etiquetas meta de un documento HTML. Para una aplicación de comercio electrónico podríamos crear por ejemplo funciones de cambio de una moneda a otra o de calculo de los impuestos a añadir al precio de articulo. En definitiva, es interesante crear funciones para la mayoría de acciones más o menos sistemáticas que realizamos en nuestros programas.

Aquí daremos el ejemplo de creación de una función que, llamada al comienzo de nuestro script, nos crea el encabezado de nuestro documento HTML y coloca el titulo que queremos a la página:

```php
function hacer_encabezado($titulo) {
  $encabezado="<html><head><title>$titulo</title></head>";
  echo $encabezado;
}
```

Esta función podría ser llamada al principio de todas nuestras páginas de la siguiente forma:

```php
$titulo="Mi web";
hacer_encabezado($titulo);
```

De esta forma automatizamos el proceso de creación de nuestro documento. Podríamos por ejemplo incluir en la función otras variables que nos ayudasen a construir las etiquetas meta y de esta forma, con un esfuerzo mínimo, crearíamos los encabezados personalizados para cada una de nuestras páginas. De este mismo modo nos es posible crear cierres de documento o interfaces de la web como podrían ser barras de navegación, formularios de login, etc.

Como has podido comprobar, para crear una función debemos declararla. Para ello usamos la palabra `function` seguida del nombre de la función. Luego unos paréntesis donde podemos indicar los parámetros que se espera recibir en su invocación y finalmente el bloque de código de la función propiamente dicha, encerrado entre llaves.

## Estructurar el código de una aplicación con nuestras propias librerías de funciones

Por supuesto, la función ha de ser definida para poder ser utilizada, ya que no se encuentra integrada en PHP sino que la hemos creado nosotros. Si pensamos que en una aplicación web completa podemos tener cientos de funciones definidas por nosotros mismos quizás te asuste que tengas demasiado código de funciones que deben ser definidas antes de ser usadas. Pero esto en realidad tiene solución, ya que pueden ser incluidas desde un archivo externo. De hecho es muy común que tengamos archivos donde solo colocamos el código de las funciones, almacenando definiciones de las funciones que vayamos creando para realizar un sitio web.

Estos archivos en los que se guardan las funciones se llaman comúnmente librerías. La forma de incluirlos en nuestro script es a partir de la instrucción require o include:

```php
require("ruta/a/libreria.php");
```

O si prefieres la alternativa del include:

```php
include("ruta/a/libreria.php");
```

{{< alert >}}
**Nota:** Tanto require() como include() hacen el mismo trabajo, de traerse código que hay en archivos diferentes dentro del servidor, para que podamos utilizarlo al crear una página. La diferencia fundamental entre require e include es que la primera requiere forzosamente algo y la otra no. Es decir, si hacemos un require() de un archivo y éste no se encuentra disponible por cualquier motivo, PHP parará la ejecución del código y devolverá un "Error fatal". Si por el contrario hacemos un include() y el archivo que tratamos de traer no se encuentra disponible, entonces lo que PHP nos mostrará es una señak de advertencia, un "warning", pero tratará de seguir ejecutando el programa.
{{</ alert >}}

Te daré un ejemplo:

1. Creamos un archivo llamado libreria.php que contiene lo siguiente:

```php
<?php
//función de encabezado y colocación del titulo
function hacer_encabezado($titulo)
{
  $encabezado="<html><head>nt<title>$titulo</title>n</head>n";
  echo $encabezado;
}
?>
```

2. Creamos el archivo principal llamado página.php (por ejemplo):

```
<?php
include("libreria.php")
$titulo="Mi Web"
hacer_encabezado($titulo)
?>
<body>
    El cuerpo de la página
</body>
</html>
```

Podemos meter todas las funciones que vayamos encontrando dentro de un mismo archivo pero resulta muchísimo más ventajoso ir clasificándolas en distintos archivos por temática: Funciones de conexión a bases de datos, funciones comerciales, funciones generales, etc. Esto nos ayudara a poder localizarlas antes para corregirlas o modificarlas, nos permite también cargar únicamente el tipo de función que necesitamos para el script sin recargar éste en exceso además de reutilizar algunas de nuestras librerías para varios sitios webs distintos.

Como te mencioné al comienzo de esta lectura, existen funciones ya creadas en PHP, una de ellas es la función llamada header que crea un encabezado HTML configurable lo cual nos evita tener que crearla nosotros mismos.

{{< alert >}}
**Nota:** Como puede verse, la tarea del programador puede en algunos casos parecerse a la de un coleccionista. Hay que ser paciente y metódico y al final, a base de trabajo propio, intercambio de código y dedicación podemos llegar poseer nuestro pequeño tesoro de funciones, capaces de aligerar nuestro trabajo diario.

De hecho, más adelante si sigues aprendiendo PHP profesionalmente encontrarás que existen los frameworks, que son en cierto modo como bibliotecas adicionales de funciones que puedes usar para resolver muchas más cosas, adicionales a las que el propio lenguaje ya te ofrece. Los frameworks además ayudan a los programadores a estructurar su código y a usar diversos patrones de diseño de software que facilitan la creación de proyectos de fácil mantenimiento y capaces de crecer sin volverse inmanejables. Al final de este nivel, aprenderemos uno muy conocido llamado Laravel.
{{</ alert >}}

## Ejemplo de función

Vamos a ver un ejemplo de creación de funciones en PHP. Se trata de hacer una función que recibe un texto y lo escribe en la página con cada carácter separado por "-". Es decir, si recibe "hola" debe escribir "h-o-l-a" en la página web.

La manera de realizar esta función será recorrer el string, caracter a caracter, para imprimir cada uno de los caracteres, seguido de el signo "-". Recorreremos el string con un bucle for, desde el carater 0 hasta el número de caracteres total de la cadena.

El número de caracteres de una cadena se obtiene con la función predefinida en PHP strlen(), que recibe el string entre paréntesis y devuelve el número de los caracteres que tenga.

```
<html>
<head>
   	<title>funcion 1</title>
</head>

<body>

<? php
function escribe_separa($cadena){
   	for ($i=0;$i<strlen($cadena);$i++){
      	echo $cadena[$i];
      	if ($i<strlen($cadena)-1)
         	echo "-";
   	}
}

escribe_separa ("hola");
echo "<p>";
escribe_separa ("Texto más largo, a ver lo que hace");
?>

</body>
</html>
```

La función que hemos creado se llama escribe_separa y recibe como parámetro la cadena que hay que escribir con el separador "-". El bucle for nos sirve para recorrer la cadena, desde el primer al último carácter. Luego, dentro del bucle, se imprime cada carácter separado del signo "-". El if que hay dentro del bucle for comprueba que el actual no sea el último carácter, porque en ese caso no habría que escribir el signo "-" (queremos conseguir "h-o-l-a" y si no estuviera el if obtendríamos "h-o-l-a-").

## Paso de parámetros o argumentos

Los parámetros son los datos que reciben las funciones y que utilizan para realizar las operaciones de esa función. Una función puede recibir cualquier número de parámetros, incluso ninguno.

Si la función que estamos construyendo no necesita recibir ningún parámetro, al declararla, simplemente indicamos los paréntesis vacíos en la cabecera. Por ejemplo en la siguiente función mostramos la fecha del día de hoy. Para ello nos apoyamos en otra función incluida en PHP: date().

```php
function fecha_hoy() {
    echo date('d/m/Y');
}
```

La intención de la anterior función es mostrar la fecha del día actual. Como siempre mostrará el día de hoy, no necesito pasarle ningún parámetro, siempre hará lo mismo. Las funciones que no requieren parámetros se las invoca indicando los paréntesis vacíos.

```php
fecha_hoy();
```

En el caso que queramos, o necesitemos, recibir parámetros para implementar una función, a la hora de definirla, en la cabecera, se definen los parámetros que va a recibir.

```php
function f1 ($parametro1, $parametro2) {
    // code...
}
```

### Argumentos por valor

El paso de parámetros en PHP se realiza por valor. "Por valor" es una manera típica de pasar parámetros en funciones, quiere decir que el cambio de un dato de un parámetro no actualiza el dato de la variable que se pasó a la función. Por ejemplo, cuando invocamos una función pasando una variable como parámetro, a pesar de que cambiemos el valor del parámetro dentro de la función, la variable original no se ve afectada por ese cambio. Puede que se vea mejor con un ejemplo:

```php
function porvalor ($parametro1){
  $parametro1="hola";
  echo "<br>" . $parametro1; //imprime "hola"
}

$mivariable = "esto no cambia";
porvalor ($mivariable);
echo "<br>" . $mivariable; //imprime "esto no cambia"
```

### Argumentos por referencia

Por defecto, los argumentos de las funciones son pasados por valor (así, si el valor del argumento dentro de la función cambia, este no cambia fuera de la función). Para permitir a una función modificar sus argumentos, éstos deben pasarse por referencia.

Para hacer que un argumento a una función sea siempre pasado por referencia hay que anteponer al nombre del argumento el signo 'et' (&) en la definición de la función:

```php
<?php
function porreferencia(&$cadena) {
  $cadena = 'Si cambia';
}

$str = 'Esto es una cadena';
porreferencia ($str);
echo $str; // Imprime 'Si cambia'
?>
```

Este script mostrará por pantalla 'Si cambia'.

### Parámetros por defecto

Podemos definir valores por defecto para los parámetros. Los valores por defecto sirven para que los parámetros contengan un dato predefinido, con el que se inicializarán si no se le pasa ningún valor en la llamada de la función. Los valores por defecto se definen asignando un dato al parámetro al declararlo en la función.

```php
function pordefecto($parametro1="pepe";$parametro2=3) {
    // code...
}
```

Para la definición de función anterior, $parametro1 tiene como valor por defecto "pepe", mientras que $parametro2 tiene 3 como valor por defecto.

Si llamamos a la función sin indicar valores a los parámetros, estos tomarán los valores asignados por defecto.

## Retornar valores

### Palabra "return"

Para retornar valores en funciones se utiliza la palabra "return", indicando a continuación el dato o variable que tienen que retornar.

```php
function suma($valor1, $valor2) {
    return $valor1 + $valor2;
}
```

La anterior función realiza una operación de suma entre dos valores enviados por parámetro. Para invocarla debemos enviarle los dos valores que debe sumar. Cuando se ejecute la función recibiremos un valor como devolución y podremos hacer cualquier cosa con él. Por ejemplo, en el siguiente código estamos invocando a la función suma, enviando dos valores numéricos y almacenando el valor de devolución en una variable llamada "$resultado".

```php
$resultado = suma(3, 6);
```

Una función puede perfectamente tener múltiples palabras return en su código. Sin embargo, aunque esto ocurra, debemos tener en cuenta que una función sólo podrá devolver un único valor. Entre otras cosas esto ocurrirá porque, cuando se usa el return, se termina la ejecución de la función devolviendo el dato indicado.

Observa el siguiente código de función. Realiza una operación de división. Recuerda que la operación matemática de dividir algo entre cero no está permitida, ya que el resultado sería "infinito" y ese valor desvordaría a la máquina. Entonces, antes de realizar la operación de división vamos a hacer una comprobación que no se intente dividir entre cero.

```php
function division($valor1, $valor2) {
    if($valor2 == 0) {
        return 'No puedo dividir por cero!!';
    } else {
        return $valor1 / $valor2;
    }
}
```

Para que quede claro, ahora mira esta otra función.

```php
function cuadrado($valor) {
    return $valor * $valor;
    echo 'Esto nunca se ejecutará!!';
}
```

Debido al return, el código con la sentencia "echo" nunca se llegará a ejecutar. Así que no aparecerá nunca el mensaje por pantalla, porque el return de la línea anterior parará siempre la ejecución de la función.

Para acabar este punto queremos volver sobre la función anterior llamada "division". Dado lo aprendido de las características del return, aunque nuestro código fuera ligeramente distinto, también tendríamos el mismo resultado. Observa el siguiente código:

```php
function division($valor1, $valor2) {
    if($valor2 == 0) {
        return 'No puedo dividir por cero!!';
    }
    return $valor1 / $valor2;
}
```

El segundo return solo se ejecutará si ``$valor2`` es distinto de cero, porque si fuera igual a cero se habría salido de la función debido al primer return. Este detalle quizás cuesta un poco de ver al principio de la experiencia como programador, pero es bastante sencillo en realidad. En resumen, puedes confiar que la ejecución de una función siempre se detendrá después de producirse un return.

### Retornar múltiples valores en una función

Si queremos hacer que se puedan devolver varios valores distintos podríamos que recurrir a un truco que consiste en devolver un array.

```php
function numeros_pequenos() 
{   
  return array (0, 1, 2); 
} 
list ($zero, $one, $two) = numeros_pequenos();
```