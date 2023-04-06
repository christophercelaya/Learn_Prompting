#   Comprendre la pensée IA

import Brain from '@site/docs/assets/brain.svg';


<div style={{textAlign: 'center'}}>
  <Brain style={{width:"500px",height:"200px",verticalAlign:"top"}}/>
</div>


Bonjour cher lecteur, félicitations d'avoir franchi le chapitre d'introduction. Vous avez pris un excellent départ dans ce domaine passionnant. Avant de commencer à lire le reste du cours, il y a quelques petites choses que vous devez savoir sur les différentes IA et leur fonctionnement.

## Les différentes IA

Il existe des milliers, voire des millions d'IA. Certaines sont meilleures que d'autres. Différentes IA peuvent produire des [images](https://openai.com/product/dall-e-2), de la [musique](https://google-research.github.io/seanet/musiclm/examples/), du [texte](https://platform.openai.com/playground) et même des [vidéos](https://makeavideo.studio/). Il convient de noter qu'il s'agit dans tous les cas d'IA génératives, c'est-à-dire d'IA qui fabriquent des objets. Il existe également des IA discriminantes, c'est-à-dire des IA qui classent les choses. Par exemple, vous pouvez utiliser un classificateur d'images pour déterminer si une image représente un chat ou un chien. Nous n'utiliserons pas d'IA discriminante dans ce cours.

Seules quelques IA génératives sont actuellement suffisamment avancées pour être particulièrement utiles au Prompt Engineering. Nous utilisons principalement GPT-3 et ChatGPT dans ce cours. Comme nous l'avons mentionné à la dernière page, ChatGPT est un robot de conversation, alors que GPT-3 ne l'est pas. **Ils produisent généralement des réponses différentes lorsqu'on leur pose la même question**. Si vous êtes développeur, je vous recommande d'utiliser GPT-3, car il est plus facile à reproduire. Si vous n'êtes pas développeur, je vous recommande d'utiliser [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), car il est plus facile à utiliser. La plupart des techniques de ce cours peuvent être appliquées aux deux IA. Cependant, certaines d'entre elles ne seront applicables qu'à GPT-3, nous vous encourageons donc à utiliser GPT-3 si vous souhaitez utiliser toutes les techniques de ce cours.

Nous utiliserons également [Stable Diffusion](https://beta.dreamstudio.ai/home) et [DALL.E](https://openai.com/product/dall-e-2) dans la section sur la génération d'images. Voir d'autres IA pertinentes [ici](https://learnprompting.org/docs/products#chatbots).

## Comment ces IA marchent

Cette section décrit certains aspects des IA **génératives de texte** les plus répandues. Le cerveau de ces IA est constitué de milliards de neurones artificiels. La façon dont ces neurones sont structurés s'appelle une architecture de transformateur. Il s'agit d'un type de réseau neuronal assez complexe. Ce qu'il faut comprendre, c'est que:

1. Ces IA ne sont que des fonctions mathématiques. Au lieu de $f(x)=x²$, elles comprennent f(milliers de variables) = milliers de résultats possibles.

2. Ces IA comprennent les phrases en les décomposant en mots/sous-mots appelés "tokens "(par exemple, l'IA pourrait lire `"je n'aime pas"` comme `"je", "n", "'aime",  "pas"`). Chaque token est ensuite converti en une liste de nombres, afin que l'IA puisse le traiter.

3. Ces IA prédisent le mot/token suivant dans la phrase en fonction des mots/tokens précédents (par exemple, l'IA pourrait prédire des `pommes` après `Je n'aime pas`). Chaque token qu'elles écrivent est basé sur les tokens précédents qu'elles ont vus et écrits ; chaque fois qu'elles écrivent un nouveau token, elles font une pause pour réfléchir à ce que sera le token suivant.

4. Ces IA regardent tous les tokens en même temps. Elles ne lisent pas de gauche à droite ou de droite à gauche comme le font les humains.

Veuillez comprendre que les mots "penser", "cerveau" et "neurone" sont des zoomorphismes, qui sont essentiellement des métaphores de ce que le modèle fait réellement. Ces modèles ne pensent pas vraiment, ce ne sont que des fonctions mathématiques. Ce ne sont pas des cerveaux, mais des réseaux neuronaux artificiels. Ce ne sont pas des neurones biologiques, ce ne sont que des nombres.

Il s'agit d'un domaine de recherche active et de philosophie. Cette description est plutôt cynique quant à leur nature et vise à tempérer la représentation médiatique populaire des IA comme des êtres qui pensent/agissent comme des humains. Ceci étant dit, si vous voulez anthropomorphiser l'IA, allez-y ! Il semble que la plupart des gens le fassent et cela peut même être utile à l'apprentissage.

## **Notes**

[d2l.ai](http://d2l.ai/) est une bonne ressource pour apprendre comment fonctionne l'IA

Veuillez noter que les auteurs apprécient les pommes. Elles sont délicieuses.