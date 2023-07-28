---
title: "GIT INICIO RAPIDO"
date: 2023-07-28T18:32:03-05:00
draft: false
showPagination: false
---
## GitFlow
GitFlow es un flujo de trabajo (workflow) para Git que proporciona una estructura organizada para el desarrollo de proyectos de software. Fue popularizado por Vincent Driessen y se basa en el uso de diferentes ramas para facilitar la colaboración y el manejo de versiones. A continuación se describen las ramas principales utilizadas en GitFlow:

## Branches Principales
### master o main
La rama master o main representa la rama principal del proyecto. Contiene el código estable y funcional que ha sido revisado y probado. En esta rama, los commits representan versiones del software listas para ser desplegadas en producción.

### develop
La rama develop es la rama de integración para nuevas características y cambios. Cuando una característica o mejora está completa, se fusiona en esta rama para ser probada en conjunto con otras funcionalidades antes de llegar a la rama master o main.

### Branches de Soporte
#### feature/< nombre-de-la-caracteristica>

Las ramas feature se utilizan para desarrollar nuevas características o mejoras. Se crean a partir de la rama develop y se fusionan nuevamente en develop cuando la característica está completa.

#### release/< nombre-de-la-version>

Las ramas release se utilizan para preparar una nueva versión del software para su despliegue en producción. Aquí se corrigen los errores menores y se realizan las últimas pruebas antes de fusionarla en master o main y etiquetarla con una versión.

#### hotfix/< nombre-del-hotfix>

Las ramas hotfix se utilizan para corregir rápidamente errores críticos en producción. Se crean a partir de la rama master o main, se aplican los cambios necesarios y se fusionan nuevamente en master o main, así como en develop.

## Flujo de Trabajo
![git1](github-workflow.png)
El flujo de trabajo con GitFlow suele seguir estos pasos:

1. Crear la rama develop a partir de master o main.
2. Crear ramas feature a partir de develop para desarrollar nuevas características.
3. Cuando una característica está lista, fusionarla en develop.
4. Cuando se ha acumulado suficiente funcionalidad en develop, crear una rama release.
5. Realizar pruebas y correcciones en la rama release.
6. Fusionar la rama release en master o main y etiquetarla con una versión.
7. Fusionar la rama release en develop.
8. Si se encuentra un error en producción, crear una rama hotfix a partir de master o main.
9. Realizar la corrección en la rama hotfix.
10. Fusionar la rama hotfix en master o main y etiquetarla con una nueva versión.
11. Fusionar la rama hotfix en develop.
Este flujo de trabajo estructurado ayuda a mantener un historial de versiones claro y a facilitar la colaboración entre desarrolladores en proyectos de software.

## Homework
Seguir la estructura con git flow.

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow