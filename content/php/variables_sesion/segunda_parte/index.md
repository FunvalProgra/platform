---
title: "Variables de sesión en PHP (segunda parte)"
date: 2023-07-15T13:34:47-05:00
draft: false
showPagination: false
---

## Almacenamiento de datos en variables de sesión

Las variables de sesión en PHP pueden contener cualquier tipo de dato, incluyendo cadenas de texto, números, arreglos y objetos serializados.
Para guardar datos en una variable de sesión, simplemente se asigna un valor a un elemento del array `$_SESSION`, como se mostró en el ejemplo anterior.

## Ejemplo 1

Aquí tienes un ejemplo sencillo de cómo utilizar variables de sesión en PHP:

```php
<?php
// Iniciar la sesión
session_start();

// Almacenar datos en variables de sesión
$_SESSION['nombre'] = 'Juan';
$_SESSION['edad'] = 25;

// Acceder a los valores de sesión
$nombre = $_SESSION['nombre'];
$edad = $_SESSION['edad'];

// Mostrar los valores de sesión
echo "Nombre: " . $nombre . "<br>";
echo "Edad: " . $edad . "<br>";

// Eliminar una variable de sesión específica
unset($_SESSION['edad']);

// Mostrar los valores actualizados de sesión
echo "Nombre: " . $nombre . "<br>";
echo "Edad: " . $_SESSION['edad'] . "<br>";

// Destruir la sesión
session_destroy();
?>
```

En este ejemplo, se inicia la sesión utilizando `session_start()`. Luego, se almacenan datos en variables de sesión utilizando el array `$_SESSION`. Se guarda el nombre 'Juan' en `$_SESSION['nombre']` y la edad 25 en `$_SESSION['edad']`.

Después, se accede a los valores de sesión asignándolos a variables locales. En este caso, se asigna `$_SESSION['nombre']` a la variable `$nombre` y `$_SESSION['edad']` a la variable `$edad`.

A continuación, se muestran los valores de sesión utilizando `echo`.

Luego, se elimina la variable de sesión 'edad' utilizando `unset($_SESSION['edad'])`. Si intentas acceder a `$_SESSION['edad']` nuevamente, verás que ahora está vacía.

Finalmente, se destruye la sesión con `session_destroy()`. Esto elimina todos los datos de sesión almacenados y finaliza la sesión.

## Ejemplo 2

Aquí tienes un ejemplo más complejo que muestra cómo utilizar variables de sesión en PHP para crear un sistema de inicio de sesión básico:

Archivo: login.php

```php
<?php
session_start();

// Verificar si el usuario ya ha iniciado sesión
if (isset($_SESSION['usuario'])) {
    // Si el usuario ya está logueado, redirigirlo a la página de inicio
    header("Location: inicio.php");
    exit();
}

// Verificar si se envió el formulario de inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar las credenciales del usuario (se pueden consultar en una base de datos)
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Validar las credenciales (ejemplo simplificado)
    if ($usuario === 'admin' && $contrasena === 'password') {
        // Iniciar sesión y almacenar el nombre de usuario en la variable de sesión
        $_SESSION['usuario'] = $usuario;

        // Redirigir al usuario a la página de inicio
        header("Location: inicio.php");
        exit();
    } else {
        // Credenciales incorrectas, mostrar un mensaje de error
        $mensajeError = "Usuario o contraseña incorrectos";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Iniciar sesión</title>
</head>
<body>
    <h1>Iniciar sesión</h1>
    <?php if (isset($mensajeError)): ?>
        <p><?php echo $mensajeError; ?></p>
    <?php endif; ?>
    <form method="POST" action="login.php">
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" required><br>
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required><br>
        <button type="submit">Iniciar sesión</button>
    </form>
</body>
</html>
```

Archivo: inicio.php

```php
<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    // Si el usuario no ha iniciado sesión, redirigirlo a la página de inicio de sesión
    header("Location: login.php");
    exit();
}

// Obtener el nombre de usuario de la variable de sesión
$usuario = $_SESSION['usuario'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Página de inicio</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $usuario; ?>!</h1>
    <p>Esta es la página de inicio.</p>
    <a href="logout.php">Cerrar sesión</a>
</body>
</html>
```

En este ejemplo, el archivo ``login.php`` es la página de inicio de sesión. Cuando el usuario envía el formulario de inicio de sesión, se verifican las credenciales proporcionadas. Si las credenciales son válidas, se inicia la sesión y se almacena el nombre de usuario en la variable de sesión ``$_SESSION['usuario']``. Luego, el usuario es redirigido a la página de inicio ``inicio.php``.

El archivo ``inicio.php`` es la página de inicio, a la cual solo se puede acceder si el usuario ha iniciado sesión. En esta página, se verifica si existe la variable de sesión ``$_SESSION['usuario']``. Si no existe, significa que el usuario no ha iniciado sesión y se redirige automáticamente a la página de inicio de sesión.

Si el usuario ha iniciado sesión correctamente, se muestra un mensaje de bienvenida junto con el nombre de usuario almacenado en ``$_SESSION['usuario']``. Además, se proporciona un enlace para cerrar sesión, el cual dirige al archivo ``logout.php``.

Ten en cuenta que este ejemplo es una implementación básica y simplificada de un sistema de inicio de sesión. En un entorno de producción, se deben tomar precauciones adicionales para garantizar la seguridad, como la encriptación de contraseñas y la protección contra ataques de fuerza bruta.

## Consideraciones de seguridad

- Las variables de sesión deben manejarse con precaución, ya que pueden ser manipuladas por usuarios maliciosos para comprometer la seguridad de una aplicación.
- Es importante validar y filtrar los datos ingresados por el usuario antes de almacenarlos en variables de sesión, para evitar posibles ataques de inyección de código o cross-site scripting (XSS).
- Además, se deben implementar medidas de seguridad como la regeneración de ID de sesión después de que un usuario inicie sesión correctamente o realice ciertas acciones importantes.

## Video de refuerzo

{{< youtube IAL6Nq6FW0s >}}
