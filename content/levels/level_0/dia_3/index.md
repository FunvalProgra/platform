---
title: "Día 3"
date: 2022-12-16T11:18:26-05:00 
draft: false
---

## Día 3 : Más estilos CSS

Hoy profundizaremos en los estilos de CSS. El siguiente video creado por el canal de youtube **Hola Mundo** explican de manera clara más estilos que debes tener en cuenta al momento de desarrollar para la web. Antes de ello, te menciono 3 formas comunes de escribir estilos CSS: inline, internal y external.

### Inline
Son los estilos CSS que se indican dentro del atributo `style` de la etiqueta HTML

```html
<p style="color: red;">Hola mundo</p>
```

### Internal
Son los estilos CSS que se colocan dentro de la etiqueta `<style>` ubicada dentro del head de la estructura HTML.

```html
<head>
  ...
  <style>
    p {
      color: red;
    }
  </style>
  ...
</head>
```

### External
La forma de escribir estos estilos es similar a **Internal** con la diferencia que se escriben dentro de un archivo `.css` aparte, el cual se une al archivo HTML por medio de la etiqueta `<link>`, de esta forma, los estilos serán aplicados aunque sean dos archivos distintos.

```html
<link rel="stylesheet" href="style.css"> 
<!-- Dentro  del atributo `href` indicamos 
la ruta del archivo CSS--> 
```

### CSS con Hola Mundo

En este tutorial, Puedes aprender desde el inicio hasta la seccion en la que aprendes de `background`(minuto 56:10). En caso sientas que puedes ir un poco más alla, puedes ir a la seccion siguiente donde se habla de `box model` (termina en 1:04:55) pero esta ultima no se incluirá dentro del examen.

{{< youtube wZniZEbPAzk >}}