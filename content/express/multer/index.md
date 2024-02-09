---
title: "Multer"
date: 2024-02-09T13:14:08-05:00
draft: false
showPagination: false
---

La gestión de archivos es esencial en muchas aplicaciones web modernas, y Express.js, junto con Multer, ofrece una solución poderosa para esta tarea. En este artículo, exploraremos cómo utilizar Multer con Express.js para manejar la carga de archivos de manera eficiente. Nos enfocaremos en la configuración básica y proporcionaremos ejemplos prácticos para comprender su implementación.

## Configuración Básica de Multer:

Antes de comenzar, asegúrate de haber instalado Multer en tu proyecto utilizando npm:

```bash
npm install multer
```

Luego, en tu archivo de aplicación, importa los módulos necesarios y configura Multer:

```javascript
// Importación de módulos
import express from "express";
import multer from "multer";

// Creación de instancia de Express
const app = express();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directorio donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Nombre original del archivo
  },
});

const upload = multer({ storage: storage });

// Ruta para manejar la carga de archivos
app.post("/upload", upload.single("archivo"), (req, res) => {
  res.send("Archivo subido exitosamente");
});

// Inicio del servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
```

En este ejemplo, configuramos Multer para guardar los archivos en el directorio 'uploads/' con su nombre original. La función `upload.single()` se utiliza para manejar la carga de un solo archivo en la ruta '/upload'.

## Integración con Rutas de Express:

Multer se puede integrar fácilmente con las rutas de Express para manejar la carga de archivos en puntos específicos de la aplicación. Aquí hay un ejemplo más detallado:

```javascript
// Importación de módulos
import express from "express";
import multer from "multer";

// Creación de instancia de Express
const app = express();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profiles/"); // Directorio para imágenes de perfil
  },
  filename: (req, file, cb) => {
    cb(null, req.body.username + "-" + Date.now() + ".jpg"); // Nombre personalizado del archivo
  },
});

const upload = multer({ storage: storage });

// Ruta para cargar una imagen de perfil
app.post("/uploadProfile", upload.single("profileImage"), (req, res) => {
  res.send("Imagen de perfil subida exitosamente");
});

// Inicio del servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
```

En este ejemplo, al cargar una imagen de perfil a través de la ruta '/uploadProfile', Multer guarda la imagen en el directorio 'uploads/profiles/' con un nombre único generado a partir del nombre de usuario y la marca de tiempo.

## Conclusión:

Multer simplifica la gestión de archivos en Express.js, permitiendo una manipulación eficiente de la carga de archivos en aplicaciones web. Con la configuración adecuada y su integración con las rutas de Express, Multer se convierte en una herramienta esencial para cualquier proyecto que requiera trabajar con archivos de manera efectiva. Esperamos que este artículo te ayude a comprender cómo implementar Multer en tus aplicaciones Express.js.

## Video

Sigue este tutorial.

{{< youtube wsn6PyQLtfY >}}
