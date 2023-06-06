---
title: "DDL"
date: 2023-01-17T18:05:35-05:00
draft: false
showPagination: false
---
# DDL
lenguaje de definición de datos (DDL) de MySQL. El DDL se utiliza para crear, modificar y eliminar estructuras de base de datos, como tablas, índices y restricciones. A continuación, te mostraré los comandos más comunes en MySQL DDL.

1. Crear una base de datos:
```sql
CREATE DATABASE nombre_base_de_datos;
```

2. Seleccionar una base de datos:
```sql
USE nombre_base_de_datos;
```

3. Crear una tabla:
```sql
CREATE TABLE nombre_tabla (
  columna1 tipo_dato_restricciones,
  columna2 tipo_dato_restricciones,
  ...
);
```
Por ejemplo:
```sql
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  fecha_nacimiento DATE
);
```

4. Modificar una tabla (agregar columna):
```sql
ALTER TABLE nombre_tabla ADD COLUMN nombre_columna tipo_dato_restricciones;
```
Por ejemplo:
```sql
ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(20);
```

5. Modificar una tabla (modificar columna):
```sql
ALTER TABLE nombre_tabla MODIFY COLUMN nombre_columna tipo_dato_restricciones;
```
Por ejemplo:
```sql
ALTER TABLE usuarios MODIFY COLUMN email VARCHAR(150);
```

6. Modificar una tabla (eliminar columna):
```sql
ALTER TABLE nombre_tabla DROP COLUMN nombre_columna;
```
Por ejemplo:
```sql
ALTER TABLE usuarios DROP COLUMN telefono;
```

7. Eliminar una tabla:
```sql
DROP TABLE nombre_tabla;
```
Por ejemplo:
```sql
DROP TABLE usuarios;
```
# PRIMARY KEY 
En una base de datos relacional, una clave primaria se utiliza para identificar de manera única cada fila de una tabla. Esto asegura que no haya duplicados y permite un acceso rápido y eficiente a los datos. En MySQL, puedes definir una clave primaria al crear una tabla o agregarla más tarde mediante la modificación de la estructura de la tabla.

Aquí tienes dos formas de definir una clave primaria en MySQL:

1. Definir una clave primaria durante la creación de la tabla:
```sql
CREATE TABLE nombre_tabla (
  columna1 tipo_dato_restricciones,
  columna2 tipo_dato_restricciones,
  ...
  PRIMARY KEY (columna1)
);
```
En este ejemplo, la columna1 se define como clave primaria.

2. Agregar una clave primaria a una tabla existente:
```sql
ALTER TABLE nombre_tabla
ADD PRIMARY KEY (columna1);
```
En este ejemplo, la columna1 se agrega como clave primaria a una tabla existente.

Es importante destacar que una clave primaria puede estar compuesta por una o más columnas. Si deseas utilizar una clave primaria compuesta, simplemente incluye varias columnas dentro del paréntesis PRIMARY KEY.

Aquí tienes un ejemplo de una clave primaria compuesta:
```sql
CREATE TABLE productos (
  id_categoria INT,
  id_producto INT,
  nombre VARCHAR(100),
  PRIMARY KEY (id_categoria, id_producto)
);
```
En este ejemplo, la clave primaria está compuesta por las columnas id_categoria e id_producto.

Recuerda que solo puedes tener una clave primaria por tabla y no puede contener valores nulos (NULL). Además, MySQL crea automáticamente un índice en la clave primaria para mejorar el rendimiento de las consultas.

Espero que esta lección te haya sido útil. Si tienes más preguntas sobre claves primarias en MySQL o cualquier otro tema relacionado con bases de datos, no dudes en preguntar.