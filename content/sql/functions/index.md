---
title: "Funciones en SQL"
date: 2023-07-25T18:08:58-05:00
draft: false
showPagination: false
---

En SQL (Structured Query Language), una función es un conjunto de instrucciones predefinidas o definidas por el usuario que realizan una tarea específica y devuelven un valor. Las funciones en SQL son similares a las funciones en otros lenguajes de programación, ya que aceptan parámetros de entrada, realizan cálculos o manipulaciones en los datos y devuelven un resultado.

## Tipos de Funciones en SQL

Hay varios tipos de funciones en SQL, pero los tres tipos principales son:

1. Funciones de Agregación: Estas funciones realizan cálculos sobre un conjunto de filas y devuelven un único valor como resultado. Algunos ejemplos de funciones de agregación incluyen SUM, AVG, COUNT, MIN y MAX.

2. Funciones Escalares: Estas funciones operan fila por fila y devuelven un valor por cada fila procesada. Pueden ser utilizadas para realizar cálculos, manipular cadenas de texto, fechas u otros tipos de datos. Algunas funciones escalares comunes son CONCAT, LEN, UPPER, LOWER, DATEPART, entre otras.

3. Funciones de Tabla: Estas funciones devuelven una tabla como resultado. Pueden ser utilizadas en consultas SQL como si fueran tablas reales. Las funciones de tabla son especialmente útiles cuando necesitas realizar cálculos complejos o manipulaciones en un conjunto de datos y deseas reutilizar esa lógica en diferentes consultas.

## Sintaxis de Creación de Funciones en SQL

La sintaxis para crear una función en SQL varía según el sistema de gestión de bases de datos (DBMS) que estés utilizando. Sin embargo, a continuación se presenta una sintaxis general para crear una función escalara en SQL:

```sql
DELIMITER //

CREATE FUNCTION calcular_promedio(num1 INT, num2 INT)
RETURNS DECIMAL(10, 2)
BEGIN
  DECLARE promedio DECIMAL(10, 2);
  SET promedio = (num1 + num2) / 2;
  RETURN promedio;
END //

DELIMITER ;
```

1. `DELIMITER //`: Esta línea es una instrucción específica de PHPMyAdmin. Cambia el delimitador predeterminado de las sentencias SQL de ; a //. Es necesario hacer esto para que PHPMyAdmin pueda reconocer el bloque completo de código de la función, ya que las funciones almacenadas pueden contener varias sentencias SQL.

2. `CREATE FUNCTION`: Es una declaración SQL que se utiliza para crear una función almacenada en la base de datos.

3. `nombre_funcion`: Es el nombre que le asignas a la función almacenada. Debe ser único dentro de la base de datos y seguir las reglas de nomenclatura de identificadores válidos (por ejemplo, no puede comenzar con un número y no debe contener caracteres especiales).

4. `(parametro1 tipo_dato1, parametro2 tipo_dato2, ...)`: Aquí defines los parámetros de entrada que aceptará la función. Los parámetros son valores que se pasan a la función cuando se llama. Debes especificar el nombre del parámetro seguido del tipo de dato que aceptará. Puedes tener cero o más parámetros separados por comas.

5. `RETURNS tipo_retorno`: Especifica el tipo de dato que la función devolverá como resultado. Es el valor que se obtiene como resultado cuando se llama a la función.

6. `BEGIN` y `END`: Estas palabras clave marcan el inicio y el final del cuerpo de la función. Todo el código de la función estará entre estas dos palabras clave. Dentro del cuerpo de la función, se define la lógica de la función y las operaciones que realizará.

7. `-- Lógica de la función`: Es un comentario que se utiliza para explicar o documentar la lógica de la función. Es opcional y no afecta la ejecución del código.

8. `DECLARE promedio DECIMAL(10, 2);`: Es una declaración que se utiliza para declarar variables locales dentro de la función. En este ejemplo, hemos declarado una variable llamada promedio de tipo DECIMAL(10, 2). Las variables locales se utilizan para almacenar valores temporales dentro de la función.

9. `SET promedio = (num1 + num2) / 2;`: Es una sentencia que se utiliza para asignar un valor a la variable promedio. En este ejemplo, hemos calculado el promedio de dos números num1 y num2 y lo hemos almacenado en la variable promedio.

10. `RETURN promedio;`: Es una sentencia que devuelve el valor de la variable promedio como resultado de la función. La función finalizará y devolverá este valor cuando se llame.

11. `//`: Es el delimitador que cierra el bloque de código de la función. Como hemos cambiado el delimitador con DELIMITER //, ahora utilizamos // para indicar el final del bloque de código de la función.

DELIMITER ;: Es una instrucción que restaura el delimitador predeterminado (;) después de haber definido la función. Esto es necesario para que las sentencias SQL posteriores en PHPMyAdmin se ejecuten correctamente sin necesidad de cambiar el delimitador nuevamente.

{{< alert >}}
En PHPMyAdmin, al crear funciones almacenadas, procedimientos almacenados o desencadenadores (triggers) que contengan múltiples sentencias SQL, es necesario especificar un delimitador diferente al punto y coma (`;`). Esto se debe a que PHPMyAdmin utiliza el punto y coma para separar las sentencias individuales, por lo que necesitas cambiar el delimitador para que pueda reconocer el bloque completo de código de la función, procedimiento o desencadenador.

Para cambiar el delimitador en PHPMyAdmin, utiliza la sentencia DELIMITER seguida del delimitador deseado (por ejemplo, `$$`, `//`, `||`, etc.). Luego, escribes el bloque de código de la función, procedimiento o desencadenador y finalmente, cierras con el delimitador especificado.
{{</ alert >}}

## Ejemplo

En este caso, crearemos una función llamada calcular_promedio.

```sql
DELIMITER //

CREATE FUNCTION calcular_promedio(num1 INT, num2 INT)
RETURNS DECIMAL(10, 2)
BEGIN
  DECLARE promedio DECIMAL(10, 2);
  SET promedio = (num1 + num2) / 2;
  RETURN promedio;
END //

DELIMITER ;
```

En este ejemplo, hemos creado una función llamada calcular_promedio que acepta dos parámetros de tipo INT (números enteros) y devuelve un valor de tipo DECIMAL(10, 2) (número decimal con dos decimales). La lógica de la función calcula el promedio de los dos números y lo devuelve como resultado.

Podemos llamar a esta función de la siguiente manera:

```sql
SELECT calcular_promedio(10, 5);
```

## Ventajas de Utilizar Funciones en SQL

- **Reusabilidad**: Las funciones permiten encapsular lógica de negocio compleja en unidades reutilizables, lo que facilita el mantenimiento y evita la repetición de código.
- **Modularidad**: Al dividir la lógica en funciones más pequeñas, el código se vuelve más fácil de entender y de depurar.
- **Mejora el Rendimiento**: Al utilizar funciones de agregación y funciones de tabla, se puede mejorar el rendimiento al realizar cálculos y manipulaciones en el lado del servidor de la base de datos.

Las funciones en SQL son una herramienta poderosa que permite realizar cálculos, manipulaciones y consultas complejas en los datos almacenados en una base de datos. Al utilizar funciones de manera efectiva, puedes mejorar la organización, reusabilidad y rendimiento de tus consultas SQL. Los diferentes tipos de funciones en SQL (de agregación, escalares y de tabla) brindan la flexibilidad necesaria para abordar una amplia variedad de escenarios y operaciones en bases de datos.

{{< youtube 9XeUVTLII8Y >}}
