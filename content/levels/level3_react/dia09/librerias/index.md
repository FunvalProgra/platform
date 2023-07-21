---
title: "CSS en Next.js y Recursos Estaticos"
date: 2023-03-12T11:50:42-06:00
draft: false
showPagination: false
---
# CSS en Next.js
Existen muchas formas de darle estilo a tu aplicación en Next.js, puedes importar archivos de hojas de estilo directamente gracias a la compatibilidad con los Módulos de CSS. Para ello el archivo debe nombrarse de la siguiente manera: [nombre].module.css.
Los Módulos de CSS mantienen un ámbito local creando clases únicas automáticamente, por lo que te permite usar los mismos nombres de clases en diferentes archivos sin que tengas que preocuparte por colisiones.
Por ejemplo, para crear un componente botón reusable, primero creamos componentes/Boton.module.css con el siguiente contenido:
```js
.peligro {
  color: white;
  background-color: red;
}
```
## componentes/Boton.module.css
Y un archivo componentes/Boton.js donde importar y usar el módulo CSS antes creado.
```js
import estilos from "./Boton.module.css";

export default function Boton() {
  return (
    <button type="button" className={estilos.peligro}>
      Borrar
    </button>
  );
}
```
## componentes/Boton.js

Nota: La clase peligro es una propiedad del objeto estilos importado.
Así de fácil es usar los Módulos de CSS en Next.js, recuerda que también tenemos más opciones de estilo a nuestra disposición, tales como Sass, Less o CSS en JavaScript.
Recursos estáticos
La carpeta public es utilizada en Next.js para servir todos nuestros recursos estáticos (imágenes, iconos, robots, entre otros). Puedes importar archivos dentro de la carpeta public  usando (/) como URL base.
Por ejemplo, para acceder a una imagen guardada en public/hero.jpg escribimos un código como el siguiente:
```js
export default function Home() {
  return (
    <div>
      <img src="/hero.jpg" />
    </div>
  );
}
pages/index.js 
```
Nota: No cambies el nombre de la carpeta public por ningún otro, es la única que puede servir recursos estáticos.

# video CCS CON NEXT

{{< youtube D_jjPCGofZ0 >}}

# Creando sitios estáticos con Next.js

Next.js nos permite crear aplicaciones de React fácilmente con server render y sin configuración. En su versión 3 (actualmente beta) incluyen una nueva característica y es poder crear sitios estáticos.

¿Qué es un sitio estático? Básicamente poder generar archivos .html en disco y que podamos luego llevar a producción fácilmente con Github Pages, Surge, Now, AWS S3, etc. Una ventaja de los sitios estáticos es que al ser un simple archivo en disco entrar a una página es super rápido, a comparación de un sitio dinámico que requiere hacer peticiones a un API o a una BD y luego generar el HTML dinámicamente con los datos obtenidos y a diferencia de una típica SPA no enviamos un HTML vacío, si no que el HTML que tenemos en disco ya tiene el contenido que necesitamos.
Iniciando el proyecto

Como siempre, vamos a iniciar nuestro proyecto y obtener un package.json ya sea que usen npm o yarn.
```js
npm init --yes
# o con yarn
yarn init --yes
```
## Instalando dependencias

Luego vamos a instalar las dependencias de nuestro proyecto, para eso vamos a correr uno de estos scripts.
```js
npm i next@beta react react-dom
# o con yarn
yarn add next@beta react react-dom
```

Estamos usando una versión beta por lo que algunas cosas se pueden romper: si eso ocurre traten con otra versión beta inferior para ver si se arregla. Recuerden, usen las beta en producción bajo su propio riesgo.

### Instalar dependencias

Una vez hecho esto vamos a crear la página de Next.js que vamos a exportar en nuestra aplicación. Para eso vamos a crear un archivo pages/index.js con este código.

```js 
import { Component } from 'react'
import Head from 'next/head'

export default class extends Component {
	static async getInitialProps({ query }) {
		// vamos a cambiar el título dinámicamente dependiendo de un dato en la query
		return { title: query.title || 'home page' }
	}
	render() {
		return (
			<main>
				<Head>
					<title>{this.props.title}</title>
				</Head>
				<header>
					<h1>{this.props.title}</h1>
				</header>
				<p>
					Esta es nuestra página, el contenido es siempre el mismo, pero el título cambia.
				</p>
			</main>
		)
	}
}
```

Esa es nuestra página. Como vemos vamos a obtener el title desde el querystring de la URL y vamos a modificar el título de la página tanto en la etiqueta <title /> como en la etiqueta <h1 /> con el valor de este. Por defecto mostramos el título home page si no está definido.

# Iniciar servidor en desarrollo

Vamos ahora a probar que esto funcione en desarrollo, para eso simplemente vamos a definir estos scripts en el package.json.
```js 
{
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	}
}
```
Luego vamos a inicar nuestra aplicación con el siguiente script:
```js
npm run dev
# o con yarn
yarn dev
```
Eso nos va a correr un servidor HTTP en el puerto 3000, si entramos entonces a localhost:3000 nos debe mostrar la pagina.

# video de Sitios Estaticos