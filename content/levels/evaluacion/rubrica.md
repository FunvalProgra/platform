---
title: "Rubrica"
date: 2025-02-05T11:39:06-05:00
draft: true
---

# Evaluación Técnica: Entrevista de HTML, CSS, Diagramas de Flujo y Pseudocódigo

## Instrucciones para el Evaluador

Esta evaluación está diseñada para ser realizada en **20 minutos** y se divide en dos partes:

1. **Preguntas teóricas**: El evaluador hará preguntas al alumno para evaluar su conocimiento conceptual.
2. **Ejercicio práctico**: El alumno resolverá un problema que incluye condiciones, utilizando un **diagrama de flujo** y **pseudocódigo**.

El evaluador debe tomar notas y asignar puntajes según la rúbrica proporcionada.

---

## Material para el Evaluador

### Parte 1: Preguntas Teóricas (40 puntos)

El evaluador debe hacer las siguientes preguntas al alumno y evaluar sus respuestas.

#### HTML (10 puntos)

1. **Pregunta 1**: ¿Qué significa HTML y cuál es su función principal?
   - **Respuesta esperada**: HTML significa "HyperText Markup Language". Es el lenguaje estándar para crear páginas web y define la estructura del contenido.
2. **Pregunta 2**: Menciona al menos 3 etiquetas HTML y describe su uso.
   - **Respuesta esperada**: Ejemplos:
     - `<h1>`: Para títulos principales.
     - `<p>`: Para párrafos de texto.
     - `<ul>`: Para listas no ordenadas.

#### CSS (10 puntos)

1. **Pregunta 1**: ¿Qué significa CSS y cuál es su propósito en el desarrollo web?
   - **Respuesta esperada**: CSS significa "Cascading Style Sheets". Se utiliza para dar estilo y diseño a las páginas web, como colores, fuentes y márgenes.
2. **Pregunta 2**: Explica la diferencia entre `margin` y `padding`.
   - **Respuesta esperada**:
     - `margin`: Espacio fuera de un elemento, entre este y otros elementos.
     - `padding`: Espacio dentro de un elemento, entre su contenido y su borde.

#### Lógica de Programación (20 puntos)

1. **Pregunta 1**: ¿Qué es un diagrama de flujo y para qué se utiliza?
   - **Respuesta esperada**: Un diagrama de flujo es una representación gráfica de un proceso o algoritmo. Se utiliza para visualizar y planificar la lógica de un programa.
2. **Pregunta 2**: ¿Qué es el pseudocódigo y cuál es su ventaja?
   - **Respuesta esperada**: El pseudocódigo es una descripción informal de un algoritmo en un lenguaje similar al humano. Su ventaja es que es fácil de entender y no depende de un lenguaje de programación específico.
3. **Pregunta 3**: ¿Qué es una condición en programación y cómo se representa en un diagrama de flujo?
   - **Respuesta esperada**: Una condición es una expresión que se evalúa como verdadera o falsa. En un diagrama de flujo, se representa con un rombo.

---

### Parte 2: Ejercicio Práctico (60 puntos)

El evaluador debe pedir al alumno que resuelva el siguiente problema utilizando un **diagrama de flujo** y **pseudocódigo**.

#### Instrucciones para el alumno

"Imagina que necesitas crear un programa que determine si un número ingresado por el usuario es **positivo, negativo o cero**. Realiza lo siguiente:

1. Dibuja un **diagrama de flujo** que represente el proceso.
2. Escribe el **pseudocódigo** correspondiente."

---

## Rúbrica de Evaluación (100 puntos)

| **Criterio**                    | **Puntos** | **Descripción**                                                                   |
| ------------------------------- | ---------- | --------------------------------------------------------------------------------- |
| **Parte 1: Preguntas Teóricas** | 40         |                                                                                   |
| - HTML                          | 10         | Respuestas claras y correctas sobre HTML.                                         |
| - CSS                           | 10         | Respuestas claras y correctas sobre CSS.                                          |
| - Lógica de Programación        | 20         | Respuestas claras y correctas sobre diagramas de flujo y pseudocódigo.            |
| **Parte 2: Ejercicio Práctico** | 60         |                                                                                   |
| - Diagrama de Flujo             | 30         | Representación correcta y clara del proceso, incluyendo condiciones.              |
| - Pseudocódigo                  | 30         | Descripción clara y lógica del algoritmo en pseudocódigo, incluyendo condiciones. |
| **Total**                       | **100**    |                                                                                   |

---

## Guía para el Evaluador

1. **Durante la entrevista**:

   - Haz las preguntas teóricas de manera clara y da tiempo al alumno para pensar.
   - Observa cómo el alumno resuelve el ejercicio práctico. ¿Es creativo? ¿Organizado?
   - Toma notas sobre la claridad de las respuestas y la eficiencia en la resolución del problema.

2. **Al finalizar**:
   - Revisa la rúbrica y asigna los puntos correspondientes.
   - Proporciona retroalimentación al alumno sobre su desempeño.

---

## Ejemplo de Respuesta Esperada (Práctica)

### Diagrama de Flujo:

1. Inicio.
2. Pedir al usuario que ingrese un número.
3. ¿El número es mayor que 0?
   - Sí: Mostrar "El número es positivo".
   - No: ¿El número es menor que 0?
     - Sí: Mostrar "El número es negativo".
     - No: Mostrar "El número es cero".
4. Fin.

### Pseudocódigo:

```plaintext
Inicio
  Leer numero
  Si numero > 0 Entonces
    Mostrar "El número es positivo"
  Sino
    Si numero < 0 Entonces
      Mostrar "El número es negativo"
    Sino
      Mostrar "El número es cero"
    Fin Si
  Fin Si
Fin
```
