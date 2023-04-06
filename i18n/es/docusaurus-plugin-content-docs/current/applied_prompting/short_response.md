---
sidebar_position: 3
---

#   preguntas de discusión

import Auto from '@site/docs/assets/short_content_auto.png';

Con el estímulo adecuado, GPT-3 es muy capaz de escribir respuestas de formato corto. Para demostrar esto, analizaremos la **resolución de preguntas de discusión**, una tarea común semanal en muchos cursos universitarios. Una respuesta a una pregunta de discusión suele ser de aproximadamente 100-700 palabras. El contenido más largo puede ser un poco más difícil, ya que los LLM tienen memoria limitada y tienen dificultades para comprender el panorama general de lo que están escribiendo(@jin2022plot).

Veamos un ejemplo de una pregunta de discusión básica:

> _"¿Cuáles son los problemas ambientales más urgentes que enfrenta nuestro planeta hoy en día y qué medidas pueden tomar los individuos para ayudar a abordar estos problemas?"_

Podemos convertir esto en un estímulo simple para GPT-3 al agregar <span style={{backgroundColor: "#FFF2CC"}}>Responde a lo siguiente:</span> antes.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Responde a lo siguiente:</span><br/>
    ¿Cuáles son los problemas ambientales más urgentes que enfrenta nuestro planeta hoy en día y qué medidas pueden tomar los individuos para ayudar a abordar estos problemas?
</pre>

Los resultados generados con este estímulo no son consistentes, y algunos son solo una o dos frases. Una respuesta típica a una discusión debería tener varios párrafos, por lo que estos resultados no son ideales. Un buen estímulo debe dar **instrucciones específicas sobre el formato y el contenido**. Es importante eliminar la ambigüedad en el lenguaje para mejorar la consistencia y calidad. Aquí hay un mejor estímulo.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Escribe un ensayo altamente detallado con párrafos de introducción, cuerpo y conclusión que responda a lo siguiente:</span><br/>
    ¿Cuáles son los problemas ambientales más urgentes que enfrenta nuestro planeta hoy en día y qué medidas pueden tomar los individuos para ayudar a abordar estos problemas?
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="ejemplo"></iframe>

En promedio, el segundo estímulo genera salidas más largas con una mejor estructura. El uso del término 'ensayo' en el estímulo fue intencional, ya que GPT-3 puede comprender la definición de un ensayo y, por lo tanto, es más probable que genere respuestas coherentes y estructuradas.

### Muchas preguntas de discusión no son efectivas para estimular.

> _"¿Fue la Guerra Civil un conflicto sobre la expansión? ¿Estás de acuerdo o en desacuerdo y por qué?"_

Aquí hay una pregunta de discusión real de un curso de historia universitaria. Esto no está redactado correctamente y es demasiado amplio. **Para obtener buenas respuestas de discusión, es necesario reformular la pregunta en una consigna bien definida.** Una consigna bien definida para la pregunta de discusión anterior podría ser:

> _"Explica las causas de la Guerra Civil y si la expansión desempeñó un papel en el conflicto. Incluye evidencia para respaldar tu argumento."_

Ahora podemos agregar formato y direcciones de contexto.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Escribe una respuesta de discusión altamente detallada, en la estructura de un ensayo, respondiendo a la siguiente consigna:</span><br/>
    Explica las causas de la Guerra Civil y si la expansión desempeñó un papel en el conflicto. <br/>Incluye evidencia para respaldar tu argumento.
</pre>

### Automatizar la reformulación de consignas bien definidas con GPT-3

El ejemplo de reformulación anterior fue generado con [ChatGPT](https://openai.com/blog/chatgpt/) de OpenAI.

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}} />
</div>

### Iteración

Después de crear una pregunta de discusión efectiva, ahora debes refinar los resultados que genere GPT-3. Esto puede implicar ajustar la salida para que se ajuste a ciertas restricciones como la cantidad de palabras, o combinar conceptos de diferentes resultados generados.

Un método simple para iterar es generar múltiples resultados y revisarlos para comprender los conceptos que utiliza GPT-3 y la estructura a la que se adhiere. Una vez evaluados los resultados, puedes seleccionar los más adecuados y combinarlos en una respuesta cohesiva.

Otra forma de iterar es comenzar y luego **expandir paso a paso**. Esto requiere más de una pregunta: una pregunta inicial para escribir el párrafo inicial o algo así, y luego otras preguntas para expandir lo que ya se ha escrito.

Aquí hay una posible pregunta de discusión filosófica:

> _"¿La matemática es inventada o descubierta? Usa un razonamiento cuidadoso para explicar tu respuesta."_

Agrega una pregunta simple como esta:

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Escribe un párrafo inicial respondiendo a lo siguiente:</span>
    <br/>¿La matemática es inventada o descubierta? Usa un razonamiento cuidadoso para explicar tu respuesta.
</pre>

Generé algunas respuestas y encontré una que me gustó:

<pre>
    <span style={{backgroundColor: "#D2F4D3"}}>Hay mucho debate entre filósofos y matemáticos sobre si la matemática es inventada o descubierta. 
    <br/>Algunos argumentan que los conceptos y principios matemáticos existen independientemente de las mentes humanas 
    <br/>y, por lo tanto, se pueden considerar descubiertos en lugar de inventados. Por ejemplo, el concepto de números, 
    <br/>relaciones y formas geométricas se observan en el mundo natural y se pueden abstraer y estudiar de manera sistemática.</span>
</pre>

Este es un buen comienzo. Luego seguí con otra pregunta para expandir:

<pre>
<span style={{backgroundColor: '#FFF2CC'}}>Estoy escribiendo un ensayo corto detallado respondiendo a lo siguiente:</span> 
<br/>¿La matemática es inventada o descubierta? Usa un razonamiento cuidadoso para explicar tu respuesta. 
<span style={{backgroundColor: '#FFF2CC'}}><p/>Esto es lo que tengo hasta ahora:</span> Hay mucho debate entre filósofos y matemáticos sobre si la matemática es inventada o descubierta. 
<br/>Algunos argumentan que los conceptos y principios matemáticos existen independientemente de las mentes humanas 
<br/>y, por lo tanto, se pueden considerar descubiertos en lugar de inventados. Por ejemplo, el concepto de números, 
<br/>relaciones y formas geométricas se observan en el mundo natural y se pueden abstraer y estudiar de manera sistemática. 
<p/><span style={{backgroundColor: '#FFF2CC'}}>Escribe el siguiente párrafo de mi ensayo.</span>
</pre>

Prueba esta pregunta de expansión con el demo a continuación (necesitarás tu clave de API de OpenAI)

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Estoy escribiendo un ensayo corto detallado en respuesta al siguiente tema: \n¿Las matemáticas son inventadas o descubiertas? Usa un razonamiento cuidadoso para explicar tu respuesta. \n\nEsto es lo que tengo hasta ahora: Existe mucho debate entre filósofos y matemáticos sobre si las matemáticas son inventadas o descubiertas. Algunos argumentan que los conceptos y principios matemáticos existen independientemente de las mentes humanas y, por lo tanto, pueden considerarse descubiertos en lugar de inventados. Por ejemplo, el concepto de números, proporciones y formas geométricas se observa en el mundo natural y se pueden abstraer y estudiar de manera sistemática. \n\nEscribe el siguiente párrafo de mi ensayo." initial-response="Por otro lado, algunos argumentan que las matemáticas son en gran parte una invención de la mente humana. Los principios matemáticos se basan en el razonamiento lógico, que es una característica de la mente humana. Por ejemplo, la geometría euclidiana se basa en axiomas y postulados abstractos, que se aceptan como verdaderos sin prueba. Por lo tanto, se puede argumentar que la geometría es una invención de la mente humana en lugar de un descubrimiento. De manera similar, las fórmulas y ecuaciones matemáticas se usan para modelar y predecir fenómenos físicos, que son nuevamente el resultado del razonamiento humano." max-tokens="256" box-rows="11" model-temp="0.7" top-p="1"></div>
<br/>

Generé algunas expansiones con esta instrucción y seleccioné una que me gustó para obtener el siguiente resultado final:

<pre>
    Existe mucho debate entre filósofos y matemáticos sobre si las 
    <br/>matemáticas son inventadas o descubiertas. Algunos argumentan que los conceptos y principios 
    <br/>matemáticos existen independientemente de las mentes humanas y, por lo tanto, pueden considerarse 
    <br/>descubiertos en lugar de inventados. Por ejemplo, el concepto de números, proporciones y formas 
    <br/>geométricas se observa en el mundo natural y se pueden abstraer y estudiar de manera sistemática.
    <span style={{backgroundColor: "#D2F4D3"}}>
    <br/>
    <br/>Por otro lado, algunos argumentan que las matemáticas son en gran parte una invención de la mente 
    <br/>humana. Los principios matemáticos se basan en el razonamiento lógico, que es una característica de la 
    <br/>mente humana. Por ejemplo, la geometría euclidiana se basa en axiomas y postulados abstractos, que se 
    <br/>aceptan como verdaderos sin prueba. Por lo tanto, se puede argumentar que la geometría es una invención 
    <br/>de la mente humana en lugar de un descubrimiento. De manera similar, las fórmulas y ecuaciones matemáticas 
    <br/>fenómenos, que son nuevamente el resultado del razonamiento humano.
    </span>
</pre>

Usando expansion prompts, podemos escribir de manera incremental e iterar en cada paso. Esto es útil cuando necesitas **producir una salida de mayor calidad y quieres modificar los pasos incrementales**.

Written by [jayo78](https://twitter.com/jayo782).
