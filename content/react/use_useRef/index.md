---
title: "Hook `useRef` y API  `use`"
date: 2024-07-14T18:32:03-05:00
draft: false
showPagination: false
---

### **`useRef` (Hook de Referencia)**
`useRef` es un hook que permite crear una referencia mutable que persiste entre renderizados sin causar re-renderizaciones cuando cambia su valor. Se usa comúnmente para:

1. **🔗 Referenciar elementos del DOM** (como inputs o botones).
2. **📦 Almacenar valores persistentes** sin provocar re-renderizados.

#### **Ejemplo 1: Acceder a un input sin estado**
```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={handleFocus}>Enfocar Input</button>
    </div>
  );
}

export default FocusInput;
```
📌 **Explicación**:
- `useRef` se usa para referenciar el `input`.
- `inputRef.current.focus()` permite enfocar el input sin necesidad de actualizar el estado.

---

#### **Ejemplo 2: Almacenar valores sin causar re-render**
```jsx
import { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Valor de countRef:", countRef.current);
  };

  return (
    <div>
      <p>Renders: {renderCount}</p>
      <button onClick={() => setRenderCount((prev) => prev + 1)}>
        Re-renderizar
      </button>
      <button onClick={increment}>Incrementar Ref</button>
    </div>
  );
}

export default Counter;
```
📌 **Explicación**:
- `countRef.current` almacena un número que persiste entre renderizados.
- Al presionar "Incrementar Ref", el valor de `countRef` cambia, pero no provoca un re-render.

---

### **`use` (API de React 19 en adelante)**
El hook `use` es una nueva API introducida en React 19 para manejar promesas de manera más sencilla dentro de componentes de servidor o React Server Components (RSC). Su principal uso es **esperar datos asincrónicos sin usar `useEffect` ni `useState`**.

#### **Ejemplo 1: Fetch de datos en un Server Component**
```jsx
import { use } from "react";

async function fetchUserData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

export default function UserComponent() {
  const user = use(fetchUserData());

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```
📌 **Explicación**:
- `use(fetchUserData())` espera la promesa y devuelve el resultado directamente en el render.
- Funciona en componentes de servidor (`app` directory en Next.js).

---

#### **Ejemplo 2: Uso con `Suspense`**
Cuando `use` se usa en componentes de cliente, es necesario envolverlo en `Suspense`.

```jsx
import { use, Suspense } from "react";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

function Todo() {
  const todo = use(fetchData());

  return <p>{todo.title}</p>;
}

export default function App() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Todo />
    </Suspense>
  );
}
```
📌 **Explicación**:
- `Suspense` evita que la aplicación se rompa mientras la promesa se resuelve.
- `use(fetchData())` devuelve directamente el valor cuando está disponible.

---

## **🔍 Diferencias Claves**
| Característica | `useRef` | `use` |
|--------------|---------|------|
| ¿Provoca re-render? | ❌ No | ✅ Sí (cuando la promesa se resuelve) |
| ¿Se usa en el servidor? | ❌ No | ✅ Sí (React Server Components) |
| Propósito principal | Referencias mutables (DOM, valores persistentes) | Esperar promesas directamente en la renderización |

Si estás en Next.js 14 con la estructura `/app`, `use` es una opción poderosa para manejar datos en Server Components sin necesidad de `useEffect`.

---

📌 **Conclusión**:
- ✅ Usa `useRef` cuando necesites acceder a elementos del DOM o almacenar valores sin causar re-renderizados.
- ✅ Usa `use` cuando trabajes con React Server Components para manejar datos asincrónicos de manera más sencilla.
