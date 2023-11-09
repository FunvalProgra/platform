---
title: "Subir una imagen desde un formulario con PHP"
date: 2023-11-09T15:46:48-05:00
draft: false
showPagination: false
---

## Creación del formulario

Primero, necesitamos crear un formulario HTML que permita al usuario seleccionar la imagen que desea subir. Aquí hay un ejemplo de cómo podría verse:

```html
<form action="upload.php" method="post" enctype="multipart/form-data">
  Selecciona la imagen para subir:
  <input type="file" name="fileToUpload" id="fileToUpload" />
  <button type="submit">Subir imagen</button>
</form>
```

El atributo `enctype="multipart/form-data"` es importante porque asegura que el archivo se envíe correctamente.

## Subida de la imagen al servidor

En el archivo `upload.php`, puedes usar la superglobal `$_FILES` para acceder al archivo cargado. Aquí hay un ejemplo de cómo manejar la subida del archivo:

```php
<?php
$target_dir = "uploads/";
$target_file = $target_dir . $_FILES["fileToUpload"]["name"];

if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "El archivo ". $_FILES["fileToUpload"]["name"] . " ha sido subido.";
} else {
    echo "Lo siento, hubo un error al subir tu archivo.";
}
?>
```

En este código, `$_FILES["fileToUpload"]["tmp_name"]` contiene la ruta al archivo subido en el servidor, y `$_FILES["fileToUpload"]["name"]` contiene el nombre original del archivo¹¹. `move_uploaded_file()` mueve el archivo subido, a la carpeta `uploads/`.

## Almacenamiento de la imagen en la base de datos

### ¿Cómo hacerlo?

Para subir una imagen a una base de datos con PHP, también necesitamos un formulario HTML⁶. Sin embargo, en lugar de mover el archivo subido a una carpeta en el servidor, vamos a insertar los datos del archivo en una tabla de la base de datos.

Para almacenar la imagen en la base de datos, puedes usar el tipo de dato `BLOB` (Binary Large Object). Aquí hay un ejemplo de cómo hacerlo con `mysqli`:

```php
<?php
$conexion = new mysqli("localhost", "username", "password", "database");
$image = addslashes(file_get_contents($_FILES['image']['tmp_name']));
$query = "INSERT INTO images_tabla (imagenes) VALUES ('$image')";
$response = $conexion->query($query);
if ($response) {
    echo "Imagen subida correctamente.";
} else {
    echo "Lo siento, hubo un error al subir tu imagen.";
}
?>
```

En este código, `file_get_contents($_FILES['image']['tmp_name'])` lee el contenido del archivo subido. `addslashes()` escapa caracteres especiales en el contenido del archivo para usarlo en una sentencia SQL⁶. Luego, insertamos el contenido del archivo en la tabla `images_tabla` con una sentencia SQL INSERT.

Cabe resaltar que el tipo de dato que se utiliza en la columna `imagenes` de la tabla `images_tabla` es de tipo `LONGLOB`.

## Mostrar la imagen en la interfaz del usuario

Para mostrar la imagen en la interfaz del usuario, puedes usar la función `base64_encode()` para codificar la imagen en una cadena que puede ser utilizada en una etiqueta `<img>`:

```php
<?php
$query = "SELECT image FROM images WHERE id = $id";
$stmt = $mysqli->query($query);
$row = $result->fetch_assoc();

echo '<img src="data:image/jpeg;base64,'. base64_encode( $row['image'] ).'"/>';
?>
```

Para mostrar la imagen que se encuentra en el servidor, simplemente puedes referenciar la ubicación del archivo en una etiqueta `<img>`:

```html
<img src="/path/to/image.jpg" alt="Imagen" />
```

## Conclusión

Subir una imagen desde un formulario con PHP es una tarea común en el desarrollo web. Ya sea que estés subiendo la imagen a un servidor o a una base de datos, PHP proporciona las funciones necesarias para hacer el trabajo. Con un entendimiento sólido de estas funciones y cómo usarlas, puedes manejar la subida de imágenes de manera efectiva en tus aplicaciones web.

## Recursos

### Videos

{{< youtube K9YW1sWJuR4 >}}

<br>

{{< youtube X1gto0cBu0s >}}

<br>

{{< youtube zFqOFTTQs20 >}}

### Más lectura

https://www.srcodigofuente.es/aprender-php/subir-imagenes-html-php

https://www.baulphp.com/cargar-y-almacenar-imagen-en-mysql-php/
