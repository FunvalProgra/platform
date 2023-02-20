---
title: "Recursividad | Consumo de API's"
date: 2023-02-20T17:06:27-05:00
draft: false
showPagination: false
---

La recursividad es un concepto avanzado de las funciones de JavaScript.

La recursión es un patrón de programación que es útil en situaciones en las que una tarea puede dividirse naturalmente en varias tareas del mismo tipo, pero más simples. O cuando una tarea se puede simplificar en una acción fácil más una variante más simple de la misma tarea. O, como veremos pronto, tratar con ciertas estructuras de datos.

Sabemos que cuando una función resuelve una tarea, en el proceso puede llamar a muchas otras funciones. Un caso particular de esto se da cuando una función *se llama a sí misma*. Esto es lo que se llama *recursividad*.

## Dos formas de pensar

Para comenzar con algo simple, escribamos una función `pow(x, n)` que eleve `x` a una potencia natural de`n`. En otras palabras, multiplica `x` por sí mismo `n` veces.

```js
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
```

Hay dos formas de implementarlo.

1. Pensamiento iterativo: el bucle `for`:

    ```js run
    function pow(x, n) {
      let result = 1;
      // multiplicar el resultado por x n veces en el ciclo
      for (let i = 0; i < n; i++) {
        result *= x;
      }
      return result;
    }
    alert( pow(2, 3) ); // 8
    ```

2. Pensamiento recursivo: simplifica la tarea y se llama a sí mismo:

    ```js run
    function pow(x, n) {
      if (n == 1) {
        return x;
      } else {
        return x * pow(x, n - 1);
      }
    }
    alert( pow(2, 3) ); // 8
    ```

Note cómo la variante recursiva es fundamentalmente diferente.

Cuando se llama a `pow(x, n)`, la ejecución se divide en dos ramas:

```js
              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
```

1. Si `n == 1`, entonces todo es trivial. Esto se llama *base* de la recursividad, porque produce inmediatamente el resultado obvio: `pow (x, 1)` es igual a `x`.
2. De lo contrario, podemos representar `pow (x, n)` como `x * pow (x, n - 1)`. En matemáticas, uno escribiría <code>x<sup>n</sup> = x * x <sup>n-1</sup></code>. Esto se llama *paso recursivo*: transformamos la tarea en una acción más simple (multiplicación por `x`) y una llamada más simple de la misma tarea (`pow` con menor `n`). Los siguientes pasos lo simplifican más y más hasta que `n` llegue a` 1`.

{{< figure src="./recursion-pow.svg" >}}

Por ejemplo, para calcular `pow (2, 4)` la variante recursiva realiza estos pasos:

1. `pow(2, 4) = 2 * pow(2, 3)`
2. `pow(2, 3) = 2 * pow(2, 2)`
3. `pow(2, 2) = 2 * pow(2, 1)`
4. `pow(2, 1) = 2`

Por lo tanto, la recursión reduce una llamada de función a una más simple y luego... a una más simple, y así sucesivamente, hasta que el resultado se vuelve obvio.

El número máximo de llamadas anidadas (incluida la primera) se llama *profundidad de recursión*. En nuestro caso, será exactamente `n`.

La profundidad máxima de recursión está limitada por el motor de JavaScript. Podemos confiar en que sea 10 000; algunos motores permiten más, pero 100 000 probablemente esté fuera del límite para la mayoría de ellos. Hay optimizaciones automáticas que ayudan a aliviar esto ("optimizaciones de llamadas de cola"), pero aún no tienen soporte en todas partes y funcionan solo en casos simples.

Eso limita la aplicación de la recursividad, pero sigue siendo muy amplia. Hay muchas tareas donde la forma recursiva de pensar proporciona un código más simple y fácil de mantener.

## Uso de la Recursividad

Este concepto puede ser confuso, en el siguiente video del canal de Youtube <mark>Hola Mundo</mark> verás una forma sencilla de usarla y lo útil que puede llegar a ser.

{{< youtube AZd_CzcRhXs >}}

# Continuemos consumiendo API's

Antes de terminar este capítulo, sigamos viendo ejemplos de consulos de API's. En este video, veremos un desafío de programación que consiste en crear una página web que consume una API en 10 minutos, te sugerimos que puedas analizar el video, pausar y retroceder según necesites para que veas cómo poder usar esta herramienda de forma sencilla:

{{< youtube rfOrTHC6utU >}