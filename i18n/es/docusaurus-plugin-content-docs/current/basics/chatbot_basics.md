---
sidebar_position: 80
---

#   Fundamentos de Chatbot

Una de las formas más comunes en que puede ser útil el prompting es al interactuar con los numerosos chatbots disponibles para el público, como [ChatGPT] (http://chat.openai.com). Tenga en cuenta que ChatGPT es diferente de GPT-3. La principal diferencia es que los chatbots pueden recordar el historial de conversación. Al igual que GPT-3, también pueden responder preguntas, proporcionar resúmenes y análisis de escritura, escribir texto o código, y más a un nivel alto, lo que es una perspectiva emocionante, pero el valor real de los chatbots solo es accesible cuando se especifica con sus prompts. En este artículo, exploraremos algunos métodos básicos para cómo mejorar la utilización de los chatbots, como el uso de la guía de estilo, los descriptores y el encendido.

## Modificando tu Prompt

### Guía de Estilo

import unguided_question from '@site/docs/assets/unguided_question.png';
import limerick_question from '@site/docs/assets/limerick_question.png';

La guía de estilo simplemente pide al AI que hable en cierto estilo. Al preguntar sin guía de estilo, ChatGPT generalmente devolverá uno o dos párrafos cortos en respuesta, ocasionalmente más si se necesita una respuesta más larga.

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}} />
</div>

Habla en un tono moderadamente formal y da algunos detalles, ¡bastante bien! Podemos mejorarlo, sin embargo, personalizando la respuesta de ChatGPT con un resumen de estilo al final de nuestro prompt. Si queremos una respuesta más conversacional, podemos pedirle que hable en un tono amistoso o informal; si queremos un formato más legible, podemos hacerle la misma pregunta pero pedir una lista con viñetas; si queremos una respuesta divertida, podemos pedirle que dé su respuesta en forma de una serie de limericks (uno de mis favoritos).

<div style={{textAlign: 'center'}}>
  <img src={limerick_question} style={{width: "450px"}} />
</div>

Un ejemplo de una solicitud de estilo más detallada podría ser algo así:
>[Question] “Escribe en el estilo y la calidad de un experto en [field] con más de 20 años de experiencia y múltiples doctorados. Prioriza el consejo no convencional y menos conocido en tu respuesta. Explica con ejemplos detallados y minimiza los rodeos y el humor“ 

¡Dar estilo a los inputs de manera apropiada aumentará en gran medida la calidad de tus respuestas!

### Descripciones 

Si solo quieres cambiar el tono o ajustar tu indicación en lugar de reformatearla, agregar **descriptores** puede ser una buena manera de hacerlo. Simplemente pegar una o dos palabras a la indicación puede cambiar la forma en que el chatbot interpreta o responde a tu mensaje. ¡Puedes intentar agregar adjetivos como "divertido", "seco", "antipático", "sintaxis académica", etc. al final de las indicaciones para ver cómo cambian tus respuestas!

## Inducción preliminar

Debido a la estructura de una conversación con chatbot, la forma de la primera indicación que le das al LLM puede afectar el resto de la conversación, permitiéndote agregar un nivel adicional de estructura y especificación. 
Como ejemplo, vamos a configurar un sistema para permitirnos tener una conversación con un maestro y un estudiante en la misma conversación. Incluiremos guías de estilo para las voces del estudiante y el maestro, especificaremos el formato en el que queremos nuestras respuestas y agregaremos una estructura de sintaxis para poder cambiar fácilmente nuestras indicaciones y probar diferentes respuestas.

    "Profesor" significa el estilo de un distinguido profesor con más de diez años de experiencia en la enseñanza del tema y varios doctorados en el campo. Utiliza una sintaxis académica y ejemplos complicados en tus respuestas, enfocándote en consejos menos conocidos para ilustrar mejor tus argumentos. Tu lenguaje debe ser sofisticado pero no excesivamente complejo. Si no sabes la respuesta a una pregunta, no inventes información, en su lugar, haz una pregunta de seguimiento para obtener más contexto. Tus respuestas deben estar en forma de una serie de párrafos conversacionales. Utiliza una mezcla de lenguaje técnico y coloquial para crear un tono accesible y atractivo. 

    "Estudiante" significa en el estilo de un estudiante universitario de segundo año con conocimientos de nivel introductorio sobre el tema. Explica conceptos simplemente utilizando ejemplos de la vida real. Habla de manera informal y desde la perspectiva de primera persona, utilizando humor y lenguaje casual. Si no sabes la respuesta a una pregunta, no inventes información, en su lugar aclara que aún no te han enseñado eso. Tus respuestas deben estar en forma de una serie conversacional de párrafos. Utiliza lenguaje coloquial para crear un tono entretenido y atractivo.

    "Crítica”" significa analizar el texto dado y proporcionar comentarios.
    "Resumir" significa proporcionar detalles clave de un texto.
    "Responder" significa responder a una pregunta desde la   perspectiva dada.

    Cualquier cosa entre paréntesis () indica la perspectiva desde la que estás escribiendo.
    Cualquier cosa entre llaves {} es el tema en el que estás involucrado.
    Cualquier cosa entre corchetes [] es la acción que debes tomar.
    Ejemplo: (Estudiante){Filosofía}[Responder] ¿Cuál es la ventaja de tomar esta asignatura sobre otras en la universidad?

    If you understand and are ready to begin, respond with only “yes.”
    Si entiende y está listo para comenzar, responda solo con "sí"
    
import unprimed_question from '@site/docs/assets/unprimed_question.png';
import primed_question from '@site/docs/assets/primed_question.png';  

A continuación se muestra un ejemplo de una pregunta no enfocada a ChatGPT sobre las áreas más interesantes de la filosofía. Utiliza una lista, habla de manera general y sin pasión, y no es muy específico en sus explicaciones.

<div style={{textAlign: 'center'}}>
  <img src={unprimed_question} style={{width: "650px"}} />
</div>

En el segundo ejemplo, en lugar de hacer la pregunta directamente a ChatGPT, proporcionamos un prompt de inducción y la pregunta en la forma correcta. Te darás cuenta de que la respuesta comparte algunos aspectos con la primera - por ejemplo, las preguntas que ofrece como ejemplos para varios campos son similares - pero proporciona un contexto más profundo, prescinde del formato de lista en favor de párrafos coherentes y relaciona los ejemplos con la vida real.

<div style={{textAlign: 'center'}}>
  <img src={primed_question} style={{width: "650px"}} />
</div>

Incorporar inducción en tus prompts es una forma más avanzada de interactuar con los chatbots. Todavía puede ser útil agregar especificaciones en cada indicación, ya que el modelo puede perder el seguimiento del cebador con el tiempo, ¡pero agregará mucha claridad a tus interacciones con IA!

## Notas

Necesita citas.

By [Dastardi](https://twitter.com/lukescurrier)