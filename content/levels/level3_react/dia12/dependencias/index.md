---
title: "Dependencias"
date: 2023-03-12T11:52:41-06:00
draft: false
showPagination: false
---

# Dependencias

## ¿Qué es el array de dependencias en React?

En nuestro post sobre el hook useCallback en React, te hemos mencionado que uno de los pasos más importantes en la ejecución de esta función es colocar un array de dependencias. Este elemento también es fundamental en el uso del hook useEffect en React. Pero, ¿qué es?

Cuando hablamos del array de dependencias en React nos referimos a pasar como segundo parámetro de un hook un array. Es decir, mientras que el primer parámetro de un hook como useEffect o useCallback es una función, el segundo parámetro puede ser un array. Aunque este array puede estar vacío o lleno, su función cambia según su valor. A continuación, te explicamos qué sucede en cada caso.

Se le llama array de dependencias porque el valor contenido dentro del array se conoce como una dependencia. Este nombre se da porque el funcionamiento del hook cambiará dependiendo del valor que contenga este array.

En el hook useEffect, pasar un array vacío como segundo parámetro quiere decir que el efecto contenido en la función solo se ejecutará después del primer render. Por su parte, un array de dependencias en React que contenga un valor se ejecuta cada vez que cambie este valor.

En el hook useCallback, un array vacío quiere decir que la función contenida como primer parámetro se ejecutará justo después del primer render. La diferencia aquí es que la función quedará memoizada, es decir, no cambiará su referencia a largo de los consecuentes renders. Entonces, con el array de dependencias en React conseguiremos una función que será siempre la misma durante toda la vida del componente.

¿Y qué sucede si ponemos un valor dentro del array de dependencias en useCallback? Pues esta dependencia marcará cuando se va a generar una nueva referencia. Es decir, cada vez que cambie la dependencia, cambiará la referencia.

Desde KeepCoding queremos comentarte que el array de dependencias en React no es algo sobre lo que haya que pensar demasiado. En realidad, cualquier elemento que manejemos dentro de los hooks useCallback y useEffect, por ejemplo una prop, se vuelve una dependencia. Por ello, hay que buscar de qué depende la función que tenemos dentro del hook, un estado, un dato externo, una función. En muchos de los casos, terminamos poniendo un array vacío.

## ¿Cómo saber si estamos usando el array de dependencias en React correctamente?

Debido a los distintos modos en que podemos usar el array de dependencias en React, podemos tener dudas sobre su uso adecuado. Lo bueno es que con análisis automáticos como ESLint podemos obtener un resultado. Esta extensión nos avisará cuando no tengamos bien puesto este elemento.

Por ejemplo, cuando un hook useCallback no tiene un array de dependencias, veremos el siguiente mensaje:

React Hook useCallback does nothing when called with only one argument. Did you forget to pass an array of dependencies?

Este mensaje sale porque no tiene mucho sentido usar el useCallback sin un array de dependencias. ¿Por qué? Pues porque si no se lo ponemos, al igual que si no lo ponemos en useEffect, las funciones se ejecutarán siempre después de cada render. Por ello, utilizar useCallback para que se cree una nueva referencia en cada render contradice el mismo propósito del hook.

En useCallback es bueno mantener las dependencias al mínimo. Normalmente, estamos utilizando este hook porque queremos reducir el número de referencias que se producen de una misma función. Entonces, para mejorar su performance deberemos mantener pocas dependencias. No necesariamente tiene que ser un array vacío, pero deberíamos asegurarnos de tener pocas variables que cambien poco. 

{{< youtube 8m6v98orJFk >}}