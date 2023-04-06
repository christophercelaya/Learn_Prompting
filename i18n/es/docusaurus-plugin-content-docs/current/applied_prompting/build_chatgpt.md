---
sidebar_position: 4
---

#   ChatGPT a partir de GPT-3

import Skippy from '@site/docs/assets/skippy_chatbot.png'    
import SkippyHeader from '@site/docs/assets/skippy_chatbot_header.png'    
import Therapy from '@site/docs/assets/therapy_chatbot.gif'
import ChatGPT from '@site/docs/assets/chatgpt_ui_diagram.png'

<div style={{textAlign: 'left'}}>
  <img src={SkippyHeader} style={{width: "700px"}} />
</div>

## Introducción

[ChatGPT](https://chat.openai.com/chat) ha explotado en el último mes, ganando un millón de usuarios en solo una semana. Sorprendentemente, el modelo subyacente, GPT-3, debutó en 2020 y se lanzó para acceso público hace más de un año.   

Para aquellos que no lo saben, ChatGPT es un nuevo modelo de lenguaje de OpenAI que fue ajustado a partir de GPT-3 para ser optimizado para la conversación (@chatgpt2022). Tiene una interfaz de chat fácil de usar, donde puedes ingresar una entrada y obtener una respuesta de un asistente de inteligencia artificial. Échale un vistazo en [chat.openai.com](https://chat.openai.com/chat).

Si bien las primeras versiones de GPT-3 no eran tan avanzadas como la actual serie GPT-3.5, aún eran impresionantes. Estos modelos han estado disponibles a través de una API y una interfaz de usuario web de <a href="https://beta.openai.com/playground">playground</a> que te permite ajustar ciertos hiperparámetros de configuración y probar prompts. GPT-3 ganó una tracción significativa, pero no se acercó a la viralidad de ChatGPT. 

Lo que hace que ChatGPT sea tan exitoso en comparación con GPT-3 es su accesibilidad como un asistente de IA sencillo para la persona promedio, independientemente de su conocimiento de la ciencia de datos, los modelos de lenguaje o la IA.

En este artículo, describo cómo se pueden implementar chatbots como ChatGPT utilizando un modelo de lenguaje grande como GPT-3.

## Motivación
Este artículo se escribió en parte debido a un tweet de <a href="https://twitter.com/goodside">Riley Goodside</a>, que señaló cómo podría haberse implementado ChatGPT.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Cómo crear tu propio ChatGPT usando GPT-3 (text-davinci-003) - donde puedes personalizar las reglas según tus necesidades y acceder al chatbot resultante a través de una API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">26 de diciembre de 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Al igual que otros modelos de la serie GPT-3.5, ChatGPT fue entrenado utilizando [RLHF](https://huggingface.co/blog/rlhf), pero gran parte de su efectividad proviene de utilizar un **buen prompt**.

## El prompt

<div style={{textAlign: 'left'}}>
  <img src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Prompt completo de Skippy del encabezado del artículo</p>
</div>

<a href="https://learnprompting.org/docs/basics/prompting">El prompting es el proceso de instruir a una IA para que haga algo.</a> Como probablemente hayas visto en los ejemplos de ChatGPT en línea, puedes pedirle que haga casi cualquier cosa. Los casos de uso comunes son resumir textos, escribir contenido basado en una descripción o crear cosas como poemas, recetas y mucho más.

<p></p>

ChatGPT es tanto un modelo de lenguaje como una interfaz de usuario. La entrada de prompt que el usuario introduce en la interfaz se inserta en realidad en un prompt más grande que contiene toda la conversación entre el usuario y ChatGPT. Esto permite que el modelo de lenguaje subyacente comprenda el contexto de la conversación y responda adecuadamente.

<div style={{textAlign: 'left'}}>
  <img src={ChatGPT} style={{width: "600px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Ejemplo de inserción de prompt de usuario antes de enviarlo al modelo</p>
</div>

El modelo de lenguaje completa el prompt determinando qué palabras vienen a continuación en función de las probabilidades que aprendió durante el pre-entrenamiento (@jurafsky2009).

<p></p>

GPT-3 es capaz de 'aprender' a partir de una instrucción simple o unos pocos ejemplos en el prompt. Esto se llama aprendizaje con pocos ejemplos, o aprendizaje en contexto (@brown2020language). En el prompt del chatbot de arriba, creo un chatbot ficticio llamado Skippy y le pido que proporcione respuestas a los usuarios. GPT-3 se da cuenta del formato de ida y vuelta, `USER: {entrada del usuario}` y `SKIPPY: {respuesta de Skippy}`. GPT-3 entiende que Skippy es un chatbot y que los intercambios anteriores son una conversación, por lo que cuando proporcionamos la siguiente entrada del usuario, "Skippy" responderá.

### Memorización

Los intercambios anteriores entre Skippy y el usuario se agregan al siguiente prompt. Cada vez que proporcionamos más entrada del usuario y obtenemos más salida del chatbot, el prompt se expande para incorporar este nuevo intercambio. Así es como los chatbots como Skippy y ChatGPT pueden **recordar las entradas anteriores**. Sin embargo, hay un límite en cuanto a cuánto puede recordar un chatbot de GPT-3.

Los prompts pueden llegar a ser muy largos después de varias interacciones, especialmente si estamos utilizando el chatbot para generar respuestas largas como publicaciones de blog. Los prompts enviados a GPT-3 se convierten en tokens, que son palabras individuales o partes de ellas. Existe un límite de <a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">4097 tokens (aproximadamente 3000 palabras)</a> para el prompt combinado y la respuesta generada para modelos GPT-3, incluyendo ChatGPT. 

### Algunos ejemplos

Hay muchos casos de uso diferentes para prompts de chatbot que almacenan conversaciones previas. ChatGPT está destinado a ser un asistente general multipropósito y, en mi experiencia, rara vez hace preguntas de seguimiento.

#### Chatbot de terapia que pregunta sobre tu día

Puede ser útil tener un chatbot que haga preguntas y obtenga comentarios del usuario. A continuación se muestra un ejemplo de prompt de chatbot de terapia que hará preguntas y seguimientos para ayudar al usuario a reflexionar sobre su día.

<div style={{textAlign: 'left'}}>
  <img src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Prompt de chatbot de terapia</p>
</div>

#### Habla con tu yo más joven utilizando antiguas entradas de diario

<a href="https://twitter.com/michellehuang42">Michelle Huang</a> usó GPT-3 para tener una conversación con su yo más joven. El prompt utiliza algo de contexto, en este caso antiguas entradas de diario, combinado con un formato de ida y vuelta de chatbot. GPT-3 es capaz de imitar una personalidad basada en estas entradas.

<p></p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my &quot;inner child&quot;<br/><br/>some reflections below:</p>&mdash; michelle huang (@michellehuang42) <a href="https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw">November 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Prompt del Tweet:
```markdown
El siguiente es una conversación entre Michelle presente (edad [redactada]) y Michelle joven (edad 14).

Michelle joven ha escrito las siguientes entradas en su diario:
[entradas del diario aquí]

Michelle presente: [escribe tus preguntas aquí]
```

La autora señala que las entradas de diario pueden alcanzar el límite de tokens. En este caso, podrías seleccionar algunas entradas o tratar de resumir varias entradas.

## Implementación

Voy a explicar cómo codificar un chatbot simple impulsado por GPT-3 en Python. Incluir GPT-3 en una aplicación que estés construyendo es increíblemente fácil utilizando la API de OpenAI. Necesitarás crear una cuenta en OpenAI y obtener una clave API. Echa un vistazo a su documentación <a href="https://beta.openai.com/docs/introduction">aquí</a>.

Visión general de lo que tenemos que hacer:

1. Formatear la entrada del usuario en un mensaje de chatbot para GPT-3.
2. Obtener la respuesta del chatbot como una respuesta de GPT-3.
3. Actualizar el mensaje con tanto la entrada del usuario como la respuesta del chatbot.
4. Repetir.

Aquí está el mensaje que utilizaré. Podemos usar Python para reemplazar <historial de conversación\> y <entrada del usuario\> con sus valores reales.

```python
chatbot_prompt = """
    Como chatbot avanzado, tu objetivo principal es ayudar a los usuarios de la mejor manera posible. Esto puede implicar responder preguntas, proporcionar información útil o completar tareas basadas en la entrada del usuario. Para ayudar eficazmente a los usuarios, es importante ser detallado y exhaustivo en tus respuestas. Usa ejemplos y evidencias para respaldar tus puntos y justificar tus recomendaciones o soluciones.

    <historial de conversación>

    Usuario: <entrada del usuario>
    Chatbot:"""
```

Mantengo un registro tanto de la próxima entrada del usuario como de la conversación anterior. Cada iteración se agrega una nueva entrada/salida entre el chatbot y el usuario.

```python
import openai

openai.api_key = "TU CLAVE API AQUÍ"
model_engine = "text-davinci-003"
chatbot_prompt = """
Como chatbot avanzado, tu objetivo principal es ayudar a los usuarios de la mejor manera posible. Esto puede implicar responder preguntas, proporcionar información útil o completar tareas basadas en la entrada del usuario. Para ayudar eficazmente a los usuarios, es importante ser detallado y exhaustivo en tus respuestas. Usa ejemplos y evidencias para respaldar tus puntos y justificar tus recomendaciones o soluciones.

<historial de conversación>

Usuario: <entrada del usuario>
Chatbot:"""


def obtener_respuesta(historial_de_conversacion, entrada_del_usuario):
    mensaje = chatbot_prompt.replace(
        "<historial de conversación>", historial_de_conversacion).replace("<entrada del usuario>", entrada_del_usuario)

    # Obtener la respuesta de GPT-3
    respuesta = openai.Completion.create(
        engine=model_engine, prompt=mensaje, max_tokens=2048, n=1, stop=None, temperature=0.5)

    # Extraer la respuesta del objeto de respuesta
    texto_respuesta = respuesta["choices"][0]["text"]

    respuesta_chatbot = texto_respuesta.strip()

    return respuesta_chatbot


def main():
    historial_de_conversacion = ""

    while True:
        entrada_del_usuario = input("> ")
        if entrada_del_usuario == "salir":
            break
        respuesta_chatbot = obtener_respuesta(historial_de_conversacion, entrada_del_usuario)
        print(f"Chatbot: {respuesta_chatbot}")
        historial_de_conversacion += f"Usuario: {entrada_del_usuario}\nChatbot: {chatbot_response}\n"

main()
```


Aquí hay un enlace al código completo para un chatbot simple: <a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">aquí</a>.

<p></p>
Ahora solo queda construir una interfaz de usuario atractiva con la que los usuarios puedan interactuar.

Written by [jayo78](https://twitter.com/jayo782).