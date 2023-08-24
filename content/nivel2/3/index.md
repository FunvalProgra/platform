---
title: "Eventos JSX en React"
date: 2023-03-12T11:45:29-06:00
draft: false
showPagination: false
---

React, una de las bibliotecas de JavaScript más populares para construir interfaces de usuario, utiliza una sintaxis especial llamada JSX (JavaScript XML) para definir componentes. Además de la representación de elementos visuales, React permite la interacción con estos componentes a través de eventos. Los eventos JSX permiten a los desarrolladores crear aplicaciones interactivas y dinámicas al capturar y responder a acciones del usuario, como clics de botones, cambios de entrada y más. En este artículo, exploraremos en profundidad los eventos JSX en React, analizando su sintaxis, proporcionando ejemplos prácticos y destacando buenas prácticas.

## Sintaxis

Los eventos JSX se utilizan para escuchar y manejar acciones realizadas por el usuario en componentes React. La sintaxis general para declarar un evento JSX es la siguiente:

```jsx
<elemento onClick={manejadorDeEvento} />
```

En esta sintaxis, `elemento` es el componente JSX en el que se desea capturar el evento, y `onClick` es el nombre del evento que se está escuchando. `manejadorDeEvento` es una función que se ejecutará cuando ocurra el evento.

## Ejemplos

### Ejemplo 1: Manejo de clics en un botón

```jsx
import React, { Component } from "react";

class BotonClic extends Component {
  handleClick() {
    alert("¡Botón clickeado!");
  }

  render() {
    return <button onClick={this.handleClick}>Clic aquí</button>;
  }
}

export default BotonClic;
```

En este ejemplo, el componente `BotonClic` muestra un botón en la interfaz de usuario. Cuando el botón se hace clic, se ejecuta la función `handleClick`, que muestra una alerta en pantalla.

### Ejemplo 2: Cambio de Entrada

```jsx
import React from "react";

function InputControl() {
  const handleInputChange = (event) => {
    console.log("Texto ingresado:", event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default InputControl;
```

En este ejemplo, creamos el componente `InputControl` que contiene un campo de entrada (`<input>`). Hemos definido una función llamada `handleInputChange` que se activará cada vez que cambie el valor del campo de entrada. En esta función, utilizamos `event.target.value` para acceder al valor actual del campo de entrada y luego lo imprimimos en la consola. Como no estamos manejando ningún estado, simplemente mostramos la información en la consola sin modificar la interfaz de usuario.

### Ejemplo 3: Pase del Cursor sobre un Elemento

```jsx
import React from "react";

function HoverExample() {
  const handleMouseOver = () => {
    console.log("Cursor encima del elemento");
  };

  const handleMouseLeave = () => {
    console.log("Cursor fuera del elemento");
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: "10px",
        border: "1px solid black",
      }}
    >
      Pasa el cursor aquí
    </div>
  );
}

export default HoverExample;
```

En este ejemplo, creamos el componente `HoverExample` que representa un `<div>` con un comportamiento de cambio cuando el cursor pasa por encima o se aleja de él. Usamos los eventos `onMouseOver` y `onMouseLeave` para capturar estos dos eventos respectivamente. Cuando el cursor entra en el elemento, se llama a la función `handleMouseOver`, que imprime un mensaje en la consola. Cuando el cursor sale del elemento, se llama a la función `handleMouseLeave`, que también imprime un mensaje en la consola. Como en los ejemplos anteriores, no estamos manejando estados ni modificando la interfaz de usuario.

### Ejemplo 4: Presionar una Tecla

```jsx
import React from "react";

function KeyPressExample() {
  const handleKeyPress = (event) => {
    console.log("Tecla presionada:", event.key);
  };

  return (
    <div>
      <p>Pulsa una tecla:</p>
      <input
        type="text"
        onKeyDown={handleKeyPress}
        style={{ fontSize: "16px", padding: "5px" }}
      />
    </div>
  );
}

export default KeyPressExample;
```

En este ejemplo, creamos el componente `KeyPressExample` que consiste en un campo de entrada (`<input>`) donde el usuario puede escribir. Utilizamos el evento `onKeyDown` para capturar cuando una tecla se presiona mientras el campo de entrada está enfocado. Cuando esto sucede, se llama a la función `handleKeyPress`, que recibe un objeto de evento como argumento. Utilizamos `event.key` para acceder a la tecla que se ha presionado y luego imprimimos esta información en la consola. Al igual que en los ejemplos anteriores, aquí tampoco manejamos estados ni modificamos la interfaz de usuario.

## Buenas Prácticas y Consideraciones

Al trabajar con eventos JSX en React, es importante tener en cuenta algunas buenas prácticas:

1. **Enlace de Eventos**: Asegúrate de enlazar correctamente los eventos. En React, es común usar funciones de flecha o enlazar métodos en el constructor para garantizar que el contexto sea el correcto.

2. **Evitar LLamadas Directas a Funciones**: No utilices llamadas directas a funciones en el atributo `onClick`, como `onClick={miFuncion()}`. En su lugar, pasa la referencia de la función, como `onClick={miFuncion}`.

3. **Uso de Eventos Sintéticos**: React abstrae los eventos nativos del navegador y utiliza eventos sintéticos para mantener la consistencia entre diferentes navegadores. Puedes acceder a propiedades del evento como `event.target.value`.

4. **Optimización de Rendimiento**: Ten en cuenta que la creación de una función en cada renderización puede afectar al rendimiento. En casos de componentes con muchas renderizaciones, considera memoizar funciones o utilizar componentes de clase con enlace en el constructor.


## Recursos

{{< youtube jAgWuD4dfBQ >}}

<br>

{{< youtube NK4MJOWPmsQ >}}

## Documentación

https://es.react.dev/learn/responding-to-events