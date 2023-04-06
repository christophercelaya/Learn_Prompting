---
sidebar_position: 60
---

#   Diferentes Estilos de Escritura

Las AIs como [ChatGPT](https://chat.openai.com/chat) son conocidas por escribir ensayos y artículos de blog en un abrir y cerrar de ojos. Pero a menudo, los artículos que producen son genéricos y sin chispa. Necesitas hacer algo extra para darle un poco de espíritu o chispa a las palabras.
Una de las formas más rápidas de lograrlo es especificar un estilo de escritura o mencionar el nombre de un autor famoso en la indicación.
Digamos que quieres un párrafo sobre la importancia de la amistad.
Una indicación genérica como "Escríbeme un párrafo sobre la importancia de la amistad" producirá una respuesta genérica por parte de ChatGPT.

import friendship from '@site/docs/assets/basic_applications/Generic_Friendship.png';
import friendship_informal from '@site/docs/assets/basic_applications/Friendship_Informal.png';
import friendship_mark from '@site/docs/assets/basic_applications/Friendship_Mark_Twain.png';
import friendship_chris from '@site/docs/assets/basic_applications/Friendship_Chris_Rock.png';
import friendship_millennial from '@site/docs/assets/basic_applications/Friendship_Millennial.png';

<div style={{textAlign: 'center'}}>
  <img src={friendship} style={{width: "750px"}} />
</div>

Mmm, es muy insípido.
Los resultados cambian cuando agregas especificaciones, como "**Por favor, escribe en un estilo informal y conversacional**". ChatGPT propone algo así:

<div style={{textAlign: 'center'}}>
  <img src={friendship_informal} style={{width: "750px"}} />
</div>

Eso es un poco mejor.

Y si te sientes un poco más extravagante, puedes pedirle a ChatGPT que escriba en el estilo de uno de los grandes de la literatura, como Mark Twain:

<div style={{textAlign: 'center'}}>
  <img src={friendship_mark} style={{width: "750px"}} />
</div>
El texto ahora está empezando a cantar.
Pero no tiene que ser un autor famoso. También puedes usar personas conocidas como Chris Rock.

<div style={{textAlign: 'center'}}>
  <img src={friendship_chris} style={{width: "750px"}} />
</div>

¿O qué tal esos "millennials"?

<div style={{textAlign: 'center'}}>
  <img src={friendship_millennial} style={{width: "750px"}} />
</div>

## Copiar tu Estilo de Escritura

¿Qué tal si quieres que GPT-3 escriba un correo electrónico o un blog en **tu** estilo?

Simplemente mostrarle algún contenido previo que hayas escrito es suficiente. Aquí hay un ejemplo, en el que le mostramos a GPT-3 algunos correos electrónicos que 'Dr. Rodriguez' ha escrito en el pasado, y le pedimos que escriba un nuevo correo electrónico en el mismo estilo a un nuevo paciente, Sr. Inuez.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Correo electrónico #1: Asunto - Confirmación de cita\n\nEstimado John,\n\nQuería confirmar tu cita conmigo, el Dr. Smith, el 1 de mayo de 2023 a las 2:30 pm en la clínica HealthFirst. Espero con interés reunirme contigo y discutir tus preocupaciones de salud.\n\nPor favor, llega 15 minutos antes para completar cualquier documentación necesaria y trae una lista de cualquier medicamento que estés tomando actualmente. Si necesitas reprogramar o cancelar tu cita, por favor avísanos con al menos 24 horas de anticipación.\n\nSi tiene alguna pregunta o inquietud antes de su cita, no dude en comunicarse con nosotros.\n\nAtentamente,\nDr. Rodríguez\n\nCorreo electrónico #2: Asunto - Resultados de prueba\n\nEstimada Jane,\n\nLe escribo para informarle que sus recientes resultados de pruebas de sangre han llegado. Sus niveles de colesterol están dentro del rango normal, pero sus niveles de vitamina D son bajos. Le recomendaría que comience a tomar suplementos de vitamina D para mejorar sus niveles.\n\nEn base a estos resultados, también recomendaría que programe una cita de seguimiento en 3 meses para volver a evaluar sus niveles de vitamina D. Si tiene alguna pregunta o inquietud, no dude en ponerse en contacto con nosotros.\n\nGracias,\nDr. Rodriguez\n\nCorreo electrónico #3: Asunto - Cita de seguimiento\n\nEstimado Mark,\n\nQuería hacerle seguimiento después de nuestra última cita y saber cómo se siente. Si aún tiene dolor de espalda o tiene alguna nueva inquietud, por favor hágamelo saber para que podamos discutirlas durante su próxima cita.\n\nSu próxima cita está programada para el 15 de junio de 2023 a las 10:00 am en la Clínica de Salud de la Ciudad. Por favor, háganos saber si necesita reprogramar o cancelar.\n\nCuídate,\nDr. Rodriguez\n\nEscribe un correo electrónico al Sr. Inuez en el estilo de los correos electrónicos anteriores preguntando si el 5 de octubre de 2023 funciona para una cita de revisión médica." initial-response="Asunto - Cita de revisión\n\nEstimado Sr. Inuez,\n\nEspero que este mensaje le encuentre bien. Le escribo para preguntarle si el 5 de octubre de 2023 le funciona para una cita de revisión conmigo, el Dr. Rodriguez.\n\nDurante la cita, discutiremos sus preocupaciones de salud y cualquier cambio en su historial médico. Por favor, llegue 15 minutos antes para completar cualquier documentación necesaria y traiga una lista de los medicamentos que está tomando actualmente.\n\nSi el 5 de octubre no funciona para usted, por favor hágamelo saber y podemos encontrar una fecha diferente que funcione mejor para usted.\n\nGracias,\nDr. Rodriguez" max-tokens="256" box-rows="18" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>Puedes ingresar cualquier texto que hayas escrito en el pasado (correos electrónicos, informes, blogs, etc.), y GPT-3/ChatGPT generalmente será capaz de copiar tu estilo. Cuanto más texto ingreses, mejor podrá copiar tu estilo.
