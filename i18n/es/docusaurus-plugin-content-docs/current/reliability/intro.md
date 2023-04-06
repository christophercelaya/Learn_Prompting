---
sidebar_position: 1
---

#   Introducción

Este capítulo cubre cómo hacer que las completaciones sean más confiables, así como cómo implementar verificaciones para asegurar que las salidas sean confiables.

Hasta cierto punto, la mayoría de las técnicas anteriores cubiertas tienen que ver con mejorar la precisión de las completaciones y, por lo tanto, la confiabilidad, en particular la autoconsistencia(@wang2022selfconsistency). Sin embargo, hay una serie de otras técnicas que se pueden utilizar para mejorar la confiabilidad, más allá de las estrategias básicas de generación de entradas.

Los %%LLMs|LLM%% exhiben diversos problemas, incluyendo alucinaciones(@ye2022unreliability), explicaciones defectuosas con los métodos de generación de entradas %%CoT|CoT prompting%% (@ye2022unreliability), y múltiples sesgos, incluyendo sesgo de la etiqueta mayoritaria, sesgo de recencia y sesgo de token común (@zhao2021calibrate). Además, la generación de entradas de cero disparo CoT puede ser particularmente sesgada al tratar temas sensibles (@shaikh2022second).

Las soluciones comunes para algunos de estos problemas incluyen calibradores para eliminar los sesgos _a priori_, y verificadores para puntuar las completaciones, así como promover la diversidad en las completaciones.