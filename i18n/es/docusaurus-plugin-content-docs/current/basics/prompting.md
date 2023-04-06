---
sidebar_position: 1
---
#   Prompting

En el capítulo anterior, discutimos la IA y cómo los humanos pueden instruir a las IA para que realicen tareas.
El proceso de instruir a una IA para que realice una tarea se denomina prompting(@shin2020autoprompt). Le decimos a la IA
un conjunto de instrucciones (el prompt) y realiza la tarea. Las indicaciones pueden ser tan simples como una pregunta, o
tan complejo como varios párrafos.

Acá hay dos ejemplos de prompts:

#### 1) Resumiendo un artículo

Digamos que estás leyendo un artículo sobre nevadas en Florida. Desea obtener rápidamente las ideas principales del artículo, por lo que le muestras a la IA lo que estás leyendo y solicitas un resumen[^2]:

```
Es muy raro que caiga nieve en el estado de Florida, EEUU, especialmente en la parte central y sur del estado. Con la excepción de las áreas más al norte del estado, la mayoría de las principales ciudades de Florida nunca han registrado nevadas medibles, aunque se han registrado pequeñas cantidades o se han observado ráfagas en el aire pocas veces cada siglo. Según el Servicio Meteorológico Nacional, en los Cayos de Florida y Cayo Hueso no se conocen ráfagas de nieve desde la colonización europea de la región hace más de 300 años. En Miami, Fort Lauderdale y Palm Beach ha habido solo un informe conocido de ráfagas de nieve observadas en el aire en más de 200 años; esto ocurrió en enero de 1977. En cualquier caso, Miami, Fort Lauderdale y Palm Beach no han visto ráfagas de nieve antes o desde este evento de 1977.

Resume este párrafo en una sola oración:
```

Aquí está la respuesta de la IA. ¡Es una lectura mucho más corta!

<pre>
<div className="bluegreen-highlight">
Las nevadas son extremadamente raras en Florida, con la excepción de las áreas más al norte, <br/>y solo se ha registrado un caso de ráfagas de nieve en el aire en las principales ciudades <br/>de Miami, Fort Lauderdale y Palm Beach en los últimos 200 años.
</div>
</pre>

#### 2) Resolución de problemas matemáticos

Si tiene un conjunto de datos de ecuaciones matemáticas que le gustaría que un modelo de lenguaje resuelva,
puede crear un aviso planteando la pregunta "¿Qué es ECUACIÓN?".

Para una pregunta dada, el prompt completo podría verse así:

```
¿Cuánto es 965*590?
```

Para este prompt, GPT-3 (text-davinci-003) (una IA) a veces responde 569,050 (incorrecto). Aquí es donde entra la ingeniería en prompt (PE).

# Prompt Engineering

Si, en lugar de preguntar `¿Cuánto es 965*590?`, preguntamos
`Asegúrese de que su respuesta es exactamente correcta. ¿Cuánto es 965*590? Asegúrese de que su respuesta sea exactamente correcta:`, GPT-3 responderá `569350` (correcto). ¿Por qué es este el caso? ¿Por qué es útil decirle a la IA dos veces que dé una respuesta correcta? ¿Cómo podemos crear
indicaciones que producen resultados óptimos en nuestra tarea? Esta última cuestión, en particular,
es el enfoque del campo de PE, así como de este curso.

¡Siga leyendo para aprender a diseñar buenos prompts!

[^2]: Este parrafo es de https://en.wikipedia.org/wiki/Snow_in_Florida
