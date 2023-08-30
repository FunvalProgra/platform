---
title: "React Router"
date: 2023-08-29T16:49:00-05:00
draft: false
showPagination: false
---

En el mundo del desarrollo web moderno, las aplicaciones de una sola página (Single Page Applications, SPAs) han ganado popularidad debido a su capacidad para ofrecer experiencias de usuario fluidas y receptivas. Sin embargo, la gestión de la navegación en una SPA puede ser un desafío. Es aquí donde entra en juego React Router, una biblioteca que proporciona un enfoque declarativo y eficiente para manejar la navegación en aplicaciones web construidas con React.

## ¿Qué es React Router?

React Router es una biblioteca de enrutamiento diseñada específicamente para aplicaciones web construidas con React. Permite la creación de aplicaciones de una sola página que pueden cambiar dinámicamente de contenido sin tener que recargar completamente la página. React Router ofrece un conjunto de componentes que facilitan la definición de rutas y la navegación entre diferentes vistas de la aplicación.

## Razones para usar React Router

1. **Declarativo y Componente-Centrico**: React Router permite definir las rutas y la navegación utilizando componentes de React. Esto sigue el enfoque declarativo de React en el que se describe cómo debería lucir la interfaz de usuario en función del estado y los datos, lo que facilita la comprensión y el mantenimiento del código.

2. **Navegación Sin Recarga de Página**: React Router permite la navegación entre diferentes vistas de la aplicación sin necesidad de recargar completamente la página. Esto resulta en una experiencia de usuario más fluida y rápida, ya que solo el contenido relevante se actualiza en función de la ruta seleccionada.

3. **Gestión de Historial**: React Router maneja automáticamente el historial del navegador, lo que permite a los usuarios utilizar los botones "Atrás" y "Adelante" del navegador para navegar entre las vistas previas y siguientes en la aplicación.

4. **Manejo de Rutas Anidadas**: Las aplicaciones web modernas suelen tener rutas anidadas, es decir, rutas que dependen de la jerarquía de componentes. React Router ofrece una forma intuitiva de manejar estas rutas anidadas y mantener el enrutamiento limpio y organizado.

## Ventajas de usar React Router

- **Legibilidad y Organización**: Al definir las rutas como componentes de React, el enrutamiento se integra de manera más natural con el código de la aplicación. Esto hace que el código sea más legible y fácil de mantener, especialmente en aplicaciones con rutas complejas.

- **Gestión Centralizada**: React Router centraliza la lógica de enrutamiento, lo que facilita el seguimiento y la gestión de todas las rutas en un solo lugar.

- **Integración con React**: Al estar diseñado específicamente para integrarse con React, React Router se integra sin problemas en el flujo de trabajo de desarrollo de React y se aprovecha de sus características, como el estado y los componentes.

## Cuándo usar React Router

React Router es ideal cuando estás construyendo aplicaciones web de una sola página que requieren una navegación fluida y una experiencia de usuario enriquecida. Algunos casos comunes en los que React Router es una excelente elección incluyen:

- Aplicaciones web y paneles de administración.
- Plataformas de comercio electrónico con múltiples páginas y vistas.
- Sitios de noticias y blogs con artículos y categorías.
- Plataformas de redes sociales con perfiles de usuarios y flujos de noticias.

## Sintaxis Básica de React Router

React Router proporciona tres componentes principales para la configuración básica de enrutamiento: `BrowserRouter`, `Route` y `Link`. A continuación, se presenta una descripción general de su uso:

- **BrowserRouter**: Es el componente que debe envolver toda la aplicación. Proporciona la funcionalidad de manejo de historial del navegador y asegura que las rutas funcionen correctamente.

- **Route**: Se utiliza para definir cómo se debe renderizar un componente cuando la ruta coincide con la URL actual. Puede aceptar propiedades como path para la ruta y component para el componente que debe renderizarse.

- **Link**: Proporciona una forma declarativa de crear enlaces entre diferentes rutas. Al hacer clic en un enlace creado con Link, React Router navegará a la nueva ruta sin recargar la página.

## Instalación

Una vez que tienes tu proyecto de React, instala React Router utilizando `npm`. Puedes elegir entre tres paquetes diferentes de React Router, según tus necesidades:

- `react-router-dom`: Paquete para la web, que incluye enrutamiento y navegación para aplicaciones en el navegador.
- `react-router-native`: Paquete para aplicaciones React Native.
- `react-router`: Paquete base que proporciona la lógica central de enrutamiento (generalmente no se usa directamente).

En este ejemplo, usaremos react-router-dom, que es el paquete para aplicaciones web. Ejecuta uno de los siguientes comandos en tu terminal:

```bash
npm install react-router-dom
```

## Ejemplos de Uso de React Router

A continuación, se presentan tres ejemplos de cómo se puede utilizar React Router en una aplicación de React:

### Ejemplo 1: Navegación Básica

Supongamos que estamos construyendo un sitio web de noticias con dos páginas: una página de inicio y una página de artículos. El componente `App` podría lucir así:

```jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/articulos">Artículos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articulos" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Ejemplo 2: Rutas Anidadas

Imagina que estamos construyendo una aplicación de administración con rutas anidadas para usuarios y configuración. El enrutamiento podría tener la siguiente estructura:

```jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import Settings from "./Settings";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Tablero</Link>
        <Link to="/usuario">Usuario</Link>
        <Link to="/configuracion">Configuración</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/usuario" element={<UserProfile />} />
        <Route path="/configuracion" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Ejemplo 3: Paso de Parámetros

En una aplicación de comercio electrónico, podríamos querer mostrar detalles de productos individuales. Para lograrlo, podríamos usar parámetros en las rutas para identificar productos específicos:

```jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Productos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Recursos

Por el momento solo mira el primer video desde el minuto 3:26 hasta el 14:31. El segundo puedes verlo completo.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/42tFXd1PdCk?start=206&end=871" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br>

{{< youtube iPNt12IdbCU >}}
