---
title: "Crear una base de datos con tablas"
date: 2023-07-10T19:29:47-05:00
draft: false
showPagination: false
---

MySQL es uno de los sistemas de gestión de bases de datos (SGBD) más populares y ampliamente utilizados en el desarrollo de aplicaciones web. En este artículo, te guiaremos a través de los pasos básicos para crear una base de datos en MySQL. Utilziaremos 'phpMyAdmin', que una herramienta popular y poderosa para administrar bases de datos MySQL de forma gráfica a través de un navegador web. En este artículo, exploraremos cómo utilizar phpMyAdmin para crear bases de datos y tablas utilizando sentencias SQL. Aprenderás los pasos necesarios para crear una base de datos, definir tablas con sus campos y establecer claves primarias.

## 1. Instalación del servidor MySQL:

Hasta este punto ya debes tener instalado WAMP o XAMPP porque te permitirá gestionar un entorno de desarrollo en el que utilices MySQL.

## 2. Acceso al servidor phpMyAdmin:

Necesitamos acceder a phpMyAdmin y aquí te dejaré las instrucciones:

### En XAMPP:

1. Asegúrate de que XAMPP esté instalado y en ejecución en tu computadora.
2. Abre tu navegador web (por ejemplo, Google Chrome, Mozilla Firefox).
3. En la barra de direcciones del navegador, escribe lo siguiente: http://localhost/phpmyadmin y presiona Enter.
4. Esto te llevará a la página de inicio de sesión de phpMyAdmin.
5. Por lo general, no se requiere un nombre de usuario para acceder a phpMyAdmin en XAMPP. Deja el campo de nombre de usuario en blanco.
6. Si no has establecido una contraseña para el usuario "root" de MySQL en XAMPP, también deja el campo de contraseña en blanco. Si has configurado una contraseña, ingrésala en el campo correspondiente.
7. Haz clic en el botón "Log in" o presiona Enter para iniciar sesión.
8. Después de iniciar sesión correctamente, se abrirá el panel de control de phpMyAdmin, donde podrás administrar tus bases de datos MySQL.

Recuerda que la dirección http://localhost/phpmyadmin es la ruta predeterminada para acceder a phpMyAdmin en un entorno local con WampServer o XAMPP. Si has modificado la configuración de WampServer o XAMPP o la ruta de acceso a phpMyAdmin, asegúrate de utilizar la dirección correcta en tu navegador.

Si sigues teniendo problemas para acceder a phpMyAdmin desde WampServer o XAMPP, verifica que WampServer o XAMPP esté funcionando correctamente y que los servicios de Apache y MySQL estén activos. Además, asegúrate de haber instalado WampServer o XAMPP correctamente y de que no haya conflictos con otros servicios o aplicaciones en tu computadora.

## 3. Creación de base de datos y tablas

Si bien este video dice XAMPP, no habrá ninguna diferencia si usas WAMP.

{{< youtube uOMzsFEGk_w >}}

Ahora repasemos lo visto en el video.

## Sentencia SQL `CREATE DATABASE`

La sentencia SQL "CREATE DATABASE" se utiliza para crear una nueva base de datos en un sistema de gestión de bases de datos (SGBD) como MySQL. Esta sentencia permite definir el nombre de la base de datos y, opcionalmente, especificar algunas características adicionales, como el conjunto de caracteres y la configuración regional.

La sintaxis básica de la sentencia "CREATE DATABASE" es la siguiente:

```SQL
CREATE DATABASE nombre_basedatos;
```

Donde "nombre_basedatos" es el nombre que deseas asignarle a la nueva base de datos que estás creando. Es importante elegir un nombre descriptivo y único para evitar conflictos con otras bases de datos existentes.

Supongamos que deseas crear una base de datos llamada "mi_base_datos". La sentencia SQL para crearla sería:

```SQL
CREATE DATABASE mi_base_datos;
```

Es importante tener en cuenta que la capacidad de ejecutar la sentencia "CREATE DATABASE" puede estar sujeta a los permisos y privilegios del usuario conectado al SGBD. Es posible que necesites tener privilegios suficientes para crear una base de datos.

En resumen, la sentencia SQL "CREATE DATABASE" es utilizada para crear una nueva base de datos en un sistema de gestión de bases de datos. Permite especificar el nombre de la base de datos y, opcionalmente, otras opciones como el conjunto de caracteres y la configuración regional. Esta sentencia es fundamental para iniciar la creación y gestión de bases de datos en MySQL.

## Sentencia SQL `USE`

La sentencia SQL "USE" se utiliza para seleccionar una base de datos específica en un servidor MySQL. En phpMyAdmin, esta sentencia se utiliza para elegir la base de datos con la que deseas trabajar, lo que significa que todas las operaciones posteriores, como la creación de tablas o consultas, se realizarán en esa base de datos seleccionada.

La sintaxis es la siguiente:

```SQL
USE nombre_basedatos;
```

Reemplaza "nombre_basedatos" con el nombre real de la base de datos que deseas seleccionar.

## Sentencia SQL `CREATE TABLE`

La sentencia SQL "CREATE TABLE" se utiliza para crear una nueva tabla en una base de datos en un sistema de gestión de bases de datos (SGBD) como MySQL. Esta sentencia permite definir la estructura de la tabla, incluyendo los nombres de los campos, los tipos de datos y las restricciones.

A continuación, te explico los elementos clave de la sentencia "CREATE TABLE":

#### 1. Sintaxis básica:

La sintaxis básica de la sentencia "CREATE TABLE" es la siguiente:

```SQL
CREATE TABLE nombre_tabla (
  nombre_campo1 tipo_dato1 restricciones,
  nombre_campo2 tipo_dato2 restricciones,
  ...
);
```

Donde "nombre_tabla" es el nombre que deseas asignarle a la tabla que estás creando. Luego, se definen los nombres de los campos (columnas) de la tabla, junto con sus tipos de datos y restricciones.

#### 2. Nombres de campos y tipos de datos:

Para cada campo de la tabla, debes especificar un nombre descriptivo y único, y el tipo de dato que almacenará. Algunos tipos de datos comunes incluyen:

- INT: para valores enteros.
- VARCHAR(n): para cadenas de caracteres de longitud variable, donde "n" representa la longitud máxima.
- DATE: para fechas.
- FLOAT: para números decimales.

Puedes consultar la documentación del SGBD específico para conocer los tipos de datos disponibles y sus características.

#### 3. Restricciones y atributos de campo:

Además del nombre y el tipo de dato, puedes especificar restricciones y atributos adicionales para los campos de la tabla. Algunas restricciones comunes incluyen:

- PRIMARY KEY: para especificar un campo como clave primaria, que debe ser único en cada registro.
- NOT NULL: para indicar que un campo no puede tener un valor nulo.
- UNIQUE: para asegurar que los valores de un campo sean únicos.
- FOREIGN KEY: para establecer una relación con una clave externa en otra tabla.

Ejemplo:

Supongamos que deseas crear una tabla llamada "clientes" con los campos "id" (entero), "nombre" (cadena de caracteres) y "edad" (entero). La sentencia SQL para crear esta tabla sería:

```SQL
CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  edad INT
);
```

Esta sentencia crea una nueva tabla llamada "clientes" con los campos especificados y sus respectivas características.

En resumen, la sentencia SQL "CREATE TABLE" se utiliza para crear una nueva tabla en una base de datos. Permite definir los nombres de los campos, los tipos de datos y las restricciones para cada campo. Esta sentencia es fundamental para establecer la estructura y el esquema de las tablas en una base de datos.

## Video de refuerzo

Puedes ver este video desde el minuto 34:30 hasta el 42:10.

{{< alert >}}
**Recuerda** que él está usando una herramienta de diseño y administración de bases de datos llamada 'Workbench'. Sin embargo, el concepto de creación de bases de datos y tablas es el mismo.
{{</ alert >}}

<br>

{{< youtube uUdKAYl-F7g >}}
