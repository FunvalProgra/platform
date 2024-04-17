---
title: 'Update en MongoDB'
date: 2024-04-12T15:56:24-05:00
draft: false
showPagination: false
---

MongoDB, una base de datos NoSQL ampliamente utilizada, ofrece potentes capacidades para actualizar documentos de manera eficiente. En este artículo, exploraremos diversas estrategias y prácticas para actualizar documentos en MongoDB, desde actualizaciones simples hasta operaciones más complejas que involucran múltiples documentos y campos.

## Operadores de Actualización y Métodos

MongoDB proporciona una variedad de operadores de actualización que pueden ser utilizados dentro de las operaciones de actualización, así como métodos específicos para diferentes casos de actualización. Algunos de los operadores más comunes son:

- **$set**: Establece el valor de un campo en un documento.
- **$unset**: Elimina un campo de un documento.
- **$inc**: Incrementa el valor de un campo numérico en un valor específico.
- **$push**: Agrega un valor a un campo de tipo array.
- **$addToSet**: Agrega un valor a un campo de tipo array si aún no está presente.
- **$pull**: Elimina todos los elementos de un campo de tipo array que coincidan con un valor o una condición específica.

Y algunos métodos importantes para actualizar documentos son:

- **updateOne()**: Actualiza un solo documento que cumple con los criterios de búsqueda especificados.
- **updateMany()**: Actualiza varios documentos que cumplen con los criterios de búsqueda especificados.
- **replaceOne()**: Reemplaza un solo documento que cumple con los criterios de búsqueda especificados por completo.

---

## Ejemplos de Actualización en Código

1. **Actualizar un Documento Único con `updateOne()`**:

```javascript
// Actualizar el nombre de un usuario con el ID especificado
db.usuarios.updateOne(
  { _id: ObjectId('id_del_usuario') },
  { $set: { nombre: 'Nuevo Nombre' } }
);
```

2. **Actualizar Múltiples Documentos con `updateMany()`**:

```javascript
// Incrementar la puntuación de todos los usuarios en 10
db.usuarios.updateMany({}, { $inc: { puntuacion: 10 } });
```

3. **Reemplazar un Documento con `replaceOne()`**:

```javascript
// Reemplazar un documento con el ID especificado por completo
db.coleccion.replaceOne(
  { _id: ObjectId('id_del_documento') },
  { nuevo_documento }
);
```

---

## Ejemplos de Operadores de Actualización

- **$set: Establece el valor de un campo en un documento.**

```javascript
// Establecer la edad de un usuario con el ID especificado en 25
db.usuarios.updateOne(
  { _id: ObjectId('id_del_usuario') },
  { $set: { edad: 25 } }
);
```

- **$unset: Elimina un campo de un documento.**

```javascript
// Eliminar el campo "telefono" de un usuario con el ID especificado
db.usuarios.updateOne(
  { _id: ObjectId('id_del_usuario') },
  { $unset: { telefono: '' } }
);
```

- **$inc: Incrementa el valor de un campo numérico en un valor específico.**

```javascript
// Incrementar la cantidad de productos en stock en 5 para un producto específico
db.productos.updateOne(
  { _id: ObjectId('id_del_producto') },
  { $inc: { stock: 5 } }
);
```

- **$push: Agrega un valor a un campo de tipo array.**

```javascript
// Agregar un nuevo comentario al array de comentarios de un post específico
db.posts.updateOne(
  { _id: ObjectId('id_del_post') },
  {
    $push: {
      comentarios: { texto: '¡Gran publicación!', usuario: 'usuario123' },
    },
  }
);
```

- **$addToSet: Agrega un valor a un campo de tipo array si aún no está presente.**

```javascript
// Agregar un nuevo tag a un artículo específico solo si el tag no existe aún
db.articulos.updateOne(
  { _id: ObjectId('id_del_articulo') },
  { $addToSet: { tags: 'nuevo_tag' } }
);
```

- **$pull: Elimina todos los elementos de un campo de tipo array que coincidan con un valor o una condición específica.**

```javascript
// Eliminar todos los comentarios de un post específico hechos por un usuario en particular
db.posts.updateOne(
  { _id: ObjectId('id_del_post') },
  { $pull: { comentarios: { usuario: 'usuario123' } } }
);
```

## Conclusiones

La actualización de documentos en MongoDB es una tarea fundamental en el desarrollo de aplicaciones que utilizan esta base de datos NoSQL. Con métodos como `updateOne()`, `updateMany()` y `replaceOne()` junto con una variedad de operadores de actualización, los desarrolladores pueden realizar actualizaciones eficientes y precisas en sus bases de datos MongoDB. Al comprender las mejores prácticas y las capacidades avanzadas de actualización que ofrece MongoDB, los desarrolladores pueden optimizar el rendimiento y la seguridad de sus aplicaciones.

## Recursos

- Mira este video desde 00:55:29 hasta 01:11:57 minutos (ya está marcado).

  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/lWMemPN9t6Q?start=3329&end=4317" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

- Mira estos videos de inicio a fin:
  {{< youtube 3lOKiIyc3Hk >}}

  <br>

  {{< youtube OQT9FXnvE28 >}}

  <br>

  {{< youtube nC35FS8Rw1g >}}

- Lee la siguiente documentación oficial: [Actualizar documentos](https://www.mongodb.com/docs/manual/tutorial/update-documents/)
