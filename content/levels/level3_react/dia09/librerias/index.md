---
title: "Librerias"
date: 2023-03-12T11:50:42-06:00
draft: false
showPagination: false
---
# 5 bibliotecas de React Onboarding para usar
Una de las principales ventajas de utilizar React Native o Reactjs para desarrollar tus aplicaciones web es que tienes acceso a un océano de librerías y plugins.

Y estas librerías y plugins de React Native/Reactjs no defraudan a la hora de crear un react tour.

Aquí están las mejores librerías y plugins de react tour que puedes tener en tus manos:

# - React Joyride

React Joyride te proporciona los mejores react tours que puedes encontrar en una librería de código abierto.

Con más de 4,3k estrellas en GitHub, React Joyride es un plugin ampliamente utilizado que puede ayudarte a crear tours de UI para nuevos usuarios y también puede ser utilizado para crear elementos in-app para introducir nuevas características a los usuarios existentes.

Desde su primera versión en 2016, se han abierto casi 500 incidencias en GitHub bajo React Joyride, y 481 de ellas están cerradas en este momento; así que es seguro decir que obtendrás el apoyo que necesitas.

Configuración

        npm i react-joyride

Comenzando
```js 
import Joyride from 'react-joyride';
export class App extends React.Component {
  state = {
    steps: [
      {
        target: '.my-first-step',
        content: 'This is my awesome feature!',
      },
      {
        target: '.my-other-step',
        content: 'This another awesome feature!',
      },
      ...
    ]
  };

  render () {
    const { steps } = this.state;

    return (
      <div className="app">
        <Joyride
          steps={steps}
          ...
        />
        ...
      </div>
    );
  }
}
```

# - React Shepherd

React Shepherd es un wrapper de React Native para Shepherd.js, la popular biblioteca de código abierto para recorridos simples de productos.

React Shepherd tiene más de 260 estrellas mientras que el propio Shepherd tiene casi 10K estrellas a partir de enero de 2022. Utilizan Popper.js para renderizar diálogos superpuestos que hacen que los elementos de onboarding de Shepherd sean lo más responsivos posible.

Las dos mayores ventajas de Shepherd son la atención de los mantenedores y el diseño simple y elegante que tiene.

# Intro.js React

Intro.js es la mayor librería de JavaScript para contenidos de onboarding en la web (21K estrellas y 2,6K forks), y su envoltorio en React, Intro.js React, está ahí para los interesados.

Con Intro.js, puedes crear tanto tours simples de productos como sugerencias dentro de la aplicación / tooltips de Angular fácilmente, lo cual es una gran ventaja sobre otras bibliotecas de la lista. También es bastante personalizable y ligera, por lo que puedes darle la forma que quieras.,

El único inconveniente es, probablemente, el hecho de que Intro.js no es gratuita a menos que la utilices con fines no comerciales. Tienes que comprar una licencia de por vida si vas a utilizar la biblioteca en tu sitio web comercial, aplicación o plugin.

Intro.js React tiene más de 240 estrellas en GitHub y más de 60 problemas (53 cerrados). La instalación de Intro.js en aplicaciones React puede ser algo complicada, pero seguramente funcionará siempre que la configures con cuidado.

Este es el aspecto que tendrán los tours de productos que crees con Intro.js:

# Walktour

Walktour no es la librería más respaldada para las visitas guiadas de React, pero promete mucho.

Con walktour, puedes crear visitas guiadas con pasos que pueden funcionar de otras formas que las de las pantallas de onboarding tradicionales. Además, los desarrolladores han puesto toda la información que necesitas para crear y personalizar tus tours en React en el repositorio, para que puedas instalarlo y empezar de inmediato.

Ha sido la demo de walktour la que me ha llevado a incluirla en esta lista, ya que los desarrolladores han explicado el valor de la librería de una forma sencilla pero efectiva. Aquí está la grabación de la pantalla de la demo:

# - Reactour

Reactour es otra librería popular para crear tours de aplicaciones React. Con 2,8K estrellas en GitHub y más de 40K descargas semanales, ofrece una forma sencilla de pasear a los usuarios por tus sitios web y aplicaciones.

Lo mejor de Reactour es que tiene una gran página de playground que te permite ver cómo se desenvuelven las diferentes combinaciones y variaciones y el código de todo.