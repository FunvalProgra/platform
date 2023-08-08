---
title: "FORK"
date: 2023-07-28T18:32:03-05:00
draft: false
showPagination: false
---
## Git Fork

En Git, el comando `fork` se refiere a la acción de crear una copia independiente de un repositorio de Git en tu cuenta de usuario, generalmente en una plataforma de alojamiento como GitHub, GitLab o Bitbucket. Esta copia te permite trabajar libremente en el proyecto sin afectar el repositorio original, lo que es especialmente útil cuando deseas contribuir a un proyecto de código abierto o colaborar en un proyecto de otra persona.

## Hacer Fork

1. **Iniciar sesión en la plataforma**: Accede a la plataforma de alojamiento (por ejemplo, GitHub) e inicia sesión en tu cuenta de usuario. Si no tienes una cuenta, deberás crear una antes de continuar.

2. **Encuentra el repositorio**: Busca el repositorio que deseas forkear. Por lo general, puedes encontrarlo a través de la función de búsqueda en la plataforma o si tienes el enlace directo al repositorio.

3. **Hacer el fork**: En la página del repositorio, busca el botón o enlace que te permita hacer el fork. En GitHub, por ejemplo, encontrarás el botón "Fork" en la esquina superior derecha de la página. Al hacer clic en él, se creará una copia del repositorio en tu cuenta.

4. **Clonar el repositorio fork**: Una vez que hayas hecho el fork, ahora puedes clonar tu repositorio fork en tu máquina local para comenzar a trabajar en él. Abre tu terminal y utiliza el siguiente comando:

   ```bash
   git clone <URL-del-repositorio-fork>
   ```

   Sustituye `<URL-del-repositorio-fork>` por la URL del repositorio fork que obtuviste al hacer el fork.

5. **Configurar el repositorio remoto**: Por defecto, el repositorio clonado apuntará al repositorio fork en tu cuenta. Para configurar el repositorio remoto original (el repositorio del que hiciste el fork) como "upstream" y mantenerlo actualizado, utiliza el siguiente comando:

   ```bash
   git remote add upstream <URL-del-repositorio-original>
   ```

   Sustituye `<URL-del-repositorio-original>` por la URL del repositorio original.

6. **Trabajar en tu repositorio fork**: Ahora puedes realizar cambios en tu repositorio fork como lo harías en cualquier otro repositorio local. Agrega, modifica y elimina archivos según sea necesario para tu contribución.

7. **Mantener tu repositorio actualizado**: A medida que otros colaboradores realicen cambios en el repositorio original, es recomendable mantener tu repositorio fork actualizado para evitar conflictos innecesarios. Para hacerlo, utiliza los siguientes comandos:

   ```bash
   git fetch upstream
   git merge upstream/master  # O la rama principal del repositorio original
   ```

   Estos comandos traen los cambios del repositorio original y los fusionan con tu rama principal local.

8. **Contribuir mediante pull requests**: Cuando hayas realizado cambios significativos en tu repositorio fork y desees contribuir con esos cambios al repositorio original, puedes hacerlo mediante un "pull request" (solicitud de extracción) en la plataforma de alojamiento. Esto permitirá que los propietarios del repositorio original revisen tus cambios y, si todo está en orden, los fusionen en su repositorio principal.

Recuerda que hacer un fork es una excelente forma de colaborar en proyectos de código abierto o trabajar en equipo sin afectar el repositorio original. Asegúrate de seguir las directrices del proyecto y contribuir de manera positiva a la comunidad.

## Recursos

https://desarrolloweb.com/articulos/fork-git

{{< youtube zU_G0CjEUPY >}}