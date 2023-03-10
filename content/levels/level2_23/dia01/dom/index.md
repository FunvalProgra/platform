---
title: "Manipulación del DOM"
date: 2023-02-14T15:13:43-05:00
draft: false
showPagination: false
---

<!-- Explicar como se debe buscar elementos del DOM desde JavaScript -->

## Buscando elementos del DOM

Para buscar elementos del DOM, podemos usar los métodos `getElementById`, `getElementsByClassName`, `getElementsByTagName` y `querySelector` y `querySelectorAll` del objeto `document`.

## Búsqueda de elementos

El método `getElementById` busca un elemento por su atributo `id`:

```js
let elem = document.getElementById('id');
```

El método `getElementsByClassName` busca elementos por su atributo `class`. Aqui debemos tener en cuenta que nos devolverá un arreglo de elementos que coincidan con la clase especificada:

```js
let elems = document.getElementsByClassName('clase');
```

El método `getElementsByTagName` busca elementos por su nombre de etiqueta:

```js
let elems = document.getElementsByTagName('div');
```

El método `querySelector` busca un elemento que coincida con el selector CSS especificado:

```js
let elem = document.querySelector('#elemento');
let elem = document.querySelector('.clase');
let elem = document.querySelector('div');
```

El método `querySelectorAll` busca todos los elementos que coincidan con el selector CSS especificado y los retorna dentro de un array:

```js
let elems = document.querySelectorAll('#elemento');
let elems = document.querySelectorAll('.clase');
let elems = document.querySelectorAll('div');
```

## Agregando y eliminando elementos del DOM

Para agregar elementos al DOM, podemos usar el método `appendChild` de un elemento del DOM:

```js
let elemento = document.createElement('div');
elemento.textContent = 'Hola Mundo';
document.body.appendChild(elemento);
```

Para eliminar elementos del DOM, podemos usar el método `removeChild` de un elemento del DOM:

```js
let elemento = document.querySelector('#elemento');
document.body.removeChild(elemento);
```

## Cambiando atributos del DOM

Para cambiar atributos del DOM, podemos usar el método `setAttribute` de un elemento del DOM:

```js
let elemento = document.querySelector('#elemento');
elemento.setAttribute('class', 'clase');
```

Para eliminar atributos del DOM, podemos usar el método `removeAttribute` de un elemento del DOM:

```js
let elemento = document.querySelector('#elemento');
elemento.removeAttribute('class');
```

## Cambiando el estilo del DOM

Para cambiar el estilo del DOM, podemos usar el método `style` de un elemento del DOM:

```js
let elemento = document.querySelector('#elemento');
elemento.style.backgroundColor = '#000';
```


# Manejo de Nodos

En el siguiente video aprenderemos a manipular el DOM con JavaScript:

{{< youtube zBmtmlB5b5g >}}
