---
title: "Solución: Módulo fs"
date: 2024-02-07T12:05:36-05:00
draft: false
showPagination: false
---

[Regresar a ver los ejercicios](../ejercicios/)

### 1. Leer un archivo de texto y mostrar su contenido (`readFile.js`):

Solución en `readFile.js`:

```javascript
// readFile.js
import fs from "fs";

const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  console.log("Contenido del archivo:");
  console.log(data);
});
```

Comando en consola:

```
node readFile.js nombre_archivo.txt
```

### 2. Copiar un archivo (`copyFile.js`):

Solución en `copyFile.js`:

```javascript
// copyFile.js
import fs from "fs";

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

fs.copyFile(sourceFile, destinationFile, (err) => {
  if (err) {
    console.error("Error al copiar el archivo:", err);
    return;
  }
  console.log("¡Archivo copiado exitosamente!");
});
```

Comando en consola:

```
node copyFile.js archivo_origen.txt archivo_destino.txt
```

### 3. Crear un directorio y archivos dentro (`createDirectory.js`):

Solución en `createDirectory.js`:

```javascript
// createDirectory.js
import fs from "fs";

fs.mkdir("myDirectory", (err) => {
  if (err) {
    console.error("Error al crear el directorio:", err);
    return;
  }
  console.log("Directorio creado exitosamente.");

  const filesToCreate = ["file1.txt", "file2.txt", "file3.txt"];
  filesToCreate.forEach((file) => {
    fs.writeFile(`myDirectory/${file}`, "Contenido del archivo", (err) => {
      if (err) {
        console.error(`Error al crear el archivo ${file}:`, err);
        return;
      }
      console.log(`Archivo ${file} creado exitosamente.`);
    });
  });
});
```

Comando en consola:

```
node createDirectory.js
```

### 4. Eliminar archivos y directorios (`deleteFiles.js`):

Solución en `deleteFiles.js`:

```javascript
// deleteFiles.js
import fs from "fs";

fs.unlink("toBeDeleted.txt", (err) => {
  if (err) {
    console.error("Error al eliminar el archivo:", err);
    return;
  }
  console.log("Archivo eliminado exitosamente.");

  fs.rmdir("toBeDeleted", (err) => {
    if (err) {
      console.error("Error al eliminar el directorio:", err);
      return;
    }
    console.log("Directorio eliminado exitosamente.");
  });
});
```

Comando en consola:

```
node deleteFiles.js
```

### 5. Leer directorio y mostrar contenido (`readDirectory.js`):

Solución en `readDirectory.js`:

```javascript
// readDirectory.js
import fs from "fs";

fs.readdir("myDirectory", (err, files) => {
  if (err) {
    console.error("Error al leer el directorio:", err);
    return;
  }
  console.log("Contenido del directorio:");
  files.forEach((file) => {
    console.log(file);
  });
});
```

Comando en consola:

```
node readDirectory.js
```

### 6. Escribir en un archivo (`writeFile.js`):

Solución en `writeFile.js`:

```javascript
// writeFile.js
import fs from "fs";

const content = process.argv[2];

fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error("Error al escribir en el archivo:", err);
    return;
  }
  console.log("¡Contenido escrito en el archivo exitosamente!");
});
```

Comando en consola:

```
node writeFile.js "Este es el contenido que se escribirá en el archivo."
```

Estos comandos de consola corresponden a la ejecución de cada uno de los scripts en Node.js y te permitirán probar cada uno de los ejercicios.
