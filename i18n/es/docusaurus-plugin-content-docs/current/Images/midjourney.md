---
sidebar_position: 99
---
#   Midjourney

[Midjourney](https://www.midjourney.com) es otro generador de imágenes por IA. A diferencia de Stable Diffusion, Midjourney utiliza un bot de Discord como interfaz para la generación de imágenes por IA (únete al Discord [aquí](https://discord.gg/midjourney) o experimenta con el bot en el [Discord de Learn Prompting](http://learnprompting.org/discord)). Sin embargo, el uso del bot de Midjourney sigue los mismos principios básicos para la generación de imágenes mediante la creación de un prompt.

import midjourney_astronaut from '@site/docs/assets/midjourney_astronaut.png';
import midjourney_astronaut_params from '@site/docs/assets/midjourney_astronaut_params.png';
import midjourney_astronaut_multi1 from '@site/docs/assets/midjourney_astronaut_multi1.png';
import midjourney_astronaut_multi2 from '@site/docs/assets/midjourney_astronaut_multi2.png';
import midjourney_astronaut_ip2 from '@site/docs/assets/midjourney_astronaut_ip2.png';


# Uso básico

La anatomía básica de un prompt con Midjourney es `/imagine prompt: [IMAGE PROMPT] [--PARAMETROS OPCIONALES]`. Por ejemplo:

```text
/imagine prompt: astronauta en un caballo
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "750px"}} />
</div>

Se puede encontrar más información sobre los parámetros del prompt aquí: [Documentación de Midjourney - Lista de parámetros](https://docs.midjourney.com/docs/parameter-list)

Ejemplo:

```text
/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000 
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params} style={{width: "750px"}} />
</div>

# Prompts avanzados
## Prompts múltiples
Por defecto, Midjourney interpreta el prompt holísticamente. Al usar `::` Midjourney interpreta cada parte de un prompt por separado. Ejemplo:
```text
/imagine prompt: astronaut and horse
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi1} style={{width: "750px"}} />
</div>

```text
/imagine prompt: astronaut:: and horse
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi2} style={{width: "750px"}} />
</div>


## Prompts de imagen
Al cargar una imagen en Discord y utilizar su URL en un prompt, se puede instruir a Midjourney para que utilice esa imagen para influir en el contenido, estilo y composición de los resultados. Ejemplo:
[Astronauta (Fuente: Wikipedia)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).jpg)

```text
/imagine prompt: [image URL], impressionist painting
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_ip2} style={{width: "750px"}} />
</div>

## Notes

¡Necesita más contenido!