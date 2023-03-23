---
title: "Callback | Consumo de API's"
date: 2023-02-20T17:06:27-05:00
draft: false
showPagination: false
---


# Callbacks

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>Terminos a considerar</b>
  </div>
  <span class="dark:text-neutral-300">

Callback's es un concepto que pueden llegar a ser confuso, pero es importante entenderlos para poder consumir API's. Ya hemos visto un poco de ellos en los métodos de Array. Para esto debemos entender que significa las siguientes palabras:
<br>
- <b>Sincrono</b>: Significa que las instrucciones se ejecutan una a una, en el orden en que fueron escritas.
<br>
- <b>Asincrono</b>: Significa que las instrucciones se ejecutan en cualquier orden, no necesariamente en el orden en que fueron escritas.
  </span>
</div>
<br>

# Secuencia de la función

Las funciones de JavaScript se ejecutan en la secuencia en que se llaman. No en la secuencia en que se definen. 

Por ejemplo, al tener un documento HTML con un elemento `<p>` con el id `demo`.

Este ejemplo terminará mostrando "Goodbye":

{{< highlight js "linenos=table,hl_lines=13-14" >}}
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

{{< /highlight >}}

En este ejemplo, estamos invocando primero a la funcion `myFirst` la cual invoca a la funcion `myDisplayer` con el argumento `"Hello"`. Luego, invocamos a la funcion `mySecond` la cual invoca a la funcion `myDisplayer` con el argumento `"Goodbye"`.


Este otro ejemplo terminará mostrando "Hello":

{{< highlight js "linenos=table,hl_lines=13-14" >}}

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();

{{< /highlight >}}


## Convirtiendo a callback

Ahora, vamos a convertir el ejemplo anterior en un callback. Para esto, vamos a crear una función que reciba como argumento una función y un argumento para esa función. 

{{< highlight js "linenos=table,hl_lines=13-14" >}}

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst(callback) {
  callback("Hello");
}

function mySecond(callback) {
  callback("Goodbye");
}

myFirst(myDisplayer);
mySecond(myDisplayer);

{{< /highlight >}}

En este ejemplo, la función `myFirst` recibe como argumento la función `myDisplayer` y el argumento `"Hello"`. Luego, la función `mySecond` recibe como argumento la función `myDisplayer` y el argumento `"Goodbye"`. Analiza el código con calma y entiende como funciona. puedes hacer unas pruebas con el.

Al trabajar con Arrays y usar sus métodos como `filter`, `forEach`, `map` entre otros, usamos funciones callbacks. Por ejemplo, el método `filter` recibe como argumento una función que se ejecuta para cada elemento del array. Si la función retorna `true`, el elemento se agrega al nuevo array. Si retorna `false`, el elemento no se agrega al nuevo array.

Ya hemos usado esos métodos durante este curso, pero comprender el concepto de callback es importante para crear nuestras propias funciones que reciban como argumento una función. Al trabajar con API's, es muy común usar funciones callbacks.

<!-- midudev hablando de callbacks -->

# Callback explicación por Midudev

En el siguiente video aprendarás con ejemplos de código cómo funciona el concepto de callback y cómo usarlo en tus proyectos. Recuerda que existen más videos sobre el tema, pero este concepto puede llegar a ser complicado, así que te recomendamos ir con calma y analizar el código que se escribe.

{{< youtube kjCH7vvISsE >}}

<!-- ## Uso de la Recursividad

Este concepto puede ser confuso, en el siguiente video del canal de Youtube <mark>Hola Mundo</mark> verás una forma sencilla de usarla y lo útil que puede llegar a ser.

{{< youtube AZd_CzcRhXs >}}

# Continuemos consumiendo API's

Antes de terminar este capítulo, sigamos viendo ejemplos de consulos de API's. En este video, veremos un desafío de programación que consiste en crear una página web que consume una API en 10 minutos, te sugerimos que puedas analizar el video, pausar y retroceder según necesites para que veas cómo poder usar esta herramienda de forma sencilla:

{{< youtube rfOrTHC6utU >}} -->