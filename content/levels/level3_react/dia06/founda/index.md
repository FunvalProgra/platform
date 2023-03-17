---
title: "Reaccionar + Fundación"
date: 2023-03-12T11:48:09-06:00
draft: false
showPagination: false
---
# Reaccionar + Fundación
## Motivación

### Instalar

        npm i react-foundation

Foundation es rico en funciones y fácil de personalizar. React, por otro lado, es increíble debido a su simplicidad. Es aún más increíble cuando se combina con Redux e Immutable .

Después de crear bastantes aplicaciones con React y Foundation, notamos que estábamos escribiendo los mismos componentes una y otra vez. Primero tratamos de encontrar una biblioteca que hiciera el trabajo, pero no había ninguna que satisficiera nuestras necesidades. Así que recopilamos nuestras notas, comenzamos a codificar y aquí está el resultado.

¡Esperamos que lo disfrutes tanto como nosotros!
¿Qué hay en la caja?

El objetivo es envolver cada parte de Foundation en componentes React reutilizables siguiendo las mejores prácticas del marco. El enfoque principal es la facilidad de uso y la extensibilidad. Utilizamos componentes de renderizado puro, también conocidos como componentes sin estado, siempre que sea posible para mantener el uso de la memoria al mínimo. Los componentes con estado solo se usan para componentes más grandes, como ResponsiveNavigation, donde el estado es realmente necesario. Todos los componentes se someten a pruebas unitarias para garantizar su calidad.

Aquí hay una lista de los componentes disponibles:

    Acordeón
    Insignia
    Migas de pan
    Botón
    grupo de botones
    Gritar
    Botón Cerrar
    FlexVideo
    Red
    Icono
    Etiqueta
    MediaObject
    Menú
    Paginación
    Progreso
    ResponsiveNavigation
    Cambiar
    Pestañas
    Miniatura
    Barra superior

¡Más componentes próximamente!
Instalar

Instalar biblioteca:

npm install react-foundation --save

Instalar sitios de fundación :

npm install fundación-sitios --save

Uso

// Añadir Foundation a index.js 
import  'foundation-sites/dist/css/foundation.min.css' ;

// importar componentes 
import  {  Button ,  Colors  }  from  'react-foundation' ;

// Usar componentes... 
function  EnviarBotón ( )  { 
  return  < Color del botón  = { Colores . ÉXITO } > Enviar < / Button > ; }

La documentación está en https://digia.online/react-foundation-docs/ .

Nota: Las versiones más recientes de foundation-sitesno ofrecen soporte inmediato para <Row/>y <Column/>componentes. Si trabaja con una versión más nueva, <Grid/>se <Cell/>deben usar componentes en su lugar.

// Versiones anteriores 
< Row  className = "display" > 
  < Columna  pequeña = { 2 }  grande = { 4 } > 4 columnas < / Columna > 
  < Columna  pequeña = { 4 }  grande = { 4 } > 4 columnas < / Columna > 
  < Columna  pequeña = { 6 }  grande = { 4} > 4 columnas < / Columna > 
< / Fila >

// Versiones más nuevas 
< Grid  className = "display" > 
  < Celda  pequeña = { 2 }  grande = { 4 } > 4 columnas < / Celda > 
  < Celda  pequeña = { 4 }  grande = { 4 } > 4  columnas < / Celda >
   < Celda  pequeña = { 6 }  grande = { 4 }> 4 columnas < / Celda > 
< /Cuadrícula>

