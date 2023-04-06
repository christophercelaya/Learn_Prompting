---
sidebar_position: 1
---

#   Detección de Textos IA

La detección de textos generados por IA es un gran problema para investigadores de seguridad y educadores, entre otros. Herramientas como [GPTZero](https://gptzero.me), [GPT2 detector](https://openai-openai-detector.hf.space) y [detectores bilingües](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection) han tenido un éxito significativo, sin embargo, pueden ser [engañados](https://learnprompting.org/docs/miscl/trickery).

OpenAI y otros investigadores (@bansal2022certified) (@gu2022watermarking) están trabajando en la introducción de marcas de agua estadísticas en sus textos generados, pero también pueden ser engañados mediante la modificación de grandes partes del texto.

Es probable que el problema de la detección de textos generados por IA sea una carrera armamentista a medida que se introduzcan nuevos modelos y métodos de detección. Muchas empresas ya han comenzado a construir soluciones que afirman ser muy efectivas, pero es difícil de demostrar, especialmente cuando los modelos cambian con el tiempo.

Este artículo cubrirá algunos de los métodos actuales para detectar textos generados por IA, y el siguiente discutirá algunas formas en que las personas han encontrado para engañarlos.

## Clasificador de Texto de OpenAI

El [Clasificador de Texto de OpenAI](https://platform.openai.com/ai-text-classifier) es un intento bastante bueno de un detector de texto de IA de propósito general. Al entrenar el modelo con una gran cantidad de datos generados por IA y texto escrito por humanos de una calidad similar, el detector es capaz de calcular la probabilidad de que cualquier texto dado haya sido creado por un LLM.

Tiene varias limitaciones: no acepta ninguna presentación de menos de 1000 palabras, el texto puede ser fácilmente editado para interferir con los cálculos de probabilidad y, debido a su conjunto de entrenamiento enfocado en profesionales, tiene más dificultades con el texto creado por niños o no hablantes de inglés.

Actualmente, clasifica el texto humano como generado por IA solo alrededor del 9% del tiempo, e identifica correctamente el texto generado por IA ~26% del tiempo. A medida que el modelo aumenta en potencia y alcance, esos números mejorarán, pero puede ser el caso que se requieran detectores más específicos para evaluar adecuadamente si el texto es generado o no.

## El Método de la Marca de Agua

Un método para detectar texto generado por IA requiere la introducción de una marca de agua estadística al generar el texto. Estas técnicas pueden utilizar una "lista blanca" de LLM, que es un método para determinar si el texto fue generado por un modelo de IA específico. La marca de agua funciona seleccionando un conjunto aleatorio de tokens "verdes" antes de generar una palabra, y luego promoviendo su uso suavemente durante el muestreo. Estos valores ponderados tienen un efecto mínimo en la calidad de las generaciones, pero pueden ser detectados algorítmicamente por otro LLM (@kirchenbauer2023watermarking).

Esto es una idea intrigante, pero requiere que los creadores del modelo implementen este marco en su LLM. Si un modelo no tiene la marca de agua incorporada, este método no funcionará.

## DetectGPT

El método [DetectGPT](https://detectgpt.ericmitchell.ai/)(@mitchell2023detectgpt) puede detectar texto generado por IA con menos configuración que los conceptos anteriores. Los investigadores han descubierto que las generaciones de texto LLM tienden a "ocupar regiones de curvatura negativa de la función de probabilidad logarítmica del modelo". Debido a esto, es posible crear un sistema basado en curvatura para determinar si un bloque de texto fue generado de manera procedural.

Funciona calculando las probabilidades logarítmicas del modelo que se pensó que había generado el texto y comparándolas con las alteraciones aleatorias del texto de otro modelo de lenguaje genérico preentrenado. De esta manera, ¡DetectGPT puede identificar la probabilidad de que el pasaje haya sido generado utilizando solo curvas de probabilidad!

## Nota

Para obtener una discusión adicional sobre el tema de los detectores y cómo las personas los están engañando, consulte [este artículo] (https://learnprompting.org/docs/miscl/trickery).
