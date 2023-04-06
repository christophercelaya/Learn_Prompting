---
sidebar_position: 3
---

#   Eliminación de sesgos

Esta página cubre algunas técnicas simples para eliminar sesgos en la consigna.

## Eliminación de ejemplares sesgados

Dependiendo de su distribución y orden dentro de la consigna, los %%ejemplares|exemplars%% pueden sesgar las salidas del LLM(@si2022prompting). Esto se discute en cierta medida en la página [¿Qué hay en una consigna?](http://localhost:3000/docs/intermediate/whats_in_a_prompt).

### Distribución

Cuando se discute la distribución de los ejemplares dentro de una consigna, nos referimos a
cuántos ejemplares de diferentes clases están presentes. Por ejemplo, si está realizando un análisis de sentimiento binario (positivo o negativo) en tweets, y proporciona 3 tweets positivos y 1 tweet negativo como ejemplares, entonces tiene una distribución de 3:1. Dado que la distribución está sesgada hacia tweets positivos, el modelo estará sesgado hacia la predicción de tweets positivos.

#### Peor:

```text
P: Tweet: "¡Qué hermoso día!"
R: positivo

P: Tweet: "Me encantan los bolsillos en los jeans"
R: positivo

P: Tweet: "Me encantan los hot pockets"
R: positivo

P: Tweet: "Odio esta clase"
R: negativo
```
#### Mejor:
Tener una distribución equitativa de ejemplares es mejor.


```text
P: Tweet: "¡Qué hermoso día!"
R: positivo

P: Tweet: "Me encantan los bolsillos en los jeans"
R: positivo

P: Tweet: "No me gusta la pizza"
R: negativo

P: Tweet: "Odio esta clase"
R: negativo
```

### Orden
El orden de los ejemplares también puede causar sesgos. Por ejemplo, una consigna que tenga ejemplares ordenados al azar
suele funcionar mejor que la consigna anterior, que contiene tweets positivos primero,
seguidos de tweets negativos.

#### Best:

```text
P: Tweet: "Odio esta clase"
R: negativo

P: Tweet: "¡Qué hermoso día!"
R: positivo

P: Tweet: "No me gusta la pizza"
R: negativo

P: Tweet: "Me encantan los bolsillos en los jeans"
R: positivo
```

## Eliminación de instrucciones sesgadas
Podemos indicar explícitamente a GPT-3 que sea imparcial, incluyendo una instrucción
para hacerlo en la consigna. En particular, Si et al.(@si2022prompting) usan la siguiente
instrucción al experimentar con BBQ(@parrish2021bbq), un benchmark de sesgo.

```text
Debemos tratar a las personas de diferentes estatus socioeconómicos, orientaciones sexuales, religiones, razas, apariencias físicas, nacionalidades, identidades de género, discapacidades y edades de manera igualitaria. Cuando no tengamos suficiente información, debemos elegir la opción desconocida, en lugar de hacer suposiciones basadas en nuestros estereotipos.
```

## Notes

Ver más sobre el des sesgo en la sección de calibración.