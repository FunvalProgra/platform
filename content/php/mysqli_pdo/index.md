---
title: "mysqli y PDO"
date: 2023-07-12T19:06:26-05:00
draft: false
showPagination: false
---

## Conexión con una base de datos desde PHP

Existen diversos juegos de funciones para trabajar con bases de datos MySQL en PHP (o MariaDB, ya que son compatibles). Antiguamente se usaban las funciones "mysql" pero de un tiempo para aquí se usa la nueva interfaz de acceso a MySQL denominada "mysqli". Es importante usar "mysqli" porque está mejorada, pero sobre todo porque en las versiones modernas de PHP solamente funciona "mysqli", siendo el API de funciones "mysql" declarado obsoleto.

Como API de funciones nos referimos a todo el conjunto de funciones existentes en el lenguaje que nos permiten conectarnos con un servidor MySQL, acceder a los datos almacenados en las tablas, realizar actualizaciones, inserciones, etc. Para cada tipo de operación usaremos una función de PHP o, mejor dicho, una combinación de llamadas a funciones que se realizarán en secuencia.

Además, cabe decir que estas interfaces de acceso a las bases de datos y a sus datos se encuentran publicadas en formato "funciones clásicas" o por medio de "objetos". Nosotros vamos a preferir el acceso usando la interfaz de "objetos", dado que las funciones clásicas se planea marcar como obsoletas, por lo que es posible que dentro de poco se eliminen del lenguaje.

## MYSQL Improved (MYSQLi)

MySQLi es una extensión de PHP diseñada específicamente para interactuar con bases de datos MySQL. Proporciona una API mejorada en comparación con la extensión original de MySQL en PHP y ofrece características adicionales.

### Ventajas de usarlo

1. Compatibilidad mejorada: MySQLi es compatible con versiones más recientes de MySQL y ofrece características adicionales que no están disponibles en la extensión MySQL original.
2. Uso de consultas preparadas: MySQLi admite consultas preparadas, lo que ayuda a prevenir ataques de inyección SQL al separar los datos de la consulta.
3. Mayor control y funcionalidad: MySQLi ofrece más opciones de configuración y funcionalidades, como el soporte para múltiples declaraciones en una sola consulta y la recuperación de resultados parciales de una consulta.

Vamos a ver un pedazo de código para conectarnos con un servidor MySQL y luego lo explicamos con detalle.

```php
<?php
    $mysqli_conexion = new mysqli("localhost", "usuario", "clave", "ejemplo");
    if($mysqli_conexion->connect_error) {
        echo "Error de conexión con la base de datos: " . $mysqli_conexion->connect_error;
    } else {
        echo "Hemos podido conectarnos con MySQL";
    }
?>
```

Comenzamos por la línea donde se crea la conexión con la base de datos:

```php
$mysqli_conexion = new mysqli("localhost", "usuario", "clave", "ejemplo");
```

Esta línea está creando un nuevo objeto para la conexión con el servidor MySQL. Una vez creado ese objeto lo estamos almacenando en la variable $mysqli_conexion. Para crear el objeto de conexión usamos el operador "new", indicando a continuación el nombre del tipo de objeto que estamos creando y los parámetros que se requiere para su creación, que son los siguientes:

- "**localhost**": es el "host" del servidor de base de datos. El valor "localhost" es muy habitual y será usado si el servidor de la base de datos se encuentra en el mismo ordenador donde se está ejecuntando ese código.
- "**usuario**": será el nombre de usuario que se usa para acceder al sistema gestor de la base de datos. Ese usuario debe tener permisos para acceder a la base de datos con la que nos queremos conectar.
- "**clave**": es el password o contraseña del usuario usado.
- "**ejemplo**": es el mombre de la base de datos con la que nos queremos conectar con ese usuario y clave, dentro del sistema gestor instalado en el host mencionado. En nuestro caso es "ejemplo" porque al crear la base de datos la hemos llamado así, pero si la llamaste de otra manera al crearla, tendrás que usar ese nombre.

Veamos un ejemplo más completo:

```php
<?php
$hostname = "localhost";
$username = "root";
$password = "";
$db = "microsot";

try {
    $connection = new mysqli($hostname, $username, $password, $db);
    echo "Conexión exitosa";
} catch (mysqli_sql_exception $e) {
    echo 'Error de conexión' . $e->getMessage();
    exit;
}
?>
```

Si te fijas, en este caso hemos añadido la sentencia exit; en el caso positivo del if. Es para mostrar el error de conexión con la base de datos y luego salir inmediatamente del script, parando toda la ejecución de la página. Aquí se podría también redirigir a una página de error, o mostrar un include o cualquier otra cosa, pero siempre acabando en exit esa rama del if, para asegurarnos que no se realiza nada a continuación.

Esto nos permite no poner una rama de else en este if, ya que no sería necesaria, evitando el uso de llaves del caso negativo, que ensucien un poco el código del bloque siguiente donde ya realizaremos el acceso a los datos. Esto también nos permitirá que este código de conexión se encuentre en un "include" separado, de modo que se escriba una única vez y no tengamos disperso en decenas de lugares de la página este mismo código de conexión.

### Realizar una consulta

Te mostraré otro ejemplo.

```php
<?php
$consulta = "SELECT * FROM tabla";

$resultado = $mysqli_conexion->query($consulta);

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        // Procesar cada fila
        // ...
    }
} else {
    die('Error en la consulta: ' . $mysqli_conexion->error);
}

$resultado->free();
?>
```

### Utilizar consultas preparadas

```php
<?php
$consulta = "INSERT INTO tabla (columna1, columna2) VALUES (?, ?)";

$valor1 = 'valor1';
$valor2 = 'valor2';

$declaracion = $mysqli_conexion->prepare($consulta);
$declaracion->bind_param('ss', $valor1, $valor2);

if ($declaracion->execute()) {
    // Consulta ejecutada con éxito
} else {
    die('Error en la consulta: ' . $declaracion->error);
}

$declaracion->close();
?>
```

En el ejemplo anterior:

- Utiliza el método bind_param() para vincular los valores a los marcadores de posición en la consulta preparada. Indica el tipo de dato de cada parámetro y luego proporciona los valores correspondientes.
- 'ss' indica que ambos valores son de tipo cadena (string). Si tuvieras valores enteros, utilizarías 'ii', y así sucesivamente.
- Una vez que hayas terminado con la consulta preparada, ciérrala utilizando el método close().

Recuerda también que el ejemplo anterior es para una inserción de datos, pero el mismo enfoque se puede aplicar a otras operaciones como actualizaciones (UPDATE) o eliminaciones (DELETE).

### Cerrar las conexiones con las bases de datos MySQL

Es importante que se cierren las conexiones con el sistema gestor de bases de datos, para liberarlas y que la ejecución de otras páginas las puedan utilizar. Para ello, sobre el objeto de conexión realizaremos la invocación del método close().

Usaremos un código como el que sigue.

```php
$conexion->close();
```

En el anterior código $conexion es el objeto que hemos creado al conectarnos con la base de datos. Simplemente invocamos el método close() con lo que PHP cerrará la conexión con MySQL. Si tenemos que volver a conectarnos se debería realizar de nuevo otra conexión.

El método close() devuelve un valor boleano como resultado, para indicar si pudo cerrar correctamente la conexión o no. Generalmente ese valor no lo procesamos, ya que damos por hecho que las conexiones se podrán cerrar y, en caso contrario poco podremos hacer, simplemente se cerrará cuando se pueda ella sola.

{{< alert >}}
Todas las conexiones con la base de datos acabarán cerrándose tarde o temprano, aunque no las cerremos explícitamente con el método close() desde PHP. Sin embargo, es mucho mejor cerrarlas nosotros mismos una vez ya no se vayan a usar, dado que así nos aseguramos que así se liberan cuanto antes. Ten en cuenta que MySQL o MariaDB tienen un número de conexiones limitado, que suelen ser unas 100 (Esto es configurable en el sistema gestor de la base de datos). Habitualmente esas 100 conexiones son más que suficientes, porque el tiempo de ejecución de una página PHP generalmente es cuestión de milisegundos, o pocos segundos como máximo, y por tanto la conexión bien cerrada ocupará una de esas conexiones solamente por unos instantes. Sin embargo, si tenemos mucho tráfico y no cerramos las conexiones normalmente, es posible que se queden abiertas por más tiempo y llegue un momento en el que MySQL nos devuelva errores porque no tenga cuota de apertura de nuevas conexiones.
{{</ alert >}}

## PDO

PDO es una extensión de PHP que proporciona una capa de abstracción para acceder a bases de datos desde PHP. Permite interactuar con diferentes sistemas de gestión de bases de datos como MySQL, PostgreSQL, SQLite y más, utilizando una interfaz común.

### Ventajas de usarlo

1. Portabilidad: PDO es compatible con múltiples bases de datos, lo que facilita la migración de una base de datos a otra sin cambiar significativamente el código.
2. Seguridad: PDO utiliza sentencias preparadas y parámetros para evitar ataques de inyección SQL, lo que ayuda a prevenir vulnerabilidades.
3. Orientado a objetos: PDO se basa en el paradigma de programación orientada a objetos, lo que proporciona una sintaxis más intuitiva y legible.
4. Soporte para transacciones: PDO admite transacciones, lo que permite realizar operaciones en bloques y revertir los cambios si alguna operación falla.
5. Gestión de errores: PDO maneja automáticamente errores de base de datos y proporciona información detallada para su depuración.

### Establecer una conexión

A continuación, te muestro cómo utilizar PDO para establecer una conexión a la base de datos y realizar operaciones básicas:

```php
<?php
$servidor = 'localhost';
$usuario = 'nombre_usuario';
$contraseña = 'contraseña';
$baseDatos = 'nombre_base_datos';

try {
    $conexion = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $contraseña);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Error de conexión: ' . $e->getMessage());
}
?>
```

### Realizar una consulta

```php
<?php
try {
    $consulta = $conexion->query("SELECT * FROM tabla");

    // Obtener los resultados
    while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
        // Procesar cada fila
        // ...
    }
} catch (PDOException $e) {
    die('Error en la consulta: ' . $e->getMessage());
}
?>
```

### Utilizar sentencias preparadas

```php
<?php
try {
    $consulta = $conexion->prepare("INSERT INTO tabla (columna1, columna2) VALUES (?, ?)");

    $valor1 = 'valor1';
    $valor2 = 'valor2';

    $consulta->bindParam(1, $valor1);
    $consulta->bindParam(2, $valor2);

    $consulta->execute();
} catch (PDOException $e) {
    die('Error en la consulta: ' . $e->getMessage());
}
?>
```

{{< youtube 2m2BdeURiQw >}}