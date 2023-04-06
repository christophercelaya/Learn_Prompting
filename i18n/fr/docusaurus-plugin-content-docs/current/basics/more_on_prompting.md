#   Plus sur le prompt

Comme nous l'avons vu dans les pages précédentes, les prompts peuvent avoir des formats et une complexité variés. Ils peuvent inclure du contexte, des instructions, plusieurs exemples de questions-réponses et même d'autres prompts (quoi!?).

Voici un exemple de prompt qui inclut le contexte, les instructions et plusieurs exemples :

```html
Twitter est une plate-forme de médias sociaux où les utilisateurs peuvent publier de courts messages appelés "tweets".
Les tweets peuvent être positifs ou négatifs, et nous aimerions pouvoir classer les tweets comme
positif ou négatif. Voici quelques exemples de tweets positifs et négatifs. S'assurer
pour classer correctement le dernier tweet.

Q : Tweet : "Quelle belle journée !"
Ce tweet est-il positif ou négatif ?

A: positif

Q : Tweet : "Je déteste ce cours"
Ce tweet est-il positif ou négatif ?

A: négatif

Q : Tweet : "J'adore les poches sur les jeans"

A:
```

En ajoutant du contexte/des exemples supplémentaires, nous pouvons souvent améliorer les performances des IA sur différentes tâches. Le chapitre suivant couvre des techniques d'incitation légèrement plus avancées.

# **Notes**

Dans les chapitres suivants, vous verrez peut-être les mots **IA, modèle et LLM (Large Language Models) utilisés de manière interchangeable**. Voir la référence de vocabulaire pour plus d'informations.

Les prompts à l'intérieur des prompts , ou les prompts auto-augmentées[1](https://learnprompting.org/docs/basics/more_on_prompting#fn-1), seront abordées dans les prochaines sections.

---

Kojima, T., Gu, S.S., Reid, M., Matsuo, Y. et Iwasawa, Y. (2022). Les grands modèles de langage sont des raisonneurs Zero-Shot. [↩](https://learnprompting.org/docs/basics/more_on_prompting#fnref-1)