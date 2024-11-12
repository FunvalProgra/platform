---
title: 'News App'
date: 2024-11-12T11:35:29-05:00
draft: false
showPagination: false
---

"News App" es una aplicación web frontend desarrollada con **Next.js** y **TailwindCSS** que permite a los usuarios estar al tanto de las noticias y eventos más recientes a nivel mundial. La aplicación consume la API gratuita de **[News API](https://newsapi.org/docs/get-started)** para obtener datos en tiempo real sobre titulares, noticias populares y artículos de búsqueda. Los usuarios pueden explorar noticias filtradas por país, categoría, y realizar búsquedas personalizadas para encontrar artículos de interés. La interfaz está diseñada para ser moderna, responsive y fácil de usar, adaptándose a diferentes dispositivos y resoluciones.

## Tecnologías Utilizadas

- **Framework:** Next.js (para estructura del proyecto, rutas, y optimización de carga).
- **Estilo:** TailwindCSS (para diseño responsive y estilizado).
- **Fetch API o Axios:** Para realizar las peticiones HTTP.
- **No Backend Adicional:** Todas las peticiones se realizan directamente desde el frontend.

## API Utilizada

La aplicación hará uso de **[News API](https://newsapi.org/docs/get-started)**. Se utilizarán los siguientes endpoints:

1. **Top Headlines Endpoint:**

   - URL: `https://newsapi.org/v2/top-headlines`
   - Parámetros relevantes:
     - `country`: Filtra titulares por país (ejemplo: `us`, `ar`, `mx`).
     - `category`: Filtra titulares por categoría (ejemplo: `business`, `technology`, `sports`).
     - `apiKey`: Clave de API gratuita (requerida).

2. **Everything Endpoint:**

   - URL: `https://newsapi.org/v2/everything`
   - Parámetros relevantes:
     - `q`: Palabra clave para búsqueda (ejemplo: `climate change`, `AI`).
     - `sortBy`: Ordena resultados (`relevancy`, `popularity`, `publishedAt`).
     - `apiKey`: Clave de API gratuita (requerida).

3. **Sources Endpoint:**
   - URL: `https://newsapi.org/v2/sources`
   - Parámetros relevantes:
     - `language`: Filtra fuentes por idioma (`en`, `es`, `fr`).
     - `country`: Filtra fuentes por país.
     - `apiKey`: Clave de API gratuita (requerida).

## Funcionalidades Detalladas

1. **Página de Inicio - Titulares Recientes**

   - Mostrar una lista de titulares utilizando el endpoint **Top Headlines**.
   - Mostrar cada noticia en un componente tipo card que incluya:
     - Imagen destacada.
     - Título del artículo.
     - Breve descripción.
     - Fuente y fecha de publicación.
   - Botón para "Leer Más" que redirige al artículo original en una nueva pestaña.

2. **Barra de Búsqueda de Noticias**

   - Permitir búsqueda dinámica de noticias utilizando el endpoint **Everything**.
   - Mostrar resultados mientras el usuario escribe.
   - Filtrar los resultados por relevancia o fecha de publicación.

3. **Filtrado Avanzado de Noticias**

   - **Filtrar por País:**
     - Dropdown con una lista de países (ejemplo: `us`, `ar`, `gb`, `es`).
     - Utilizar el parámetro `country` en el endpoint **Top Headlines** para mostrar noticias del país seleccionado.
   - **Filtrar por Categoría:**
     - Dropdown o botones para seleccionar categorías como `business`, `health`, `technology`, `sports`.
   - **Filtrar por Fuente:**
     - Dropdown dinámico que se llena utilizando el endpoint **Sources**, mostrando fuentes disponibles según el idioma y país seleccionado.

4. **Vista Detallada de Noticias**

   Al hacer clic en una noticia, se mostrará una vista ampliada con:

   - Imagen en tamaño completo.
   - Título, subtítulo, y descripción completa del artículo.
   - Fecha de publicación, autor (si está disponible), y enlace al artículo completo.

5. **Modo Oscuro/Claro**

   - Implementar un toggle para alternar entre modo oscuro y claro usando TailwindCSS.
   - Guardar la preferencia del usuario en `localStorage`.

6. **Paginación**

   - Mostrar un máximo de 10 noticias por página para evitar sobrecargar la API.
   - Implementar paginación utilizando el parámetro `page` en las llamadas a la API.

7. **Manejo de Errores y Validaciones**

   - Mostrar mensajes claros al usuario en caso de error al realizar la petición (por ejemplo, si se supera el límite de peticiones diarias).
   - Validar entradas en el campo de búsqueda para evitar consultas vacías.
   - Mostrar un mensaje amigable si no se encuentran resultados.

8. **Optimización de Carga con Next.js**
   - Implementar `Image` de Next.js para manejar imágenes de forma optimizada.

## Lista de Países Disponibles para Filtrado

- Estados Unidos (`us`)
- Argentina (`ar`)
- México (`mx`)
- España (`es`)
- Reino Unido (`gb`)
- Francia (`fr`)
- Alemania (`de`)
- Italia (`it`)

## Consideraciones

- La versión gratuita de **News API** permite hasta **100 solicitudes por día**, así que es fundamental gestionar las peticiones de manera eficiente.
- La clave de API no debe estar expuesta en el código fuente al desplegar la aplicación. Utilizar variables de entorno (`.env.local`) en Next.js para almacenar la clave.
- La aplicación debe ser **completamente responsive**, proporcionando una experiencia fluida tanto en dispositivos móviles como de escritorio.

## Ideas para Milla Extra

- Implementar un componente de **Loading** mientras se cargan las noticias.
- Añadir un botón de **Guardar Noticias** que permita marcar artículos como favoritos utilizando `localStorage`.
