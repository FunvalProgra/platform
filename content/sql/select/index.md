---
title: "SELECT en SQL: Una Guía Completa"
date: 2023-11-09T15:19:20-05:00
draft: false
showPagination: false
---

## Introducción

El comando SELECT en SQL es uno de los comandos más utilizados y esenciales en el lenguaje SQL¹. Se utiliza para seleccionar (recuperar) datos de una tabla de base de datos².

## ¿Qué es SELECT?

El comando SELECT en SQL se utiliza para seleccionar datos de una tabla. La sintaxis básica del comando SELECT es la siguiente³:

```sql
SELECT column1, column2, ... FROM table;
```

Aquí, `column1`, `column2`, ... son las columnas de la tabla y `table` es el nombre de la tabla desde donde seleccionamos los datos².

## Ejemplo de SELECT

Por ejemplo, si queremos seleccionar las columnas `first_name` y `last_name` de la tabla `Customers`, usaríamos el siguiente comando²:

```sql
SELECT first_name, last_name FROM Customers;
```

Este comando selecciona las columnas `first_name` y `last_name` de todos los clientes en la tabla `Customers`².

## SELECT ALL

Para seleccionar todas las columnas de una tabla de base de datos, utilizamos el carácter `*`. Por ejemplo²:

```sql
SELECT * FROM Customers;
```

Este comando selecciona todas las columnas de la tabla `Customers`².

## SELECT con WHERE

Un comando SELECT puede tener una cláusula WHERE opcional. La cláusula WHERE nos permite seleccionar registros de una tabla de base de datos que coinciden con condiciones específicas². Por ejemplo²:

```sql
SELECT * FROM Customers WHERE last_name = 'Doe';
```

Este comando selecciona todos los clientes de la tabla `Customers` con el apellido 'Doe'².

## Operadores SQL

La cláusula WHERE utiliza operadores para construir condiciones. Algunos de los operadores más utilizados son²:

1. Operador igual a (=)
2. Mayor que (>)
3. Operador AND (AND)

Por ejemplo, para seleccionar todos los clientes de la tabla `Customers` con un nombre de 'John', usaríamos el siguiente comando²:

```sql
SELECT * FROM Customers WHERE first_name = 'John';
```

## Conclusión

El comando SELECT en SQL es una herramienta poderosa que nos permite interactuar con las bases de datos de manera efectiva. Nos permite seleccionar, filtrar y ordenar los datos de una manera que sería difícil o imposible sin él. A medida que continuamos construyendo y utilizando aplicaciones de base de datos, es esencial entender y utilizar eficazmente el comando SELECT en SQL.

## Recursos

### Video

{{< youtube WimSXuCam5g >}}

### Más lectura
https://www.tutorialspoint.com/sql/sql-select-query.htm