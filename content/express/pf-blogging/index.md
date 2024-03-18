---
title: "Sistema de Blogging"
date: 2024-03-15T12:49:48-05:00
draft: false
showPagination: false
---

## Descripción

El propósito de este proyecto es desarrollar una API RESTful utilizando Express.js y MySQL para crear una plataforma de blogging interactiva. Esta plataforma permitirá a los usuarios registrar cuentas, crear publicaciones, comentar en publicaciones de otros usuarios, explorar publicaciones por categorías y buscar publicaciones por título.

## Requisitos Funcionales

1. **Gestión de Usuarios:**

   - Los `usuarios` podrán registrarse en la plataforma (crearse un perfil).
   - Los `usuarios` podrán actualizar sus datos personales.
   - Los `usuarios` podrán eliminar sus cuentas.
   - El `administrador` podrá ver todos los `usuarios` registrados en la plataforma.

2. **Roles:**

   - Se establecerán roles de `usuario` y `administrador`.
   - El `administrador` tendrá acceso completo a todas las funcionalidades de la API.
   - Los `usuarios` tendrán permisos limitados según sus roles.

3. **Gestión de Publicaciones:**

   - Los `usuarios` podrán:
     - Crear nuevas publicaciones.
     - Actualizar sus propias publicaciones.
     - Eliminar sus propias publicaciones.
     - Ver sus propias publicaciones y las de otros usuarios.
     - Filtrar las publicaciones por categorías.
     - Buscar publicaciones por título.

4. **Gestión de Categorías:**

   - El `administrador` tendrá acceso completo para crear, leer, actualizar y eliminar categorías (CRUD).
   - Cada publicación estará asociada a una o más categorías.

5. **Gestión de Comentarios:**
   - Los `usuarios` podrán
     - Comentar en las publicaciones.
     - Actualizar sus propios comentarios.
     - Eliminar sus propios comentarios.
   - Los comentarios solo serán visibles a través de la publicación a la que pertenecen.

## Requisitos No Funcionales

1. La API deberá seguir las mejores prácticas de diseño REST.
2. Se deberá utilizar `mysl2` como dependencia para interactuar con la base de datos MySQL.
3. Se proporcionará documentación completa de la API.
4. **NO ES NECESARIO REALIZAR FRONTEND (HTM, CSS, JavaScript), SOLO LA API.**

## Entregables:

Envía un documento PDF con lo siguiente:

1. Un repositorio en GitHub que contenga el código fuente de la API.
2. Un diagrama Entidad-Relación (ERD) que represente la estructura de la base de datos.
3. Documentación detallada de la API con los endpoints disponibles **(dentro del PDF como texto o usando Swagger)**.

**Nota:**
La evaluación del proyecto se basará en la funcionalidad, la calidad del código, la organización del proyecto, y el cumplimiento de los requisitos establecidos. Se espera una implementación robusta y escalable de la API de blogging.
