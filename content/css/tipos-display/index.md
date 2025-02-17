---
title: "Tipos de Display"
date: 2023-01-26T12:37:10-05:00
draft: false
showPagination: false
---

1. **Tipos de Display** 🖥️

En CSS, la propiedad `display` controla cómo se muestra un elemento en la página. Los valores más comunes son:

- **block** 🏢

    Un elemento con `display: block` ocupa toda la línea disponible y empuja los elementos siguientes a la línea siguiente.

    **Ejemplo:**

    ```css
    div {
        display: block;
    }
    ```

- **inline** ➡️

    Un elemento con `display: inline` solo ocupa el espacio necesario, y los elementos siguientes se alinean en la misma línea.

    **Ejemplo:**

    ```css
    span {
        display: inline;
    }
    ```

- **inline-block** 🔲

    Similar a `inline`, pero el elemento puede tener dimensiones definidas (`width`, `height`).

    **Ejemplo:**

    ```css
    button {
        display: inline-block;
        width: 150px;
        height: 50px;
    }
    ```

- **none** 🚫

    El elemento no se muestra en la página, eliminándose completamente del flujo del documento.

    **Ejemplo:**

    ```css
    .oculto {
        display: none;
    }
    ```

2. **Introducción a Flexbox** 💪

Flexbox es un modelo de diseño en CSS que ayuda a alinear y distribuir los elementos dentro de un contenedor de manera eficiente, incluso cuando el tamaño de los elementos es desconocido o dinámico.

### Propiedades Principales de Flexbox 📏

- **display: flex** 🌟

    Se aplica a un contenedor para activar el modelo de flexbox.

    **Ejemplo:**

    ```css
    .contenedor {
        display: flex;
    }
    ```

- **justify-content** ➡️

    Alinea los elementos horizontalmente (a lo largo del eje principal).

    Valores comunes:
    - `flex-start`: Alinea al principio.
    - `center`: Centra los elementos.
    - `space-between`: Espacia los elementos uniformemente.

    **Ejemplo:**

    ```css
    .contenedor {
        justify-content: center;
    }
    ```

- **align-items** ⬇️

    Alinea los elementos verticalmente (a lo largo del eje transversal).

    Valores comunes:
    - `flex-start`: Alinea al principio.
    - `center`: Centra los elementos.
    - `stretch`: Estira los elementos para ocupar todo el espacio disponible.

    **Ejemplo:**

    ```css
    .contenedor {
        align-items: center;
    }
    ```

- **flex-direction** 🔄

    Define la dirección del eje principal. Los valores más comunes son:
    - `row`: De izquierda a derecha (predeterminado).
    - `column`: De arriba a abajo.
    - `row-reverse`: De derecha a izquierda.
    - `column-reverse`: De abajo hacia arriba.

    **Ejemplo:**

    ```css
    .contenedor {
        flex-direction: column;
    }
    ```

- **flex-wrap** ↩️

    Permite que los elementos se envuelvan en una nueva línea si es necesario.

    Valores comunes:
    - `nowrap`: Los elementos no se envuelven.
    - `wrap`: Los elementos se envuelven.

    **Ejemplo:**

    ```css
    .contenedor {
        flex-wrap: wrap;
    }
    ```

3. **Ejemplo Completo de Flexbox** 👇

Aquí tienes un ejemplo de cómo usar Flexbox para organizar varios elementos en una página:

```html
<div class="contenedor">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>

<style>
    .contenedor {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        height: 100vh;
    }

    .item {
        background-color: lightblue;
        padding: 20px;
        margin: 10px;
        border-radius: 5px;
    }
</style>
```
**Resumen** 🎯

- Tipos de display: `block`, `inline`, `inline-block`, y `none`.
- Flexbox: Utiliza `display: flex` en un contenedor y usa las propiedades `justify-content`, `align-items`, `flex-direction`, y `flex-wrap` para organizar sus elementos.


