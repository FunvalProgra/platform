---
title: "Manejo de listas y uso de keys en React"
date: 2023-03-12T11:45:29-06:00
draft: false
showPagination: false
---
## Objetivo del día:
El objetivo de este día es aprender cómo manejar listas de elementos en React y cómo utilizar las keys correctamente para mejorar el rendimiento y la eficiencia de las operaciones de actualización en el DOM.

## Temas a cubrir:

1. **Manejo de listas en React:**
   - Uso del método `map()` para iterar sobre elementos de una lista.
   - Cómo generar elementos dinámicamente a partir de una lista de datos.

Supongamos que queremos crear una aplicación de lista de compras donde los usuarios puedan agregar y eliminar elementos de la lista. Utilizaremos un componente `ShoppingList` para mostrar la lista de compras y un componente `ShoppingItem` para representar cada artículo de la lista.

1. **Crear el componente `ShoppingItem`:**

```jsx
import React from 'react';

const ShoppingItem = ({ item, onDelete }) => {
  return (
    <div>
      <span>{item}</span>
      <button onClick={() => onDelete(item)}>Eliminar</button>
    </div>
  );
};

export default ShoppingItem;
```

2. **Crear el componente `ShoppingList`:**

```jsx
import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (itemToDelete) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Agregar nuevo artículo"
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
      <div>
        {items.map((item, index) => (
          <ShoppingItem key={index} item={item} onDelete={handleDeleteItem} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
```

3. **Usar el componente `ShoppingList` en la aplicación principal:**

```jsx
import React from 'react';
import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <div>
      <ShoppingList />
    </div>
  );
};

export default App;
```

En este ejemplo, el componente `ShoppingList` mantiene el estado de la lista de compras en el estado `items`, que es un array de strings. También utiliza el estado `newItem` para mantener el valor del input de texto donde los usuarios pueden agregar nuevos elementos a la lista.

Cuando el usuario ingresa un nuevo artículo en el input y hace clic en el botón "Agregar", se llama a la función `handleAddItem` que agrega el nuevo artículo al estado `items` y luego limpia el input de texto.

El componente `ShoppingList` también pasa la función `handleDeleteItem` como prop al componente `ShoppingItem`, que se utiliza para eliminar un artículo específico de la lista cuando el usuario hace clic en el botón "Eliminar".

Con este ejemplo, hemos mostrado cómo manejar listas en React. Hemos utilizado el método `map()` para generar dinámicamente los componentes `ShoppingItem` basados en el estado de la lista `items`. También hemos implementado funciones para agregar y eliminar elementos de la lista, lo que nos permite crear una aplicación funcional de lista de compras.

2. **La importancia de las keys:**
   - ¿Qué son las keys y por qué son importantes en listas de elementos?
   - El propósito de las keys en React y cómo mejoran la eficiencia de las actualizaciones.

Supongamos que tenemos una aplicación de comentarios, donde los usuarios pueden agregar nuevos comentarios y también eliminar comentarios existentes. Utilizaremos un componente `CommentList` para mostrar la lista de comentarios y un componente `CommentItem` para representar cada comentario.

1. **Crear el componente `CommentItem`:**

```jsx
import React from 'react';

const CommentItem = ({ comment, onDelete }) => {
  return (
    <div>
      <span>{comment.text}</span>
      <button onClick={() => onDelete(comment.id)}>Eliminar</button>
    </div>
  );
};

export default CommentItem;
```

2. **Crear el componente `CommentList`:**

```jsx
import React, { useState } from 'react';
import CommentItem from './CommentItem';

const CommentList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: '¡Este es un gran artículo!' },
    { id: 2, text: 'Gracias por compartir esta información.' },
    { id: 3, text: 'Me encantó, muy útil.' },
  ]);

  const handleAddComment = () => {
    const newComment = {
      id: Date.now(),
      text: 'Nuevo comentario agregado.',
    };

    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <button onClick={handleAddComment}>Agregar Comentario</button>
      <div>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
```

3. **Usar el componente `CommentList` en la aplicación principal:**

```jsx
import React from 'react';
import CommentList from './CommentList';

const App = () => {
  return (
    <div>
      <CommentList />
    </div>
  );
};

export default App;
```

En este ejemplo, el componente `CommentList` mantiene el estado de la lista de comentarios en el estado `comments`, que es un array de objetos. Cada objeto representa un comentario con un `id` único y un texto.

Cuando el usuario hace clic en el botón "Agregar Comentario", se llama a la función `handleAddComment` que agrega un nuevo comentario al estado `comments` con un `id` único generado por `Date.now()`.

El componente `CommentList` también pasa la función `handleDeleteComment` como prop al componente `CommentItem`, que se utiliza para eliminar un comentario específico de la lista cuando el usuario hace clic en el botón "Eliminar".

Aquí es donde se vuelve importante el uso de las keys. Al proporcionar una key única para cada elemento de la lista en el componente `CommentItem`, React puede identificar eficientemente los elementos que cambian, se agregan o se eliminan durante las actualizaciones.

Sin el uso de keys, React tendría que reevaluar todos los elementos en la lista y volver a renderizarlos completamente cada vez que se produce un cambio, lo que podría ser ineficiente y afectar el rendimiento de la aplicación. Al proporcionar keys únicas, React puede realizar operaciones de actualización más eficientes y garantizar que los cambios en la lista se reflejen correctamente en la interfaz de usuario.

Con este ejemplo, hemos demostrado la importancia de las keys en React al mantener el rendimiento y la eficiencia al manejar listas y operaciones de actualización en el DOM.

## Actividades prácticas:

1. **Creación de una lista de tareas:**
   - Creamos un componente `Task` que muestra cada tarea en la lista con un botón para marcarla como completada.
   - Utilizamos el método `map()` para generar dinámicamente los componentes `Task` basados en una lista de tareas en el estado del componente principal.

2. **Uso de keys:**
   - Aprendemos sobre la importancia de las keys y cómo evitar problemas de rendimiento al no usar keys adecuadas.
   - Asignamos keys únicas a cada elemento de la lista para mejorar la eficiencia de las actualizaciones en el DOM.

3. **Agregar funcionalidad de eliminación de tareas:**
   - Implementamos una función para eliminar una tarea de la lista cuando el usuario hace clic en un botón "Eliminar".

## Desafíos opcionales para repaso:

1. **Editar tareas:**
   - Agregamos la funcionalidad para editar el nombre de una tarea en la lista.
   - Implementamos un botón de edición en cada tarea que muestre un campo de entrada de texto para editar el nombre.

2. **Filtrar tareas completadas/incompletas:**
   - Agregamos botones para filtrar las tareas en función de su estado de completado o incompleto.
   - Implementamos funciones para mostrar solo las tareas que cumplen con el criterio seleccionado.

3. **Persistencia de datos:**
   - Añadimos persistencia de datos utilizando el `localStorage` del navegador.
   - Guardamos las tareas en el `localStorage` para que la lista se mantenga incluso si la página se actualiza.

## Resumen del día:
En el día 5, hemos aprendido cómo manejar listas de elementos en React y la importancia de utilizar keys para mejorar la eficiencia de las operaciones de actualización en el DOM. Hemos creado una lista de tareas y hemos utilizado el método `map()` para generar dinámicamente los elementos de la lista. También hemos implementado funcionalidades adicionales, como la eliminación de tareas y posibles desafíos opcionales para repasar y ampliar nuestros conocimientos.

Recuerda que el manejo adecuado de listas y el uso correcto de keys son aspectos fundamentales en el desarrollo de aplicaciones en React. Continúa practicando y experimentando con estos conceptos para mejorar tus habilidades y construir aplicaciones más robustas y eficientes. ¡Sigue adelante y buen trabajo!