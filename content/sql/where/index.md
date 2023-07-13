---
title: "Claúsula WHERE"
date: 2023-07-13T14:23:50-05:00
draft: false
showPagination: false
---

La cláusula WHERE es una parte fundamental de las consultas SQL, ya que permite filtrar los resultados y recuperar únicamente las filas que cumplan con una condición específica. Esta cláusula se utiliza después de la cláusula SELECT en una consulta y ayuda a refinar los resultados basándose en criterios de búsqueda.

## Sintaxis básica

La sintaxis básica de la cláusula WHERE es la siguiente:

```sql
SELECT columnas
FROM tabla
WHERE condición;
```

La condición puede ser una expresión lógica que involucra operadores de comparación (como igualdad, desigualdad, mayor que, menor que, etc.) y operadores lógicos (como AND, OR, NOT) para combinar múltiples condiciones.

## Operadores de comparación

Los operadores de comparación más comunes utilizados en la cláusula WHERE son:

- **Igualdad (=)**: Se utiliza para comparar si dos valores son iguales.
- **Desigualdad (<> o !=)**: Compara si dos valores son diferentes.
- **Mayor que (>), mayor o igual que (>=), menor que (<) y menor o igual que (<=)**: Comparan valores numéricos o alfabéticos en función de su orden.
- **IN**: Verifica si un valor coincide con alguno de los valores de una lista o subconsulta.
- **BETWEEN**: Comprueba si un valor se encuentra dentro de un rango especificado.
- **LIKE**: Permite comparar un valor con un patrón utilizando comodines (% para cualquier cadena de caracteres y \_ para un solo carácter).
- **IS NULL / IS NOT NULL**: Verifica si un valor es nulo o no es nulo.

Ejemplos de uso:

```sql
-- Ejemplo 1: Seleccionar todos los empleados con salario mayor a 5000
SELECT *
FROM empleados
WHERE salario > 5000;

-- Ejemplo 2: Seleccionar todos los productos con existencia igual a 0 y precio mayor a 100
SELECT *
FROM productos
WHERE existencia = 0 AND precio > 100;

-- Ejemplo 3: Seleccionar todos los clientes que no sean de la ciudad "Madrid"
SELECT *
FROM clientes
WHERE ciudad <> 'Madrid';

-- Ejemplo 4: Seleccionar todos los productos que empiecen con "A" y tengan una longitud de 5 caracteres
SELECT *
FROM productos
WHERE nombre LIKE 'A%' AND LENGTH(nombre) = 5;
```

## Combinación de condiciones:

Es posible combinar múltiples condiciones utilizando paréntesis para definir el orden de evaluación. Por ejemplo:

```sql
-- Ejemplo: Seleccionar todos los empleados con salario mayor a 5000 y (edad menor a 30 o puesto igual a 'Gerente')
SELECT *
FROM empleados
WHERE salario > 5000 AND (edad < 30 OR puesto = 'Gerente');
```

En este caso, la condición dentro de los paréntesis se evalúa primero, y luego se combina con la condición principal utilizando el operador AND.

Es importante mencionar que la posición de la cláusula WHERE en una consulta SQL puede variar. Puede colocarse después de la cláusula FROM o después de la cláusula JOIN, dependiendo de la estructura de la consulta y de las tablas involucradas.

En resumen, la cláusula WHERE es esencial en SQL para filtrar y obtener resultados específicos en una consulta. Permite establecer condiciones de búsqueda utilizando operadores de comparación y operadores lógicos, lo que brinda flexibilidad y precisión en la recuperación de datos. Al comprender y utilizar correctamente la cláusula WHERE, los desarrolladores y analistas de datos pueden obtener información relevante y útil de sus bases de datos.

## Video de refuerzo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/DFg1V-rO6Pg?start=6964&end=8752" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>