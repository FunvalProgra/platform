---
title: "Componentes con estado"
date: 2023-03-12T11:46:35-06:00
draft: false
showPagination: false
---

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>Actualización</b>
  </div>
  <span > <!-- class="dark:text-neutral-300" -->

En esta sección se detalla como crear componentes de estado basandonos en el uso de Clases, sin embargo en versiones mas recientes de react se usan las funciones para crear componentes de estado. Por ello, te recomendamos leer la documentación oficial de React que encontrarás a continuación y el video que te dejamos en la parte inferior.

[https://react.dev/learn/state-a-components-memory](https://react.dev/learn/state-a-components-memory)
</span>

</div>

<br>

# Componentes con estado / sin estado

Para comenzar queremos analizar estos dos conceptos en contraposición. Cuando empezamos con React pueden provocar dudas, pero realmente es sencillo. Básicamente, la diferencia entre componentes con o sin estado estriba en que los componentes con estado permiten mantener datos propios a lo largo del tiempo e implementar comportamientos en sus diferentes métodos del ciclo de vida.
Componentes sin estado

Los componentes sin estado no guardan ninguna información y por ello no necesitan de datos locales. Todos los componentes implementados hasta el momento eran stateless, sin estado. Eso no significa que no puedan personalizar su comportamiento, lo que se consigue con la ayuda de las propiedades de los componentes. Estas propiedades que nos pasan se podrán incluso transformar al producir una salida, de modo que sea acorde con las necesidades, pero no se guardará ningún valor y el componente no tendrá un ciclo de vida.
Nota: El ciclo de vida de los componentes es algo que todavía no hemos abordado. Más adelante hablaremos de él, porque entenderlo es muy importante en React.
Ejemplo de componente sin estado

Para que quede más claro, esto sería una implementación de componente sin estado que recibe un timestamp como propiedad y genera una vista donde ese instante se muestra convertido en una fecha en español.

```js
import React from "react";

export default function (props) {
  var date = new Date(parseInt(props.timestamp, 10));
  var fecha =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return <span>{fecha}</span>;
}
```

Este componente se podría usar importándolo y luego colocando la etiqueta correspondiente. Me parece interesante mostrar cómo se usaría porque el componente en sí, tal como se ha definido, no tiene nombre. El nombre se lo asignamos a la hora de importarlo.
Nota: El estilo anterior para la creación del componente se conoce en React como "stateless function component". Es una alternativa a la creación del componente a partir de una clase, que solo podemos usar para los componentes sin estado.

```js
import React, { Component } from "react";
import TimestampToDate from "./utils/TimestampToDate";

class App extends Component {
  render() {
    return <TimestampToDate timestamp={1475700297974} />;
  }
}
```

Otro detalle interesante aquí es la forma como le pasamos un valor numérico a un componente. Dentro del componente la propiedad timestamp se esperaría que fuera un entero y para que así sea tenemos que indicarle el valor sin comillas. Lo metemos entre llaves porque si no le colocas comillas JSX te obliga a que sea una expresión Javascript. Esa expresión se evalúa como un número entero.

Con este ejemplo queremos dejar claro que las propiedades de los componentes se pueden manipular para transformarlas en cualquier otro dato. Pero atención, en los componentes stateless las propiedades debemos tratarlas como valores de solo lectura, para evitar posibles situaciones inesperadas.. Si queremos manipular las propiedades y transformarlas en otra cosa lo más normal es guardemos los datos nuevos generados como variables, o estado si fuera necesario. Incluso, si solo se trata de una transformación sencilla para visualizar en la vista, podrías incluirla como una expresión Javascript embebida entre llaves dentro del JSX, aunque por claridad del código es preferible crear variables locales para generar esos cambios, como en el ejemplo anterior. En todo caso, quédate con que las propiedades deben trabajar como solo lectura.
Componentes con estado

Los componentes con estado son aquellos que almacenan datos de manera local al componente. Estos datos pueden variar variar a lo largo del tiempo bajo diversas circunstancias, por ejemplo por la interacción del usuario con el componente. Este tipo de componentes tienen algunas particularidades y posibilidades por encima de los componentes sin estadao que veremos a continuación.

Un ejemplo de componente con estado podría ser un contador. Ese contador puede incrementarse o decrementarse. Incluso podrían pasarnos como propiedad el valor inicial del contador, pero el valor actual de la cuenta lo guardaremos en el estado. Otro ejemplo podría ser un componente que se conecte con un API Rest. A este componente le podemos pasar como propiedad la URL del API y una serie de parámetros para realizar la solicitud al servidor. Una vez que recibamos los datos lo común será almacenarlos como estado del componente, para usarlos como sea necesario.

El componente podrá además reaccionar al cambio de estado, de modo que actualice su vista cuando sea necesario. Eso lo veremos cuando analicemos el ciclo de vida de los componentes.
Código necesario para implementar componente con estado

Seguro que estarás deseando ver ya un componente con estado. Enseguida nos ponemos con ello, pero quiero que veamos antes el código de "boilerplate" para crear un componente con estado.

```js
import React from "react";

export default class Contador extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return <div>Esto aun no tiene estado!</div>;
  }
}
```

Lo primero decir que este componente todavía no tiene un estado implementado, es solo un código de partida para ver un par de cosas.

Como primer detalle no estamos importando implícitamente la clase Component, para hacer el extends. No es problema porque depende de React. Así que ahora estamos haciendo "extends React.Component", lo que es perfectamente válido. Esto no tiene mucho que ver con el tema que nos ocupa, de los estados, pero así vemos más variantes de codificación.

Más relevante en el código anterior es el constructor. En este boilerplate la verdad es que el constructor no sirve para nada, porque realmente no hemos inicializado nada (como sabes, los constructores resumen las tareas de inicialización de los objetos). En este caso simplemente estamos llamando al constructor de la clase padre, super(), pasándole los mismos argumentos que nos pasaron a nosotros.
Nota: Eso de "...args" es una desestructuración, algo que nos viene de ES6, que permite en este caso recibir todos los argumentos o parámetros enviados a una función, sin necesidad de indicarlos uno a uno. Puedes obtener más información en el Manual de ES6, artículos del operador Rest y el operador Spread.

Generalmente en los componentes que tienen estado necesitamos inicializarlo, por lo que el sitio más correcto sería el constructor. Si realizamos un constructor tenemos que asegurarnos que se invoque al constructor de la clase padre, que realiza una serie de tareas genéricas para todos los componentes de React. Como esa invocación hay que hacerla explícita al sobreescribir el constructor, nos obliga a escribir la llamada a super(). Enseguida veremos cómo inicializar el estado, pero he querido mostrar ese código, aún sin la inicialización, para comentar este detalle del constructor.

En el boilerplate encuentras también el método render(), que ya sabemos que es el que nos sirve para definir la representación del componente.
Ejemplo de componente con estado

Ahora veamos ya una implementación de un componente completo con estado. En nuestro ejemplo vamos a crear el típico del contador. El valor actual del contador será nuestro estado y lo tendremos que inicializar en el constructor.

```js
import React from "react";

export default class Contador extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      contador: 0,
    };
  }

  render() {
    return <div>Cuenta actual: {this.state.contador}</div>;
  }
}
```

Ahora nuestro constructor ya tiene sentido, porque está realizando la inicialización de la propiedad "state" del componente. Como puedes ver el estado es un objeto, en el que ponemos tantos atributos como sea necesarios guardar como estado.

A la hora de renderizar el componente, por supuesto, podremos usar el estado para mostrar la salida. En este caso puedes ver cómo se vuelca el estado en la vista, con la expresión {this.state.contador}. Algo muy parecido a lo que hacíamos con las propiedades, solo que ahora los datos nos llegan del estado.

Solo nos falta implementar un botón para incrementar ese contador para ello tenemos que entrar en un tema nuevo, que son los eventos. Veamos el siguiente código.

```js
import React from "react";

export default class Contador extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      contador: 0,
    };
  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    return (
      <div>
        <span>Cuenta actual: {this.state.contador}</span>
        <button onClick={this.incrementar.bind(this)}>+</button>
      </div>
    );
  }
}
```

Ahora tenemos un botón y al hacer clic sobre él se invocará a la función incrementar(). Sin querer entrar en demasiados detalles sobre eventos, pues no es el asunto de este artículo, cabe decir que se pueden definir como si fueran atributos de los elementos o componentes. Como valor le colocamos su manejador de eventos. Además el "bind(this)" lo hacemos para bindear el contexto. Sobre eventos hablaremos más adelante.

Lo que es interesante, para lo que respecta al estado, está en el manejador de evento incrementar(). Este usa el método setState() para modificar el estado. El detalle que no se te puede escapar es que, para manipular el estado no se debe modificar "a pelo" (a mano) la propiedad this.state, sino que tenemos que hacerlo a través de this.setState(). El motivo es que setState(), además de alterar el estado, desencadena toda una serie de acciones implementadas en el core de React, que se encargan de realizar todo el trabajo por debajo para que ese cambio de estado tenga una representación en la vista.

Dicho de otra manera, en el momento que cambiemos el estado con setState(), se pone en ejecución el motor de React para que se actualice el DOM virtual, se compare con el DOM del navegador y por último se actualicen aquellos elementos que sea necesario (porque realmente hayan cambiado). Si no usamos setState() todas esas operativas no se producirían y los componentes empezarían a funcionar de manera no deseada.
Asincronía en la manipulación del estado

Hay un detalle extra que no queremos dejar pasar, sobre la asincronía en el manejo del estado por parte de React. Resulta que React, por motivos de rendimiento, puede llegar a acumular varias llamadas a setState, para procesarlas en un mismo instante.

Lo anterior significa que this.state puede ser actualizado de manera asíncrona. Es decir, this.setState() puede no ejecutarse inmediatamente, sino esperar a que React juzgue oportuno hacer las actualizaciones del estado. Esto podría resultar en una situación complicada de resolver, cuando el cálculo del nuevo valor del estado necesita basarse en el estado que haya anteriormente.

```js
incrementar() {
  this.setState({
    contador: this.state.contador + 1
  })
}
```

En el código del método incrementar anterior, nos basamos en el estado actual del contador, para incrementarlo en una unidad. Sin embargo, si no sabemos realmente cuándo se va a ejecutar this.setState. Por ello, podría ocurrir que ese incremento se realice a partir de un valor del estado que no era realmente el válido.

Para resolver esta situación en React se puede usar un mecanismo de manipulación del estado basado en una función. Veamos el código para clarificarlo un poco.

incrementar() {
this.setState(prevState => {
return { counter: prevState.counter + 1};
});
}

Como puedes ver, en lugar de enviarle un objeto a setState() le estamos enviando una función. Esa función es capaz de recibir como parámetro el estado actual. Entonces, el nuevo estado lo calculo en función del estado actual.

Si habías probado ejemplos anteriores en los que no habías tenido problemas con el cálculo del estado es normal. Aunque sea asíncrona la actualización del estado es muy rápida, por lo que es fácil no percibir ningún comportamiento anómalo. Simplemente tenlo en cuenta como una buena práctica en React.
Conclusión

De momento hemos dado bastante información sobre el estado de los componentes, hemos podido distinguir componentes con estado y componentes sin estado, y aunque todavía nos quedan cosas que aprender, hemos podido ver ejemplos para hacernos una idea de cada tipo de componente.

En futuros artículos tenemos que abordar otros asuntos clave, como la inicialización de propiedades y estado ante diversos estilos de codificación, así como el ciclo de vida de los componentes, que es necesario conocer a fondo para resolver muchas de las necesidades de desarrollo en React.

## video Componentes

{{< youtube LmldFbeSTFc >}}
