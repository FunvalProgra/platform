---
title: "Head, Multimedia y Selectores"
date: 2023-01-25T08:07:54-05:00
draft: false
showPagination: false
---

## Head

El **elemento HTML** `<head>` provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos. Es importante diferenciar este elemento del elemento `header` el cual sirve como etiqueta semántica para contener el contenido de encabezado de nuestra página web.

Siempre se escribe antes de la etiqueta `body`, como hijo de la etiqueta `html`:

```htm
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

Dentro de esta etiqueta no usamos atributos y tampoco escribimos contenido en él. Sirve solo para contener otras etiquetas, dependiendo que necesitemos hacer:

- title
- script
- noscript
- link
- style
- base
- meta

### La etiqueta `title`

La etiqueta `title` determina el título de la página. El título se muestra en el navegador, y es especialmente importante ya que es uno de los factores clave para la optimización de motores de búsqueda (SEO).

### La etiqueta `script`

Esta etiqueta se utiliza para añadir JavaScript a la página.

Puede incluirlo en línea, usando una etiqueta de apertura, el código JavaScript y luego la etiqueta de cierre:

```html
<script>
  ..some JS
</script>
```
O bien, puede cargar un archivo JavaScript externo mediante el atributo `src`:

```html
<script src="file.js"></script>
```

>El atributo `type` de forma predeterminada se establece en `text/javascript`, por lo que es completamente opcional.


ay algo muy importante que saber sobre esta etiqueta.

A veces, esta etiqueta se usa en la parte inferior de la página, justo antes de la etiqueta de cierre `</body>`. ¿Por qué? Por razones de rendimiento.

La carga de secuencias de comandos bloquea de forma predeterminada la representación de la página hasta que la secuencia de comandos se analiza y se carga.

Al colocarlo en la parte inferior de la página, la secuencia de comandos se carga y ejecuta después de que toda la página ya se analizó y se cargó, lo que brinda una mejor experiencia al usuario que al mantenerlo en la etiqueta `head`.

Esto puede ser considerado una mala práctica. Es mejor dejar vivir `script` dentro de la etiqueta `head`.

En JavaScript moderno, tenemos una alternativa que tiene más rendimiento que mantener el script en la parte inferior de la página: el atributo `defer`. Este es un ejemplo que carga un archivo `file.js`, relativo a la URL actual:

```javascript
<script defer src="file.js"></script>
```

Este es el escenario que desencadena la ruta más rápida a una página de carga rápida y JavaScript de carga rápida.

### La etiqueta `link`

La etiqueta `link` se utiliza para establecer relaciones entre un documento y otros recursos.

Se utiliza principalmente para vincular un archivo CSS externo para cargarlo.

Este elemento no tiene etiqueta de cierre.

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <link href="file.css" rel="stylesheet" />
    ...
  </head>
  ...
</html>
```

El atributo `media` permite la carga de diferentes hojas de estilo dependiendo de las capacidades del dispositivo:

```html
<link href="file.css" media="screen" rel="stylesheet" />
<link href="print.css" media="print" rel="stylesheet" />
```

O podemos asociar un favicon usando:

```html
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/assets/apple-touch-icon.png"
/>

<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/assets/favicon-32x32.png"
/>

<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/assets/favicon-16x16.png"
/>
```

### La etiqueta `style`

Esta etiqueta se puede usar para agregar estilos al documento, en lugar de cargar una hoja de estilo externa:

```css
<style>
  .some-css {
  }
</style>
```

### La etiqueta `meta`

Las metaetiquetas realizan una variedad de tareas y son muy, muy importantes, especialmente para el SEO. Los elementos `meta` solo tienn una etiqueta inicial. La etiqueta más básica es la metaetiqueta `description`:

```html
<meta name="description" content="A nice page" />
```

_Google_ podría usar esto para generar la descripción de la página en sus páginas de resultados, si encuentra que describe mejor la página que el contenido de la página (no me preguntes cómo).

La etiqueta meta `charset` se utiliza para establecer la codificación de caracteres de la página `utf-8` en la mayoría de los casos:

```html
<meta charset="utf-8" />
```

La metaetiqueta `viewport` se usa para decirle al navegador que establezca el ancho de la página en función del ancho del dispositivo.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Estas son las meta etiquetas más comunes pero existen muchas más de las cuales puedes seguir investigando si tienes curiosidad sobre este tema. Te dejo un link de referencia.

[Metadatos en HTML - MDN web docs](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

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

### Audio

LA etiqueta `audio` le permite incrustar contenido de audio en sus páginas HTML.

Este elemento puede transmitir audio, tal vez usando un micrófono a través de `getUserMedia()` , o puede reproducir una fuente de audio a la que hace referencia con el atributo `src`:

```html
<audio src="file.mp3"></audio>
```

Por defecto, el navegador no muestra ningún control para este elemento. Lo que significa que el audio se reproducirá solo si se establece en reproducción automática (más sobre esto más adelante) y el usuario no puede ver cómo detenerlo o controlar el volumen o moverse a través de la pista.

Para mostrar los controles integrados, puede agregar el atributo controls:

```html
<audio src="file.mp3" controls></audio>
```

Los controles pueden tener una máscara personalizada.

Puede especificar el tipo MIME del archivo de audio utilizando el atributo `type`. Si no está configurado, el navegador intentará determinarlo automáticamente:

```html
<audio src="file.mp3" controls type="audio/mpeg"></audio>
```

Un archivo de audio por defecto no se reproduce automáticamente. Agregue el atributo autoplay para reproducir el audio automáticamente:

```html
<audio src="file.mp3" controls autoplay></audio>
```

>Nota: los navegadores móviles no permiten la reproducción automática

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

## Selectoes

Hace poco vimos como funciona la especificidad en CSS y algunos selectores que podemos usar. Ahora repasemos brevemente como funciona la especificidad con esta imagen:

![especificidad](../../dia2/estiloscss/especificidad.png)

Como vimos tambien en ese momento, podemos combinar los selectores segun necesitemos, por ejemplo:

```css
.animal.perro {
  background-color: green;
}
```

Cuando tenemos esta situación, debemos tener en cuenta que la especificidad se suma, lo cual puede afectar la propiedad que se aplica a un elemento, por ejemplo, si tenemos los siguientes elementos:

```html
<p class="animal perro">Firulais</p>
```

```css
p {
  background-color: red;
}

.animal {
  background-color: green;
}
```

El primer Selector tiene una especificidad de 0.0.1 (Ver la tabla superior) y el de clase tiene una especificidad de 0.1.0 por lo tanto, se aplicará `background-color: green`. Ahora vamos a añadir un selector de clase al primer selector:

```css
p.perro {
  background-color: red;
}

.animal {
  background-color: green;
}
```

Ahora el primero tiene una especificidad de 0.1.1 y el segundo de 0.1.0 por lo tanto, se aplicará `background-color: red`.

> Si bien es cierto los estilos en CSS se aplican en cascada, cuando tenemos un conflicto entre dos propiedades que pueden afectar al mismo elemento, la especificidad determina cual de los dos estilos se aplica al elemento, aplicando el que tenga una especificidad mayor.

Si deseamos que el color verde se aplique al elemento, entonces podemos mejorar su especificidad:

```css
p.perro {
  background-color: red;
}

.animal.perro {
  background-color: green;
}
```

Ahora el primer selector tiene especificidad de 0.1.1 y el segundo de 0.2.0, por lo que se aplicará `background-color: green`.

Cuando tenemos un proyecto pequeño probablemente no tengamos problemas con la especificidad, pero a medida que nuestro proyecto crece, la forma en que seleccionamos elementos se vuelve mas compleja, podríamos llegar a tener algo como esto:

```css
.container > .animal.perro ~ a.link{ /* 0.4.1 */
  color: red;
}

.container > a#bot.link.green{ /* 1.3.1 */
  color: green;
}

```

Es aquí donde podemos aplicar la especificidad para determinar correctamente cual es el estilo que se está aplicando y como corregirlo de tal forma en la que no afecte el resto de elementos que estoy seleccionando.

Para que podamos comprender la manera correcta de aplicar los selectores, repasemos los [distintos selectores](../../dia2/estiloscss/#más-selectores) que encontramos en CSS 🧐.