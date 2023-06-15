---
title: "For"
date: 2023-05-16T14:16:48-05:00
draft: false
showPagination: false
---

La instrucción for en Java es una estructura de control que permite repetir un bloque de código un número específico de veces. Es especialmente útil cuando se conoce la cantidad exacta de repeticiones necesarias.

Su sintaxis es la siguiente:

{{< figure src="./for.png">}}

Los siguientes ejemplos muestran técnicas para modifi car la variable de control en una instrucción for. En cada 
caso, escribimos el encabezado for apropiado. Observe el cambio en el operador relacional para los ciclos que 
decrementan la variable de control.

<ol>
    <li> Modifi car la variable de control de 1 a 100 en incrementos de 1.
    for ( int i = 1; i <= 100; i++ )</li>
    <li> Modifi car la variable de control de 100 a 1 en decrementos de 1. 
    for ( int i = 100; i >= 1; i-- )</li>
    <li> Modifi car la variable de control de 7 a 77 en incrementos de 7.
    for ( int i = 7; i <= 77; i += 7 )</li>
    <li> Modifi car la variable de control de 20 a 2 en decrementos de 2.
    for ( int i = 20; i >= 2; i -= 2 )</li>
    <li> Modifi car la variable de control con la siguiente secuencia de valores: 2, 5, 8, 11, 14, 17, 20.
    for ( int i = 2; i <= 20; i += 3 )</li>
    <li> Modifi car la variable de control con la siguiente secuencia de valores: 99, 88, 77, 66, 55, 44, 33, 
    22, 11, 0.
    for ( int i = 99; i >= 0; i -= 11 )</li>
</ol>

{{< youtube VmuTOoYgPMA >}}