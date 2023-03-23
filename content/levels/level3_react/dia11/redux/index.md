---
title: "Redux"
date: 2023-03-12T11:52:06-06:00
draft: false
showPagination: false
---
# Redux

Uso con React

Comencemos enfatizando que Redux no tiene relación alguna con React. Puedes escribir aplicaciones Redux con React, Angular, Ember, jQuery o vanilla JavaScript.

Dicho esto, Redux funciona especialmente bien con librerías como React y Deku porque te permiten describir la interfaz de usuario como una función de estado, y Redux emite actualizaciones de estado en respuesta a acciones.

Usaremos React para crear nuestra una aplicación sencilla de asuntos pendites (To-do).
Instalando React Redux

React Redux no está incluido en Redux de manera predeterminada. Debe instalarlo explícitamente:

npm install --save react-redux

Si no usas npm, puedes obtener la distribución UMD (Universal Module Definition) más reciente desde unpkg (ya sea la distribución de desarrollo o la de producción). La distribución UMD exporta una variable global llamada window.ReactRedux por si la añades a tu página a través de la etiqueta < script >.
Componentes de Presentación y Contenedores

Para asociar React con Redux se recurre a la idea de separación de presentación y componentes contenedores. Si no está familiarizado con estos términos, lea sobre ellos primero, y luego vuelva. ¡Son importantes, así que vamos le vamos a esperar!

¿Ha terminado de leer el artículo? Repasemos sus diferencias:
	Componentes de Presentación 	Componentes Contenedores
Propósito 	Como se ven las cosas (markup, estilos) 	Como funcionan las cosas (búsqueda de datos, actualizaciones de estado)
Pertinente a Redux 	No 	Yes
Para leer datos 	Lee datos de los props 	Se suscribe al estado en Redux
Para manipular datos 	Invoca llamada de retorno (callback) desde los props 	Envia acciones a Redux
Son escritas 	Manualmente 	Usualmente generados por React Redux

La mayoría de los componentes que escribiremos serán de presentación, pero necesitaremos generar algunos componentes contenedores para conectarlos al store que maneja Redux. Con esto y el resumen de diseño que mencionaremos a continuación no implica que los componentes contenedores deban estar cerca o en la parte superior del árbol de componentes. Si un componente contenedor se vuelve demasiado complejo (es decir, tiene componentes de presentación fuertemente anidados con innumerables devoluciones de llamadas que se pasan hacia abajo), introduzca otro contenedor dentro del árbol de componentes como se indica en el FAQ.

Técnicamente usted podría escribir los componentes contenedores manualmente usando store.subscribe(). No le aconsejamos que haga esto porque React Redux hace muchas optimizaciones de rendimiento que son difíciles de hacer a mano. Por esta razón, en lugar de escribir los componentes contenedores, los generaremos utilizando el comando connect(), función proporcionada por React Redux, como verá a continuación.

Instalación
Uso de la aplicación Create React

La forma recomendada de iniciar nuevas aplicaciones con React Redux es mediante el uso de las plantillas oficiales de Redux+JS/TS para Create React App, que aprovecha Redux Toolkit.

#JS
npx crear-reaccionar-aplicación mi-aplicación --template redux

#TS
npx create-react-app mi-aplicación --template redux-typescript

Una aplicación React existente

React Redux 8.0 requiere React 16.8.3 o posterior (o React Native 0.59 o posterior).

Para usar React Redux con su aplicación React, instálela como una dependencia:

### Si usa npm:
npm instalar reaccionar-redux

### O si usas hilo:
añadir hilo reaccionar-redux

También deberá instalar Redux y configurar una tienda Redux en su aplicación.

Esto supone que está utilizando el administrador de paquetes npm con un paquete de módulos como Webpack o Browserify para consumir módulos CommonJS.

Si aún no usa npm o un paquete de módulos moderno, y prefiere una compilación UMD de un solo archivo que hace que ReactRedux esté disponible como un objeto global, puede obtener una versión preconstruida de cdnjs. No recomendamos este enfoque para ninguna aplicación seria, ya que la mayoría de las bibliotecas complementarias de Redux solo están disponibles en npm.
Documentación

Los documentos de React Redux se publican en https://react-redux.js.org.