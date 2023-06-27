---
title: "Intro a AWS / IAM"
date: 2023-03-09T10:55:15-06:00
draft: false
showPagination: false
---
# Intro  AWS IAM

Introducción:
AWS Identity and Access Management (IAM) es un servicio de administración de identidades y accesos que proporciona un control granular sobre los recursos de Amazon Web Services (AWS). IAM permite gestionar usuarios, grupos y roles, y asignar permisos para acceder a los diferentes servicios de AWS de forma segura. En esta lección completa, exploraremos los conceptos fundamentales y las mejores prácticas relacionadas con IAM.

1. ¿Qué es IAM y por qué es importante?
- IAM es el servicio de gestión de identidades y accesos de AWS, que permite controlar quién tiene acceso a los recursos de la nube y qué acciones pueden realizar.
- Es importante porque proporciona seguridad, escalabilidad y control sobre los recursos de AWS al permitir la gestión centralizada de usuarios y sus permisos.

2. Componentes clave de IAM:
- Usuarios: Representan a las personas u entidades que interactúan con AWS y se autentican mediante credenciales. Se les asignan políticas para definir los permisos.
- Grupos: Contienen varios usuarios y permiten aplicar políticas comunes a un conjunto de usuarios.
- Roles: Se utilizan para conceder permisos a entidades externas, como servicios de AWS o aplicaciones, en lugar de usuarios individuales.
- Políticas: Documentos JSON que definen los permisos y acciones permitidas en AWS. Se pueden asignar a usuarios, grupos o roles.
- Credenciales de seguridad: Incluyen claves de acceso y claves secretas, utilizadas para autenticar y acceder a los recursos de AWS.

3. Escenarios comunes de uso:
- Control de acceso: IAM permite establecer permisos granulares para usuarios y roles, restringiendo el acceso solo a los recursos necesarios.
- Federación de identidades: Permite a los usuarios acceder a cuentas de AWS utilizando sus credenciales de identidad corporativa existentes.
- Acceso programático: IAM proporciona credenciales de acceso seguro para interactuar con servicios de AWS a través de API o SDK.
- Delegación de permisos: Los roles de IAM permiten que las aplicaciones accedan a los recursos de AWS sin compartir credenciales de seguridad.

4. Mejores prácticas de IAM:
- Principio de menor privilegio: Otorgar solo los permisos necesarios para realizar una tarea específica.
- Uso de roles en lugar de usuarios IAM: Para servicios y aplicaciones que requieren acceso a los recursos de AWS, se recomienda el uso de roles en lugar de cuentas de usuario IAM.
- Implementación de autenticación multifactor (MFA): Reforzando la seguridad de las cuentas de usuario con una capa adicional de autenticación.
- Revisión periódica de los permisos: Regularmente auditar los permisos asignados para garantizar que sigan siendo necesarios y apropiados.
- Utilización de políticas de acceso condicional: Definir políticas basadas en condiciones, como direcciones IP o fecha y hora, para restringir aún más el acceso.

Conclusión:
AWS IAM es un componente esencial para garantizar la seguridad y el control de acceso en entornos de nube basados en AWS. Mediante la gestión de usuarios, grupos y roles, y la asignación de permisos mediante políticas, IAM permite una administración granular de los recursos de AWS. Al seguir las mejores prácticas y comprender los conceptos fundamentales de IAM, se puede crear un entorno seguro

## AWS ?
{{< youtube 50RbVujPPGs >}}
## IAM
{{< youtube ZTsi1e-VJIU >}}
