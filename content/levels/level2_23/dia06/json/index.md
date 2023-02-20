---
title: "Json y Fetch"
date: 2023-02-20T15:44:48-05:00
draft: false
showPagination: false
---

En este día seguiremos aprendiendo sobre los archivos JSON y Fetch.

# JSON

En el siguiente video de <mark>Fazt</mark> aprenderás las bases de este formato de datos con el cual se suele intercambiar información entre aplicaciones.

{{< youtube LJzDHKPLWYw >}}

<br>
<br>

# Fetch

JavaScript puede enviar peticiones de red al servidor y cargar nueva información siempre que se necesite.

Por ejemplo, podemos utilizar una petición de red para:

- Crear una orden,
- Cargar información de usuario,
- Recibir las últimas actualizaciones desde un servidor,
- …etc.

…Y todo esto sin la necesidad de refrescar la página.

Se utiliza el término global “AJAX” (abreviado Asynchronous JavaScript And XML, en español: “JavaScript y XML Asincrónico”) para referirse a las peticiones de red originadas desde JavaScript. Sin embargo, no estamos necesariamente condicionados a utilizar XML dado que el término es antiguo y es por esto que el acrónimo XML se encuentra aquí. Probablemente lo hayáis visto anteriormente.

Existen múltiples maneras de enviar peticiones de red y obtener información de un servidor.

Comenzaremos con el el método `fetch()` que es moderno y versátil. Este método no es soportado por navegadores antiguos (sin embargo se puede incluir un polyfill), pero es perfectamente soportado por los navegadores actuales y modernos.

La sintaxis básica es la siguiente:

```js
let promise = fetch(url, [options])
```

- `url` – representa la dirección URL a la que deseamos acceder.
- `options` – representa los parámetros opcionales, como puede ser un método o los encabezados de nuestra petición, etc.

Este método puede parece confuso, debido a que usa un concepto llamado “promesas” y asincronía. Pero no te preocupes, en los siguientes ejemplos veremos cómo funciona.

En este video entenderemos de manera sencilla como funciona el método `fetch()`.

{{< youtube cjrt3NilcNw >}}

## Ejercicio de Consumo de API's

En el siguiente video de <mark>Fazt</mark> aprenderás a consumir una API de forma sencilla.

{{< youtube DgunJ2jMZwM >}}