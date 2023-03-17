---
title: "Debug & Testing"
date: 2023-03-12T11:49:44-06:00
draft: false
showPagination: false
---
# ¿Qué testear?

Los test se realizan para garantizar que su aplicación funcione según lo previsto para sus usuarios finales. Tener pruebas hará que su aplicación sea más robusta y menos propensa a errores. Es una forma de verificar que el código está haciendo lo que pretendían los desarrolladores.

# Posibles desventajas:

La redacción de la prueba requiere mucho tiempo y es difícil.
En ciertos escenarios, ejecutar test en CI puede costar dinero real.
Si se hace incorrectamente, puede darte falsos positivos. Sus pruebas pasan, pero su aplicación no funciona según lo previsto.
O falsos negativos. Sus pruebas fallan, pero su aplicación funciona según lo previsto.

# ¿Qué testear?

Para desarrollar el punto anterior, sus pruebas deben probar la funcionalidad de la aplicación, que imita cómo la usarán sus usuarios finales. Esto le dará la confianza de que su aplicación funcionará según lo previsto en su entorno de producción. Por supuesto, entraremos en muchos más detalles a lo largo de este artículo, pero esta es la esencia básica.
¿Qué no testear?

Me gusta usar la filosofía de Kent C dodds aquí de que no debe probar los detalles de implementación.

Detalles de implementación que significan probar cosas que no son la funcionalidad del usuario final. Veremos un ejemplo de esto en la sección Enzima a continuación.

Parece que está probando la funcionalidad allí, pero en realidad no es así. Estás probando el nombre de la función. Porque puede cambiar el nombre de la función y sus pruebas fallarán, pero su aplicación seguirá funcionando y le dará un falso negativo.

Tener que preocuparse constantemente por los nombres de funciones y variables es un dolor de cabeza, y tener que reescribir las pruebas cada vez que las cambia es tedioso, le mostraré un mejor enfoque.

Const variables: estas son variables que no cambian, no es necesario probarlas.

Bibliotecas de terceros: No es su trabajo probar estas bibliotecas. Depende de los creadores de estas bibliotecas probarlo. Si no está seguro de si una biblioteca está probada, no debe usarla. O puede leer el código fuente para ver si el autor incluye pruebas. Puede descargar el código fuente y ejecutar estas pruebas usted mismo. También puede preguntarle al autor si su biblioteca está lista para la producción o no.

## Montaje superficial vs.

Mount en realidad ejecuta el código html, css y js como lo haría un navegador, pero lo hace de forma simulada. Es "sin cabeza", por ejemplo, lo que significa que no representa ni pinta nada en una interfaz de usuario, sino que actúa como un navegador web simulado y ejecuta el código en segundo plano.

No perder tiempo pintando nada en la interfaz de usuario hace que sus pruebas sean mucho más rápidas. Sin embargo, las pruebas de montaje siguen siendo mucho más lentas que las pruebas superficiales.

Esta es la razón por la que desmonta o limpia el componente después de cada prueba, porque es casi una aplicación en vivo y una prueba afectará a otra prueba.

Mount/render se usa normalmente para prueba de integración y superficial para prueba unitaria.

la renderización superficial solo renderiza el único componente que estamos probando. No renderiza componentes secundarios. Esto nos permite probar nuestro componente de forma aislada.

Por ejemplo, considere este componente hijo y padre.
```js
import React from 'react';

const App = () => {
  return (
    <div> 
      <ChildComponent /> 
    </div> 
  )
}

const ChildComponent = () => {
  return (
    <div>
     <p> Child components</p>
    </div>
  )
}
```
Si usamos una representación superficial de App.jsobtendríamos algo como esto, observe que ninguno de los nodos DOM para el componente secundario está presente, de ahí el término representación superficial.
```js
<App>
  <div> 
    <ChildComponent /> 
  </div>
</App> 
```
Ahora podemos comparar esto con el montaje del componente:
```js
<App>
  <div> 
    <ChildComponent> 
      <div>
       <p> Child components</p>
      </div>
    </ChildComponent>
   </div>
</App> 
```
Lo que tenemos arriba está mucho más cerca de cómo se verá nuestra aplicación en el navegador, de ahí la superioridad de mount/render.

# Unidad vs integración vs extremo a extremo


## unit testing : 
probando una parte aislada de su aplicación, generalmente realizada en combinación con una representación superficial. Ejemplo: un componente se renderiza con los accesorios predeterminados.

## pruebas de integración:
probar si las diferentes partes funcionan o se integran entre sí. Por lo general, se realiza con el montaje o renderizado de un componente. Ejemplo: prueba si un componente secundario puede actualizar el estado del contexto en un componente principal.

## e to e testing : 
significa "de extremo a extremo". Por lo general, una prueba de varios pasos que combina múltiples pruebas unitarias y de integración en una gran prueba. Por lo general, muy poco se burla o se critica. Las pruebas se realizan en un navegador simulado, puede haber o no una interfaz de usuario mientras se ejecuta la prueba. Ejemplo: probar un flujo de autenticación completo.