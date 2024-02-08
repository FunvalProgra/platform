---
title: "Query Params en Express"
date: 2024-02-08T11:22:39-05:00
draft: false
showPagination: false
---

En el desarrollo de aplicaciones web con Express.js, es común encontrarse con la necesidad de manejar parámetros en las solicitudes HTTP para realizar operaciones específicas. Uno de los tipos de parámetros más utilizados son los "query params", que permiten enviar datos adicionales a través de la URL. En este artículo, exploraremos en detalle qué son los query params en Express, cómo funcionan y cómo se pueden utilizar para construir aplicaciones web robustas y flexibles.

## ¿Qué son los Query Params?

Los query params, también conocidos como parámetros de consulta o query strings, son pares clave-valor que se incluyen en la URL de una solicitud HTTP después del signo de interrogación (`?`). Estos parámetros se utilizan para enviar datos adicionales al servidor y pueden ser utilizados para filtrar, ordenar o paginar resultados, entre otras operaciones.

Por ejemplo, en la URL `/productos?categoria=electronica&precioMax=500`, los query params son `categoria` y `precioMax`, y sus valores son `electronica` y `500` respectivamente.

## Cómo Funcionan los Query Params en Express

En Express, los query params se pueden acceder a través del objeto `req.query` en las funciones de middleware que manejan las solicitudes HTTP. Este objeto contiene un conjunto de pares clave-valor que representan los query params de la solicitud.

Por ejemplo, para acceder al query param `categoria` en la URL `/productos?categoria=electronica`, podemos hacer lo siguiente:

```javascript
app.get("/productos", (req, res) => {
  const categoria = req.query.categoria;
  // Lógica para manejar la solicitud utilizando el parámetro categoria...
});
```

En este ejemplo, `req.query.categoria` nos dará el valor del query param `categoria`, que es `"electronica"` en este caso.

## Diferencia entre Query Params y URL Params en Express

Es importante distinguir entre query params y URL params (también conocidos como route params) en Express. Los URL params se especifican en la ruta de la URL y se utilizan para identificar recursos específicos, mientras que los query params se especifican después del signo de interrogación y se utilizan para enviar datos adicionales.

Por ejemplo, en la ruta `/productos/:id`, `:id` es un URL param que se utiliza para identificar un producto específico, mientras que en la URL `/productos?categoria=electronica`, `categoria` es un query param que se utiliza para filtrar los productos por categoría.

## Ventajas de Utilizar Query Params en Express

El uso de query params en Express ofrece varias ventajas:

1. **Flexibilidad**: Los query params permiten enviar datos adicionales de manera flexible y sin afectar la estructura de la URL.
2. **Facilidad de Uso**: Acceder a los query params en Express es sencillo utilizando el objeto `req.query`.
3. **Interoperabilidad**: Los query params son compatibles con diferentes clientes HTTP y pueden ser utilizados fácilmente en combinación con otros tipos de parámetros, como URL params y body params.
4. **Seguridad**: Los query params no afectan la seguridad de la aplicación de la misma manera que los URL params, ya que no revelan información confidencial en la URL.

## Ejemplos de Uso de Query Params en Express

### Filtrado de Resultados

```javascript
app.get("/productos", (req, res) => {
  const categoria = req.query.categoria;
  // Lógica para manejar la solicitud utilizando el parámetro categoria...
  res.send(`Filtrando productos por la categoría: ${categoria}`);
});
```

URL recibida: `GET /productos?categoria=electronica`

### Paginación de Resultados

```javascript
app.get("/productos", (req, res) => {
  const pagina = req.query.pagina || 1;
  const limite = req.query.limite || 10;
  // Lógica para manejar la solicitud utilizando los parámetros de paginación...
  res.send(
    `Mostrando productos de la página ${pagina}, con un límite de ${limite} productos por página.`
  );
});
```

URL recibida: `GET /productos?pagina=2&limite=20`

### Ordenamiento de Resultados

```javascript
app.get("/productos", (req, res) => {
  const orden = req.query.orden || "nombre";
  // Lógica para manejar la solicitud utilizando el parámetro de ordenamiento...
  res.send(`Mostrando productos ordenados por: ${orden}`);
});
```

URL recibida: `GET /productos?orden=precio_descendente`

### Rutas Dinámicas con URL Params

Además de los query params, Express también permite definir rutas con parámetros dinámicos, conocidos como URL params. Estos parámetros se definen en la ruta utilizando dos puntos seguidos del nombre del parámetro.

Por ejemplo:

```javascript
app.get("/producto/:id", (req, res) => {
  const productId = req.params.id;
  // Lógica para manejar la solicitud utilizando el parámetro de la URL...
  res.send(`Mostrando información del producto con ID: ${productId}`);
});
```

URL recibida: `GET /producto/123`

En este ejemplo, `req.params.id` contiene el valor del parámetro de la URL `id`.

## Conclusión

Los query params son una herramienta poderosa para enviar datos adicionales a través de las solicitudes HTTP en Express.js. Al permitir la flexibilidad y la interoperabilidad, los query params facilitan la construcción de aplicaciones web robustas y flexibles que pueden adaptarse a una amplia gama de necesidades. Al comprender cómo funcionan y cómo utilizarlos efectivamente en Express, los desarrolladores pueden aprovechar al máximo esta característica y crear aplicaciones web altamente funcionales y eficientes.

## Videos

Mira este video desde 01:12:12 hasta 01:40:15 minutos (ya está marcado).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/JmJ1WUoUIK4?start=4332&end=6015" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
