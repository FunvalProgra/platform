---
title: "Eventos JS"
date: 2023-03-12T11:46:09-06:00
draft: false
showPagination: false
---
# Cómo definir un evento de manera declarativa en React

Los eventos en React se definen generalmente de manera declarativa, en el código de la vista o template, producido con JSX en el método render().

Para definirlo tenemos que indicar dos cosas: Primero el tipo de evento que queremos implementar y luego el método que hará las veces de manejador de evento.
{{% alert theme="info"%}}#### Nota:
un manejador de evento no es más que la función que se encarga de definir la funcionalidad que tiene que ejecutarse cuando se dispara un evento{{% /alert %}} 

```js
render() {
  return (
    <p>
      <button onClick={this.toggleSlider}>Mostrar / Ocultar Slider</button>
    </p>
  );
}
```

Como puedes apreciar en el código anterior, el método render devuelve el tempate, escrito con el lenguaje con JSX. Dentro del template tenemos un botón, el cuál tiene definido un evento "click".
{{% alert theme="info"%}}#### Nota: Es importante darse cuenta que el método asignado a onClick no tiene los paréntesis al final. No estamos queriendo ejecutar una función, sino indicar qué función se debe asociar como manejador de eventos. Por eso no se le colocan los paréntesis. {{% /alert %}}

Las declaraciones de eventos en React tienen siempre esa forma: el prefijo "on", seguido del tipo de evento que queremos capturar (onClick, onInput…). Como valor, colocamos una referencia al método del componente encargado de procesar el evento correspondiente. Por tanto, al hacer clic sobre el botón, se ejecutará el método toggleSlider().

Luego tendremos que definir el manejador, como cualquier otro método del componente.
```js
toggleSlider() {
    alert('Has hecho clic');
}
```
## Bindear el contexto para acceder a this

Al implementar un manejador de evento es habitual que queramos acceder a las propiedades o métodos del propio componente. Por ejemplo, en el método toggleSlider() queremos cambiar el estado del componente y por tanto necesitamos manipularlo con this.setState().

Sin embargo aquí nos encontramos con una dificultad que viene del propio lenguaje Javascript no de React específicamente. En las funciones no es posible acceder a this como referencia al objeto sobre el que se invoca el método. Es por ello que necesitamos bindear el contexto.

Este sería el código real del método toggleSlider(), que simplemente tiene que negar una propiedad boleana del estado del componente.
```js
toggleSlider() {
  this.setState(prevState => {
    return { showSlider: !prevState.showSlider };
  });
}
```
Como puedes ver, nos basamos en el estado anterior para calcular el nuevo estado. Por todas partes estamos usando "this" con la intención de acceder al propio componente que ha recibido el mensaje toggleSlider(). El problema aquí, como decíamos, es que "this" puede no contener esa referencia.
{{% alert theme="info"%}}#### Nota: puedes ver más sobre el tratamiento del estado y this.setState en el artículo del estado de componentes en react. {{% /alert %}}

Para solucionarlo existen varios mecanismos en React. El más recomendable es binderar el contexto directamente en el constructor del componente.

Lo consigo simplemente así:
```js
constructor(props) {
  super(props);
  this.state = {
    showSlider: false
  }
  this.toggleSlider = this.toggleSlider.bind(this);
}
```
En este constructor estamos haciendo diversas tareas, la primera es la inicialización del estado, pero lo que nos interesa a nosotros es la parte donde se hace this.toggleSlider = this.toggleSlider.bind(this);
{{% alert theme="info"%}}#### Nota: Gracias a la llamada a .bind(this) sobre una función o método, le estamos indicando a Javascript qué es lo que queremos que valga "this" dentro del método. Esto es algo que seguramente, si tienes experiencia en Javascript, ya habrás hecho en muchas otras ocasiones.  {{% /alert %}}
## Otras alternativas de bindear this

También podemos hacer este bindeo de this (como contexto para en handler) a la hora de declarar el evento, en el template. El código nos quedaría más o menos así.
```js
<button onClick={this.toggleSlider.bind(this)}>Mostrar / Ocultar Slider</button>
```
También podríamos obtener el mismo resultado usando una arrow function, que es capaz de mantener el contexto de this, con un código como este:
```js
<button onClick={(e) => this.toggleSlider(e)}>Mostrar / Ocultar Slider</button>
```
Aunque estas opciones nos ensucien algo el template, tienen la ventaja de ahorrarnos algo de ceremonia en el constructor del componente. Sin embargo, en términos de rendimiento resultan una solución peor. El problema de estas alternativas es que, cada vez que se renderiza el componente, se le pasa una nueva función como manejador de evento, donde se tiene que bindear el contexto nuevamente. Incluso, si la función se está pasando hacia componentes hijos, forzaría un redibujado adicional del componente hijo, lo que posiblemente nos lleve a una disminución del rendimiento que podrá notarse en aplicaciones grandes.
## Pasar parámetros a manejadores de eventos

En los métodos de React asociados como manejadores de eventos podemos pasar parámetros. Puede ser útil cuando quieres personalizar el comportamiento del manejador, mediante el paso de datos que tienes desde el template.

Sería algo tan sencillo como bindear los otros datos que deseas enviar al método que hace de manejador de eventos. De la siguiente manera:
```js
<pre class="language-markup"><code>&lt;button onClick={(e) =&gt; this.toggleSlider(e)}&gt;Mostrar / Ocultar Slider&lt;/button&gt;</code></pre>
```
Ahora, dentro de nuestro método showText() podemos recibir el dato de esta forma.
```js
showText(item, e) {
    console.log(e, item);
}
```
Esto nos mostrará dos datos en la consola, el "item" es aquella variable extra que estamos pasando al manejador. Por su parte, el parámetro "e" es el objeto evento de Javascript.
## Prevenir el comportamiento por defecto de un evento

Algo también muy típico que querrás realizar en un componente al trabajar con eventos es prevenir el comportamiento predeterminado. Por ejemplo, ante un clic en un enlace, podemos evitar que el navegador se vaya a la URL definida en el href del enlace.

Para ello en Javascript nativo tendríamos dos opciones. La primera sería devolver "false" (return false) en el código del manejador. Esta alternativa no es válida para React. La segunda opción, que será la que realmente funcione, es invocar al método nativo de Javascript preventDefault(), que pertenece al objeto evento.

Por ejemplo, podríamos tener un enlace como este:
```js
<a onClick={this.clickRealizado} href="http://escuela.it">Haz clic</a>
```
Cuyo manejador de evento sería el siguiente:
```js
clickRealizado(e) {
    e.preventDefault();
    console.log('clickEnP')
}
```
Gracias a ``` e.preventDefault()``` al hacer clic sobre el enlace no provocará que el navegador se vaya de la página, hacia la web de EscuelaIT.
## Conclusión sobre los eventos en React

Hemos conocido lo básico sobre los eventos en React, junto con algunas cosas no tan básicas, pero de necesario conocimiento para poder trabajar con esta librería.

Como has podido comprobar, trabajar con eventos no es nada complejo, pero requiere saber las particularidades de la librería React para evitar problemas o situaciones poco deseadas, que a veces resulta difícil de debuguear. 
# VIDEO DE EVENT HANDLER
{{< youtube r5dzmx63ORI >}}
