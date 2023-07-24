---
title: "Procedimientos almacenados (Stored Procedures) - Mejorando la eficiencia y seguridad en la gestión de bases de datos"
date: 2023-07-24T08:49:07-05:00
draft: false
showPagination: false
---

Los Procedimientos Almacenados son un componente esencial de SQL (Structured Query Language) que permite a los desarrolladores y administradores de bases de datos almacenar un conjunto de instrucciones SQL para su posterior reutilización y ejecución. Estas instrucciones SQL se guardan en el servidor de bases de datos como un objeto, lo que facilita su llamada y ejecución desde diversas aplicaciones y consultas, proporcionando así una forma eficiente de trabajar con datos y mejorar la seguridad de las operaciones.

## Ventajas de los Procedimientos Almacenados:

- **Mejora del rendimiento**: Almacenar instrucciones SQL en el servidor de bases de datos reduce la cantidad de datos que deben transferirse entre el cliente y el servidor, lo que mejora el rendimiento y disminuye la latencia, especialmente en aplicaciones con altas demandas de acceso a la base de datos.

- **Reutilización de código**: Los procedimientos almacenados permiten a los desarrolladores escribir una vez y usar varias veces. Esto ahorra tiempo y evita la duplicación de código, lo que mejora la eficiencia y la mantenibilidad del sistema.

- **Seguridad**: Los procedimientos almacenados pueden restringir el acceso directo a las tablas, lo que reduce el riesgo de ataques de inyección SQL y protege los datos sensibles. Los permisos de acceso a los procedimientos almacenados se pueden otorgar con precisión a roles y usuarios específicos, garantizando una gestión segura de la información.

- **Abstracción de datos**: Al usar procedimientos almacenados, los desarrolladores pueden ocultar la estructura interna de las tablas y proporcionar una interfaz coherente para acceder a los datos. Esto facilita los cambios en la base de datos sin afectar las aplicaciones que utilizan el procedimiento almacenado.

- **Transacciones**: Los procedimientos almacenados pueden agrupar múltiples instrucciones SQL en una transacción única, lo que garantiza que todas las operaciones se completen correctamente o se deshagan en caso de error, manteniendo así la integridad de los datos.

## Creación y Uso de Procedimientos Almacenados

La creación de procedimientos almacenados implica escribir bloques de código SQL dentro de una función específica y guardarla en el servidor de bases de datos. A continuación, se presenta un ejemplo básico de creación y uso de un procedimiento almacenado en SQL:

```sql
DELIMITER //

CREATE PROCEDURE nombre_del_procedimiento ([parámetros])
BEGIN
    -- Cuerpo del procedimiento (instrucciones SQL)
END;

//

DELIMITER ;
```

## Ejemplo

Aquí tienes un ejemplo básico de un Stored Procedure que inserta un nuevo registro en una tabla de empleados en MySQL:

Supongamos que tenemos una tabla llamada employees con los siguientes campos: id, name, age y department.

1. Creación de la tabla `employees`:

```sql
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT,
  department VARCHAR(50)
);
```

2. Creación de la tabla `employees`:

El siguiente Stored Procedure se llama `sp_InsertEmployee` y acepta tres parámetros de entrada: `employee_name`, `employee_age` y `employee_department`. El procedimiento insertará un nuevo empleado en la tabla employees con los valores proporcionados.

```sql
DELIMITER //

CREATE PROCEDURE sp_InsertEmployee(
  IN employee_name VARCHAR(50),
  IN employee_age INT,
  IN employee_department VARCHAR(50)
)
BEGIN
  INSERT INTO employees (name, age, department)
  VALUES (employee_name, employee_age, employee_department);
END;

//

DELIMITER ;
```

En este ejemplo, hemos utilizado `DELIMITER //` para cambiar el delimitador predeterminado `;` a `//`, ya que necesitamos definir varias instrucciones SQL dentro del procedimiento.

3. Uso del Stored Procedure:

Para utilizar el Stored Procedure sp_InsertEmployee, podemos llamarlo utilizando la sentencia CALL y proporcionando los valores para los parámetros de entrada.

```sql
CALL sp_InsertEmployee('John Doe', 30, 'IT');
```

Esta llamada ejecutará el Stored Procedure, insertando un nuevo registro en la tabla `employees` con el nombre "John Doe", edad de 30 años y departamento "IT".

### Explicación de la sintaxis:

- CREATE PROCEDURE: Declaración para crear un nuevo Stored Procedure.
- sp_InsertEmployee: Nombre del Stored Procedure.
- IN employee_name VARCHAR(50): Parámetros de entrada del procedimiento. El IN indica que son parámetros de entrada. Los parámetros especificados son employee_name, employee_age y employee_department, todos con sus respectivos tipos de datos (VARCHAR(50) y INT).
- BEGIN y END: Delimitadores que definen el cuerpo del procedimiento, donde se colocan las instrucciones SQL a ejecutar.
- INSERT INTO employees: Instrucción SQL para insertar un nuevo registro en la tabla employees.
- VALUES: Especifica los valores que se insertarán en las columnas name, age y department.

Recuerda que los Stored Procedures son una herramienta poderosa en las bases de datos, ya que permiten encapsular lógica de negocio compleja y reutilizable, mejorando la eficiencia y la seguridad de las operaciones con datos.

{{< youtube w_AtIrIWhKQ >}}