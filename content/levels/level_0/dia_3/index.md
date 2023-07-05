---
title: "Día 3"
date: 2022-12-16T11:18:26-05:00 
draft: false
---

## Día 3 : Más estilos CSS

Hoy profundizaremos en los estilos de CSS. El siguiente video creado por el canal de youtube **Hola Mundo** explican de manera clara más estilos que debes tener en cuenta al momento de desarrollar para la web. Antes de ello, te menciono 3 formas comunes de escribir estilos CSS: inline, internal y external.

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>Importancia de los temas que aprenderás</b>
  </div>
  <span class="dark:text-neutral-300">

  Si bien es cierto que estos temas te ayudarán a prepararte para el exámen de admisión, esperamos que puedas analizarlo y prácticar de la mano con los tutoriales que hemos añadido. Al ingresar al programa, esta información será de gran ayuda para empezar tu camino como programador, recuerda que esperamos que llegues a entender de forma básica los temas que aprenderás y al iniciar el curso, podremos profundizar en ellos. También, tendremos en cuenta que leiste estos temas y partiremos de ahí para avanzar en el curso.
  </span>
</div>

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