---
title: "Models: Solución"
date: 2023-11-14T16:19:05-05:00
draft: false
showPagination: false
---

[Regresar a ver el ejercicio](../ejercicio/)

Aquí tienes una implementación básica para el ejercicio propuesto. Ten en cuenta que esta solución es simple y puede mejorarse o modificarse según los requisitos específicos.

Además, es recomendable que tú, como estudiante, intentes resolver el ejercicio por ti mismo antes de revisar esta solución debido a que así lograrás una comprensión más profunda del concepto.

## Método `create($data)`

Este método permite la creación de un nuevo usuario en la base de datos. Recibe como parámetro un array `$data` que debe contener la información del nuevo usuario, incluyendo campos como nombre, correo electrónico y contraseña. La información se utiliza para construir y ejecutar una consulta SQL de inserción, añadiendo el nuevo usuario a la tabla correspondiente en la base de datos.

```php
public function create($data)
{
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];

    // Utilizar sentencias preparadas para evitar inyecciones SQL
    $stmt = $this->db->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $password]);

    // Obtener el ID del nuevo registro creado directamente desde la conexión
    $newUserId = $this->db->lastInsertId();

    // Consultar y devolver los datos del nuevo usuario
    $stmt = $this->db->prepare("SELECT * FROM users WHERE id=?");
    $stmt->execute([$newUserId]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}
```

---

## Método `update($id, $data)`

El método `update` se encarga de actualizar los datos de un usuario existente en la base de datos. Recibe dos parámetros: `$id`, que es el identificador único del usuario que se desea actualizar, y `$data`, que contiene los nuevos datos a asignar al usuario. Utiliza estos datos para construir y ejecutar una consulta SQL de actualización.

```php
public function update($id, $data)
{
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];

    // Utilizar sentencias preparadas para evitar inyecciones SQL
    $stmt = $this->db->prepare("UPDATE users SET name=?, email=?, password=? WHERE id=?");
    $stmt->execute([$name, $email, $password, $id]);

    // Consultar y devolver los datos del usuario actualizado
    $stmt = $this->db->prepare("SELECT * FROM users WHERE id=?");
    $stmt->execute([$id]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}
```

---

## Método `find($id)`

El método `find` busca y recupera los datos de un usuario específico en la base de datos según su identificador único `$id`. Construye y ejecuta una consulta SQL de selección para obtener la información del usuario y devuelve los resultados como un array asociativo.

```php
public function find($id)
{
    // Utilizar sentencias preparadas para evitar inyecciones SQL
    $stmt = $this->db->prepare("SELECT * FROM users WHERE id=?");
    $stmt->execute([$id]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

```

---

## Método `all()`

Este método devuelve todos los usuarios almacenados en la base de datos. Construye y ejecuta una consulta SQL de selección para obtener la lista completa de usuarios y retorna los resultados como un array asociativo.

```php
public function all()
{
    // Utilizar sentencias preparadas para evitar inyecciones SQL
    $stmt = $this->db->query("SELECT * FROM users");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

```

---

## Método `destroy($id)`

El método `destroy` elimina un usuario de la base de datos según su identificador único `$id`. Construye y ejecuta una consulta SQL de eliminación para borrar el usuario correspondiente.

```php
public function destroy($id)
{
    // Utilizar sentencias preparadas para evitar inyecciones SQL
    $stmt = $this->db->prepare("DELETE FROM users WHERE id=?");
    $stmt->execute([$id]);
}

```

Estos métodos forman un conjunto completo de operaciones CRUD para el modelo de usuario en PHP, permitiéndote realizar tareas esenciales como crear, actualizar, buscar, listar y eliminar usuarios en la base de datos.

## Código final

```php
<?php

class User
{
    private $db; // Objeto de conexión a la base de datos

    public function __construct()
    {
        // Incluye la configuración de la base de datos
        $config = include('config.php');

        // Intenta realizar la conexión a la base de datos
        try {
            $dsn = "mysql:host={$config['host']};dbname={$config['nombre_db']}";
            $this->db = new PDO($dsn, $config['usuario'], $config['contraseña']);

            // Configurar PDO para lanzar excepciones en caso de errores
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // Manejo de la excepción
            die("Error de conexión a la base de datos: " . $e->getMessage());
        }
    }

    public function create($data)
    {
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];

        // Utilizar sentencias preparadas para evitar inyecciones SQL
        $stmt = $this->db->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $password]);

        // Obtener el ID del nuevo registro creado directamente desde la conexión
        $newUserId = $this->db->lastInsertId();

        // Consultar y devolver los datos del nuevo usuario
        $stmt = $this->db->prepare("SELECT * FROM users WHERE id=?");
        $stmt->execute([$newUserId]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function update($id, $data)
    {
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];

        // Utilizar sentencias preparadas para evitar inyecciones SQL
        $stmt = $this->db->prepare("UPDATE users SET name=?, email=?, password=? WHERE id=?");
        $stmt->execute([$name, $email, $password, $id]);

        // Consultar y devolver los datos del usuario actualizado
        $stmt = $this->db->prepare("SELECT * FROM users WHERE id=?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function find($id)
    {
        // Utilizar sentencias preparadas para evitar inyecciones SQL
        $stmt = $this->db->prepare("SELECT * FROM users WHERE id=?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function all()
    {
        // Utilizar sentencias preparadas para evitar inyecciones SQL
        $stmt = $this->db->query("SELECT * FROM users");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function destroy($id)
    {
        // Utilizar sentencias preparadas para evitar inyecciones SQL
        $stmt = $this->db->prepare("DELETE FROM users WHERE id=?");
        $stmt->execute([$id]);
    }
}

// Ejemplo de uso:
// $userModel = new User();
// ...continuar con la interacción del modelo...
```

Esta versión utiliza sentencias preparadas con PDO en lugar de consultas SQL directas, proporcionando una capa adicional de seguridad contra inyecciones SQL.
