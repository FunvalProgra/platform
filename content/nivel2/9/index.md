---
title: "Manejo de Formularios en React: Captura de Datos del Usuario"
date: 2023-03-12T11:45:29-06:00
draft: false
showPagination: false
---
## Objetivo del día:
El objetivo de este día es aprender cómo trabajar con formularios en React y cómo capturar datos ingresados por el usuario. Aprenderemos a manejar eventos, controlar campos de formulario y enviar datos a través de formularios.

## Temas a cubrir:

1. **Introducción a los Formularios en React:**
   - ¿Qué es un formulario en React y por qué son importantes?
   - Los diferentes elementos y atributos utilizados en los formularios.

2. **Manejo de Eventos en Formularios:**
   - Captura de eventos como `onChange` y `onSubmit`.
   - Actualización del estado con los datos ingresados por el usuario.

3. **Control de Campos de Formulario:**
   - Controlando los valores de los campos de formulario utilizando el estado.
   - Estableciendo valores iniciales y validaciones.

4. **Envío de Datos del Formulario:**
   - Enviando datos ingresados por el usuario a un servidor o a otras partes de la aplicación.
   - Validación de los datos antes del envío.

En este ejemplo, construiremos una simple aplicación de lista de tareas (to-do list) donde los usuarios podrán agregar, marcar como completadas y eliminar tareas. Utilizaremos React para crear componentes funcionales, React Hooks para manejar el estado y formularios, y React Router para navegar entre diferentes vistas.

**App.js**

```jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Componentes
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoDetail from './TodoDetail';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Función para agregar una nueva tarea
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Función para marcar una tarea como completada
  const markCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Función para eliminar una tarea
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/add">Agregar Tarea</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h2>Lista de Tareas</h2>
            <TodoList
              todos={todos}
              markCompleted={markCompleted}
              deleteTodo={deleteTodo}
            />
          </Route>

          <Route path="/add">
            <h2>Agregar Nueva Tarea</h2>
            <AddTodo addTodo={addTodo} />
          </Route>

          <Route path="/todo/:id">
            <TodoDetail todos={todos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

**TodoList.js**

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = ({ todos, markCompleted, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => markCompleted(todo.id)}
          />
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.task}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
          <Link to={`/todo/${todo.id}`}>Detalles</Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
```

**AddTodo.js**

```jsx
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ingrese una nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTodo;
```

**TodoDetail.js**

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const TodoDetail = ({ todos }) => {
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return <h2>Tarea no encontrada</h2>;
  }

  return (
    <div>
      <h2>Detalles de la Tarea</h2>
      <p>ID: {todo.id}</p>
      <p>Tarea: {todo.task}</p>
      <p>Completada: {todo.completed ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default TodoDetail;
```

En este ejemplo, hemos creado una aplicación de lista de tareas con React. Utilizamos componentes funcionales, React Hooks para manejar el estado y React Router para navegar entre diferentes vistas. Cada tarea se representa como un objeto con un `id`, una `task` y un estado `completed`. Los usuarios pueden agregar nuevas tareas, marcar tareas como completadas y ver los detalles de una tarea específica.

## Actividades prácticas:

1. **Crear un Formulario Simple:**
   - Crea un formulario simple con campos como nombre, correo electrónico y mensaje.
   - Maneja eventos `onChange` para capturar y actualizar los datos ingresados por el usuario.

2. **Controlar Campos de Formulario:**
   - Establece valores iniciales para los campos de formulario utilizando el estado.
   - Asegúrate de que los campos de formulario estén controlados y se actualicen correctamente.

3. **Validación de Datos del Formulario:**
   - Implementa la validación básica en el formulario (por ejemplo, el campo de correo electrónico debe tener un formato válido).
   - Muestra mensajes de error si los datos no son válidos.

## Desafíos opcionales para repaso:

1. **Envío de Datos del Formulario:**
   - Agrega un botón de envío al formulario y maneja el evento `onSubmit`.
   - Captura los datos del formulario y muestra una confirmación de envío o un mensaje de error en función de la validación.

2. **Formulario de Registro y Autenticación:**
   - Crea un formulario de registro que solicite información como nombre de usuario, contraseña, etc.
   - Implementa la funcionalidad de autenticación con una validación básica de inicio de sesión.

3. **Manejo de Formularios con React Hooks:**
   - Migrar el manejo de formularios a componentes funcionales utilizando React Hooks como `useState`.

## Resumen del día:
En el día 9, hemos aprendido sobre el manejo de formularios en React y cómo capturar datos ingresados por el usuario. Hemos trabajado con eventos `onChange` y `onSubmit`, controlado los campos de formulario y validado los datos antes del envío. También hemos explorado desafíos adicionales relacionados con el envío de datos, el formulario de registro y el manejo de formularios con React Hooks.

Recuerda que el manejo de formularios es una parte esencial de muchas aplicaciones web, y React proporciona herramientas y eventos para facilitar el proceso de capturar y validar datos del usuario. Continúa practicando y experimentando con formularios en tus proyectos de React. ¡Sigue adelante y sigue construyendo con formularios en React!

## Recursos

https://es.react.dev/reference/react-dom/components/input

{{< youtube laxAixkZ0bA >}}