---
title: "Webpack"
date: 2023-03-12T11:51:34-06:00
draft: false
showPagination: false
---
# Configurar react con WebPack y Babel

En este tutorial configuraré una aplicación react desde cero utilizando WebPack 4 y Babel 7.

Actualmente existen infinidad de proyectos que ofrecen un punto de partida para la configuración de una aplicación react. Realizar esta configuración desde cero es una tarea que puede llegar a ser complicada si no tiene los pasos claros. Por esta razón muchos desarrolladores utilizan generadores de proyectos como Create react app creado y mantenido por los desarrolladores de facebook.

Antes de iniciar con el tutorial, asegúrate de tener instalado la última versión de NPM y NODEJS si no la tienes, instala nodejs que ya trae integrado npm. Actualmente tengo instalado node 11.1.0 y npm 6.9.0
Iniciar un proyecto con npm

Lo primero es crear el directorio de la aplicación: mkdir react-webpack-babel y acceder al mismo cd react-webpack-babel

Ahora configuramos el proyecto para utilizar npm ejecutando el comando npm init o bien npm init -y si quieres generar el archivo con la información mínima necesaria.

Yo he utilizado npm init -ylo que me ha generado el archivo package.jsoncon la siguiente información.

{
  "name": "react-webpack-babel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Geordano Polanco (gpolanco.com)",
  "license": "MIT"
}

Ya tenemos nuestro directorio con npm configurado.
Estructura de directorios de la aplicación

Utilizaremos la configuración de directorios típica de una aplicación react.

react-webpack-babel
├── package.json
└── src
   ├── index.html
   └── index.js

Creamos el directorio src y ambos archivos index.js e index.html, ya sea desde la consola o desde el editor.

En el archivo index.html utilizaremos un template básico para vincular el archivo index.js y agregar la etiqueta principal <div id="root"></div> que utilizaremos más adelante para mostrar nuestra aplicación react.

Pega el siguiente código en el archivo index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Config react app</title>
</head>
<body>
  <div id="root"></div>
  <script src="main.bundle.js"></script>
</body>
</html>

Ya tenemos los archivos mínimos para iniciar la configuración de una aplicación react, ahora empezamos a agregar las dependencias necesarias.
Instalación dependencias

Procedemos a instalar las dependencias necesarias para tener trabajando webpack en nuestra aplicación, las instalaremos como dependencias de desarrollo.

npm install --save-dev webpack webpack-cli webpack-dev-server

# O su forma abreviada

npm i -D webpack webpack-cli webpack-dev-server

¿Qué hemos instalado?

    webpack Paquete principal que utilizaremos más adelante para el transpilado del código scss, jsx de la aplicación.
    webpack-dev-server - npm Este nos da la opción de ejecutar un servidor local en nuestro directorio. Además nos da la ventaja de ver los cambios realizados en tiempo real en el navegador.
    webpack-cli - npm Esta herramienta nos permite utilizar webpack en la linea de comando

Si comprobamos nuestro archivo package.jsonpodemos notar que tenemos una nueva sección devDependencies donde tenemos los paquetes instalados anteriormente.

  "devDependencies": {
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1"
  }

Como puedes notar las dependencias instaladas están en su última versión, en la configuración de webpack es importante la compatibilidad entre versiones, con lo cual voy a fijar las versiones a las últimas actuales quitando el símbolo ^ de está forma estás dependencias siempre estarán en la versión indicada.

Esto lo hago por si alguien se descarga el código pasado unos meses, siga funcionando aunque estén disponibles nuevas versiones de estás dependencias. Recomiendo siempre utilizar las últimas version estables a la hora de configurar un proyecto inicial.

  "devDependencies": {
    "webpack": "4.20.2",
    "webpack-cli": "3.1.2",
    "webpack-dev-server": "3.1.9"
  }

Tenemos el directorio node_modules donde se guardan todas las dependencias del proyecto y el archivo package-lock.json utilizado por npm.

Actualmente esta es la estructura de directorios de la aplicación, después de instalar las dependencias de webpack

react-webpack-babel
├── node_modules
├── package-lock.json
├── package.json
└── src
   ├── index.html
   └── index.js

1 - Configuración de webpack

Desde webpack v4no es necesario crear un archivo de configuración para su funcionamiento, pero, si quieres crear una configuración personalizada sólo de lo que necesitas, entonces, si es necesario.

Actualmente tenemos instalado webpack y quiero ejecutar tanto webpack como webpack-dev-server para que notes su funcionamiento sin un archivo de configuración personalizado.

Para hacer esta prueba vamos agregar los siguientes comando en la sección scripts de nuestro archivo package.json

  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack --mode production"
  },

    Ejecutamos npm run build: Al ejecutar este comando webpack utiliza su configuración predeterminada, compilará el archivo src/index.js, comprimiendolo en la carpeta dist/main.js. Todas estás acciones se pueden personalizar desde el archivo de configuración webpack-config.js.

    Ejecutamos npm start: Al ejecutar npm start, queremos que se visualice el archivo index.html localizado en la carpeta src/index.htmlpero al ejecutar el comando nos muestra un listado de los archivos que existen en la carpeta principal del proyecto, no entra a la carpeta src. Este funcionamiento lo modificaremos desde el archivo de configuración de webpack.

1- Creamos el archivo webpack.config.js
Para trabajar con rutas en el archivo de configuración, utilizaremos path que es una copia exacta del módulo de rutas de NodeJS. La instalamos npm install --save-dev path

Copia este código en tu archivo de configuración.

const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname,'src','index.js'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname,'public'),
    filename: 'main.bundle.js'
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // PATH RESOLVE
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.join(__dirname,'src')
  }
};

    Entry: Punto de entrada de referencia para webpack, en nuestro caso el archivo src/index.js
    Output: Punto de salida para el código procesado por webpack, en nuestro caso public/main.bundle.js
    mode: Indica el modo en que se está ejecutando nuestra aplicación, con esto webpack sabe como compilar nuestro archivos basándose en en el modo development o production esto se puede configurar utilizando las variables de entorno de nodejs, en nuestro caso lo dejamos en modo developer si no existe una variable de entorno.
    resolve Esto nos da la facilidad de poder utilizar importaciones con rutas relativas en vez de rutas absolutas, indicando los directorios donde buscar dichas importaciones a webpack.
    devServer Indica al servidor de desarrollo, los archivos que deben ser mostrados en el navegador, en nuestro caso, los ubicador dentro del directorio /src

Ya tenemos webpack configurado. Para hacer la prueba vamos a añadir en el index.js este código console.log('I\'t work');

Si ejecutamos el comando npm start se abrirá una páginas en el puerto 3500. Abre la consola del navegador, podrás ver el mensaje que hemos escrito. Si modificas el index.js, webpack-dev-server actualizará el código y lo veremos el cambio en la consola.

    Ya tenemos webpack y webpack de server configurado, ahora necesitamos configurar todo lo necesario para empezar a utilizar reatjs.

2 - Configurar babel

En react trabajaremos utilizando la sintaxis de ECMAScript® 2018 además de jsx, pero no todos los navegadores soportan esta versión de javascript, para esto utilizaremos babeljs, para transpilar el código de react a ES5 soportado por todos los navegadores.

Instalemos las dependencias de babel. Actualmente instalamos babel 7 el cual a cambiado su nomenclatura de nombre.

Para empezar a utilizar babel-loader instalaremos las siguientes dependencias.

npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react

Modificamos el archivo webpack.config.js añadimos babel-loader

Ahora necesitamos agregar algunas opciones a babel-loader, esto se puede hacer en el webpack.config.js, pero es recomendable hacerlo en el archivo .babelrc para tener esta configuración separada y una mejor legibilidad. Creamos el archivo .babelrc y agregamos el siguiente código.

{
    "presets": [
        "@babel/preset-env"
    ]
}

Ahora ya tenemos nuestro proyecto preparado para trabajar con ES6, puedes agregar algún código de ES6 en el archivo src/index.js y ejecutar npm run build. si revisas el archivo generado en /dist notarás como babel ha transpilado el código de ES6 a su equivalente en ES5.

gracias a @babel/preset-env podemos utilizar las últimas funcionalidades de JavaScript
3 - Configurar react js

Teniendo configurado webpack y babel ahora es sencillo configurar react.
Instalar dependencias para reactjs.

npm install --save react react-dom

// o bien

npm i -S react react-dom

También necesitamos instalar @babel/preset-react

npm install --save-dev @babel/preset-react

    @babel/preset-react: Realiza varias funciones, ya que tiene integrado otros plugin de babel. Se encarga de entender el código JSX y transformarlo en código con la sintaxis de react, entre otras cosas. Incluye los siguientes plugins.
        @babel/plugin-syntax-jsx
        @babel/plugin-transform-react-jsx
        @babel/plugin-transform-react-display-name

Configurar @babel/preset-react en el archivo .babelrc

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

Modificamos el archivo webpack.config.js para agregar la extensión jsx en el babel loader. de esta forma podemos usar .js o .jsx en nuestro archivos.

// ...
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  // ...
};

    React configurado!!! Ya tenemos tod listo para empezar a escribir los componentes de nuestra aplicación.

Crear nuestro primer componente

    Crea el archivo App.jsx y pega este código

// App.jsx
import React from "react";

const App = () => {
  return (
    <div>
      <h2>App component!</h2>
    </div>
  );
};

export default App;

    Renombramos el archivo index.js a index.jsx
    Webpack por defecto no reconoce la extensión .jsx, debemos decirle desde su archivo de configuración, que extensiones puede resolver. Por defecto resuelve .js

resolve: {
    extensions: ['.js', '.json', '.jsx'],
}

Este es el aspecto de nuestro archivo webpack.config.js

const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, 'src', 'index.jsx'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },

  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    port: 3500,
    watchContentBase: true,
    open: true
  }
};

Ya tenemos la aplicación completamente configurada, ahora podemos empezar a desarrollar!!!