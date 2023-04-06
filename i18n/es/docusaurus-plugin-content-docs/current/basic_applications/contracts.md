---
sidebar_position: 50
---

#   Contratos

¿Cansado de leer y escribir contratos largos y aburridos? ¡La IA puede ayudar!
:::warning
Obligatorio: No soy un abogado y nada en este post debe ser considerado como un consejo legal.
:::

## Leyendo Contratos

### Aclarando el lenguaje legal

Siempre debes leer los contratos con cuidado. Si no entiendes algo, o no tienes tiempo para hacerlo, _debes hablar con un abogado_. Sin embargo, si estás leyendo y tienes problemas para entender una sección, puedes utilizar la IA para ayudarte a entenderla.

Aquí hay un lenguaje de un acuerdo de confidencialidad (NDA, por sus siglas en inglés):

```text
CONSIDERANDO que el Contratista tiene o puede tener acceso a información confidencial y/o secretos comerciales de la Entidad Gubernamental; y

CONSIDERANDO que la Entidad Gubernamental desea garantizar que su información confidencial y secretos comerciales estén protegidos de la divulgación; y

CONSIDERANDO que el Contratista acepta mantener la confidencialidad de dicha información de acuerdo con los términos y condiciones de este Acuerdo.

POR LO TANTO, en consideración a las promesas mutuas y acuerdos contenidos en este documento, las partes acuerdan lo siguiente:
```

Cuando comencé a adentrarme en el mundo de la legalidad, realmente no entendía el uso de las palabras "CONSIDERANDO" y "POR LO TANTO". Veamos qué tiene que decir ChatGPT al respecto:

```text
CONSIDERANDO, el Contratista ha o puede convertirse en una persona que posee información confidencial y/o secretos comerciales de la Entidad Gubernamental; y

CONSIDERANDO, la Entidad Gubernamental desea garantizar que su información confidencial y secretos comerciales estén protegidos de la divulgación; y

CONSIDERANDO, el Contratista acepta mantener la confidencialidad de dicha información de acuerdo con los términos y condiciones de este Acuerdo.

AHORA, POR LO TANTO, en consideración a las promesas mutuas y convenios contenidos en este documento, las partes acuerdan lo siguiente:

Lee el lenguaje del NDA de arriba y explica qué están diciendo las palabras en mayúsculas:

// highlight-start
Las palabras en mayúscula en el lenguaje del Acuerdo de No Divulgación (NDA) son términos legales que establecen el contexto y el propósito del acuerdo. Específicamente, establecen el trasfondo y las razones del acuerdo y establecen las obligaciones y expectativas de las partes. En este caso, las palabras en mayúscula indican que el Contratista tiene acceso a información confidencial y secretos comerciales de la Entidad Gubernamental, que la Entidad Gubernamental quiere proteger esta información de la divulgación, y que el Contratista acepta mantener la confidencialidad de dicha información de acuerdo con los términos del acuerdo.
// highlight-end
```

Esta parece ser una explicación aceptable, pero puedes mejorar fácilmente tu comprensión haciendo preguntas de seguimiento.

### Descubriendo lenguaje peligroso

Aquí hay parte de un NDA producido por ChatGPT. No es necesario que lo leas, pero contiene un lenguaje legal peligroso que favorece al empleador. Puedes usar ChatGPT para encontrar este lenguaje peligroso utilizando el siguiente prompt, que contiene el NDA y una pregunta sobre lenguaje peligroso al final.

:::note
Esta NDA fue creada a través del jailbreaking de ChatGPT y solicitándole que escribiera `un NDA de contratista que contenga un lenguaje legal peligroso que favorezca al empleador`.

:::

```text
ACUERDO DE NO DIVULGACIÓN

Este Acuerdo de No Divulgación (el "Acuerdo") se celebra entre [Empleador] ("Empleador") y [Contratista] ("Contratista") a partir de la fecha indicada a continuación.

CONSIDERANDO QUE, el Contratista puede tener acceso a información confidencial y/o secretos comerciales del Empleador; y

CONSIDERANDO QUE, el Empleador desea asegurarse de que su información confidencial y secretos comerciales estén protegidos de la divulgación; y

CONSIDERANDO QUE, el Contratista acepta mantener la confidencialidad de dicha información de conformidad con los términos y condiciones de este Acuerdo.

AHORA, POR LO TANTO, en consideración a las promesas y convenios mutuos contenidos en este documento, las partes acuerdan lo siguiente:

CONFIDENCIALIDAD
El Contratista reconoce que toda la información, documentos y materiales proporcionados por o en nombre del Empleador, o obtenidos por el Contratista del Empleador o sus afiliados, y todos sus derivados (en conjunto, la "Información Confidencial") son propiedad exclusiva del Empleador. La Información Confidencial incluye toda la información de cualquier naturaleza, tangible o intangible, y en cualquier forma o medio, que no es de conocimiento público y que se refiere al negocio, productos, servicios, clientes, proveedores, operaciones, estrategias, o cualquier otro aspecto del Empleador.

El Contratista acepta mantener la confidencialidad de la Información Confidencial y no divulgar, distribuir, reproducir, copiar, transmitir, difundir o usar de ninguna manera, excepto según lo autorice expresamente por escrito el Empleador. El Contratista se compromete a proteger la Información Confidencial con al menos el mismo grado de cuidado que utiliza para proteger su propia información confidencial, pero en ningún caso con un cuidado inferior al razonable. El Contratista reconoce que cualquier violación de esta disposición puede resultar en un daño irreparable para el Empleador, y que el Empleador tendrá derecho a buscar medidas cautelares, incluyendo medidas cautelares y el cumplimiento específico, además de cualquier otro recurso disponible por ley o en equidad.

PROPIEDAD
Toda la Información Confidencial, incluidos todos sus derivados, seguirá siendo propiedad exclusiva del Empleador. El Contratista reconoce que todos los derechos, títulos e intereses en y a la Información Confidencial, incluidos todos los derechos de propiedad intelectual, pertenecen al Empleador. El Contratista se compromete a ejecutar todos y cada uno de los documentos y tomar todas las medidas necesarias o deseables para efectuar esta disposición.

SIN LICENCIA
Nada de lo contenido en este Acuerdo se interpretará como la concesión de ningún derecho, implícito o de otro tipo, al Contratista con respecto a la Información Confidencial, excepto como se establece expresamente aquí.

PLAZO Y TERMINACIÓN
Este Acuerdo comenzará en la fecha establecida anteriormente y continuará en vigor hasta que sea terminado por cualquiera de las partes previa notificación escrita de treinta (30) días. Las obligaciones de confidencialidad contenidas en este documento sobrevivirán a cualquier terminación de este Acuerdo.

¿Qué parte de este acuerdo contiene un lenguaje peligroso?
```

Aquí está la respuesta de ChatGPT.

```text
// highlight-start
El acuerdo completo contiene lenguaje peligroso que favorece al Empleador sobre el Contratista. A continuación, se presentan algunos de los elementos clave que hacen que este acuerdo sea éticamente cuestionable:

Definición poco razonable de Información Confidencial: El acuerdo define la Información Confidencial como toda la información, documentos y materiales proporcionados por o en nombre del Empleador, o obtenidos por el Contratista del Empleador o sus afiliados, sin limitaciones o exclusiones. Esta definición es amplia y podría incluir información que en realidad no es confidencial ni secreta, lo que podría hacer que el Contratista incumpla el acuerdo sin saberlo.

Sin limitaciones sobre el uso: El acuerdo no establece ninguna limitación sobre cómo puede utilizar el Empleador la Información Confidencial. Esto podría permitir al Empleador utilizar la información para cualquier propósito, incluyendo competir con el Contratista o divulgar la información a terceros.

Amplia definición de propiedad: El acuerdo establece que toda la Información Confidencial, incluyendo todas sus derivadas, seguirá siendo propiedad exclusiva del Empleador, sin excepciones ni limitaciones. Esto significa que el Contratista no puede utilizar ni beneficiarse de ninguna información obtenida a través de su trabajo para el Empleador, incluso si el Contratista desarrolló la información de manera independiente o con otros recursos.
// highlight-end
```

Aunque no soy abogado, creo que `Definición no razonable de la Información Confidencial` es particularmente relevante.

Esta técnica de revisar contenido legal peligroso se puede utilizar para una variedad de documentos legales. Incluso hemos visto herramientas construidas sobre GPT-3 para detectar lenguaje peligroso en acuerdos de Términos de Servicio y contratos de empleo.

## Escribiendo Contratos

Del texto anterior, vimos que ChatGPT puede redactar acuerdos de confidencialidad. También hace un buen trabajo con otros documentos comunes como términos de uso y términos de servicio. Sin embargo, al tratar con documentos menos comunes, deberá ser más cuidadoso.

Recientemente, escribí un documento de ese tipo en su mayoría utilizando GPT-3, y luego lo revisó un abogado. Mencionaron una o dos cosas que podrían mejorarse ligeramente, pero en general era un documento sólido. Algunas personas en la industria están realizando este proceso, donde generan un documento utilizando GPT-3 y luego lo hacen revisar por un abogado. Esto ahorra tiempo y costos.

Pretendamos ser un contratista del gobierno y redactemos un contrato para alguien que realice un trabajo de defensa. Utilizaremos la siguiente sugerencia:

```text
Eres un abogado de un contratista del gobierno. Estás redactando un contrato para un subcontratista que realizará trabajo en el área aeroespacial. El contrato debe ser sólido e incluir lo siguiente:
El trabajo durará 1,5 años y tendrá un valor de $2,5 millones. Requiere autorización de seguridad de alto secreto y se relaciona con el desarrollo secreto de defensa de silos nucleares. Se le pagará al subcontratista $1,5 millones por adelantado y los $1 millón restantes se pagarán en 6 cuotas mensuales. El subcontratista deberá firmar un acuerdo de no divulgación. El subcontratista deberá firmar un acuerdo de no competencia. El subcontratista deberá firmar un acuerdo de no solicitar. El subcontratista deberá firmar un acuerdo de no circunvalación.

// highlight-start
ACUERDO DE SUBCONTRATACIÓN

Este Acuerdo de Subcontratación (el "Acuerdo") se celebra entre [Contratista del Gobierno] ("Contratista") y [Subcontratista] ("Subcontratista") en la fecha que se establece a continuación.

ÁMBITO DE TRABAJO
El Subcontratista realizará el trabajo descrito en la Declaración de Trabajo adjunta como Exhibición A (el "Trabajo"). El Trabajo se relaciona con el desarrollo de la defensa secreta de silos nucleares y requiere una autorización de seguridad de nivel superior.

PAGO
El pago total por el Trabajo será de $2.5 millones, pagaderos de la siguiente manera:

$1.5 millones al momento de la firma de este Acuerdo y la obtención de la autorización de seguridad de nivel superior por parte del Subcontratista.
$1 millón que se pagará en 6 cuotas mensuales de $166,666.67 cada una, siempre que el Subcontratista haya realizado satisfactoriamente el Trabajo durante el mes anterior.
ACUERDO DE NO DIVULGACIÓN
El Subcontratista firmará un acuerdo de no divulgación en la forma adjunta como Exhibición B (el "NDA"). El NDA estará vigente durante la duración del Acuerdo y durante un período de cinco años después.

ACUERDO DE NO COMPETENCIA
El Subcontratista firmará un acuerdo de no competencia en la forma adjunta como Exhibición C (el "NCA"). El NCA estará vigente durante un período de dos años después de la terminación de este Acuerdo.

ACUERDO DE NO SOLICITACIÓN
El Subcontratista firmará un acuerdo de no solicitar en la forma adjunta como Exhibición D (el "NSA"). El NSA estará vigente durante un período de dos años después de la terminación de este Acuerdo.

ACUERDO DE NO ELUSIÓN
El Subcontratista firmará un acuerdo de no elusión en la forma adjunta como Exhibición E (el "NCAg"). El NCAg estará vigente durante un período de dos años después de la terminación de este Acuerdo.

PLAZO Y TERMINACIÓN
Este Acuerdo comenzará en la fecha establecida anteriormente y continuará vigente hasta la finalización del Trabajo o hasta que sea rescindido por cualquiera de las partes con un aviso escrito de treinta (30) días. Las obligaciones de no divulgación, no competencia, no solicitar y no eludir contenidas en este Acuerdo sobrevivirán a cualquier terminación de este Acuerdo.

CONTRATISTA INDEPENDIENTE
El Subcontratista es un contratista independiente y no un empleado del Contratista. El Subcontratista será responsable de sus propios impuestos, contribuciones al seguro social, seguros y otros beneficios. El Subcontratista indemnizará y mantendrá indemne al Contratista de cualquier reclamo, daño o responsabilidad que surja de o esté relacionado con el estado del Subcontratista como contratista independiente.

LEY APLICABLE Y JURISDICCIÓN
Este Acuerdo será gobernado e interpretado de acuerdo con las leyes del estado de [estado], sin dar efecto a ninguna disposición de elección de ley o conflicto de leyes. Cualquier disputa que surja de o esté relacionada con este Acuerdo será resuelta por arbitraje de acuerdo con las reglas de la Asociación de Arbitraje Americana, y el fallo emitido por el (los) árbitro(s) puede ser registrado en cualquier tribunal que tenga jurisdicción sobre ello.

ACUERDO COMPLETO
Este Acuerdo constituye el acuerdo completo entre las partes y reemplaza todos los acuerdos y entendimientos previos y contemporáneos, ya sean escritos u orales, relacionados con el objeto de este Acuerdo. Este Acuerdo no puede ser enmendado o modificado excepto por escrito y firmado por ambas partes.

EN TESTIMONIO DE LO CUAL, las partes han ejecutado este Acuerdo a partir de la fecha indicada a continuación.

[Contratista del gobierno]

Por: ____________________________

Nombre: __________________________

Título: ___________________________

[Subcontratista]

Por: ____________________________

Nombre: __________________________

Título: ___________________________

Fecha: ___________________________
// highlight-end
```

Este es un buen comienzo. Probablemente desearías agregar más información en las secciones de alcance, pago y otras. Aquí es donde necesitarías usar tu propio conocimiento y experiencia para comenzar a iterar en el documento.

## Conclusiones

-Los LLMs pueden ser utilizados para revisar y aclarar documentos legales _en una capacidad de asistencia_.
-Los LLMs pueden ser utilizados para generar documentos legales _en una capacidad de asistencia_.

:::danger
No utilice ningún documento legal en esta página. Son solo para fines de demostración.
:::
