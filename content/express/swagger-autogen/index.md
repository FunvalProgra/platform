---
title: "Swagger Autogen"
date: 2024-02-09T17:19:09-05:00
draft: false
showPagination: false
---

Antes de poder utilizar Swagger-autogen en tu proyecto, primero debes instalarlo a través de npm, el gestor de paquetes de Node.js. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
npm install --save-dev swagger-autogen
```

Una vez instalado, podrás utilizar la funcionalidad de Swagger-autogen para generar automáticamente la documentación Swagger para tu API.

### Configuración del script `swagger.js`

El script `swagger.js` es una herramienta poderosa que utiliza Swagger-autogen para generar automáticamente la documentación Swagger basada en las rutas de nuestra API y la información proporcionada. A continuación, detallamos cómo configurar y ejecutar este script en tu proyecto:

```javascript
// swagger.js
const swaggerAutogen = require("swagger-autogen")();

// Información básica de la API
const doc = {
  info: {
    title: "My API",
    description: "Descripción de mi API",
  },
  host: "localhost:3000", // El host donde se sirve la API
};

// Rutas de la API que se documentarán
const outputFile = "./swagger-output.json"; // Ubicación del archivo de salida
const routes = ["./path/userRoutes.js", "./path/bookRoutes.js"]; // Rutas de los archivos de la API

/* NOTA: Si estás utilizando el enrutador express Router, debes pasar en el array 'routes' solo el archivo raíz donde comienza la ruta, como index.js, app.js, routes.js, etc. */

// Generación de la documentación Swagger
swaggerAutogen(outputFile, routes, doc);
```

### Ejecución del Script

Para ejecutar el script y generar la documentación Swagger, necesitamos agregar un script personalizado en el archivo `package.json` de nuestro proyecto. Aquí te mostramos cómo hacerlo:

```json
// package.json
{
  ...
  "scripts": {
    ...
    "swagger": "node ./swagger.js"
  }
}
```

Una vez que hayamos configurado el script en el archivo `package.json`, podemos ejecutar el siguiente comando en nuestra terminal:

```bash
npm run swagger
```

### Resultado

Después de ejecutar el comando anterior, el script `swagger.js` analizará las rutas de tu API, generará la documentación Swagger y la guardará en el archivo especificado (`swagger-output.json` en este caso). Ahora puedes acceder a este archivo para ver la documentación Swagger generada para tu API.

## Conclusiones

Mediante el uso de Swagger-autogen y el script `swagger.js`, hemos simplificado el proceso de generación de documentación Swagger para nuestras APIs desarrolladas en Express.js y Node.js. Ahora, con solo ejecutar un comando, podemos obtener una documentación Swagger completa y precisa, lo que facilita la comprensión y el uso de nuestra API por parte de otros desarrolladores. Este enfoque mejora la colaboración y la eficiencia en el desarrollo de software, lo que resulta en productos de mayor calidad y mejor documentados.

Aquí puedes leer cómo empezar a usarlo:

https://swagger-autogen.github.io/docs/getting-started/quick-start
