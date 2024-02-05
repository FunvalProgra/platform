---
title: "Módulo FS"
date: 2024-02-05T17:41:44-05:00
draft: false
showPagination: false
---

Este artículo se sumerge en el módulo `fs` de Node.js, un componente esencial que facilita la interacción con el sistema de archivos. Desde los conceptos básicos hasta ejemplos de código práctico utilizando la sintaxis de importación y exportación de ESModules, exploraremos las funciones clave de este módulo. Esto permitirá a los desarrolladores comprender cómo trabajar eficientemente con archivos y directorios en sus aplicaciones Node.js.

## Introducción:

El módulo `fs` en Node.js es una herramienta crucial para interactuar con el sistema de archivos subyacente. Con la adopción de ESModules, la sintaxis de importación y exportación se integra perfectamente, brindando una experiencia más moderna. Este artículo proporcionará una guía completa, desde los fundamentos hasta la aplicación práctica, permitiendo a los desarrolladores aprovechar al máximo las funciones del módulo `fs` en sus proyectos.

## I. Fundamentos del Módulo fs con ESModules:

### 1. Lectura y Escritura de Archivos:

```javascript
import fs from "fs";

// Lectura de un archivo
fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Contenido del Archivo:", data);
});

// Escritura en un archivo
const contenido = "Hola, este es un nuevo contenido.";
fs.writeFile("nuevoArchivo.txt", contenido, "utf8", (err) => {
  if (err) throw err;
  console.log("Archivo creado y contenido escrito con éxito.");
});
```

### 2. Operaciones con Directorios:

```javascript
// Creación de un nuevo directorio
fs.mkdir("nuevoDirectorio", (err) => {
  if (err) throw err;
  console.log("Directorio creado exitosamente.");
});

// Listado de archivos en un directorio
fs.readdir("nuevoDirectorio", (err, files) => {
  if (err) throw err;
  console.log("Archivos en el Directorio:", files);
});
```

### 3. Eliminación de Archivos y Directorios:

```javascript
// Eliminación de un archivo
fs.unlink("archivoAEliminar.txt", (err) => {
  if (err) throw err;
  console.log("Archivo eliminado exitosamente.");
});

// Eliminación de un directorio
fs.rmdir("directorioAEliminar", { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Directorio eliminado exitosamente.");
});
```

## II. Funciones Avanzadas del Módulo fs con ESModules:

### 1. Copia de Archivos:

```javascript
// Copia de un archivo
fs.copyFile("archivoOriginal.txt", "copiaArchivo.txt", (err) => {
  if (err) throw err;
  console.log("Archivo copiado exitosamente.");
});
```

### 2. Obtención de Estadísticas de Archivos:

```javascript
// Obtención de estadísticas de un archivo
fs.stat("archivo.txt", (err, stats) => {
  if (err) throw err;
  console.log("Tamaño del Archivo:", stats.size, "bytes");
  console.log("Fecha de Creación:", stats.birthtime);
});
```

## III. Aplicaciones Prácticas del Módulo fs con ESModules:

### 1. Lectura y Escritura Asíncrona:

```javascript
// Lectura y escritura asíncrona de archivos
const contenidoArchivo = fs.readFileSync("archivo.txt", "utf8");
fs.writeFileSync("nuevoArchivoAsync.txt", contenidoArchivo, "utf8");
console.log("Operaciones asíncronas completadas.");
```

### 2. Creación de Estructuras de Directorios:

```javascript
// Creación de una estructura de directorios
const estructuraDirectorios = ["docs", "img", "css", "js"];
estructuraDirectorios.forEach((dir) => {
  fs.mkdir(dir, (err) => {
    if (err) throw err;
    console.log(`Directorio '${dir}' creado exitosamente.`);
  });
});
```

## Conclusiones:

Este artículo ha explorado el módulo `fs` de Node.js utilizando la sintaxis de importación y exportación de ESModules. Al aprovechar las funciones del módulo `fs` con esta nueva sintaxis, los desarrolladores pueden realizar operaciones avanzadas con archivos y directorios de manera más concisa y moderna. Con una comprensión sólida y ejemplos

## Video

Mira este video desde 01:30:12 hasta 01:37:21 minutos

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/i3OdKwuBjeM?start=5412&end=5841" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
