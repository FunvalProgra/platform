---
title: "Módulo HTTP"
date: 2024-02-06T15:35:16-05:00
draft: false
showPagination: false
---

Node.js es reconocido por su capacidad para crear servidores web eficientes y escalables. En su núcleo, el módulo HTTP es una parte esencial de esto, ya que permite manejar solicitudes y respuestas HTTP. En este artículo, exploraremos el módulo HTTP de Node.js con un enfoque en el uso de ES Modules para la importación y explicaremos cómo crear un servidor HTTP básico.

## ¿Qué es el módulo HTTP en Node.js?

El módulo HTTP en Node.js proporciona funcionalidades para trabajar con protocolos HTTP. Con él, podemos crear tanto servidores HTTP como realizar solicitudes HTTP a otros servidores. Es una herramienta fundamental para construir aplicaciones web y API en Node.js.

## Creación de un servidor HTTP con ES Modules

Para empezar, necesitamos tener Node.js instalado en nuestro sistema. Luego, podemos crear un servidor HTTP básico utilizando el módulo HTTP y la sintaxis de ES Modules. Aquí tienes un ejemplo:

```javascript
// server.js
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("¡Hola, mundo!\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

En este código, importamos el módulo HTTP utilizando la sintaxis de ES Modules. Luego, creamos un servidor utilizando el método `createServer`, que toma una función de devolución de llamada que se ejecuta cada vez que se recibe una solicitud HTTP. En esta función, configuramos la respuesta con un código de estado 200 y un tipo de contenido de texto plano, y luego enviamos el mensaje "¡Hola, mundo!" como cuerpo de la respuesta utilizando el método `end`.

Finalmente, especificamos el puerto en el que queremos que el servidor escuche las solicitudes utilizando el método `listen`, y mostramos un mensaje en la consola indicando que el servidor está en funcionamiento.

## Ejecución del servidor

Para ejecutar el servidor, guarda el código en un archivo llamado `server.js` y ejecuta el siguiente comando en tu terminal:

```
node server.js
```

Esto iniciará el servidor y mostrará un mensaje indicando que está corriendo en `http://localhost:3000`. Ahora puedes abrir tu navegador web y visitar esa dirección para ver el mensaje "¡Hola, mundo!".

## Conclusión

En resumen, el módulo HTTP de Node.js es una herramienta poderosa para construir servidores web y manejar solicitudes HTTP. Con la integración de ES Modules, podemos importar y utilizar este módulo de manera moderna y eficiente. Espero que este artículo te haya proporcionado una comprensión más profunda de cómo funciona el módulo HTTP en Node.js y cómo puedes utilizarlo en tus propios proyectos.

## Video

Mira este video desde 01:50:35 hasta 02:09:03 minutos

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/i3OdKwuBjeM?start=6635&end=7743" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Mira este video desde 02:00:34 hasta 02:07:00 minutos

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/yB4n_K7dZV8?start=7234&end=7620" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
