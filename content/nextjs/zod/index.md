---
title: 'Zod y React Hook Form en Next.js'
date: 2024-10-02T12:03:45-05:00
draft: false
showPagination: false
---

La validación de formularios es una parte crucial en cualquier aplicación web. En Next.js, podemos mejorar la experiencia del usuario combinando dos herramientas poderosas: **Zod** para definir esquemas de validación y **React Hook Form** para manejar la gestión del estado de los formularios de manera eficiente.

En este artículo, exploraremos cómo integrar **Zod** con **React Hook Form** en una aplicación de Next.js para validar formularios, centrándonos exclusivamente en el **frontend**.

## ¿Qué es React Hook Form?

**React Hook Form** es una biblioteca que facilita la gestión de formularios en React. Al aprovechar los hooks de React, esta herramienta minimiza el uso innecesario de renderizados y proporciona una API simple para manejar la entrada de datos de formularios, haciendo que la validación y el manejo de formularios sea más eficiente.

## Instalación de Zod y React Hook Form

Primero, instalemos ambas bibliotecas en nuestro proyecto:

```bash
npm install zod react-hook-form @hookform/resolvers
```

O, si usas `yarn`:

```bash
yarn add zod react-hook-form @hookform/resolvers
```

### ¿Qué es `@hookform/resolvers`?

Es un paquete que nos permite integrar diferentes esquemas de validación (como Zod) con React Hook Form, proporcionando una solución perfecta para combinar ambas herramientas.

## Definiendo un Esquema de Validación con Zod

Vamos a crear un esquema de validación usando **Zod** para un formulario de registro. El esquema validará un nombre de usuario, correo electrónico y contraseña.

```tsx
import { z } from 'zod';

const registerSchema = z.object({
  username: z
    .string()
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
  email: z.string().email('Debe ser un correo electrónico válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});
```

### Esquema Explicado:

- **`username`**: Debe tener al menos 3 caracteres.
- **`email`**: Debe ser un correo electrónico válido.
- **`password`**: Debe tener al menos 6 caracteres.

## Integrando Zod con React Hook Form

Ahora que tenemos nuestro esquema, lo combinaremos con **React Hook Form** para manejar el formulario y su validación.

### Configuración del Formulario

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const registerSchema = z.object({
  username: z
    .string()
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
  email: z.string().email('Debe ser un correo electrónico válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = data => {
    console.log('Datos del formulario:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre de usuario</label>
        <input type='text' {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input type='email' {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Contraseña</label>
        <input type='password' {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type='submit'>Registrarse</button>
    </form>
  );
}
```

### Explicación:

1. **useForm**: Este hook es el núcleo de React Hook Form. En su configuración, utilizamos el **resolver** proporcionado por `@hookform/resolvers/zod` para integrar Zod y aplicar la validación.
2. **register**: Se utiliza para vincular los inputs del formulario con React Hook Form.
3. **handleSubmit**: Se encarga de manejar el envío del formulario, invocando la función de validación y llamando a `onSubmit` si los datos son válidos.
4. **errors**: Contiene los errores de validación devueltos por Zod, que se muestran en la interfaz cuando corresponda.

## Ventajas de Usar React Hook Form y Zod Juntos

### 1. **Eficiencia en el Renderizado**

React Hook Form optimiza la cantidad de renderizados que se producen durante la interacción con los formularios, lo que mejora el rendimiento de la aplicación.

### 2. **Validación Simplificada**

Zod permite definir las reglas de validación de manera declarativa y concisa. Al usar el resolver de `@hookform/resolvers`, los errores de validación de Zod se integran sin esfuerzo en React Hook Form, lo que reduce la complejidad del manejo de errores.

### 3. **Mensajes de Error Personalizados**

Gracias a Zod, es posible definir mensajes de error personalizados para cada regla de validación, lo que permite una experiencia de usuario más intuitiva.

## Validación en Tiempo Real

React Hook Form permite habilitar la validación en tiempo real para proporcionar una retroalimentación inmediata al usuario a medida que ingresa los datos.

Para habilitar esta funcionalidad, basta con agregar la propiedad **`mode`** al hook `useForm`:

```tsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(registerSchema),
  mode: 'onChange',
});
```

Con **`mode: 'onChange'`**, la validación se activará cada vez que el usuario modifique el valor de un campo, proporcionando retroalimentación instantánea.

## Resumen

En este artículo, hemos visto cómo combinar **Zod** y **React Hook Form** para gestionar y validar formularios en el frontend de una aplicación Next.js. La combinación de estas herramientas proporciona una solución poderosa, eficiente y flexible para manejar la validación de datos de manera declarativa y fluida.
