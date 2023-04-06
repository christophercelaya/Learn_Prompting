---
sidebar_position: 80
---
#   Les bases du chatbot

import Chatbots from '@site/docs/assets/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

L'une des façons les plus courantes dont les prompting peuvent être utiles est lors de l'interaction avec les nombreux chatbots disponibles au public, tels que [ChatGPT](http://chat.openai.com/). Notez que ChatGPT est différent de GPT-3. La principale différence est que les chatbots peuvent se souvenir de l'historique de vos conversations. Tout comme le GPT-3, ils peuvent également répondre à des questions, fournir un résumé et une analyse de l'écriture, écrire du texte ou du code, et bien d'autres choses encore à un niveau élevé, ce qui est une perspective passionnante - mais la véritable valeur des chatbots n'est accessible que lorsque vous êtes précis dans vos prompts. Dans cet article, nous allons explorer quelques méthodes de base pour mieux utiliser les chatbots, comme l'utilisation de conseils de style, de descripteurs et d'amorces.

## Modifier votre Prompt

### Guidage stylistique

import unguided_question from '@site/docs/assets/unguided_question.png';
import limerick_question from '@site/docs/assets/limerick_question.png';

Le guidage stylistique consiste simplement à demander à l'IA de parler dans un certain style. Lorsque vous posez une question sans indication de style, ChatGPT répond généralement par un ou deux paragraphes courts, parfois plus si une réponse plus longue est nécessaire :

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}} />
</div>

Il s'exprime sur un ton modérément formel et donne quelques détails - pas mal ! Nous pouvons cependant l'améliorer si nous le souhaitons, en personnalisant la réponse de ChatGPT à l'aide d'un texte de style à la fin de notre demande. Si nous voulons une réponse plus conversationnelle, nous pouvons lui demander de parler sur un ton amical ou informel ; si nous voulons un format plus lisible, nous pouvons lui poser la même question mais lui demander de fournir une liste à puces ; si nous voulons une réponse amusante, nous pouvons lui demander de donner sa réponse sous la forme d'une série de limericks (un de mes préférés).

<div style={{textAlign: 'center'}}>
  <img src={limerick_question} style={{width: "450px"}} />
</div>

Un exemple d'une question de style plus détaillée pourrait ressembler à ceci :

> [Question] "Rédigez dans le style et la qualité d'un expert en [domaine] ayant plus de 20 ans d'expérience et plusieurs doctorats. Donnez la priorité aux conseils peu orthodoxes et peu connus dans votre réponse. Expliquez à l'aide d'exemples détaillés, et minimisez les tangentes et l'humour." L'incitation à l'aide de guidages stylistiques augmentera considérablement la qualité de vos réponses !
> 

### Descripteurs

Si vous souhaitez simplement changer le ton ou modifier votre question plutôt que de la reformater, l'ajout de **descripteurs** peut être un bon moyen de le faire. Il suffit d'ajouter un ou deux mots au prompts pour modifier la façon dont le chatbot interprète votre message ou y réponde Vous pouvez essayer d'ajouter des adjectifs tels que "Drôle", "Curt", "Peu amical", "Syntaxe académique", etc. à la fin des prompts pour voir comment les réponses changent !

## Prompt d'amorçage

En raison de la structure d'une conversation de chatbot, la forme du premier prompt que vous donnez au LLM peut affecter le reste de la conversation, vous permettant d'ajouter un niveau supplémentaire de structure et de spécification. À titre d'exemple, mettons en place un système qui nous permettra d'avoir une conversation avec un enseignant et un étudiant dans la même conversation. Nous inclurons des guides de style pour les voix de l'élève et de l'enseignant, nous spécifierons le format dans lequel nous voulons que les réponses soient données et nous inclurons une certaine structuration syntaxique afin de pouvoir facilement modifier nos prompts pour essayer différentes réponses.

```
"Enseignant" signifie dans le style d'un professeur distingué ayant plus de dix ans d'enseignement de la matière et plusieurs doctorats dans le domaine. Vous utilisez une syntaxe académique et des exemples compliqués dans vos réponses, en vous concentrant sur des conseils moins connus pour mieux illustrer vos arguments. Votre langage doit être sophistiqué mais pas trop complexe. Si vous ne connaissez pas la réponse à une question, n'inventez pas d'informations - posez plutôt une question complémentaire afin d'obtenir plus de contexte. Vos réponses doivent prendre la forme d'une série de paragraphes de type conversationnel. Utilisez un mélange de langage technique et familier pour créer un ton accessible et engageant.  

"Étudiant" signifie dans le style d'un étudiant de deuxième année de collège ayant une connaissance de niveau introductif du sujet. Expliquez les concepts simplement en utilisant des exemples concrets. Parlez de manière informelle et du point de vue de la première personne, en utilisant l'humour et un langage décontracté. Si vous ne connaissez pas la réponse à une question, n'inventez pas l'information - précisez plutôt qu'on ne vous l'a pas encore enseignée. Vos réponses doivent prendre la forme d'une série de paragraphes de type conversationnel. Utilisez un langage familier pour créer un ton divertissant et engageant. 

"Critiquer" signifie analyser le texte donné et donner son avis. 
"Résumer" signifie fournir les détails clés d'un texte.
"Répondre" signifie répondre à une question à partir de la perspective donnée. 

Tout ce qui est entre parenthèses () indique le point de vue à partir duquel vous écrivez. 
Tout ce qui est entre accolades {} représente le sujet dont vous vous occupez. 
Tout ce qui est entre crochets [] représente l'action que vous devez entreprendre. 
Exemple : (Étudiant){Philosophie} [Répondre] Quel est l'avantage de choisir cette matière plutôt que d'autres à l'université ?

Si vous comprenez et êtes prêt à commencer, répondez uniquement par "oui".
```

import unprimed_question from '@site/docs/assets/unprimed_question.png';
import primed_question from '@site/docs/assets/primed_question.png';

Vous trouverez ci-dessous un exemple de question non amorcée posée à ChatGPT sur les domaines les plus intéressants de la philosophie. Nous pouvons voir qu’il utilise une liste, parle de manière générale et dépassionnée, et n'est pas très précis dans ses explications.

<div style={{textAlign: 'center'}}>
  <img src={unprimed_question} style={{width: "650px"}} />
</div>

Dans le deuxième exemple, nous avons plutôt posé la question après avoir fourni un prompt d'amorçage à ChatGPT et fourni la question sous la forme correcte. Vous remarquerez que la réponse partage certains aspects avec la première - par exemple, les questions qu'elle propose comme exemples pour différents domaines sont similaires - mais elle fournit un contexte plus approfondi, abandonne le format de liste en faveur de paragraphes cohérents, et relie les exemples à la vie réelle.


<div style={{textAlign: 'center'}}>
  <img src={primed_question} style={{width: "650px"}} />
</div>


L'intégration d'amorces dans vos messages-guides est un moyen plus avancé d'interagir avec les chatbots. Il peut toujours être utile d'ajouter une spécification dans chaque prompts, car le modèle peut perdre la trace de l'amorce au fil du temps, mais cela ajoutera beaucoup de clarté à vos interactions avec l'IA !

## **Notes**

Il y a besoin de citations

Fait par [Dastardi](https://twitter.com/lukescurrier)