---
title: "Comunicación entre componentes y Elevación de Estado"
date: 2023-03-12T11:46:35-06:00
draft: false
showPagination: false
---
## Objetivo del día:
El objetivo de este día es aprender cómo comunicar y compartir datos entre diferentes componentes en React utilizando el concepto de "Elevación de Estado" (Lifting State Up). También aprenderemos sobre la importancia de mantener un flujo unidireccional de datos para evitar problemas de sincronización y mejorar la reusabilidad de los componentes.

## Temas a cubrir:

1. **Comunicación entre componentes:**
   - Repaso breve de Props y cómo se usan para pasar datos de un componente padre a un componente hijo.
   - Limitaciones de la comunicación mediante Props y casos en los que esta no es la mejor opción.

Supongamos que tenemos una aplicación que muestra el precio y la cantidad de un producto, y queremos tener un componente llamado `Product` para mostrar esta información y otro componente llamado `ProductList` para mostrar una lista de productos.

1. **Crear el componente `Product`:**

```jsx
// Product.js

import React from 'react';

const Product = ({ name, price, quantity }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Product;
```

2. **Crear el componente `ProductList`:**

```jsx
// ProductList.js

import React from 'react';
import Product from './Product';

const ProductList = () => {
  // Datos de ejemplo de productos
  const products = [
    { name: 'Product A', price: 25.99, quantity: 10 },
    { name: 'Product B', price: 19.99, quantity: 5 },
    { name: 'Product C', price: 32.49, quantity: 3 },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} quantity={product.quantity} />
      ))}
    </div>
  );
};

export default ProductList;
```

3. **Usar el componente `ProductList` en la aplicación principal:**

```jsx
// App.js

import React from 'react';
import ProductList from './ProductList';

const App = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
};

export default App;
```

En este ejemplo, hemos creado el componente `Product` que recibe los datos del producto (nombre, precio y cantidad) como props y muestra esta información en pantalla. Luego, hemos creado el componente `ProductList` que contiene una lista de productos y utiliza el componente `Product` para mostrar cada producto de la lista.

El componente `ProductList` pasa los datos de cada producto a través de props al componente `Product`, permitiendo que este último muestre los detalles de cada producto de forma individual.

De esta manera, hemos logrado una comunicación efectiva entre los componentes `Product` y `ProductList`, lo que nos permite mostrar una lista de productos con su información correspondiente en nuestra aplicación.

2. **Elevación de Estado (Lifting State Up):**
   - Qué es "Elevación de Estado" y cómo nos permite compartir datos entre componentes hermanos o componentes que no tienen una relación directa de padre-hijo.
   - Cómo mover el estado compartido desde un componente hijo a su componente padre más cercano, para que pueda ser compartido con otros componentes hermanos.

A continuación, tenemos un ejemplo práctico de "Elevación de Estado" en React. Crearemos una aplicación simple de conversión de temperatura, donde tendremos dos componentes: `TemperatureInput` para ingresar la temperatura en grados Celsius o Fahrenheit, y `TemperatureConverter` que realizará la conversión y mostrará el resultado.

1. **Crear el componente `TemperatureInput`:**

```jsx
import React from 'react';

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <div>
      <label>Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}:</label>
      <input type="number" value={temperature} onChange={handleChange} />
    </div>
  );
};

export default TemperatureInput;
```

2. **Crear el componente `TemperatureConverter`:**

```jsx
import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

const TemperatureConverter = () => {
  const [temperatureCelsius, setTemperatureCelsius] = useState('');
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState('');

  const handleCelsiusChange = (temperature) => {
    setTemperatureCelsius(temperature);
    setTemperatureFahrenheit(temperature !== '' ? (temperature * 9 / 5) + 32 : '');
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperatureFahrenheit(temperature);
    setTemperatureCelsius(temperature !== '' ? (temperature - 32) * 5 / 9 : '');
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <TemperatureInput scale="c" temperature={temperatureCelsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={temperatureFahrenheit} onTemperatureChange={handleFahrenheitChange} />
    </div>
  );
};

export default TemperatureConverter;
```

3. **Usar el componente `TemperatureConverter` en la aplicación principal:**

```jsx
import React from 'react';
import TemperatureConverter from './TemperatureConverter';

const App = () => {
  return (
    <div>
      <TemperatureConverter />
    </div>
  );
};

export default App;
```

En este ejemplo, el componente `TemperatureInput` recibe la escala de temperatura (Celsius o Fahrenheit), el valor de la temperatura y una función `onTemperatureChange` como props. Cuando el usuario ingresa un valor en el input, se llama a la función `onTemperatureChange` para actualizar el estado de la temperatura en el componente `TemperatureConverter`.

El componente `TemperatureConverter` mantiene dos estados separados para las temperaturas en Celsius y Fahrenheit. Cuando el usuario ingresa una temperatura en uno de los `TemperatureInput`, se actualiza el estado correspondiente y se recalcula el valor en la otra escala utilizando las fórmulas de conversión.

Con este ejemplo, hemos logrado la "Elevación de Estado" al mantener el estado de las temperaturas en el componente `TemperatureConverter` y pasarlo a los componentes `TemperatureInput` a través de props. De esta manera, hemos compartido y gestionado el estado entre componentes para la conversión de temperaturas en nuestra aplicación.

3. **Mantener el flujo unidireccional de datos:**
   - La importancia de mantener un flujo de datos unidireccional para evitar problemas de sincronización y mejorar la predictibilidad del estado de la aplicación.
   - Cómo los cambios en el estado de un componente padre pueden propagarse a los componentes hijos a través de Props.

Supongamos que queremos crear una aplicación simple para realizar una lista de tareas. Cada tarea tendrá un nombre y un estado para indicar si está completada o no. En este ejemplo, mantendremos el estado de las tareas en el componente principal `App` y pasaremos los datos y las funciones para modificar las tareas como props a los componentes secundarios `TaskList` y `TaskItem`.

1. **Crear el componente `TaskItem`:**

```jsx
import React from 'react';

const TaskItem = ({ task, onToggleComplete }) => {
  const handleChange = () => {
    onToggleComplete(task.id);
  };

  return (
    <div>
      <input type="checkbox" checked={task.isComplete} onChange={handleChange} />
      <span style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </div>
  );
};

export default TaskItem;
```

2. **Crear el componente `TaskList`:**

```jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};

export default TaskList;
```

3. **Crear el componente `App`:**

```jsx
import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Comprar leche', isComplete: false },
    { id: 2, name: 'Hacer ejercicio', isComplete: true },
    { id: 3, name: 'Estudiar React', isComplete: false },
  ]);

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;
```

En este ejemplo, el componente `App` mantiene el estado de las tareas en el estado `tasks` y la función `handleToggleComplete` para cambiar el estado de completado de una tarea específica. Luego, pasa esta función como prop al componente `TaskList`, que a su vez lo pasa al componente `TaskItem`.

Cuando el usuario marca o desmarca la casilla de verificación de una tarea en `TaskItem`, se activa la función `handleChange`, que a su vez llama a `onToggleComplete` con el `id` de la tarea correspondiente. En el componente `App`, la función `handleToggleComplete` actualiza el estado de la tarea seleccionada para reflejar el cambio en la lista de tareas.

Con este ejemplo, hemos mantenido un flujo unidireccional de datos en React. Los datos fluyen desde el componente `App` (estado) a los componentes `TaskList` y `TaskItem` a través de props. Las tareas solo se modifican en el componente `App`, y cualquier cambio en la lista de tareas se propaga hacia abajo a los componentes secundarios a través de props. Esto asegura que siempre haya una única fuente de verdad para los datos y evita problemas de sincronización.

## Actividades prácticas:

1. **Crear una aplicación simple de contador:**
   - Creamos un nuevo proyecto de React utilizando `create-react-app`.
   - Creamos un componente "Contador" que muestre un número y botones de incremento y decremento.
   - Inicialmente, el estado del contador se mantendrá en el componente "Contador" y se mostrará el valor actual.

2. **Comunicación mediante Props:**
   - Creamos un nuevo componente llamado "DisplayContador" que recibe el valor del contador como Prop y lo muestra en pantalla.
   - Pasamos el valor del contador del componente "Contador" al componente "DisplayContador" mediante Props.

3. **Elevación de Estado:**
   - Aprendemos a elevar el estado del contador al componente "App" de nivel superior para compartirlo con otros componentes.
   - Movemos el estado del contador desde el componente "Contador" al componente "App" utilizando funciones para actualizar el estado.

4. **Crear un componente "Controlador de Contador":**
   - Creamos un nuevo componente llamado "ControladorContador" que tiene botones para controlar el contador.
   - Utilizamos Props para pasar funciones desde el componente "App" al "ControladorContador" para incrementar y decrementar el contador.

5. **Comunicación entre el "ControladorContador" y el "Contador":**
   - Aprendemos a comunicar los cambios del contador desde el "ControladorContador" hasta el "Contador" utilizando Props y funciones del "App" como intermediario.

## Desafíos opcionales para repaso:

1. **Agregar validaciones:**
   - Añadimos validaciones para evitar que el contador sea negativo o exceda ciertos límites.

2. **Estilo y diseño:**
   - Mejoramos el diseño de la aplicación utilizando CSS o alguna librería de estilos como Material UI o Bootstrap.

3. **Nuevas funcionalidades:**
   - Agregamos nuevas funcionalidades al contador, como restablecer a cero o incrementar/decrementar en cantidades personalizadas.

## Resumen del día:
En el día 4, hemos aprendido sobre la comunicación entre componentes en React y cómo compartir datos utilizando el concepto de "Elevación de Estado" (Lifting State Up). Hemos creado una aplicación simple de contador y hemos demostrado cómo mantener un flujo unidireccional de datos para mejorar la predictibilidad y reusabilidad de los componentes.

Recuerda que la comunicación entre componentes es un aspecto fundamental de React y es esencial entender cómo compartir datos de manera eficiente y mantener un flujo de datos unidireccional para construir aplicaciones sólidas y mantenibles. ¡Sigue practicando y experimentando con React para mejorar tus habilidades como desarrollador!

*¡Desafío! Intenta mejorar la aplicación del contador agregando nuevas funcionalidades y estilos personalizados para hacerla más atractiva y práctica.*

## Recursos:

{{< youtube TgK_uSNNibE >}}

https://es.react.dev/reference/react-dom/components/common#common-props