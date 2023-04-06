---
sidebar_position: 10
locale: pt-br
style: chicago
---

#   Mais Sobre Prompting

Como foi discutido nas páginas anteriores, *prompts* podem variar em formato e complexidade. Eles podem incluir contexto, instruções, exemplares com perguntas e respostas, além de outros *prompts* (o quê!?).

Aqui está um exemplo de *prompt* que inclui contexto, instruções e diversos exemplares.

```text
Twitter é uma rede social onde os usuários podem postar mensagens curtas chamadas "tweets".
Tweets podem ser positivos ou negativos. Nós gostaríamos de ser capazes de classificar os tweets
como positivo ou negativo. Aqui estão alguns exemplos de tweets positivos e negativos. Certifique-se
de classificar o último tweet corretamente.

P: Tweet: "Que dia bonito!"
É um tweet positivo ou negativo?

R: positivo

P: Tweet: "Eu odeio esta aula"
É um tweet positivo ou negativo?

R: negativo

Q: Tweet: "Eu amo bolsos em calças jeans"

R:

```


Adicionando-se contextos/exemplares, frequentemente é possível melhorar a perfomance das IAs
em diferentes tarefas. No próximo capítulo, serão abordadas técnicas um pouco mais avançadas de *prompting*.

## Observações


Nos próximos capítulos, as palavras **IA, modelo e LLM serão usadas intercambiavelmente**. Veja o [glossário](https://learnprompting.org/docs/vocabulary) para mais informações.

*Prompts* dentro de *prompts* ou prompts auto-aperfeiçoados(@kojima2022large) serão abordados nas próximas seções.
