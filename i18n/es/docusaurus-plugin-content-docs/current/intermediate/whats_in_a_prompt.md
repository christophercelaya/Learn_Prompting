---
sidebar_position: 7
---

#   ¿Qué es una Promoción?

Hemos pasado por algunas estrategias de promoción diferentes en las páginas anteriores. Esta página ofrecerá algunos consejos generales sobre lo que realmente es importante en una promoción.

## "La verdad terrenal es de poca importancia"

Sorprendentemente, al proporcionar algunos pocos ejemplos en las promociones, las respuestas reales (%%gold|gold_labels%%) en los ejemplos no son importantes. Como se muestra en la figura a continuación, proporcionar etiquetas aleatorias en los ejemplos apenas afecta el rendimiento (@min2022rethinking). "Demo" es sinónimo de ejemplo en esta imagen.

import GoldUn from '@site/docs/assets/gold_unimportant.png';

<div style={{textAlign: 'center'}}>
  <img src={GoldUn} style={{width: "750px"}} />
</div>

## Importa el espacio de etiquetas

Aunque las etiquetas doradas en los ejemplos no son importantes, el espacio de etiquetas sí lo es. Incluso proporcionar etiquetas aleatorias del espacio de etiquetas ayuda al LLM a comprender mejor el espacio de etiquetas y mejora los resultados. Además, es importante representar adecuadamente la distribución del espacio de etiquetas en los ejemplos. En lugar de muestrear uniformemente del espacio de etiquetas en los ejemplos, es mejor muestrear de acuerdo con la distribución real de las etiquetas.

## La forma importa

Quizás la parte más importante de los ejemplos es cómo se formatean. Este formato instruye al LLM sobre cómo formatear adecuadamente su respuesta a la promoción.

Por ejemplo, considere los siguientes ejemplos. Usan palabras todas en mayúsculas como respuestas. Aunque las respuestas son completamente incorrectas (2 + 2 no son 50), GPT-3 responde correctamente a la última pregunta y sigue el formato de las otras.

```text
¿Cuánto es 2+2?
CINCUENTA
¿Cuánto es 20+5?
CUARENTA-TRES
¿Cuánto es 12+9?
// highlight-start
VEINTIUNO
// highlight-end
```

## Notas

Entre 4 y 8 ejemplos son una buena cantidad para usar en promociones de pocos disparos (@min2022rethinking), pero a menudo puede ser útil poner tantos como sea posible.

[^labelspace]: See the [vocabulary reference](https://learnprompting.org/docs/vocabulary#labels) for more info.
