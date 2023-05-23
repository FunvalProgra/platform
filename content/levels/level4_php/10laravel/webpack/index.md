---
title: "SSG vs SSR"
date: 2023-03-12T11:51:34-06:00
draft: false
showPagination: false
---
# SSG vs SSR


## Pre-renderizado
Next.js pre-renderiza cada página por defecto. Generando el HTML por adelantado en lugar de dejarle todo el trabajo al JavaScript del cliente. Esto se traduce en importantes mejoras de rendimiento y SEO.
Cada HTML generado se asocia con un mínimo de código de JavaScript requerido para esa página. Cuando una página es cargada por el navegador, su código JavaScript se ejecuta y hace la página plenamente interactiva. Este proceso es llamado hidratación.
Tipos de Pre-renderizado
Existen dos formas de pre-renderizado en Next.js: Static Site Generation y Server-side Rendering. La diferencia principal radica en cuando se genera el HTML para la página.
•	SSG (Static Site Generation): El HTML se genera antes de cada petición, como al momento de crear la build.
•	SSR (Server-side Rendering): El HTML se genera en el servidor durante cada petición.
Static Site Generation
Si nuestra página no requiere datos de una fuente externa, Next.js se encargará de generarla de forma estática al crear la build. Por ejemplo:
```js
export default function Perfil() {
  return <div>Perfil</div>;
}
En cambio, si el contenido o rutas de la página dependen de una fuente externa, necesitaremos usar dos funciones especiales de Next.js: getStaticProps y getStaticPaths.
Ejemplo 1: Digamos que tu página necesita una lista de posts publicados en tu blog desde un CMS.
// TODO: Hacer fetch a los `posts` antes de que se pre-renderice la página
export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.titulo}</li>
      ))}
    </ul>
  );
}
```
En el mismo archivo tenemos que exportar la función asíncrona getStaticProps, esta función es llamada al momento de crear la build y te permite pasar los datos recopilados a la página en forma de props.
```js
export async function getStaticProps() {
  // Hacer fetch al endpoint que contiene los `posts`
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default function Blog({ posts }) {
  // Renderizar posts...
}
```
Ejemplo 2: Queremos pre-renderizar posts individuales usando rutas dinámicas.
Empezamos creando un archivo con ruta dinámica llamado pages/posts/[id].js, este nos permitirá acceder a nuestros posts según su id, con enlaces como: /posts/1, /posts/2, etc.
``` js
export default function Post({ post }) {
  return (
    <div>
      <h1>{post.titulo}</h1>
      <p>{post.contenido}</p>
    </div>
  );
}
```
Podemos indicar a Next.js las rutas dinámicas que queremos pre-renderizar usando la función getStaticPaths.
```js
export async function getStaticPaths() {
  // Hacer fetch al endpoint que contiene los `posts`
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // Obtener rutas a pre-renderizar basado en el `id` de los posts
  const rutas = posts.map((post) => `/posts/${post.id}`);

  return { paths: rutas, fallback: false };
}
```
Nota: { fallback: false } hace que las rutas no incluidas devuelvan una página 404.
Finalmente, utilizamos getStaticProps para conseguir los datos del post según el id proporcionado en el objeto params.
```js
export async function getStaticPaths() {
  // ...
}

export async function getStaticProps({ params }) {
  // params contiene el `id` del post.
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  // Pasar datos del post hacia la página en forma de props
  return { props: { post } };
}

export default function Post({ post }) {
  // Renderizar post...
}
```
## Server-side Rendering
Muchas veces los datos de nuestra página deben ser constantemente actualizados o tal vez necesitemos interactuar con una API haciendo consultas variadas y complejas. Para casos como estos, Next.js nos permite usar Server-side Rendering (SSR) en nuestras aplicaciones de React.
Cuando una página utiliza Server-side rendering, el HTML de la misma se genera en el servidor durante cada petición. Para ello, necesitamos exportar la función asíncrona getServerSideProps, la cual recopila los datos y los pasa a la página.
// Esta función es llamada durante cada petición

```js
export async function getServerSideProps() {
  // Recopilar datos desde una API externa
  const res = await fetch(`https://.../datos`);
  const datos = await res.json();

  // Pasar datos hacia la pagina en forma de props
  return { props: { datos } };
}

export default function Pagina({ datos }) {
  // Renderizar datos...
}
```
Como puedes observar, getServerSideProps y getStaticProp cuentan con una sintaxis y funcionamiento similar, pero se diferencian principalmente por el momento en que son ejecutadas.

##  Server Side Render vs. Static Site Generation 
 Link de Blog :  https://leonidasesteban.com/blog/ssg

 ## Video  SSG vs SSR