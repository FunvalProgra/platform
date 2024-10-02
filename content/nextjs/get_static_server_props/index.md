---
title: 'getStaticProps y getServerSideProps en Next.js'
date: 2024-10-02T11:25:52-05:00
draft: false
showPagination: false
---

Next.js es un framework para React que facilita la creación de aplicaciones optimizadas con funcionalidades como el renderizado del lado del servidor (SSR) y la generación estática de páginas. Dos de sus métodos más importantes son `getStaticProps` y `getServerSideProps`, que permiten controlar cómo se obtienen y procesan los datos para la creación de páginas. Sin embargo, cabe resaltar que estos métodos se utilizan con Pages Router de Next.js, no confundir con App Router.

## ¿Qué es `getStaticProps`?

`getStaticProps` es una función que Next.js utiliza para generar páginas estáticas en el momento de la compilación (build time). Esto significa que la página se genera una vez durante la compilación y se reutiliza para todas las solicitudes, lo que puede mejorar el rendimiento y el tiempo de carga, especialmente en sitios con contenido que no cambia frecuentemente.

### ¿Cuándo usar `getStaticProps`?

`getStaticProps` es ideal para:

- Páginas con contenido que no cambia frecuentemente.
- Contenido que se puede obtener durante el build time, como archivos locales o datos de una API que no cambia a menudo.
- Optimizar la velocidad de carga del sitio, ya que las páginas estáticas son rápidas de servir.

### Ejemplo básico de `getStaticProps`

```jsx
// pages/index.js
export async function getStaticProps() {
  // Llamada a una API o cargar datos desde el sistema de archivos
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts, // se pasa como propiedad a la página
    },
  };
}

function Home({ posts }) {
  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
```

### Explicación del ejemplo

1. En el ejemplo, `getStaticProps` realiza una llamada a una API externa (`jsonplaceholder.typicode.com`) para obtener datos.
2. La función retorna un objeto con una propiedad `props`, que contiene los datos de los posts.
3. Estos datos se pasan como props al componente `Home`, lo que permite mostrar la lista de posts en la página.
4. Como la página se genera en el momento de la compilación, se reutiliza la misma versión estática en cada solicitud.

### Regeneración Incremental

Next.js ofrece una funcionalidad llamada **Regeneración Incremental** (Incremental Static Regeneration - ISR), que permite actualizar una página estática después de su compilación sin necesidad de hacer un redeploy. Esto se consigue añadiendo una opción llamada `revalidate` a `getStaticProps`, que indica el número de segundos después del cual se regenerará la página.

```jsx
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10, // la página se regenerará cada 10 segundos
  };
}
```

Con esto, la página se actualizará cada 10 segundos cuando reciba una solicitud, manteniendo los beneficios de la generación estática, pero con la capacidad de mostrar contenido más actualizado.

## ¿Qué es `getServerSideProps`?

`getServerSideProps` se ejecuta en cada solicitud y permite generar una página del lado del servidor (SSR). A diferencia de `getStaticProps`, no se genera durante el build time, sino en el momento en que el usuario solicita la página. Esto es útil cuando los datos que necesita la página cambian frecuentemente o dependen de la solicitud del usuario.

### ¿Cuándo usar `getServerSideProps`?

`getServerSideProps` es adecuado para:

- Páginas que necesitan datos actualizados en tiempo real en cada solicitud.
- Páginas que dependen de la autenticación o de parámetros dinámicos del usuario.
- Casos donde el SEO es importante y los motores de búsqueda deben ver contenido actualizado.

### Ejemplo básico de `getServerSideProps`

```jsx
// pages/profile.js
export async function getServerSideProps() {
  // Obtener datos desde una API o base de datos
  const res = await fetch('https://api.example.com/user');
  const user = await res.json();

  return {
    props: {
      user, // se pasa como prop a la página
    },
  };
}

function Profile({ user }) {
  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
```

### Explicación del ejemplo

1. `getServerSideProps` realiza una solicitud a una API cada vez que el usuario accede a la página.
2. Los datos devueltos por la API se pasan como props al componente `Profile`.
3. A diferencia de `getStaticProps`, esta página se genera en el servidor cada vez que se solicita, lo que garantiza que los datos siempre estén actualizados.

### Ventajas y desventajas de `getServerSideProps`

**Ventajas:**

- Siempre muestra datos actualizados.
- Perfecto para aplicaciones que requieren autenticación o personalización basada en el usuario.

**Desventajas:**

- El tiempo de respuesta es más lento en comparación con `getStaticProps`, ya que la página se debe generar para cada solicitud.
- Puede incrementar la carga del servidor, ya que se requiere realizar operaciones en cada petición.

## Comparación entre `getStaticProps` y `getServerSideProps`

| Característica             | `getStaticProps`                                 | `getServerSideProps`                      |
| -------------------------- | ------------------------------------------------ | ----------------------------------------- |
| **Renderización**          | En tiempo de compilación                         | En tiempo de solicitud (en cada petición) |
| **Actualización de datos** | Durante la compilación o mediante ISR            | En cada solicitud                         |
| **Velocidad**              | Muy rápido (página estática)                     | Más lento (página dinámica)               |
| **Uso**                    | Páginas con contenido estático o que cambia poco | Páginas con datos dinámicos               |

## Conclusión

`getStaticProps` y `getServerSideProps` son herramientas poderosas en Next.js que permiten optimizar el rendimiento de las aplicaciones dependiendo de las necesidades de los datos. Mientras que `getStaticProps` es ideal para generar páginas rápidas y estáticas, `getServerSideProps` asegura que los datos estén siempre actualizados en cada solicitud. La elección entre uno y otro dependerá del caso de uso específico y la frecuencia con la que los datos deben actualizarse en la página.
