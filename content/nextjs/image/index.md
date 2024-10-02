---
title: 'Componente `Image`'
date: 2024-10-02T11:43:25-05:00
draft: false
showPagination: false
---

El componente `Image` en Next.js es una herramienta poderosa introducida para optimizar el manejo de imágenes en aplicaciones web. Gestionar correctamente las imágenes es crucial para mejorar el rendimiento, ya que las imágenes son uno de los recursos más pesados en términos de carga en una página web. Next.js facilita la tarea de manipular y optimizar imágenes con su componente `Image`, que ofrece características como carga diferida (lazy loading), optimización automática y soporte para varios formatos de imágenes.

## Introducción al Componente `Image`

El componente `Image` se introdujo en Next.js para abordar los problemas comunes relacionados con la optimización de imágenes. A diferencia de las etiquetas HTML tradicionales `<img>`, `Image` gestiona de manera inteligente el tamaño, el formato y la carga de imágenes para asegurar una experiencia de usuario fluida y mejorar la puntuación de rendimiento en herramientas como Lighthouse.

### Importación

Antes de usar el componente `Image`, es necesario importarlo desde el paquete `next/image`.

```jsx
import Image from 'next/image';
```

## Características Principales

### 1. **Optimización Automática de Imágenes**

El componente `Image` optimiza automáticamente las imágenes bajo demanda, generando versiones adaptadas al tamaño de la pantalla del dispositivo del usuario. Esto significa que las imágenes se entregan en la mejor resolución posible, pero sin exceder el tamaño necesario.

### 2. **Carga Diferida (Lazy Loading)**

Por defecto, `Image` utiliza la carga diferida, lo que significa que las imágenes solo se cargan cuando están a punto de ser visibles en la pantalla del usuario. Esto reduce el tiempo de carga inicial de la página y mejora el rendimiento.

### 3. **Soporte para Varios Formatos**

Next.js convierte automáticamente las imágenes a formatos más eficientes como WebP, siempre que el navegador lo soporte, lo que reduce el tamaño del archivo sin comprometer la calidad.

### 4. **Tamaño Adaptable**

`Image` permite definir tamaños específicos o automáticos, adaptando la imagen al diseño de la página mientras mantiene las proporciones correctas.

## Uso Básico del Componente `Image`

El uso básico de `Image` es muy similar a la etiqueta HTML `<img>`, pero con más opciones y optimización automática.

```jsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenidos a mi sitio web</h1>
      <Image
        src='/images/mi-imagen.jpg' // Ruta de la imagen
        alt='Descripción de la imagen'
        width={500} // Ancho en píxeles
        height={300} // Alto en píxeles
      />
    </div>
  );
}
```

### Explicación del ejemplo

1. **`src`**: La propiedad `src` es obligatoria y define la ruta de la imagen. Puede ser una imagen local (como en este caso) o una URL externa.
2. **`alt`**: La propiedad `alt` es importante para la accesibilidad, proporcionando una descripción de la imagen.
3. **`width` y `height`**: Estas propiedades son obligatorias para que el componente `Image` pueda definir correctamente el espacio para la imagen antes de que se cargue. Esto evita el cambio de diseño repentino (layout shift).

### Imágenes externas

Si quieres usar imágenes externas que no están en tu directorio local, debes configurar el archivo `next.config.js` para permitir dominios externos.

```js
// next.config.js
module.exports = {
  images: {
    domains: ['example.com'],
  },
};
```

Luego, puedes utilizar la URL externa en el componente `Image`:

```jsx
<Image
  src='https://example.com/imagen.jpg'
  alt='Imagen externa'
  width={800}
  height={600}
/>
```

## Optimización Avanzada

### 1. **Carga Diferida Automática**

El componente `Image` realiza la carga diferida automáticamente para cualquier imagen que esté fuera de la ventana visible. Sin embargo, también puedes controlar este comportamiento con la propiedad `loading`.

```jsx
<Image
  src='/images/mi-imagen.jpg'
  alt='Descripción de la imagen'
  width={500}
  height={300}
  loading='lazy' // Carga diferida manual
/>
```

### 2. **Tamaños Responsivos**

En lugar de especificar un tamaño fijo, puedes usar la propiedad `layout="responsive"` para hacer que la imagen sea responsiva y se ajuste al tamaño del contenedor.

```jsx
<Image
  src='/images/mi-imagen.jpg'
  alt='Descripción de la imagen'
  width={700}
  height={400}
  layout='responsive' // Hace que la imagen sea responsiva
/>
```

### 3. **Optimización de Calidad**

Puedes ajustar la calidad de la imagen con la propiedad `quality`, lo que te permite encontrar un equilibrio entre la calidad visual y el tamaño del archivo. La calidad se define en un valor de 1 a 100.

```jsx
<Image
  src='/images/mi-imagen.jpg'
  alt='Descripción de la imagen'
  width={700}
  height={400}
  quality={75} // Reduce la calidad al 75%
/>
```

Esto es útil cuando deseas reducir el peso de las imágenes para mejorar los tiempos de carga, pero manteniendo una buena calidad visual.

### 4. **Prioridad en la Carga**

Si tienes imágenes críticas que deben cargarse inmediatamente, como el logotipo del sitio o una imagen de fondo importante, puedes usar la propiedad `priority`.

```jsx
<Image
  src='/images/logo.png'
  alt='Logotipo del sitio'
  width={100}
  height={50}
  priority={true} // Carga prioritaria
/>
```

### 5. **Placerholders y Efecto de Desenfoque**

Next.js permite mostrar un marcador de posición (placeholder) mientras la imagen se carga. Esto puede ser útil para mejorar la experiencia del usuario cuando se utilizan imágenes grandes. Puedes generar un efecto de desenfoque con el marcador de posición.

```jsx
<Image
  src='/images/mi-imagen.jpg'
  alt='Imagen con placeholder'
  width={500}
  height={300}
  placeholder='blur' // Muestra un desenfoque antes de cargar
  blurDataURL='/images/blur-placeholder.jpg' // Imagen de baja resolución como placeholder
/>
```

## Comparación con la etiqueta `<img>`

| Característica              | `<img>` tradicional           | Componente `Image` de Next.js      |
| --------------------------- | ----------------------------- | ---------------------------------- |
| **Optimización automática** | No                            | Sí                                 |
| **Carga diferida**          | Manual (con `loading="lazy"`) | Automática                         |
| **Soporte para WebP**       | No                            | Sí                                 |
| **Responsividad**           | Manual (CSS)                  | Automática (`layout="responsive"`) |
| **Prioridad en carga**      | No                            | Sí (`priority={true}`)             |
| **Marcador de posición**    | No                            | Sí (`placeholder="blur"`)          |

## Conclusión

El componente `Image` en Next.js ofrece una solución integral para manejar imágenes de manera eficiente y optimizada, mejorando tanto el rendimiento de la página como la experiencia del usuario. Al utilizar `Image`, se reduce el tamaño de las imágenes servidas, se asegura una carga fluida y se aprovechan las características modernas de los navegadores como WebP y la carga diferida. Si estás desarrollando una aplicación en Next.js, el uso de este componente es altamente recomendable para maximizar la velocidad y la eficiencia de tu sitio web.

## Recursos

Mira este video desde 31:24 hasta 38:33 minutos. (Ya está marcado)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/jMy4pVZMyLM?start=1884&end=2313" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
