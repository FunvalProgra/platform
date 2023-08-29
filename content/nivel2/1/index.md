---
title: "Intro"
date: 2023-03-09T10:55:15-06:00
draft: false
showPagination: false
---

# React Js 
## ¿Que es React Js?

Una biblioteca de JavaScript para construir interfaces de usuario
Comienza
Haz el tutorial.

### Declarativo

React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.

Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.

### Basado en componentes

Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.

Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.

### Aprende una vez, escríbelo donde sea

En React no dejamos fuera al resto de tus herramientas tecnológicas, así que podrás desarrollar nuevas características sin necesidad de volver a escribir el código existente.

React puede también renderizar desde el servidor usando Node, así como potencializar aplicaciones móviles usando React Native.
## ¿Que es React Js y como funciona?
{{< youtube lWQ69WX7-hA >}}
## Estructura
{{< youtube xeYtbn9ldp8 >}}
## ¿Que es JSX?
{{< youtube mnqvH2ePysE >}}

Considera la declaración de esta variable:

```js
const element = <h1>Hello, world!</h1>;
```

Esta curiosa sintaxis de etiquetas no es ni un string ni HTML.

Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.

JSX produce “elementos” de React. Exploraremos como renderizarlos en el DOM en la siguiente sección. A continuación puedes encontrar lo básico de JSX que será necesario para empezar.

### ¿Por qué JSX?

React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.

En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas. Volveremos a los componentes en otra sección, pero si aún no te sientes cómodo maquetando en JS, esta charla podría convencerte de lo contrario.

React no requiere usar JSX, pero la mayoría de la gente lo encuentra útil como ayuda visual cuando trabajan con interfaz de usuario dentro del código Javascript. Esto también permite que React muestre mensajes de error o advertencia más útiles.

### Insertando expresiones en JSX

En el ejemplo a continuación, declaramos una variable llamada name y luego la usamos dentro del JSX envolviéndola dentro de llaves:

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

Puedes poner cualquier expresión de JavaScript dentro de llaves en JSX. Por ejemplo, 2 + 2, user.firstName, o formatName(user) son todas expresiones válidas de Javascript.

En el ejemplo a continuación, insertamos el resultado de llamar la función de JavaScript, formatName(user), dentro de un elemento `` <h1> ``.

```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!  </h1>
);
```

Dividimos JSX en varias líneas para facilitar la lectura. Aunque no es necesario, cuando hagas esto también te recomendamos envolverlo entre paréntesis para evitar errores por la inserción automática del punto y coma.

### JSX también es una expresión

Después de compilarse, las expresiones JSX se convierten en llamadas a funciones JavaScript regulares y se evalúan en objetos JavaScript.

Esto significa que puedes usar JSX dentro de declaraciones if y bucles for, asignarlo a variables, aceptarlo como argumento, y retornarlo desde dentro de funciones:
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;}
```

### Especificando atributos con JSX

Puedes utilizar comillas para especificar strings literales como atributos:

```js
const element = <a href="https://www.reactjs.org"> link </a>;
```

También puedes usar llaves para insertar una expresión JavaScript en un atributo:


```js 
const element = <img src={user.avatarUrl}></img>; 
```

No pongas comillas rodeando llaves cuando insertes una expresión JavaScript en un atributo. Debes utilizar comillas (para los valores de los strings) o llaves (para las expresiones), pero no ambas en el mismo atributo.

{{% alert theme="info"%}}#### Advertencia: 
Dado que JSX es más cercano a JavaScript que a HTML, React DOM usa la convención de nomenclatura camelCase en vez de nombres de atributos HTML.
Por ejemplo, class se vuelve className en JSX, y tabindex se vuelve tabIndex.{{% /alert %}} 

# Instalacion React Js

#### 1. Veamos una forma sencilla de instalar React JS bajo el SO Windows 10

Para instalar React JS debemos tener instalado nodejs y ejecutar algunos comandos sencillos veamos la instalación paso a paso en este tutorial fácil 

#### 2. Pasos para instalar React JS
Instalar Node JS. Aqui buscamos la página oficial de NodeJS y 
    descargamos la version recomendada luego procedemos a realizar la instalación 
    con simples clics
    Levantamos la ventana de Comando de Windows CMD y ejecutamos las siguientes instrucciones o comandos.
    node --version.- Verificamos la instalación
    npm --version.- Verificamos que se haya instalado correctamente el gestor de dependencias de Javascript
    npx create-react-app miaplicacion.- Con este comando iniciamos la instalación de un proyecto con React JS.
    cd miaplicacion .- Ingresamos al directorio de la aplicación
    npm start.- Finalmente iniamos la compilación del proyecto para visualizarlo en un navegador web
## Como Instalar React JS en Windows
{{< youtube LxMCo8HZ6kM >}}