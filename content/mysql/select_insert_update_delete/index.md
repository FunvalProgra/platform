---
title: "Comandos SELECT, INSERT, UPDATE y DELETE en SQL"
date: 2023-07-11T19:14:06-05:00
draft: false
showPagination: false
---

## ¿Qué es un comando en SQL?

En SQL, un comando es una instrucción que se utiliza para realizar una acción específica en una base de datos. Los comandos en SQL se utilizan para interactuar con la base de datos y manipular los datos almacenados en ella. Algunos de los comandos más comunes en SQL incluyen SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER y DROP, entre otros.

Cada comando en SQL tiene una sintaxis específica y realiza una tarea particular. En esta lección estudiaremos cuatro de ellos: SELECT, INSERT, UPDATE y DELETE.

## SELECT

El comando SELECT se utiliza para recuperar datos de una o varias tablas en una base de datos. Permite especificar las columnas que deseas seleccionar, las tablas de las cuales obtener los datos y opcionalmente, establecer condiciones para filtrar los resultados.

### Sintaxis básica

La sintaxis básica del comando SELECT es la siguiente:

```sql
SELECT columnas
FROM tabla
WHERE condiciones;
```

- **columnas**: especifica las columnas que deseas seleccionar en la consulta. Puedes enumerar las columnas separadas por comas o utilizar el asterisco (\*) para seleccionar todas las columnas de la tabla.
- **tabla**: especifica la tabla o tablas de donde obtener los datos.
- **condiciones** (opcional): permite establecer condiciones para filtrar los resultados. Puedes utilizar operadores lógicos como "=", ">", "<", etc., y operadores como "AND" y "OR" para combinar múltiples condiciones.

### Ejemplos

- Seleccionar todas las columnas de una tabla:

```sql
SELECT * FROM empleados;
```

- Seleccionar todas las columnas de una tabla:

```sql
SELECT * FROM empleados;
```

- Seleccionar columnas específicas:

```sql
SELECT nombre, edad, salario FROM empleados;
```

## INSERT

El comando INSERT se utiliza para insertar nuevos registros en una tabla. Permite especificar los valores para cada columna en el nuevo registro.

### Sintaxis básica

La sintaxis básica del comando INSERT es la siguiente:

```sql
INSERT INTO tabla (columnas)
VALUES (valores);
```

- **tabla**: especifica el nombre de la tabla en la cual se insertarán los datos.
- **columnas** (opcional): especifica las columnas en las que se insertarán los valores. Si no se proporciona, se asume que los valores se insertarán en todas las columnas de la tabla en el orden correspondiente.
- **valores**: especifica los valores que se insertarán en las columnas. Debe proporcionarse un valor para cada columna especificada o para cada columna en el orden correspondiente si no se especifican las columnas.

### Ejemplos

- Insertar un registro con valores específicos en todas las columnas:

```sql
INSERT INTO empleados (nombre, edad, salario)
VALUES ('Juan Pérez', 30, 50000);
```

- Insertar un registro con valores en columnas seleccionadas:

```sql
INSERT INTO empleados (nombre, edad)
VALUES ('María López', 25);
```

- Insertar múltiples registros en una sola sentencia:

```sql
INSERT INTO empleados (nombre, edad)
VALUES ('Pedro Gómez', 35), ('Ana Ramírez', 28), ('Carlos Jiménez', 32);
```

{{< alert >}}
**Consideraciones adicionales:**

- La secuencia de los valores en la cláusula VALUES debe coincidir con la secuencia de las columnas en la cláusula INSERT.
- Si se intenta insertar un valor que no cumple con las restricciones de la tabla, como un tipo de dato incorrecto o una violación de una restricción de clave primaria, la operación de inserción fallará y mostrará un error.
  {{</ alert >}}

## UPDATE

El comando UPDATE se utiliza para modificar registros existentes en una tabla. Permite actualizar los valores de una o varias columnas en función de las condiciones especificadas.

### Sintaxis básica

La sintaxis básica del comando UPDATE es la siguiente:

```sql
UPDATE tabla
SET columna1 = valor1, columna2 = valor2, ...
WHERE condiciones;
```

- **tabla**: especifica el nombre de la tabla en la cual se actualizarán los registros.
- **columna1**, columna2, etc.: especifica las columnas que se actualizarán y los nuevos valores que se les asignarán.
- **valor1, valor2, etc.**: proporciona los nuevos valores que se asignarán a las columnas correspondientes.
- **condiciones**: especifica las condiciones que deben cumplirse para que se realice la actualización. Puedes utilizar operadores lógicos como "=", ">", "<", etc., y operadores como "AND" y "OR" para combinar múltiples condiciones.

### Ejemplos

- Actualizar un valor específico en una columna:

```sql
UPDATE empleados
SET salario = 55000
WHERE empleado_id = 1;
```

- Actualizar múltiples columnas en un solo comando:

```sql
UPDATE empleados
SET salario = 55000, edad = 35
WHERE departamento = 'Ventas';
```

- Utilizar una expresión en la cláusula SET para actualizar valores:

```sql
UPDATE empleados
SET salario = salario * 1.1
WHERE departamento = 'Ventas';
```

{{< alert >}}
**Consideraciones adicionales:**

- Asegúrate de proporcionar condiciones adecuadas en la cláusula WHERE para limitar la actualización solo a los registros deseados. Si no se proporciona una condición WHERE, se actualizarán todos los registros de la tabla.
- Ten en cuenta que un comando UPDATE puede afectar a múltiples registros al mismo tiempo, por lo que es importante revisar y verificar las condiciones y los nuevos valores antes de ejecutarlo.
  {{</ alert >}}

## DELETE

El comando DELETE se utiliza para eliminar uno o varios registros de una tabla. Permite establecer condiciones para filtrar los registros a eliminar.

### Sintaxis básica

La sintaxis básica del comando DELETE es la siguiente:

```sql
DELETE FROM tabla
WHERE condiciones;
```

- **tabla**: especifica el nombre de la tabla de la cual deseas eliminar registros.
- **condiciones** (opcional): establece las condiciones que deben cumplirse para eliminar los registros. Puedes utilizar operadores lógicos como "=", ">", "<", etc., y operadores como "AND" y "OR" para combinar múltiples condiciones.

### Ejemplos

- Eliminar todos los registros de una tabla:

```sql
DELETE FROM empleados;
```

- Eliminar registros que cumplan con una condición específica:

```sql
DELETE FROM empleados WHERE departamento = 'Ventas';
```

- Combinar condiciones utilizando operadores lógicos:

```sql
DELETE FROM empleados WHERE departamento = 'Ventas' AND edad > 40;
```

{{< alert >}}
**Consideraciones adicionales:**

- Ten en cuenta que el comando DELETE es irreversible y elimina los registros de forma permanente. Asegúrate de tener una copia de seguridad de los datos o de estar seguro de la acción antes de ejecutarlo.
- Si no se proporciona una cláusula WHERE, se eliminarán todos los registros de la tabla.
- Al eliminar registros, ten cuidado de especificar correctamente las condiciones para evitar eliminar registros no deseados.
- También es importante tener en cuenta las restricciones de integridad referencial y otras dependencias entre tablas al eliminar registros.
  {{</ alert >}}

## PLUS: Comando TRUNCATE

El comando TRUNCATE en SQL se utiliza para eliminar todos los registros de una tabla de una base de datos de manera rápida y eficiente. A diferencia del comando DELETE, TRUNCATE no registra cada eliminación individual en el registro de transacciones y reinicia los identificadores de autoincremento o secuencias asociados con la tabla.

La sintaxis básica del comando TRUNCATE es la siguiente:

```sql
TRUNCATE TABLE tabla;
```

### Diferencias entre DELETE y TRUNCATE

Estas son algunas diferencias que te podría interesar conocer:

#### 1. Efecto en la base de datos

- **TRUNCATE**: El comando TRUNCATE elimina todos los registros de una tabla de manera rápida y eficiente. Elimina los datos de la tabla de forma completa, pero no registra cada eliminación individual en el registro de transacciones (log). Además, reinicia los identificadores de autoincremento o secuencias asociados con la tabla.
- **DELETE**: El comando DELETE elimina registros de una tabla de acuerdo con una condición especificada. A diferencia de TRUNCATE, DELETE registra cada eliminación individual en el registro de transacciones, lo que permite deshacer o revertir la operación.

#### 2. Velocidad de ejecución

- **TRUNCATE**: El comando TRUNCATE es más rápido que el comando DELETE, especialmente cuando se trata de grandes conjuntos de datos. Truncate simplemente desasigna el espacio ocupado por la tabla y sus datos, sin llevar a cabo una eliminación de registro por registro.
- **DELETE**: El comando DELETE puede ser más lento que TRUNCATE, especialmente cuando se eliminan grandes cantidades de datos o se realizan eliminaciones con múltiples condiciones.

#### 3. Uso de memoria y registro de transacciones

- **TRUNCATE**: El comando TRUNCATE utiliza menos recursos de memoria y genera menos registros en el registro de transacciones debido a su forma de eliminar los datos.
- **DELETE**: El comando DELETE utiliza más recursos de memoria y registra cada eliminación individual en el registro de transacciones, lo que puede ocupar espacio adicional y tener un impacto en el rendimiento.

#### 4. Rollback

- **TRUNCATE**: Dado que TRUNCATE no registra las eliminaciones individuales en el registro de transacciones, no se puede deshacer o revertir una operación de TRUNCATE. Una vez que se realiza un TRUNCATE, los datos se eliminan de forma permanente.
- **DELETE**: Al utilizar el comando DELETE, las eliminaciones se registran en el registro de transacciones y se pueden deshacer o revertir mediante un rollback si es necesario.

## Video de refuerzo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/uUdKAYl-F7g?start=3022&end=3560" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
