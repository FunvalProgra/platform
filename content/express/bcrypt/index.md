---
title: 'npm: bcrypt'
date: 2024-04-03T15:58:21-05:00
draft: false
showPagination: false
---

## Introducción:

La seguridad de las contraseñas es una preocupación fundamental en el desarrollo de aplicaciones web. La encriptación de contraseñas es un paso crítico para proteger la información confidencial de los usuarios. En este artículo, exploraremos la implementación de la encriptación de contraseñas utilizando el paquete npm bcrypt en una aplicación Express. Además, discutiremos cómo funciona bcrypt y por qué es importante encriptar las contraseñas.

## ¿Qué es npm bcrypt?

Bcrypt es un algoritmo de encriptación de contraseñas diseñado para ser resistente a los ataques de fuerza bruta y de diccionario. npm bcrypt es una biblioteca de Node.js que implementa este algoritmo, lo que permite a los desarrolladores generar y verificar contraseñas de forma segura en aplicaciones web.

## ¿Cómo funciona bcrypt?

Bcrypt utiliza un algoritmo de hashing para convertir las contraseñas en una cadena de caracteres encriptada. Este proceso consta de varias etapas:

1. **Generación de un hash aleatorio (salt):** Bcrypt genera un valor aleatorio único, conocido como "salt", que se combina con la contraseña antes de ser encriptada. Esto ayuda a prevenir ataques de fuerza bruta al garantizar que incluso contraseñas idénticas generen hashes diferentes.

2. **Encriptación de la contraseña:** Una vez que se genera el salt, bcrypt utiliza una función de hash (normalmente bcrypt utiliza Blowfish) para encriptar la contraseña junto con el salt. El resultado es un hash encriptado que consta de una cadena de caracteres.

3. **Almacenamiento del hash en la base de datos:** El hash encriptado se almacena en la base de datos, en lugar de la contraseña en texto plano. Esto garantiza que incluso si la base de datos es comprometida, las contraseñas de los usuarios permanezcan seguras.

4. **Verificación de la contraseña:** Cuando un usuario intenta iniciar sesión, bcrypt realiza el proceso de encriptación nuevamente utilizando el salt almacenado en la base de datos y la contraseña proporcionada por el usuario. Luego, compara el hash resultante con el hash almacenado en la base de datos. Si coinciden, la contraseña es válida.

## Importancia de encriptar contraseñas:

La encriptación de contraseñas es crucial por varias razones:

1. **Protección contra ataques de fuerza bruta:** Sin encriptación, las contraseñas almacenadas en la base de datos son vulnerables a ataques de fuerza bruta, donde un atacante intenta adivinar contraseñas probando diferentes combinaciones. La encriptación con bcrypt hace que este proceso sea extremadamente difícil y costoso en términos computacionales.

2. **Privacidad del usuario:** Las contraseñas a menudo son compartidas entre múltiples servicios en línea. Almacenar contraseñas en texto plano aumenta el riesgo de que un atacante pueda acceder a otras cuentas del usuario si obtiene acceso a una sola contraseña. La encriptación de contraseñas protege la privacidad del usuario al garantizar que incluso los administradores del sistema no tengan acceso directo a las contraseñas.

3. **Cumplimiento normativo:** Muchas regulaciones y estándares de seguridad, como el Reglamento General de Protección de Datos (GDPR) en la Unión Europea, exigen que las empresas protejan adecuadamente la información confidencial de los usuarios, incluidas las contraseñas. La encriptación de contraseñas con bcrypt ayuda a cumplir con estos requisitos regulatorios.

## Instalación de bcrypt

Primero, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, crea un nuevo directorio para tu proyecto y ejecuta los siguientes comandos en tu terminal:

```
npm init -y
npm install express bcrypt
```

### Configuración de Express

Crea un archivo `server.js` para configurar tu servidor Express:

```javascript
// Importa los módulos necesarios
import express from 'express';
import bcrypt from 'bcrypt';

// Crea una instancia de Express
const app = express();
const PORT = 3000;

// Middleware para el análisis del cuerpo de las solicitudes
app.use(express.json());

// Ruta para encriptar una contraseña
app.post('/encriptar', async (req, res) => {
  const { contraseña } = req.body;
  try {
    // Genera un salt (valor de hashing aleatorio)
    const saltRounds = 10;
    const hash = await bcrypt.hash(contraseña, saltRounds);
    res.json({ hash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al encriptar la contraseña' });
  }
});

// Ruta para verificar una contraseña
app.post('/verificar', async (req, res) => {
  const { contraseña, hash } = req.body;
  try {
    // Compara la contraseña con el hash almacenado
    const resultado = await bcrypt.compare(contraseña, hash);
    res.json({ resultado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al verificar la contraseña' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
```

### Uso de las rutas

Puedes usar herramientas como Postman o escribir código en el lado del cliente para interactuar con las rutas `/encriptar` y `/verificar`.

## Conclusiones

La combinación de npm bcrypt y Express proporciona una forma segura y eficiente de implementar la encriptación de contraseñas en aplicaciones web. Al utilizar estas herramientas, puedes proteger la información confidencial de los usuarios y cumplir con los estándares de seguridad necesarios en tus proyectos.

{{< youtube _69u37lNjSI >}}
