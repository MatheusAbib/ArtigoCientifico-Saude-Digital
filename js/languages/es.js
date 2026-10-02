const es = {
    translations: {
    logo: "Chatbots en Salud Digital",
    hero: {
        titulo: "Entre la tecnología y el cuidado:<br>análisis comparativo estructurado de chatbots en salud digital",
        subtitulo: "Ada Health · Molly (Sensely) · Symptomate — precisión diagnóstica, LGPD, usabilidad y lenguaje natural.",
        badge: "Artículo Científico",
        status: "Aceptado por la revista académica de FATEC Itapetininga",
        verRevista: "Ver Revista"
    },
    nav: {
        resumo: "Resumen",
        introducao: "Introducción",
        metodologia: "Metodología",
        referencial: "Marco Teórico",
        resultados: "Resultados",
        consideracoes: "Conclusión",
        referencias: "Referencias"
    },
    toc: {
        titulo: "Índice",
        resumo: "Resumen",
        introducao: "Introducción",
        metodologia: "Metodología",
        referencial: "Marco Teórico",
        resultados: "Resultados y Discusión",
        consideracoes: "Consideraciones Finales",
        referencias: "Referencias"
    },
    byline: {
        autor1: "Andressa Barbosa Carvalho Araújo",
        autor2: "Matheus Bilitardo Abib",
        autor3: "Luciano Gonçalves de Carvalho",
        tempoLeitura: "18",
        minLeitura: "minutos de lectura",
        instituicao: "FATEC Mogi das Cruzes · 2025"
    },
    buttons: {
        citarABNT: "Citar ABNT",
        citarAPA: "Citar APA",
        tema: "Tema",
        abrirPDF: "Abrir PDF",
        cartaAceite: "Carta de Aceptación"
    },
    footer: {
        autores: "Autores",
        instituicao: "Institución",
        links: "Enlaces Principales",
        compartilhe: "Compartir",
        comoCitar: "Cómo citar este artículo:",
        direitos: "Todos los derechos reservados",
        resumoArtigo: "Resumen del artículo",
        metodologia: "Metodología",
        resultados: "Resultados",
        referencias: "Referencias",
        revistaPerspectiva: "Ver Revista"
    },
    references: {
        title: "REFERENCIAS",
        previous: "Anterior",
        next: "Siguiente",
        page: "Página",
        of: "de",
        references: "referencias"
    },
    toast: {
        langChanged: "Idioma cambiado a ",
        citeABNTCopied: "Cita ABNT copiada",
        citeAPACopied: "Cita APA copiada",
        openingPDF: "Abriendo PDF en una nueva pestaña...",
        openingLetter: "Abriendo carta de aceptación...",
        linkCopied: "¡Enlace copiado!"
    }
},
    content: {
        resumo: `
            <p>Este artículo analiza comparativamente las siguientes plataformas de chatbots aplicadas a la salud digital: Ada Health, Molly (Sensely) y Symptomate. Utilizando un enfoque exploratorio, bibliográfico y con elementos cuantitativos y cualitativos, el estudio evalúa aspectos técnicos, clínicos y de experiencia del usuario mediante criterios como precisión diagnóstica, cumplimiento con la Ley General de Protección de Datos (LGPD), satisfacción de los usuarios, accesibilidad técnica y comprensión del lenguaje natural. Los resultados indican que Ada Health se destaca por su robustez científica y aceptación del público, Molly por su enfoque humanizado con avatar interactivo orientado al monitoreo de enfermedades crónicas, y Symptomate por su simplicidad y eficiencia en el triaje inicial de síntomas. El análisis revela que, aunque los chatbots amplían el acceso y optimizan la atención en salud, aún enfrentan desafíos relacionados con la privacidad, personalización y usabilidad. Se concluye que estas herramientas poseen un gran potencial para complementar el cuidado médico, siempre que su implementación observe aspectos éticos, técnicos y regulatorios.</p>
            <div class="keywords"><strong>Palabras clave:</strong> Chatbot; Inteligencia Artificial; Internet; LGPD; Salud.</div>
        `,
        introducao: `<p>Según Cardoso (2024), la evolución tecnológica ha impulsado innovaciones en diversas áreas, y la salud ha sido una de las más beneficiadas por estas transformaciones. La incorporación de nuevas tecnologías ha proporcionado avances significativos en la eficiencia de la atención médica y en la experiencia de los pacientes. Herramientas como la inteligencia artificial, la realidad aumentada y la automatización han desempeñado un papel crucial en este proceso, mejorando la calidad de la atención, la precisión de los diagnósticos y la rapidez en los tratamientos.</p>
        <p>Los chatbots, que son programas de inteligencia artificial capaces de interactuar con usuarios mediante mensajes automatizados, surgen como una solución innovadora para proporcionar soporte continuo y personalizado a los pacientes. Ofreciendo respuestas rápidas y eficaces sobre síntomas, medicamentos y tratamientos, estos sistemas revolucionan la prestación de servicios de salud. Contribuyen a la reducción de costos operativos, optimizan el uso de los recursos humanos y permiten que los profesionales de la salud se concentren en casos más complejos, demostrando el potencial de las tecnologías emergentes en la transformación de la salud.</p>
        <p>Estos sistemas ya están transformando la atención médica al ofrecer soporte accesible, automatizado y continuo a los pacientes. Estas soluciones permiten desde el triaje automatizado hasta el soporte a diagnósticos y procedimientos médicos, contribuyendo a una mayor eficiencia y seguridad en la atención, como afirma Laurentys (2025). La interacción en tiempo real que proporcionan es especialmente valiosa en contextos donde la rapidez en la atención es crucial.</p>
        <p>A pesar de los avances proporcionados por los chatbots, su implementación enfrenta desafíos significativos. La seguridad de los datos personales es una preocupación central, ya que los sistemas basados en inteligencia artificial pueden aumentar la exposición a riesgos de seguridad y privacidad, como destaca Topol (2019). Además, aunque los chatbots proporcionan respuestas rápidas, pueden presentar dificultades en la interpretación de síntomas complejos, además de limitaciones en la precisión diagnóstica y en la comunicación con los usuarios. Adicionalmente, factores como la falta de empatía y la desconfianza de pacientes y profesionales de la salud representan barreras para la adopción de estas tecnologías (FAN et al., 2021; LARANJO et al., 2018).</p>
        <p>Este artículo tiene como objetivo comparar los chatbots Ada Health, Molly y Symptomate, que, aunque comparten similitudes, presentan características únicas en sus enfoques. La elección de las plataformas analizadas se basó en criterios objetivos, como: presencia en estudios científicos y validaciones clínicas publicadas en artículos, disponibilidad de documentación técnica detallada en sitios oficiales de las plataformas y accesibilidad de las plataformas para realizar pruebas. Estos criterios se adoptaron con el objetivo de garantizar la relevancia, comparabilidad y viabilidad del análisis propuesto. Al analizar sus operaciones en la atención médica, se busca comprender cómo estas tecnologías están transformando la prestación de servicios de salud, haciéndolos más eficientes, accesibles y centrados en el paciente.</p>`,
        metodologia: `<p>La investigación de este artículo adopta un enfoque mixto (cualitativo y cuantitativo), exploratorio y bibliográfico, con énfasis en el levantamiento, análisis y comparación de tres asistentes virtuales utilizados en la salud: Molly (Sensely), Symptomate y Ada Health.</p>
        <p>Para ello, se consultaron fuentes primarias y secundarias, como plataformas especializadas en divulgación científica, como PubMed, ScienceDirect y BMJ Open, además de fuentes periodísticas, como Forbes, MedCity News y Medicina S/A. La información extraída abarca aspectos como sus mecanismos de funcionamiento, eficacia clínica, estudios comparativos y evaluaciones sobre la accesibilidad de los sistemas.</p>
        <p>Los criterios para analizar los diferentes aspectos de actuación de las plataformas mencionadas anteriormente en el contexto de la salud digital fueron:</p>
        <ul>
            <li><strong>Precisión y Efectividad Clínica:</strong> El análisis se fundamentará en estudios científicos disponibles en bases como PubMed y Google Scholar, que aportan validaciones clínicas, comparaciones diagnósticas y eficacia en triaje médico;</li>
            <li><strong>Seguridad y Privacidad:</strong> Para evaluar el cumplimiento con la Ley General de Protección de Datos (LGPD), se utilizará la herramienta de auditoría digital Webbkoll, que verifica prácticas de recolección de datos, ausencia de política de privacidad visible y envío de información a terceros;</li>
            <li><strong>Satisfacción del Usuario:</strong> La percepción de los usuarios se investigará mediante el análisis de las evaluaciones públicas en las tiendas de aplicaciones (App Store o Google Play), considerando calificaciones asignadas, comentarios frecuentes y número de descargas, con el fin de identificar patrones de aceptación y críticas recurrentes;</li>
            <li><strong>Accesibilidad:</strong> Se evaluará a través de las herramientas Google Lighthouse que dan un panorama cuantitativo y técnico de la accesibilidad que afectan directamente la navegación de personas con discapacidad;</li>
            <li><strong>Comprensión del Lenguaje Natural:</strong> Se realizaron pruebas empíricas con los asistentes virtuales, aplicando la técnica del "Golden Set", que consiste en la creación de un conjunto estandarizado de preguntas para todos los chatbots. El conjunto se compuso de 20 preguntas distribuidas en cuatro categorías: errores ortográficos, uso de jergas, preguntas ambiguas y reformulaciones de una misma intención clínica. Todos los chatbots fueron sometidos a las mismas entradas, permitiendo una comparación directa de rendimiento. El análisis se realizó a partir de criterios de interpretación semántica, coherencia de las respuestas e identificación de la intención del usuario. Los resultados se categorizaron en niveles de rendimiento (alto, medio y bajo), permitiendo un análisis comparativo de los sistemas basado en evidencias empíricas.</li>
        </ul>`,
        referencial: `<p>Este marco teórico está estructurado de forma a presentar, inicialmente, los conceptos fundamentales relacionados con los chatbots en el área de la salud, abordados en la sección 3.1. A continuación, se analizan plataformas específicas utilizadas en el contexto de la salud digital, siendo ellas: Sensely, en la sección 3.2; Symptomate, en la sección 3.3; y Ada Health, en la sección 3.4, permitiendo una comprensión progresiva desde los conceptos generales hasta la aplicación práctica de estas herramientas.</p>

<h3>3.1 CHATBOTS</h3>
<p>Los 'bots', o robots de software, son sistemas automatizados desarrollados para ejecutar tareas de forma autónoma. Uno de los tipos más conocidos son los chatbots, diseñados para interactuar con los usuarios mediante el lenguaje natural, ya sea por texto o voz. Según Mauldin (1994), los primeros bots se crearon para simular conversaciones humanas en interfaces simples, pero con la evolución de la inteligencia artificial y el procesamiento del lenguaje natural, se han convertido en herramientas sofisticadas y realistas.</p>

<p>En el área de la salud, los chatbots han ganado protagonismo como soluciones tecnológicas capaces de optimizar procesos, ampliar el acceso a la información y ofrecer atención continua. Estas herramientas desempeñan el papel de asistentes virtuales, ayudando a llenar el vacío de comunicación entre pacientes y profesionales de la salud. Un estudio publicado por Inbenta (2022) destaca que, con la tecnología de inteligencia artificial, los chatbots son capaces de responder con mayor rapidez y eficiencia mediante interfaces conversacionales y, en algunos casos, de forma más eficaz que un asistente humano. Así, cuando están bien implementados, los chatbots pueden reducir el tiempo de espera, mejorar la eficiencia de la atención y aumentar la satisfacción de los usuarios.</p>

<p>Plataformas de inteligencia artificial como Ada Health, Molly (Sensely) y Symptomate han sido adoptadas por instituciones hospitalarias para atender grandes volúmenes de usuarios con seguridad y agilidad, demostrando la escalabilidad y confiabilidad de estos sistemas cuando se integran a bases de datos médicas estructuradas. Aunque presentan enfoques distintos, estas plataformas comparten funciones esenciales, como el triaje de síntomas mediante preguntas estructuradas, similar al proceso médico, la programación de citas, el monitoreo remoto, la orientación en cuidados de salud y la generación de diagnósticos preliminares.</p>

<p>A pesar de los avances presentados por los chatbots en el área de la salud, la literatura científica señala límites importantes en cuanto a su aplicación en la práctica clínica. Según Babushkina y Votsis (2022), la toma de decisiones diagnósticas mediada por inteligencia artificial exige supervisión humana constante, especialmente debido a las limitaciones relacionadas con la interpretación contextual y los riesgos de errores algorítmicos. En ese sentido, Topol (2019) argumenta que la inteligencia artificial posee un gran potencial para apoyar decisiones médicas, principalmente en el análisis de grandes volúmenes de datos, pero no debe ser vista como sustituta del profesional de la salud, sino como una herramienta complementaria. Esta perspectiva refuerza la necesidad de integración entre tecnología y experiencia humana, garantizando mayor seguridad y precisión en la atención.</p>

<p>Además de las limitaciones técnicas, también se destacan implicaciones éticas y sociales relacionadas con el uso de chatbots en la salud. La recolección y el procesamiento de datos sensibles plantean preocupaciones en cuanto a la privacidad, transparencia y responsabilidad en el uso de esta información, especialmente en contextos regulados por legislaciones de protección de datos. Como señalan Alowais et al. (2023), el uso de inteligencia artificial en la práctica clínica exige no solo validación técnica, sino también gobernanza adecuada y directrices éticas claras.</p>

<p>Desde el punto de vista bioético, Elias et al. (2023) destacan que la expansión de la inteligencia artificial en la salud también amplía discusiones relacionadas con la autonomía del paciente, seguridad de la información y responsabilización en casos de fallos diagnósticos. Además, estudios recientes señalan que los chatbots aplicados a la salud mental pueden generar riesgos relacionados con la confiabilidad de las respuestas y la ausencia de responsabilización humana directa (Silveira; Paravidini, 2024).</p>

<p>De esta forma, aunque los chatbots representan una innovación relevante en el campo de la salud digital, su adopción debe ir acompañada de análisis críticos en cuanto a su confiabilidad, limitaciones e impactos sociales, evitando una visión exclusivamente optimista y garantizando que su uso ocurra de manera responsable y segura.</p>

<h3>3.2 SENSELY</h3>
<p>La plataforma Sensely cuenta con una enfermera virtual llamada Molly, desarrollada en 2013 para reducir la sobrecarga en el sistema de salud, que combina inteligencia artificial y un avatar interactivo y tiene como objetivo ofrecer una atención más humanizada, especialmente en sistemas con alta demanda. La mayor motivación para la creación de esta herramienta fue mejorar la experiencia del paciente con un enfoque personalizado y ágil. Molly recolecta información mediante texto, voz, imágenes y videos, analizando síntomas e historial médico, y luego orientando los próximos pasos. Colabora con instituciones como el Servicio Nacional de Salud del Reino Unido y la Mayo Clinic, una organización del área de investigaciones médico-hospitalarias que tiene como objetivo expandir los recursos de la asistente virtual proporcionando orientaciones de salud a los usuarios, según información proporcionada por la plataforma SENSELY (2025).</p>

<h3>3.3 SYMPTOMATE</h3>
<p>Fundado en 2012 por la empresa polaca Infermedica, el chatbot Symptomate utiliza aprendizaje automático y algoritmos basados en redes neuronales para evaluar síntomas relatados por los usuarios mediante una entrevista digital, identificando posibles causas y ofreciendo orientaciones sobre tratamientos o la necesidad de cuidados médicos. Este chatbot es utilizado por diversas organizaciones, como aseguradoras y hospitales, para mejorar el triaje médico inicial y ayudar a los pacientes en la decisión sobre buscar atención inmediata INFERMEDICA (2025). Un ejemplo es eVisit, plataforma de cuidados virtuales que integró la API de Symptomate a su sistema, permitiendo el triaje automático de síntomas antes de las consultas.</p>

<h3>3.4 ADA HEALTH</h3>
<p>Ada Health, creado en 2011 por Claire Novorol, Daniel Nathrath y Martin Hirsch, integra sus tecnologías a iniciativas de autocuidado y educación en salud. La idea surgió a partir de dificultades de diagnóstico enfrentadas por un familiar de uno de los fundadores, lo que llevó a la creación de una plataforma para el público en general. Ada Health, reconocido por la precisión en el diagnóstico, ya ha firmado alianzas con hospitales como el Jefferson Health, en Estados Unidos, y colabora con empresas farmacéuticas como Bayer y Pfizer, según el sitio oficial de Ada Health (2025). Por ejemplo, la alianza con Bayer permite que los usuarios accedan a la plataforma de Ada a través de los sitios de productos como aspirina y Aleve. La plataforma está basada en redes neuronales y aprendizaje automático, y fue entrenada con más de 50 millones de interacciones reales.</p>

<p>En síntesis, los chatbots representan una innovación prometedora para el sector de la salud, proporcionando mayor acceso, agilidad y eficiencia en la atención a los usuarios. Sin embargo, para que estas herramientas alcancen su máximo potencial, es fundamental garantizar la calidad de las bases de datos utilizadas, la validación clínica de los sistemas y la protección de la privacidad de los pacientes.</p>`,
        resultados: `<p>La validación clínica de las plataformas Ada Health, Molly (Sensely) y Symptomate evidencia enfoques distintos en términos de rigor científico y aplicación práctica, reflejando sus enfoques y objetivos en el sector de la salud. Como se detalla en el Cuadro 1, estas plataformas tienen bases de entrenamiento variadas y diferentes niveles de evidencia científica, lo que impacta directamente su precisión diagnóstica y efectividad clínica.</p>

<h3>Cuadro 1 – Precisión y Efectividad Clínica de las herramientas Ada, Molly y Symptomate (Vía artículos publicados)</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Base de Entrenamiento</th><th>Estudios Científicos</th><th>Ejemplo de Efectividad Clínica</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>+50 millones de interacciones médicas reales.</td><td>70% de acierto entre los 3 principales diagnósticos y rendimiento similar a clínicos generales.</td><td>Ayudó a identificar apendicitis y acelerar triajes en programas corporativos.</td></tr>
        <tr><td>Molly (Sensely)</td><td>Protocolos clínicos + IA con retroalimentación continua.</td><td>85% de efectividad en insuficiencia cardíaca.</td><td>Redujo hospitalizaciones en pacientes crónicos con monitoreo remoto.</td></tr>
        <tr><td>Symptomate</td><td>Guías y datos clínicos simulados.</td><td>Precisión en casos simples como faringitis e ITU.</td><td>Ayudó a identificar dengue y enfermedades infecciosas en regiones tropicales.</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fuente:</strong> Autores (2025).</div>

<p>Ada Health se destaca por su robustez científica, con estudios revisados por pares publicados en revistas como BMJ Open y Nature Digital Medicine. En un estudio comparativo sobre aplicaciones de evaluación de síntomas, la plataforma presentó aproximadamente un 71% de acierto al incluir el diagnóstico correcto entre sus tres principales sugerencias, demostrando un rendimiento cercano al de médicos clínicos generales en determinados contextos (GILBERT et al., 2020). En contraste, Molly, desarrollada por Sensely, se concentra en el monitoreo remoto de pacientes crónicos, utilizando protocolos validados por el Servicio Nacional de Salud del Reino Unido (NHS). Estudios en el área de telemedicina señalan una alta efectividad de este tipo de solución en la gestión de enfermedades crónicas, como la insuficiencia cardíaca, evidenciando su relevancia práctica en el cuidado continuo de los pacientes (TELEMEDICINE AND E-HEALTH, 2020).</p>

<p>Symptomate, orientado a triajes de enfermedades específicas como las tropicales, presenta una eficacia clínica notable, con precisión diagnóstica similar a la médica en casos como faringitis e infecciones urinarias (BENIS, 2022), resaltando su utilidad en contextos endémicos y de emergencia. Estos resultados indican diferentes nichos de actuación y niveles de madurez clínica, destacando la importancia de análisis específicos para cada contexto de uso.</p>

<p>La seguridad y la privacidad de los datos son aspectos cruciales para las plataformas de salud digital, especialmente ante las exigencias de la Ley General de Protección de Datos (LGPD). La protección adecuada de esta información es fundamental para garantizar la confianza de los usuarios y prevenir posibles daños derivados del uso inadecuado de datos sensibles. Como se demuestra en el Cuadro 2, las plataformas analizadas presentan enfoques distintos en relación con la recolección de datos personales, como información clínica, registros de voz e incluso imágenes, además de variaciones significativas en el compartir con terceros y en la transparencia de las políticas.</p>

<h3>Cuadro 2 – Seguridad y Privacidad (LGPD - vía Webbkoll)</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Recolección de Datos Personales</th><th>Compartir con Terceros</th><th>Política y Consentimiento</th><th>No Conformidades Identificadas</th><th>Cookies</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>Nombre, edad, síntomas, ubicación.</td><td>Sí (Google Analytics, Meta Pixel)</td><td>Política técnica y poco accesible.</td><td>Rastrea datos antes del consentimiento.</td><td>2 de terceros, sin bloqueo inicial.</td></tr>
        <tr><td>Molly (Sensely)</td><td>Datos clínicos, voz, imagen.</td><td>Sí (AWS, Twilio, Analytics)</td><td>Limitada y solo en inglés.</td><td>Recolección sensible sin aviso explícito.</td><td>4 activos antes del consentimiento.</td></tr>
        <tr><td>Symptomate</td><td>Síntomas, edad, sexo.</td><td>Google (Limitado).</td><td>Política clara, en portugués.</td><td>Estructura simple sin llamadas a terceros en la página de inicio</td><td>Uso de cookies, bloqueados hasta interacción (8 en total)</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fuente:</strong> Autores (2025).</div>

<p>Mientras que Ada Health y Molly (Sensely) utilizan herramientas de rastreo antes de obtener el consentimiento, Symptomate se destaca por una estructura más simplificada y alineada con los principios de la LGPD. El análisis comparativo realizado evidencia estas diferencias, particularmente en lo que respecta a la claridad de las políticas, el cumplimiento legal y la presencia de vulnerabilidades potencialmente críticas.</p>

<p>Mientras que Symptomate adopta medidas como el bloqueo inicial de cookies y un alcance limitado de compartir con terceros (solo Google básico), las otras plataformas demuestran incumplimientos con la LGPD, como: Molly (Sensely): Recolección de datos sensibles (voz e imagen) sin aviso explícito y uso de cuatro cookies activas antes del consentimiento, exponiendo a los usuarios a posibles violaciones. Ada Health: Rastreo previo de datos (vía Google Analytics y Meta Pixel) y políticas de privacidad complejas, dificultando la comprensión del usuario sobre cómo se trata su información. Estas diferencias no solo reflejan distintos niveles de cumplimiento con la LGPD, sino que también impactan directamente la confianza del usuario – factor esencial en plataformas de salud digital, donde la sensibilidad de los datos exige máxima transparencia y control, como se ve en la insuficiencia cardíaca (Telemedicine and e-Health, 2020), evidenciando relevancia práctica en cuidados continuos.</p>

<p>La satisfacción de los usuarios es un medio importante para evaluar la eficacia y la adopción de plataformas digitales de salud. Las evaluaciones en las tiendas de aplicaciones (App Store y Google Play) de Ada Health, Molly (Sensely) y Symptomate revelan no solo la percepción general de cada una, sino también patrones recurrentes que moldean la experiencia práctica, desde interfaces intuitivas hasta fallos operacionales. El Cuadro 3 sintetiza estos datos, cruzando métricas como calificación promedio, número de evaluaciones y estimación de descargas. Para el análisis cualitativo de los comentarios, se recopilaron y categorizaron los 50 comentarios más recientes de cada plataforma en las tiendas App Store y Google Play, agrupándose en dos categorías principales: elogios recurrentes y críticas recurrentes, basándose en repetición temática y frecuencia de menciones.</p>

<h3>Cuadro 3 – Satisfacción del Usuario vía App Store y Google Play</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Calificación Promedio</th><th>Nº de Evaluaciones</th><th>Descargas Estimadas</th><th>Elogios Frecuentes</th><th>Críticas Frecuentes</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>4.9 ★ (iOS)<br>4.7 ★ (Android)</td><td>+5 mil</td><td>+2 millones</td><td>Interfaz intuitiva, diagnósticos rápidos, sensación de apoyo profesional</td><td>Preguntas repetitivas, falta de integración con médicos locales</td></tr>
        <tr><td>Molly (Sensely)</td><td>4.6 ★ (iOS)<br>4.3 ★ (Android)</td><td>219 evaluaciones</td><td>+10 mil</td><td>Avatar humanizado, sensación de conversación real, útil para enfermedades crónicas</td><td>Respuestas lentas, bugs, indisponibilidad regional</td></tr>
        <tr><td>Symptomate</td><td>4.7 ★ (iOS)<br>4.3 ★ (Android)</td><td>+10 mil</td><td>+500 mil</td><td>Simple, rápido, orientaciones claras, app ligera</td><td>Poca personalización, sin historial de síntomas</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fuente:</strong> Autores (2025).</div>

<p>El rendimiento técnico de las plataformas digitales de salud desempeña un papel esencial en la garantía de la usabilidad, seguridad y calidad de la experiencia del usuario. En el contexto de los chatbots analizados, la evaluación de aspectos como accesibilidad, velocidad de carga, estabilidad visual y cumplimiento con buenas prácticas web permite identificar limitaciones técnicas que pueden impactar negativamente su adopción y eficacia.</p>

<p>El Cuadro 4 presenta un análisis comparativo de estos elementos, basado en pruebas realizadas en dispositivos computadora y celular, según los criterios de la herramienta Google Lighthouse y los Core Web Vitals, un conjunto de indicadores definidos por Google para medir la experiencia del usuario en páginas web.</p>

<p>Los resultados del Google Lighthouse se presentan en una escala de 0 a 100, en la que valores más cercanos a 100 indican un mejor rendimiento de la plataforma, mientras que valores más bajos representan un menor cumplimiento con las buenas prácticas de desarrollo y una mayor presencia de problemas técnicos. De esta forma, cuanto mayor sea la puntuación, mejor será el rendimiento de la plataforma en cada métrica evaluada.</p>

<p>Se evalúan indicadores como accesibilidad, rendimiento, cumplimiento con prácticas recomendadas, posicionamiento en los resultados de búsqueda (SEO – Search Engine Optimization) y métricas de experiencia real de uso (Core Web Vitals, incluyendo LCP – Largest Contentful Paint, INP – Interaction to Next Paint y CLS – Cumulative Layout Shift). El Cuadro incluye, además, una justificación interpretativa para cada resultado, indicando si la plataforma cumple con los parámetros mínimos considerados adecuados. Para la aprobación en los indicadores Core Web Vitals, es necesario que las plataformas satisfagan, en al menos el 75% de las visitas reales, los siguientes parámetros:</p>

<ul>
<li><b>LCP</b> (Largest Contentful Paint): mide el tiempo necesario para cargar y mostrar el elemento visible más grande de la página. Para una buena experiencia del usuario, este tiempo debe ser de hasta 2,5 segundos.</li>
<li><b>INP</b> (Interaction to Next Paint): mide el intervalo entre la interacción del usuario (como clic o toque) y la actualización visual subsiguiente. Un valor de hasta 200 milisegundos indica que la interfaz responde de forma ágil, evitando retrasos perceptibles que puedan perjudicar la usabilidad.</li>
<li><b>CLS</b> (Cumulative Layout Shift): cuantifica la estabilidad visual de la página durante la carga. Valores hasta 0,1 se consideran aceptables, garantizando que el diseño permanezca estable mientras se carga el contenido.</li>
</ul>

<h3>Cuadro 4 – Accesibilidad según Google Lighthouse.</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Dispositivo</th><th>Accesibilidad</th><th>Rendimiento</th><th>Prácticas Recomendadas</th><th>SEO</th><th>Core Web Vitals (LCP / INP / CLS)</th></tr>
    </thead>
<tbody>
    <tr><td rowspan="2">Ada Health</td><td>Computer</td><td>96</td><td>98</td><td>93</td><td>100</td><td class="cwv-cell"><strong>LCP:</strong> 1.6s<br><strong>INP:</strong> 51ms<br><strong>CLS:</strong> 0.11</td></tr>
    <tr><td>Mobile</td><td>96</td><td>79</td><td>100</td><td>100</td><td class="cwv-cell"><strong>LCP:</strong> 2.2s<br><strong>INP:</strong> 130ms<br><strong>CLS:</strong> 0.09</td></tr>
</tbody>
<tbody>
    <tr><td rowspan="2">Molly (Sensely)</td><td>Computer</td><td>76</td><td>75</td><td>100</td><td>77</td><td class="cwv-cell"><strong>LCP:</strong> 3.2s<br><strong>INP:</strong> 79ms<br><strong>CLS:</strong> 0.01</td></tr>
    <tr><td>Mobile</td><td>79</td><td>71</td><td>100</td><td>77</td><td class="cwv-cell"><strong>LCP:</strong> 3.2s<br><strong>INP:</strong> 271ms<br><strong>CLS:</strong> 0.08</td></tr>
</tbody>
<tbody>
    <tr><td rowspan="2">Symptomate</td><td>Computer</td><td>65</td><td>90</td><td>100</td><td>92</td><td class="cwv-cell"><strong>LCP:</strong> 3.4s<br><strong>INP:</strong> 76ms<br><strong>CLS:</strong> 0.05</td></tr>
    <tr><td>Mobile</td><td>60</td><td>90</td><td>100</td><td>92</td><td class="cwv-cell"><strong>LCP:</strong> 4s<br><strong>INP:</strong> 195ms<br><strong>CLS:</strong> 0.32</td></tr>
</tbody>
</table>
</div>
<div class="table-source"><strong>Fuente:</strong> Autores (2025).</div>

<p>A partir de los datos presentados en el Cuadro 4, se observan contrastes significativos entre las plataformas en lo que respecta al rendimiento técnico y la experiencia del usuario. Ada Health se destaca con métricas altamente positivas en computadoras y celulares, presentando indicadores dentro de los límites recomendados y buena usabilidad general. A pesar de un ligero CLS elevado en el escritorio, que indica cierta inestabilidad en el diseño, los tiempos de carga y la capacidad de respuesta siguen siendo satisfactorios, reforzando la madurez técnica de la plataforma. Molly (Sensely), por otro lado, aunque mantiene una buena puntuación en accesibilidad y prácticas recomendadas, sufre con un LCP elevado tanto en computadoras como en móviles, lo que representa una demora en la carga del contenido principal. Esta lentitud, sumada al retraso perceptible en las interacciones en dispositivos móviles, compromete la fluidez de la navegación. Finalmente, Symptomate presenta el peor rendimiento general: además de un LCP por encima del ideal, perjudicando la experiencia del usuario, el CLS en el celular es considerablemente alto, lo que indica una inestabilidad visual significativa.</p>

<p>El análisis de la capacidad de comprensión del lenguaje natural por las plataformas, como se detalla en el Cuadro 5, revela matices importantes sobre la calidad de la interacción entre usuario y chatbot. La capacidad de comprender el lenguaje natural de los usuarios es uno de los principales desafíos para las plataformas digitales de salud, especialmente en contextos donde se utiliza un lenguaje informal o con preguntas ambiguas. La usabilidad, la flexibilidad conversacional y la precisión en la interpretación de las intenciones son factores esenciales para una experiencia eficaz y segura. En este sentido, el Cuadro 5 analiza el rendimiento lingüístico de los chatbots Ada Health, Molly (Sensely) y Symptomate basándose en cinco criterios fundamentales, evaluados cualitativamente como bajo, medio o alto rendimiento: tolerancia a jergas y errores, interpretación de preguntas ambiguas, reformulación del diálogo e identificación correcta de la intención del mensaje del usuario.</p>

<h3>Cuadro 5. Comprensión del Lenguaje Natural (Método Golden Set).</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Tolerancia a Jergas y Errores</th><th>Interpretación de Preguntas Ambiguas</th><th>Reformulación del Diálogo</th><th>Capacidad de Identificación Correcta de la Intención</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>Alta</td><td>Regular</td><td>Alta</td><td>Alta</td></tr>
        <tr><td>Molly (Sensely)</td><td>Media</td><td>Baja</td><td>Media</td><td>Alta</td></tr>
        <tr><td>Symptomate</td><td>Alta</td><td>Alta</td><td>Alta</td><td>Alta</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fuente:</strong> Autores (2025).</div>

<p>El análisis del Cuadro 5 muestra que Symptomate se destaca en la comprensión del lenguaje natural, demostrando una alta tolerancia a jergas, errores ortográficos y preguntas ambiguas. Expresiones informales como "estoy mal" o frases vagas como "creo que tengo dengue o un virus" son bien interpretadas, garantizando continuidad en la atención. Ada Health presenta un rendimiento regular en ambigüedad, pero reconoce variaciones como "dolor de barriga" y corrige errores como "cabesa" por "cabeza", manteniendo una buena fluidez. Molly (Sensely) tiene dificultades en este aspecto, exigiendo frases más directas; las expresiones genéricas resultan en respuestas vagas y poco útiles.</p>

<p>En términos de reformulación del diálogo, Ada Health y Symptomate se muestran más adaptables a las interacciones del usuario, mientras que Molly enfrenta limitaciones que afectan la naturalidad de la conversación. En la identificación de intenciones, todas tienen un rendimiento funcional, pero Ada Health y Symptomate demuestran mayor precisión, incluso con lenguaje informal.</p>`,
        consideracoes: `<p>El análisis comparativo de los chatbots Ada Health, Molly (Sensely) y Symptomate demostró que estas herramientas tienen un gran potencial para contribuir con la atención en salud, ofreciendo triajes ágiles, soporte clínico inicial y accesibilidad a los usuarios. Entre las soluciones analizadas, Ada Health presentó un rendimiento consistente en múltiples criterios adoptados en esta investigación, combinando alta precisión diagnóstica, validación científica robusta, excelente experiencia de uso y amplia aceptación del público. Sin embargo, los resultados obtenidos están directamente condicionados a los criterios de evaluación y a los métodos utilizados en este estudio, de carácter exploratorio y comparativo, no siendo posible generalizar los resultados para todos los contextos clínicos y tecnológicos. Además, se observó que cada plataforma se destaca en dimensiones específicas, como rendimiento técnico, precisión clínica y cumplimiento con la LGPD; La plataforma Molly ofrece un diferencial humanizado mediante un avatar interactivo y Symptomate presenta un fuerte rendimiento en lenguaje natural y cumplimiento con la LGPD. A pesar de ello, ambos aún enfrentan limitaciones en rendimiento técnico, privacidad o alcance funcional en determinados criterios analizados. En este contexto, los resultados indican que Ada Health presentó un mayor equilibrio entre los aspectos evaluados en esta investigación, pudiendo servir como referencia para futuras aplicaciones de inteligencia artificial en la salud digital. Se recomienda que las nuevas implementaciones prioricen la seguridad de los datos, la validación clínica continua y el enfoque en la experiencia del paciente para garantizar un impacto positivo y ético en el sector, promoviendo también una mayor accesibilidad y personalización de la atención digital.</p>`,
        referencias: `<div class="references-container">
    <div class="references-grid">
        <div class="reference-item">
            <div class="ref-authors">ADA HEALTH.</div>
            <div class="ref-title">Cómo funciona Ada.</div>
            <div class="ref-year">2025.</div>
            <div class="ref-source">Disponible en: <a href="https://ada.com/pt/" target="_blank" rel="noopener noreferrer">https://ada.com/pt/</a></div>
            <div class="ref-access">Acceso en: 12 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ALOWAIS, S. A.; SHUROUG, S.</div>
            <div class="ref-title">Revolucionando la salud: el papel de la inteligencia artificial en la práctica clínica.</div>
            <div class="ref-source">BMC Medical Education, 2023.</div>
            <div class="ref-source">Disponible en: <a href="https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-023-04698z#citeas" target="_blank" rel="noopener noreferrer">https://bmcmededuc.biomedcentral.com</a></div>
            <div class="ref-access">Acceso en: 25 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ARMITAGE, H.</div>
            <div class="ref-title">Chatbot de decisión médica.</div>
            <div class="ref-source">Stanford Medicine, 2025.</div>
            <div class="ref-source">Disponible en: <a href="https://med.stanford.edu/news/all-news/2025/02/physiciandecision-chatbot.html" target="_blank" rel="noopener noreferrer">https://med.stanford.edu</a></div>
            <div class="ref-access">Acceso en: 13 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BABUSHKINA, D.; VOTSIS, A.</div>
            <div class="ref-title">Restricciones epistemo-éticas en la toma de decisiones entre IA y humanos con fines diagnósticos.</div>
            <div class="ref-source">Ethics and Information Technology, v. 24, n. 22, 2022.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BENIS, A. I.</div>
            <div class="ref-title">El uso de chatbots en el cuidado de la salud: una revisión de la literatura.</div>
            <div class="ref-source">JMIR Medical Informatics, v. 8, n. 4, 2020.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BMJ OPEN.</div>
            <div class="ref-title">Comparación del rendimiento del triaje de verificadores de síntomas en atención primaria.</div>
            <div class="ref-source">BMJ Open, v. 10, n. 4, 2020.</div>
            <div class="ref-source">Disponible en: <a href="https://bmjopen.bmj.com/" target="_blank" rel="noopener noreferrer">https://bmjopen.bmj.com/</a></div>
            <div class="ref-access">Acceso en: 18 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">CARDOSO, Ericson.</div>
            <div class="ref-title">Importancia de la tecnología en la salud: innovaciones y beneficios, 2024.</div>
            <div class="ref-source">Disponible en: <a href="https://blog.ux4you.com.br/2024/06/24/importancia-da-tecnologia-na-saude-inovacoes-e-beneficios/" target="_blank" rel="noopener noreferrer">https://blog.ux4you.com.br</a></div>
            <div class="ref-access">Acceso en: 13 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ELIAS, M. A. et al.</div>
            <div class="ref-title">Inteligencia artificial en salud e implicaciones bioéticas: una revisión sistemática.</div>
            <div class="ref-source">Revista Bioética, 2023.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">FAN, H. et al.</div>
            <div class="ref-title">Utilización de chatbots de autodiagnóstico en entornos reales: estudio de caso.</div>
            <div class="ref-source">Journal of Medical Internet Research, v. 23, n. 1, 2021.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">GILBERT, S. et al.</div>
            <div class="ref-title">¿Qué tan precisas son las aplicaciones digitales de evaluación de síntomas para sugerir condiciones y consejos de urgencia? Una comparación de viñetas clínicas con médicos generales.</div>
            <div class="ref-source">BMJ Open, v. 10, n. 12, 2020.</div>
            <div class="ref-source">Disponible en: <a href="https://bmjopen.bmj.com/content/10/12/e040269" target="_blank" rel="noopener noreferrer">https://bmjopen.bmj.com</a></div>
            <div class="ref-access">Acceso en: 14 mayo 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INBENTA.</div>
            <div class="ref-title">Beneficios de los chatbots en el área de la salud: 9 casos de uso.</div>
            <div class="ref-source">Inbenta, 2022.</div>
            <div class="ref-source">Disponible en: <a href="https://www.inbenta.com/pt-br/articles/benefits-of-chatbots-in-healthcare-9-use-cases-of-healthcare-chatbots/" target="_blank" rel="noopener noreferrer">https://www.inbenta.com</a></div>
            <div class="ref-access">Acceso en: 10 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INFERMEDICA.</div>
            <div class="ref-title">Symptomate.</div>
            <div class="ref-source">Disponible en: <a href="https://symptomate.com/pt-br/about" target="_blank" rel="noopener noreferrer">https://symptomate.com/pt-br/about</a></div>
            <div class="ref-access">Acceso en: 06 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">LARANJO, L. et al.</div>
            <div class="ref-title">Agentes conversacionales en el cuidado de la salud: una revisión sistemática.</div>
            <div class="ref-source">Journal of the American Medical Informatics Association, v. 25, n. 9, p. 1248-1258, 2018.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">LAURENTYS, Paulo.</div>
            <div class="ref-title">Hospitales inteligentes: ¿cuáles son los avances de la IA en el sistema de salud brasileño?</div>
            <div class="ref-source">Saúde Digital News, 2025.</div>
            <div class="ref-source">Disponible en: <a href="https://medicinasa.com.br/hospitais-inteligentes-ia/" target="_blank" rel="noopener noreferrer">https://medicinasa.com.br</a></div>
            <div class="ref-access">Acceso en: 10 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">MAULDIN, M.</div>
            <div class="ref-title">ChatterBots, TinyMUDs y la prueba de Turing: entrando en la competencia del Premio Loebner.</div>
            <div class="ref-source">In: Proceedings of the National Conference on Artificial Intelligence. 1994. p. 16–21.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SENSELY.</div>
            <div class="ref-title">Sensely.</div>
            <div class="ref-source">[s.f.].</div>
            <div class="ref-source">Disponible en: <a href="https://sensely.com/" target="_blank" rel="noopener noreferrer">https://sensely.com/</a></div>
            <div class="ref-access">Acceso en: 14 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SILVEIRA, P. V. R.; PARAVIDINI, J. L. L.</div>
            <div class="ref-title">Ética de la aplicación de inteligencias artificiales y chatbots en la salud mental: una perspectiva psicoanalítica.</div>
            <div class="ref-source">Revista Pesquisa Qualitativa, v. 12, n. 30, 2024.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">TELEMEDICINE AND E-HEALTH.</div>
            <div class="ref-title">Monitoreo remoto de pacientes para el manejo de enfermedades crónicas: resultados y efectividad en el cuidado de la insuficiencia cardíaca.</div>
            <div class="ref-source">Telemedicine and e-Health, v. 26, n. 5, 2020.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">TOPOL, Eric.</div>
            <div class="ref-title">Medicina profunda: cómo la inteligencia artificial puede humanizar nuevamente la atención médica.</div>
            <div class="ref-source">ACM Digital Library, 2019.</div>
        </div>
    </div>
</div>`
    }
};