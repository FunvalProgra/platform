---
title: "Introducción al DOMimage.png"
date: 2023-05-11T12:07:10-05:00
draft: false
showPagination: false
---


El Document Object Model (DOM) es un estándar de la industria que define la estructura lógica de un documento y cómo se puede acceder y modificar su contenido y estilos. Es una interfaz de programación de aplicaciones (API) para documentos HTML y XML que permite a los desarrolladores interactuar con el contenido de una página web y modificarlo dinámicamente mediante código JavaScript.

El DOM es un árbol de nodos que representa la estructura de un documento, donde cada elemento HTML es un nodo y cada atributo es un nodo hijo. Los desarrolladores pueden utilizar el DOM para seleccionar y modificar elementos específicos en una página web, crear nuevos elementos, eliminar elementos existentes, cambiar estilos, agregar eventos, y mucho más.

En esta clase, vamos a profundizar en el concepto del DOM, cómo funciona, y cómo los desarrolladores pueden utilizarlo para interactuar con el contenido de una página web y crear aplicaciones web dinámicas e interactivas.

Antes de entar a detalle en el DOM hablaremos un poco del entorno del navegador.

## Entorno de Navegador

El lenguaje JavaScript fue creado inicialmente para los navegadores web. Desde entonces, ha evolucionado en un lenguaje con muchos usos y plataformas.

Una plataforma puede ser un navegador, un servidor web u otro *host* ("anfitrión"); incluso una máquina de café "inteligente", si puede ejecutar JavaScript. Cada uno de ellos proporciona una funcionalidad específica de la plataforma. La especificación de JavaScript llama a esto *entorno de host*.

Un entorno host proporciona sus propios objetos y funciones adicionales al núcleo del lenguaje. Los navegadores web proporcionan un medio para controlar las páginas web. Node.js proporciona características del lado del servidor, etc.

Aquí tienes una vista general de lo que tenemos cuando JavaScript se ejecuta en un navegador web:

{{< figure src="./windowObjects.svg" caption="" attr="" attrlink="" >}}

Hay un objeto "raíz" llamado `window`. Tiene dos roles:

1. Primero, es un objeto global para el código JavaScript.
2. Segundo, representa la "ventana del navegador" y proporciona métodos para controlarla.

## DOM (Modelo de Objetos del Documento)

La estructura de un documento HTML son las etiquetas.

Según el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto. Las etiquetas anidadas son llamadas "hijas" de la etiqueta que las contiene. El texto dentro de una etiqueta también es un objeto.

Todos estos objetos son accesibles empleando JavaScript, y podemos usarlos para modificar la página.

Por ejemplo, `document.body` es el objeto que representa la etiqueta `<body>`.

Ejecutar el siguiente código hará que el `<body>` sea de color rojo durante 3 segundos:

```js run
document.body.style.background = 'red'; // establece un color de fondo rojo
setTimeout(() => document.body.style.background = '', 3000); // regresa el color de fondo original despues de 3 segundos
```

En el caso anterior usamos `style.background` para cambiar el color de fondo del `document.body`, sin embargo existen muchas otras propiedades, tales como:

- `innerHTML` -- contenido HTML del nodo.
- `offsetWidth` -- ancho del nodo (en píxeles).
- ..., etc.

## Un ejemplo del DOM

Comencemos con el siguiente documento simple:

```html run no-beautify
<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
```

El DOM representa HTML como una estructura de árbol de etiquetas. A continuación podemos ver como se muestra:

{{< mermaid >}}
flowchart TD
A(HTML) --> B(HEAD)
A --> C[#text]
A --> D(BODY)
B --> E[#text]
B --> F(TITLE)
B --> I[#text]
F --> G[#text About elk]
D --> J[#text The truth about elk. #text]
{{< /mermaid >}}
 
Cada nodo del árbol es un objeto.

Las etiquetas son *nodos de elementos* (o solo elementos) y forman la estructura del árbol: `<html>` está ubicado en la raíz del documento, por lo tanto, `<head>` y `<body>` son sus hijos, etc.

El texto dentro de los elementos forma *nodos de texto*, etiquetados como `#text`. Un nodo de texto contiene solo una cadena. Esta puede no tener hijos y siempre es una hoja del árbol.

Por ejemplo, la etiqueta `<title>` tiene el texto `"About elk"`.

Hay que tener en cuenta los caracteres especiales en nodos de texto:

- una línea nueva: `#text ↵` (en JavaScript se emplea `\n` para obtener este resultado)
- un espacio: `␣`

Los espacios y líneas nuevas son caracteres totalmente válidos, al igual que letras y dígitos. Ellos forman nodos de texto y se convierten en parte del DOM. Así, por ejemplo, en el caso de arriba la etiqueta `<head>` contiene algunos espacios antes de la etiqueta `<title>`, entonces ese texto se convierte en el nodo `#text`, que contiene una nueva línea y solo algunos espacios.

Hay solo dos excepciones de nivel superior:
1. Los espacios y líneas nuevas antes de la etiqueta `<head>` son ignorados por razones históricas.
2. Si colocamos algo después de la etiqueta `</body>`, automáticamente se sitúa dentro de `body`, al final, ya que, la especificación HTML necesita que todo el contenido esté dentro de la etiqueta `<body>`, no puede haber espacios después de esta.

En otros casos todo es sencillo -- si hay espacios (como cualquier carácter) en el documento, se convierten en nodos de texto en el DOM, y si los eliminamos, entonces no habrá ninguno.

Para reforzar lo que hemos visto, mira el siguiente video donde se introduce el DOM:

{{< youtube dF7lp_qBfV0 >}}

## Recursos extra

[30 dias de Javascript - DOM](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/dia_21_DOM/dia_21_dom.md)

## Prácticar el DOM

EN el siguiente enlaces encontrarás diversos ejercicios para practicar el DOM, te recomiendo comenzarlos en orden y recuerda que siempre puedes preguntar o pedir ayuda si algo no te queda claro:

[Ejercicios DOM](https://jschallenger.com/javascript-dom-exercises)