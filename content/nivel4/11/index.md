---
title: "Intro"
date: 2023-03-09T10:55:15-06:00
draft: false
showPagination: false
---
# Configuración y Uso de Apache, Nginx y CMD en Windows

**Resumen:** En este artículo, exploraremos la configuración y el uso de los servidores web Apache y Nginx, así como la línea de comandos (CMD) en el entorno de Windows. A través de ejemplos prácticos,  aprenderán a instalar y configurar estos servidores web, y a utilizar el CMD para realizar diversas tareas administrativas.

## 1. Introducción a Apache y Nginx

Apache y Nginx son dos de los servidores web más populares que permiten el alojamiento y la entrega de sitios web. Ambos servidores web tienen sus propias características y beneficios.

## 2. Instalación y Configuración Básica

### 2.1 Instalación de Apache

1. Descarga el paquete de instalación de Apache desde el sitio web oficial.
2. Ejecuta el instalador y sigue las instrucciones.
3. Abre un navegador y verifica que Apache esté funcionando accediendo a `http://localhost`.

### 2.2 Instalación de Nginx

1. Descarga el paquete de instalación de Nginx desde el sitio web oficial.
2. Ejecuta el instalador y sigue las instrucciones.
3. Abre un navegador y verifica que Nginx esté funcionando accediendo a `http://localhost`.

## 3. Configuración de Sitios Virtuales

### 3.1 Configuración de Sitios Virtuales en Apache

1. Abre el archivo `httpd.conf` en la carpeta de instalación de Apache.
2. Habilita el módulo `vhost` y configura tus sitios virtuales.

### 3.2 Configuración de Sitios Virtuales en Nginx

1. Abre el archivo de configuración `nginx.conf` en la carpeta de instalación de Nginx.
2. Define tus servidores virtuales utilizando bloques `server`.

## 4. Gestión de Servicios y Línea de Comandos

### 4.1 Gestión de Servicios en Windows

Utiliza el Administrador de Servicios o los comandos `net start` y `net stop` para iniciar y detener los servicios de Apache y Nginx.

### 4.2 Línea de Comandos (CMD) en Windows

1. Abre la línea de comandos (`cmd.exe`) desde el menú Inicio.
2. Utiliza comandos como `cd` para cambiar de directorio, `dir` para listar archivos y carpetas, `ipconfig` para obtener información de red, etc.

## 5. Práctica Guiada: Configuración de un Sitio Web

Para aplicar lo aprendido, pueden llevar a cabo un proyecto práctico: configurar y alojar un sitio web local utilizando Apache o Nginx en Windows. Algunos pasos clave incluyen:

- Configurar un sitio virtual en Apache o Nginx.
- Crear una página web simple en HTML.
- Acceder al sitio web localmente a través del navegador.

## Recursos

{{< youtube itDrFPM3Kdw >}}

{{< youtube 9nyiY-psbMs >}}


https://kinsta.com/es/base-de-conocimiento/instalar-nginx/

https://ticgrup.com/los-comandos-cmd-que-deberias-conocer/