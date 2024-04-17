---
title: 'Sockets en Express'
date: 2024-04-17T12:12:38-05:00
draft: false
showPagination: false
---

En el panorama actual del desarrollo web, las aplicaciones en tiempo real están en alta demanda. Los sockets proporcionan una solución eficiente para la comunicación bidireccional entre clientes y servidores en tiempo real. En este artículo, nos enfocaremos en cómo integrar sockets en aplicaciones Express utilizando la biblioteca Socket.io, aprovechando los beneficios de los módulos ES para una mejor estructura de código y mantenibilidad.

## Fundamentos de Sockets en Express:

Los sockets permiten una comunicación bidireccional entre clientes y servidores en tiempo real. Socket.io es una biblioteca JavaScript que simplifica la implementación de sockets, proporcionando una capa de abstracción sobre los WebSockets nativos del navegador. En el contexto de Express, podemos utilizar Socket.io para integrar fácilmente la funcionalidad de sockets en nuestras aplicaciones web.

## Configuración Básica con Módulos ES:

La configuración inicial con módulos ES es sencilla. Primero, instalamos las dependencias necesarias a través de npm:

```bash
npm install socket.io
```

Luego, en el servidor Express, importamos y configuramos Socket.io:

```javascript
// server.mjs
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Resto del código de configuración...
```

## Comunicación Bidireccional en Tiempo Real:

Una vez configurado, podemos establecer una comunicación bidireccional entre el cliente y el servidor. Por ejemplo, para enviar y recibir mensajes entre el cliente y el servidor:

```javascript
// server.mjs
io.on('connection', socket => {
  console.log('Cliente conectado');

  socket.emit('mensajeDesdeServidor', '¡Hola, cliente!');

  socket.on('mensajeDesdeCliente', mensaje => {
    console.log('Mensaje del cliente:', mensaje);
    socket.emit('mensajeDesdeServidor', 'Mensaje recibido por el servidor');
  });
});

// client.mjs
import { io } from 'socket.io-client';

const socket = io();

socket.on('mensajeDesdeServidor', mensaje => {
  console.log('Mensaje del servidor:', mensaje);

  socket.emit('mensajeDesdeCliente', '¡Hola, servidor!');
});
```

## Recursos

Sigue el siguiente tutorial de inicio a fin:

{{< youtube WpbBhTx5R9Q >}}
