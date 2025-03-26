---
title: "Carga diferida con React.lazy y Suspense 🚀"
date: 2024-07-14T18:32:03-05:00
draft: false
showPagination: false
---

## Introducción 🌟

En aplicaciones React grandes, es común tener componentes que no se necesitan cargar inmediatamente. Para mejorar el rendimiento y la experiencia del usuario, podemos usar la carga diferida (*lazy loading*). React proporciona `React.lazy` y `Suspense` para facilitar esta tarea.

- **React.lazy**: Permite cargar componentes de forma diferida, es decir, solo cuando son necesarios.
- **Suspense**: Permite mostrar un contenido de reserva (*fallback*) mientras se carga el componente diferido.

## Requisitos previos ✅

- Node.js y npm instalados.
- Conocimientos básicos de React.

## Pasos 🛠️

### 1. Crear una aplicación React 🖥️

Si no tienes una aplicación React existente, puedes crear una nueva con Create React App:

```bash
npx create-react-app mi-app-lazy
cd mi-app-lazy
```

### 2. Crear un componente para carga diferida 🧩

Crea un componente que se cargará de forma diferida. Por ejemplo, un componente llamado `ComponenteDiferido.js`:

```javascript
// src/ComponenteDiferido.js
function ComponenteDiferido() {
  return <h1>Componente cargado de forma diferida! 🎉</h1>;
}

export default ComponenteDiferido;
```

### 3. Cargar el componente de forma diferida con React.lazy ⏳

En el componente principal de tu aplicación (por ejemplo, `App.js`), importa el componente de forma diferida usando `React.lazy`:

```javascript
// src/App.js
import React, { lazy, Suspense } from 'react';

const ComponenteDiferido = lazy(() => import('./ComponenteDiferido.js'));

function App() {
  return (
    <div>
      <h1>Aplicación con carga diferida 🚀</h1>
      <Suspense fallback={<div>Cargando... ⏳</div>}>
        <ComponenteDiferido />
      </Suspense>
    </div>
  );
}

export default App;
```

### 4. Usar Suspense para mostrar un fallback 🔄

El componente `Suspense` envuelve el componente cargado de forma diferida y recibe una prop `fallback`. Esta prop define el contenido que se mostrará mientras se carga el componente diferido. En este ejemplo, se muestra "Cargando...".

### 5. Probar la aplicación 🧪

Ejecuta la aplicación:

```bash
npm start
```

Abre tu navegador y ve a `http://localhost:3000`. Verás el mensaje "Cargando... ⏳" mientras se carga el componente diferido y luego el contenido del componente.

## Ejemplo más complejo 🌐

Es posible tener varios componentes cargados de forma diferida dentro del mismo componente `Suspense`, y también es posible crear fallbacks más complejos, como por ejemplo componentes que simulen la carga de la página que se quiere cargar.

```javascript
import React, { lazy, Suspense } from 'react';

const ComponenteA = lazy(() => import('./ComponenteA.js'));
const ComponenteB = lazy(() => import('./ComponenteB.js'));

function App() {
  return (
    <div>
      <h1>Aplicación con múltiples componentes diferidos 🚀</h1>
      <Suspense fallback={<div>Cargando componentes... 🔄</div>}>
        <ComponenteA />
        <ComponenteB />
      </Suspense>
    </div>
  );
}

export default App;
```

## Conclusión 🎯

React.lazy y Suspense son herramientas poderosas para mejorar el rendimiento de aplicaciones React grandes. Al cargar componentes de forma diferida, reducimos el tamaño inicial del paquete y mejoramos la experiencia del usuario. Es importante recordar que Suspense solo funciona con componentes cargados de forma diferida usando React.lazy o con componentes que resuelven una promesa, como cuando se utiliza la API `use`.

## Recursos 
{{< youtube 2hq8g7VlIPo >}}
 