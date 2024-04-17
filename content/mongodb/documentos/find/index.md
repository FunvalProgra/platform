---
title: 'Find en MongoDB'
date: 2024-04-12T15:11:23-05:00
draft: false
showPagination: false
---

MongoDB, un sistema de base de datos NoSQL, ofrece diversas formas de recuperar registros de manera eficiente. En este artículo, exploraremos los diferentes operadores de consulta que MongoDB proporciona, acompañados de ejemplos para comprender mejor su uso en la práctica.

## Operadores de Consulta y Ejemplos

### $eq: Para igualdad

Este operador se utiliza para buscar documentos donde el valor de un campo sea igual a un valor específico.

Ejemplo:

```javascript
// Buscar todos los documentos donde el campo "edad" sea igual a 30
db.collection.find({ edad: { $eq: 30 } });
```

### $ne: Para no igualdad

Se utiliza para buscar documentos donde el valor de un campo no sea igual a un valor específico.

Ejemplo:

```javascript
// Buscar todos los documentos donde el campo "genero" no sea igual a "masculino"
db.collection.find({ genero: { $ne: 'masculino' } });
```

### $gt, $gte: Para mayor que y mayor o igual que

Estos operadores se utilizan para buscar documentos donde el valor de un campo sea mayor que un valor específico (`$gt`) o mayor o igual que un valor específico (`$gte`).

Ejemplos:

```javascript
// Buscar todos los documentos donde el campo "puntuacion" sea mayor que 80
db.collection.find({ puntuacion: { $gt: 80 } });

// Buscar todos los documentos donde el campo "edad" sea mayor o igual que 25
db.collection.find({ edad: { $gte: 25 } });
```

### $lt, $lte: Para menor que y menor o igual que

Estos operadores se utilizan para buscar documentos donde el valor de un campo sea menor que un valor específico (`$lt`) o menor o igual que un valor específico (`$lte`).

Ejemplos:

```javascript
// Buscar todos los documentos donde el campo "precio" sea menor que 50
db.collection.find({ precio: { $lt: 50 } });

// Buscar todos los documentos donde el campo "cantidad" sea menor o igual que 10
db.collection.find({ cantidad: { $lte: 10 } });
```

### $in: Para buscar valores dentro de un conjunto

Se utiliza para buscar documentos donde el valor de un campo esté contenido dentro de un conjunto de valores.

Ejemplo:

```javascript
// Buscar todos los documentos donde el campo "categoria" sea uno de los valores: "electrónica", "ropa", "hogar"
db.collection.find({ categoria: { $in: ['electrónica', 'ropa', 'hogar'] } });
```

### $regex: Para realizar búsquedas basadas en expresiones regulares

Este operador se utiliza para buscar documentos donde un campo coincida con una expresión regular.

Ejemplo:

```javascript
// Buscar todos los documentos donde el campo "nombre" empiece con "J"
db.collection.find({ nombre: { $regex: /^J/ } });
```

## Conclusión

Los operadores de consulta en MongoDB proporcionan una amplia gama de herramientas para recuperar registros de manera eficiente y precisa. Al comprender y utilizar estos operadores en combinación con el lenguaje de consulta estructurado de MongoDB, los desarrolladores pueden realizar consultas avanzadas y satisfacer las necesidades específicas de sus aplicaciones.

## Recursos

- Lee la documentación oficial de MongoDB: [Click aquí](https://www.mongodb.com/docs/manual/tutorial/query-documents/)

  {{< alert >}}
  **Nota:** La documentación se encuentra en inglés, por lo que tendrás que traducirlo al español con tu navegador y colocar el "Select your language" para ver el código como MongoDB Shell en lugar de Compass (esquina superior derecha).
  {{< /alert >}}

- Mira este video desde 00:39:30 hasta 01:00:56 minutos (ya está marcado).

  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/lWMemPN9t6Q?start=2370&end=3656" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

- Mira estos videos de principio a fin.
  {{< youtube FblL-TT_n4o >}}

  <br>

  {{< youtube G_iHBcUXc6c >}}
  <br>

  {{< youtube FuNtVEc0f9c >}}
