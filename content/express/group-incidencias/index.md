---
title: 'Plataforma de Gestión de Incidencias'
date: 2024-05-10T17:25:58-05:00
draft: false
showPagination: false
---

### 🎯 Objetivo

El desafío consiste en crear una plataforma web que facilite la gestión de incidencias en un edificio, permitiendo a los residentes reportar problemas y comunicarse eficientemente con el equipo administrativo.

### 📃 Descripción del Desafío

Imagina una aplicación web que simplifique el proceso de reportar incidencias para los residentes de un edificio. Desde problemas de fontanería hasta desperfectos en las áreas comunes, la plataforma debe permitir a los usuarios reportar detalles específicos como la ubicación precisa, tipo de problema, una descripción detallada e incluso imágenes relevantes. Además, el equipo administrativo debe recibir notificaciones instantáneas sobre las incidencias reportadas, visualizarlas de manera clara y marcarlas como resueltas una vez solucionadas.

### ☑ Requerimientos Funcionales

- Implementar un sistema completo de Crear, Leer, Actualizar y Eliminar (CRUD) de incidencias para los residentes, incluyendo detalles esenciales como asunto, tipo de incidencia, descripción, imágenes y estado actual.
- Ofrecer capacidades avanzadas de filtrado y búsqueda para las incidencias, permitiendo a los usuarios encontrar rápidamente información relevante basada en criterios como estado o fecha.
- Facilitar una comunicación fluida entre residentes y administradores, posiblemente a través de comentarios directamente en las incidencias (opcional).
- Integrar notificaciones instantáneas para que el equipo administrativo sea alertado en tiempo real ante nuevos reportes de incidencias (opcional).
- Opcionalmente, implementar un sistema de registro y autenticación de usuarios para diferenciar entre residentes y administradores.

### 🧭 Pautas

- Diseñar un diagrama Entidad-Relación (ERD) que modele la estructura de la base de datos para una gestión eficiente de datos.
- Utilizar las últimas versiones de bibliotecas y dependencias para garantizar la seguridad y eficacia del sistema.
- La estructura organizativa del código y la adhesión a las buenas prácticas de desarrollo serán evaluadas positivamente.

### ✔ Requerimientos No Funcionales

- La interfaz de usuario debe ser intuitiva y atractiva, priorizando la experiencia del usuario.
- Garantizar una respuesta rápida a las solicitudes de los usuarios para una experiencia fluida y eficiente.
- Considerar la escalabilidad del sistema, asegurando que pueda manejar un volumen considerable de incidencias y usuarios sin comprometer el rendimiento.
- Mantener un código limpio y bien estructurado para facilitar futuras actualizaciones y mejoras.

### ➕ Requerimientos Extra (Opcionales)

Además de los requisitos básicos, se pueden implementar funcionalidades adicionales según las necesidades y preferencias del equipo de desarrollo:

- Visualización en tiempo real de las incidencias en la plataforma.
- Integración con servicios externos para notificaciones por correo electrónico o mensajes SMS.
- Generación de informes y estadísticas detalladas sobre las incidencias para análisis y mejora continua.
- Posibilidad de internacionalización y localización de la aplicación para adaptarse a diferentes idiomas y regiones.

### 👨🏻‍💻 Tecnologías a utilizar

- **FRONTEND:**
  - React.js con Vite
  - Utilización de React Hooks para gestionar el estado de manera efectiva
  - Consumo de API REST utilizando Axios para comunicarse con el backend
  - Formato de fechas y horas con Day.js
  - Manejo de rutas con Wouter para una navegación fluida
- **BACKEND:**
  - Express.js para el desarrollo del servidor
  - Base de datos relacional como MySQL para almacenar los datos de manera estructurada
  - Implementación de una API RESTful para permitir la comunicación eficiente entre el frontend y el backend
  - Opcionalmente, se puede implementar Jobs/Queues para el envío de notificaciones de forma asíncrona.

### 👀 Ejemplos de Interfaz de Usuario

- [Diseño UX/UI - Gestor de Incidencias de Parkia](https://www.behance.net/gallery/174430385/Diseno-UXUI-Gestor-de-incidencias-de-Parkia?tracking_source=search_projects%7Cincidencias+&l=0)
- [Sistema Gestor de Incidencias Tecnológicas - BURIA](https://www.behance.net/gallery/108156857/SISTEMA-GESTOR-DE-INCIDENCIAS-TECNOLOGICAS-BURIA?tracking_source=search_projects%7Cincidencias+&l=4)

### 🤗 ¡Recuerda que el objetivo principal es evaluar tu capacidad actual!

- Entregables:
  - Repositorios públicos en GitHub con el código del frontend y el backend.
  - Opcionalmente, proporcionar una URL para pruebas, lo que facilitará la revisión del proyecto mediante un despliegue funcional.
