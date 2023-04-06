---
sidebar_position: 2
locale: en-us
---

#   Preguntas Multiple Choice 
¡Vamos a utilizar GPT para resolver una pregunta de LSAT 1!

El LSAT (siglas de "Law School Admission Test" en ingles) es un examen estandarizado utilizado por las escuelas de derecho en los Estados Unidos para evaluar las habilidades de pensamiento crítico y razonamiento analítico de los estudiantes potenciales.

A continuación se muestra un ejemplo de pregunta de LSAT. Considere cómo respondería y su razonamiento.

```md
<!-- highlight-start -->
John de Worcester, un monje inglés, registró la observación, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco días después, se observó una brillante aurora boreal en el sur de Corea. La actividad de las manchas solares suele ir seguida de la aparición de una aurora boreal, después de un lapso de tiempo que promedia cinco días. Por lo tanto, la observación coreana ayuda a confirmar la observación de John de Worcester. ¿Cuál de las siguientes opciones, si es verdadera, refuerza más el argumento?
<!-- highlight-end -->

a) A veces puede producirse una aurora boreal incluso cuando no ha habido una actividad significativa de manchas solares en la semana anterior.
b) Las fuentes chinas registraron la observación de manchas solares más de 1000 años antes que John de Worcester.
c) Solo una actividad intensa de las manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea.
d) Debido a que es imposible ver las manchas solares a simple vista en condiciones típicas de luz del día, la observación registrada por John de Worcester habría tenido lugar bajo condiciones climáticas inusuales como la niebla o nubes delgadas.
e) El relato de John de Worcester incluía un dibujo de las manchas solares, que podría ser la primera ilustración de la actividad de las manchas solares.
```
<details>
<summary>La respuesta correcta es...</summary>
c) Solo una actividad intensa de las manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea. 
</details>

Intente pegar el problema en el cuadro de la demostración a continuación:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="John of Worcester, un monje inglés, registró la aparición, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco días después, se observó una brillante aurora boreal (luces del norte) en el sur de Corea. La actividad de las manchas solares suele ir seguida de la aparición de una aurora boreal, después de un período de tiempo que en promedio dura cinco días. Por lo tanto, la observación en Corea ayuda a confirmar la observación de John de Worcester. ¿Cuál de las siguientes opciones, si es cierta, fortalece más el argumento?
a) A veces puede producirse una aurora boreal incluso cuando no ha habido actividad significativa de manchas solares en la semana anterior.
b) Las fuentes chinas registraron la aparición de manchas solares más de 1000 años antes que John de Worcester.
c) Solo una actividad intensa de manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea.
d) Debido a que es imposible ver las manchas solares a simple vista en condiciones típicas de luz del día, la observación registrada por John de Worcester habría tenido lugar bajo condiciones meteorológicas inusuales como la niebla o nubes delgadas.
e) El relato de John de Worcester incluyó un dibujo de las manchas solares, que podría ser la ilustración más temprana de la actividad de las manchas solares." initial-response="e) El relato de John of Worcester incluyó un dibujo de las manchas solares, que podría ser la ilustración más temprana de la actividad de las manchas solares." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

<p></p>

<details scheme='warning'>
<summary>¿Por qué es diferente mi respuesta?</summary>
Tu respuesta podría ser diferente debido a:

1) Actualizaciones en el modelo subyacente, GPT-3
2) Aleatoriedad en el proceso de generación de texto. Podemos hacer que la salida sea más consistente configurando la <a href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature">temperatura</a> a 0.

</details>

El modelo falló. ¿Significa eso que el modelo es incapaz de responder este tipo de pregunta? No necesariamente. Vamos a profundizar en técnicas que podemos utilizar para mejorar los resultados del modelo.

## La frase mágica
El prompt estándar que usamos arriba da poca información sobre el "razonamiento" de la salida de GPT. Podemos intentar agregar la frase "vamos a explicar paso a paso" así:

```markdown
...
e) La cuenta de John of Worcester incluía un dibujo de las manchas solares, que podría ser la ilustración más antigua de la actividad de manchas solares.

pensamiento paso a paso
```
Esta frase aumentará la verbosidad del modelo. Podrías obtener una salida como esta:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Juan de Worcester, un monje inglés, registró la observación, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco días después, se observó una aurora boreal (luces del norte) brillante en el sur de Corea. Por lo general, la actividad de las manchas solares se sigue de la aparición de una aurora boreal, después de un período de tiempo que en promedio es de cinco días. Por lo tanto, la observación coreana ayuda a confirmar la observación de Juan de Worcester. ¿Cuál de las siguientes opciones, si es cierta, fortalece más el argumento?
a) A veces puede ocurrir una aurora boreal incluso cuando no ha habido actividad significativa de manchas solares en la semana anterior.
b) Las fuentes chinas registraron la observación de manchas solares más de 1000 años antes que Juan de Worcester.
c) Solo una actividad intensa de manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea.
d) Debido a que es imposible ver manchas solares a simple vista en condiciones de luz solar típicas, la observación registrada por Juan de Worcester habría tenido lugar bajo condiciones climáticas inusuales, como la niebla o las nubes delgadas.
e) El relato de Juan de Worcester incluía un dibujo de las manchas solares, que podría ser la primera ilustración de la actividad de manchas solares. Vamos a explicar paso a paso" initial-response="A) Esta opción de respuesta es incorrecta. No fortalece el argumento, ya que en su lugar presenta una explicación alternativa para la aurora boreal.
B) Esta opción de respuesta es incorrecta. No fortalece el argumento, ya que es irrelevante para la conexión entre la actividad de las manchas solares y las observaciones de auroras boreales.
C) Esta opción de respuesta es correcta. Fortalece el argumento al sugerir que la actividad de las manchas solares registrada por Juan de Worcester fue la causa de la aurora boreal que se observó en Corea cinco días después.
D) Esta opción de respuesta es incorrecta. No fortalece el argumento, ya que es irrelevante para la conexión entre la actividad de las manchas solares y las observaciones de auroras boreales.
E) Esta opción de respuesta es incorrecta. No fortalece el argumento, ya que es irrelevante para la conexión entre la actividad de las manchas solares y las observaciones de auroras boreales.
La respuesta correcta es C) Solo una actividad intensa de manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

<p></p>

:::info
Observe cómo el modelo razona a través del problema paso a paso.

Este comportamiento se denomina "Cadena de Pensamiento" (@wei2022chain) (CoT, siglas de "Chain of Thought" en ingles). El modelo genera declaraciones de manera secuencial para llegar a una respuesta. Este proceso es similar al concepto de pensamiento de Sistema 2 (del libro [Thinking Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)); El modelo se predispone a utilizar el pensamiento del sistema 1, pero puede encadenar el pensamiento del sistema 1 para llegar a una respuesta más metodológica.
:::

## Mejoras

Aquí hay algunas variaciones en nuestra plantilla básica para preguntas de opción múltiple:

### Reordenar los elementos de la pregunta

Podemos reordenar los elementos de la pregunta

```
...
a) El informe de John of Worcester incluyó un dibujo de las manchas solares, lo que podría ser la primera ilustración de actividad de manchas solares.
b) Debido a que es imposible ver manchas solares a simple vista en condiciones de luz del día típicas, el avistamiento registrado por John of Worcester habría tenido lugar bajo condiciones climáticas inusuales como la niebla o las nubes delgadas.
...
```

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Juan de Worcester, un monje inglés, registró el avistamiento, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco días después se observó una aurora boreal brillante en el sur de Corea. La actividad de las manchas solares suele ir seguida de la aparición de una aurora boreal, después de un período de tiempo que en promedio es de cinco días. Por lo tanto, el avistamiento coreano ayuda a confirmar el avistamiento de John of Worcester. ¿Cuál de los siguientes, si es verdadero, fortalece más el argumento?
a) El informe de John of Worcester incluyó un dibujo de las manchas solares, lo que podría ser la primera ilustración de actividad de manchas solares.
b) Debido a que es imposible ver manchas solares a simple vista en condiciones de luz del día típicas, el avistamiento registrado por John of Worcester habría tenido lugar bajo condiciones climáticas inusuales como la niebla o las nubes delgadas.
c) A veces puede ocurrir una aurora boreal incluso cuando no ha habido una actividad significativa de manchas solares en la semana anterior.
d) Las fuentes chinas registraron el avistamiento de manchas solares más de 1000 años antes que John of Worcester.
e) Solo una actividad fuerte de manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea. 
Explicación paso a paso" initial-response="A) Debilita - Esta opción debilita el argumento porque implica que la aurora boreal no necesariamente tuvo que ser causada por la actividad de manchas solares, que es el argumento que el autor intenta hacer. B) No afecta - Esta opción no afecta el argumento porque no está relacionada con la conexión entre las manchas solares y la aparición de la aurora boreal. C) Fortalece - Esta opción fortalece el argumento porque sugiere que la única forma en que una aurora boreal podría ser vista en Corea es si hubiera habido una actividad fuerte de manchas solares, que es lo que observó John of Worcester. D) Debilita - Esta opción debilita el argumento porque implica que las condiciones bajo las cuales John of Worcester observó las manchas solares pueden no haber sido confiables, lo que podría poner en duda la precisión de su avistamiento. E) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

### Reformulación de la pregunta


Recordemos que la pregunta original era esta:
```
¿Cuál de las siguientes opciones, si es verdadera, refuerza más el argumento?
```

Podemos cambiar la pregunta a esta:
```
Identifique cada opción como refuerza, debilita o no impacta el argumento.
```
para obtener una mayor comprensión de las opciones de respuesta. 


<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="John of Worcester, un monje inglés, registró el avistamiento, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco días después, se observó una aurora boreal brillante en el sur de Corea. La actividad de las manchas solares suele ir seguida de la aparición de una aurora boreal, después de un lapso de tiempo que promedia cinco días. Por lo tanto, el avistamiento coreano ayuda a confirmar el avistamiento de John of Worcester. ¿Cuál de las siguientes opciones, si es verdadera, fortalece más el argumento?
a) Una aurora boreal a veces puede ocurrir incluso cuando no ha habido una actividad significativa de manchas solares en la semana anterior. (No impacta el argumento)
b) Las fuentes chinas registraron el avistamiento de manchas solares más de 1000 años antes que John of Worcester. (Debilita el argumento, ya que sugiere que el conocimiento sobre las manchas solares y las auroras boreales no es exclusivo de John of Worcester)
c) Solo una actividad intensa de manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea. (Fortalece el argumento, ya que sugiere que la aparición de la aurora boreal en Corea fue el resultado de las manchas solares avistadas por John of Worcester)
d) Debido a que es imposible ver las manchas solares a simple vista bajo condiciones típicas de luz del día, el avistamiento registrado por John of Worcester habría tenido lugar bajo condiciones climáticas inusuales, como la niebla o nubes delgadas. (No impacta el argumento)
e) El relato de John of Worcester incluía un dibujo de las manchas solares, que podría ser la ilustración más temprana de la actividad de las manchas solares. (No impacta el argumento)" initial-response="A) Debilidad - Esta opción debilita el argumento porque sugiere que la aurora boreal no necesariamente tuvo que ser causada por la actividad de las manchas solares, que es el argumento que el autor intenta hacer.
B) No impacta - Esta opción no afecta al argumento porque no está relacionada con la conexión entre las manchas solares y la aparición de la aurora boreal.
Fortalece - Esta opción fortalece el argumento porque sugiere que la única forma en que una aurora boreal podría ser vista en Corea es si hubiera habido una fuerte actividad de manchas solares, que es lo que John of Worcester observó.
Debilidad - Esta opción debilita el argumento porque sugiere que las condiciones en las que John of Worcester observó las manchas solares pueden no haber sido confiables, lo que podría poner en duda la precisión de su avistamiento.
B) No impacta - Esta opción no afecta al argumento porque no está relacionada con la conexión entre las manchas solares y la aparición de la aurora boreal." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>


### Agregar contexto adicional

Aquí hay un ejemplo de un problema que se puede resolver fácilmente usando el teorema de Bayes:

```
Considere dos pruebas médicas, A y B, para un virus. La prueba A es 90% efectiva para reconocer el virus cuando está presente, pero tiene una tasa de falsos positivos del 5% (lo que indica que el virus está presente cuando no lo está). La prueba B es 95% efectiva para reconocer el virus, pero tiene una tasa de falsos positivos del 10%. Las dos pruebas utilizan métodos independientes para identificar el virus. El virus es transportado por el 2% de todas las personas.
(a) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba A. ¿Cuál es la probabilidad de que la persona realmente esté infectada con el virus dado que la Prueba A dio positivo? (2 puntos)
(b) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba B. ¿Cuál es la probabilidad de que la persona realmente esté infectada con el virus dado que la Prueba B dio positivo? (2 puntos)
(c) Supongamos que una persona es sometida a la prueba del virus utilizando ambas pruebas. ¿Cuál es la probabilidad de que la persona realmente esté infectada con el virus dado que ambas pruebas dieron positivo? (2 puntos)
```

Intentemos esto con GPT:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Se consideran dos pruebas médicas, A y B, para un virus. La prueba A es 90% efectiva para reconocer el virus cuando está presente, pero tiene una tasa de falsos positivos del 5% (indicando que el virus está presente cuando no lo está). La prueba B es 95% efectiva para reconocer el virus, pero tiene una tasa de falsos positivos del 10%. Las dos pruebas utilizan métodos independientes para identificar el virus. El virus es portado por el 2% de todas las personas.
(a) Suponga que una persona es examinada para el virus usando solo la prueba A. ¿Cuál es la probabilidad de que la persona realmente esté portando el virus dado que la prueba A dio positivo?
(b) Suponga que una persona es examinada para el virus usando solo la prueba B. ¿Cuál es la probabilidad de que la persona realmente esté portando el virus dado que la prueba B dio positivo?
(c) Suponga que una persona es examinada para el virus usando ambas pruebas. ¿Cuál es la probabilidad de que la persona realmente esté portando el virus dado que ambas pruebas dieron positivo?" initial-response="(a) La probabilidad de que la persona realmente esté portando el virus dado que la prueba A dio positiva es del 90%. \n\n(b) La probabilidad de que la persona realmente esté portando el virus dado que la prueba B dio positiva es del 95%.\n\n(c) La probabilidad de que la persona realmente esté portando el virus dado que ambas pruebas dieron positivas es del 99.9%." max-tokens="256" box-rows="10" model-temp="0" top-p="0"></div>

¡El resultado es **incorrecto**!

Si agregamos un poco de contexto, como por ejemplo:

```
...
Explicaremos paso a paso. La fórmula para Bayes es
```
El modelo utilizará la fórmula correcta, Bayes.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Considera dos pruebas médicas, A y B, para un virus. La prueba A es efectiva en un 90% para reconocer el virus cuando está presente, pero tiene una tasa de falsos positivos del 5% (indicando que el virus está presente cuando no lo está). La prueba B es efectiva en un 95% para reconocer el virus, pero tiene una tasa de falsos positivos del 10%. Las dos pruebas utilizan métodos independientes para identificar el virus. El virus es portado por el 2% de todas las personas.\n(a) Supongamos que una persona es examinada para el virus utilizando solo la Prueba A. ¿Cuál es la probabilidad de que la persona realmente esté portando el virus dado que la Prueba A dio positiva? (2 puntos)\n(b) Supongamos que una persona es examinada para el virus utilizando solo la Prueba B. ¿Cuál es la probabilidad de que la persona realmente esté portando el virus dado que la Prueba B dio positiva? (2 puntos)\n(c) Supongamos que una persona es examinada para el virus utilizando ambas pruebas. ¿Cuál es la probabilidad de que la persona realmente esté portando el virus dado que ambas pruebas dieron positivo? (2 puntos)\n\nExplicaremos paso a paso. Proporcione la expresión numérica como respuesta, no proporcione un número. La fórmula de Bayes es" initial-response="P(A|B) = P(B|A) * P(A) / P(B)\n\n\n(a) P(Virus|Test A Positivo) = P(Test A Positivo|Virus) * P(Virus) / P(Test A Positivo) = (0.9 * 0.02) / (0.9 * 0.02 + 0.05 * 0.98)\n\n(b) P(Virus|Test B Positivo) = P(Test B Positivo|Virus) * P(Virus) / P(Test B Positivo) = (0.95 * 0.02) / (0.95 * 0.02 + 0.1 * 0.98)\n\n(c) P(Virus|Test A Positivo y Test B Positivo) = P(Test A Positivo y Test B Positivo|Virus) * P(Virus) / P(Test A Positivo y Test B Positivo) = (0.9 * 0.95 * 0.02) / (0.9 * 0.95 * 0.02 + 0.05 * 0.1 * 0.98)" max-tokens="256" box-rows="10" model-temp="0" top-p="0"></div>

¡Lo cual es **correcto**!

:::warning
El modelo GPT no realiza bien las operaciones aritméticas. Es posible que notes que la expresión escrita está correcta, pero el número calculado no lo es.

Prueba agregar la frase: `Da la expresión como respuesta, no un número` para evitar el cálculo.


Tal vez te interese conocer [MRKL](https://learnprompting.org/docs/advanced_applications/mrkl)(@karpas2022mrkl), el paradigma que combina GPT con herramientas externas como calculadoras, para resolver este tipo de problema.
:::

Written by [zeyuzhao](https://github.com/Zeyuzhao).