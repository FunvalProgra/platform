---
title: "COMPONENTES"
date: 2023-07-14T18:32:03-05:00
draft: false
showPagination: false
---
## Describir la UI 
La UI se construye a partir de pequeñas unidades como botones, texto e imágenes. React te permite combinarlas en componentes reutilizables y anidables. Desde sitios web hasta aplicaciones de teléfonos, todo en la pantalla se puede descomponer en componentes.
## Tu primer componente 
Las aplicaciones de React se construyen a partir de piezas independientes de UI llamadas componentes. Un componente de React es una función de JavaScript a la que le puedes agregar un poco de marcado (markup). Los componentes pueden ser tan pequeños como un botón, o tan grandes como una página entera. Aquí vemos un componente Gallery que renderiza tres components Profile:
```JS
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```
## Importar y exportar componentes
Es posible declarar muchos componentes en un archivo, pero los archivos grandes pueden resultar difíciles de navegar. Como solución, puedes exportar un componente a su propio archivo, y luego importar ese componente desde otro archivo:

```JS
//Profile.js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```
```JS
//Gallery.js
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

## Escribir marcado(HTML) con JSX
Cada componente de React es una función de JavaScript que puede contener algo de marcado que React renderiza en el navegador. Los componentes de React utilizan una sintaxis extendida que se llama JSX para representar ese marcado. JSX se parece muchísimo a HTML, pero es un poco más estricto y puede mostrar información dinámica.

## JavaScript en JSX con llaves
JSX te permite escribir marcado similar a HTML dentro de un archivo JavaScript, manteniendo la lógica de renderizado y el contenido en el mismo lugar. En ocasiones será deseable añadir un poco de lógica en JavaScript o referenciar una propiedad dinámica dentro del marcado. En esta situación, puedes utilizar llaves en tu JSX para «abrir una ventana» hacia JavaScript:
```js
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas Pendientes de {person.name}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Mejorar el videoteléfono</li>
        <li>Preparar clases de aeronáutica</li>
        <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}
```
## Pasar props a un componente 
Los componentes de React utilizan props para comunicarse entre ellos. Cada componente padre puede pasar alguna información a sus componentes hijos dándoles props. Las props pueden recodarte a los atributos de HTML, pero puedes pasar cualquier valor de JavaScript con ellas, incluyendo objetos, arreglos, funciones, ¡e incluso JSX!
```JS
//App.js
import { getImageUrl } from './utils.js'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```
```JS
//utils.js
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
```
