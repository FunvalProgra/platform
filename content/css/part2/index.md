---
title: "Fundamentos de CSS "
date: 2023-05-01T15:09:30-05:00
draft: false
showPagination: false
---

# Unidades de Medida en CSS

Hoy vamos a aprender un poco sobre las unidades de medida en CSS. si bien es cierto no debes saberlas todas de memoria, es importante que las conozcas y puedas identificarlas cuando las veas en un código CSS, al igual que entender la diferencia entre las unidades exactas y las relativas.

{{< youtube EbsyJrtJgpw >}}

## CSS3: Box Model

Ya que entendemos las cosas básicas de HTML y CSS debemos tener presente lo sigiuente: **Cada elemento en el diseño web es una caja rectangular**. Este punto es importante para comprender como trabajamos con CSS y lograr el diseño que queremos lgrar. Si bien es cierto podemos posicionar los elementos y darles estilos con CSS, es importante que entendamos como funciona esa caja en sí.

El Box model (modelo de caja) explica el tamaño de los elementos en función de algunas propiedades de CSS.

Desde el interior hacia el exterior, tenemos:

- Content (contenido)
- padding (relleno)
- border (borde o frontera)
- margin (margen)

La mejor manera de visualizar el modelo de caja es abrir el navegador DevTools y comprobar cómo se muestra:

![box model](boxmodel.png)

Aquí puedes ver cómo Firefox me dice las propiedades de un elemento `span` que destaqué. Hice clic con el botón derecho en él, presioné Inspeccionar elemento y fui al panel Diseño de DevTools.

Mira, el espacio azul claro es el área de `content`. Rodeándolo está el `padding`, luego el `border` y finalmente el `margin`. De forma predeterminada, si estableces un ancho (o alto) en el elemento, se aplicará al área de `content` . Todos los cálculos de padding, border y margin se realizan fuera del valor, por lo que debes tener esto en cuenta cuando realices el cálculo. Se puede cambiar este comportamiento utilizando Box-sizing (puedes buscar más información de esta propiedad [aqui](https://developer.mozilla.org/es/docs/Web/CSS/box-sizing)).

Entender este punto, te puede ayudar a realizar diseño con CSS de manera más sencilla, por lo que mira el siguiente video y toma nota entre las diferencias entre cada una de las partes del box model:

{{< youtube c3Ok7uIKwU8 >}}

### Display

Ahora que entiendes un poco mejor lo que es el box model, es importante que sepas que las cajas en CSS pueden comportarse de manera distinta de acuerdo a una propiedad conocida como `display`. Esta propiedad nos indica la forma en la que el elemento será representado en el navegador y usar alguno de estos display, alterará considerablemente el comportamiento del navegador con el elemento y sus hijos.

En esta sección analizaremos los más importantes no cubiertos en otra parte:

- block
- inline
- inline-block
- none

en el siguiente video aprenderás la diferencia entre cada uno de estos y como afectan al modelo de caja:

{{< youtube Mlzz1xRB0sc >}}




## Tutorial de CSS

En caso desees hacer un repaso del tutorial de <mark>Hola Mundo</mark> te dejamos el video aqui, recuerda hacer una pausa almenos media hora antes de que comience la siguiente clase y dedicar ese tiempo a realizar los tutoriales de freeCodeCamp de CSS.

{{< youtube wZniZEbPAzk >}}

## Aprendiendo con Práctica

Continua reforzando tu conocimiento de HTML y CSS siguiendo estos cursos:

[HTML - Aplicacion de fotos de gatos](https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app)

[CSS - Menú de Cafetería](https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/#learn-basic-css-by-building-a-cafe-menu)
