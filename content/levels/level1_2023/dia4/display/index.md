---
title: "Display"
date: 2023-01-24T12:44:35-05:00
draft: false
---

Entender el Box Model es una de las cosas más importantes para trabajar correctamente con HTML y CSS, una vez este concepto nos queda claro, es posible que se nos facilite mucho la construcción de sitios web.

En el siguiente artículo encontrarás información mas detallada sobre cómo funciona el 👉 [box-model](https://dev.to/lupitacode/que-es-el-box-model-4mnj).

Lee atentamente el artículo antes de continuar.

## Display

Hace poco estuvimos aprendiendo sobre la propiedad [display](../../dia1/html/#display) en CSSy conocimos 4 propiedades básicas:

- block
- inline
- inline-block
- none


Un display es una propiedad en CSS que se utiliza para especificar cómo se debe mostrar un elemento en una página web. 

- **Display block**: Este valor hace que el elemento ocupe todo el ancho disponible y comience en una nueva línea después del elemento anterior. Los elementos con display block son, por defecto, visibles y ocupan todo el espacio disponible en la dirección del eje principal (generalmente, la dirección vertical). Ejemplo de código:

  ```css
  div {
    display: block;
  }
  ```

- **Display inline**: Este valor hace que el elemento se comporte como una línea de texto, es decir, no comienza en una nueva línea y solo ocupa el espacio necesario para su contenido. Los elementos con display inline son, por defecto, visibles y solo ocupan el espacio necesario para su contenido. Ejemplo de código:

  ```css
  span {
    display: inline;
  }
  ```

- **Display inline-block**: Este valor combina las características de los valores block e inline. Los elementos con display inline-block son, por defecto, visibles y ocupan solo el espacio necesario para su contenido, pero pueden tener un ancho y un alto especificados. Ejemplo de código:

  ```css
  img {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  ```

- **Flexbox**: Flexbox es una manera de crear diseños flexibles y adaptativos en CSS. Se utiliza para alinear elementos en una fila o columna y distribuir el espacio disponible de manera eficiente. Un ejemplo de código para crear un contenedor flex:

  ```css
  .container {
    display: flex;
  }
  ```

Todos estos valores y conceptos son estandarizado por el W3C, las especificaciones de las propiedades y su uso pueden ser consultadas en https://www.w3.org/TR/CSS/


### El centrado de Elementos

Una práctica común con los elementos, es poder alinearlos y como viste en capitulos pasados, para mover los elementos respecto a otros puedes usar `margin` o si deseas cambiar su espacio interior usas `padding`.

Para este ejemplo pega el siguiente codigo en un documento HTML:

```html
<body>
  <div class="contenedor">
    <div class="caja1">
     Soy una caja
    </div>
  </div>
</body>

```

Tambien añade estos estilos CSS en la etiqueta `<style></style>`:

```css
.contenedor {
  width: 100%;
  height: 100vh;
}

.caja1 {
  background-color: #FAF;
}


```

Ahora deberías ver que una caja que abarca todo el ancho disponible. vamos a ajustar el ancho, añade la siguiente regla css:

```css

.caja1 {
  background-color: #FAF;
  width: 200px;
}

```

Con esto, nuestra caja mide 200px.

Cuando queremos centrar un elemento, podemos usar algunas técnicas sencillas, te explicaré algunas que puedes tener en cuenta:

- **Usando Margin**: Podemos centrar un objeto de manera Horizontal usando el Margin, para usamos la propiedad margin y le damos un valor `auto`:

  ```css

  .caja1 {
    background-color: #FAF;
    margin: auto; /* Solo se aplicará a los lados, aun podemos 
    poner un margin para top y bottom*/
  }

  ```

- **Usando Flex**: Flex nos ayuda a posicionar los elementos hijo respecto a su contenedor padre. Para ver una idea más clara, ahora vamos a centrar ambas cajas usando el display `flex`. Para ello primero quitamos la propiedad `margin` que habiamos usado en el ejemplo anterior y ahora añadimos lo siguiente a el selector `.contenedor`:

  ```css
  .contenedor {
    width: 100%;
    height: 100vh;
    display: flex; /* Indicamos que el contenedor tiene display flex*/
    justify-content: center; /* Indicamos que queremos justificar el contenido al centro en el eje horizontal */
  }
  ```

  Con esto hemos centrado nuestra caja dentro del eje horizontal, si queremos añadir un centrado vertical podemo hacer lo siguiente:

  ```css

  .contenedor {
    width: 100%;
    height: 100vh;
    display: flex; /* Indicamos que el contenedor tiene display flex*/
    justify-content: center; /* Indicamos que queremos 
    justificar el contenido al centro en el eje horizontal */
    align-items: center; /* Indicamos que estamos centrando 
    de manera vertical */
  }
  ```

Esto que puede parecer sencillo, en ocasiones es un dolor de cabeza para muchos desarrolladores por desconocer la correcta aplicación de estas propiedades.

## Introducción a Flexbox

Si bien es cierto hemos usado Flex para uno de los ejemplos, aún no hemos visto que es este tipo de display y las ventajas que trae, así que veremos un poco de ello en el siguiente video:

{{< youtube BIXgEpITld4 >}}