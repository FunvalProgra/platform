---
title: "Consultas base de Datos php"
date: 2023-03-12T11:47:29-06:00
draft: false
showPagination: false
---
# Consultas base de Datos php

Para realizar consultas a una base de datos desde PHP, necesitas utilizar una extensión como MySQLi o PDO que te permita conectarte y manipular la base de datos. A continuación, te muestro un ejemplo básico utilizando la extensión MySQLi:

**Conexión a la base de datos:**
Primero, debes establecer una conexión con la base de datos utilizando la función `mysqli_connect()`. Aquí tienes un ejemplo:

```php
$servername = "localhost";
$username = "usuario";
$password = "contraseña";
$dbname = "nombre_base_datos";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}
```

**Consulta SELECT:**
Para realizar una consulta SELECT a la base de datos, utilizas la función `mysqli_query()` para ejecutar la consulta y obtener un conjunto de resultados. Luego, puedes utilizar funciones como `mysqli_fetch_assoc()` o `mysqli_fetch_array()` para obtener los datos de cada fila. Aquí tienes un ejemplo:

```php
$sql = "SELECT * FROM usuarios";
$resultado = mysqli_query($conn, $sql);

if (mysqli_num_rows($resultado) > 0) {
    while ($fila = mysqli_fetch_assoc($resultado)) {
        echo "ID: " . $fila["id"] . ", Nombre: " . $fila["nombre"] . ", Email: " . $fila["email"] . "<br>";
    }
} else {
    echo "No se encontraron registros.";
}
```

En este ejemplo, se seleccionan todos los registros de la tabla "usuarios" y se muestran los datos de cada fila.

**Consulta INSERT, UPDATE y DELETE:**
Para realizar consultas de inserción (INSERT), actualización (UPDATE) o eliminación (DELETE), utilizas la función `mysqli_query()` para ejecutar la consulta. Aquí tienes ejemplos:

```php
// Consulta INSERT
$sql = "INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@example.com')";
if (mysqli_query($conn, $sql)) {
    echo "Registro insertado correctamente.";
} else {
    echo "Error al insertar el registro: " . mysqli_error($conn);
}

// Consulta UPDATE
$sql = "UPDATE usuarios SET nombre = 'Pedro' WHERE id = 1";
if (mysqli_query($conn, $sql)) {
    echo "Registro actualizado correctamente.";
} else {
    echo "Error al actualizar el registro: " . mysqli_error($conn);
}

// Consulta DELETE
$sql = "DELETE FROM usuarios WHERE id = 1";
if (mysqli_query($conn, $sql)) {
    echo "Registro eliminado correctamente.";
} else {
    echo "Error al eliminar el registro: " . mysqli_error($conn);
}
```

Estos son ejemplos básicos de cómo realizar consultas a una base de datos desde PHP utilizando MySQLi. Recuerda cerrar la conexión a la base de datos utilizando la función `mysqli_close()` cuando hayas terminado. También es importante tener en cuenta las buenas prácticas de seguridad, como utilizar consultas preparadas o escapar los datos para evitar ataques de inyección SQL.

# Get y Post en PHP
En PHP, puedes utilizar las superglobales `$_GET` y `$_POST` para acceder a los datos enviados desde un formulario HTML o desde la URL.

**`$_GET`:**
La superglobal `$_GET` se utiliza para acceder a los datos enviados a través de los parámetros de la URL. Los datos enviados a través de `$_GET` son visibles en la URL y tienen la siguiente estructura: `http://example.com?parametro1=valor1&parametro2=valor2`. Aquí tienes un ejemplo:

```php
// URL: http://example.com?nombre=Juan&edad=25

$nombre = $_GET['nombre'];
$edad = $_GET['edad'];

echo "Hola, $nombre. Tu edad es $edad años.";
```

En este ejemplo, se obtienen los valores de los parámetros `nombre` y `edad` desde la URL y se utilizan para mostrar un mensaje.

**`$_POST`:**
La superglobal `$_POST` se utiliza para acceder a los datos enviados a través de un formulario HTML utilizando el método POST. Los datos enviados a través de `$_POST` no son visibles en la URL y se envían en el cuerpo de la solicitud HTTP. Aquí tienes un ejemplo:

```php
<form method="post" action="procesar.php">
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="number" name="edad" placeholder="Edad">
    <input type="submit" value="Enviar">
</form>
```

```php
// procesar.php

$nombre = $_POST['nombre'];
$edad = $_POST['edad'];

echo "Hola, $nombre. Tu edad es $edad años.";
```

En este ejemplo, los datos ingresados en el formulario se envían al archivo `procesar.php` utilizando el método POST. En `procesar.php`, se obtienen los valores de los campos `nombre` y `edad` utilizando `$_POST` y se muestra un mensaje.

Es importante tener en cuenta que tanto `$_GET` como `$_POST` contienen los datos tal como son enviados, por lo que es recomendable utilizar funciones de saneamiento y validación para evitar problemas de seguridad y errores en el código.

# Consultas base de Datos php video
{{< youtube i1x8z5K3xpE >}}

# Get y Post en PHP video

{{< youtube oP8AUuV-6PM >}}
