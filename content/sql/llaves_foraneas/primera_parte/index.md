---
title: "Relaciones y llaves foráneas en SQL (primera parte)"
date: 2023-07-19T20:48:42-05:00
draft: false
showPagination: false
---

## ¿Qué son las Llaves Foráneas?

Las llaves foráneas, también conocidas como "claves foráneas" o "foreign keys" en inglés, son un concepto fundamental en las bases de datos relacionales. Representan una relación entre dos tablas y se utilizan para mantener la integridad referencial de los datos.

En una base de datos relacional, los datos se organizan en tablas que contienen filas y columnas. Cada tabla tiene una o más columnas que se denominan "llaves primarias" (primary keys). Una llave primaria es un campo o conjunto de campos que identifican de manera única cada fila en la tabla. Sirve como un identificador único para cada registro.

La función de las llaves foráneas es establecer una relación entre dos tablas utilizando la llave primaria de una tabla como referencia en otra tabla. En otras palabras, una llave foránea es una columna o conjunto de columnas en una tabla que hace referencia a la llave primaria de otra tabla. Esto permite vincular datos relacionados entre diferentes tablas de la base de datos.

Un ejemplo simple sería considerar dos tablas: "Clientes" y "Pedidos". En la tabla "Clientes", la llave primaria podría ser un campo llamado "ID_Cliente". En la tabla "Pedidos", podría haber una llave foránea llamada "ID_Cliente", que se refiere al campo "ID_Cliente" de la tabla "Clientes". De esta manera, cada pedido estaría asociado a un cliente específico a través de la llave foránea.

El uso de llaves foráneas ayuda a garantizar la integridad referencial de la base de datos, lo que significa que los datos relacionados están vinculados de manera coherente y no existen registros huérfanos (registros en una tabla que no tienen un correspondiente en la tabla relacionada). Además, las llaves foráneas son fundamentales para establecer relaciones entre tablas y realizar consultas que combinen datos de varias tablas para obtener información más completa y relevante.

## Definición de Llave Foránea en SQL

En SQL, una llave foránea (foreign key) es una restricción que se define en una tabla para establecer una relación entre los datos de esa tabla y los datos de otra tabla en la base de datos. La llave foránea se utiliza para mantener la integridad referencial entre las tablas, asegurando que los datos relacionados sean consistentes y precisos.

La definición de una llave foránea implica especificar una o más columnas de la tabla actual que se relacionarán con la llave primaria de otra tabla. Esto significa que los valores en esas columnas deben coincidir con los valores de la llave primaria de la tabla relacionada.

La sintaxis para definir una llave foránea en SQL puede variar ligeramente según el sistema de gestión de bases de datos (DBMS) que se esté utilizando, pero en general, la estructura es la siguiente:

```sql
CREATE TABLE TablaActual (
    columna1 tipo_dato,
    columna2 tipo_dato,
    ...,
    FOREIGN KEY (columna_relacionada) REFERENCES TablaRelacionada (llave_primaria)
);
```

Donde:

- `TablaActual`: es el nombre de la tabla actual en la que se está definiendo la llave foránea.
- `columna1`, `columna2`, etc.: son las columnas que pertenecen a la tabla actual.
- `columna_relacionada`: es la columna o conjunto de columnas de la tabla actual que se relacionarán con la llave primaria de la tabla relacionada.
- `TablaRelacionada`: es el nombre de la tabla con la que se establecerá la relación.
- `llave_primaria`: es la llave primaria de la tabla relacionada que se vinculará con la columna_relacionada de la tabla actual.

Es importante destacar que la tabla relacionada debe existir antes de definir la llave foránea que haga referencia a su llave primaria. Además, dependiendo del DBMS (Sistema de Gestión de Bases de Datos, en inglés), pueden existir opciones adicionales para definir comportamientos de actualización o eliminación en cascada, lo que significa que las acciones realizadas en una tabla se propagarán automáticamente a la tabla relacionada. Esto puede ser útil para mantener la integridad referencial y evitar datos huérfanos en la base de datos.

## Importancia de las Llaves Foráneas

Las llaves foráneas son de gran importancia en el diseño y la gestión de bases de datos relacionales. Aquí están algunas de las razones clave por las que las llaves foráneas son importantes:

1. **Integridad referencial**: La integridad referencial garantiza que los datos relacionados entre diferentes tablas sean precisos y consistentes. Al establecer una llave foránea que enlace una tabla con otra, se asegura que no existan registros huérfanos o referencias a datos inexistentes. Esto mantiene la integridad de la base de datos y evita inconsistencias que podrían surgir si los datos relacionados no estuvieran bien vinculados.

2. **Mantenimiento de la consistencia**: Las llaves foráneas ayudan a mantener la consistencia de los datos al garantizar que solo se puedan agregar o modificar datos relacionados válidos. Si un registro con una llave foránea vinculada a otra tabla se modifica o elimina, el DBMS puede manejar automáticamente la actualización o eliminación en cascada para mantener la coherencia en todas las tablas relacionadas.

3. **Consultas y análisis de datos**: Las llaves foráneas facilitan la realización de consultas que combinan datos de varias tablas para obtener información más completa y significativa. Esto permite a los usuarios obtener información detallada a partir de múltiples tablas mediante la utilización de cláusulas JOIN y otras operaciones relacionales.

4. **Optimización de rendimiento**: Con el uso adecuado de llaves foráneas, el DBMS puede mejorar el rendimiento de las consultas al optimizar las operaciones de búsqueda y acceso a los datos. Al tener índices en las llaves foráneas, el motor de la base de datos puede acelerar la recuperación de datos relacionados, evitando exploraciones innecesarias de la tabla.

5. **Evitar la redundancia de datos**: Las llaves foráneas permiten la normalización de la base de datos, lo que implica dividir los datos en tablas más pequeñas y relacionarlas de manera adecuada. Esto evita la duplicación de información, lo que a su vez reduce la redundancia de datos y ayuda a mantener una base de datos más eficiente y fácil de mantener.

6. **Mantenimiento y evolución del esquema**: Al utilizar llaves foráneas, se puede modificar el esquema de la base de datos más fácilmente sin afectar negativamente a las aplicaciones que utilizan la base de datos. Las llaves foráneas proporcionan una forma estructurada y consistente de relacionar las tablas, lo que facilita el mantenimiento y evolución del diseño de la base de datos a medida que los requisitos cambian con el tiempo.

En resumen, las llaves foráneas son fundamentales para garantizar la integridad y la coherencia de los datos en una base de datos relacional. Facilitan la gestión de datos relacionados, mejoran el rendimiento de las consultas y ayudan a mantener una base de datos organizada y eficiente a lo largo del tiempo.

## Restricciones en Llaves Foráneas

Las llaves foráneas, al ser un elemento importante para mantener la integridad referencial en una base de datos relacional, pueden tener diferentes restricciones que se aplican para garantizar la consistencia y precisión de los datos. Estas restricciones aseguran que las relaciones establecidas entre las tablas sean válidas y que no se produzcan operaciones que puedan afectar negativamente la integridad de la base de datos. Algunas de las restricciones comunes en llaves foráneas son las siguientes:

1.  **Unicidad de la relación**: Una llave foránea debe apuntar a una llave primaria única en la tabla relacionada. Esto garantiza que cada fila en la tabla que contiene la llave foránea esté vinculada a una sola fila en la tabla relacionada.

2.  **Acción en cascada (ON DELETE y ON UPDATE)**: Estas restricciones definen qué sucede en la tabla con llaves foráneas cuando se realiza una operación de eliminación o actualización en la tabla relacionada. Las opciones típicas son:

    - ON DELETE CASCADE: Si se elimina una fila en la tabla relacionada, todas las filas relacionadas en la tabla con la llave foránea también se eliminan automáticamente en cascada.
    - ON UPDATE CASCADE: Si se actualiza el valor de la llave primaria en la tabla relacionada, la llave foránea en la tabla actual también se actualiza en cascada para mantener la relación.

3.  **Acción restringida (ON DELETE y ON UPDATE)**: Con estas restricciones, se evita que ciertas operaciones se realicen si existen registros relacionados en la tabla con la llave foránea. Las opciones comunes son:

    - ON DELETE RESTRICT: No se permite la eliminación de una fila en la tabla relacionada si hay registros relacionados en la tabla actual.
    - ON UPDATE RESTRICT: No se permite la actualización de la llave primaria en la tabla relacionada si hay registros relacionados en la tabla actual.

4.  **Nulo permitido (ON DELETE y ON UPDATE)**: Al utilizar estas restricciones, se permite establecer los valores de la llave foránea en nulo si se elimina o actualiza la fila correspondiente en la tabla relacionada.

    - ON DELETE SET NULL: Cuando se elimina la fila relacionada en la tabla, la llave foránea en la tabla actual se establece en nulo.
    - ON UPDATE SET NULL: Cuando se actualiza la llave primaria en la tabla relacionada, la llave foránea en la tabla actual se establece en nulo.

    Estas restricciones permiten establecer reglas para mantener la integridad referencial y evitar acciones que puedan afectar negativamente la coherencia de los datos en la base de datos. Las opciones disponibles pueden variar según el sistema de gestión de bases de datos (DBMS) utilizado, pero generalmente proporcionan mecanismos flexibles para garantizar la consistencia de los datos en el contexto de las relaciones entre tablas.

## Ejemplos

A continuación te mostraré algunos ejemplos de cómo crear llaves foráneas con diferentes restricciones utilizando sentencias SQL. Para estos ejemplos, asumiremos que tenemos dos tablas: "Clientes" y "Pedidos", donde la tabla "Pedidos" tiene una llave foránea que hace referencia al campo "ID_Cliente" en la tabla "Clientes".

### Acción en cascada (ON DELETE y ON UPDATE):

```sql
CREATE TABLE Clientes (
    ID_Cliente INT PRIMARY KEY,
    Nombre VARCHAR(50),
    -- otras columnas
);

CREATE TABLE Pedidos (
    ID_Pedido INT PRIMARY KEY,
    ID_Cliente INT,
    -- otras columnas
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente) ON DELETE CASCADE ON UPDATE CASCADE
);
```

### Acción restringida (ON DELETE y ON UPDATE):

```sql
CREATE TABLE Clientes (
    ID_Cliente INT PRIMARY KEY,
    Nombre VARCHAR(50),
    -- otras columnas
);

CREATE TABLE Pedidos (
    ID_Pedido INT PRIMARY KEY,
    ID_Cliente INT,
    -- otras columnas
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente) ON DELETE RESTRICT ON UPDATE RESTRICT
);
```

### Nulo permitido (ON DELETE y ON UPDATE):

```sql
CREATE TABLE Clientes (
    ID_Cliente INT PRIMARY KEY,
    Nombre VARCHAR(50),
    -- otras columnas
);

CREATE TABLE Pedidos (
    ID_Pedido INT PRIMARY KEY,
    ID_Cliente INT NULL,
    -- otras columnas
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente) ON DELETE SET NULL ON UPDATE SET NULL
);
```

Estos ejemplos ilustran cómo se pueden utilizar diferentes restricciones al crear una llave foránea en una tabla. Es importante recordar que las restricciones específicas disponibles pueden variar según el DBMS que se esté utilizando, ya que algunos sistemas de gestión de bases de datos pueden proporcionar opciones adicionales o diferentes formas de especificar las restricciones en las llaves foráneas.

## Buenas prácticas

- **Nombres Descriptivos**: Utilizar nombres descriptivos para las llaves foráneas y las columnas relacionadas para facilitar la comprensión del esquema de la base de datos.

- **Mantenimiento y Actualización**: Asegurarse de mantener las llaves foráneas actualizadas cuando se realicen cambios en el esquema de la base de datos, y realizar copias de seguridad periódicas para garantizar la integridad de los datos.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/DFg1V-rO6Pg?start=4408&end=4870" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
