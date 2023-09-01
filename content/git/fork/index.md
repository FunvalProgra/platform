---
title: "Fork"
date: 2023-09-01T14:41:39-05:00
draft: false
showPagination: false
---

En el mundo del desarrollo de software colaborativo, GitHub se ha convertido en una herramienta fundamental para trabajar en equipo y compartir código. Una de las funciones más importantes de GitHub es la bifurcación o forkeo de un proyecto. ¿Pero qué es exactamente la bifurcación en GitHub y por qué es importante para los desarrolladores? En este artículo, te explicaremos todo lo que necesitas saber sobre la bifurcación en GitHub, cómo hacerlo y cómo contribuir al proyecto original a través de tu bifurcación.

## Forks en GitHub

Antes de Leer un poco mas de este tema, mira este video donde resume el proceso de Fork en GitHub.

{{< youtube zU_G0CjEUPY >}}

## Proceso de Bifurcación (Fork)

La bifurcación o "fork" en GitHub es una manera de crear una copia de un repositorio existente en tu cuenta de GitHub. Una bifurcación te permite experimentar con un proyecto sin afectar el proyecto original y es especialmente útil cuando deseas contribuir a un proyecto existente.

Aquí te muestro los pasos para hacer una bifurcación y contribuir al proyecto original:

1. Haz una bifurcación del proyecto original: Ve al repositorio del proyecto en GitHub y haz clic en el botón "Fork" en la parte superior derecha de la página. Esto creará una copia del repositorio en tu cuenta de GitHub.

2. Clona tu bifurcación: Ahora, debes clonar tu bifurcación en tu computadora local usando el comando `git clone`. Para ello, ve a tu cuenta de GitHub y busca la bifurcación que acabas de crear. Haz clic en el botón "Code" y copia la URL que se muestra.

Luego, en tu terminal, ejecuta el siguiente comando:

```bash
git clone <URL de tu bifurcación>
```

3. Crea una nueva rama: Después de clonar el repositorio, debes crear una nueva rama en la que trabajarás en tu contribución. Para ello, ejecuta el siguiente comando en tu terminal:

```bash
git checkout -b <nombre-de-la-rama>
```

4. Haz los cambios necesarios: Ahora, puedes hacer los cambios necesarios en tu código. En este punto, puedes agregar, eliminar o modificar archivos según la contribución que desees realizar.

5. Confirma los cambios: Una vez que hayas hecho los cambios necesarios, debes confirmarlos. Para ello, ejecuta los siguientes comandos en tu terminal:

```bash
git add .
git commit -m "Mensaje de confirmación que describe los cambios realizados"
```

6. Envía los cambios a tu bifurcación: Ahora, debes enviar los cambios a tu bifurcación. Para ello, ejecuta el siguiente comando en tu terminal:

```bash
git push origin <nombre-de-la-rama>
```

7. Crea una solicitud de extracción: Una vez que hayas enviado los cambios a tu bifurcación, ve a tu cuenta de GitHub y busca la rama que acabas de crear. Haz clic en el botón "Compare & pull request" para crear una solicitud de extracción (pull request) al proyecto original.

8. Espera la revisión: Ahora, los propietarios del proyecto original revisarán tu solicitud de extracción y te darán retroalimentación si es necesario. Si todo está bien, tus cambios se fusionarán con el proyecto original.

## Explicación de GitHub

Dentro de la documentación de github, podemos encontrar informacion de la forma en la que podemos realizar sus procesos. A continuación tenemos dos lecturas sobre la bifurcación y la contribución a un proyecto. Lee ambas secciones y realiza lo siguiente:

1. Realiza la Bifurcación de un repositorio de tu gusto, puedes buscar y elegir el que desees.
2. Realiza una copia local de ese repositorio.
3. Realiza la contribucion a ese proyecto, no importa si es pequeña o grande, lo importante es que lo hagas.
4. Realiza un Pull Request a ese proyecto.
5. <mark>Envía un pantallazo de tu contribución a DISCORD</mark>. Este ultimo paso es importante y no es opcional, tienes que enviar esta evidencia por el canal de Discord.

👉 [Bifurcación de un repositorio](https://docs.github.com/es/get-started/quickstart/fork-a-repo)

👉 [Contribuir a un proyecto](https://docs.github.com/es/get-started/quickstart/contributing-to-projects)
