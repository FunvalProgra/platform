---
title: "Join"
date: 2023-07-13T14:25:21-05:00
draft: false
showPagination: false
---

La cláusula JOIN en SQL se utiliza para combinar registros de dos o más tablas relacionadas en una consulta. Permite establecer relaciones entre las tablas utilizando columnas comunes y recuperar datos combinados en función de esas relaciones. La cláusula JOIN es una parte fundamental de SQL para consultar y combinar datos de manera eficiente.

Existen varios tipos de JOIN utilizados comúnmente, incluyendo INNER JOIN, LEFT JOIN, RIGHT JOIN y FULL JOIN. Cada tipo de JOIN tiene características y resultados diferentes, y se selecciona según los requisitos específicos de la consulta.

```sql
SELECT columnas
FROM tabla1
JOIN tabla2 ON condición;
```

La condición especifica cómo se relacionan las tablas utilizando columnas comunes. La condición puede ser una igualdad (usando el operador =) entre las columnas de relación, o una condición más compleja utilizando operadores lógicos.

## Tipos de JOIN

### INNER JOIN

El INNER JOIN devuelve únicamente los registros que tienen coincidencias en ambas tablas. Es decir, combina las filas de ambas tablas solo si existe una relación coincidente en la columna especificada en la condición JOIN.

```sql
-- Ejemplo: Obtener una lista de todos los pedidos junto con el nombre del cliente
SELECT pedidos.pedido_id, clientes.nombre, pedidos.producto
FROM pedidos
INNER JOIN clientes ON pedidos.cliente_id = clientes.cliente_id;
```

### LEFT JOIN

El LEFT JOIN devuelve todos los registros de la tabla izquierda (la primera mencionada en la cláusula FROM) y los registros coincidentes de la tabla derecha. Si no hay coincidencias, se devolverá NULL en las columnas de la tabla derecha.

```sql
-- Ejemplo: Obtener todos los empleados con sus respectivos departamentos (incluso si no tienen departamento asignado)
SELECT empleados.*, departamentos.nombre
FROM empleados
LEFT JOIN departamentos ON empleados.departamento_id = departamentos.id;
```

### RIGHT JOIN

El RIGHT JOIN devuelve todos los registros de la tabla derecha y los registros coincidentes de la tabla izquierda. Si no hay coincidencias, se devolverá NULL en las columnas de la tabla izquierda.

```sql
-- Ejemplo: Obtener todos los departamentos con sus respectivos empleados (incluso si no tienen empleados asignados)
SELECT empleados.*, departamentos.nombre
FROM empleados
RIGHT JOIN departamentos ON empleados.departamento_id = departamentos.id;
```

### FULL JOIN

El FULL JOIN devuelve todos los registros de ambas tablas. Combina las filas de ambas tablas sin importar si hay coincidencias o no. Si no hay coincidencias, se devolverán NULL en las columnas correspondientes.

```sql
-- Ejemplo: Obtener todos los clientes junto con sus pedidos (incluso si no tienen pedidos)
SELECT clientes.*, pedidos.fecha
FROM clientes
FULL JOIN pedidos ON clientes.id = pedidos.cliente_id;
```

Es importante destacar que además de los JOIN mencionados, existen otras variaciones como el CROSS JOIN, que combina todas las filas de una tabla con todas las filas de otra tabla, sin necesidad de una condición de relación específica.

La cláusula JOIN es una herramienta poderosa para combinar y relacionar datos de diferentes tablas en una consulta SQL. Permite obtener información más completa y significativa al aprovechar las relaciones definidas en la base de datos. Al dominar los diferentes tipos de JOIN y comprender cómo utilizarlos adecuadamente, los desarrolladores pueden realizar consultas más complejas y obtener resultados precisos a partir de datos relacionados en diferentes tablas.

## Video de refuerzo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/DFg1V-rO6Pg?start=16754&end=18257" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
