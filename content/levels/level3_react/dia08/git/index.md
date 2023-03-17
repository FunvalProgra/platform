---
title: "Data y Eventos"
date: 2023-03-12T11:50:06-06:00
draft: false
showPagination: false
---
# Data y Eventos entre Componentes
Si estás intentando implementar operaciones CRUD usando endpoints API, capaz vas a enfrentarte con cierta dificultad para manejar data a través de distintos componentes.

O capaz tienes un modal, pero quieres llamarlo o usarlo de otro componente.

Saber como abordar estos escenarios puede ser difícil.

En este tutorial, te mostraré cómo puedes hacerlo.

# Cómo pasar datos entre un componente padre y un componente hijo

En primer lugar, vamos a pasar datos entre un componente padre y un componente hijo.

Primero, tendrás que crear dos componentes, uno padre y otro hijo.

import React from 'react'

export default function Padre() {
  return (
    <div>
      
    </div>
  )
}

Parent.js

import React from 'react'

export default function Hijo() {
    return (
        <div>
            
        </div>
    )
}

Child.js

A continuación, importarás el componente hijo en el componente padre y lo devolverás.

import React from 'react'
import Hijo from './Hijo';

export default function Padre() {
  return (
    <div>
      <Hijo/>
    </div>
  )
}

Call the Child Component in the Parent Component

Luego crearás una función y un botón para activar esa función. Además, crearás un estado utilizando el gancho (hook) useState para gestionar los datos.

import React from 'react'
import Hijo from './Hijo';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';

export default function Padre() {
  const [datos, estableceDatos] = useState('');
  
  const padreAHijo = () => {
    estableceDatos("Esta es la data del componente Padre al componente Hijo.");
  }
  return (
    <div className="App">
      <Hijo/>
      
      <div>
        <Button primary onClick={() => padreAHijo()}>Clic Padre</Button>
      </div>
    </div>
  )
}

Como puedes ver aquí, estamos llamando a la función padreAHijo al hacer clic en el botón clic Padre. Cuando se hace clic en el botón Padre, se guarda la información, "Estos son los datos del componente Padre al componente Hijo" en la variable datos.

Ahora, vamos a pasar ese estado de datos a nuestros componentes hijos. Puedes hacer esto usando props (propiedades).

Pasa los datos como props cuando llames al componente hijo de la siguiente manera:

<Hijo padreAHijo={datos}/>

Parent.js

Aquí, estamos pasando los datos en el componente hijo como datos.

datos es los datos que debemos pasar, y  padreAHijo es el nombre del prop.

A continuación, es el momento de capturar los datos en el componente hijo. Y es muy sencillo.

Aquí puede haber dos casos.

Caso 1: Si estás usando un componente funcional, simplemente captura el padreAHijo en los parámetros.

import React from 'react'

export default function Hijo({padreAHijo}) {
    return (
        <div>
            {padreAHijo}
        </div>
    )
}

React Functional Component

Case 2: Si tienes un componente clase, entonces puedes usar this.props.padreAHijo.

import React, { Component } from 'react'

export default class Hijo extends Component {
    render() {
        return (
            <div>
                {this.props.padreAHijo}
            </div>
        )
    }
}

React Class Component

De cualquier manera, vas a obtener los mismos resultados:

Cuando hagamos clic en el botón Clic Padre, veremos los datos como resultados en la pantalla.

import React from 'react'
import Hijo from './Hijo';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';

export default function Padre() {
  const [datos, estableceDatos] = useState('');
  
  const padreAHijo = () => {
    estableceDatos("Esta es la data del componente Padre al componente Hijo.");
  }
  return (
    <div className="App">
      <Child padreAHijo={datos}/>
      
      <div className="Hijo">
        <Button primary onClick={() => padreAHijo()}>Clic Padre</Button>
      </div>
    </div>
  )
}

Arriba puedes ver el código completo para el Componente Padre.
Como pasar data entre un Componente Hijo y un Componente Padre

Esto es algo más complicado.

En primer lugar, hay que crear una función en el componente padre llamada  hijoAPadre y un estado vacío llamado datos.

const [datos, estableceDatos] = useState('');

const hijoAPadre = () => {
   
}

Componente Padre

Entonces, pasa la función  hijoAPadre como una propiedad al componente hijo.

<Hijo hijoAPadre={hijoAPadre}/>

Pasando el hijoAPadre al componente Hijo.

Ahora, en nuestro componente hijo, acepta esta llamada a la función como props y la asigna a un evento onClick.

Además, declare un estado que contenga algunos datos en forma de cadena o número.

Pasa los datos dentro de la función padreAHijo como parámetros.

import React from 'react'
import { Button } from 'semantic-ui-react';

export default function Hijo({hijoAPadre}) {
    const datos = "Esta es los datos del componente Padre al componente Hijo."
    return (
        <div>
            <Button primary onClick={() => hijoAPadre(datos)}>Clic Hijo</Button>
        </div>
    )
}

Child Component

A continuación, en el componente padre, acepta estos datos en la función hijoAPadre como parámetro. A continuación, establezca los datos utilizando el gancho useState.

import './App.css';
import { useState } from 'react';
import Hijo from './Hijo';

function Padre() {
  const [datos, estableceDatos] = useState('');
  
  const hijoAPadre = (datoshijo) => {
    estableceDatos(datoshijo);
  }

  return (
    <div className="App">
      <div>
        <Hijo/>
      </div>
    </div>
  );
}

export default Padre;

Parent Component

A continuación, muestra esa variable de datos en la función de retorno.

import './App.css';
import { useState } from 'react';
import Hijo from './Hijo';

function Padre() {
  const [datos, estableceDatos] = useState('');
  
  const hijoAPadre = (datoshijo) => {
    estableceDatos(datoshijo);
  }

  return (
    <div className="App">
     {datos}
      <div>
        <Child hijoAPadre={hijoAPadre}/>
      </div>
    </div>
  );
}

export default Padre;

Parent Component

Los datos del hijo sobreescribirán los datos del padre cuando se haga clic en el botón Clic Hijo (Click Child).
Screenshot-2021-06-06-134803

Ahora, puedes pasar datos de hijo a padre y de padre a hijo como un profesional.
También puedes pasar eventos como onClick u OnChange

Solo llama un método de alerta en la función  hijoAPadre y pasa esa función como propiedad al componente hijo.

import './App.css';
import hijo from './Hijo';

function Padre() {
  const hijoAPadre = () => {
    alert("Esto es una alerta del componente Hijo")
  }

  return (
    <div className="App">
      <div className="hijo">
        <Hijo hijoAPadre={hijoAPadre}/>
      </div>
    </div>
  );
}

export default Padre;

Componente Padre

Y en el componente hijo, acepta la función hijoAPadre como una propiedad. Entonces asígnale un evento onClick al botón.

import React from 'react'
import { Button } from 'semantic-ui-react';

export default function Hijo({hijoAPadre}) {
    return (
        <div>
            <Button primary onClick={() => hijoAPadre()}>Clic Hijo</Button>
        </div>
    )
}

Componente Hijo

Tu función en el componente padre será llamada cuando hagas clic en el botón del componente hijo y verás esta alerta