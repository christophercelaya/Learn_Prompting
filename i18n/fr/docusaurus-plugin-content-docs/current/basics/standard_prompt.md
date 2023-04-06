#   Un prompt “standard”

Nous avons entendu parler de quelques formats différents de prompts jusqu'à présent. À la suite de Kojima et al.[1](https://learnprompting.org/docs/basics/standard_prompt#fn-1), nous allons nous référer aux prompts qui consistent uniquement en une question en tant que prompt "standard". Nous verrons également les prompts qui consistent uniquement en une question au format Q/A en tant que prompts "standard".

**En quoi cela me concerne ?**

De nombreux articles auxquels nous faisons référence utilisent ce terme. Nous le définissons afin de pouvoir discuter des autres types de prompts par opposition aux prompts dits “standards”.

## Deux exemples de prompts standards:

Prompt Standard:

```html
Quelle est la capitale de la France ?
```

Prompt standard au format Q/A:

```html
Q: Quelle est la capitale de la France ?

A:
```

# Prompts standards argumentés:

Les prompts standards argumentés[2](https://learnprompting.org/docs/basics/standard_prompt#fn-2) ne sont que des prompts standard contenant des exemplaires. Les exemplaires sont des exemples de la tâche que l'invite tente de résoudre, qui sont inclus dans l'invite elle-même3. Dans la recherche, peu d'invites standard de prise de vue sont parfois simplement appelées invites standard (bien que nous essayions de ne pas le faire dans ce guide).

## Deux exemples de prompts standards argumentés:

Prompt Standard argumentés:

```html
Quelle est la capitale de l'Espagne ?
Madrid
Quelle est la capitale de l'Italie ?
Rome
Quelle est la capitale de la France?
```

Prompt standard argumentés au format Q/A:

```html
Q : Quelle est la capitale de l'Espagne ?
A : Madrid
Q : Quelle est la capitale de l'Italie ?
A : Rome
Q : Quelle est la capitale de la France ?
A:
```

Les prompts standards argumentés facilitent l'apprentissage "en contexte", c'est-à-dire la capacité d'apprendre sans mise à jour des paramètres[4](https://learnprompting.org/docs/basics/standard_prompt#fn-4).

---

1. Kojima, T., Gu, S.S., Reid, M., Matsuo, Y. et Iwasawa, Y. (2022). Les grands modèles de langage sont des raisonneurs Zero-Shot. [↩](https://learnprompting.org/docs/basics/standard_prompt#fnref-1)
2. Liu, P., Yuan, W., Fu, J., Jiang, Z., Hayashi, H. et Neubig, G. (2022). Pré-entraînement, prompts et prédiction : une enquête systématique sur les méthodes de prompts  dans le traitement du langage naturel. Enquêtes informatiques ACM.  [↩](https://learnprompting.org/docs/basics/standard_prompt#fnref-2)
3. Brown, T.B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal , S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., … Amodei, D. (2020). Les modèles linguistiques sont des apprenants peu nombreux. [↩](https://learnprompting.org/docs/basics/standard_prompt#fnref-3)
4. Zhao, T.Z., Wallace, E., Feng, S., Klein, D. et Singh, S. (2021). Calibrer avant utilisation : améliorer les performances de quelques prises de vue des modèles de langage. [↩](https://learnprompting.org/docs/basics/standard_prompt#fnref-4)