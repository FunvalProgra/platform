---
title: "password_hash() y password_verify() en PHP"
date: 2023-11-09T15:35:24-05:00
draft: false
showPagination: false
---

## Introducción

En PHP, las funciones `password_hash()` y `password_verify()` son esenciales para la seguridad de las contraseñas en las aplicaciones web¹². Estas funciones permiten crear un hash seguro de una contraseña y luego verificar esa contraseña contra el hash¹².

## ¿Qué es password_hash()?

La función `password_hash()` en PHP se utiliza para crear un nuevo hash de contraseña utilizando un algoritmo de hash fuerte¹. La sintaxis de `password_hash()` es la siguiente¹:

```php
password_hash (string $password, int $algo, array $options = []): string|false
```

Aquí, `$password` es la contraseña del usuario, `$algo` es un algoritmo de hash constante definido por PHP, y `$options` es un array asociativo que puede contener opciones específicas del algoritmo¹.

## Ejemplo de password_hash()

Aquí hay un ejemplo de cómo usar `password_hash()`¹:

```php
$hash = password_hash("mi_contraseña_secreta", PASSWORD_DEFAULT);
```

En este ejemplo, `mi_contraseña_secreta` es la contraseña del usuario y `PASSWORD_DEFAULT` es una constante de PHP que indica el algoritmo de hash a utilizar¹.

## ¿Qué es password_verify()?

La función `password_verify()` en PHP se utiliza para verificar que una contraseña coincide con un hash¹. La sintaxis de `password_verify()` es la siguiente¹:

```php
password_verify (string $password, string $hash): bool
```

Aquí, `$password` es la contraseña del usuario y `$hash` es el hash contra el cual verificar la contraseña¹.

## Ejemplo de password_verify()

Aquí hay un ejemplo de cómo usar `password_verify()`¹:

```php
if (password_verify('mi_contraseña_secreta', $hash)) {
    echo '¡La contraseña es válida!';
} else {
    echo 'La contraseña no es válida.';
}
```

En este ejemplo, `mi_contraseña_secreta` es la contraseña del usuario y `$hash` es el hash de la contraseña¹. Si la contraseña coincide con el hash, `password_verify()` devuelve `true` y se imprime '¡La contraseña es válida!'. Si la contraseña no coincide con el hash, `password_verify()` devuelve `false` y se imprime 'La contraseña no es válida.'¹.

## Conclusión

Las funciones `password_hash()` y `password_verify()` en PHP son herramientas poderosas para la gestión segura de contraseñas en las aplicaciones web. Permiten crear hashes seguros de contraseñas y verificar contraseñas contra esos hashes de una manera que sería difícil o imposible sin ellas. A medida que continuamos construyendo y utilizando aplicaciones web, es esencial entender y utilizar eficazmente estas funciones.

Source: Conversation with Bing, 11/9/2023
(1) PHP: password_verify - Manual. https://www.php.net/manual/en/function.password-verify.php.
(2) mysql - PHP login with hashed passwords - Stack Overflow. https://stackoverflow.com/questions/32149397/php-login-with-hashed-passwords.
(3) PHP: password_verify. https://prototype.php.net/manual/en/function.password-verify.php.
(4) PHP password_verify - PHP Tutorial. https://www.phptutorial.net/php-tutorial/php-password_verify/.

## Recursos

### Videos

{{< youtube mYDzEjQsVtk >}}

<br>

{{< youtube qrDhezVAZcQ >}}

### Más lectura

https://www.php.net/manual/es/function.password-hash

https://www.php.net/manual/es/function.password-verify.php

https://www.phptutorial.net/php-tutorial/php-password_verify/
