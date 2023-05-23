---
title: "Enlazando Paginas Con Next.js"
date: 2023-03-12T11:50:06-06:00
draft: false
showPagination: false
---

# Enlazando páginas
Para obtener una navegación fluida entre las páginas de nuestra aplicación, necesitamos importar el componente Link y usarlo de la siguiente manera:
```js
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/perfil">
          <a>Mi perfil</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/post/hola-mundo">
          <a>Post</a>
        </Link>
      </li>
    </ul>
  );
}

```
pages/index.js
En el ejemplo anterior podemos observar que hay múltiples enlaces, cada uno cuenta con un componente Link que recibe una propiedad href indicando la ruta a la que dirige. Link envuelve un elemento Anchor a que contiene el texto de nuestro enlace.
Enlazando Rutas Dinámicas
También puedes utilizar interpolación para crear la ruta, lo que resulta útil para los segmentos de ruta dinámicos. Por ejemplo, para mostrar una lista de posts que se han pasado al componente como propiedad:
import Link from "next/link";
```js
export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/post/${post.id}`}>
            <a>{post.titulo}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```
O usando un objeto URL:
import Link from "next/link";
```js
export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: "/blog/post/[id]",
              query: { id: post.id },
            }}
          >
            <a>{post.titulo}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

```
Como puedes observar, en el código anterior utilizamos el hook useRouter de Next.js para acceder al objeto router, dicho objeto contiene propiedades muy útiles, las partes dinámicas de cada ruta se almacenan en `router.query`
Como se mencionó anteriormente, Next.js utiliza un enfoque basado en páginas para crear rutas. Concretamente, esto significa que en cada proyecto de Next.js existe una pagescarpeta. Dentro de esta carpeta especial, cada archivo y carpeta constituye una nueva ruta.
En la pagescarpeta, la primera ruta raíz es index.js, que representa la página de inicio en la /URL. También puede nombrar su archivo y crear una ruta estática (es decir, about.jspara la /aboutruta).
De manera similar, las carpetas también se pueden usar para crear rutas anidadas. Por ejemplo,


 crear una carpeta con un nombre supporty un archivo dentro faq.jscreará la ruta /support/faq.
Aquí hay un diagrama para ilustrar mejor esto:
Las rutas dinámicas también son compatibles. Al poner corchetes en el nombre de su archivo o carpeta, puede crear una ruta dinámica. Por ejemplo, 
    /blog/[article-id].jsadmitirá 
múltiples rutas como 

    /blog/1, /blog/nextjs-dynamic-routing, etc.
### Limitaciones del enrutador Next.js
Desafortunadamente, este enfoque tiene una limitación importante. Es decir, a pesar de que las rutas anidadas comparten una ruta principal, no puede compartir el estado o el diseño entre ellas.
Por ejemplo, tome la autenticación. En React, utilizando la biblioteca de enrutador de reacción , puede crear rutas personalizadas. Por ejemplo, podría crear una ruta protegida para verificar si el usuario ha iniciado sesión. Si el usuario no ha iniciado sesión, la ruta lo redirigirá, por ejemplo, a la página de inicio de sesión o registro. Luego, puede asignar esta ruta protegida a cualquier ruta /authenticationen su enrutador. Al hacer esto, las rutas anidadas no tienen que preocuparse por la autenticación, ya que la ruta principal se encargará de ello.
Desafortunadamente, este escenario no es posible con Next.js. Puede crear un componente de ruta personalizado, pero tendrá que ajustarlo alrededor de cada página protegida individualmente.
El mismo problema se aplica a los diseños. Si su aplicación tiene un tablero, varias páginas compartirán un diseño similar (navegación, pie de página, etc.). Tal como está, la única forma de aplicar un diseño a varias páginas a la vez es hacerlo en el nivel de la aplicación. Este diseño se aplicaría a toda su aplicación. Desafortunadamente, si tiene varios diseños, debe definirlos por página.



## Cambios en el enrutador Next.js
Sabiendo todo esto, el equipo de Vercel decidió corregir estas limitaciones.
Cambios en la creación de rutas
Para empezar, de manera similar a la pagescarpeta, habrá una nueva carpeta llamada app. Esto es para proporcionar compatibilidad con versiones anteriores y permitir que los desarrolladores migren lentamente al nuevo enrutador.
Entonces, la estructura de carpetas seguirá determinando nuevas rutas. Esto significa que una dashboardcarpeta dentro appestaría vinculada a las /dashboardrutas. Sin embargo, donde se pone interesante son los archivos dentro de esas rutas.
El enrutador anterior asumía que cada archivo dentro de /pagesera una nueva ruta. Esto, por cierto, hizo que los desarrolladores separaran sus componentes React de páginas y no páginas (es decir, Navbar, Header, Footer). Poner un archivo como Navbar.jscon la página de inicio, también conocido como /pages/index.js, habría hecho que el enrutador creyera que Navbares una nueva ruta y no un simple componente secundario. Como resultado, muchos desarrolladores tuvieron que crear una componentscarpeta y separar sus diferentes componentes.
Sin embargo, el nuevo enrutador asume que cada archivo NO es una ruta a menos que se indique explícitamente. Para crear una nueva ruta, por lo tanto, debe crear una page.jsdentro de la carpeta.
Por lo tanto, nuestro ejemplo de proyecto anterior se vería así con el nuevo enrutador:
Las rutas dinámicas también son compatibles. Con este nuevo formato, para tener una /blog/[article-id]URL por ejemplo, necesitarías una /app/blog/[article-id]/page.jsestructura de carpetas.
En resumen, aquí hay una estructura de carpetas y sus rutas correspondientes:
        /app/blog/[article-id]/page.js→/blog/[article-id]
        /app/blog/[category-id]/page.js→/blog/[category-id]
        /app/blog/[category-id]/[article-id]/page.js→/blog/[category-id]/[article-id]
        Diseños anidados
Los diseños también recibieron una actualización.
Anteriormente, podía crear diseños en un archivo separado y luego importar el diseño a su página. Por ejemplo, aquí hay una página de tablero:

    import DashboardLayout from '../components/DashboardLayout'    export default function DashboardPage() {      /* The content for your dashboard page */    }    DashboardPage.getLayout = function getLayout(page) {      return (        <DashboardLayout>          {page}        </DashboardLayout>      )    }
Puede importar varios diseños a su página si necesita anidarlos. Sin embargo, dado que esto se hace por página, cada página anidada en su tablero tendría que importar los diseños y anidarlos.
¡Afortunadamente, esto está cambiando! Con el nuevo enrutador, podrá especificar un diseño para la página de su tablero y cualquier página anidada recibirá automáticamente este diseño. Todo lo que tiene que hacer es crear un layout.jsarchivo en la carpeta para que este diseño se aplique a todas las rutas en esta carpeta.

### Más concretamente, aquí hay un ejemplo:
En este ejemplo, layout.jsse creó un archivo en el nivel raíz, también conocido como en la appcarpeta. Este diseño se aplica automáticamente a cualquier ruta en la aplicación.
Esta aplicación también tiene dos secciones: tablero y soporte. Dado que cada uno de estos posee su estilo, layout.jsse crea un archivo para aplicar el estilo específico para sus rutas. Además del diseño raíz, esto significa que cualquier ruta debajo /dashboardrecibirá el diseño de la aplicación y el del tablero.
Como resultado, ya no tiene que especificar qué diseño usa, ya que los archivos pages.jslo hacen automáticamente .layout.js
A diferencia del enrutador actual de Next.js, que solo le permitía obtener datos a nivel de página, también podrá obtener datos de los diseños. Podrá usar getStaticPropsy getServerPropsrecuperar datos y construir su diseño.
Como resultado, sus /dashboardpáginas podrán obtener datos de múltiples componentes (el diseño de la aplicación, el diseño del tablero y la página misma).

Cómo crear un HOC (componente de orden superior) que puede redirigir condicionalmente a un usuario en función de su estado de inicio o cierre de sesión.
En Next.js, de forma predeterminada, todas sus rutas se tratan de la misma manera.
Si bien su aplicación específica puede incluir páginas o rutas que están destinadas solo para usuarios que iniciaron sesión, Next.js no proporciona una forma de aislar estas páginas en función del estado de autenticación de un usuario.

Esto es de esperar ya que Next.js está diseñado para manejar un conjunto de tareas simple y bien definido. Si bien se puede usar como front-end para una aplicación, como en el repetitivo Next.js de CheatCode, tradicionalmente se usa para generar sitios de marketing estáticos o sitios respaldados por un CMS sin cabeza.
Afortunadamente, resolver este problema no es demasiado complejo. Para solucionarlo, vamos a implementar dos componentes:
authenticatedRouteque será una función que devuelve un componente React envuelto con una verificación condicional del estado de autenticación del usuario y una redirección si un usuario no está disponible.
publicRouteque será una función que devuelve un componente React envuelto con una verificación condicional para el estado de autenticación del usuario y una redirección si un usuario está presente.
Implementación de un componente de ruta autenticado
Primero, construyamos el esqueleto de nuestro HOC y discutamos cómo va a funcionar:
```js
/components/AuthenticatedRoute/index.js
import React from "react";
const authenticatedRoute = (Component = null, options = {}) => {
 // We'll handle wrapping the component here.
};
export default authenticatedRoute;

```
Aquí, exportamos una función simple de JavaScript que toma dos argumentos: React Componentcomo el primer argumento y un objeto de optionscomo el segundo. representa el Componentcomponente de la página protegida que queremos representar condicionalmente.
Cuando vayamos a poner esto en uso, haremos algo como esto:
```js 
/pages/<algunapágina>/index.js
import authenticatedRoute from '../../components/AuthenticatedRoute';
const MyComponent = () => {
  [...]
};
export default authenticatedRoute(MyComponent, { pathAfterFailure: '/login' })
En el futuro, completemos nuestro HOC con el componente contenedor principal:
/components/AuthenticatedRoute/index.js
import React from "react";
const authenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    render() {
      const { loading } = this.state;
      if (loading) {
        return <div />;
      }
      return <Component {...this.props} />;
    }
  }
  return AuthenticatedRoute;
};
export default authenticatedRoute;
```
Aquí, hemos llenado authenticatedRouteel cuerpo de nuestra función con un componente React basado en clases. La idea aquí es que queremos utilizar el estado y, a continuación, la componentDidMountfunción de la clase para que podamos decidir si queremos representar el pasado Componento redirigir al usuario fuera de él.
```js 
/components/AuthenticatedRoute/index.js
import React from "react";
import Router from "next/router";
const authenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      if (this.props.isLoggedIn) {
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || "/login");
      }
    }
    render() {
      const { loading } = this.state;
      if (loading) {
        return <div />;
      }
      return <Component {...this.props} />;
    }
  }
  return AuthenticatedRoute;
};
export default authenticatedRoute;
```
Ahora, con nuestro componentDidMountagregado, podemos ver implementado nuestro comportamiento principal. En el interior, todo lo que queremos saber es "¿hay un usuario conectado o no?" Si hay un usuario conectado, queremos decir "adelante y renderice el pasado Component". Podemos ver que esto tiene lugar en el render()método del AuthenticatedRoutecomponente.
Aquí, estamos diciendo, siempre que loadingsea true, simplemente devuelva un vacío <div />(o no muestre nada al usuario). Si no estamos cargando, simplemente ejecute la returndeclaración en la parte inferior del archivo render().
Lo que esto logra es decir "hasta que sepamos que tenemos un usuario conectado, no mostrar nada, y si tenemos un usuario conectado, mostrarles la página a la que intentan acceder".
De vuelta en componentDidMount()la elsedeclaración, decimos "bien, no parece que el usuario haya iniciado sesión, así que vamos a redirigirlo". Para hacer la redirección en este ejemplo, estamos usando el enrutador integrado Next.js para hacer la redirección por nosotros, pero puede usar cualquier enrutador JavaScript o React que desee (por ejemplo, si estuviéramos usando React Router, haría this.props.history.push(options.pathAfterFailure || '/login')_
¿Tener sentido? Entonces, si tenemos un usuario, muéstrale el componente. Si no tenemos un usuario, redirigirlo a otra ruta.
Determinar el estado de inicio de sesión
Ahora, técnicamente hablando, esto es todo lo que tenemos que hacer. Pero es posible que se pregunte "¿cómo sabemos si el usuario ha iniciado sesión?" Aquí es donde entra en juego su propia aplicación. En este ejemplo, estamos usando CheatCode Next.js Boilerplate que depende de que un usuario autenticado (si está disponible) esté presente en una tienda Redux global.
Para hacer todo esto un poco más concreto, echemos un vistazo a esa configuración ahora:
```js 
/components/AuthenticatedRoute/index.js
import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

const authenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      if (this.props.isLoggedIn) {
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || "/login");
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />;
    }
  }

  return connect((state) => ({
    isLoggedIn: state?.authenticated && !!state?.user,
  }))(AuthenticatedRoute);
};

export default authenticatedRoute;
```
El gran cambio que hemos hecho aquí es importar el connect()método del react-reduxpaquete (ya instalado en el repetitivo) y luego llamar a esa función, pasándole una mapStateToPropsfunción y luego envolviéndola alrededor de nuestro componente. Para ser claros, esta parte:
```js 
/components/AuthenticatedRoute/index.js
return connect((state) => ({
  isLoggedIn: state?.authenticated && !!state?.user,
}))(AuthenticatedRoute);
```
Aquí, la función que pasamos como primer argumento connect()es la mapStateToPropsfunción (como se nombra en la react-reduxdocumentación). Esta función toma en cuenta el estado global actual de la aplicación proporcionada por el código modelo <ReduxProvider />de /pages/_app.jsCheatCode Next.js.
Al usar ese estado, como su nombre lo indica, asigna ese estado a un componente de React que se transmitirá a nuestro <AuthenticatedRoute />componente definido justo encima.
Si miramos de cerca, aquí, estamos configurando un accesorio llamado isLoggedIn, verificando si el authenticatedvalor en nuestro estado es truey si tenemos o no un userobjeto en estado. si lo hacemos? ¡El usuario ha iniciado sesión! Si no, isLoggedInes falso.
Si mira hacia atrás en la componentDidMount()función, aquí es donde estamos poniendo isLoggedInen uso el nuevo accesorio.

Uso de otras fuentes de autenticación
Si no está utilizando CheatCode Next.js Boilerplate, la forma en que llega al estado autenticado de su usuario depende de su aplicación. Un ejemplo rápido y sucio de usar otra API se vería así:
```js
import React from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { myAuthenticationAPI } from 'my-authentication-api';

const authenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    async componentDidMount() {
      const isLoggedIn = await myAuthenticationAPI.isLoggedIn();

      if (isLoggedIn) {
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || "/login");
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />;
    }
  }

  return AuthenticatedRoute;
};

export default authenticatedRoute;
```
En este ejemplo, casi todo es idéntico, pero en lugar de anticipar un valor de autenticación proveniente de una tienda de Redux, simplemente llamamos a nuestra API de autenticación (por ejemplo, Firebase) directamente, confiando en el valor de retorno de esa llamada como nuestro isLoggedInestado.

Implementar un componente de ruta pública
Ahora, algunas buenas noticias: nuestro publicRoutecomponente es idéntico al que vimos anteriormente con un pequeño cambio:
```js
/components/PublicRoute/index.js

import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

const publicRoute = (Component = null, options = {}) => {
  class PublicRoute extends React.Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || "/documents");
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />;
    }
  }

  return connect((state) => ({
    isLoggedIn: state?.authenticated && !!state?.user,
  }))(PublicRoute);
};

export default publicRoute;
```
¿Puedes distinguirlo? Arriba en el componentDidMounthemos agregado una !para decir "si el usuario no ha iniciado sesión, continúe y renderice el componente. Si está conectado, rediríjalo".
Literalmente la lógica inversa a nuestra authenticatedRoute. El punto aquí es que queremos usar el publicRoute()componente en rutas similares /logino /signuppara redirigir a los usuarios ya autenticados fuera de esas páginas. Esto asegura que no tengamos problemas con la base de datos más tarde, como usuarios duplicados o sesiones de múltiples usuarios.
