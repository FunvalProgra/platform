---
title: "Ficheros / Roles EC2"
date: 2023-03-12T11:47:29-06:00
draft: false
showPagination: false
---
# Ficheros / Roles EC2
Lección sobre Ficheros y Roles de EC2

Introducción:
En el contexto de Amazon Elastic Compute Cloud (EC2), los ficheros y los roles desempeñan un papel importante en el almacenamiento y la gestión de los recursos de las instancias de EC2. En esta lección, exploraremos los conceptos fundamentales y las características de los ficheros y los roles de EC2, así como los casos de uso comunes para cada uno de ellos.

1. Ficheros en EC2:
- Ficheros de usuario: Son los ficheros específicos de una instancia de EC2, como documentos, imágenes, archivos de configuración, etc. Estos ficheros pueden ser almacenados en volúmenes de almacenamiento en bloque (EBS) o en el almacenamiento temporal de la instancia.
- Ficheros de sistema: Son los ficheros del sistema operativo y las aplicaciones instaladas en la instancia de EC2. Estos ficheros son administrados por el sistema operativo y pueden incluir archivos del sistema, bibliotecas, ejecutables, etc.

2. Almacenamiento de ficheros en EC2:
- Volúmenes de almacenamiento en bloque (EBS): Proporcionan almacenamiento persistente y de alta disponibilidad para las instancias de EC2. Los volúmenes de EBS pueden ser adjuntados a una instancia y formateados con un sistema de archivos para almacenar ficheros de usuario y de sistema.
- Almacenamiento temporal de instancia: Cada instancia de EC2 tiene almacenamiento temporal conocido como "instancia store". Este almacenamiento es más efímero y no persiste más allá del ciclo de vida de la instancia. Los ficheros almacenados aquí son adecuados para datos temporales o caché.

3. Roles de EC2:
- Roles de IAM (Identity and Access Management): Los roles de IAM son entidades de seguridad que se pueden asociar a las instancias de EC2. Estos roles permiten que las instancias accedan a otros servicios de AWS, como S3 o DynamoDB, sin necesidad de proporcionar credenciales directamente en la instancia.
- Políticas de IAM: Los roles de EC2 están asociados a políticas de IAM, que definen los permisos y las acciones que la instancia puede realizar en los servicios de AWS. Estas políticas controlan el acceso y la gestión de los recursos en nombre de la instancia.

4. Casos de uso comunes:
- Almacenamiento de archivos estáticos: Los ficheros de usuario pueden ser almacenados en volúmenes de EBS o en servicios de almacenamiento en la nube, como Amazon S3, para proporcionar un almacenamiento escalable y duradero para archivos estáticos.
- Configuración y personalización de la instancia: Los ficheros de sistema pueden ser utilizados para configurar el sistema operativo y las aplicaciones instaladas en la instancia de EC2, permitiendo personalizar y adaptar la instancia según las necesidades.
- Acceso seguro a servicios de AWS: Los roles de EC2 permiten que las instancias accedan a servicios de AWS sin necesidad de compartir credenciales directamente, lo que mejora la seguridad y facilita la administración de permisos.

Conclusión:
Los ficheros y los roles de EC2 son elementos esenciales en la gestión y configuración de las instancias de EC2. El almacenamiento de ficheros, ya sea en volúmenes de EBS o en almacenamiento temporal, permite gestionar los datos de usuario y de sistema

 de forma eficiente. Los roles de EC2 facilitan el acceso seguro a otros servicios de AWS sin la necesidad de compartir credenciales directamente en la instancia. Al comprender estos conceptos, se puede utilizar EC2 de manera eficaz para almacenar y gestionar ficheros, y para proporcionar acceso seguro a otros servicios de AWS.

# Ficheros 
{{< youtube i1x8z5K3xpE >}}
# Roles EC2
{{< youtube oP8AUuV-6PM >}}
