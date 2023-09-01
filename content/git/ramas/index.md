---
title: "Ramas en Git"
date: 2023-09-01T14:24:11-05:00
draft: false
showPagination: false
---

En el mundo del desarrollo de software, Git es ampliamente conocido como el sistema de control de versiones líder. Su flexibilidad y potencia lo hacen esencial en la gestión de proyectos de código fuente. Dentro de Git, uno de los conceptos clave que hacen que la colaboración y la organización sean más efectivas es el uso de ramas.

## ¿Qué son las Ramas en Git?

En Git, una rama es una línea de desarrollo independiente que deriva de la rama principal (comúnmente denominada "master" o "main"). Cada rama tiene su propio historial de cambios, lo que permite a los desarrolladores trabajar en tareas específicas sin afectar directamente el código en la rama principal.

Cuando se crea una rama, se parte de un punto dado en la rama principal. Los cambios realizados en una rama no impactan en otras ramas hasta que se fusionen de nuevo en la rama principal o en otra rama. Las ramas en Git son ligeras y no consumen mucho espacio en disco, lo que las hace ideales para experimentar y desarrollar nuevas características de manera segura.

## Videos

Cada video está configurado para empezar y terminar en minutos determinados, por lo cual te recomiendo que solo les des play y los veas y estudies. No es necesario adelantarlo, se detendrán automáticamente en los minutos que ya hemos configurado.

<!-- 24 minutos -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/mBYSUUnMt9M?start=6320&end=7737" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## git branch y git switch

<!-- 12 minutos -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/3GymExBkKjE?start=5916&end=6546" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## git merge

<!-- 5 minutos -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/3GymExBkKjE?start=6546&end=6909" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br>

# .gitignore

<!-- 2 minutos -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/3GymExBkKjE?start=3905&end=4144" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<br>

# Curso GIT y GitHub

Hasta ahora hemos visto a detalle como funciona cada uno de los comandos. En general, en el día a día, esto suele ser mas sencillo de aplicar. Para ello, veremos el siguiente tutorial de Fazt en el que se explica como crear un repositorio en GitHub y como subirlo a la nube.
{{< youtube HiXLkL42tMU >}}

# Comandos

Hasta el momento, hemos aprendido varios comandos de GIT, así que haré una lista de los comandos que hemos aprendido hasta ahora.

- **git init**: Inicializa un repositorio GIT en el directorio actual.
- **git status**: Muestra el estado actual del repositorio.
- **git add**: Agrega archivos al área de preparación.
- **git commit**: Crea un nuevo commit con los archivos del área de preparación.
- **git log**: Muestra el historial de commits.
- **git branch**: Muestra las ramas del repositorio.
- **git switch**: Cambia de rama.
- **git merge**: Une dos ramas.
- **git checkout**: Cambia de rama o restaura un archivo.
- **git tree**: Muestra el árbol de commits.

{{< figure src="./git-flujo.png" >}}
