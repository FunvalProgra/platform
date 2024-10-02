---
title: 'Optimización y Gestión de Fuentes en Next.js'
date: 2024-10-02T11:51:05-05:00
draft: false
showPagination: false
---

En el desarrollo web, las fuentes son un aspecto crucial del diseño que influye en la legibilidad y estética de una aplicación. Sin embargo, la carga de fuentes personalizadas puede afectar el rendimiento si no se gestiona adecuadamente. Para abordar este desafío, Next.js introdujo el módulo `next/font`, que proporciona una forma fácil y eficiente de cargar y optimizar fuentes personalizadas, tanto locales como de Google Fonts.

Este módulo ofrece varias ventajas como la optimización automática, eliminación de estilos innecesarios y control sobre la carga de las fuentes, mejorando tanto el rendimiento como la experiencia de usuario.

## ¿Qué es `next/font`?

`next/font` es una API integrada en Next.js que facilita la gestión de fuentes optimizadas para aplicaciones web. Con esta API, las fuentes se pueden cargar de forma eficiente y segura, asegurando un rendimiento mejorado sin depender de JavaScript en el cliente para las fuentes.

Las principales características de `next/font` incluyen:

- **Carga optimizada**: las fuentes se cargan solo cuando son necesarias y con estrategias de optimización.
- **Control de la visualización**: se puede controlar cómo y cuándo las fuentes se cargan y muestran.
- **Compatibilidad con fuentes locales y de Google Fonts**.
- **Reducción de tamaño del bundle**: solo se incluyen los estilos de fuente necesarios para el proyecto.

## Tipos de Fuentes en `next/font`

Next.js soporta dos tipos principales de fuentes a través de `next/font`:

1. **Fuentes de Google Fonts**.
2. **Fuentes locales**.

### Instalación

No es necesario instalar ningún paquete adicional para usar `next/font` ya que viene integrado con Next.js a partir de la versión 13.

### Uso de Google Fonts

Para usar fuentes de Google, puedes importar y configurar la fuente directamente utilizando la función `Google` de `next/font/google`.

### Ejemplo básico:

```jsx
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], // Pesos deseados de la fuente
  subsets: ['latin'], // Conjuntos de caracteres (latin, cyrillic, etc.)
});

export default function HomePage() {
  return (
    <div>
      <h1 className={roboto.className}>Bienvenidos a mi sitio web</h1>
      <p className={roboto.className}>
        Este es un texto con la fuente Roboto cargada desde Google Fonts.
      </p>
    </div>
  );
}
```

### Explicación del ejemplo:

- **`Roboto`**: Esta función importa la fuente desde Google Fonts.
- **`weight`**: Define los pesos que deseas usar (por ejemplo, 400 para normal y 700 para negrita).
- **`subsets`**: Especifica los subconjuntos de caracteres que necesitas para tu aplicación, como `latin`, `cyrillic`, etc.
- **`className`**: El objeto generado por la función de la fuente contiene la clase CSS que debes aplicar a los elementos de texto.

### Uso de Fuentes Locales

Además de las fuentes de Google, `next/font` soporta fuentes locales almacenadas en el proyecto. Para esto, se utiliza la función `local`.

### Ejemplo básico de una fuente local:

```jsx
import { Local } from 'next/font/local';

const miFuentePersonalizada = Local({
  src: './fuentes/MiFuente.woff2',
  weight: '400',
  style: 'normal',
});

export default function HomePage() {
  return (
    <div>
      <h1 className={miFuentePersonalizada.className}>
        Bienvenidos a mi sitio web
      </h1>
      <p className={miFuentePersonalizada.className}>
        Este es un texto con una fuente personalizada local.
      </p>
    </div>
  );
}
```

### Explicación del ejemplo:

- **`src`**: Es la ruta local de la fuente que estás importando.
- **`weight`**: Define el peso de la fuente.
- **`style`**: Especifica si la fuente es normal, cursiva, etc.
- **`className`**: Similar al ejemplo anterior, se usa la clase CSS generada para aplicar la fuente.

## Optimización Automática

Una de las principales ventajas de `next/font` es la optimización automática. Cuando usas esta API:

1. **Las fuentes se cargan sin JavaScript en el cliente**: Esto reduce el tamaño del bundle y mejora el rendimiento de la aplicación.
2. **Carga diferida**: Las fuentes se optimizan para cargar de manera diferida (lazy loading), lo que ayuda a mejorar los tiempos de carga inicial.
3. **Subconjuntos optimizados**: Next.js solo incluye los subconjuntos de caracteres que tu aplicación necesita, reduciendo el tamaño de la fuente.

### Control de la Visualización de Fuentes

Puedes controlar cómo se muestra la fuente en la página antes de que la fuente personalizada se cargue por completo mediante la propiedad `display`. Las opciones disponibles incluyen:

- **auto**: el navegador decide la estrategia de visualización.
- **block**: el texto es invisible hasta que se cargue la fuente.
- **swap**: el texto se muestra con una fuente de reserva hasta que la fuente personalizada esté disponible.
- **fallback**: muestra el texto con una fuente de reserva si la fuente no se carga rápidamente.
- **optional**: utiliza la fuente personalizada solo si se carga de inmediato.

### Ejemplo:

```jsx
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap', // Usa swap para cargar una fuente de reserva mientras se carga la fuente principal
});
```

En este ejemplo, la fuente de reserva se utilizará temporalmente mientras la fuente principal se está cargando, mejorando la experiencia del usuario.

## Integración con TailwindCSS

Si estás utilizando **TailwindCSS** en tu proyecto Next.js, puedes combinar `next/font` con Tailwind agregando la clase generada a tu configuración de Tailwind para que se utilice globalmente.

### Ejemplo de integración con TailwindCSS:

```jsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
```

En este ejemplo, la fuente `Inter` se aplica globalmente a toda la aplicación, garantizando que todo el texto utilice esta fuente sin tener que añadir clases manualmente a cada elemento.

## Ventajas de Usar `next/font`

1. **Rendimiento**: Las fuentes se optimizan automáticamente, mejorando el rendimiento general de la aplicación.
2. **Facilidad de uso**: Cargar fuentes personalizadas o de Google Fonts se convierte en una tarea sencilla sin necesidad de configuraciones adicionales.
3. **Tamaño del bundle**: Solo se incluye el código necesario en el bundle final, lo que reduce el peso total de la aplicación.
4. **Control completo**: Puedes gestionar cómo y cuándo se cargan las fuentes, optimizando la experiencia de usuario.

## Conclusión

El módulo `next/font` de Next.js facilita la tarea de gestionar y optimizar fuentes personalizadas en tu aplicación. Ofrece integración perfecta tanto con fuentes locales como con Google Fonts, optimizando la carga de fuentes para mejorar el rendimiento sin esfuerzo adicional. Al utilizar `next/font`, puedes controlar completamente cómo se muestran las fuentes, reduciendo los tiempos de carga inicial y asegurando una experiencia de usuario más rápida y fluida.

## Recursos

Mira este video desde 25:47 hasta 31:24 minutos. (Ya está marcado)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/jMy4pVZMyLM?start=1547&end=2124" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
