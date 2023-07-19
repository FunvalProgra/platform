---
title: "Repaso: SELECT, INSERT, UPDATE y DELETE"
date: 2023-07-18T19:39:35-05:00
draft: false
showPagination: false
---

Para este repaso te presentaré varios ejercicios que servirán de repaso:

## 1. Ejercicio de selección (SELECT):

Supongamos que tienes dos tablas llamadas "Customers" y "Orders". La tabla "Customers" tiene las siguientes columnas: CustomerID (entero), Name (cadena) y Age (entero). La tabla "Orders" tiene las siguientes columnas: OrderID (entero), CustomerID (entero), Product (cadena) y Quantity (entero).

Escribe una consulta SELECT para obtener los nombres de los clientes que han realizado pedidos más de una vez.

## 2. Ejercicio de inserción (INSERT):

Supongamos que tienes una tabla llamada "Employees" con las siguientes columnas: EmployeeID (entero), Name (cadena) y Salary (decimal).
Escribe una consulta INSERT para insertar un nuevo empleado llamado "John Smith" con un salario de 5000.

## 3. Ejercicio de actualización (UPDATE):

Supongamos que tienes una tabla llamada "Products" con las siguientes columnas: ProductID (entero), Name (cadena) y Price (decimal).
Escribe una consulta UPDATE para aumentar el precio de todos los productos en un 10%.

## 4. Ejercicio de eliminación (DELETE):

Supongamos que tienes una tabla llamada "Orders" con las siguientes columnas: OrderID (entero), CustomerName (cadena) y OrderDate (fecha).
Escribe una consulta DELETE para eliminar todas las órdenes realizadas antes del 1 de enero de 2022.

## 5. SELECT con JOIN

Supongamos que tienes las siguientes tablas:

```sql
CREATE TABLE clientes (
  cliente_id INT,
  cliente_nombre VARCHAR(50),
  direccion VARCHAR(100)
);

CREATE TABLE pedidos (
  pedido_id INT,
  cliente_id INT,
  fecha_pedido DATE
);

CREATE TABLE productos (
  producto_id INT,
  producto_nombre VARCHAR(50),
  precio DECIMAL(10, 2)
);

CREATE TABLE detalles_pedido (
  detalle_id INT,
  pedido_id INT,
  producto_id INT,
  cantidad INT
);
```

Y se te solicita obtener la siguiente información para todos los pedidos:

- Nombre del cliente.
- Fecha del pedido.
- Nombre de los productos en el pedido.
- Cantidad de cada producto en el pedido.

Esta consulta combina las tablas `clientes`, `pedidos`, `productos` y `detalles_pedido` a través de condiciones de igualdad entre los campos relacionados. Esto permitirá obtener la información solicitada para cada pedido, incluyendo el nombre del cliente, la fecha del pedido, el nombre de los productos en el pedido y la cantidad de cada producto.


## 6. SELECT con JOIN

Supongamos que tienes las siguientes tablas:

```sql
CREATE TABLE empleados (
  empleado_id INT,
  empleado_nombre VARCHAR(50),
  departamento_id INT,
  salario DECIMAL(10, 2)
);

CREATE TABLE departamentos (
  departamento_id INT,
  departamento_nombre VARCHAR(50),
  ubicacion VARCHAR(100)
);

CREATE TABLE proyectos (
  proyecto_id INT,
  proyecto_nombre VARCHAR(100),
  departamento_id INT,
  fecha_inicio DATE,
  fecha_fin DATE
);
```

El ejercicio consiste en obtener el nombre del empleado, el nombre del departamento y el nombre del proyecto para aquellos empleados que trabajan en un departamento cuya ubicación es "New York" (agrega dicho registro a la tabla) y están asignados a proyectos que iniciaron después del 1 de enero de 2023 (agrega este dato a la tabla).

En este ejemplo, se realizan múltiples JOINs para relacionar las tablas empleados, departamentos y proyectos. La condición WHERE se utiliza para filtrar los empleados que trabajan en un departamento de ubicación "New York" y están asignados a proyectos que iniciaron después del 1 de enero de 2023.