---
title: "DML parte 2"
date: 2023-01-17T18:05:35-05:00
draft: false
showPagination: false
---
# Leccion DML MYSQL

lección completa sobre el lenguaje de manipulación de datos (DML) en MySQL. El DML se utiliza para realizar operaciones de inserción, actualización, eliminación y consulta en una base de datos. Aquí tienes una descripción general de las principales declaraciones DML en MySQL:

1. **INSERT**: Se utiliza para insertar datos en una tabla.

   Sintaxis básica:
   ```sql
   INSERT INTO nombre_tabla (columna1, columna2, ...) VALUES (valor1, valor2, ...);
   ```

   Ejemplo:
   ```sql
   INSERT INTO clientes (nombre, apellido, edad) VALUES ('John', 'Doe', 30);
   ```

2. **UPDATE**: Se utiliza para modificar datos existentes en una tabla.

   Sintaxis básica:
   ```sql
   UPDATE nombre_tabla SET columna1 = valor1, columna2 = valor2, ... WHERE condición;
   ```

   Ejemplo:
   ```sql
   UPDATE productos SET precio = 100 WHERE id = 1;
   ```

3. **DELETE**: Se utiliza para eliminar filas de una tabla.

   Sintaxis básica:
   ```sql
   DELETE FROM nombre_tabla WHERE condición;
   ```

   Ejemplo:
   ```sql
   DELETE FROM usuarios WHERE id = 1;
   ```

4. **SELECT**: Se utiliza para consultar datos de una o varias tablas.

   Sintaxis básica:
   ```sql
   SELECT columnas FROM nombre_tabla WHERE condición;
   ```

   Ejemplo:
   ```sql
   SELECT * FROM clientes WHERE edad >= 18;
   ```

5. **SELECT ... ORDER BY**: Se utiliza para ordenar los resultados de una consulta en función de una o más columnas.

   Sintaxis básica:
   ```sql
   SELECT columnas FROM nombre_tabla ORDER BY columna ASC/DESC;
   ```

   Ejemplo:
   ```sql
   SELECT * FROM registros ORDER BY fecha DESC;
   ```

Estas son las declaraciones DML más utilizadas en MySQL. Recuerda que hay muchas más opciones y cláusulas disponibles en el lenguaje SQL para personalizar y ajustar tus consultas según tus necesidades.

# JOIN MYSQL
 lección completa sobre las diferentes formas de realizar joins en MySQL. El join es una operación que combina filas de dos o más tablas en función de una columna relacionada entre ellas. Aquí tienes una descripción de los tipos de join más comunes en MySQL:

1. **INNER JOIN**: Devuelve solo las filas que tienen coincidencias en ambas tablas.

   Sintaxis básica:
   ```sql
   SELECT columnas FROM tabla1 INNER JOIN tabla2 ON tabla1.columna = tabla2.columna;
   ```

   Ejemplo:
   ```sql
   SELECT pedidos.numero, clientes.nombre FROM pedidos INNER JOIN clientes ON pedidos.cliente_id = clientes.id;
   ```

2. **LEFT JOIN**: Devuelve todas las filas de la tabla izquierda y las coincidencias de la tabla derecha. Si no hay coincidencias, se devuelve NULL en las columnas de la tabla derecha.

   Sintaxis básica:
   ```sql
   SELECT columnas FROM tabla1 LEFT JOIN tabla2 ON tabla1.columna = tabla2.columna;
   ```

   Ejemplo:
   ```sql
   SELECT clientes.nombre, pedidos.numero FROM clientes LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id;
   ```

3. **RIGHT JOIN**: Devuelve todas las filas de la tabla derecha y las coincidencias de la tabla izquierda. Si no hay coincidencias, se devuelve NULL en las columnas de la tabla izquierda.

   Sintaxis básica:
   ```sql
   SELECT columnas FROM tabla1 RIGHT JOIN tabla2 ON tabla1.columna = tabla2.columna;
   ```

   Ejemplo:
   ```sql
   SELECT clientes.nombre, pedidos.numero FROM clientes RIGHT JOIN pedidos ON clientes.id = pedidos.cliente_id;
   ```

4. **FULL JOIN**: Devuelve todas las filas de ambas tablas, incluidas las coincidencias y las no coincidencias. Si no hay coincidencias, se devuelve NULL en las columnas correspondientes.

   Nota: MySQL no admite la sintaxis de FULL JOIN de forma nativa, pero se puede emular mediante UNION de LEFT JOIN y RIGHT JOIN.

   Sintaxis básica:
   ```sql
   SELECT columnas FROM tabla1 LEFT JOIN tabla2 ON tabla1.columna = tabla2.columna
   UNION
   SELECT columnas FROM tabla1 RIGHT JOIN tabla2 ON tabla1.columna = tabla2.columna;
   ```

   Ejemplo:
   ```sql
   SELECT clientes.nombre, pedidos.numero FROM clientes LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
   UNION
   SELECT clientes.nombre, pedidos.numero FROM clientes RIGHT JOIN pedidos ON clientes.id = pedidos.cliente_id;
   ```
# Count, sum, Group by y sort by
Estos son los tipos de joins más utilizados en MySQL. Recuerda que el join te permite combinar tablas en función de una relación específica, lo que te permite realizar consultas más complejas y obtener resultados más significativos.

¡Por supuesto! Aquí tienes una lección completa sobre las funciones de agregación COUNT, SUM, el uso de GROUP BY y ORDER BY en MySQL:

1. **COUNT**: Esta función de agregación cuenta el número de filas que cumplen una condición específica.

   Sintaxis básica:
   ```sql
   SELECT COUNT(columna) FROM tabla WHERE condición;
   ```

   Ejemplo:
   ```sql
   SELECT COUNT(id) FROM clientes WHERE estado = 'activo';
   ```

2. **SUM**: Esta función de agregación calcula la suma de los valores de una columna específica.

   Sintaxis básica:
   ```sql
   SELECT SUM(columna) FROM tabla WHERE condición;
   ```

   Ejemplo:
   ```sql
   SELECT SUM(total) FROM ventas WHERE fecha = '2023-06-13';
   ```

3. **GROUP BY**: Esta cláusula se utiliza para agrupar filas en función de una o más columnas y aplicar funciones de agregación a cada grupo.

   Sintaxis básica:
   ```sql
   SELECT columna1, columna2, ..., función_agregación(columna) FROM tabla GROUP BY columna1, columna2, ...;
   ```

   Ejemplo:
   ```sql
   SELECT categoría, COUNT(*) FROM productos GROUP BY categoría;
   ```

4. **ORDER BY**: Esta cláusula se utiliza para ordenar los resultados de una consulta en función de una o más columnas, ya sea en orden ascendente (ASC) o descendente (DESC).

   Sintaxis básica:
   ```sql
   SELECT columnas FROM tabla ORDER BY columna1 ASC/DESC, columna2 ASC/DESC, ...;
   ```

   Ejemplo:
   ```sql
   SELECT nombre, edad FROM usuarios ORDER BY edad DESC;
   ```

Estas funciones y cláusulas son muy útiles para realizar operaciones de agregación, agrupación y ordenación en MySQL. Puedes combinarlas con otras declaraciones DML para obtener resultados más precisos y personalizados en tus consultas.