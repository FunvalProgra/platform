---
title: 'useReducer'
date: 2024-09-26T15:02:10-05:00
draft: false
showPagination: false
---

En el desarrollo con React, la gestión del estado es esencial para construir interfaces dinámicas y reactivas. Hasta ahora, seguramente has trabajado con `useState` para manejar el estado local en tus componentes, y `useEffect` para manejar efectos secundarios como peticiones a APIs o actualizaciones del DOM. Aunque `useState` es poderoso, puede volverse limitado cuando el estado crece en complejidad, ya que múltiples valores o acciones pueden requerir una estructura más organizada. Aquí es donde entra en juego `useReducer`.

En este artículo, exploraremos `useReducer`, una alternativa a `useState` que es ideal para manejar estados más complejos o situaciones donde el flujo de acciones sea importante.

## ¿Qué es `useReducer`?

`useReducer` es un _hook_ de React que proporciona una forma de gestionar el estado cuando se requiere una lógica de actualización más compleja. A diferencia de `useState`, que se centra en actualizar un valor directamente, `useReducer` utiliza un patrón de tipo "acción" para manejar las actualizaciones de estado. Este patrón es similar al que se utiliza en bibliotecas como Redux.

La idea detrás de `useReducer` es separar las actualizaciones de estado en una función "reducer", donde cada acción describe explícitamente cómo debe cambiar el estado.

## Sintaxis de `useReducer`

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- **`state`**: El estado actual, que es un objeto o valor gestionado por el reducer.
- **`dispatch`**: Una función que se usa para enviar acciones que modificarán el estado.
- **`reducer`**: Una función que toma dos argumentos: el estado actual y una acción. Devuelve un nuevo estado basado en la acción.
- **`initialState`**: El estado inicial que se pasará al `reducer`.

### ¿Cuándo usar `useReducer` en lugar de `useState`?

Aunque `useState` es excelente para manejar estados simples, `useReducer` es más apropiado en situaciones donde:

- El estado tiene múltiples subvalores que cambian de diferentes formas.
- Se requiere lógica de actualización más avanzada, como cálculos condicionales o dependientes de múltiples factores.
- El flujo de acciones necesita ser más predecible y centralizado.

Un ejemplo típico sería un formulario con múltiples campos, donde cada campo debe actualizarse de forma separada y posiblemente desencadenar validaciones o transformaciones.

## Ejemplo básico de `useReducer`

Para entender mejor su funcionamiento, vamos a construir un ejemplo sencillo que simula un contador, pero en lugar de utilizar `useState`, emplearemos `useReducer` para gestionar sus acciones (`increment`, `decrement` y `reset`).

```jsx
import React, { useReducer } from 'react';

// Definir el estado inicial
const initialState = { count: 0 };

// Reducer que maneja las acciones
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Acción no soportada');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reiniciar</button>
    </div>
  );
}

export default Counter;
```

En este ejemplo:

- El reducer recibe el estado actual y una acción (con un tipo, como `'increment'`, `'decrement'`, o `'reset'`).
- Según el tipo de acción, el estado se actualiza y el nuevo estado es devuelto.

Este patrón es particularmente útil cuando queremos manejar varios tipos de acciones que pueden alterar el estado de diferentes formas, como en sistemas de control más complejos o formularios extensos.

## Ejemplo avanzado: Gestión de formularios

Veamos un caso más avanzado donde `useReducer` es extremadamente útil: la gestión de formularios. En formularios con múltiples campos, validar y actualizar cada campo con `useState` puede volverse complicado rápidamente. Aquí, `useReducer` ofrece una estructura más clara y modular.

```jsx
import React, { useReducer } from 'react';

// Estado inicial del formulario
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
};

// Reducer para manejar el formulario
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validación simple
    const errors = {};
    if (!state.username)
      errors.username = 'El nombre de usuario es obligatorio';
    if (!state.email) errors.email = 'El correo electrónico es obligatorio';
    if (state.password !== state.confirmPassword)
      errors.password = 'Las contraseñas no coinciden';

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
    } else {
      console.log('Formulario enviado', state);
      dispatch({ type: 'RESET_FORM' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        value={state.username}
        onChange={handleChange}
        placeholder='Nombre de usuario'
      />
      {state.errors.username && <p>{state.errors.username}</p>}
      <input
        type='email'
        name='email'
        value={state.email}
        onChange={handleChange}
        placeholder='Correo electrónico'
      />
      {state.errors.email && <p>{state.errors.email}</p>}
      <input
        type='password'
        name='password'
        value={state.password}
        onChange={handleChange}
        placeholder='Contraseña'
      />
      {state.errors.password && <p>{state.errors.password}</p>}
      <input
        type='password'
        name='confirmPassword'
        value={state.confirmPassword}
        onChange={handleChange}
        placeholder='Confirmar contraseña'
      />
      <button type='submit'>Registrarse</button>
    </form>
  );
}

export default RegistrationForm;
```

En este ejemplo:

- Cada campo del formulario se gestiona mediante `dispatch` y se valida con lógica personalizada.
- El `reducer` se encarga de actualizar el estado de los campos y de manejar los errores de validación.

## Conclusión

`useReducer` ofrece una manera más robusta de manejar el estado complejo en React. Si trabajas con estructuras de estado que requieren varias operaciones o múltiples subvalores, puede ser una opción más clara y eficiente en comparación con `useState`. Este patrón también facilita la separación de la lógica de actualización en un solo lugar, haciendo que tu código sea más fácil de mantener y escalar.

Si ya dominas `useState` y `useEffect`, comenzar a usar `useReducer` es el siguiente paso para gestionar aplicaciones React más avanzadas y dinámicas.

## Recursos

{{< youtube cTJET6PQsqA >}}
