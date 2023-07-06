---
title: "Practica Calificada 4"
date: 2023-03-12T11:46:09-06:00
draft: false
showPagination: false
---

# Tarea: Lista de tareas

## Descripción:
Crea una aplicación de lista de tareas donde los usuarios puedan agregar nuevas tareas, marcarlas como completadas y eliminarlas. Utiliza React y el hook useState para implementar la funcionalidad de la lista de tareas.

## Instrucciones:

1. Configura un nuevo proyecto de React utilizando la herramienta de tu elección (Create React App, Parcel, etc.).

2. Crea un nuevo componente llamado `TodoApp` que será el componente principal de la aplicación.

3. En el componente `TodoApp`, utiliza el hook `useState` para crear una variable de estado llamada todos. Inicialízala como un array vacío.

4. Crea un formulario en el componente `TodoApp` que permita a los usuarios agregar nuevas tareas. El formulario debe contener un campo de texto para ingresar la tarea y un botón para agregarla.

5. Al enviar el formulario, utiliza el hook `useState` para actualizar el estado de todos y agregar la nueva tarea al array existente. Asegúrate de incluir un identificador único para cada tarea agregada.

6. Muestra la lista de tareas en la interfaz. Para cada tarea, muestra el texto de la tarea y un botón para marcarla como completada.

7. Al hacer clic en el botón de completar tarea, utiliza el hook `useState` para actualizar el estado de la tarea correspondiente y marcarla como completada.

8. Implementa estilos CSS para mejorar la apariencia de la lista de tareas. Puedes utilizar CSS puro o un framework como Bootstrap para esto.

9. Prueba la aplicación para asegurarte de que las tareas se agreguen correctamente y se marquen como completadas.

## Reto Extra (Opcional)

Añade la opcion de poder eliminar tareas de la lista.

## Entrega 
Recuerda subir un archivo PDF con los pantallazos de tu componente y el renderizado en el navegador.