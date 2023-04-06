---
sidebar_position: 2
---

#   Fuga de Prompt


La fuga de prompt es una forma de inyección de prompt en la que se le pide al modelo que genere su propio prompt.

Como se muestra en la imagen de ejemplo(@ignore_previous_prompt) a continuación, el atacante cambia `user_input` para intentar devolver el prompt. El objetivo previsto es distinto del secuestro de objetivo (inyección de prompt normal), donde el atacante cambia `user_input` para imprimir instrucciones maliciosas(@ignore_previous_prompt).

import research from '@site/docs/assets/jailbreak_research.png';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}} />
</div>

La siguiente imagen(@simon2022inject), nuevamente del ejemplo de `remoteli.io`, muestra a un usuario de Twitter haciendo que el modelo filtre su prompt.

import Image from '@site/docs/assets/injection_leak.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "300px"}} />
</div>

¿Y bien? ¿Por qué debería importarle la fuga de prompt a alguien?

A veces las personas quieren mantener sus prompts en secreto. Por ejemplo, una compañía de educación podría estar utilizando el prompt `explícame esto como si tuviera 5 años` para explicar temas complejos. Si se filtra el prompt, entonces cualquiera puede usarlo sin pasar por esa compañía.

Con un reciente aumento en las startups basadas en GPT-3, con prompts mucho más complicados que pueden tardar muchas horas en desarrollarse, esto es una preocupación real.

## Práctica

Intente hacer que el siguiente prompt(@chase2021adversarial) filtre información al agregar texto:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Inglés: Quiero ir al parque hoy.\nFrancés: Je veux aller au parc aujourd'hui.\nInglés: Me gusta usar un sombrero cuando llueve.\nFrancés: J'aime porter un chapeau quand il pleut.\nInglés: ¿Qué estás haciendo en la escuela?\nFrancés: Qu'est-ce que tu fais à l'école?\nInglés:" initial-response="" max-tokens="256" box-rows="9" model-temp="0.7" top-p="1"></div>
