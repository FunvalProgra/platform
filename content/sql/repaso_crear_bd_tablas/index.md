---
title: "ALTER TABLE"
date: 2023-07-17T19:24:37-05:00
draft: false
showPagination: false
---

## Definición y propósito

El comando ALTER TABLE es una instrucción utilizada en lenguajes de consulta estructurados (SQL) para realizar modificaciones en la estructura de una tabla existente en una base de datos relacional. Permite agregar, modificar o eliminar columnas, establecer restricciones, cambiar propiedades y realizar otras alteraciones en la definición de una tabla sin tener que recrearla por completo.

El propósito principal del comando ALTER TABLE es permitir a los administradores y desarrolladores de bases de datos realizar cambios y ajustes en la estructura de una tabla existente para adaptarla a los requisitos cambiantes de la aplicación. Algunos de los propósitos comunes del comando ALTER TABLE son:

### Agregar columnas

ALTER TABLE se utiliza para agregar nuevas columnas a una tabla existente. Esto permite ampliar la estructura de la tabla y agregar nuevos atributos o campos para almacenar información adicional.

Ejemplo:

```sql
ALTER TABLE nombre_tabla
ADD COLUMN nombre_columna tipo_dato;
```

Para agregar varias columnas a la vez:

```sql
ALTER TABLE nombre_tabla
ADD COLUMN nombre_columna1 tipo_de_dato1,
ADD COLUMN nombre_columna2 tipo_de_dato2,
...,
ADD COLUMN nombre_columnaN tipo_de_datoN;
```

### Eliminar columnas

Para eliminar una columna de una tabla existente utilizando la sentencia ALTER TABLE en SQL, puedes utilizar la siguiente sintaxis:

```sql
ALTER TABLE nombre_tabla DROP COLUMN nombre_columna;
```

Para eliminar varias columnas a la vez:

```sql
ALTER TABLE nombre_tabla
DROP COLUMN nombre_columna1,
DROP COLUMN nombre_columna2,
...,
DROP COLUMN nombre_columnaN;
```

### Modificar columnas

Para modificar las características de una columna existente en una tabla utilizando la sentencia `ALTER TABLE` en SQL, puedes seguir estos pasos:

```sql
ALTER TABLE nombre_tabla
MODIFY COLUMN nombre_columna tipo_de_dato [atributos];
```

Ejemplo:

```sql
ALTER TABLE mi_tabla
MODIFY COLUMN mi_columna INT NOT NULL;
```

## Plus: Renombrar una tabla

En phpMyAdmin, también puedes cambiar el nombre de una tabla utilizando una sentencia SQL directamente. Aquí tienes un ejemplo:

```sql
RENAME TABLE empleados TO empleados2;
```

## Video de refuerzo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/uUdKAYl-F7g?start=2534&end=3022" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>