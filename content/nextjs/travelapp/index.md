---
title: 'Travel Explorer'
date: 2024-11-12T11:35:45-05:00
draft: false
showPagination: false
---

"Travel Explorer" es una aplicación web frontend creada con **Next.js** y **TailwindCSS** que permite a los usuarios buscar vuelos y hoteles en tiempo real utilizando la API gratuita de **[Amadeus](https://developers.amadeus.com/)**. La aplicación está diseñada para ayudar a los viajeros a planificar sus viajes de manera eficiente, brindándoles acceso a información detallada sobre vuelos y opciones de alojamiento. Con una interfaz intuitiva y moderna, la aplicación facilita la búsqueda, comparación y visualización de resultados para que los usuarios encuentren la mejor opción para sus necesidades.

## Tecnologías Utilizadas

- **Framework:** Next.js (para estructura, rutas y optimización de carga).
- **Estilo:** TailwindCSS (para diseño responsive y estilizado).
- **Fetch API o Axios:** Para realizar las peticiones HTTP a la API de Amadeus.
- **No Backend Adicional:** Todas las peticiones se manejarán directamente desde el frontend.

## API Utilizada

La aplicación utilizará la **[API de Amadeus](https://developers.amadeus.com/)**, aprovechando los endpoints gratuitos disponibles en el plan de prueba:

1. **Flight Offers Search Endpoint:**

   - URL: `https://test.api.amadeus.com/v2/shopping/flight-offers`
   - Permite buscar ofertas de vuelos en tiempo real.
   - **Parámetros relevantes:**
     - `originLocationCode`: Código del aeropuerto de origen (ejemplo: `JFK`, `LIM`).
     - `destinationLocationCode`: Código del aeropuerto de destino.
     - `departureDate`: Fecha de salida (formato: `YYYY-MM-DD`).
     - `adults`: Número de pasajeros adultos.
     - `max`: Número máximo de resultados a devolver.
     - `apiKey`: Clave de API gratuita (requerida).

2. **Hotel Search Endpoint:**

   - URL: `https://test.api.amadeus.com/v2/shopping/hotel-offers`
   - Permite buscar ofertas de hoteles en una ubicación específica.
   - **Parámetros relevantes:**
     - `cityCode`: Código de la ciudad (ejemplo: `NYC`, `MAD`, `PAR`).
     - `checkInDate`: Fecha de check-in (formato: `YYYY-MM-DD`).
     - `checkOutDate`: Fecha de check-out.
     - `adults`: Número de adultos para la reserva.
     - `radius`: Radio de búsqueda desde el centro de la ciudad.
     - `apiKey`: Clave de API gratuita (requerida).

3. **Airport & City Search Endpoint:**
   - URL: `https://test.api.amadeus.com/v1/reference-data/locations`
   - Permite buscar códigos de aeropuerto y ciudad.
   - **Parámetros relevantes:**
     - `keyword`: Palabra clave para búsqueda (ejemplo: nombre de ciudad o aeropuerto).
     - `subType`: Tipo de búsqueda (`AIRPORT`, `CITY`).
     - `apiKey`: Clave de API gratuita (requerida).

## Funcionalidades Detalladas

1. **Búsqueda de Vuelos**

   - Formulario para que los usuarios ingresen:
     - **Aeropuerto de origen** y **aeropuerto de destino**.
     - **Fecha de salida** y **número de pasajeros**.
   - Mostrar resultados de búsqueda en una tabla o lista con información relevante:
     - Aerolínea.
     - Hora de salida y llegada.
     - Duración del vuelo.
     - Precio total.
   - Botón para "Ver Detalles", que muestra información adicional del vuelo y un enlace para completar la reserva en una nueva pestaña.

2. **Búsqueda de Hoteles**

   - Formulario para buscar hoteles por:
     - **Código de ciudad** (por ejemplo, `NYC` para Nueva York).
     - **Fechas de check-in y check-out**.
     - **Número de adultos**.
   - Mostrar resultados con información de los hoteles:
     - Nombre del hotel.
     - Dirección.
     - Precio por noche.
     - Imagen destacada del hotel.
     - Botón para "Reservar", que redirige al sitio web del hotel para completar la reserva.

3. **Búsqueda de Códigos de Aeropuertos y Ciudades**

   - Barra de búsqueda para ayudar a los usuarios a encontrar códigos de aeropuerto o ciudad mientras escriben.
   - Mostrar sugerencias dinámicas basadas en la entrada del usuario utilizando el endpoint **Locations**.

4. **Modo Oscuro/Claro**

   - Botón para alternar entre modo oscuro y claro usando TailwindCSS.
   - Guardar la preferencia del usuario en `localStorage`.

5. **Paginación y Filtrado Avanzado**

   - Implementar paginación para mostrar un máximo de 10 resultados por página, evitando sobrecargar la API.
   - Permitir filtrar los resultados por:
     - **Precio** (de menor a mayor o viceversa).
     - **Duración del vuelo** (solo para la búsqueda de vuelos).
     - **Número de estrellas del hotel** (solo para la búsqueda de hoteles).

6. **Manejo de Errores y Mensajes al Usuario**

   - Mostrar mensajes de error claros si ocurre un problema con la API (por ejemplo, límite de peticiones alcanzado).
   - Validar todos los campos de los formularios antes de hacer las peticiones a la API.

7. **Optimización con Next.js**
   - Implementar la carga optimizada de imágenes utilizando el componente `Image` de Next.js.

## Consideraciones

- El plan gratuito de **Amadeus API** permite hasta **200 solicitudes por mes**, por lo que es importante manejar eficientemente las peticiones y evitar consultas innecesarias.
- La clave de API debe protegerse utilizando variables de entorno (`.env.local`) para evitar exponerla en el código fuente al desplegar la aplicación.
- La aplicación debe ser **100% responsive**, proporcionando una experiencia óptima en dispositivos móviles y desktop.

## Milla Extra

- Implementar un componente de **Loading** para indicar al usuario que los resultados están siendo cargados.
- Añadir gráficos de precios para visualizar la variación del costo de los vuelos durante diferentes días.
- Crear un mapa interactivo que muestre la ubicación del hotel utilizando la API de **Google Maps**.
- Añadir una funcionalidad de **notificaciones** para alertar a los usuarios sobre ofertas especiales o cambios en los precios.
