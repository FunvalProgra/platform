---
title: "Head, Body y Estructura"
date: 2023-01-25T08:07:54-05:00
draft: false
showPagination: false
---

## Etiqueta `<Head>`

En el siguiente video aprenderás sobre la importancia de la etiqueta `<head>` dentro de un documento HTML.

{{< youtube P4VWghxIbX4 >}}

Estas son las meta etiquetas más comunes pero existen muchas más de las cuales puedes seguir investigando si tienes curiosidad sobre este tema. Te dejo un link de referencia.

[Metadatos en HTML - MDN web docs](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

## Etiqueta `<Body>`

{{< youtube vBe4Iaatwho >}}

## Estructura y Anatomía HTML 

{{< youtube DxumDNXRtpI >}}

## Multimedia en HTML

Dentro de HTML podemos incrustas archivos multimedia como imagenes, audio y video. En esta sección aprenderemos a insertar cada uno de ellas.

### Imágenes

Las imágenes se pueden mostrar usando la etiqueta `img`. Esta etiqueta acepta un atributo `src`, que usamos para establecer la fuente de la imagen:

```html
<img src="image.png" />
```

Podemos utilizar un amplio conjunto de imágenes. Los más comunes son PNG, JPEG, GIF, SVG y, más recientemente, WebP. El estándar HTML requiere que un atributo `alt` esté presente para describir la imagen. Esto lo utilizan los lectores de pantalla y también los bots de los motores de búsqueda:

```html
<img src="dog.png" alt="A picture of a dog" />
```

Puede configurar los atributos `width` y `height` para establecer el espacio que ocupará el elemento, de modo que el navegador pueda tenerlo en cuenta y no cambie el diseño cuando esté completamente cargado. Toma un valor numérico, expresado en píxeles. Sin embargo, te recomendamos fuertemente modificar estos dos atributos desde CSS.

```html
<img src="dog.png" alt="A picture of a dog" width="300" height="200" />
```

### Video

Esta etiqueta le permite incrustar contenido de video en sus páginas HTML.

Este elemento puede transmitir video, usando una cámara web `getUserMedia()` o **WebRTC** , o puede reproducir una fuente de video a la que haga referencia usando el atributo src:

```html
<video src="file.mp4"></video>
```

De forma predeterminada, el navegador no muestra ningún control para este elemento, solo el video. Lo que significa que el video se reproducirá solo si está configurado para reproducción automática (más sobre esto más adelante) y el usuario no puede ver cómo detenerlo, pausarlo, controlar el volumen o saltar a una posición específica en el video.

Para mostrar los controles integrados, puede agregar el atributo controls:

```html
<video src="file.mp4" controls></video>
```

Puede especificar el tipo MIME del archivo de video usando el atributo `type`. Si no está configurado, el navegador intentará determinarlo automáticamente:

```html
<video src="file.mp4" controls type="video/mp4"></video>
```

Un archivo de video por defecto no se reproduce automáticamente. Agregue el atributo `autoplay` para reproducir el video automáticamente:

```html
<video src="file.mp4" controls autoplay></video>
```

El siguiente video explica como trabajar con cada uno de los conceptos multimedia que hemos aprendido hoy:

{{< youtube eflzJ6gNlsI >}}


## Aprendiendo con Práctica

Continua reforzando tu conocimiento de HTML y CSS siguiendo estos cursos:

[HTML - Aplicacion de fotos de gatos](https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app)

[CSS - Menú de Cafetería](https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/#learn-basic-css-by-building-a-cafe-menu)
