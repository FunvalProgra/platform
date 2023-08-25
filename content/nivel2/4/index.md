---
title: "Componentes con Estado en React utilizando useState()"
date: 2023-03-12T11:46:35-06:00
draft: false
showPagination: false
---

En el mundo del desarrollo web moderno, React se ha convertido en una herramienta fundamental para la creación de interfaces de usuario interactivas y dinámicas. Una de las características clave de React es la capacidad de trabajar con componentes con estado, que permiten administrar y actualizar datos a lo largo del tiempo. En versiones anteriores, los componentes con estado se implementaban mediante clases, pero con la introducción de React Hooks, como `useState()`, ahora también es posible crear componentes con estado utilizando funciones.

## Introducción a `useState()`

`useState()` es uno de los Hooks más utilizados en React. Este Hook permite agregar estado a los componentes funcionales, lo que simplifica la gestión de datos cambiantes sin la necesidad de crear clases. Con `useState()`, puedes declarar una variable de estado en el cuerpo de un componente funcional y React se encargará de mantener su estado entre renderizaciones.

## Sintaxis y uso

La sintaxis básica de `useState()` es la siguiente:

```jsx
const [state, setState] = useState(initialValue);
```

- `state` es la variable de estado que mantiene el valor actual.
- `setState` es una función que te permite actualizar el valor de state.
- `initialValue` es el valor inicial que se asigna a state en el primer renderizado.

## Implementación y ejemplos

A continuación, se presentan tres ejemplos prácticos y sencillos de cómo utilizar `useState()` en componentes funcionales de React:

### Ejemplo 1: Contador

```jsx
import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

En este ejemplo, creamos un componente funcional llamado `Contador` que utiliza el Hook `useState` para agregar un estado llamado `contador`. La función `useState(0)` inicializa el estado con el valor 0. Luego, definimos una función `incrementarContador` que, al hacer clic en el botón, utiliza la función `setContador` para actualizar el estado sumando 1 al valor actual del contador. En el retorno del componente, mostramos el valor del contador y un botón que, al hacer clic, incrementa el contador en uno.

### Ejemplo 2: Alternar texto

```jsx
import React, { useState } from "react";

function AlternarTexto() {
  const [mostrarTexto, setMostrarTexto] = useState(true);

  const alternarTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <div>
      <button onClick={alternarTexto}>Alternar Texto</button>
      {mostrarTexto && <p>¡Texto alternado visible!</p>}
    </div>
  );
}

export default AlternarTexto;
```

En este ejemplo, creamos un componente funcional llamado `AlternarTexto` que utiliza el estado `mostrarTexto` para controlar si se muestra un texto alternado. Al principio, `mostrarTexto` se establece en `true`. Al hacer clic en el botón, la función `alternarTexto` utiliza `setMostrarTexto` para cambiar el valor de `mostrarTexto` al contrario de su valor actual (alternando entre `true` y `false`). En la renderización del componente, mostramos un botón que permite alternar el estado y, si `mostrarTexto` es `true`, se muestra un párrafo con el texto "¡Texto alternado visible!".

### Ejemplo 3: Lista de tareas

```jsx
import React, { useState } from "react";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
```

En este último ejemplo, creamos un componente funcional llamado `ListaDeTareas` que utiliza dos estados: `tareas` y `nuevaTarea`. `tareas` es una matriz que almacena las tareas agregadas y `nuevaTarea` es una cadena que almacena el valor del campo de entrada. La función `agregarTarea` se dispara al hacer clic en el botón "Agregar Tarea" y agrega la tarea ingresada a la matriz `tareas`. La función `onChange` del campo de entrada actualiza el estado `nuevaTarea` a medida que se escribe. Luego, en la renderización del componente, mostramos un campo de entrada, un botón para agregar tareas y una lista de tareas mostradas usando `map()`.

`useState()` es un poderoso Hook en React que permite agregar y gestionar estado en componentes funcionales de manera sencilla y eficiente. Los ejemplos presentados demuestran cómo puede utilizarse para crear componentes interactivos y dinámicos, como un contador, un alternador de texto y una lista de tareas. Esta funcionalidad es esencial para construir aplicaciones web modernas que respondan a las interacciones del usuario de manera fluida y efectiva.

## Recursos

{{< youtube TBxpAhpQqYk >}}

<br>

{{< youtube LmldFbeSTFc >}}
