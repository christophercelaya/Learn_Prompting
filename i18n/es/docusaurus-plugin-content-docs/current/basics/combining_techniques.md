---
sidebar_position: 6
locale: es-mx
style: chicago
---

#   Combinando técnicas

import CombinedPrompt from '@site/docs/assets/combined_prompt.svg';


<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

Como hemos visto en las páginas anteriores, los prompts pueden tener distintos formatos y complejidad. Pueden incluir contexto, instrucciones y múltiples ejemplos de entrada-salida. Sin embargo, hasta ahora sólo hemos examinado distintos tipos de prompts. La combinación de estas técnicas puede dar lugar a instrucciones más potentes.

Aquí hay un ejemplo de pregunta que incluye contexto, instrucciones y varios ejemplos:

```text

Twitter es una red social donde los usuarios pueden publicar mensajes llamados "tweets".
Los tweets pueden ser positivos o negativos, y nos gustaría poder clasificar los tweets como 
positivos o negativos. Aquí hay algunos ejemplos de tweets positivos y negativos. Asegúrate
de clasificar el ultimo tweet correctamente.


P: Tweet: "¡Qué hermoso día!"
¿Este tweet es positivo o negativo?

R: Positivo

P: Tweet: "Odio esta clase"
¿Este tweet es positivo o negativo?

R: Negativo

P: Tweet: "Me encantan los bolsillos en los jeans"

R:
```

Si añadimos ejemplos o contextos adicionales, a menudo podemos mejorar el rendimiento de las IA en distintas tareas.

