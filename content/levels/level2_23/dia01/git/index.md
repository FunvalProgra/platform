---
title: "GIT"
date: 2023-02-15T16:42:07-05:00
draft: false
showPagination: false
---

<!-- Git y Github, que son y primeros pasos -->

# ¿Qué es el control de versiones?

EL control de versiones es la práctica de rastrear y gestionar los cambios que se realizan en un archivo o conjunto de archivos a lo largo del tiempo. Los sitemas de control de versiones son herramientas de software que ayudan a los equipos de software a gestionar los cambios en el código fuente a lo largo del tiempo. Si bien los sistemas de control de versiones son utilizados principalmente por programadores y desarrolladores de software, cualquier persona que trabaje con archivos puede beneficiarse de la utilización de un sistema de control de versiones.

El software de control de versiones realiza un seguimiento de todas las modificaciones en el código en un tipo especial de base de datos. Si se comete un error, los desarrolladores pueden ir hacia atrás en el tiempo y comparar las versiones anteriores del código para ayudar a resolver el error, al tiempo que se minimizan las interrupciones para todos los miembros del equipo.

Los desarrolladores de software que trabajan en equipos están escribiendo continuamente nuevo código fuente y cambiando el que ya existe. El código de un proyecto, una aplicación o un componente de software normalmente se organiza en una estructura de carpetas o "árbol de archivos". Un desarrollador del equipo podría estar trabajando en una nueva función mientras otro desarrollador soluciona un error no relacionado cambiando código. Cada desarrollador podría hacer sus cambios en varias partes del árbol de archivos.

## Ventajas de los sistemas de control de versiones

{{< figure src="./git_1.svg" >}}

Los sistemas de control de versiones ofrecen una serie de ventajas para los equipos de desarrollo de software, incluidas las siguientes:

* **Sincronización de archivos**: Los sistemas de control de versiones permiten a los desarrolladores trabajar en el mismo archivo o conjunto de archivos a la vez. Los sistemas de control de versiones pueden detectar y resolver conflictos entre los cambios realizados por diferentes desarrolladores.

* **Seguimiento de cambios**: Los sistemas de control de versiones mantienen un registro de todos los cambios realizados en cada archivo o conjunto de archivos a lo largo del tiempo. Si se encuentra un error en el código, los desarrolladores pueden volver a una versión anterior del archivo o conjunto de archivos para ayudar a solucionar el problema.

* **Reutilización de código**: Los sistemas de control de versiones permiten a los desarrolladores recuperar versiones anteriores de un archivo o conjunto de archivos. Esto puede ser útil cuando se desarrolla una nueva función que se basa en el código de una función anterior que ya no se usa.

* **Seguridad**: Los sistemas de control de versiones mantienen una copia de seguridad de todas las versiones de un archivo o conjunto de archivos. Si un archivo se corrompe o se elimina accidentalmente, los desarrolladores pueden recuperar una versión anterior del archivo desde el sistema de control de versiones.

* **Colaboración**: Los sistemas de control de versiones permiten a los desarrolladores trabajar en equipo en el mismo archivo o conjunto de archivos. Los sistemas de control de versiones pueden detectar y resolver conflictos entre los cambios realizados por diferentes desarrolladores.

* **Seguimiento de errores**: Los sistemas de control de versiones mantienen un registro de cada error encontrado en el código. Cuando se encuentra un error, los desarrolladores pueden volver a una versión anterior del archivo o conjunto de archivos para ayudar a solucionar el problema.

* **Reutilización de código**: Los sistemas de control de versiones permiten a los desarrolladores recuperar versiones anteriores de un archivo o conjunto de archivos. Esto puede ser útil cuando se desarrolla una nueva función que se basa en el código de una función anterior que ya no se usa.

* **Seguridad**: Los sistemas de control de versiones mantienen una copia de seguridad de todas las versiones de un archivo o conjunto de archivos

<br>

# Qué es Git

{{< figure src="./GIT.svg" >}}

Hoy en día, Git es, con diferencia, el sistema de control de versiones moderno más utilizado del mundo. Git es un proyecto de código abierto maduro y con un mantenimiento activo que desarrolló originalmente Linus Torvalds, el famoso creador del kernel del sistema operativo Linux, en 2005.

Git es un sistema de control de versiones distribuido, lo que significa que cada desarrollador tiene una copia completa de todos los archivos, el historial completo de versiones de todos los archivos y la capacidad de ver el historial completo de todas las versiones de cada archivo. Los desarrolladores pueden trabajar en el código fuente de forma local y luego sincronizar sus cambios con otros desarrolladores a través de Internet o una red local. Git también permite que los desarrolladores trabajen en el mismo archivo a la vez, lo que facilita la colaboración en el desarrollo de software.

## ¿Por qué usar Git?

Git es una herramienta poderosa que puede ayudar a los desarrolladores a gestionar el código fuente de un proyecto. Si bien la mayoría de los desarrolladores de software utilizan Git para gestionar proyectos de código abierto, también se puede utilizar para gestionar proyectos privados. Git es una herramienta de control de versiones distribuido, lo que significa que cada desarrollador tiene una copia completa de todos los archivos, el historial completo de versiones de todos los archivos y la capacidad de ver el historial completo de todas las versiones de cada archivo. Los desarrolladores pueden trabajar en el código fuente de forma local y luego sincronizar sus cambios con otros desarrolladores a través de Internet o una red local. Git también permite que los desarrolladores trabajen en el mismo archivo a la vez, lo que facilita la colaboración en el desarrollo de software.

# GIT

Para seguir aprendiendo GIT, analiza con calma el siguiente video, haz pausas, toma nota, investiga sobre un termino que escuches y no entiendas. Es importante que lo analices con calma y aunque veremos a detalle cada uno de los conceptos a lo largo de este nivel, presta atencion de como funciona de manera general este sistema.

{{< youtube hN8zaUu_k-k >}}

## Instalación de GIT

Sigue los pasos que verás en el video para instalar GIT en tu computadora, mira el video que corresponda a tu sistena operativo.

<div class="flex flex-col px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <div style="gap: 1rem;" class="flex items-center ltr:pr-3 rtl:pl-3 text-primary-400">
    <span>{{< icon "circle-info" >}}</span>
    <b>No avances sin terminar la instalación</b>
  </div>
  <span > <!-- class="dark:text-neutral-300" -->

A partir de ahora usaremos git y github para nuestros proyectos, por ello es importante que lo instales en tu computadora. No es opcional. Si llegas a tener dificultades con la instalación, no dudes en preguntar en el canal de Discord, pero antes que comience la clase de zoom, debes tenerlo instalado.
  </span>
</div>

### GIT en Windows

{{< youtube cYLapo1FFmA >}}

### GIT en MacOS

<!-- {{< youtube FxN8uDk65Oo >}} -->

Este video empieza en el minuto 14:35. Solo mira el fragmento donde se habla de la instalación de GIT, luego analizaremos más partes de este segmento. Este segmento termina en el minuto 24:00.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/3GymExBkKjE?start=875&end=1440" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br>

# Acerca de los video tutoriales

Durante este nivel, nos apoyaremos principalmente en el tutoríal del canal de youtube <mark>FreeCodCamp Español</mark> y tambien del canal de youtube <mark>MoureDev</mark>. Pondremos otros recursos según sea neceario.

Esto videos duran en total más de 5 horas c/u, e iremos viendo los segmentos que necesitemos por clase.

{{< figure src="./git_free.png" >}}

como ves a la derecha, el video está segmentado por temas. Al inicial una nueva lección, el video se iniciará en el segmento correspondiente y se detendrá al final de la lección. Algunas cosas que debes tener en cuenta es lo siguiente:

- Estos segmentos no suelen durar mucho, sin embargo se espera que no solo reproduzcas el video, sino que pruebes el código que se muestra en el video y lo entiendas. Si no entiendes algo, puedes detener el video y preguntar a tu profesor.
- Algunos segmentos son muy cortos, por lo que se recomienda que los veas dos veces para que puedas entenderlos mejor.
- Buscar información adicional es completamente válido. Si un tema no te queda claro, puedes buscar en internet y preguntar a tu profesor por el canal de Discord.

# Comandos de la terminal

<!-- Explica que antes que aprendamos los comandos de git, debemos aprender algunos comandos de la terminal. explica la importancia de esto -->
Antes de aprender los comandos de git, debemos aprender algunos comandos de la terminal. Esto es importante porque git es una herramienta que se ejecuta desde la terminal. Por lo tanto, debemos saber cómo usar la terminal para poder usar git. Iremos familiarizándonos con la terminal a medida que avancemos en el curso. Aunque hay una manera mas sencilla de trabajar con GIT desde VS code, estas opciones son hasta cierto punto limitadas. Por lo tanto, es importante que aprendas a usar la terminal.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" src="https://www.youtube.com/embed/mBYSUUnMt9M?start=1956&end=2602" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

