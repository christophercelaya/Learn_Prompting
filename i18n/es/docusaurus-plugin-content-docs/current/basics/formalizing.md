---
sidebar_position: 7
---

#   Formalización de Prompts

import FormalPrompt from '@site/docs/assets/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>

Ya hemos cubierto varios tipos de prompts, así como formas de combinarlas. Esta página le proporcionará términos para explicar los distintos tipos de prompts. Aunque ha habido enfoques para formalizar el discurso en torno a la ingeniería de prompt(@white2023prompt), el campo está en constante cambio, por lo que le proporcionaremos la información suficiente para empezar.

## Partes de un Prompt

There are a few different parts of a prompt that you will see over and over again. They are roughly:
Hay algunas partes diferentes de un prompt que verá una y otra vez. Son aproximadamente:

- Un rol
- Una instrucción/tarea
- Una pregunta
- Contexto
- Ejemplos (pocas muestras)

En las páginas anteriores hemos cubierto los roles, las instrucciones y los ejemplos. Una pregunta es simplemente una pregunta. (Por ejemplo, `¿cuál es la capital de Francia?`). El contexto es cualquier información relevante que deseas modelar para utilizar al responder la pregunta o realizar la instrucción.

No todas estas opciones aparecen en todos los prompts, y cuando algunas aparecen, no hay un orden estándar para ellas. Por ejemplo, las siguientes dos indicaciones, cada una que contiene un rol, una instrucción y contexto, harán aproximadamente lo mismo:

```text
Eres un médico. Lee esta historia clínica y predice los riesgos para el paciente:

1 de enero de 2000: Fractura de brazo derecho al jugar baloncesto. Tratada con un yeso.
15 de febrero de 2010: Diagnóstico de hipertensión. Prescripción de lisinopril.
10 de septiembre de 2015: Desarrolló neumonía. Tratado con antibióticos y se recuperó por completo.
1 de marzo de 2022: Sufrió una conmoción cerebral en un accidente automovilístico. Fue admitido en el hospital y monitoreado durante 24 horas.
```

```text
1 de enero de 2000: Fractura de brazo derecho al jugar baloncesto. Tratada con un yeso.
15 de febrero de 2010: Diagnóstico de hipertensión. Prescripción de lisinopril.
10 de septiembre de 2015: Desarrolló neumonía. Tratado con antibióticos y se recuperó por completo.
1 de marzo de 2022: Sufrió una conmoción cerebral en un accidente automovilístico. Fue admitido en el hospital y monitoreado durante 24 horas.

Eres un médico. Lee esta historia clínica y predice los riesgos para el paciente:
```

Sin embargo, es probable que el segundo prompt sea preferible ya que la acción a realizar es la última parte del prompt. Esto es bueno porque el LLM es menos probable que simplemente escriba más contexto en lugar de seguir la instrucción. Por ejemplo, dada la primera instrucción, el LLM podría agregar una nueva línea: `15 de marzo de 2022: Se programó una cita de seguimiento con un neurólogo para evaluar el progreso de la recuperación de la conmoción cerebral`.

## Un Prompt "estándar"

Hemos oído hablar de varios formatos de prompts hasta ahora. Ahora, volveremos rápidamente al principio y definiremos un prompt "estándar". Siguiendo a Kojima et al. (@kojima2022large), nos referiremos a los prompts que consisten únicamente en una pregunta como prompts "estándar". También consideramos los prompts que consisten únicamente en una pregunta en formato de preguntas y respuestas (QA) como prompts "estándar".

#### ¿Por qué me debe importar?

Muchos artículos/papers que referenciamos utilizan este término. Lo estamos definiendo para poder discutir nuevos tipos de prompts en contraste con los prompts estándar.

### Dos ejemplos de Prompts "estándar":


_Prompts estándar_
```
¿Cuál es la capital de Francia?
```

_Prompts estándar en formato QA_
```
Q: ¿Cuál es la capital de Francia?

A:
```

## Few Shot Standard Prompts

Los few shot standard prompts(@liu2021pretrain) son simplemente prompts estándar que tienen _ejemplares_ en ellas. Los ejemplares son ejemplos de la tarea que el prompt está tratando de resolver, los cuales se incluyen en el mismo prompt (@brown2020language). En investigación, a veces se hace referencia a los few shot standard prompts simplemente como prompts estándar (aunque intentamos no hacerlo en esta guía).

### Dos ejemplos de few shot standard prompts:

_Few Shot Standard Prompt_

```
¿Cuál es la capital de España?
Madrid
¿Cuál es la capital de Italia?
Roma
¿Cuál es la capital de Francia?
```

_Few Shot Standard Prompt en formato QA_
```
Q: ¿Cuál es la capital de España?
A: Madrid
Q: ¿Cuál es la capital de Italia?
A: Roma
Q: ¿Cuál es la capital de Francia?
A:
```

Los Few shot prompts facilitan el aprendizaje "few shot", también conocido como aprendizaje "en contexto", que es la habilidad de aprender sin actualizaciones de parámetros (@zhao2021calibrate).