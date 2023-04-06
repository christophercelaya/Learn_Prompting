---
sidebar_position: 50
---
#   Repetición

Repetir la misma palabra dentro de una consulta, o frases similares, puede hacer que el modelo enfatice esa palabra en la imagen generada(@oppenlaender2022taxonomy). Por ejemplo, [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) generó estas cascadas con DALLE:

import bad_water from '@site/docs/assets/images_chapter/bad_water.jpg';
import good_water from '@site/docs/assets/images_chapter/good_water.jpg';
import planet from '@site/docs/assets/images_chapter/planet.png';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.png';


`Una hermosa pintura de una montaña junto a una cascada.`.

<div style={{textAlign: 'center'}}>
  <img src={bad_water} style={{width: "750px"}} />
</div>

`Una pintura muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy hermosa de una montaña junto a una cascada.`

<div style={{textAlign: 'center'}}>
  <img src={good_water} style={{width: "750px"}} />
</div>

¡La repetición de la palabra `muy` parece mejorar la calidad de la generación! La repetición también se puede usar para enfatizar términos de sujeto. Por ejemplo, si desea generar una imagen de un planeta con alienígenas, usar la consulta `Un planeta con alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas` hará que sea más probable que los alienígenas estén en la imagen resultante. Las siguientes imágenes están hechas con Stable Diffusion.

`Un planeta con alienígenas`
<div style={{textAlign: 'center'}}>
  <img src={planet} style={{width: "250px"}} />
</div>

`Un planeta con alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas alienígenas`

<div style={{textAlign: 'center'}}>
  <img src={planet_aliens} style={{width: "250px"}} />
</div>


## Notas 

Este método no es perfecto, y a menudo es mejor opción utilizar pesos (siguiente artículo).