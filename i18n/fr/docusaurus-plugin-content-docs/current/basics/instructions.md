---
sidebar_position: 2
---
#   Donner des instructions

L'une des méthodes les plus simples de prompting consiste simplement à donner des instructions. Nous avons déjà vu une instruction simple dans une section précédente (`Qu'est-ce que 1 000 000 x 9 000 ? Assurez-vous de mettre le bon nombre de zéros, même s'il y en a beaucoup :`). Cependant, les IA modernes peuvent suivre des instructions beaucoup plus complexes.

Vous trouverez ci-dessous un exemple d'intégration interactive Dyno. Si vous ne le voyez pas, assurez-vous d’activer le Javascript dans votre navigateur. Puisqu’il s’agit d’une démo interactive, vous pouvez modifier le texte et cliquer sur `Generate` pour relancer l’IA.

### Exemple 1

```html
class="trydyno-embed-tw-root”
```

L'IA est facilement capable de résoudre ce problème. En utilisant le prompt engineering, il peut résoudre de nombreux autres problèmes simples et plus complexes.

### Exemple 2

Voici un exemple plus compliqué[1](https://learnprompting.org/docs/basics/instructions#fn-1) :

```html
Lisez l'e-mail de vente suivant. Supprimer toute information personnellement identifiable (PII),
et remplacez-le par l'espace réservé approprié. Par exemple, remplacez le nom "John Doe"
avec "[NOM]".

Salut John,

Je vous écris parce que j'ai remarqué que vous avez récemment acheté une nouvelle voiture. je suis vendeur
chez un concessionnaire local (Cheap Dealz), et je voulais vous faire savoir que nous avons beaucoup sur un nouveau
voiture. Si vous êtes intéressé, merci de me le faire savoir.

Merci,

Jimmy Smith

Téléphone : 410-805-2345
Courriel : [jimmysmith@cheapdealz.com](mailto:jimmysmith@cheapdealz.com)
```

Voici la [réponse de l'IA](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003) :

```html
Bonjour [NOM],

Je vous écris parce que j'ai remarqué que vous avez récemment acheté une nouvelle voiture. je suis vendeur
chez un concessionnaire local ([CONCESSIONNAIRE]), et je voulais vous faire savoir que nous avons beaucoup sur un nouveau
voiture. Si vous êtes intéressé, merci de me le faire savoir.

Merci,

[VENDEUR]

Téléphone : [NUMÉRO DE TÉLÉPHONE]
E-mail : [ADRESSE E-MAIL]
```

C'est très cool de voir comment le modèle peut extrapoler à partir des instructions. Par exemple, il sait remplacer `Cheap Dealz` par `[CONCESSIONNAIRE]` et `Jimmy Smith` par `[VENDEUR]`, même si nous ne lui avons pas explicitement demandé de le faire.

---

1. Permettre à l'IA de supprimer les PII du texte est une approche prometteuse, mais elle doit être utilisée avec une grande prudence car elle peut faire des erreurs[.↩](https://learnprompting.org/docs/basics/instructions#fnref-1)