---
sidebar_position: 40
---

#   Chatbot + Base de Conocimiento

import ImageIntents from '@site/docs/assets/chatbot_from_kb_intents.png'
import ImageGPT3 from '@site/docs/assets/chatbot_from_kb_gpt3.png'
import ImageGPT3Organized from '@site/docs/assets/chatbot_from_kb_gpt3_organized.png'
import ImagePrompt from '@site/docs/assets/chatbot_from_kb_prompt.png'
import ImageLogin from '@site/docs/assets/chatbot_from_kb_login.png'

Los avances recientes en modelos de lenguaje grandes (LLMs, por sus siglas en inglés) como [GPT-3](https://arxiv.org/abs/2005.14165) y [ChatGPT](https://chat.openai.com/chat) han creado mucha expectación en la industria tecnológica. Estos modelos son increíblemente poderosos para la generación de contenido, pero también tienen algunas desventajas, como el sesgo(@nadeem-etal-2021-stereoset) y las alucinaciones(@Ji_2022). Una área en la que estos LLMs pueden ser particularmente útiles es en el desarrollo de chatbots.

## Chatbots basados en Intención

Los chatbots tradicionales suelen estar basados en intenciones, lo que significa que son diseñados para responder a intenciones de usuario específicas. Cada intención está compuesta por un conjunto de preguntas de muestra y una respuesta asociada. Por ejemplo, la intención "Clima" puede incluir preguntas de muestra como "¿Cómo está el clima hoy?" o "¿Lloverá hoy?" y una respuesta como "Hoy estará soleado". Cuando un usuario hace una pregunta, el chatbot compara la pregunta con las preguntas de muestra más similares asociadas a la intención, y devuelve la respuesta correspondiente

<div style={{textAlign: 'left'}}>
  <img src={ImageIntents} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Cómo funciona un chatbot tradicional basado en intenciones. Imagen del autor.</p>
</div>

Sin embargo, los chatbots basados en intenciones tienen su propio conjunto de problemas. Un problema es que requieren una gran cantidad de intenciones específicas para dar respuestas específicas. Por ejemplo, las expresiones de usuario como "No puedo iniciar sesión", "Olvidé mi contraseña" o "Error de inicio de sesión" pueden necesitar tres respuestas diferentes y, por lo tanto, tres intenciones diferentes, aunque todas son bastante similares.

## Cómo puede ayudar GPT-3

Aquí es donde GPT-3 puede ser especialmente útil. En lugar de tener muchas intenciones muy específicas, cada intención puede ser más amplia y aprovechar un documento de su [Base de Conocimiento](https://en.wikipedia.org/wiki/Knowledge_base). Una Base de Conocimiento (KB, por sus siglas en inglés) es información almacenada como datos estructurados y no estructurados, listos para ser utilizados para análisis o inferencia. Su KB puede estar compuesta de una serie de documentos que explican cómo usar sus productos.

De esta manera, cada intención está asociada con un documento en lugar de una lista de preguntas y una respuesta específica, por ejemplo, una intención para "problemas de inicio de sesión", otra para "cómo suscribirse", etc. Cuando un usuario hace una pregunta sobre el inicio de sesión, podemos pasar el documento "problemas de inicio de sesión" a GPT-3 como información de contexto y generar una respuesta específica a la pregunta del usuario.

<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Cómo podría funcionar un chatbot aprovechando GPT-3. Imagen del autor.</p>
</div>

Este enfoque reduce el número de intenciones que necesitan ser gestionadas y permite respuestas mejor adaptadas a cada pregunta. Además, si el documento asociado con la intención describe diferentes procesos (por ejemplo, un proceso para "inicio de sesión en el sitio web" y otro para "inicio de sesión en la aplicación móvil"), GPT-3 puede preguntar automáticamente al usuario para obtener aclaraciones antes de dar la respuesta final.

## ¿Por qué no podemos pasar toda la KB a GPT-3?

Hoy en día, los LLM como GPT-3 tienen un tamaño máximo de prompt de aproximadamente 4k tokens (para el modelo [`text-davinci-003`](https://beta.openai.com/docs/models/gpt-3)), que es mucho pero no suficiente para alimentar toda la base de conocimientos en un solo prompt. Los LLM tienen un tamaño máximo de prompt por razones computacionales, ya que generar texto con ellos implica una serie de cálculos que aumentan rápidamente a medida que aumenta el tamaño del prompt.

Los futuros LLM pueden no tener esta limitación mientras conservan las capacidades de generación de texto. Sin embargo, por ahora, necesitamos diseñar una solución alrededor de ella.

## Cómo podría funcionar un chatbot con GPT-3

Entonces, la canalización del chatbot podría estar compuesta por dos pasos:

1. Primero, necesitamos seleccionar la intención adecuada para la pregunta del usuario, es decir, necesitamos recuperar el documento correcto de nuestra base de conocimientos.
2. Luego, una vez que tenemos el documento correcto, podemos aprovechar GPT-3 para generar una respuesta apropiada para el usuario. Al hacerlo, necesitaremos crear un buen prompt.

El primer paso se resuelve esencialmente mediante [búsqueda semántica](https://es.wikipedia.org/wiki/B%C3%BAsqueda_sem%C3%A1ntica). Podemos usar modelos pre-entrenados de la biblioteca [`sentence-transformers`](https://www.sbert.net/examples/applications/semantic-search/README.html) y asignar fácilmente una puntuación a cada documento. El documento con la puntuación más alta es el que se utilizará para generar la respuesta del chatbot.

<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3Organized} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Cómo podría funcionar un chatbot aprovechando GPT-3. GPT-3 podría utilizarse para generar una respuesta adecuada aprovechando la información de documentos de la base de conocimientos. Image by the author.</p>
</div>

## Generación de respuestas con GPT-3

Una vez que tenemos el documento correcto, necesitaremos crear una buena indicación (prompt) para ser usada con GPT-3 para generar la respuesta. En los siguientes experimentos, siempre usaremos el modelo `text-davinci-003` con una temperatura de `0.7`.

Para crear la indicación (prompt), experimentaremos con:

- [**Role-prompting**](https://learnprompting.org/docs/basics/roles): una técnica heurística que asigna un rol específico a la IA.
- **Información relevante de la base de conocimientos (KB)**, es decir, el documento recuperado en el paso de búsqueda semántica.
- **Los últimos mensajes intercambiados entre el usuario y el chatbot**. Estos son útiles para mensajes enviados por el usuario donde el contexto completo no está especificado. Veremos un ejemplo de esto más adelante. Echa un vistazo a [este ejemplo](https://learnprompting.org/docs/applied_prompting/build_chatgpt) para ver cómo gestionar conversaciones con GPT-3.
- Por último, **la pregunta del usuario**.

Comencemos nuestra indicación usando la técnica de <span style={{backgroundColor: "#FFF2CC"}}>role-prompting</span>.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios lo mejor que puedas.</span><br/>
</pre>

Comencemos nuestro prompt usando la técnica de <span style={{backgroundColor: "#FFF2CC"}}>solicitud de roles</span>.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios de la mejor manera posible.</span><br/>
</pre>
Luego, supongamos que el paso de búsqueda semántica extrae el siguiente documento de nuestra base de conocimientos. Todos los documentos describen cómo funciona el producto VideoGram, que es un producto imaginario similar a Instagram, pero solo para videos.

<div style={{textAlign: 'left'}}>
  <img src={ImageLogin} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Un documento que explica cómo funciona el inicio de sesión en VideoGram. Imagen del autor.</p>
</div>
Podemos agregar <span style={{backgroundColor: "#FFF2CC"}}>su contenido</span> dentro del prompt de esta manera.

<pre>
    Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios de la mejor manera posible.<br/><br/>

    <span style={{backgroundColor: "#FFF2CC"}}>
    INICIO DE CONTEXTO<br/>
    Iniciar sesión en VideoGram desde el sitio web<br/>
    1. Abre tu navegador web y ve al sitio web de VideoGram.<br/>
    2. Haz clic en el botón "Iniciar sesión" ubicado en la esquina superior derecha de la página.<br/>
    3. En la página de inicio de sesión, ingresa tu nombre de usuario y contraseña de VideoGram.<br/>
    4. Una vez que hayas ingresado tus credenciales, haz clic en el botón "Iniciar sesión".<br/>
    5. Ahora deberías haber iniciado sesión en tu cuenta de VideoGram.<br/>
    <br/>
    Iniciar sesión en VideoGram desde la aplicación móvil<br/>
    1. Abre la aplicación de VideoGram en tu dispositivo móvil.<br/>
    2. En la página principal, toca el botón "Iniciar sesión" ubicado en la esquina inferior derecha. 3. En la página de inicio de sesión, ingresa tu nombre de usuario y contraseña de VideoGram.<br/>
    4. Una vez que hayas ingresado tus credenciales, toca el botón "Iniciar sesión".<br/>
    5. Ahora deberías haber iniciado sesión en tu cuenta de VideoGram.<br/>
    FIN DE CONTEXTO<br/>
    </span>
</pre>
Por último, necesitamos agregar <span style={{backgroundColor: "#FFF2CC"}}>la conversación y la pregunta del usuario</span> al final del prompt, como en el siguiente ejemplo.

<pre>
    Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios de la mejor manera posible.<br/>
    <br/>
    INICIO DE CONTEXTO<br/>
    Iniciar sesión en VideoGram desde el sitio web<br/>
    1. Abre tu navegador web y ve al sitio web de VideoGram.<br/>
    2. Haz clic en el botón "Iniciar sesión" ubicado en la esquina superior derecha de la página.<br/>
    3. En la página de inicio de sesión, ingresa tu nombre de usuario y contraseña de VideoGram.<br/>
    4. Una vez que hayas ingresado tus credenciales, haz clic en el botón "Iniciar sesión".<br/>
    5. Ahora deberías haber iniciado sesión en tu cuenta de VideoGram.<br/>
    <br/>
    Iniciar sesión en VideoGram desde la aplicación móvil<br/>
    1. Abre la aplicación de VideoGram en tu dispositivo móvil.<br/>
    2. En la página principal, toca el botón "Iniciar sesión" ubicado en la esquina inferior derecha. 3. En la página de inicio de sesión, ingresa tu nombre de usuario y contraseña de VideoGram.<br/>
    4. Una vez que hayas ingresado tus credenciales, toca el botón "Iniciar sesión".<br/>
    5. Ahora deberías haber iniciado sesión en tu cuenta de VideoGram.<br/>
    FIN DE CONTEXTO<br/>
<br/>
<span style={{backgroundColor: "#FFF2CC"}}>SKIPPY: ¡Hola, soy Skippy! ¿En qué puedo ayudarte?<br/>
USUARIO: No puedo encontrar el botón de inicio de sesión.<br/>
SKIPPY:</span><br/>
</pre>

Pasando este prompt a GPT-3, obtuve la siguiente respuesta generada:

<pre>
    <span style={{backgroundColor: "#D2F4D3"}}>No hay problema! En el sitio web, el botón de inicio de sesión se encuentra en la esquina superior derecha de la página. En la aplicación móvil, el botón de inicio de sesión se encuentra en la esquina inferior derecha. Hágamelo saber si necesita más ayuda!</span>
</pre>

Observa cómo la información en la respuesta generada proviene del documento de base de conocimiento.

## Desambiguación de preguntas con GPT-3
Intentemos con una frase del usuario más ambigua, como <span style={{backgroundColor: "#FFF2CC"}}>“no puedo iniciar sesión”</span>. Aquí está el prompt completo:

<pre>
    Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios lo mejor que puedas.<br/>
    <br/>
    COMIENZA EL CONTEXTO<br/>
    Iniciar sesión en VideoGram desde el sitio web:<br/>
    1. Abre tu navegador web y ve al sitio web de VideoGram.<br/>
    2. Haz clic en el botón "Iniciar sesión" ubicado en la esquina superior derecha de la página.<br/>
    3. En la página de inicio de sesión, ingresa tu nombre de usuario y contraseña de VideoGram.<br/>
    4. Una vez que hayas ingresado tus credenciales, haz clic en el botón "Iniciar sesión".<br/>
    5. Ahora deberías haber iniciado sesión en tu cuenta de VideoGram.<br/>
    <br/>
    Iniciar sesión en VideoGram desde la aplicación móvil:<br/>
    1. Abre la aplicación VideoGram en tu dispositivo móvil.<br/>
    2. En la página principal, toca el botón "Iniciar sesión" ubicado en la esquina inferior derecha.<br/>
    3. En la página de inicio de sesión, ingresa tu nombre de usuario y contraseña de VideoGram.<br/>
    4. Una vez que hayas ingresado tus credenciales, toca el botón "Iniciar sesión".<br/>
    5. Ahora deberías haber iniciado sesión en tu cuenta de VideoGram.<br/>
    TERMINA EL CONTEXTO<br/>
    <br/>
    SKIPPY: ¡Hola, soy Skippy! ¿Cómo puedo ayudarte?<br/>
    USUARIO: <span style={{backgroundColor: "#FFF2CC"}}>No puedo iniciar sesión</span><br/>
    SKIPPY:<br/>
</pre>
GPT-3 intentará entender mejor cuál es el problema del usuario.

<pre>
    <span style={{backgroundColor: "#D2F4D3"}}>Lo siento mucho. ¿Puede decirme si está intentando iniciar sesión a través del sitio web de VideoGram o de la aplicación móvil?</span>
</pre>
A continuación, aquí está cómo continúa la conversación completa. El prompt completo está oculto para una mejor visibilidad.

<pre>
    USER: No puedo iniciar sesión.<br/>
    SKIPPY: Lamento escuchar eso. ¿Puede decirme si está intentando iniciar sesión a través del sitio web o de la aplicación móvil de VideoGram?<br/>
    USER: Aplicación móvil<br/>
    <span style={{backgroundColor: "#D2F4D3"}}>SKIPPY: De acuerdo, no hay problema. Para iniciar sesión a través de la aplicación móvil, abra la aplicación de VideoGram en su dispositivo móvil. En la página principal, toque el botón "Iniciar sesión" ubicado en la esquina inferior derecha. En la página de inicio de sesión, ingrese su nombre de usuario y contraseña de VideoGram. Una vez que haya ingresado sus credenciales, toque el botón "Iniciar sesión". Ahora debería haber iniciado sesión en su cuenta de VideoGram. Por favor, avíseme si necesita alguna otra ayuda.</span><br/>
</pre>

GPT-3 puede manejar la disambiguación, siempre que tenga la información contextual adecuada.

## Problemas al generar respuestas con GPT-3

Sin embargo, existe un problema en generar respuestas con GPT-3.

Si le preguntamos "¿Es la aplicación móvil gratuita?" a GPT-3 pasando el documento de inicio de sesión como contexto, a menudo obtendríamos una respuesta como "Sí, la aplicación móvil de VideoGram es gratuita para descargar y usar", incluso si dicha información no está contenida en la información de contexto. ¡Generar información falsa es muy malo para los chatbots de servicio al cliente!

GPT-3 rara vez genera información falsa cuando la respuesta a la pregunta del usuario se puede encontrar en el contexto. Como las preguntas de los usuarios a menudo son textos cortos y ambiguos, no podemos confiar en el paso de búsqueda semántica para siempre recuperar un documento correcto, y por lo tanto siempre somos vulnerables a la generación de información falsa.

## conclusión

En conclusión, GPT-3 es muy útil para crear chatbots de conversación y es capaz de responder a una serie de preguntas específicas en función de la información contextual insertada en la solicitud. Sin embargo, es difícil hacer que el modelo produzca respuestas utilizando solo la información del contexto, ya que el modelo tiende a alucinar (es decir, generar nueva información, potencialmente falsa). Generar información falsa es un problema de diferente gravedad según el caso de uso.

Written by [Fabio Chiusano](https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/).
