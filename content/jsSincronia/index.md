---
title: "ASYNC AWAIT AXIOS"
date: 2023-08-03T18:32:03-05:00
draft: false
showPagination: false
---

## Async/await en JavaScript:

Async/await es una forma más moderna y legible de trabajar con operaciones asíncronas en JavaScript. Es una combinación de las palabras clave `async` y `await`. La declaración `async` se coloca antes de una función para indicar que dicha función contiene operaciones asíncronas y, por lo tanto, puede pausarse con `await`.

### Axios:

Axios es una biblioteca de JavaScript basada en promesas que facilita el envío de solicitudes HTTP desde el cliente al servidor y el manejo de las respuestas. Es muy popular debido a su facilidad de uso y su capacidad para funcionar tanto en navegadores como en entornos de servidor.

Ahora, veamos cómo utilizar async/await con Axios para realizar solicitudes HTTP:

#### Paso 1: Instalar Axios

Para comenzar, debemos instalar Axios en nuestro proyecto. Puedes hacer esto a través de npm (Node Package Manager) si estás trabajando en un entorno de Node.js o utilizando una herramienta de construcción de módulos como webpack o parcel si estás trabajando en un entorno de navegador.

```bash
# Si estás utilizando npm (Node.js)
npm install axios

# Si estás utilizando yarn (Node.js)
yarn add axios
```

#### Paso 2: Importar Axios

Una vez que hayas instalado Axios, puedes importarlo en tu código para comenzar a utilizarlo.

```javascript
// Si estás utilizando ES6 modules
import axios from 'axios';

// Si estás trabajando con CommonJS (Node.js)
const axios = require('axios');
```

#### Paso 3: Crear una función asincrónica con async/await

Vamos a crear una función asincrónica que utilizará Axios para hacer una solicitud GET a una API pública como ejemplo.

```javascript
async function getDataFromAPI() {
  try {
    const response = await axios.get('https://ejemplo.com/api/data');
    return response.data;
  } catch (error) {
    // Manejar errores aquí, como mostrar un mensaje de error o registrarlos
    console.error('Error al obtener los datos:', error);
    throw error; // Opcional: lanzar el error para que lo maneje la función que llame a esta
  }
}
```

#### Paso 4: Llamar a la función asincrónica

Ahora, puedes llamar a la función `getDataFromAPI()` en cualquier lugar de tu código, ya que está marcada como `async`. Cuando hagas esta llamada, la función pausará su ejecución en la línea que contiene `await`, esperando a que la solicitud HTTP se resuelva. Una vez que la solicitud esté completa, la función continuará su ejecución y devolverá los datos.

```javascript
async function fetchData() {
  try {
    const data = await getDataFromAPI();
    console.log('Datos obtenidos:', data);
  } catch (error) {
    // Manejar errores aquí, como mostrar un mensaje de error o registrarlos
    console.error('Error al obtener los datos:', error);
  }
}

fetchData();
```
{{< youtube 6O8ax3JYboc >}}

Puedes seguir profundizando en este tema consultando la documentación oficial de Axios y explorando más sobre las capacidades de async/await en JavaScript.

Referencias:
- Documentación oficial de Axios: https://axios-http.com/docs/intro
- Asynchronous programming in JavaScript (MDN Web Docs): https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
- Exploring async/await in JavaScript (MDN Web Docs): https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await