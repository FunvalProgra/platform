---
title: "Enrutamiento en Express"
date: 2024-02-08T11:22:23-05:00
draft: false
showPagination: false
---

Express.js es un framework web para Node.js que simplifica el proceso de construir aplicaciones web y APIs. Una de las características fundamentales de Express es su sistema de enrutamiento, que permite definir cómo se manejan las solicitudes HTTP entrantes. En este artículo, exploraremos en detalle cómo funciona el enrutamiento en Express, centrándonos en los métodos HTTP y las rutas.

## Métodos HTTP

Los métodos HTTP, también conocidos como verbos HTTP, especifican la acción que se debe realizar en un recurso determinado. En Express, podemos manejar diferentes métodos HTTP utilizando métodos específicos proporcionados por el enrutador.

### GET

El método `GET` se utiliza para solicitar datos de un recurso específico. En Express, podemos manejar las solicitudes `GET` utilizando el método `get()` del enrutador. Por ejemplo:

```javascript
app.get("/usuarios", (req, res) => {
  // Lógica para recuperar y enviar datos de usuarios
  res.send("Lista de usuarios");
});
```

En este ejemplo, cuando se recibe una solicitud `GET` en la ruta `/usuarios`, Express ejecutará la función de devolución de llamada proporcionada y enviará la respuesta "Lista de usuarios" al cliente.

### POST

El método `POST` se utiliza para enviar datos a un servidor para crear un nuevo recurso. En Express, podemos manejar las solicitudes `POST` utilizando el método `post()` del enrutador. Por ejemplo:

```javascript
app.post("/usuarios", (req, res) => {
  // Lógica para crear un nuevo usuario
  res.status(201).send("Usuario creado correctamente");
});
```

En este ejemplo, cuando se recibe una solicitud `POST` en la ruta `/usuarios`, Express ejecutará la función de devolución de llamada proporcionada y enviará la respuesta "Usuario creado correctamente" al cliente con un código de estado `201` que indica que el recurso se ha creado con éxito.

### PUT

El método `PUT` se utiliza para actualizar un recurso existente en el servidor. En Express, podemos manejar las solicitudes `PUT` utilizando el método `put()` del enrutador. Por ejemplo:

```javascript
app.put("/usuarios/:id", (req, res) => {
  const userId = req.params.id;
  // Lógica para actualizar el usuario con el ID proporcionado
  res.send(`Usuario con ID ${userId} actualizado correctamente`);
});
```

En este ejemplo, cuando se recibe una solicitud `PUT` en la ruta `/usuarios/:id`, Express ejecutará la función de devolución de llamada proporcionada y enviará la respuesta indicando que el usuario con el ID especificado se ha actualizado correctamente.

### DELETE

El método `DELETE` se utiliza para eliminar un recurso existente en el servidor. En Express, podemos manejar las solicitudes `DELETE` utilizando el método `delete()` del enrutador. Por ejemplo:

```javascript
app.delete("/usuarios/:id", (req, res) => {
  const userId = req.params.id;
  // Lógica para eliminar el usuario con el ID proporcionado
  res.send(`Usuario con ID ${userId} eliminado correctamente`);
});
```

En este ejemplo, cuando se recibe una solicitud `DELETE` en la ruta `/usuarios/:id`, Express ejecutará la función de devolución de llamada proporcionada y enviará la respuesta indicando que el usuario con el ID especificado se ha eliminado correctamente.

## Rutas

Las rutas en Express definen cómo se procesan las solicitudes entrantes. Una ruta puede contener una combinación de texto y parámetros variables que coincidan con la URL solicitada.

### Rutas Básicas

Las rutas básicas en Express son cadenas de texto que coinciden exactamente con la URL solicitada. Por ejemplo:

```javascript
app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi aplicación!");
});
```

En este ejemplo, cuando se recibe una solicitud `GET` en la ruta raíz (`/`), Express enviará la respuesta "¡Bienvenido a mi aplicación!" al cliente.

### Rutas con Parámetros

Las rutas pueden contener parámetros variables que se capturan y pueden ser utilizados en la lógica de la aplicación. Por ejemplo:

```javascript
app.get("/usuarios/:id", (req, res) => {
  const userId = req.params.id;
  // Lógica para recuperar y enviar datos del usuario con el ID proporcionado
  res.send(`Detalles del usuario con ID ${userId}`);
});
```

En este ejemplo, la ruta `/usuarios/:id` captura el ID del usuario de la URL solicitada, que luego puede ser utilizado para recuperar los datos del usuario correspondiente.

## Métodos de Respuesta

Express proporciona varios métodos de respuesta para enviar datos al cliente, incluyendo `res.send()`, `res.status()`, y `res.json()`.

- `res.send()`: Este método envía una respuesta de cualquier tipo (texto, HTML, JSON, etc.) al cliente.
- `res.status()`: Este método establece el código de estado de la respuesta HTTP.
- `res.json()`: Este método envía una respuesta JSON al cliente.

## Conclusión

El enrutamiento en Express es una parte fundamental para manejar las solicitudes HTTP entrantes en una aplicación Node.js. Mediante el uso de métodos HTTP y rutas, podemos crear APIs robustas y flexibles que respondan a las necesidades de nuestros usuarios de manera eficiente. Además, los métodos de respuesta proporcionados por Express nos permiten enviar datos al cliente de forma clara y estructurada. Esperamos que este artículo haya proporcionado una comprensión sólida del enrutamiento en Express y cómo utilizarlo efectivamente en nuestras aplicaciones.

## Videos

Mira este video desde 00:21:22 hasta 01:12:12 minutos (ya está marcado).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/JmJ1WUoUIK4?start=1282&end=4332" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Mira este video desde 01:04:35 hasta 01:10:16 minutos (ya está marcado).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/YmZE1HXjpd4?start=3875&end=4216" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
