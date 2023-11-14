---
title: "Models: Ejercicio"
date: 2023-11-14T16:04:37-05:00
draft: false
showPagination: false
---

Te presentaremos un ejercicio para que pongas en práctica lo aprendido en cuanto a modelos.

Enfócate principalmente en crear la lógica del sistema en tu mente, luego crea las clases con los respectivos atributos y métodos. No te limites a lo que el ejercicio te indica, puedes agregar más atributos, métodos, o aplicar otros conceptos que conozcas en cuanto a Programación Orientada a Objetos.

---

## Ejercicio

Crea una clase llamada `User` en PHP que represente un modelo para gestionar usuarios. Sigue las convenciones de nombres de Laravel y asegúrate de implementar los siguientes métodos:

1. **`create($data)`**: Crea un nuevo usuario a partir de un array de datos (nombre, correo electrónico y contraseña).

2. **`update($id, $data)`**: Actualiza los datos de un usuario existente proporcionando su ID y un array con la nueva información.

3. **`find($id)`**: Recupera los datos de un usuario dado su ID.

4. **`all()`**: Devuelve todos los usuarios almacenados.

5. **`destroy($id)`**: Elimina un usuario según su ID.

### Estructura de la Base de Datos:

Para este ejercicio, supongamos una estructura de base de datos simple para almacenar usuarios. Utilicemos una tabla llamada `users` con las columnas `id`, `name`, `email`, y `password`. Aquí está la estructura de la base de datos y el statement actualizado:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

---

## Sugerencia de código base

### Archivo `config.php`:

```php
<?php

return [
    'host' => 'tu_host',
    'usuario' => 'tu_usuario',
    'contrasena' => 'tu_contraseña',
    'nombre_db' => 'tu_nombre_de_base_de_datos'
];
```

### Archivo `User.php` (modelo):

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

            $this->db = new PDO($dsn, $config['usuario'], $config['contrasena']);

            // Configurar PDO para lanzar excepciones en caso de errores
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // Manejo de la excepción
            die("Error de conexión a la base de datos: " . $e->getMessage());
        }
    }

    /**
     * Crea un nuevo usuario con los datos proporcionados.
     * @param array $data - Datos del usuario (nombre, correo electrónico y contraseña).
     */
    public function create($data)
    {
        // Implementar: Insertar un nuevo usuario en la base de datos.
    }

    /**
     * Actualiza los datos de un usuario existente.
     * @param int $id - ID del usuario a actualizar.
     * @param array $data - Nuevos datos del usuario.
     */
    public function update($id, $data)
    {
        // Implementar: Actualizar los datos de un usuario en la base de datos.
    }

    /**
     * Recupera los datos de un usuario por su ID.
     * @param int $id - ID del usuario a buscar.
     * @return array - Datos del usuario encontrado.
     */
    public function find($id)
    {
        // Implementar: Obtener y devolver los datos de un usuario por su ID.
    }

    /**
     * Devuelve todos los usuarios almacenados.
     * @return array - Lista de todos los usuarios.
     */
    public function all()
    {
        // Implementar: Obtener y devolver todos los usuarios de la base de datos.
    }

    /**
     * Elimina un usuario según su ID.
     * @param int $id - ID del usuario a eliminar.
     */
    public function destroy($id)
    {
        // Implementar: Eliminar un usuario de la base de datos por su ID.
    }
}

// Ejemplo de uso:
// $userModel = new User();
// ...continuar con la interacción del modelo...

```

Este código separa las credenciales de la base de datos en el archivo `config.php`, lo que facilita la gestión de la configuración.

---

Si estas luchando mucho tiempo con este ejercicio, aquí te dejaré una posible solución, pero recuerda que no debes ver la solución hasta que hayas hecho tu mejor esfuerzo. Además, puede que tú hayas pensado una solución ligeramente diferente a la que te propondremos. Esto es debido a que existen muchas formas de resolver un mismo asunto. Sin embargo, esto te puede servir de guía.

[Ver solución](../solucion/)
