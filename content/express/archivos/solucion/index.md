---
title: "Solución: Carga de archivos"
date: 2024-02-09T13:42:25-05:00
draft: false
showPagination: false
---

[Regresar a ver los ejercicios](../ejercicios/)

Aquí tienes una implementación básica para cada uno de los ejercicios propuestos. Ten en cuenta que estas soluciones son simples y pueden mejorarse o modificarse según los requisitos específicos.

Además, es recomendable que tú, como estudiante, intentes resolver los ejercicios por ti mismo antes de revisar esta solución debido a que así lograrás una comprensión más profunda de los conceptos.

### Ejercicio 1: API para cargar imágenes de perfil de usuario

```javascript
// app.js

import express from "express";
import multer from "multer";
import path from "path";

const app = express();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profiles/"); // Directorio para imágenes de perfil
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nombre original del archivo
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Solo se permiten imágenes JPEG, JPG o PNG"));
    }
  },
  limits: {
    fileSize: 1024 * 1024, // 1 MB (tamaño máximo del archivo)
  },
});

// Ruta para cargar una imagen de perfil
app.post("/uploadProfile", upload.single("profileImage"), (req, res) => {
  res.send("Imagen de perfil subida exitosamente");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
```

### Ejercicio 2: API para cargar archivos de documentos

```javascript
// app.js

import express from "express";
import multer from "multer";
import path from "path";

const app = express();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/documents/"); // Directorio para documentos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nombre original del archivo
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Solo se permiten documentos PDF, DOC o DOCX"));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB (tamaño máximo del archivo)
  },
});

// Ruta para cargar un documento
app.post("/uploadDocument", upload.single("documentFile"), (req, res) => {
  res.send("Documento subido exitosamente");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
```

Recuerda ajustar los directorios de almacenamiento y los tipos de archivos permitidos según tus necesidades específicas. Además, asegúrate de manejar adecuadamente los errores y agregar lógica adicional según los requisitos de tu aplicación.
