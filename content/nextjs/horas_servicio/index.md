---
title: 'Registro de Horas de Servicio'
date: 2024-10-22T16:12:46-05:00
draft: false
showPagination: false
---

La **Aplicación de Registro de Horas de Servicio** es una plataforma que permite a los alumnos registrar sus horas de servicio y someterlas para su aprobación. Los diferentes roles dentro de la plataforma tienen acceso a funcionalidades específicas para gestionar usuarios, visualizar y aprobar reportes. El **frontend será desarrollado utilizando Next.js**, y la **API ya está disponible** con su respectiva documentación en [este enlace](https://funval-api.onrender.com/api/v1/docs).

## Roles de Usuario

La plataforma contará con los siguientes roles:

1. **Administrador**
2. **Alumno**
3. **Controller**
4. **Reclutador**

Cada usuario debe iniciar sesión en la plataforma utilizando su correo electrónico y tendrá acceso a funcionalidades según su rol.

### Administrador

Los usuarios con el rol de **Administrador** tendrán acceso completo a la gestión de usuarios, reportes y otras entidades de la plataforma, como escuelas y países:

- **Gestión de Escuelas y Países:**

  - **Crear nueva escuela:** Registrar una nueva institución educativa.
  - **Crear nuevo país:** Agregar un nuevo país a la base de datos.

- **Gestión de Usuarios:**

  - **Mostrar:** Ver la lista de usuarios registrados.
  - **Crear:** Registrar nuevos usuarios (controllers, alumnos, reclutadores).
  - **Modificar:** Editar la información de los usuarios existentes.

- **Vista de Reportes:**

  - Acceso a todos los reportes de horas de servicio enviados por los alumnos.

- **Aprobación de Reportes:**
  - Aprobar o rechazar los reportes enviados.
  - Definir la cantidad exacta de horas aprobadas en cada reporte antes de aprobarlo.

### Controller

El **Controller** tendrá acceso a:

- **Visualización de Reportes:** Podrá ver los reportes enviados, pero no tendrá permisos para aprobarlos o editarlos.

### Reclutador

El **Reclutador** también tendrá acceso a:

- **Visualización de Reportes:** Podrá ver los reportes enviados, pero no tendrá permisos para aprobarlos o editarlos.

### Alumno

El **Alumno** es el principal usuario para el envío de reportes. Tendrá acceso a:

- **Ver Estado de Reportes:**

  - Revisar el estado de sus reportes anteriores, ya sea que hayan sido aprobados o rechazados.

- **Editar Reportes Pendientes:**

  - Modificar reportes siempre y cuando no hayan sido revisados.

- **Crear Nuevos Reportes:**
  - Enviar nuevos reportes que incluyan los siguientes datos:
    - **Cantidad de horas de servicio** realizadas.
    - **Descripción del servicio.**
    - **Categoría del servicio** (predefinida en la API).
    - **Evidencia adjunta** del servicio (PDF, imagen, etc.).

## Funcionalidades Detalladas

### 1. Autenticación

- Todos los usuarios inician sesión con su **correo electrónico** y una **contraseña**.
- Las rutas protegidas se habilitarán según el rol del usuario autenticado.
- El token de autenticación exitosa tiene una duración de 24 horas.

### 2. Gestión de Usuarios (Administrador)

- **Panel de Administración:**

  - Los Administradores tendrán acceso a una lista de usuarios, con opciones para filtrar, buscar, crear, y modificar usuarios.

- **Gestión de Escuelas y Países:**
  - **Crear nueva escuela:** Desde el panel de administración, los Administradores podrán registrar nuevas escuelas.
  - **Crear nuevo país:** También tendrán la opción de agregar nuevos países que estarán disponibles como parte de la información del sistema.

### 3. Envío de Reportes (Alumno)

- **Formulario de Envío de Reportes:** Los alumnos podrán:

  - Seleccionar la **categoría** del servicio.
  - Ingresar la cantidad de **horas trabajadas**.
  - Añadir una **descripción** del servicio.
  - Adjuntar **evidencias** del trabajo realizado.

- **Edición de Reportes:** Los alumnos podrán editar reportes que aún no han sido revisados.

- **Historial de Reportes:** Los alumnos tendrán acceso a un historial de sus reportes, donde podrán ver el estado (aprobado, rechazado, pendiente) y la cantidad de horas aprobadas.

### 4. Aprobación de Reportes (Administrador)

- **Panel de Revisión:** Los Administradores podrán revisar los detalles de los reportes enviados, incluyendo la evidencia adjunta. Al aprobar un reporte, deberán especificar cuántas horas de servicio se aprueban.

### 5. Notificaciones

- Opcionalmente, se pueden implementar **notificaciones** para informar a los alumnos cuando su reporte haya sido aprobado o rechazado.

## Frontend con Next.js

El frontend será desarrollado con **Next.js** y contará con las siguientes características:

- **SSR (Server-Side Rendering):** Para una carga más rápida y mejor optimización SEO.
- **API Routes:** Para manejar la autenticación, envío y gestión de reportes.
- **Uso de CSS Modules o TailwindCSS** para un diseño modular y responsive.

## Integración con la API

La aplicación se conectará a la **API existente** cuya documentación puede encontrarse [aquí](https://funval-api.onrender.com/api/v1/docs). Esta API ya gestiona la autenticación de usuarios, creación de reportes, visualización y aprobación. Las rutas y endpoints necesarios se configurarán en el frontend de Next.js para interactuar con la API de manera eficiente.

## Resumen

La aplicación permitirá a los alumnos registrar y gestionar sus horas de servicio, mientras que los Administradores podrán revisar y aprobar los reportes, así como gestionar usuarios, escuelas y países. El frontend basado en **Next.js** garantizará una experiencia de usuario ágil y eficiente, mientras que la integración con la **API ya existente** permitirá un desarrollo rápido y escalable.
