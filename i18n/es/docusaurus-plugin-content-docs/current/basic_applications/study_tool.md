---
sidebar_position: 30
---

#   Compañero de estudio

Una de nuestras formas favoritas de utilizar los LLMs es como herramienta de estudio. En particular, es útil para explicar términos confusos, así como para hacerte preguntas sobre el contenido de los exámenes.

## Explicando Términos

Recientemente estaba leyendo un libro de texto sobre cactus (@nobel2002cacti) y vi este pasaje:

```text
Debido a las adaptaciones a condiciones xéricas y la presencia de maderas menos evolucionadas en Pereskioideae, la familia Cactaceae es una de las más interesantes tanto anatómica como morfológicamente.
```

No tenía idea de lo que significaba **less derived woods** y Google solo mostraba artículos de investigación al respecto. Decidí usar ChatGPT para averiguar qué significaba. Le di la siguiente solicitud, que es simplemente el pasaje del libro y mi pregunta.

```text
Debido a las adaptaciones a condiciones xéricas y la presencia de maderas menos evolucionadas en Pereskioideae, la familia Cactaceae es una de las más interesantes tanto anatómica como morfológicamente.

¿Qué significa la expresión "less derived woods"?

// highlight-start
En este contexto, "less derived woods" se refiere a la forma ancestral o primitiva de la madera que se encuentra en la evolución temprana de las plantas. Estas maderas carecen de estructuras y características especializadas que evolucionaron más tarde en las plantas más avanzadas o derivadas. En la subfamilia Pereskioideae de la familia Cactaceae, la madera es menos derivada en comparación con otras subfamilias y es más similar a la madera que se encuentra en las plantas no cactáceas. Se cree que la madera menos derivada en Pereskioideae es una adaptación a los ambientes más húmedos y menos xéricos en los que estas plantas crecen en comparación con otros cactus.
//highlight-end
```

El modelo pudo responder mi pregunta rápidamente y pude continuar con mi lectura.

## Haciéndote preguntas a ti mismo

Otra forma de utilizar los LLM como herramienta de estudio es haciéndote preguntas a ti mismo. Si tienes un próximo examen de cálculo, podrías simplemente preguntar:

```text
Genera 5 preguntas de quiz de Cálculo I para mí:

// highlight-start
1. ¿Cuál es la derivada de y = x3?
2. Evalúa la integral indefinida de x3 + 5x2 + 7x + 4.
3. ¿Cuál es la regla del producto para derivadas?
4. Encuentra la ecuación de la recta tangente a y = x2 en el punto (4, 16).
5. ¿Cuál es la segunda derivada de y = x4?
//highlight-end
```

Si estás estudiando un tema más específico, es posible que necesites proporcionarle al modelo información adicional, ¡por ejemplo, tus notas de clase!

```text
3/20/2020 2:30 PM

Notas de Clase de Marketing

- Discutido los 4 P's del marketing: Producto, Precio, Plaza, Promoción
- Diferencia entre B2C y B2B: B2C es mercado directo al consumidor, B2B es negocio a negocio
- Diferentes tipos de investigación de mercado: cuantitativa y cualitativa, como encuestas y grupos focales
- Estrategias de precios: Skimming, Penetración, Competencia y Valor
- Segmentación: segmentar la base de clientes por edad, ingresos, etc.
- 4 tipos de segmentación: Demográfica, Geográfica, Psicográfica y Conductual
-  Discutido diferentes herramientas promocionales: Publicidad, Venta Personal, Relaciones Públicas, Marketing Directo y Promociones de Ventas.

Genera 5 preguntas de prueba de marketing basadas en mis notas:

// highlight-start
1. ¿Cuáles son las 4 P's del marketing?
2. ¿Cuál es la diferencia entre B2C y B2B?
3. ¿Cuáles son dos tipos de investigación de mercado?
4. ¿Cuáles son los 4 tipos de segmentación?
5. Nombra 5 herramientas promocionales.
//highlight-end
```

## Conclusión

Probablemente hay otras formas de utilizar LLMs para estudiar. Muchas empresas de aprendizaje, como Duolingo y Quizlet, están implementando LLMs en sus productos.
