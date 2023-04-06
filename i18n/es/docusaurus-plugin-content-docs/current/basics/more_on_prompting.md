---
sidebar_position: 10
locale: en-us
style: chicago
---

#   mas sobre Prompting

Como hemos visto en las páginas anteriores, los prompts pueden tener diferentes formatos y complejidad. Pueden incluir contexto, instrucciones, múltiples ejemplos de preguntas-respuestas, e incluso otros prompts (¿qué!?).

Aquí hay un ejemplo de un prompt que incluye contexto, instrucciones y múltiples ejemplos:

```text
Twitter es una plataforma de redes sociales donde los usuarios pueden publicar mensajes cortos llamados "tweets".
Los tweets pueden ser positivos o negativos, y nos gustaría poder clasificar los tweets como
positivos o negativos. Aquí hay algunos ejemplos de tweets positivos y negativos. Asegúrese de clasificar el último tweet correctamente.

Q: Tweet: "¡Qué día tan hermoso!"
¿Este tweet es positivo o negativo?

A: positivo

Q: Tweet: "Odio esta clase"
¿Este tweet es positivo o negativo?

A: negativo

Q: Tweet: "Amo los bolsillos en los jeans"

A:
```

Agregando contexto/ejemplos adicionales, a menudo podemos mejorar el rendimiento de los AI en diferentes tareas. El siguiente capítulo cubre técnicas de prompting ligeramente más avanzadas.

## Notas

En los próximos capítulos, puede ver las palabras AI, modelo y LLM utilizados indistintamente. Consulte la referencia de vocabulario para obtener más información.

Los prompts dentro de prompts, o prompts auto-augmentados (@kojima2022large), se cubrirán en las próximas secciones.
