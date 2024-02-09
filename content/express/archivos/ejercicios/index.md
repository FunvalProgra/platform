---
title: "Ejercicios: Carga de archivos"
date: 2024-02-09T13:42:20-05:00
draft: false
showPagination: false
---

¡Claro! Aquí tienes dos ejercicios detallados para crear una API que cargue archivos usando Express y Multer. Estos ejercicios están diseñados para ser implementados en un entorno de desarrollo Node.js y se pueden probar fácilmente utilizando Postman para enviar solicitudes a la API.

### Ejercicio 1: Crear una API para cargar imágenes de perfil de usuario

#### Especificaciones:

1. Crear una API utilizando Express que permita a los usuarios cargar imágenes de perfil.
2. Utilizar Multer como middleware para manejar la carga de archivos en la ruta '/uploadProfile'.
3. Almacenar las imágenes de perfil en un directorio local en el servidor.
4. Implementar validaciones para asegurar que solo se puedan cargar archivos de imagen (por ejemplo, JPEG, PNG) y que no excedan un tamaño máximo especificado.
5. Devolver una respuesta adecuada después de que se haya cargado la imagen, indicando el éxito o el fallo de la carga.

#### Puntos a considerar:

- Configurar Multer para almacenar los archivos en un directorio específico en el servidor.
- Utilizar las opciones de Multer para filtrar y validar los archivos subidos.
- Implementar manejo de errores para casos donde la carga de archivos falle debido a diversas razones, como el tipo de archivo incorrecto o el tamaño excedido.

### Ejercicio 2: Crear una API para cargar archivos de documentos

#### Especificaciones:

1. Desarrollar una API utilizando Express que permita a los usuarios cargar archivos de documentos.
2. Utilizar Multer como middleware para manejar la carga de archivos en la ruta '/uploadDocument'.
3. Almacenar los archivos de documentos en un directorio local en el servidor.
4. Implementar restricciones de seguridad para evitar la carga de archivos maliciosos, como la ejecución de scripts o la carga de archivos de gran tamaño que puedan causar una denegación de servicio (DoS).
5. Devolver una respuesta adecuada después de que se haya cargado el archivo de documento, indicando el éxito o el fallo de la carga.

#### Puntos a considerar:

- Configurar Multer para almacenar los archivos en un directorio específico en el servidor.
- Implementar validaciones de seguridad, como la comprobación del tipo MIME y la limitación del tamaño máximo de archivo.
- Manejar adecuadamente los errores y devolver respuestas JSON claras y descriptivas en caso de fallos durante la carga de archivos.

### Notas adicionales:

- Asegúrate de instalar y configurar correctamente Multer en tu proyecto antes de comenzar a implementar los ejercicios.
- Utiliza Postman para enviar solicitudes POST a las rutas de carga de archivos y prueba la funcionalidad de la API cargando varios tipos de archivos.
- Realiza pruebas exhaustivas para garantizar que la API maneje correctamente diferentes escenarios, como archivos grandes, tipos de archivo no permitidos y situaciones de error.

Si estas luchando mucho tiempo con estos ejercicios, aquí te dejaré una posible solución, pero recuerda que no debes ver la solución hasta que hayas hecho tu mejor esfuerzo. Además, puede que tú hayas pensado una solución ligeramente diferente a la que te propondremos. Esto es debido a que existen muchas formas de resolver un mismo asunto. Sin embargo, esto te puede servir de guía.

[Ver solución](../solucion/)
