---
title: "Atributos DOM"
date: 2023-02-21T16:24:50-05:00
draft: false
showPagination: false
---
Cuando el navegador carga la página, lee (o “parser”(analiza en inglés)) el HTML y genera objetos DOM a partir de él. Para los nodos de elementos, la mayoría de los atributos HTML estándar se convierten automáticamente en propiedades de los objetos DOM.

Por ejemplo, si la etiqueta es `<body id="page">`, entonces el objeto DOM tiene `body.id="page"`.

¡Pero el mapeo de propiedades y atributos no es uno a uno! En esta clase, prestaremos atención para separar estas dos nociones, para ver cómo trabajar con ellos, cuándo son iguales y cuándo son diferentes.

<!-- ## Propiedades del DOM

Ya hemos visto propiedades DOM integradas. Hay muchas. Pero técnicamente nadie nos limita, y si no hay suficientes, podemos agregar las nuestras.

Los nodos DOM son objetos JavaScript normales. Podemos alterarlos.

Por ejemplo, creemos una nueva propiedad en `document.body`:

```js
document.body.myData = {
  name: 'Cesar',
  title: 'Emperador'
};
alert(document.body.myData.title); // Emperador
```

También podemos agregar un método:

```js
document.body.sayTagName = function() {
  alert(this.tagName);
};
document.body.sayTagName(); // BODY (el valor de 'this' en el método es document.body)
```

Por lo tanto, las propiedades y métodos DOM se comportan igual que los objetos JavaScript normales:

- Pueden tener cualquier valor.
- Distingue entre mayúsculas y minúsculas (escribir `elem.nodeType`, no es lo mismo que `elem.NoDeTyPe`). -->

## Atributos HTML

En HTML, las etiquetas pueden tener atributos. Cuando el navegador analiza el HTML para crear objetos DOM para etiquetas, reconoce los atributos *estándar* y crea propiedades DOM a partir de ellos.

Entonces, cuando un elemento tiene `id` u otro atributo *estándar*, se crea la propiedad correspondiente. Pero eso no sucede si el atributo no es estándar.

{{< highlight html "linenos=table,hl_lines=5-6" >}}
<body id="test" something="non-standard"> 
<!-- "ID" existe como propiedad, pero "something" no, la hemos creado nosotros --> 
  <script>
    alert(document.body.id); // test
    // el atributo no estándar no produce una propiedad
    alert(document.body.something); // undefined
  </script>
</body>
{{< /highlight >}}

Tenga en cuenta que un atributo estándar para un elemento puede ser desconocido para otro. Por ejemplo, "type" es estándar para `<input>`(HTMLInputElement), pero no para `<body>` (HTMLBodyElement). Los atributos estándar se describen en la especificación para la clase del elemento correspondiente.

Aquí podemos ver esto:

{{< highlight html "linenos=table,hl_lines=5" >}}
<body id="body" type="...">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined: Propiedad DOM no creada, porque no es estándar
  </script>
</body>
{{< /highlight >}}

Entonces, si un atributo no es estándar, no habrá una propiedad DOM para él. ¿Hay alguna manera de acceder a tales atributos?

Claro. Todos los atributos son accesibles usando los siguientes métodos:

- `elem.hasAttribute(nombre)` -- comprueba si existe.
- `elem.getAttribute(nombre)` -- obtiene el valor.
- `elem.setAttribute(nombre, valor)` -- establece el valor.
- `elem.removeAttribute(nombre)` -- elimina el atributo.

Para seguir aprendiendo más los atributos dentro del DOM, mira el siguiente video del canal de youtube <mark>jonmircha</mark> donde explora más a detalle estos conceptos:

{{< youtube l6npGZa_vgc >}}
<!-- https://javascript.info/dom-attributes-and-properties -->

<!-- https://www.youtube.com/watch?v=l6npGZa_vgc -->

