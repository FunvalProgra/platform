---
title: 'npm: jsonwebtoken'
date: 2024-04-02T13:02:59-05:00
draft: false
showPagination: false
---

En el desarrollo de aplicaciones web modernas, la seguridad es un aspecto crítico a tener en cuenta. La autenticación y la autorización son componentes esenciales para proteger los recursos de una aplicación. En este tutorial, exploraremos cómo implementar la autenticación basada en JSON Web Tokens (JWT) en una aplicación Node.js utilizando Express, una de las bibliotecas web más populares, y aprovecharemos las características de los ES Modules para una modularidad y claridad de código superior.

## Paso 1: Configuración de Express y Middleware

1. Abre el archivo `index.js` en tu editor de código y agrega el siguiente código para configurar Express y definir un punto final de prueba:

```javascript
// index.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express con JWT!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
```

## Paso 2: Integración de JSON Web Tokens

Ahora vamos a agregar la funcionalidad de autenticación basada en JWT a nuestra aplicación.

1. Instala la dependencia `jsonwebtoken`:

```bash
npm install jsonwebtoken
```

2. Crea un nuevo archivo `auth.js` para manejar la generación y verificación de JWT:

```bash
touch auth.js
```

3. Agrega el siguiente código al archivo `auth.js`:

```javascript
// auth.js
import jwt from 'jsonwebtoken';

const secretKey = 'tu_clave_secreta';

export const generateToken = payload => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const verifyToken = token => {
  return jwt.verify(token, secretKey);
};
```

## Paso 3: Implementación de la Autenticación en Express

Vamos a integrar el middleware de autenticación en nuestra aplicación Express.

1. Abre el archivo `index.js` y modifícalo para integrar el middleware de autenticación:

```javascript
// index.js
import express from 'express';
import { generateToken, verifyToken } from './auth.js';

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  // Aquí verificarías las credenciales del usuario, por simplicidad, omitiremos este paso
  const { username, password } = req.body;

  // Supongamos que la autenticación es exitosa
  const token = generateToken({ username });

  res.json({ token });
});

app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    const decoded = verifyToken(token.split(' ')[1]);
    res.json({ message: `Bienvenido, ${decoded.username}!` });
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
```

## Paso 4: Probando la Aplicación

1. Inicia tu servidor ejecutando el siguiente comando en tu terminal:

```bash
node index.js
```

2. Abre tu navegador web o utiliza una herramienta como Postman para enviar solicitudes a tu servidor. Puedes probar los siguientes endpoints:

- `GET /`: Deberías ver un mensaje de bienvenida.
- `POST /login`: Deberías recibir un token JWT después de enviar las credenciales (por simplicidad, estas no se verifican realmente en este ejemplo).
- `GET /protected`: Deberías recibir un mensaje de bienvenida si proporcionas el token JWT en la cabecera de autorización.

## Conclusión

En este tutorial, hemos explorado cómo implementar la autenticación basada en JSON Web Tokens (JWT) en una aplicación Node.js utilizando Express y ES Modules. Hemos creado un servidor Express simple, integrado con middleware para manejar la autenticación con JWT, y hemos probado nuestra aplicación para asegurarnos de que funcione correctamente. Este es solo el comienzo, y hay muchas más características de seguridad y escalabilidad que se pueden agregar a esta base.

## Recursos

{{< youtube cL3bXzUBFUA >}}
