---
title: "Variables de entorno en NodeJS"
date: 2024-02-07T11:09:17-05:00
draft: false
showPagination: false
---

Node.js es conocido por su flexibilidad y potencia en el desarrollo de aplicaciones backend. En este artículo, exploramos un aspecto fundamental pero a menudo pasado por alto en el desarrollo de aplicaciones Node.js: las variables de entorno. Estas variables proporcionan una forma eficiente y segura de configurar y gestionar la información sensible o específica del entorno en nuestras aplicaciones. Discutiremos qué son las variables de entorno, cómo se utilizan en Node.js, y las mejores prácticas para su gestión.

### Introducción:

Node.js es un entorno de tiempo de ejecución de JavaScript que permite a los desarrolladores crear aplicaciones de servidor altamente escalables y eficientes. En el desarrollo de aplicaciones Node.js, es común encontrarse con la necesidad de manejar configuraciones específicas del entorno, como credenciales de bases de datos, claves de API, configuraciones de seguridad, entre otros. Para abordar este requisito de manera efectiva y segura, Node.js proporciona un mecanismo integrado para el manejo de variables de entorno.

### ¿Qué son las variables de entorno en Node.js?

Las variables de entorno son variables globales que están disponibles en todo el sistema operativo y pueden ser accedidas por cualquier proceso en ejecución, incluidas nuestras aplicaciones Node.js. Estas variables contienen información específica del entorno, como configuraciones de red, rutas de acceso, tokens de autenticación, etc. En Node.js, podemos acceder a estas variables utilizando el objeto `process.env`.

### Uso de Variables de Entorno en Node.js:

En Node.js, las variables de entorno se utilizan comúnmente para configurar parámetros de aplicación, como puertos de escucha, conexiones a bases de datos, claves de API y otros ajustes específicos del entorno. Por ejemplo:

```javascript
// Utilizando ESModules
import { config } from "dotenv";

config();

const PORT = process.env.DB_PORT || 4000;
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_DATABASE = process.env.DB_DATABASE || "database";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_HOST = process.env.DB_HOST || "localhost";
```

### Cómo usar dotenv:

Para cargar las variables de entorno desde un archivo `.env`, podemos utilizar la biblioteca `dotenv`. Primero, debemos instalarla en nuestro proyecto utilizando npm o yarn:

```bash
npm install dotenv
```

Luego, en nuestro archivo de entrada principal, podemos cargar las variables de entorno utilizando `config()` como se muestra en el ejemplo anterior. Asegúrate de tener un archivo `.env` en la raíz de tu proyecto con las variables definidas. Por ejemplo:

```
PORT=4000
DB_USER=root
DB_PASSWORD=passwordtest
DB_DATABASE=dbtest
DB_HOST=localhost
DB_PORT=3306
```

### Gestión de Variables de Entorno:

Es crucial gestionar correctamente las variables de entorno en nuestras aplicaciones Node.js para garantizar su seguridad, portabilidad y mantenibilidad. Aquí hay algunas mejores prácticas a tener en cuenta:

1. **Utilizar archivos de configuración separados:** En lugar de configurar las variables de entorno directamente en el sistema operativo, es recomendable utilizar archivos de configuración específicos para cada entorno (desarrollo, pruebas, producción, etc.).

2. **No incluir información sensible en el repositorio de código:** Evite incluir valores sensibles (como contraseñas, claves API) en el código fuente o en archivos de configuración que se almacenen en repositorios de código. En su lugar, utilice variables de entorno y asegúrese de no incluirlas en el control de versiones.

3. **Establecer valores predeterminados:** Proporcione valores predeterminados para las variables de entorno cuando sea posible, para garantizar que la aplicación siga funcionando correctamente incluso si algunas variables no están definidas.

4. **Validar las variables de entorno:** Antes de utilizar una variable de entorno en la aplicación, valide su presencia y valide su formato según sea necesario. Esto ayuda a prevenir errores y aumenta la robustez de la aplicación.

### Conclusión:

En resumen, las variables de entorno desempeñan un papel fundamental en el desarrollo de aplicaciones Node.js al permitirnos configurar y gestionar la información específica del entorno de manera segura y eficiente. Al seguir las mejores prácticas de gestión de variables de entorno, podemos garantizar la seguridad, portabilidad y mantenibilidad de nuestras aplicaciones Node.js en diversos entornos. El uso de bibliotecas como `dotenv` facilita enormemente la gestión de estas variables, permitiéndonos cargarlas fácilmente desde archivos de configuración y mantener nuestras aplicaciones limpias y seguras.

## Videos

Mira este video desde 01:37:21 hasta 01:50:35 minutos (ya está marcado). Ten en cuenta que en algunas partes se mostrará código que tal vez no entiendas del todo. No te preocupes, solo enfócate en entender las variables de entorno.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/3dSkc-DIM74?start=5928&end=6528" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
