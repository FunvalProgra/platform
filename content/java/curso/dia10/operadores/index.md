---
title: "Operadores Logicos"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

Cada una de las instrucciones if, if...else, while, do...while y for requieren una condición para determinar cómo continuar con el fl ujo de control de un programa. Hasta ahora sólo hemos estudiado las condiciones simples, como cuenta <= 10, numero != valorCentinela y total > 1000. Las condiciones simples se expresan en términos de los operadores relacionales >, <, >= y <=, y los operadores de igualdad == y !=; cada expresión evalúa sólo una condición.
 Para evaluar condiciones múltiples en el proceso de tomar una decisión, ejecutamos 
estas pruebas en instrucciones separadas o en instrucciones if o if...else anidadas. En ocasiones, las instrucciones de control requieren condiciones más complejas para determinar el fl ujo de control de un programa.
Java cuenta con los operadores lógicos para que usted pueda formar condiciones más complejas, al combinar las condiciones simples. Los operadores lógicos son && (AND condicional), || (OR condicional), & (AND 
lógico booleano), | (OR inclusivo lógico booleano), ^ (OR exclusivo lógico booleano) y ! (NOT lógico).

Los operadores lógicos en Java son utilizados para combinar o negar expresiones booleanas y evaluar su veracidad. Los operadores lógicos más comunes son:

<ol>
    <li>Operador AND (&&): Retorna true si ambas expresiones son verdaderas. Si alguna de las expresiones es falsa, el resultado será false.</li>
    <li>Operador OR (||): Retorna true si al menos una de las expresiones es verdadera. Si ambas expresiones son falsas, el resultado será false.</li>
    <li>Operador NOT (!): Invierte el valor de una expresión booleana. Si la expresión es true, el resultado será false, y si la expresión es false, el resultado será true.</li>
</ol>

Ten en cuenta que los operadores lógicos se evalúan de izquierda a derecha y pueden combinarse para formar expresiones más complejas. También se pueden utilizar paréntesis para controlar el orden de evaluación y agrupar expresiones.

Es importante comprender cómo funcionan los operadores lógicos y cómo afectan la evaluación de expresiones booleanas en Java, ya que son fundamentales para tomar decisiones basadas en condiciones en programas.