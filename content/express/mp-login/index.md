---
title: 'Sistema de Autenticación Full Stack'
date: 2024-05-07T17:11:58-05:00
draft: false
showPagination: false
---

## Descripción

Desarrolla un sistema de autenticación completo que permita a los usuarios registrarse, iniciar sesión y acceder de manera segura a su perfil. El proyecto se enfoca en implementar un proceso de autenticación robusto y seguro utilizando JWT y bcrypt, junto con una interfaz de usuario intuitiva construida con React.

## Características Principales

1. **Registro de Usuarios:** Los usuarios pueden crear cuentas proporcionando un correo válido, y una contraseña segura.
   - La contraseña debe ser de 8 caracteres como mínimo y tener al menos una letra mayúscula.
   - El correo electrónico de cada usuario debe ser único.
2. **Inicio de Sesión:** Los usuarios registrados pueden iniciar sesión utilizando su correo y contraseña.
3. **Seguridad de Contraseñas:** Las contraseñas deben cifrarse utilizando bcrypt antes de almacenarse en la base de datos para garantizar la seguridad de los datos del usuario.
4. **Tokens JWT:** Utiliza JSON Web Tokens (JWT) para autenticar las solicitudes del usuario y mantener su sesión activa de manera segura.
   - Los tokens deben tener un tiempo de vida de 1 hora.
5. **Integración con Base de Datos:** Utiliza MySQL para almacenar de manera persistente la información de los usuarios y sus credenciales.
   - La contraseña guardada en la base de datos debe estar cifrada.
   - Usar `mysql2` para la conexión a la base de datos.
6. **Interfaz de Usuario Intuitiva:** Realiza el diseño del frontend tal cual y como te lo proporcionaremos en el Figma: [Click aquí](https://www.figma.com/file/ZM0DPZbzK39o3rqwiaOPTD/Authentication-App?type=design&node-id=0-1&mode=design)
7. **Gestión de Estado:** Utiliza la Context API de React (useContext) para gestionar el estado de la aplicación de manera eficiente. También usa localStorage para la persistencia de información.
8. **Seguridad de Rutas:** Implementa middleware en Express para proteger las rutas privadas de la aplicación y garantizar que solo los usuarios autenticados con JWT puedan acceder a ellas.
9. **Manejo de Errores:** Gestiona adecuadamente los errores durante el proceso de autenticación y proporciona retroalimentación clara al usuario en caso de problemas.

## Requisitos

#### Backend (API)

1. Lenguaje a usar: JavaScript con NodeJS.
2. Framework: Express
3. Encriptado de contraseñas: npm bcrypt
4. JWT: npm jsonwebtoken
5. Base de datos: MySQL
6. Seguir las mejores prácticas de diseño REST.
7. Documentación con Swagger en una ruta de tu API: `/api-docs`.
8. **No está permitido utilizar dependencias o librerías que no se han enseñado en clase.**

#### Frontend

1. Librería a usar: React
2. Utilizar Axios y React Query para realizar solicitudes HTTP al backend de forma eficiente.
3. Utilizar useContext y localStorage para manejar la persistencia del token brindado por el backend al hacer el login.
4. Utilizar el token proporcionado en cada solicitud al backend para autenticarse.
5. Diseño - Figma: [Click aquí](https://www.figma.com/file/ZM0DPZbzK39o3rqwiaOPTD/Authentication-App?type=design&node-id=0-1&mode=design)

## Entregables

Envía un documento PDF con lo siguiente:

1. Link a tu repositorio en GitHub que contenga el código fuente del backend (Express) y tu base de datos exportada con datos de prueba.
2. Link a tu repositorio en GitHub que contenga el código fuente del frontend (React).
3. Un diagrama Entidad-Relación (ERD) que represente la estructura de la base de datos.

## Criterios de Evaluación

- Funcionalidad: ¿El sistema de autenticación cumple con todas las características requeridas?
- Seguridad: ¿Se implementan prácticas sólidas de seguridad, como cifrado de contraseñas y uso de tokens JWT?
- Interfaz de Usuario: ¿La interfaz de usuario es como la del Figma?

## Nota

Este proyecto proporciona una oportunidad para demostrar tus habilidades en el desarrollo full stack y la implementación de sistemas de autenticación seguros. Asegúrate de seguir las mejores prácticas y de proporcionar una aplicación funcional y bien documentada. ¡Buena suerte!
