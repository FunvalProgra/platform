---
title: "Caracterìsticas de Next.js"
date: 2023-03-12T11:49:44-06:00
draft: false
showPagination: false
---
# Características de Next.js

A continuación explicaremos las características de Next.js y lo que puedes ganar utilizando Next.js en tu proyecto.
## Enrutamiento

El enrutamiento es una de las características esenciales de Next.js. Next.js utiliza el sistema de enrutamiento basado en archivos de las páginas para estructurar cómo será el enrutamiento de tu aplicación. Cada archivo y carpeta creada dentro de la carpeta pages se convierte automáticamente en ruta en Next.js.

El sistema de enrutamiento de Next.js se divide en 3 tipos diferentes, y a continuación exploraremos cada uno de ellos.
## Enrutamiento de Índice

La carpeta pages tiene automáticamente index.js, que se convierte en la ruta de la página de inicio /. También puedes definir una página index.js para todas tus rutas en cualquier carpeta. Por ejemplo, puedes definir pages/profiles/index.js, que se asignará automáticamente a la página /profiles.

Mira este ejemplo, por ejemplo:

- pages
  - index.js
  - profile
    - index.js
    - [user].js

La estructura de páginas anterior mapeará las carpetas y archivos a una estructura de URL. Por ejemplo, / para las pages/index.js, /profile/  para las pages/profile/index.js, y /profile/user para las pages/profile/user.js, respectivamente.
## Rutas Anidadas

Las rutas anidadas se crean dentro de una ruta padre. Para crear una ruta anidada, tienes que crear una ruta/carpeta padre dentro de la carpeta pages y añadir carpetas o archivos dentro para crear una ruta anidada.

Echa un vistazo a este ejemplo:

- pages
  - index.js
  - dashboard
    - index.js
    - user.js

En el script anterior, los archivos user.js e index.js están anidados con la ruta padre del panel de control, lo que significa que sólo se puede acceder a las URLs con la ruta del panel de control.

## Rutas Dinámicas

Se consigue mediante rutas dinámicas. Las rutas dinámicas son siempre indeterminadas. Pueden generarse mediante llamadas a la API o asignar un ID o slug a la URL.

Para crear una ruta dinámica en Next.js, añade un corchete [id].js alrededor del nombre del archivo o del directorio. Puedes nombrar el archivo o el directorio con cualquier nombre de tu elección, pero debes adjuntar un corchete [] para que sea dinámico.

Echa un vistazo a este ejemplo:

- pages
  - dashboard
    - [user].js
        - profile

El script anterior hace que el [usuario].js sea dinámico, lo que significa que se debe acceder a la página del perfil con /dashboard/2/profile o /dashboard/johndoe/profile.

En la documentación oficial, puedes aprender más y los diferentes trucos para crear un sistema de enrutamiento más avanzado en Next.js.

## Servir Archivos Estáticos

En Next.js, el servicio de archivos estáticos o activos como iconos, fuentes autoalojadas o imágenes se realiza a través de la carpeta public, la única fuente de verdad para los activos estáticos.

La carpeta public no debe ser renombrada según los documentos de Next.js. Servir activos estáticos a través de la carpeta public es muy sencillo, según la configuración de Next.js.
Renderización Previa

Una de las enormes características de Next.js es el pre-renderizado, que hace que Next.js funcione muy bien y muy rápido. Next.js pre-renderiza cada página generando de antemano el HTML de cada página junto con el JavaScript mínimo que necesitan para ejecutarse a través de un proceso conocido como Hidratación.

## Hay dos formas de pre-renderizado en Next.js:

    Renderización del lado del servidor (SSR)
    Generación estática (SG)

La diferencia crucial entre SG y SSR es cómo se obtienen los datos. En el caso de SG, los datos se obtienen en el momento de la construcción y se reutilizan en cada solicitud (lo que hace que sea más rápido porque se puede almacenar en caché), mientras que en SSR, los datos se obtienen en cada solicitud.

# Páginas y Rutas

Una de las particularidades de Next.js es que esta construido alrededor del concepto de páginas.
Una página es un componente de React exportado desde la carpeta pages.
Las páginas están asociadas con una ruta basada en el nombre del archivo. Por ejemplo pages/perfil.js resultará en la ruta /perfil.
```js
export default function Perfil() {
  return <div>¡Bienvenido a mi perfil!</div>;
}
```
pages/perfil.js
Prueba el código anterior por tu cuenta y visita localhost:3000/perfil para ver los resultados.
Rutas Index
Los archivos con nombre index dirigen hacia la raíz del directorio que lo contiene.
•	pages/index.js → /
•	pages/blog/index.js → /blog
Rutas Anidadas
Supongamos que queremos acceder a la siguiente ruta: /blog/post/:id
Necesitaremos anidar las carpetas de la siguiente manera:
|- pages
  |- index.js
  |- blog
    |- post
      |- [id].js # id dinámico para cada post
Páginas con Rutas Dinámicas
También podemos utilizar rutas dinámicas si agregamos corchetes al nombre del archivo. Por ejemplo, si creamos un archivo llamado pages/post/[id].js podremos acceder a el en las rutas post/1, post/2, y así sucesivamente.
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}
pages/post/[id].js
