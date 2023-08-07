---
title: "REACT INICIO RAPIDO"
date: 2023-07-14T18:32:03-05:00
draft: false
showPagination: false
---
## Crear y anidar componentes
Las aplicaciones de React están hechas a partir de componentes. Un componente es una pieza de UI (siglas en inglés de interfaz de usuario) que tiene su propia lógica y apariencia. Un componente puede ser tan pequeño como un botón, o tan grande como toda una página.

Los componentes de React son funciones de JavaScript que retornan marcado (markup):
```js
function MyButton() {
  return (
    <button>Soy un botón</button>
  );
}
```
Ahora que has declarado MyButton, puedes anidarlo en otro componente:
```js
export default function MyApp() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
    </div>
  );
}
```
Nota que < MyButton /> empieza con mayúscula. Así es como sabes que es un componente de React. Los nombres de los componentes de React siempre deben comenzar con mayúscula, mientras las etiquetas HTML deben estar minúsculas.

Las palabras clave export default especifican el componente principal en el archivo. Si no estás familiarizado con alguna parte de la sintaxis de JavaScript, [MDN](https://developer.mozilla.org/es/docs/web/javascript/reference/statements/export) y [javascript.info](https://javascript.info/import-export) tienen magníficas referencias.

## Escribir marcado con JSX
La sintaxis de marcado que viste arriba se llama JSX. Es totalmente opcional, pero la mayoría de los proyectos de React usan JSX por la comodidad que ofrece. Todas las herramientas que recomendamos para el desarrollo local son compatibles con JSX sin ningún tipo de configuración.

JSX es más estricto que HTML. Tienes que cerrar etiquetas como < br />. Tu componente tampoco puede devolver múltiples etiquetas de JSX. Debes envolverlas en un padre compartido, como < div>...< /div> o en un envoltorio vacío <>...</>:
## Añadir estilos
En React, especificas una clase de CSS con className. Funciona de la misma forma que el atributo class de HTML:
```html
<img className="avatar" />
```
Luego escribes las reglas CSS para esa clase en un archivo CSS aparte:
```css
/* In your CSS */
.avatar {
  border-radius: 50%;
}
```
React no prescribe como debes añadir tus archivos CSS. En el caso más simple, añades una etiqueta <link> a tu HTML. Si utilizas una herramienta de construcción o un framework, consulta su documentación para saber como añadir un archivo CSS a tu proyecto.
## Mostrar datos
JSX te permite poner marcado dentro de JavaScript. Las llaves te permiten «escapar de nuevo» hacia JavaScript de forma tal que puedas incrustar una variable de tu código y mostrársela al usuario. Por ejemplo, esto mostrará user.name:
```js
return (
  <h1>
    {user.name}
  </h1>
);
```
También puedes «escaparte hacia JavaScript» en los atributos JSX, pero tienes que utilizar llaves en lugar de comillas. Por ejemplo, className="avatar" pasa la cadena "avatar" como la clase CSS, pero src={user.imageUrl} lee el valor de la variable de JavaScript user.imageUrl y luego pasa el valor como el atributo src:
```js
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```
## Renderizado condicional
En React, no hay una sintaxis especial para escribir condicionales. En cambio, usarás las mismas técnicas que usas al escribir código regular de JavaScript. Por ejemplo, puedes usar una sentencia if para incluir JSX condicionalmente:
```js
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```
## Renderizado de listas 
Dependerás de funcionalidades de JavaScript como los bucles for y la función map() de los arreglos para renderizar listas de componentes.

Por ejemplo, digamos que tienes un arreglo de productos:
```js
const products = [
  { title: 'Repollo', id: 1 },
  { title: 'Ajo', id: 2 },
  { title: 'Manzana', id: 3 },
];
```
Dentro de tu componente, utiliza la función map() para transformar el arreglo de productos en un arreglo de elementos < li>:
```js
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```