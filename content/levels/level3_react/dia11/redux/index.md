---
title: "Rutas API"
date: 2023-03-12T11:52:06-06:00
draft: false
showPagination: false
---

# Rutas API
Next.js provee una solución para construir APIs fácilmente en un entorno Serverless (Sin servidor), por lo que no tendremos que preocuparnos de pagar alojamiento de servidores para el back-end de nuestra aplicación.
Todos los archivos dentro de la carpeta pages/api serán tratados como endpoints de nuestra API en lugar de páginas.
Por ejemplo, si creamos un archivo pages/api/hola.js podremos acceder al mismo en la ruta: /api/hola y nos devolverá como respuesta un objeto json.

``` js
export default function manejador(req, res) {
  res.status(200).json({ texto: "Hola" });
}
pages/api/hola.js
```

Como puedes observar, para que este archivo funcione correctamente como API endpoint es necesario exportar una función manejador (handler) con los parámetros req y res.
Si queremos tener acceso a los diferentes métodos HTTP en nuestro manejador podemos usar req.method dentro del mismo, por ejemplo:

``` js
export default function manejador(req, res) {
  switch (req.method) {
    case "GET":
      // Nuestra lógica de código para el método GET...
      break;
    case "PATCH":
      // Nuestra lógica de código para el método PATCH...
      break;
    case "DELETE":
      // Nuestra lógica de código para el método DELETE...
      break;
    default:
      res.status(405).json({
        mensaje: `El método HTTP ${req.method} no esta disponible en esta ruta`,
      });
      break;
  }
}
```
Si ya estás familiarizado con Express.js probablemente encuentres muchas similitudes en cuanto a sintaxis.

## Blog Oficial de Next 
link : https://nextjs.org/docs/api-routes/introduction


# RUD de comentarios para un blog

Rutas:

    Crear comentario: POST /api/comment
    Actualizar comentario: PATCH /api/comment/:id
    Eliminar comentario: DELETE /api/comment/:id
    Obtener un comentario: GET /api/comment/:id
    Obtener todos los comentarios: GET /api/comment/


# video Api con Next. JS

{{< youtube k3Cxo1hHqBE >}}