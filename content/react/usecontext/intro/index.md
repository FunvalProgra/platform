---
title: "Utilizando useContext en React para una Gestión de Estado más Eficiente y Limpia"
date: 2023-10-05T18:06:03-05:00
draft: false
showPagination: false
---

En el mundo de React, la gestión del estado es fundamental. Sin embargo, a medida que las aplicaciones crecen en complejidad, la propensión a tener un código desordenado aumenta. Aquí es donde **useContext** entra en juego. Este artículo aborda en profundidad el concepto de **useContext** en React, explicando qué es, por qué se debe usar, cuándo aplicarlo y cómo aprovecharlo al máximo. Además, proporciona dos ejemplos prácticos que hacen uso de **useContext** para consumir datos de una API.

## Introducción

React es una biblioteca de JavaScript que se ha destacado por su capacidad para construir interfaces de usuario interactivas y reactivas. A medida que las aplicaciones React crecen, se vuelve esencial una gestión eficiente del estado. **useContext** es una característica fundamental de React que ayuda a gestionar el estado de manera limpia y eficiente al proporcionar un contexto global accesible desde cualquier parte de la aplicación.

## ¿Qué es **useContext**?

**useContext** es un hook de React que permite acceder al contexto de la aplicación desde cualquier componente, sin importar su profundidad en el árbol de componentes. El contexto es una forma de pasar datos a través del árbol de componentes sin tener que pasar propiedades manualmente a cada nivel.

## ¿Por qué utilizar **useContext**?

### Evita la "prop drilling"

En aplicaciones de React, es común pasar datos desde un componente principal a través de múltiples niveles de componentes secundarios. Esto se conoce como "prop drilling", y puede volverse engorroso y propenso a errores a medida que la aplicación crece. **useContext** resuelve este problema al permitir el acceso directo a los datos necesarios sin pasarlos explícitamente a través de props.

### Simplifica la gestión del estado global

Para aplicaciones que requieren un estado global, como la autenticación del usuario o la configuración de la aplicación, **useContext** proporciona una forma sencilla de compartir y actualizar ese estado en cualquier parte de la aplicación. Esto mejora la mantenibilidad y la claridad del código.

### Mejora la legibilidad del código

Al eliminar la necesidad de pasar datos de manera explícita a través de props, el código se vuelve más limpio y legible. Los componentes pueden centrarse en su función principal en lugar de preocuparse por la transferencia de datos.

## ¿Cuándo utilizar **useContext**?

**useContext** es útil en varias situaciones:

### Aplicaciones con un estado global

Cuando necesitas acceder o modificar datos en múltiples componentes a lo largo de la aplicación, como la autenticación, las preferencias del usuario o la gestión del carrito de compras.

### Reducción del "prop drilling"

Cuando encuentras que la transferencia de datos a través de props se vuelve confusa o incómoda debido a la profundidad del árbol de componentes.

### Claridad y simplicidad

Cuando deseas mejorar la legibilidad y el mantenimiento del código al evitar la propagación innecesaria de datos.

## Cómo utilizar **useContext**

### Creación de un contexto

Primero, debes crear un contexto utilizando la función **createContext**. Este contexto contendrá los datos globales que deseas compartir.

```javascript
import { createContext } from "react";

const MiContexto = createContext();
```

### Proveer datos al contexto

A continuación, debes utilizar un componente proveedor para suministrar los datos al contexto. Esto se hace utilizando el componente **<MiContexto.Provider>** y pasándole un valor.

```javascript
import { createContext, useState } from "react";

const MiContexto = createContext();

function MiContextoProvider(props) {
  const [miDato, setMiDato] = useState("Valor inicial");

  return (
    <MiContexto.Provider value={{ miDato, setMiDato }}>
      {props.children}
    </MiContexto.Provider>
  );
}
```

### Consumir datos del contexto

Por último, en cualquier componente que necesite acceder a los datos del contexto, puedes utilizar el hook **useContext** para hacerlo.

```javascript
import React, { useContext } from "react";
import MiContexto from "./MiContexto";

function ComponenteConsumidor() {
  const { miDato, setMiDato } = useContext(MiContexto);

  return (
    <div>
      <p>Mi dato global: {miDato}</p>
      <button onClick={() => setMiDato("Nuevo valor")}>Cambiar Dato</button>
    </div>
  );
}
```

## Ejemplo 1: Consumiendo datos de una API con **useContext**

Supongamos que deseamos crear un contexto que almacene los datos de una API. Aquí está el código:

```javascript
import React, { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

function ApiContextProvider(props) {
  const [data, setData] = useState([]);
  const apiUrl = "https://api.example.com/data";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={data}>{props.children}</ApiContext.Provider>
  );
}

export { ApiContext, ApiContextProvider };
```

Luego, en cualquier componente de la aplicación, podemos consumir los datos de la API utilizando **useContext**:

```javascript
import React, { useContext } from "react";
import { ApiContext } from "./ApiContextProvider";

function DataDisplay() {
  const data = useContext(ApiContext);

  return (
    <div>
      <h2>Data from API</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
```

## Ejemplo 2: Cambio de tema con **useContext**

Supongamos que deseamos permitir a los usuarios cambiar el tema de la aplicación. Aquí está el código:

```javascript
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
```

Luego, en cualquier componente de la aplicación, podemos consumir y cambiar

## Recursos

{{< youtube mzqRLumrJXY >}}

<br>

{{< youtube lSMBhUEVK8k >}}