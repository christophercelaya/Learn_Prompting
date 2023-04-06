---
sidebar_position: 5
---
#   Potenciadores de calidad

Los potenciadores de calidad (@oppenlaender2022taxonomy) son términos agregados a una prompt para mejorar ciertas cualidades de la imagen generada que no están relacionadas con el estilo. Por ejemplo, "increíble", "hermoso" y "buena calidad" son potenciadores de calidad que se pueden utilizar para mejorar la calidad de la imagen generada.

import pyramids from '@site/docs/assets/images_chapter/pyramids.png';
import special_pyramids from '@site/docs/assets/images_chapter/special_pyramids.png';

# Ejemplo

Recordemos las pirámides generadas con DALLE de la otra página, y la prompt `pyramid`.

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}} />
</div>

Ahora, veamos las pirámides generadas con esta prompt:
`Una hermosa, majestuosa, increíble pirámide, 4K`

<div style={{textAlign: 'center'}}>
  <img src={special_pyramids} style={{width: "750px"}} />
</div>

¡Estas son mucho más escénicas e impresionantes! 

Aquí hay una lista de algunos potenciadores de calidad:
```text
Alta resolución, 2K, 4K, 8K, claro, buena iluminación, detallado, extremadamente detallado, enfoque nítido, intrincado, hermoso, realista +++, colores complementarios, alta calidad, hiper detallado, obra maestra, mejor calidad, artstation, impresionante
```

## Notas

Al igual que en la página anterior, nuestra definición de trabajo de los potenciadores de calidad difiere de la de Oppenlaender et al. (@oppenlaender2022taxonomy). Dicho esto, a veces es difícil distinguir exactamente entre potenciadores de calidad y modificadores de estilo.