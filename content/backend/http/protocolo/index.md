---
title: "Introducción, Verbos y Códigos de Estado en HTTP"
date: 2023-08-30T15:49:55-05:00
draft: false
showPagination: false
---

En el vasto y siempre conectado mundo de la web, las interacciones entre aplicaciones y servidores son fundamentales para la transmisión de información. Aquí es donde entra en juego el Protocolo de Transferencia de Hipertexto (HTTP), un protocolo esencial que permite la comunicación entre los navegadores, aplicaciones y servidores. En este artículo, sumérgete en el mundo del HTTP, explora los verbos HTTP y los códigos de estado, y descubre cómo se entrelazan para formar la columna vertebral de la web moderna.

## Entendiendo el Protocolo HTTP

### ¿Qué es HTTP?

El Protocolo de Transferencia de Hipertexto (HTTP) es un protocolo de aplicación que define cómo los navegadores web, las aplicaciones y los servidores se comunican entre sí. Establece las reglas para solicitar y enviar información a través de la World Wide Web.

### Historia de HTTP

HTTP fue introducido por Tim Berners-Lee en 1989 y se convirtió en la base de la World Wide Web. La primera versión, HTTP/0.9, permitía solo solicitudes GET para transferir documentos HTML. Desde entonces, ha evolucionado a través de varias versiones hasta llegar a HTTP/2, que ofrece mejoras significativas en la velocidad y el rendimiento.

## Funcionamiento de HTTP

HTTP se basa en el modelo cliente-servidor. Cuando un cliente (navegador o aplicación) realiza una solicitud a un servidor, la solicitud es procesada y el servidor devuelve una respuesta. Las solicitudes y respuestas están formateadas en mensajes HTTP y se transmiten a través de la web.

## Los Verbos HTTP: Acciones en la Web

### ¿Qué son los Verbos en HTTP?

Los verbos en HTTP son métodos que indican qué acción se debe realizar en un recurso determinado. Cada verbo tiene un propósito específico y define la operación que se llevará a cabo en el recurso solicitado.

### Uso de los Verbos en HTTP

- **GET:** Obtiene datos de un recurso específico.
- **POST:** Crea un nuevo recurso.
- **PUT:** Actualiza un recurso existente.
- **DELETE:** Elimina un recurso.

## Los Códigos de Estado HTTP: Comunicación de Resultados

### ¿Qué son los Códigos de Estado?

Los códigos de estado son números de tres dígitos que indican el resultado de una solicitud HTTP. Proporcionan información sobre si la solicitud se realizó con éxito, si hubo un error o si se necesita tomar una acción adicional.

### Códigos de Estado Más Conocidos

- **200 OK:** Indica que la solicitud se realizó con éxito y que la respuesta contiene los datos solicitados.
- **404 Not Found:** Significa que el recurso solicitado no fue encontrado en el servidor.
- **500 Internal Server Error:** Indica un error en el servidor que impide que se complete la solicitud.

## Ejemplos Sencillos de Verbos y Códigos de Estado en Acción

### Ejemplo 1: Obtener Datos (GET)

Un cliente solicita información sobre un artículo:

```
GET /api/articulos/123
```

El servidor responde:

```
200 OK
{
  "id": 123,
  "titulo": "Introducción a HTTP",
  "contenido": "..."
}
```

### Ejemplo 2: Crear un Nuevo Recurso (POST)

Un cliente agrega un nuevo usuario:

```
POST /api/usuarios

{
  "nombre": "Ana",
  "edad": 30
}
```

El servidor responde:

```
201 Created
```

### Ejemplo 3: Actualizar un Recurso Existente (PUT)

Un cliente modifica los datos de un artículo:

```
PUT /api/articulos/123

{
  "titulo": "Introducción a HTTP y sus Verbos",
  "contenido": "..."
}
```

El servidor responde:

```
204 No Content
```

HTTP, con sus verbos y códigos de estado, forma el tejido conectivo de la web moderna. Los verbos permiten que las aplicaciones interactúen con recursos web, mientras que los códigos de estado comunican los resultados de esas interacciones. Comprender cómo funcionan los verbos y los códigos de estado es esencial para cualquier desarrollador y usuario de la web, ya que se encuentran en el corazón de cada clic, cada solicitud y cada respuesta en línea.

## Recursos

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/l2MihYAj0Iw?start=74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
