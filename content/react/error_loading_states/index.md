---
title: "🌟 Estados de Carga y Error en Reac"
date: 2024-08-29T17:44:24-05:00
draft: false
showPagination: false
---

# 🚀 Manejo de Estados de Carga y Error en React (para Principiantes)

El manejo de estados de carga y error es crucial en React para crear aplicaciones con una buena experiencia de usuario. Aquí te presento una explicación sencilla para principiantes:

## ❓ ¿Qué son los estados de carga y error?

* **⏳ Estado de carga (loading state):** Indica que una operación asíncrona (como obtener datos de una API) está en curso. Se muestra un indicador de carga (spinner, mensaje) para informar al usuario.
* **⚠️ Estado de error (error state):** Indica que una operación asíncrona falló. Se muestra un mensaje de error claro para informar al usuario y, si es posible, ofrecer soluciones.

## 🛠️ Implementación básica en React

1. **📌 Estados con `useState`:**
  * Utiliza `useState` para crear estados que almacenen:
    * Si la operación está en curso (`isLoading`).
    * Si ocurrió un error (`error`).
    * Los datos obtenidos (si la operación fue exitosa).
2. **🔄 Manejo de la operación asíncrona:**
  * Dentro de un efecto (`useEffect` o similar), realiza la operación asíncrona (por ejemplo, con `fetch`).
  * Antes de iniciar la operación, establece `isLoading` en `true`.
  * Si la operación tiene éxito, almacena los datos y establece `isLoading` en `false`.
  * Si la operación falla, almacena el error y establece `isLoading` en `false`.
3. **🎨 Renderizado condicional:**
  * Utiliza el valor de los estados para renderizar diferentes partes de la interfaz de usuario:
    * Si `isLoading` es `true`, muestra un indicador de carga.
    * Si `error` tiene un valor, muestra un mensaje de error.
    * Si no hay error y los datos están disponibles, muestra los datos.

## 💡 Ejemplo simplificado

```jsx
import React, { useState, useEffect } from 'react';

function DatosDesdeApi() {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   const obtenerDatos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const respuesta = await fetch('https://api.ejemplo.com/datos');
      if (!respuesta.ok) {
       throw new Error('Error al obtener datos');
      }
      const resultado = await respuesta.json();
      setDatos(resultado);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
   };
   obtenerDatos();
  }, []);

  if (isLoading) {
   return <p>⏳ Cargando...</p>;
  }

  if (error) {
   return <p>⚠️ Error: {error}</p>;
  }

  if (datos) {
   return (
    <div>
      {/* Renderiza los datos */}
      <pre>{JSON.stringify(datos, null, 2)}</pre>
    </div>
   );
  }

  return <p>ℹ️ No hay datos disponibles.</p>;
}

export default DatosDesdeApi;
```

## 📌 Puntos clave

* **✅ Claridad:** Muestra mensajes claros al usuario sobre el estado de la aplicación.
* **⚙️ Manejo de errores:** Proporciona información útil sobre los errores y, si es posible, sugiere soluciones.
* **🌟 Experiencia de usuario:** Evita que la aplicación se congele o muestre pantallas en blanco durante las operaciones asíncronas.