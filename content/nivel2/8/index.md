---
title: "React Router: Navegación y Enrutamiento en una Aplicación React"
date: 2023-03-12T11:45:29-06:00
draft: false
showPagination: false
---
## Objetivo del día:
El objetivo de este día es aprender sobre React Router, una librería popular utilizada para gestionar la navegación y enrutamiento en aplicaciones de React. Aprenderemos cómo utilizar React Router para crear rutas, enlazar componentes y navegar entre páginas en una aplicación de una sola página (SPA).

## Temas a cubrir:

1. **Introducción a React Router:**
   - ¿Qué es React Router y por qué es importante para aplicaciones React?
   - Conceptos básicos de enrutamiento y rutas en React Router.

2. **Configuración de React Router:**
   - Instalación de React Router en una aplicación de React.
   - Configuración básica de rutas utilizando `BrowserRouter`.

1. Instala React Router en tu proyecto utilizando `npm` o `yarn`:

```bash
npm install react-router-dom
```

2. En el archivo principal de tu aplicación (por lo general, `index.js` o `App.js`), importa los componentes necesarios de React Router y configura las rutas utilizando el componente `BrowserRouter`:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>¡Bienvenido a la Página de Inicio!</h2>;
const About = () => <h2>Esta es la Página Acerca de Nosotros</h2>;
const Contact = () => <h2>Contáctanos en la Página de Contacto</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          {/* Definimos los enlaces de navegación */}
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Definimos las rutas */}
        <Switch>
          {/* La ruta exacta coincide solo con la ruta raíz */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

En este ejemplo, hemos configurado React Router en nuestra aplicación. Importamos los componentes necesarios de React Router (`BrowserRouter`, `Route`, `Switch`, y `Link`) y los utilizamos para definir nuestras rutas y enlaces de navegación.

- Hemos creado tres componentes funcionales: `Home`, `About` y `Contact`, que representan diferentes páginas de nuestra aplicación.
- Utilizamos el componente `Link` para crear enlaces de navegación que lleven al usuario a las páginas correspondientes.
- Utilizamos el componente `Route` para asociar cada componente con una ruta específica.

El componente `Switch` garantiza que solo se renderice la primera ruta coincidente. Esto es útil cuando tenemos rutas que son subconjuntos de otras rutas (por ejemplo, `/about` y `/about/team`). La ruta exacta (`exact`) asegura que solo la ruta raíz se muestre cuando la URL coincide exactamente con `"/"`.

3. **Creación de Rutas y Enlaces:**
   - Uso de los componentes `Route` para definir rutas y sus componentes asociados.
   - Uso de los componentes `Link` para crear enlaces de navegación entre páginas.

4. **Enrutamiento con Parámetros:**
   - Uso de parámetros dinámicos en las rutas para páginas con datos específicos.
   - Extracción de parámetros de la URL utilizando `useParams` (React Hooks).

1. Primero, asegúrate de haber configurado React Router en tu proyecto como se mostró en el ejemplo anterior.

2. Crea un nuevo componente llamado `UserDetail.js` que representará la página de detalle de un usuario. Este componente recibirá el parámetro `id` como parte de la URL y mostrará los detalles del usuario correspondiente.

**UserDetail.js**

```jsx
import React from 'react';

const users = [
  { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
  { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
  { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
];

const UserDetail = ({ match }) => {
  // Obtenemos el valor del parámetro "id" de la URL utilizando "match.params"
  const userId = parseInt(match.params.id, 10);
  
  // Buscamos el usuario correspondiente en la lista de usuarios
  const user = users.find((user) => user.id === userId);

  // Si no encontramos el usuario, mostramos un mensaje de error
  if (!user) {
    return <h2>Usuario no encontrado</h2>;
  }

  // Mostramos los detalles del usuario
  return (
    <div>
      <h2>Detalles del Usuario {user.name}</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
```

3. Ahora, actualiza tu archivo principal de la aplicación (`App.js` o `index.js`) para definir una nueva ruta que contenga el parámetro `id` utilizando el componente `Route`.

**App.js**

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserDetail from './UserDetail';

const Home = () => <h2>¡Bienvenido a la Página de Inicio!</h2>;
const About = () => <h2>Esta es la Página Acerca de Nosotros</h2>;
const Contact = () => <h2>Contáctanos en la Página de Contacto</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          {/* Ruta con parámetro "id" */}
          <Route path="/user/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

4. Ahora, cuando navegues a la ruta `/user/1`, `/user/2`, o `/user/3`, verás los detalles del usuario correspondiente. Si intentas acceder a una ruta que no tenga un usuario válido, verás el mensaje "Usuario no encontrado".

Con este ejemplo, has implementado enrutamiento con parámetros en React Router. Ahora puedes pasar y recibir parámetros en las URLs y utilizarlos para mostrar contenido específico en tus páginas.

## Actividades prácticas:

1. **Configurar React Router en la Aplicación:**
   - Instala React Router en tu aplicación utilizando `npm` o `yarn`.
   - Configura las rutas utilizando `BrowserRouter` en el archivo principal de la aplicación (por lo general, `index.js` o `App.js`).

2. **Crear Rutas y Enlaces:**
   - Crea diferentes componentes que representen distintas páginas de la aplicación.
   - Define rutas utilizando el componente `Route` para asociar componentes a rutas específicas.
   - Crea enlaces de navegación utilizando el componente `Link` para permitir a los usuarios cambiar entre páginas.

## Desafíos opcionales para repaso:

1. **Enrutamiento con Parámetros:**
   - Agrega una ruta que acepte un parámetro específico en la URL.
   - Utiliza `useParams` (React Hooks) para acceder y mostrar el parámetro en la página correspondiente.

2. **Enrutamiento Anidado:**
   - Crea rutas anidadas para representar jerarquías de navegación en la aplicación.
   - Asegúrate de que los enlaces y rutas anidadas funcionen correctamente.

3. **Redirecciones:**
   - Implementa una redirección para una ruta específica.
   - Asegúrate de que los usuarios sean redirigidos automáticamente a la nueva ruta.

## Resumen del día:
En el día 8, hemos aprendido sobre React Router y cómo utilizarlo para gestionar la navegación y enrutamiento en una aplicación de React. Hemos configurado React Router, creado rutas, enlaces y hemos aprendido sobre el enrutamiento con parámetros. También hemos explorado desafíos adicionales relacionados con el enrutamiento anidado y las redirecciones.

Recuerda que React Router es una herramienta esencial para crear aplicaciones de una sola página (SPA) en React y facilita la navegación entre diferentes vistas. Continúa practicando y experimentando con React Router para mejorar tus habilidades en el enrutamiento y la navegación en tus aplicaciones de React. ¡Sigue adelante y sigue construyendo con React Router!

## Recursos

{{< youtube iPNt12IdbCU >}}

https://reactrouter.com/en/main/start/tutorial
