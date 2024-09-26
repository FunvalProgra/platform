---
title: 'Proyecto: Windbnb'
date: 2024-09-26T15:28:23-05:00
draft: false
showPagination: false
---

Desarrollar una aplicación web responsive que simule una plataforma de búsqueda de estancias estilo AirBnB, basada en el desafío "Windbnb" de DevChallenges. La aplicación deberá permitir a los usuarios buscar estancias filtradas por ciudad y número de huéspedes, y mostrar los resultados de manera dinámica.

## Requisitos del proyecto:

1. **Interfaz responsiva**:  
   La aplicación debe adaptarse perfectamente a todos los tamaños de pantalla, desde móviles hasta escritorio, utilizando **TailwindCSS** para el diseño y estilos.

2. **Tecnologías**:

   - **React**: Construir la interfaz de usuario.
   - **TailwindCSS**: Para crear una interfaz atractiva y moderna.
   - **Axios**: Para realizar peticiones HTTP a una API simulada o servidor externo.
   - **React Query**: Para la gestión eficiente de datos obtenidos mediante peticiones y manejo de estados de carga.
   - **Custom Hooks**: Implementar hooks personalizados para lógica reutilizable (ej. peticiones de datos o manejo de filtros).
   - **useContext** (si es necesario): Para gestionar de manera global ciertos estados o configuraciones de la aplicación, como filtros de búsqueda.

3. **Características**:

   - **Filtrado dinámico**: Los usuarios deben poder filtrar las estancias por:
     - Ciudad.
     - Número de huéspedes.
   - **Listado de estancias**: Mostrar un listado de las estancias disponibles basadas en los filtros seleccionados.
   - **Diseño modular**: Implementar componentes reutilizables y un diseño que facilite la escalabilidad del proyecto.

4. **Puntos clave**:
   - **Archivo `stays.json`**: Úsalo localmente para consumir los datos para la aplicación.
   - **Optimización de búsqueda**: El sistema debe poder actualizar los resultados en tiempo real cuando los filtros de búsqueda cambien.

## Recursos adicionales:

- Link del desafío: [Windbnb - DevChallenges](https://legacy.devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD)

## Entregables

- Link a tu repositorio de GitHub, el cual debe contener el código del proyecto. Además, debe incluir el link a la página desplegada en el apartado **"About"** del repositorio. Como se muestra a continuación:
  <img src="image.png" alt="Captura de pantalla" width="500px">
