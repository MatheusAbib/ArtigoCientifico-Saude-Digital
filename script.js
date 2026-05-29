
let currentLang = localStorage.getItem('selectedLang') || 'pt';

const langSelectOriginal = document.getElementById('langSelect');
const langSelectFixed = document.getElementById('langSelectFixed');

if (langSelectOriginal) langSelectOriginal.value = currentLang;
if (langSelectFixed) langSelectFixed.value = currentLang;

const translations = {
    pt: {
        logo: "Chatbots na Saúde Digital",
        nav: {
            resumo: "Resumo",
            introducao: "Introdução",
            metodologia: "Metodologia",
            referencial: "Referencial",
            resultados: "Resultados",
            consideracoes: "Considerações",
            referencias: "Referências"
        },
        toc: {
            titulo: "Índice",
            resumo: "Resumo",
            introducao: "Introdução",
            metodologia: "Metodologia",
            referencial: "Referencial teórico",
            resultados: "Resultados e discussão",
            consideracoes: "Considerações finais",
            referencias: "Referências"
        },
        hero: {
            titulo: "Entre a tecnologia e o cuidado:<br>análise comparativa estruturada de chatbots na saúde digital",
            subtitulo: "Ada Health · Molly (Sensely) · Symptomate — precisão diagnóstica, LGPD, usabilidade e linguagem natural."
        },
        byline: {
            autor1: "Andressa Barbosa Carvalho Araújo",
            autor2: "Matheus Bilitardo Abib",
            autor3: "Luciano Gonçalves de Carvalho",
            tempoLeitura: "18",
            minLeitura: "min de leitura",
            instituicao: "FATEC Mogi das Cruzes · 2025"
        },
        buttons: {
            citarABNT: "Citar ABNT",
            citarAPA: "Citar APA",
            tema: "Tema",
            abrirPDF: "Abrir PDF"
        },
        footer: {
            autores: "Autores",
            instituicao: "Instituição",
            links: "Links Principais",
            compartilhe: "Compartilhe",
            comoCitar: "Como citar este artigo:",
            direitos: "Todos os direitos reservados",
            resumoArtigo: "Resumo do artigo",
            metodologia: "Metodologia",
            resultados: "Resultados",
            referencias: "Referências"
        },
        references: {
            title: "REFERÊNCIAS",
            previous: "Anterior",
            next: "Próxima",
            page: "Página",
            of: "de",
            references: "referências"
        },
        toast: {
            langChanged: "Idioma alterado para "
        }
    },
    en: {
        logo: "Chatbots in Digital Health",
        nav: {
            resumo: "Abstract",
            introducao: "Introduction",
            metodologia: "Methodology",
            referencial: "Theoretical Framework",
            resultados: "Results",
            consideracoes: "Conclusion",
            referencias: "References"
        },
        toc: {
            titulo: "Index",
            resumo: "Abstract",
            introducao: "Introduction",
            metodologia: "Methodology",
            referencial: "Theoretical Framework",
            resultados: "Results and Discussion",
            consideracoes: "Final Considerations",
            referencias: "References"
        },
        hero: {
            titulo: "Between technology and care:<br>structured comparative analysis of chatbots in digital health",
            subtitulo: "Ada Health · Molly (Sensely) · Symptomate — diagnostic accuracy, LGPD, usability and natural language."
        },
        byline: {
            autor1: "Andressa Barbosa Carvalho Araújo",
            autor2: "Matheus Bilitardo Abib",
            autor3: "Luciano Gonçalves de Carvalho",
            tempoLeitura: "18",
            minLeitura: "min read",
            instituicao: "FATEC Mogi das Cruzes, SP - Brazil · 2025"
        },
        buttons: {
            citarABNT: "Cite ABNT",
            citarAPA: "Cite APA",
            tema: "Theme",
            abrirPDF: "Open PDF"
        },
        footer: {
            autores: "Authors",
            instituicao: "Institution",
            links: "Main Links",
            compartilhe: "Share",
            comoCitar: "How to cite this article:",
            direitos: "All rights reserved",
            resumoArtigo: "Article abstract",
            metodologia: "Methodology",
            resultados: "Results",
            referencias: "References"
        },
        references: {
            title: "REFERENCES",
            previous: "Previous",
            next: "Next",
            page: "Page",
            of: "of",
            references: "references"
        },
        toast: {
            langChanged: "Language changed to "
        }
    },
   es: {
    logo: "Chatbots en Salud Digital",
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
    hero: {
        titulo: "Entre la tecnología y el cuidado:<br>análisis comparativo estructurado de chatbots en salud digital",
        subtitulo: "Ada Health · Molly (Sensely) · Symptomate — precisión diagnóstica, LGPD, usabilidad y lenguaje natural."
    },
    byline: {
        autor1: "Andressa Barbosa Carvalho Araújo",
        autor2: "Matheus Bilitardo Abib",
        autor3: "Luciano Gonçalves de Carvalho",
        tempoLeitura: "18",
        minLeitura: "min de lectura",
        instituicao: "FATEC Mogi das Cruzes, SP - Brasil · 2025"
    },
    buttons: {
        citarABNT: "Citar ABNT",
        citarAPA: "Citar APA",
        tema: "Tema",
        abrirPDF: "Abrir PDF"
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
        referencias: "Referencias"
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
        langChanged: "Idioma cambiado a "
    },
}
};

const fullContent = {
  pt: {
    resumo: `
        <p>O presente artigo analisa comparativamente as seguintes plataformas de chatbots aplicadas à saúde digital: Ada Health, Molly (Sensely) e Symptomate. Utilizando uma abordagem exploratória, bibliográfica e com elementos quantitativos e qualitativos, o estudo avalia aspectos técnicos, clínicos e de experiência do usuário por meio de critérios como precisão diagnóstica, conformidade com a Lei Geral de Proteção de Dados (LGPD), satisfação dos usuários, acessibilidade técnica e compreensão de linguagem natural. Os resultados indicam que a Ada Health se destaca pela robustez científica e aceitação do público, a Molly pela abordagem humanizada com avatar interativo voltado ao monitoramento de doenças crônicas, e o Symptomate pela simplicidade e eficiência na triagem inicial de sintomas. A análise revela que, embora os chatbots ampliem o acesso e otimizem o atendimento em saúde, ainda enfrentam desafios relacionados à privacidade, personalização e usabilidade. Conclui-se que essas ferramentas possuem grande potencial para complementar o cuidado médico, desde que sua implementação observe aspectos éticos, técnicos e regulatórios.</p>
        <div class="keywords"><strong>Palavras-chave:</strong> Chatbot; Inteligência Artificial; Internet; LGPD; Saúde.</div>
    `,

    introducao: `<p>De acordo com Cardoso (2024), a evolução tecnológica tem impulsionado inovações em diversas áreas, e a saúde tem sido uma das mais beneficiadas por essas transformações. A incorporação de novas tecnologias tem proporcionado avanços significativos na eficiência do atendimento médico e na experiência dos pacientes. Ferramentas como inteligência artificial, realidade aumentada e automação têm desempenhado um papel crucial nesse processo, melhorando a qualidade do atendimento, a precisão dos diagnósticos e a agilidade nos tratamentos.</p>
    <p>Os chatbots, que são programas de inteligência artificial capazes de interagir com usuários por meio de mensagens automatizadas, surgem como uma solução inovadora para fornecer suporte contínuo e personalizado aos pacientes. Oferecendo respostas rápidas e eficazes sobre sintomas, medicamentos e tratamentos, esses sistemas revolucionam a prestação de serviços de saúde. Eles contribuem para a redução de custos operacionais, otimizam o uso dos recursos humanos e permitem que os profissionais de saúde se concentrem em casos mais complexos, demonstrando o potencial das tecnologias emergentes na transformação da saúde.</p>
    <p>Esses sistemas já estão transformando o atendimento médico ao oferecer suporte acessível, automatizado e contínuo aos pacientes, essas soluções permitem desde a triagem automatizada até o suporte a diagnósticos e procedimentos médicos, contribuindo para maior eficiência e segurança no atendimento como afirmado por Laurentys (2025). A interação em tempo real proporcionada por eles é especialmente valiosa em contextos em que a rapidez no atendimento é crucial.</p>
    <p>Apesar dos avanços proporcionados pelos chatbots, a implementação deles enfrenta desafios significativos. A segurança dos dados pessoais é uma preocupação central, já que sistemas baseados em inteligência artificial podem aumentar a exposição a riscos de segurança e privacidade, como destaca Topol (2019). Além disso, embora os chatbots forneçam respostas rápidas, podem apresentar dificuldades na interpretação de sintomas complexos, além de limitações na precisão diagnóstica e na comunicação com os usuários. Ademais, fatores como a falta de empatia e a desconfiança de pacientes e profissionais de saúde representam barreiras para a adoção dessas tecnologias (FAN et al., 2021; LARANJO et al., 2018).</p>
    <p>Este artigo visa comparar chatbots Ada Health, Molly e Symptomate, que, embora compartilhem semelhanças, apresentam características únicas em suas abordagens. A escolha das plataformas analisadas baseou-se em critérios objetivos, como: presença em estudos científicos e validações clínicas publicadas em artigos, disponibilidade de documentação técnica detalhada em sites oficiais das plataformas e acessibilidade das plataformas para realização de testes. Esses critérios foram adotados com o objetivo de garantir a relevância, comparabilidade e viabilidade da análise proposta. Ao analisar suas operações no atendimento médico, busca-se entender como essas tecnologias estão transformando a prestação de serviços de saúde, tornando-os mais eficientes, acessíveis e centrados no paciente.</p>`,

    metodologia: `<p>A pesquisa desse artigo adota uma abordagem mista (qualitativa e quantitativa), exploratória e bibliográfica, com ênfase no levantamento, análise e comparação de três assistentes virtuais utilizados na saúde: Molly (Sensely), Symptomate e Ada Health.</p>
    <p>Para isso, foram consultadas fontes primárias e secundárias, como plataformas especializadas em divulgação científica, como PubMed, ScienceDirect e BMJ Open, além de fontes jornalísticas, como Forbes, MedCity News e Medicina S/A. As informações extraídas abrangem aspectos, como seus mecanismos de funcionamento, eficácia clínica, estudos comparativos, e avaliações sobre a acessibilidade dos sistemas.</p>
    <p>Os critérios para analisar os diferentes aspectos de atuação das plataformas citadas anteriormente no contexto da saúde digital foram:</p>
    <ul>
        <li><strong>Precisão e Efetividade Clínica:</strong> a análise será fundamentada em estudos científicos disponíveis em bases como PubMed e Google Scholar, que trazem validações clínicas, comparações diagnósticas e eficácia em triagem médica;</li>
        <li><strong>Segurança e Privacidade:</strong> para avaliar a conformidade com a Lei Geral de Proteção de Dados (LGPD), será utilizada a ferramenta de auditoria digital Webbkoll, que verifica práticas de coleta de dados, ausência de política de privacidade visível e envio de informações a terceiros;</li>
        <li><strong>Satisfação do Usuário:</strong> a percepção dos usuários será investigada por meio da análise das avaliações públicas nas lojas de aplicativos (App Store ou Google Play), considerando notas atribuídas, comentários frequentes e número de downloads, a fim de identificar padrões de aceitação e críticas recorrentes;</li>
        <li><strong>Acessibilidade:</strong> será avaliada através das ferramentas Google Lighthouse que dá um panorama quantitativo e técnico da acessibilidade que afetam diretamente a navegação de pessoas com deficiência;</li>
        <li><strong>Compreensão de Linguagem Natural:</strong> foram realizados testes empíricos com os assistentes virtuais, aplicando a técnica do "Golden Set", que consiste na criação de um conjunto padronizado de perguntas para todos os chatbots. O conjunto foi composto por 20 perguntas distribuídas entre quatro categorias: erros ortográficos, uso de gírias, perguntas ambíguas e reformulações de uma mesma intenção clínica. Todos os chatbots foram submetidos às mesmas entradas, permitindo comparação direta de desempenho. A análise foi realizada a partir de critérios de interpretação semântica, coerência das respostas e identificação da intenção do usuário. Os resultados foram categorizados em níveis de desempenho (alto, médio e baixo), permitindo uma análise comparativa dos sistemas com base em evidências empíricas.</li>
    </ul>`,

    referencial: `<p>Este referencial teórico está estruturado de forma a apresentar, inicialmente, os conceitos fundamentais relacionados aos chatbots na área da saúde, abordados na seção 3.1. Em seguida, são analisadas plataformas específicas utilizadas no contexto da saúde digital, sendo elas: Sensely, na seção 3.2; Symptomate, na seção 3.3; e Ada Health, na seção 3.4, permitindo uma compreensão progressiva desde os conceitos gerais até a aplicação prática dessas ferramentas.</p>

<h3>3.1 CHATBOTS</h3>
<p>Os ‘bots’, ou robôs de software, são sistemas automatizados desenvolvidos para executar tarefas de forma autônoma. Um dos tipos mais conhecidos são os chatbots, projetados para interagir com os usuários por meio da linguagem natural, seja por texto ou voz. Segundo Mauldin (1994), os primeiros bots foram criados para simular conversas humanas em interfaces simples, mas, com a evolução da inteligência artificial e do processamento de linguagem natural, tornaram-se ferramentas sofisticadas e realistas.</p>

<p>Na área da saúde, os chatbots têm ganhado destaque como soluções tecnológicas capazes de otimizar processos, ampliar o acesso à informação e oferecer atendimento contínuo. Essas ferramentas desempenham o papel de assistentes virtuais, ajudando a preencher a lacuna de comunicação entre pacientes e profissionais da saúde. Um estudo publicado pela Inbenta (2022) destaca que, com a tecnologia de inteligência artificial, os chatbots são capazes de responder com maior rapidez e eficiência por meio de interfaces conversacionais e, em alguns casos, de forma mais eficaz do que um assistente humano. Assim, quando bem implementados, os chatbots podem reduzir o tempo de espera, melhorar a eficiência do atendimento e aumentar a satisfação dos usuários.</p>

<p>Plataformas de inteligência artificial como Ada Health, Molly (Sensely) e Symptomate têm sido adotadas por instituições hospitalares para atender grandes volumes de usuários com segurança e agilidade, demonstrando a escalabilidade e a confiabilidade desses sistemas quando integrados a bases de dados médicas estruturadas. Embora apresentem abordagens distintas, essas plataformas compartilham funções essenciais, como a triagem de sintomas por meio de perguntas estruturadas, semelhante ao processo médico, o agendamento de consultas, o monitoramento remoto, a orientação em cuidados de saúde e a geração de diagnósticos preliminares.</p>

<p>Apesar dos avanços apresentados pelos chatbots na área da saúde, a literatura científica aponta limites importantes quanto à sua aplicação na prática clínica. Segundo Babushkina e Votsis (2022), a tomada de decisão diagnóstica mediada por inteligência artificial exige supervisão humana constante, especialmente devido às limitações relacionadas à interpretação contextual e aos riscos de erros algorítmicos. Nesse sentido, Topol (2019) argumenta que a inteligência artificial possui grande potencial para apoiar decisões médicas, principalmente na análise de grandes volumes de dados, porém não deve ser vista como substituta do profissional de saúde, mas sim como uma ferramenta complementar. Essa perspectiva reforça a necessidade de integração entre tecnologia e expertise humana, garantindo maior segurança e precisão no atendimento.</p>

<p>Além das limitações técnicas, destacam-se também implicações éticas e sociais relacionadas ao uso de chatbots na saúde. A coleta e o processamento de dados sensíveis levantam preocupações quanto à privacidade, transparência e responsabilidade no uso dessas informações, especialmente em contextos regulados por legislações de proteção de dados. Conforme apontado por Alowais et al. (2023), o uso de inteligência artificial na prática clínica exige não apenas validação técnica, mas também governança adequada e diretrizes éticas claras.</p>

<p>Do ponto de vista bioético, Elias et al. (2023) destacam que a expansão da inteligência artificial na saúde também amplia discussões relacionadas à autonomia do paciente, segurança das informações e responsabilização em casos de falhas diagnósticas. Além disso, estudos recentes apontam que chatbots aplicados à saúde mental podem gerar riscos relacionados à confiabilidade das respostas e à ausência de responsabilização humana direta (Silveira; Paravidini, 2024).</p>

<p>Dessa forma, embora os chatbots representem uma inovação relevante no campo da saúde digital, sua adoção deve ser acompanhada de análises críticas quanto à sua confiabilidade, limitações e impactos sociais, evitando uma visão exclusivamente otimista e garantindo que seu uso ocorra de maneira responsável e segura.</p>

<h3>3.2 SENSELY</h3>
<p>A plataforma Sensely possui uma enfermeira virtual chamada Molly desenvolvida em 2013 para reduzir a sobrecarga no sistema de saúde, que combina inteligência artificial e um avatar interativo e visa oferecer um atendimento mais humanizado, especialmente em sistemas com grande demanda. A maior motivação para a criação dessa ferramenta foi melhorar a experiência do paciente com uma abordagem personalizada e ágil. A Molly coleta informações por meio de texto, voz, imagens e vídeos, analisando sintomas e histórico médico, e então orientando os próximos passos. Ela colabora com instituições como o Serviço Nacional de Saúde do Reino Unido e a Mayo Clinic, uma organização da área de pesquisas médico-hospitalares que visa expandir os recursos da assistente virtual fornecendo orientações de saúde aos usuários, conforme informações disponibilizadas pela plataforma SENSELY (2025).</p>

<h3>3.3 SYMPTOMATE</h3>
<p>Fundado em 2012 pela empresa polonesa Infermedica, o chatbot Symptomate utiliza aprendizado de máquina e algoritmos baseados em redes neurais para avaliar sintomas relatados pelos usuários por meio de uma entrevista digital, identificando possíveis causas e oferecendo orientações sobre tratamentos ou a necessidade de cuidados médicos. Esse chatbot é utilizado por diversas organizações, como seguradoras e hospitais, para aprimorar a triagem médica inicial e auxiliar pacientes na decisão sobre procurar atendimento imediato INFERMEDICA (2025). Um exemplo é a eVisit, plataforma de cuidados virtuais que integrou a API do Symptomate ao seu sistema, permitindo a triagem automática de sintomas antes das consultas.</p>

<h3>3.4 ADA HEALTH</h3>
<p>Já o Ada Health, criado em 2011 por Claire Novorol, Daniel Nathrath e Martin Hirsch, integra suas tecnologias a iniciativas de autocuidado e educação em saúde. A ideia surgiu a partir de dificuldades de diagnóstico enfrentadas por um familiar de um dos fundadores, o que levou à criação de uma plataforma para o público em geral. O Ada Health, reconhecido pela precisão no diagnóstico, já firmou parcerias com hospitais como o Jefferson Health, nos Estados Unidos e colabora com empresas farmacêuticas como Bayer e Pfizer, segundo o site oficial da Ada Health (2025). Por exemplo, a parceria com a Bayer permite que usuários acessem a plataforma da Ada através dos sites de produtos como aspirina e Aleve. A plataforma é baseada em redes neurais e aprendizado de máquina, e foi treinada com mais de 50 milhões de interações reais.</p>

<p>Em síntese, os chatbots representam uma inovação promissora para o setor da saúde, proporcionando maior acesso, agilidade e eficiência no atendimento aos usuários. Entretanto, para que essas ferramentas atinjam seu potencial máximo, é fundamental garantir a qualidade das bases de dados utilizadas, a validação clínica dos sistemas e a proteção da privacidade dos pacientes.</p>`,

   resultados: `<p>A validação clínica das plataformas Ada Health, Molly (Sensely) e Symptomate evidencia abordagens distintas em termos de rigor científico e aplicação prática, refletindo seus focos e objetivos no setor da saúde. Como detalhado no Quadro 1, essas plataformas têm bases de treinamento variadas e níveis diferentes de evidência científica, o que impacta diretamente sua precisão diagnóstica e efetividade clínica.</p>

<h3>Quadro 1 – Precisão e Efetividade Clínica das ferramentas Ada, Molly e Symptomate (Via artigos publicados)</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Base de Treinamento</th><th>Estudos Científicos</th><th>Exemplo de Efetividade Clínica</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>+50 milhões de interações médicas reais.</td><td>70% de acerto entre os 3 principais diagnósticos e desempenho semelhante a clínicos gerais.</td><td>Ajudou a identificar apendicite e acelerar triagens em programas corporativos.</td></tr>
        <tr><td>Molly (Sensely)</td><td>Protocolos clínicos + IA com feedback contínuo.</td><td>85% de efetividade em insuficiência cardíaca.</td><td>Reduziu hospitalizações em pacientes crônicos com monitoramento remoto.</td></tr>
        <tr><td>Symptomate</td><td>Guidelines e dados clínicos simulados.</td><td>Precisão em casos simples como faringite e ITU.</td><td>Ajudou a identificar dengue e doenças infecciosas em regiões tropicais.</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fonte:</strong> Autores (2025).</div>

<p>A Ada Health destaca-se por sua robustez científica, com estudos revisados por pares publicados em periódicos como BMJ Open e Nature Digital Medicine. Em estudo comparativo sobre aplicativos de avaliação de sintomas, a plataforma apresentou aproximadamente 71% de acerto ao incluir o diagnóstico correto entre suas três principais sugestões, demonstrando desempenho próximo ao de médicos clínicos gerais em determinados contextos (GILBERT et al., 2020). Em contraste, a Molly, desenvolvida pela Sensely, concentra-se no monitoramento remoto de pacientes crônicos, utilizando protocolos validados pelo Serviço Nacional de Saúde do Reino Unido (NHS). Estudos na área de telemedicina apontam elevada efetividade desse tipo de solução na gestão de doenças crônicas, como insuficiência cardíaca, evidenciando sua relevância prática no cuidado contínuo aos pacientes (TELEMEDICINE AND E-HEALTH, 2020).</p>

<p>Já o Symptomate, voltado para triagens de doenças específicas como as tropicais, apresenta eficácia clínica notável, com precisão diagnóstica similar à médica em casos como faringite e infecções urinárias (BENIS, 2022), ressaltando sua utilidade em contextos endêmicos e emergenciais. Esses resultados indicam diferentes nichos de atuação e níveis de maturidade clínica, destacando a importância de análises específicas para cada contexto de uso.</p>

<p>A segurança e a privacidade dos dados são aspectos cruciais para plataformas de saúde digital, especialmente diante das exigências da Lei Geral de Proteção de Dados (LGPD). A proteção adequada dessas informações é fundamental para garantir a confiança dos usuários e prevenir possíveis danos decorrentes do uso inadequado de dados sensíveis. Conforme demonstrado no Quadro 2, as plataformas analisadas apresentam abordagens distintas em relação à coleta de dados pessoais, como informações clínicas, registros de voz e até imagens, além de variações significativas no compartilhamento com terceiros e na transparência das políticas.</p>

<h3>Quadro 2 – Segurança e Privacidade (LGPD - via Webbkoll)</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Coleta de Dados Pessoais</th><th>Compartilhamento com Terceiros</th><th>Política e Consentimento</th><th>Inconformidades Identificadas</th><th>Cookies</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>Nome, idade, sintomas, localização.</td><td>Sim (Google Analytics, Meta Pixel)</td><td>Política técnica e pouco acessível.</td><td>Rastreia dados antes do consentimento.</td><td>2 de terceiros, sem bloqueio inicial.</td></tr>
        <tr><td>Molly (Sensely)</td><td>Dados clínicos, voz, imagem.</td><td>Sim (AWS, Twilio, Analytics)</td><td>Limitada e só em inglês.</td><td>Coleta sensível sem aviso explícito.</td><td>4 ativos antes do consentimento.</td></tr>
        <tr><td>Symptomate</td><td>Sintomas, idade, sexo.</td><td>Google (Limitado).</td><td>Política clara, em português.</td><td>Estrutura simples sem chamadas a terceiros na homepage</td><td>Uso de cookies, bloqueados até interação (8 no total)</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fonte:</strong> Autores (2025).</div>

<p>Enquanto a Ada Health e a Molly (Sensely) utilizam ferramentas de rastreamento antes da obtenção do consentimento, o Symptomate se destaca por uma estrutura mais simplificada e alinhada aos princípios da LGPD. A análise comparativa realizada evidencia essas diferenças, particularmente no que diz respeito à clareza das políticas, à conformidade legal e à presença de vulnerabilidades potencialmente críticas.</p>

<p>Já o Symptomate adota medidas como o bloqueio inicial de cookies e um escopo limitado de compartilhamento com terceiros (apenas Google básico), as outras plataformas demonstram inconformidades com a LGPD, como: Molly (Sensely): Coleta de dados sensíveis (voz e imagem) sem aviso explícito e uso de quatro cookies ativos antes do consentimento, expondo os usuários a potenciais violações. Ada Health: Rastreamento prévio de dados (via Google Analytics e Meta Pixel) e políticas de privacidade complexas, dificultando a compreensão do usuário sobre como suas informações são tratadas. Essas diferenças não apenas refletem níveis distintos de conformidade com a LGPD, mas também impactam diretamente a confiança do usuário – fator essencial em plataformas de saúde digital, onde a sensibilidade dos dados exige máxima transparência e controle a insuficiência cardíaca (Telemedicine and e-Health, 2020), evidenciando relevância prática em cuidados contínuos.</p>

<p>A satisfação dos usuários é um importante meio para avaliar a eficácia e a adoção de plataformas digitais de saúde. As avaliações nas lojas de aplicativos (App Store e Google Play) de Ada Health, Molly (Sensely) e Symptomate revelam não apenas a percepção geral de cada uma, mas também padrões recorrentes que moldam a experiência prática de interfaces intuitivas a falhas operacionais. O Quadro 3 sintetiza esses dados, cruzando métricas como nota média, volume de avaliações e estimativa de downloads. Para a análise qualitativa dos feedbacks, foram coletados e categorizados os 50 comentários mais recentes de cada plataforma nas lojas App Store e Google Play, sendo agrupados em duas categorias principais: elogios recorrentes e críticas recorrentes, com base em repetição temática e frequência de menções.</p>

<h3>Quadro 3 – Satisfação do Usuário via App Store e Google Play</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Nota Média</th><th>Nº de Avaliações</th><th>Downloads Estimados</th><th>Elogios Frequentes</th><th>Críticas Frequentes</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>4.9 ★ (iOS)<br>4.7 ★ (Android)</td><td>+5 mil</td><td>+2 milhões</td><td>Interface intuitiva, diagnósticos rápidos, sensação de apoio profissional</td><td>Perguntas repetitivas, falta de integração com médicos locais</td></tr>
        <tr><td>Molly (Sensely)</td><td>4.6 ★ (iOS)<br>4.3 ★ (Android)</td><td>219 avaliações</td><td>+10 mil</td><td>Avatar humanizado, sensação de conversa real, útil para doenças crônicas</td><td>Respostas lentas, bugs, indisponibilidade regional</td></tr>
        <tr><td>Symptomate</td><td>4.7 ★ (iOS)<br>4.3 ★ (Android)</td><td>+10 mil</td><td>+500 mil</td><td>Simples, rápido, orientações claras, app leve</td><td>Pouca personalização, sem histórico de sintomas</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fonte:</strong> Autores (2025).</div>

<p>A performance técnica das plataformas digitais de saúde desempenha papel essencial na garantia da usabilidade, segurança e qualidade da experiência do usuário. No contexto dos chatbots analisados, a avaliação de aspectos como acessibilidade, velocidade de carregamento, estabilidade visual e conformidade com boas práticas web permite identificar limitações técnicas que podem impactar negativamente sua adoção e eficácia.</p>

<p>O Quadro 4 apresenta uma análise comparativa desses elementos, baseada em testes realizados em dispositivos computador e celular, segundo os critérios da ferramenta Google Lighthouse e os Core Web Vitals, um conjunto de indicadores definidos pelo Google para mensurar a experiência do usuário em páginas da web.</p>

<p>Os resultados do Google Lighthouse são apresentados em uma escala de 0 a 100, na qual valores mais próximos de 100 indicam melhor desempenho da plataforma, enquanto valores mais baixos representam menor conformidade com boas práticas de desenvolvimento e maior presença de problemas técnicos. Dessa forma, quanto maior a pontuação, melhor o desempenho da plataforma em cada métrica avaliada.</p>

<p>São avaliados indicadores como acessibilidade, desempenho, conformidade com práticas recomendadas, ranqueamento nos resultados de busca (SEO – Search Engine Optimization) e métricas de experiência real de uso (Core Web Vitals, incluindo LCP – Largest Contentful Paint, INP – Interaction to Next Paint e CLS – Cumulative Layout Shift). O Quadro inclui, ainda, uma justificativa interpretativa para cada resultado, indicando se a plataforma atende aos parâmetros mínimos considerados adequados. Para aprovação nos indicadores Core Web Vitals, é necessário que as plataformas satisfaçam, em pelo menos 75% das visitas reais, os seguintes parâmetros:</p>

<ul>
<li><b>LCP</b> (Largest Contentful Paint): mede o tempo necessário para carregar e exibir o maior elemento visível da página. Para uma boa experiência do usuário, esse tempo deve ser de até 2,5 segundos.</li>
<li><b>INP</b> (Interaction to Next Paint): mede o intervalo entre a interação do usuário (como clique ou toque) e a atualização visual subsequente. Um valor de até 200 milissegundos indica que a interface responde de forma ágil, evitando atrasos perceptíveis que possam prejudicar a usabilidade.</li>
<li><b>CLS</b> (Cumulative Layout Shift): quantifica a estabilidade visual da página durante o carregamento. Valores até 0,1 são considerados aceitáveis, garantindo que o layout permaneça estável enquanto o conteúdo é carregado.</li>
</ul>

<h3>Quadro 4 – Acessibilidade segundo o Google Lighthouse.</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Dispositivo</th><th>Acessibilidade</th><th>Desempenho</th><th>Práticas Recomendadas</th><th>SEO</th><th>Core Web Vitals (LCP / INP / CLS)</th></tr>
    </thead>
    <tbody>
        <tr><td rowspan="2">Ada Health</td><td>Computador</td><td>96</td><td>98</td><td>93</td><td>100</td><td>LCP: 1.6s<br>INP: 51ms<br>CLS: 0.11</td></tr>
        <tr><td>Celular</td><td>96</td><td>79</td><td>100</td><td>100</td><td>LCP: 2.2s<br>INP: 130ms<br>CLS: 0.09</td></tr>
        <tr><td rowspan="2">Molly (Sensely)</td><td>Computador</td><td>76</td><td>75</td><td>100</td><td>77</td><td>LCP: 3.2s<br>INP: 79ms<br>CLS: 0.01</td></tr>
        <tr><td>Celular</td><td>79</td><td>71</td><td>100</td><td>77</td><td>LCP: 3.2s<br>INP: 271ms<br>CLS: 0.08</td></tr>
        <tr><td rowspan="2">Symptomate</td><td>Computador</td><td>65</td><td>90</td><td>100</td><td>92</td><td>LPC: 3.4s<br>INP: 76ms<br>CLS: 0.05</td></tr>
        <tr><td>Celular</td><td>60</td><td>90</td><td>100</td><td>92</td><td>LCP: 4s<br>INP: 195ms<br>CLS: 0.32</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fonte:</strong> Autores, (2025).</div>

<p>A partir dos dados apresentados na Quadro 4, observam-se contrastes significativos entre as plataformas no que diz respeito à performance técnica e à experiência do usuário. Ada Health se destaca com métricas altamente positivas em computadores e celulares, apresentando indicadores dentro dos limites recomendados e boa usabilidade geral. Apesar de um leve CLS elevado no desktop, que indica certa instabilidade no layout, os tempos de carregamento e responsividade permanecem satisfatórios, reforçando a maturidade técnica da plataforma. Molly (Sensely), por outro lado, embora mantenha boa pontuação em acessibilidade e práticas recomendadas, sofre com LCP elevado tanto em desktop quanto em mobile, o que representa demora no carregamento do conteúdo principal. Essa lentidão, somada ao atraso perceptível nas interações em dispositivos móveis, compromete a fluidez da navegação. Por fim, o Symptomate apresenta o pior desempenho geral: além de LCP acima do ideal, prejudicando a experiência do usuário, o CLS no celular é consideravelmente alto, o que indica instabilidade visual significativa</p>

<p>Já a análise da capacidade de compreensão da linguagem natural pelas plataformas, conforme detalhado no Quadro 5, revela nuances importantes sobre a qualidade da interação entre usuário e chatbot. A capacidade de compreender a linguagem natural dos usuários é um dos principais desafios para plataformas digitais de saúde, especialmente em contextos quando do uso de linguagem informal ou com perguntas ambíguas a interpretação. Usabilidade, flexibilidade conversacional e precisão na interpretação das intenções são fatores essenciais para uma experiência eficaz e segura. Nesse sentido, o Quadro 5 analisa o desempenho linguístico dos chatbots Ada Health, Molly (Sensely) e Symptomate com base em cinco critérios fundamentais, avaliados qualitativamente como baixa, média ou alta performance: tolerância a gírias e erros, interpretação de perguntas ambíguas, reformulação de diálogo e identificação correta da intenção da mensagem do usuário.</p>

<h3>Quadro 5. Compreensão de Linguagem Natural (Método Golden Set).</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Plataforma</th><th>Tolerância a Gírias e Erros</th><th>Interpretação de Perguntas Ambíguas</th><th>Reformulação de Diálogo</th><th>Capacidade de Identificação Correta da Intenção</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>Alta</td><td>Regular</td><td>Alta</td><td>Alta</td></tr>
        <tr><td>Molly (Sensely)</td><td>Média</td><td>Baixa</td><td>Média</td><td>Alta</td></tr>
        <tr><td>Symptomate</td><td>Alta</td><td>Alta</td><td>Alta</td><td>Alta</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Fonte:</strong> Autores, (2025).</div>

<p>A análise do Quadro 5 mostra que o Symptomate se destaca na compreensão de linguagem natural, demonstrando alta tolerância a gírias, erros ortográficos e perguntas ambíguas. Expressões informais como "tô ruim" ou frases vagas como "acho que tô com dengue ou virose" são bem interpretadas, garantindo continuidade no atendimento. O Ada Health apresenta desempenho regular em ambiguidade, mas reconhece variações como "dor de barriga" e corrige erros como "cabesa" para "cabeça", mantendo boa fluidez. Já o Molly (Sensely) tem dificuldades nesse aspecto, exigindo frases mais diretas; expressões genéricas resultam em respostas vagas e pouco úteis.</p>

<p>Em termos de reformulação do diálogo, Ada Health e Symptomate se mostram mais adaptáveis às interações do usuário, enquanto Molly enfrenta limitações que afetam a naturalidade da conversa. Na identificação de intenções, todas têm desempenho funcional, mas Ada Health e Symptomate demonstram maior precisão, inclusive com linguagem informal.</p>`,
    consideracoes: `<p>A análise comparativa dos chatbots Ada Health, Molly (Sensely) e Symptomate demonstrou que essas ferramentas têm grande potencial para contribuir com o atendimento na saúde, oferecendo triagens ágeis, suporte clínico inicial e acessibilidade aos usuários. Entre as soluções analiadas, o Ada Health apresentou desempenho consistente em múltiplos critérios adotados nesta pesquisa, combinando alta precisão diagnóstica, validação científica robusta, ótima experiência de uso e ampla aceitação do público. Entretanto, os resultados obtidos estão diretamente condicionados aos critérios de avaliação e aos métodos utilizados neste estudo, de caráter exploratório e comparativo, não sendo possível generalizar os resultados para todos os contextos clínicos e tecnológicos. Além disso, observou-se que cada plataforma se destaca em dimensões específicas, como desempenho técnico, precisão clínica e conformidade com a LGPD; A plataforma Molly oferece um diferencial humanizado por meio de avatar interativo e a Symptomate apresente forte desempenho em linguagem natural e conformidade com a LGPD. Apesar disso, ambos ainda enfrentam limitações em desempenho técnico, privacidade ou abrangência funcional em determinados critérios analisados. Nesse contexto, os resultados indicam que o Ada Health apresentou maior equilíbrio entre os aspectos avaliados nesta pesquisa, podendo servir como referência para futuras aplicações de inteligência artificial na saúde digital. Recomenda-se que novas implementações priorizem a segurança dos dados, validação clínica contínua e foco na experiência do paciente para garantir impacto positivo e ético no setor, promovendo também maior acessibilidade e personalização do atendimento digital.</p>`,

    referencias: `<div class="references-container">
    <div class="references-grid">
        <div class="reference-item">
            <div class="ref-authors">ADA HEALTH.</div>
            <div class="ref-title">How Ada works.</div>
            <div class="ref-year">2025.</div>
            <div class="ref-source">Disponível em: <a href="https://ada.com/pt/" target="_blank" rel="noopener noreferrer">https://ada.com/pt/</a></div>
            <div class="ref-access">Acesso em: 12 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ALOWAIS, S. A.; SHUROUG, S.</div>
            <div class="ref-title">Revolucionando a saúde: o papel da inteligência artificial na prática clínica.</div>
            <div class="ref-source">BMC Medical Education, 2023.</div>
            <div class="ref-source">Disponível em: <a href="https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-023-04698z#citeas" target="_blank" rel="noopener noreferrer">https://bmcmededuc.biomedcentral.com</a></div>
            <div class="ref-access">Acesso em: 25 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ARMITAGE, H.</div>
            <div class="ref-title">Physician decision chatbot.</div>
            <div class="ref-source">Stanford Medicine, 2025.</div>
            <div class="ref-source">Disponível em: <a href="https://med.stanford.edu/news/all-news/2025/02/physiciandecision-chatbot.html" target="_blank" rel="noopener noreferrer">https://med.stanford.edu</a></div>
            <div class="ref-access">Acesso em: 13 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BABUSHKINA, D.; VOTSIS, A.</div>
            <div class="ref-title">Epistemo-ethical constraints on AI-human decision making for diagnostic purposes.</div>
            <div class="ref-source">Ethics and Information Technology, v. 24, n. 22, 2022.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BENIS, A. I.</div>
            <div class="ref-title">The use of chatbots in health care: a review of literature.</div>
            <div class="ref-source">JMIR Medical Informatics, v. 8, n. 4, 2020.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BMJ OPEN.</div>
            <div class="ref-title">Comparison of symptom checkers triage performance in primary care.</div>
            <div class="ref-source">BMJ Open, v. 10, n. 4, 2020.</div>
            <div class="ref-source">Disponível em: <a href="https://bmjopen.bmj.com/" target="_blank" rel="noopener noreferrer">https://bmjopen.bmj.com/</a></div>
            <div class="ref-access">Acesso em: 18 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">CARDOSO, Ericson.</div>
            <div class="ref-title">Importância da tecnologia na saúde: inovações e benefícios, 2024.</div>
            <div class="ref-source">Disponível em: <a href="https://blog.ux4you.com.br/2024/06/24/importancia-da-tecnologia-na-saude-inovacoes-e-beneficios/" target="_blank" rel="noopener noreferrer">https://blog.ux4you.com.br</a></div>
            <div class="ref-access">Acesso em: 13 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ELIAS, M. A. et al.</div>
            <div class="ref-title">Inteligência artificial em saúde e implicações bioéticas: uma revisão sistemática.</div>
            <div class="ref-source">Revista Bioética, 2023.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">FAN, H. et al.</div>
            <div class="ref-title">Utilization of self-diagnosis health chatbots in real-world settings: case study.</div>
            <div class="ref-source">Journal of Medical Internet Research, v. 23, n. 1, 2021.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">GILBERT, S. et al.</div>
            <div class="ref-title">How accurate are digital symptom assessment apps for suggesting conditions and urgency advice? A clinical vignettes comparison to general practitioners.</div>
            <div class="ref-source">BMJ Open, v. 10, n. 12, 2020.</div>
            <div class="ref-source">Disponível em: <a href="https://bmjopen.bmj.com/content/10/12/e040269" target="_blank" rel="noopener noreferrer">https://bmjopen.bmj.com</a></div>
            <div class="ref-access">Acesso em: 14 maio 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INBENTA.</div>
            <div class="ref-title">Benefícios dos chatbots na área de saúde: 9 casos de uso.</div>
            <div class="ref-source">Inbenta, 2022.</div>
            <div class="ref-source">Disponível em: <a href="https://www.inbenta.com/pt-br/articles/benefits-of-chatbots-in-healthcare-9-use-cases-of-healthcare-chatbots/" target="_blank" rel="noopener noreferrer">https://www.inbenta.com</a></div>
            <div class="ref-access">Acesso em: 10 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INFERMEDICA.</div>
            <div class="ref-title">Symptomate.</div>
            <div class="ref-source">Disponível em: <a href="https://symptomate.com/pt-br/about" target="_blank" rel="noopener noreferrer">https://symptomate.com/pt-br/about</a></div>
            <div class="ref-access">Acesso em: 06 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">LARANJO, L. et al.</div>
            <div class="ref-title">Conversational agents in healthcare: a systematic review.</div>
            <div class="ref-source">Journal of the American Medical Informatics Association, v. 25, n. 9, p. 1248-1258, 2018.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">LAURENTYS, Paulo.</div>
            <div class="ref-title">Hospitais inteligentes: quais os avanços da IA no sistema de saúde brasileiro.</div>
            <div class="ref-source">Saúde Digital News, 2025.</div>
            <div class="ref-source">Disponível em: <a href="https://medicinasa.com.br/hospitais-inteligentes-ia/" target="_blank" rel="noopener noreferrer">https://medicinasa.com.br</a></div>
            <div class="ref-access">Acesso em: 10 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">MAULDIN, M.</div>
            <div class="ref-title">ChatterBots, TinyMUDs, and the Turing Test: entering the Loebner Prize competition.</div>
            <div class="ref-source">In: Proceedings of the National Conference on Artificial Intelligence. 1994. p. 16–21.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SENSELY.</div>
            <div class="ref-title">Sensely.</div>
            <div class="ref-source">[s.d.].</div>
            <div class="ref-source">Disponível em: <a href="https://sensely.com/" target="_blank" rel="noopener noreferrer">https://sensely.com/</a></div>
            <div class="ref-access">Acesso em: 14 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SILVEIRA, P. V. R.; PARAVIDINI, J. L. L.</div>
            <div class="ref-title">Ética da aplicação de inteligências artificiais e chatbots na saúde mental: uma perspectiva psicanalítica.</div>
            <div class="ref-source">Revista Pesquisa Qualitativa, v. 12, n. 30, 2024.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">TELEMEDICINE AND E-HEALTH.</div>
            <div class="ref-title">Remote patient monitoring for chronic disease management: outcomes and effectiveness in heart failure care.</div>
            <div class="ref-source">Telemedicine and e-Health, v. 26, n. 5, 2020.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">TOPOL, Eric.</div>
            <div class="ref-title">Deep medicine: how artificial intelligence can make healthcare human again.</div>
            <div class="ref-source">ACM Digital Library, 2019.</div>
        </div>
    </div>
</div>`
},

en: {
    logo: "Chatbots in Digital Health",
    nav: {
        resumo: "Abstract",
        introducao: "Introduction",
        metodologia: "Methodology",
        referencial: "Theoretical Framework",
        resultados: "Results",
        consideracoes: "Conclusion",
        referencias: "References"
    },
    toc: {
        titulo: "Index",
        resumo: "Abstract",
        introducao: "Introduction",
        metodologia: "Methodology",
        referencial: "Theoretical Framework",
        resultados: "Results and Discussion",
        consideracoes: "Final Considerations",
        referencias: "References"
    },
    hero: {
        titulo: "Between technology and care:<br>structured comparative analysis of chatbots in digital health",
        subtitulo: "Ada Health · Molly (Sensely) · Symptomate — diagnostic accuracy, LGPD, usability and natural language."
    },
    byline: {
        autor1: "Andressa Barbosa Carvalho Araújo",
        autor2: "Matheus Bilitardo Abib",
        autor3: "Luciano Gonçalves de Carvalho",
        tempoLeitura: "18",
        minLeitura: "min read",
        instituicao: "FATEC Mogi das Cruzes · 2025"
    },
    buttons: {
        citarABNT: "Cite ABNT",
        citarAPA: "Cite APA",
        tema: "Theme",
        abrirPDF: "Open PDF"
    },
    footer: {
        autores: "Authors",
        instituicao: "Institution",
        links: "Main Links",
        compartilhe: "Share",
        comoCitar: "How to cite this article:",
        direitos: "All rights reserved",
        resumoArtigo: "Article abstract",
        metodologia: "Methodology",
        resultados: "Results",
        referencias: "References"
    },
    references: {
        title: "REFERENCES",
        previous: "Previous",
        next: "Next",
        page: "Page",
        of: "of",
        references: "references"
    },
    toast: {
        langChanged: "Language changed to "
    },
    resumo: `
        <p>This article comparatively analyzes the following chatbot platforms applied to digital health: Ada Health, Molly (Sensely), and Symptomate. Using an exploratory, bibliographic approach with quantitative and qualitative elements, the study evaluates technical, clinical, and user experience aspects through criteria such as diagnostic accuracy, compliance with the Brazilian General Data Protection Law (LGPD), user satisfaction, technical accessibility, and natural language understanding. Results indicate that Ada Health stands out for its scientific robustness and public acceptance, Molly for its humanized approach with an interactive avatar aimed at chronic disease monitoring, and Symptomate for its simplicity and efficiency in initial symptom triage. The analysis reveals that although chatbots expand access and optimize healthcare delivery, they still face challenges related to privacy, personalization, and usability. We conclude that these tools have great potential to complement medical care, provided their implementation observes ethical, technical, and regulatory aspects.</p>
        <div class="keywords"><strong>Keywords:</strong> Chatbot; Artificial Intelligence; Internet; LGPD; Health.</div>
    `,
    introducao: `<p>According to Cardoso (2024), technological evolution has driven innovations in several areas, and health has been one of the most benefited by these transformations. The incorporation of new technologies has provided significant advances in the efficiency of medical care and patient experience. Tools such as artificial intelligence, augmented reality, and automation have played a crucial role in this process, improving care quality, diagnostic accuracy, and treatment speed.</p>
    <p>Chatbots, which are artificial intelligence programs capable of interacting with users through automated messages, emerge as an innovative solution to provide continuous and personalized support to patients. By offering quick and effective responses about symptoms, medications, and treatments, these systems revolutionize healthcare delivery. They contribute to reducing operational costs, optimizing the use of human resources, and allowing health professionals to focus on more complex cases, demonstrating the potential of emerging technologies in transforming healthcare.</p>
    <p>These systems are already transforming medical care by offering accessible, automated, and continuous support to patients. These solutions enable everything from automated triage to diagnostic support and medical procedures, contributing to greater efficiency and safety in care, as stated by Laurentys (2025). The real-time interaction they provide is especially valuable in contexts where speed of care is crucial.</p>
    <p>Despite the advances provided by chatbots, their implementation faces significant challenges. The security of personal data is a central concern, as artificial intelligence-based systems may increase exposure to security and privacy risks, as highlighted by Topol (2019). Furthermore, although chatbots provide quick responses, they may have difficulties interpreting complex symptoms, in addition to limitations in diagnostic accuracy and user communication. Moreover, factors such as lack of empathy and distrust from patients and health professionals represent barriers to the adoption of these technologies (FAN et al., 2021; LARANJO et al., 2018).</p>
    <p>This article aims to compare the Ada Health, Molly, and Symptomate chatbots, which, although sharing similarities, have unique characteristics in their approaches. The choice of the analyzed platforms was based on objective criteria such as: presence in scientific studies and clinical validations published in articles, availability of detailed technical documentation on official platform websites, and platform accessibility for testing. These criteria were adopted to ensure the relevance, comparability, and feasibility of the proposed analysis. By analyzing their operations in medical care, we seek to understand how these technologies are transforming healthcare delivery, making it more efficient, accessible, and patient-centered.</p>`,
    metodologia: `<p>This article's research adopts a mixed approach (qualitative and quantitative), exploratory and bibliographic, with an emphasis on surveying, analyzing, and comparing three virtual assistants used in healthcare: Molly (Sensely), Symptomate, and Ada Health.</p>
    <p>For this purpose, primary and secondary sources were consulted, such as platforms specialized in scientific dissemination, like PubMed, ScienceDirect, and BMJ Open, as well as journalistic sources like Forbes, MedCity News, and Medicina S/A. The extracted information covers aspects such as their operating mechanisms, clinical efficacy, comparative studies, and evaluations of system accessibility.</p>
    <p>The criteria for analyzing the different aspects of the aforementioned platforms' performance in the digital health context were:</p>
    <ul>
        <li><strong>Accuracy and Clinical Effectiveness:</strong> The analysis will be based on scientific studies available in databases such as PubMed and Google Scholar, which provide clinical validations, diagnostic comparisons, and effectiveness in medical triage;</li>
        <li><strong>Security and Privacy:</strong> To assess compliance with the Brazilian General Data Protection Law (LGPD), the Webbkoll digital audit tool will be used, which verifies data collection practices, absence of a visible privacy policy, and information sharing with third parties;</li>
        <li><strong>User Satisfaction:</strong> User perception will be investigated by analyzing public reviews on app stores (App Store or Google Play), considering ratings, frequent comments, and number of downloads, to identify patterns of acceptance and recurring criticisms;</li>
        <li><strong>Accessibility:</strong> It will be evaluated using Google Lighthouse tools, which provide a quantitative and technical overview of accessibility aspects that directly affect navigation for people with disabilities;</li>
        <li><strong>Natural Language Understanding:</strong> Empirical tests were carried out with the virtual assistants, applying the "Golden Set" technique, which consists of creating a standardized set of questions for all chatbots. The set consisted of 20 questions distributed across four categories: spelling errors, use of slang, ambiguous questions, and rephrasing of the same clinical intention. All chatbots were subjected to the same inputs, allowing direct performance comparison. The analysis was based on criteria of semantic interpretation, response coherence, and identification of user intent. Results were categorized into performance levels (high, medium, and low), enabling a comparative analysis of the systems based on empirical evidence.</li>
    </ul>`,
    referencial: `<p>This theoretical framework is structured to initially present the fundamental concepts related to chatbots in the health area, addressed in section 3.1. Next, specific platforms used in the digital health context are analyzed: Sensely, in section 3.2; Symptomate, in section 3.3; and Ada Health, in section 3.4, allowing a progressive understanding from general concepts to the practical application of these tools.</p>

<h3>3.1 CHATBOTS</h3>
<p>'Bots', or software robots, are automated systems developed to perform tasks autonomously. One of the best-known types is chatbots, designed to interact with users through natural language, either by text or voice. According to Mauldin (1994), the first bots were created to simulate human conversations in simple interfaces, but with the evolution of artificial intelligence and natural language processing, they have become sophisticated and realistic tools.</p>

<p>In the healthcare field, chatbots have gained prominence as technological solutions capable of optimizing processes, expanding access to information, and offering continuous care. These tools act as virtual assistants, helping to bridge the communication gap between patients and health professionals. A study published by Inbenta (2022) highlights that, with artificial intelligence technology, chatbots are able to respond more quickly and efficiently through conversational interfaces and, in some cases, more effectively than a human assistant. Thus, when well implemented, chatbots can reduce waiting time, improve care efficiency, and increase user satisfaction.</p>

<p>Artificial intelligence platforms such as Ada Health, Molly (Sensely), and Symptomate have been adopted by hospital institutions to serve large volumes of users safely and quickly, demonstrating the scalability and reliability of these systems when integrated into structured medical databases. Although they have different approaches, these platforms share essential functions, such as symptom triage through structured questions, similar to the medical process, appointment scheduling, remote monitoring, healthcare guidance, and preliminary diagnosis generation.</p>

<p>Despite the advances presented by chatbots in healthcare, the scientific literature points to important limitations regarding their application in clinical practice. According to Babushkina and Votsis (2022), diagnostic decision-making mediated by artificial intelligence requires constant human supervision, especially due to limitations related to contextual interpretation and risks of algorithmic errors. In this sense, Topol (2019) argues that artificial intelligence has great potential to support medical decisions, mainly in analyzing large volumes of data, but should not be seen as a substitute for health professionals, but rather as a complementary tool. This perspective reinforces the need for integration between technology and human expertise, ensuring greater safety and accuracy in care.</p>

<p>In addition to technical limitations, ethical and social implications related to the use of chatbots in healthcare are also noteworthy. The collection and processing of sensitive data raise concerns regarding privacy, transparency, and responsibility in using this information, especially in contexts regulated by data protection laws. As pointed out by Alowais et al. (2023), the use of artificial intelligence in clinical practice requires not only technical validation but also adequate governance and clear ethical guidelines.</p>

<p>From a bioethical point of view, Elias et al. (2023) highlight that the expansion of artificial intelligence in healthcare also broadens discussions related to patient autonomy, information security, and accountability in cases of diagnostic failures. Furthermore, recent studies indicate that chatbots applied to mental health can generate risks related to the reliability of responses and the absence of direct human accountability (Silveira; Paravidini, 2024).</p>

<p>Thus, although chatbots represent a relevant innovation in the digital health field, their adoption must be accompanied by critical analyzes regarding their reliability, limitations, and social impacts, avoiding an exclusively optimistic view and ensuring that their use occurs responsibly and safely.</p>

<h3>3.2 SENSELY</h3>
<p>The Sensely platform features a virtual nurse named Molly, developed in 2013 to reduce the overload on the health system, combining artificial intelligence and an interactive avatar, aiming to offer more humanized care, especially in systems with high demand. The main motivation for creating this tool was to improve the patient experience with a personalized and agile approach. Molly collects information through text, voice, images, and videos, analyzing symptoms and medical history, and then guiding the next steps. She collaborates with institutions such as the UK's National Health Service and the Mayo Clinic, a medical-hospital research organization that aims to expand the virtual assistant's resources by providing health guidance to users, according to information provided by the SENSELY platform (2025).</p>

<h3>3.3 SYMPTOMATE</h3>
<p>Founded in 2012 by the Polish company Infermedica, the Symptomate chatbot uses machine learning and neural network-based algorithms to assess symptoms reported by users through a digital interview, identifying possible causes and offering guidance on treatments or the need for medical care. This chatbot is used by various organizations, such as insurers and hospitals, to improve initial medical triage and assist patients in deciding whether to seek immediate care INFERMEDICA (2025). An example is eVisit, a virtual care platform that integrated the Symptomate API into its system, allowing automatic symptom triage before consultations.</p>

<h3>3.4 ADA HEALTH</h3>
<p>Ada Health, created in 2011 by Claire Novorol, Daniel Nathrath, and Martin Hirsch, integrates its technologies into self-care and health education initiatives. The idea arose from diagnostic difficulties faced by a family member of one of the founders, which led to the creation of a platform for the general public. Ada Health, recognized for its diagnostic accuracy, has partnered with hospitals such as Jefferson Health in the United States and collaborates with pharmaceutical companies such as Bayer and Pfizer, according to the official Ada Health website (2025). For example, the partnership with Bayer allows users to access the Ada platform through product websites like aspirin and Aleve. The platform is based on neural networks and machine learning and has been trained with over 50 million real interactions.</p>

<p>In summary, chatbots represent a promising innovation for the healthcare sector, providing greater access, agility, and efficiency in user care. However, for these tools to reach their full potential, it is essential to ensure the quality of the databases used, the clinical validation of the systems, and the protection of patient privacy.</p>`,
    resultados: `<p>The clinical validation of the Ada Health, Molly (Sensely), and Symptomate platforms reveals distinct approaches in terms of scientific rigor and practical application, reflecting their focuses and objectives in the health sector. As detailed in Table 1, these platforms have varying training bases and different levels of scientific evidence, which directly impacts their diagnostic accuracy and clinical effectiveness.</p>

<h3>Table 1 – Accuracy and Clinical Effectiveness of Ada, Molly, and Symptomate tools (via published articles)</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Platform</th><th>Training Base</th><th>Scientific Studies</th><th>Example of Clinical Effectiveness</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>+50 million real medical interactions.</td><td>70% accuracy among top 3 diagnoses and performance similar to general practitioners.</td><td>Helped identify appendicitis and accelerate triage in corporate programs.</td></tr>
        <tr><td>Molly (Sensely)</td><td>Clinical protocols + AI with continuous feedback.</td><td>85% effectiveness in heart failure.</td><td>Reduced hospitalizations in chronic patients with remote monitoring.</td></tr>
        <tr><td>Symptomate</td><td>Guidelines and simulated clinical data.</td><td>Accuracy in simple cases like pharyngitis and UTI.</td><td>Helped identify dengue and infectious diseases in tropical regions.</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Source:</strong> Authors (2025).</div>

<p>Ada Health stands out for its scientific robustness, with peer-reviewed studies published in journals such as BMJ Open and Nature Digital Medicine. In a comparative study of symptom assessment apps, the platform presented approximately 71% accuracy in including the correct diagnosis among its top three suggestions, demonstrating performance close to that of general practitioners in certain contexts (GILBERT et al., 2020). In contrast, Molly, developed by Sensely, focuses on remote monitoring of chronic patients, using protocols validated by the UK's National Health Service (NHS). Studies in the telemedicine field point to high effectiveness of this type of solution in managing chronic diseases, such as heart failure, evidencing its practical relevance in continuous patient care (TELEMEDICINE AND E-HEALTH, 2020).</p>

<p>Symptomate, aimed at triaging specific diseases such as tropical ones, shows notable clinical efficacy, with diagnostic accuracy similar to that of a physician in cases such as pharyngitis and urinary tract infections (BENIS, 2022), highlighting its usefulness in endemic and emergency contexts. These results indicate different niches of operation and levels of clinical maturity, highlighting the importance of specific analyzes for each context of use.</p>

<p>Data security and privacy are crucial aspects for digital health platforms, especially given the requirements of the Brazilian General Data Protection Law (LGPD). Adequate protection of this information is fundamental to guarantee user trust and prevent possible damage resulting from inappropriate use of sensitive data. As shown in Table 2, the analyzed platforms present different approaches regarding the collection of personal data, such as clinical information, voice recordings, and even images, in addition to significant variations in sharing with third parties and policy transparency.</p>

<h3>Table 2 – Security and Privacy (LGPD - via Webbkoll)</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Platform</th><th>Personal Data Collection</th><th>Sharing with Third Parties</th><th>Policy and Consent</th><th>Identified Non-conformities</th><th>Cookies</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>Name, age, symptoms, location.</td><td>Yes (Google Analytics, Meta Pixel)</td><td>Technical and somewhat inaccessible policy.</td><td>Tracks data before consent.</td><td>2 third-party, no initial blocking.</td></tr>
        <tr><td>Molly (Sensely)</td><td>Clinical data, voice, image.</td><td>Yes (AWS, Twilio, Analytics)</td><td>Limited and only in English.</td><td>Sensitive collection without explicit notice.</td><td>4 active before consent.</td></tr>
        <tr><td>Symptomate</td><td>Symptoms, age, sex.</td><td>Google (Limited).</td><td>Clear policy, in Portuguese.</td><td>Simple structure without third-party calls on homepage</td><td>Use of cookies, blocked until interaction (8 total)</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Source:</strong> Authors (2025).</div>

<p>While Ada Health and Molly (Sensely) use tracking tools before obtaining consent, Symptomate stands out for having a more simplified structure aligned with the principles of the LGPD. The comparative analysis carried out highlights these differences, particularly regarding policy clarity, legal compliance, and the presence of potentially critical vulnerabilities.</p>

<p>While Symptomate adopts measures such as initial cookie blocking and a limited scope of sharing with third parties (only basic Google), the other platforms demonstrate non-conformities with the LGPD, such as: Molly (Sensely): Collection of sensitive data (voice and image) without explicit notice and use of four active cookies before consent, exposing users to potential violations. Ada Health: Prior data tracking (via Google Analytics and Meta Pixel) and complex privacy policies, making it difficult for users to understand how their information is handled. These differences not only reflect distinct levels of compliance with the LGPD but also directly impact user trust – an essential factor in digital health platforms, where data sensitivity demands maximum transparency and control, as seen in heart failure (Telemedicine and e-Health, 2020), evidencing practical relevance in continuous care.</p>

<p>User satisfaction is an important means of evaluating the effectiveness and adoption of digital health platforms. Reviews on the app stores (App Store and Google Play) of Ada Health, Molly (Sensely), and Symptomate reveal not only the general perception of each but also recurring patterns that shape the practical experience, from intuitive interfaces to operational failures. Table 3 synthesizes these data, crossing metrics such as average rating, number of reviews, and estimated downloads. For the qualitative analysis of feedback, the 50 most recent comments for each platform on the App Store and Google Play were collected and categorized into two main categories: recurring praise and recurring criticism, based on thematic repetition and frequency of mentions.</p>

<h3>Table 3 – User Satisfaction via App Store and Google Play</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Platform</th><th>Average Rating</th><th>Number of Reviews</th><th>Estimated Downloads</th><th>Frequent Praise</th><th>Frequent Criticism</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>4.9 ★ (iOS)<br>4.7 ★ (Android)</td><td>+5 thousand</td><td>+2 million</td><td>Intuitive interface, quick diagnoses, feeling of professional support</td><td>Repetitive questions, lack of integration with local doctors</td></tr>
        <tr><td>Molly (Sensely)</td><td>4.6 ★ (iOS)<br>4.3 ★ (Android)</td><td>219 reviews</td><td>+10 thousand</td><td>Humanized avatar, feeling of real conversation, useful for chronic diseases</td><td>Slow responses, bugs, regional unavailability</td></tr>
        <tr><td>Symptomate</td><td>4.7 ★ (iOS)<br>4.3 ★ (Android)</td><td>+10 thousand</td><td>+500 thousand</td><td>Simple, fast, clear guidance, light app</td><td>Little personalization, no symptom history</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Source:</strong> Authors (2025).</div>

<p>The technical performance of digital health platforms plays an essential role in ensuring usability, security, and quality of user experience. In the context of the analyzed chatbots, evaluating aspects such as accessibility, loading speed, visual stability, and compliance with web best practices allows identifying technical limitations that can negatively impact their adoption and effectiveness.</p>

<p>Table 4 presents a comparative analysis of these elements, based on tests carried out on computer and mobile devices, according to the Google Lighthouse tool criteria and Core Web Vitals, a set of indicators defined by Google to measure user experience on web pages.</p>

<p>The Google Lighthouse results are presented on a scale from 0 to 100, where values closer to 100 indicate better platform performance, while lower values represent less compliance with development best practices and a greater presence of technical problems. Thus, the higher the score, the better the platform's performance in each evaluated metric.</p>

<p>Indicators such as accessibility, performance, compliance with best practices, search engine ranking (SEO), and real usage experience metrics (Core Web Vitals, including LCP – Largest Contentful Paint, INP – Interaction to Next Paint, and CLS – Cumulative Layout Shift) are evaluated. The table also includes an interpretative justification for each result, indicating whether the platform meets the minimum parameters considered adequate. For approval in the Core Web Vitals indicators, platforms must satisfy, in at least 75% of real visits, the following parameters:</p>

<ul>
<li><b>LCP</b> (Largest Contentful Paint): measures the time required to load and display the largest visible element of the page. For a good user experience, this time should be up to 2.5 seconds.</li>
<li><b>INP</b> (Interaction to Next Paint): measures the interval between user interaction (such as a click or tap) and the subsequent visual update. A value of up to 200 milliseconds indicates that the interface responds agilely, avoiding perceptible delays that could harm usability.</li>
<li><b>CLS</b> (Cumulative Layout Shift): quantifies the visual stability of the page during loading. Values up to 0.1 are considered acceptable, ensuring that the layout remains stable while content is loading.</li>
</ul>

<h3>Table 4 – Accessibility according to Google Lighthouse.</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Platform</th><th>Device</th><th>Accessibility</th><th>Performance</th><th>Best Practices</th><th>SEO</th><th>Core Web Vitals (LCP / INP / CLS)</th></tr>
    </thead>
    <tbody>
        <tr><td rowspan="2">Ada Health</td><td>Computer</td><td>96</td><td>98</td><td>93</td><td>100</td><td>LCP: 1.6s<br>INP: 51ms<br>CLS: 0.11</td></tr>
        <tr><td>Mobile</td><td>96</td><td>79</td><td>100</td><td>100</td><td>LCP: 2.2s<br>INP: 130ms<br>CLS: 0.09</td></tr>
        <tr><td rowspan="2">Molly (Sensely)</td><td>Computer</td><td>76</td><td>75</td><td>100</td><td>77</td><td>LCP: 3.2s<br>INP: 79ms<br>CLS: 0.01</td></tr>
        <tr><td>Mobile</td><td>79</td><td>71</td><td>100</td><td>77</td><td>LCP: 3.2s<br>INP: 271ms<br>CLS: 0.08</td></tr>
        <tr><td rowspan="2">Symptomate</td><td>Computer</td><td>65</td><td>90</td><td>100</td><td>92</td><td>LCP: 3.4s<br>INP: 76ms<br>CLS: 0.05</td></tr>
        <tr><td>Mobile</td><td>60</td><td>90</td><td>100</td><td>92</td><td>LCP: 4s<br>INP: 195ms<br>CLS: 0.32</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Source:</strong> Authors (2025).</div>

<p>From the data presented in Table 4, significant contrasts are observed between the platforms regarding technical performance and user experience. Ada Health stands out with highly positive metrics on computers and mobile devices, presenting indicators within recommended limits and good overall usability. Despite a slightly high CLS on desktop, indicating some layout instability, loading times and responsiveness remain satisfactory, reinforcing the platform's technical maturity. Molly (Sensely), on the other hand, although maintaining good scores in accessibility and best practices, suffers from high LCP on both desktop and mobile, which represents a delay in loading main content. This slowness, combined with noticeable interaction lag on mobile devices, compromises navigation fluidity. Finally, Symptomate presents the worst overall performance: in addition to LCP above ideal, harming user experience, the CLS on mobile is considerably high, indicating significant visual instability.</p>

<p>The analysis of the platforms' natural language understanding capacity, as detailed in Table 5, reveals important nuances regarding the quality of user-chatbot interaction. The ability to understand users' natural language is one of the main challenges for digital health platforms, especially in contexts where informal language or ambiguous questions are used. Usability, conversational flexibility, and accuracy in interpreting intentions are essential factors for an effective and safe experience. In this regard, Table 5 analyzes the linguistic performance of the Ada Health, Molly (Sensely), and Symptomate chatbots based on five fundamental criteria, qualitatively assessed as low, medium, or high performance: tolerance to slang and errors, interpretation of ambiguous questions, dialogue reformulation, and correct identification of user message intent.</p>

<h3>Table 5. Natural Language Understanding (Golden Set Method).</h3>
<div class="table-wrapper">
<table>
    <thead>
        <tr><th>Platform</th><th>Tolerance to Slang and Errors</th><th>Interpretation of Ambiguous Questions</th><th>Dialogue Reformulation</th><th>Correct Intent Identification Ability</th></tr>
    </thead>
    <tbody>
        <tr><td>Ada Health</td><td>High</td><td>Regular</td><td>High</td><td>High</td></tr>
        <tr><td>Molly (Sensely)</td><td>Medium</td><td>Low</td><td>Medium</td><td>High</td></tr>
        <tr><td>Symptomate</td><td>High</td><td>High</td><td>High</td><td>High</td></tr>
    </tbody>
</table>
</div>
<div class="table-source"><strong>Source:</strong> Authors (2025).</div>

<p>Analysis of Table 5 shows that Symptomate stands out in natural language understanding, demonstrating high tolerance to slang, spelling errors, and ambiguous questions. Informal expressions like "I'm feeling bad" or vague phrases like "I think I have dengue or a virus" are well interpreted, ensuring continuity in care. Ada Health shows regular performance in ambiguity but recognizes variations like "stomach ache" and corrects errors like "hedache" to "headache", maintaining good fluidity. Molly (Sensely) has difficulties in this aspect, requiring more direct phrases; generic expressions result in vague and unhelpful responses.</p>

<p>In terms of dialogue reformulation, Ada Health and Symptomate are more adaptable to user interactions, while Molly faces limitations that affect conversational naturalness. In intent identification, all have functional performance, but Ada Health and Symptomate demonstrate greater precision, even with informal language.</p>`,
    consideracoes: `<p>The comparative analysis of the Ada Health, Molly (Sensely), and Symptomate chatbots demonstrated that these tools have great potential to contribute to healthcare, offering agile triage, initial clinical support, and accessibility to users. Among the analyzed solutions, Ada Health presented consistent performance across multiple criteria adopted in this research, combining high diagnostic accuracy, robust scientific validation, excellent user experience, and broad public acceptance. However, the results obtained are directly conditioned by the evaluation criteria and methods used in this study, which is exploratory and comparative in nature, and it is not possible to generalize the results to all clinical and technological contexts. Furthermore, it was observed that each platform excels in specific dimensions, such as technical performance, clinical accuracy, and compliance with the LGPD; The Molly platform offers a humanized differential through an interactive avatar and Symptomate presents strong performance in natural language and LGPD compliance. Despite this, both still face limitations in technical performance, privacy, or functional scope in certain analyzed criteria. In this context, the results indicate that Ada Health showed greater balance among the aspects evaluated in this research, and may serve as a reference for future artificial intelligence applications in digital health. It is recommended that new implementations prioritize data security, continuous clinical validation, and focus on patient experience to ensure a positive and ethical impact on the sector, also promoting greater accessibility and personalization of digital care.</p>`,
    referencias: `<div class="references-container">
    <div class="references-grid">
        <div class="reference-item">
            <div class="ref-authors">ADA HEALTH.</div>
            <div class="ref-title">How Ada works.</div>
            <div class="ref-year">2025.</div>
            <div class="ref-source">Available at: <a href="https://ada.com/pt/" target="_blank" rel="noopener noreferrer">https://ada.com/pt/</a></div>
            <div class="ref-access">Accessed on: Mar 12, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ALOWAIS, S. A.; SHUROUG, S.</div>
            <div class="ref-title">Revolutionizing healthcare: the role of artificial intelligence in clinical practice.</div>
            <div class="ref-source">BMC Medical Education, 2023.</div>
            <div class="ref-source">Available at: <a href="https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-023-04698z#citeas" target="_blank" rel="noopener noreferrer">https://bmcmededuc.biomedcentral.com</a></div>
            <div class="ref-access">Accessed on: Mar 25, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ARMITAGE, H.</div>
            <div class="ref-title">Physician decision chatbot.</div>
            <div class="ref-source">Stanford Medicine, 2025.</div>
            <div class="ref-source">Available at: <a href="https://med.stanford.edu/news/all-news/2025/02/physiciandecision-chatbot.html" target="_blank" rel="noopener noreferrer">https://med.stanford.edu</a></div>
            <div class="ref-access">Accessed on: Apr 13, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BABUSHKINA, D.; VOTSIS, A.</div>
            <div class="ref-title">Epistemo-ethical constraints on AI-human decision making for diagnostic purposes.</div>
            <div class="ref-source">Ethics and Information Technology, v. 24, n. 22, 2022.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BENIS, A. I.</div>
            <div class="ref-title">The use of chatbots in health care: a review of literature.</div>
            <div class="ref-source">JMIR Medical Informatics, v. 8, n. 4, 2020.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BMJ OPEN.</div>
            <div class="ref-title">Comparison of symptom checkers triage performance in primary care.</div>
            <div class="ref-source">BMJ Open, v. 10, n. 4, 2020.</div>
            <div class="ref-source">Available at: <a href="https://bmjopen.bmj.com/" target="_blank" rel="noopener noreferrer">https://bmjopen.bmj.com/</a></div>
            <div class="ref-access">Accessed on: Mar 18, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">CARDOSO, Ericson.</div>
            <div class="ref-title">Importance of technology in healthcare: innovations and benefits, 2024.</div>
            <div class="ref-source">Available at: <a href="https://blog.ux4you.com.br/2024/06/24/importancia-da-tecnologia-na-saude-inovacoes-e-beneficios/" target="_blank" rel="noopener noreferrer">https://blog.ux4you.com.br</a></div>
            <div class="ref-access">Accessed on: Apr 13, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ELIAS, M. A. et al.</div>
            <div class="ref-title">Artificial intelligence in health and bioethical implications: a systematic review.</div>
            <div class="ref-source">Revista Bioética, 2023.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">FAN, H. et al.</div>
            <div class="ref-title">Utilization of self-diagnosis health chatbots in real-world settings: case study.</div>
            <div class="ref-source">Journal of Medical Internet Research, v. 23, n. 1, 2021.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">GILBERT, S. et al.</div>
            <div class="ref-title">How accurate are digital symptom assessment apps for suggesting conditions and urgency advice? A clinical vignettes comparison to general practitioners.</div>
            <div class="ref-source">BMJ Open, v. 10, n. 12, 2020.</div>
            <div class="ref-source">Available at: <a href="https://bmjopen.bmj.com/content/10/12/e040269" target="_blank" rel="noopener noreferrer">https://bmjopen.bmj.com</a></div>
            <div class="ref-access">Accessed on: May 14, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INBENTA.</div>
            <div class="ref-title">Benefits of chatbots in healthcare: 9 use cases.</div>
            <div class="ref-source">Inbenta, 2022.</div>
            <div class="ref-source">Available at: <a href="https://www.inbenta.com/pt-br/articles/benefits-of-chatbots-in-healthcare-9-use-cases-of-healthcare-chatbots/" target="_blank" rel="noopener noreferrer">https://www.inbenta.com</a></div>
            <div class="ref-access">Accessed on: Apr 10, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INFERMEDICA.</div>
            <div class="ref-title">Symptomate.</div>
            <div class="ref-source">Available at: <a href="https://symptomate.com/pt-br/about" target="_blank" rel="noopener noreferrer">https://symptomate.com/pt-br/about</a></div>
            <div class="ref-access">Accessed on: Mar 06, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">LARANJO, L. et al.</div>
            <div class="ref-title">Conversational agents in healthcare: a systematic review.</div>
            <div class="ref-source">Journal of the American Medical Informatics Association, v. 25, n. 9, p. 1248-1258, 2018.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">LAURENTYS, Paulo.</div>
            <div class="ref-title">Smart hospitals: what are the advances of AI in the Brazilian healthcare system.</div>
            <div class="ref-source">Saúde Digital News, 2025.</div>
            <div class="ref-source">Available at: <a href="https://medicinasa.com.br/hospitais-inteligentes-ia/" target="_blank" rel="noopener noreferrer">https://medicinasa.com.br</a></div>
            <div class="ref-access">Accessed on: Apr 10, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">MAULDIN, M.</div>
            <div class="ref-title">ChatterBots, TinyMUDs, and the Turing Test: entering the Loebner Prize competition.</div>
            <div class="ref-source">In: Proceedings of the National Conference on Artificial Intelligence. 1994. p. 16–21.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SENSELY.</div>
            <div class="ref-title">Sensely.</div>
            <div class="ref-source">[n.d.].</div>
            <div class="ref-source">Available at: <a href="https://sensely.com/" target="_blank" rel="noopener noreferrer">https://sensely.com/</a></div>
            <div class="ref-access">Accessed on: Mar 14, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SILVEIRA, P. V. R.; PARAVIDINI, J. L. L.</div>
            <div class="ref-title">Ethics of applying artificial intelligences and chatbots in mental health: a psychoanalytic perspective.</div>
            <div class="ref-source">Revista Pesquisa Qualitativa, v. 12, n. 30, 2024.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">TELEMEDICINE AND E-HEALTH.</div>
            <div class="ref-title">Remote patient monitoring for chronic disease management: outcomes and effectiveness in heart failure care.</div>
            <div class="ref-source">Telemedicine and e-Health, v. 26, n. 5, 2020.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">TOPOL, Eric.</div>
            <div class="ref-title">Deep medicine: how artificial intelligence can make healthcare human again.</div>
            <div class="ref-source">ACM Digital Library, 2019.</div>
        </div>
    </div>
</div>`
},

es: {
    logo: "Chatbots en Salud Digital",
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
    hero: {
        titulo: "Entre la tecnología y el cuidado:<br>análisis comparativo estructurado de chatbots en salud digital",
        subtitulo: "Ada Health · Molly (Sensely) · Symptomate — precisión diagnóstica, LGPD, usabilidad y lenguaje natural."
    },
    byline: {
        autor1: "Andressa Barbosa Carvalho Araújo",
        autor2: "Matheus Bilitardo Abib",
        autor3: "Luciano Gonçalves de Carvalho",
        tempoLeitura: "18",
        minLeitura: "min de lectura",
        instituicao: "FATEC Mogi das Cruzes · 2025"
    },
    buttons: {
        citarABNT: "Citar ABNT",
        citarAPA: "Citar APA",
        tema: "Tema",
        abrirPDF: "Abrir PDF"
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
        referencias: "Referencias"
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
        langChanged: "Idioma cambiado a "
    },
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
        <tr><td>Ada Health</th><td>+50 millones de interacciones médicas reales.</th><td>70% de acierto entre los 3 principales diagnósticos y rendimiento similar a clínicos generales.</th><td>Ayudó a identificar apendicitis y acelerar triajes en programas corporativos.</th></tr>
        <tr><td>Molly (Sensely)</th><td>Protocolos clínicos + IA con retroalimentación continua.</th><td>85% de efectividad en insuficiencia cardíaca.</th><td>Redujo hospitalizaciones en pacientes crónicos con monitoreo remoto.</th></tr>
        <tr><td>Symptomate</th><td>Guías y datos clínicos simulados.</th><td>Precisión en casos simples como faringitis e ITU.</th><td>Ayudó a identificar dengue y enfermedades infecciosas en regiones tropicales.</th></tr>
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
        <tr><td>Ada Health</th><td>Nombre, edad, síntomas, ubicación.</th><td>Sí (Google Analytics, Meta Pixel)</th><td>Política técnica y poco accesible.</th><td>Rastrea datos antes del consentimiento.</th><td>2 de terceros, sin bloqueo inicial.</th></tr>
        <tr><td>Molly (Sensely)</th><td>Datos clínicos, voz, imagen.</th><td>Sí (AWS, Twilio, Analytics)</th><td>Limitada y solo en inglés.</th><td>Recolección sensible sin aviso explícito.</th><td>4 activos antes del consentimiento.</th></tr>
        <tr><td>Symptomate</th><td>Síntomas, edad, sexo.</th><td>Google (Limitado).</th><td>Política clara, en portugués.</th><td>Estructura simple sin llamadas a terceros en la página de inicio</th><td>Uso de cookies, bloqueados hasta interacción (8 en total)</th></tr>
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
        <tr><td>Ada Health</th><td>4.9 ★ (iOS)<br>4.7 ★ (Android)</th><td>+5 mil</th><td>+2 millones</th><td>Interfaz intuitiva, diagnósticos rápidos, sensación de apoyo profesional</th><td>Preguntas repetitivas, falta de integración con médicos locales</th></tr>
        <tr><td>Molly (Sensely)</th><td>4.6 ★ (iOS)<br>4.3 ★ (Android)</th><td>219 evaluaciones</th><td>+10 mil</th><td>Avatar humanizado, sensación de conversación real, útil para enfermedades crónicas</th><td>Respuestas lentas, bugs, indisponibilidad regional</th></tr>
        <tr><td>Symptomate</th><td>4.7 ★ (iOS)<br>4.3 ★ (Android)</th><td>+10 mil</th><td>+500 mil</th><td>Simple, rápido, orientaciones claras, app ligera</th><td>Poca personalización, sin historial de síntomas</th></tr>
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
        <tr><td rowspan="2">Ada Health</th><td>Computadora</th><td>96</th><td>98</th><td>93</th><td>100</th><td>LCP: 1.6s<br>INP: 51ms<br>CLS: 0.11</th></tr>
        <tr><td>Celular</th><td>96</th><td>79</th><td>100</th><td>100</th><td>LCP: 2.2s<br>INP: 130ms<br>CLS: 0.09</th></tr>
        <tr><td rowspan="2">Molly (Sensely)</th><td>Computadora</th><td>76</th><td>75</th><td>100</th><td>77</th><td>LCP: 3.2s<br>INP: 79ms<br>CLS: 0.01</th></tr>
        <tr><td>Celular</th><td>79</th><td>71</th><td>100</th><td>77</th><td>LCP: 3.2s<br>INP: 271ms<br>CLS: 0.08</th></tr>
        <tr><td rowspan="2">Symptomate</th><td>Computadora</th><td>65</th><td>90</th><td>100</th><td>92</th><td>LCP: 3.4s<br>INP: 76ms<br>CLS: 0.05</th></tr>
        <tr><td>Celular</th><td>60</th><td>90</th><td>100</th><td>92</th><td>LCP: 4s<br>INP: 195ms<br>CLS: 0.32</th></tr>
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
        <tr><td>Ada Health</th><td>Alta</th><td>Regular</th><td>Alta</th><td>Alta</th></tr>
        <tr><td>Molly (Sensely)</th><td>Media</th><td>Baja</th><td>Media</th><td>Alta</th></tr>
        <tr><td>Symptomate</th><td>Alta</th><td>Alta</th><td>Alta</th><td>Alta</th></tr>
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
},
};

function updateUITexts(lang) {
       console.log('updateUITexts chamado para:', lang);
    const t = translations[lang];
    
    document.querySelector('.logo-area h4').innerText = t.logo;
    
    document.querySelector('.fixed-header .nav-links-fixed a:nth-child(1)').innerText = t.nav.resumo;
    document.querySelector('.fixed-header .nav-links-fixed a:nth-child(2)').innerText = t.nav.introducao;
    document.querySelector('.fixed-header .nav-links-fixed a:nth-child(3)').innerText = t.nav.metodologia;
    document.querySelector('.fixed-header .nav-links-fixed a:nth-child(4)').innerText = t.nav.referencial;
    document.querySelector('.fixed-header .nav-links-fixed a:nth-child(5)').innerText = t.nav.resultados;
    document.querySelector('.fixed-header .nav-links-fixed a:nth-child(6)').innerText = t.nav.consideracoes;
    document.querySelector('.fixed-header .nav-links-fixed a:nth-child(7)').innerText = t.nav.referencias;
    
    const topBarLinks = document.querySelectorAll('.top-bar .nav-links a');
    topBarLinks[0].innerText = t.nav.resumo;
    topBarLinks[1].innerText = t.nav.introducao;
    topBarLinks[2].innerText = t.nav.metodologia;
    topBarLinks[3].innerText = t.nav.referencial;
    topBarLinks[4].innerText = t.nav.resultados;
    topBarLinks[5].innerText = t.nav.consideracoes;
    topBarLinks[6].innerText = t.nav.referencias;
    
    document.querySelector('.hero h1').innerHTML = t.hero.titulo;
    document.querySelector('.hero p').innerHTML = t.hero.subtitulo;
    
const authors = document.querySelectorAll('.byline .authors span');
authors[0].innerHTML = `<i class="fas fa-user"></i> ${t.byline.autor1}`;
authors[1].innerHTML = `<i class="fas fa-user"></i> ${t.byline.autor2}`;
authors[2].innerHTML = `<i class="fas fa-user"></i> ${t.byline.autor3}`;

    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.innerHTML = `<i class="pi pi-file-pdf"></i> ${t.buttons.abrirPDF}`;
    }


    const readingTimeSpan = document.querySelector('.reading-time');
    if (readingTimeSpan) {
        readingTimeSpan.innerHTML = `<i class="pi pi-clock"></i> <span id="estimatedReadingTime">${t.byline.tempoLeitura}</span> ${t.byline.minLeitura}`;
    }

    document.querySelector('.byline .meta span:last-child').innerHTML = `<i class="pi pi-building"></i> ${t.byline.instituicao}`;
    
    document.getElementById('citeABNT').innerHTML = `<i class="fas fa-quote-right"></i> ${t.buttons.citarABNT}`;
    document.getElementById('citeAPA').innerHTML = `<i class="pi pi-book"></i> ${t.buttons.citarAPA}`;
    document.getElementById('themeToggle').innerHTML = `<i class="pi pi-moon"></i> ${t.buttons.tema}`;
    
    const themeToggleFixed = document.getElementById('themeToggleFixed');
    if (themeToggleFixed) {
        themeToggleFixed.innerHTML = `<i class="pi pi-moon"></i>`;
        themeToggleFixed.title = t.buttons.tema;
    }
    
    document.querySelector('.toc h3').innerHTML = `<i class="pi pi-list"></i> ${t.toc.titulo}`;
    const tocLinks = document.querySelectorAll('.toc ul li a');
    tocLinks[0].innerHTML = `<i class="pi pi-file-pdf"></i> ${t.toc.resumo}`;
    tocLinks[1].innerHTML = `<i class="pi pi-info-circle"></i> ${t.toc.introducao}`;
    tocLinks[2].innerHTML = `<i class="pi pi-cog"></i> ${t.toc.metodologia}`;
    tocLinks[3].innerHTML = `<i class="pi pi-book"></i> ${t.toc.referencial}`;
    tocLinks[4].innerHTML = `<i class="pi pi-chart-bar"></i> ${t.toc.resultados}`;
    tocLinks[5].innerHTML = `<i class="pi pi-check-circle"></i> ${t.toc.consideracoes}`;
    tocLinks[6].innerHTML = `<i class="pi pi-database"></i> ${t.toc.referencias}`;
    
document.querySelectorAll('.footer-section h3')[0].innerHTML = `<i class="pi pi-users"></i> ${t.footer.autores}`;
document.querySelectorAll('.footer-section h3')[1].innerHTML = `<i class="pi pi-building"></i> ${t.footer.instituicao}`;
document.querySelectorAll('.footer-section h3')[2].innerHTML = `<i class="pi pi-link"></i> ${t.footer.links}`;
document.querySelectorAll('.footer-section h3')[3].innerHTML = `<i class="pi pi-share-alt"></i> ${t.footer.compartilhe}`;
    
    const footerLinks = document.querySelectorAll('.footer-links li a');
    footerLinks[0].innerHTML = `<i class="pi pi-arrow-right"></i> ${t.footer.resumoArtigo}`;
    footerLinks[1].innerHTML = `<i class="pi pi-arrow-right"></i> ${t.footer.metodologia}`;
    footerLinks[2].innerHTML = `<i class="pi pi-arrow-right"></i> ${t.footer.resultados}`;
    footerLinks[3].innerHTML = `<i class="pi pi-arrow-right"></i> ${t.footer.referencias}`;
    
    document.querySelector('.footer-cite p').innerHTML = `<i class="pi pi-quote-right"></i> ${t.footer.comoCitar}`;
    document.getElementById('citeABNTFooter').innerHTML = `<i class="fas fa-quote-right"></i> ${t.buttons.citarABNT}`;
    document.querySelector('.footer-copyright').innerHTML = `<i class="pi pi-copyright"></i> 2025 — ${t.footer.direitos}`;
    
    const referencesTitle = document.querySelector('#referencias h2 span');
    if (referencesTitle) {
        referencesTitle.innerHTML = `<i class="fas fa-book"></i> ${t.references.title}`;
    }
}

function updatePaginationTexts(lang) {
    const t = translations[lang];
    const paginationInfo = document.querySelector('.pagination-info');
    if (paginationInfo) {
        const currentText = paginationInfo.innerText;
        const match = currentText.match(/Página (\d+) de (\d+) \((\d+) referências\)/);
        if (match) {
            paginationInfo.innerText = `${t.references.page} ${match[1]} ${t.references.of} ${match[2]} (${match[3]} ${t.references.references})`;
        }
    }
    
    const prevBtn = document.querySelector('.pagination-btn:first-child');
    const nextBtn = document.querySelector('.pagination-btn:last-child');
    if (prevBtn && !prevBtn.disabled) {
        prevBtn.innerHTML = `<i class="fas fa-chevron-left"></i> ${t.references.previous}`;
    }
    if (nextBtn && !nextBtn.disabled) {
        nextBtn.innerHTML = `${t.references.next} <i class="fas fa-chevron-right"></i>`;
    }
}

const originalRenderReferencesPage = renderReferencesPage;
renderReferencesPage = function() {
    originalRenderReferencesPage();
    updatePaginationTexts(currentLang);
};

function renderFullArticle() {
    const t = fullContent[currentLang];
    const titles = translations[currentLang];
    
    const html = `
        <section id="resumo" class="resumo-card"><h2><i class="fas fa-file-lines"></i> ${titles.toc.resumo.toUpperCase()}</h2>${t.resumo}</section>
        <section id="introducao"><h2>1. ${titles.toc.introducao.toUpperCase()}</h2>${t.introducao}</section>
        <section id="metodologia"><h2>2. ${titles.toc.metodologia.toUpperCase()}</h2>${t.metodologia}</section>
        <section id="referencial"><h2>3. ${titles.toc.referencial.toUpperCase()}</h2>${t.referencial}</section>
        <section id="resultados"><h2>4. ${titles.toc.resultados.toUpperCase()}</h2>${t.resultados}</section>
        <section id="consideracoes"><h2>5. ${titles.toc.consideracoes.toUpperCase()}</h2>${t.consideracoes}</section>
        <section id="referencias">
            <h2 style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;" onclick="toggleReferences()">
                <span><i class="fas fa-book"></i> ${titles.references.title}</span>
                <span id="referencesToggleIcon" style="font-size: 1.2rem;"><i class="fas fa-chevron-down"></i></span>
            </h2>
            <div id="referencesContent" style="display: none;">
                <div id="referencesPaginationContainer"></div>
            </div>
        </section>
    `;
    document.getElementById('articleContainer').innerHTML = html;
    
    processReferencesWithPagination(t.referencias);
    
    updateTocActive();
    updateUITexts(currentLang);
    
    window.removeEventListener('scroll', updateTocActive);
    window.addEventListener('scroll', updateTocActive);
}

let currentReferencesPage = 1;
let referencesItems = [];
const referencesPerPage = 4;

function extractReferenceItems(referencesHtml) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = referencesHtml;
    const items = tempDiv.querySelectorAll('.reference-item');
    return Array.from(items).map(item => item.outerHTML);
}

function renderReferencesPage() {
    const container = document.getElementById('referencesPaginationContainer');
    if (!container) return;
    
    const start = (currentReferencesPage - 1) * referencesPerPage;
    const end = start + referencesPerPage;
    const pageItems = referencesItems.slice(start, end);
    
    const itemsHtml = `<div class="references-grid">${pageItems.join('')}</div>`;
    
    const totalPages = Math.ceil(referencesItems.length / referencesPerPage);
    const paginationHtml = `
        <div class="references-pagination">
            <button class="pagination-btn" onclick="changeReferencesPage(${currentReferencesPage - 1})" ${currentReferencesPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <span class="pagination-info">Página ${currentReferencesPage} de ${totalPages} (${referencesItems.length} referências)</span>
            <button class="pagination-btn" onclick="changeReferencesPage(${currentReferencesPage + 1})" ${currentReferencesPage === totalPages ? 'disabled' : ''}>
                Próxima <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
    
    container.innerHTML = itemsHtml + paginationHtml;
}

function changeReferencesPage(newPage) {
    const totalPages = Math.ceil(referencesItems.length / referencesPerPage);
    if (newPage >= 1 && newPage <= totalPages) {
        currentReferencesPage = newPage;
        renderReferencesPage();
    }
}

function processReferencesWithPagination(referencesHtml) {
    referencesItems = extractReferenceItems(referencesHtml);
    currentReferencesPage = 1;
    renderReferencesPage();
}

function toggleReferences() {
    const referencesContent = document.getElementById('referencesContent');
    const toggleIcon = document.getElementById('referencesToggleIcon');
    
    if (referencesContent.style.display === 'none') {
        referencesContent.style.display = 'block';
        toggleIcon.innerHTML = '<i class="fas fa-chevron-up"></i>';
        renderReferencesPage();
    } else {
        referencesContent.style.display = 'none';
        toggleIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
}

function updateTocActive() {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const links = document.querySelectorAll('.toc a, .mobile-nav-links a');
    
    if (sections.length === 0) return;
    
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    let activeId = null;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        const isActive = (
            (scrollTop + 150 >= sectionTop && scrollTop + 150 < sectionBottom) ||
            (scrollTop + windowHeight - 200 >= sectionTop && scrollTop + windowHeight - 200 < sectionBottom)
        );
        
        if (isActive) {
            activeId = section.id;
            break;
        }
    }
    
    if (!activeId && scrollTop + windowHeight >= documentHeight - 100) {
        activeId = sections[sections.length - 1].id;
    }
    
    if (!activeId) {
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            if (scrollTop + 150 >= sectionTop) {
                activeId = section.id;
            } else {
                break;
            }
        }
    }
    
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}


    function initProgressBar() {
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        });
    }



let lastScrollTop = 0;
const fixedHeader = document.getElementById('fixedHeader');
const scrollThreshold = 100; 

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
        fixedHeader.classList.add('visible');
    } else {
        fixedHeader.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
});

const themeToggleOriginal = document.getElementById('themeToggle');
const themeToggleFixed = document.getElementById('themeToggleFixed');

if (langSelectFixed) {
    langSelectFixed.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('selectedLang', currentLang);
        if (langSelectOriginal) {
            langSelectOriginal.value = e.target.value;
            langSelectOriginal.dispatchEvent(new Event('change'));
        }
    });
}

if (themeToggleFixed) {
    themeToggleFixed.addEventListener('click', () => {
        if (themeToggleOriginal) {
            themeToggleOriginal.click();
        }
    });
}

if (langSelectOriginal && langSelectFixed) {
    langSelectOriginal.addEventListener('change', (e) => {
        langSelectFixed.value = e.target.value;
    });
}

const updateThemeButtons = () => {
    const isDark = document.body.classList.contains('dark');
    const themeIcon = themeToggleFixed?.querySelector('i');
    if (themeIcon) {
        themeIcon.className = isDark ? 'pi pi-sun' : 'pi pi-moon';
    }
};

const observer = new MutationObserver(() => {
    updateThemeButtons();
});
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
updateThemeButtons();

document.getElementById('langSelect').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('selectedLang', currentLang);
    renderFullArticle();
    updateUITexts(currentLang);
    showToast(`${translations[currentLang].toast.langChanged}${currentLang === 'pt' ? 'Português' : currentLang === 'en' ? 'English' : 'Español'}`);
});
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

        function showToast(msg, type = 'success') {
            const toast = document.getElementById('toastMessage');
            
            let icon = '';
            switch(type) {
                case 'success':
                    icon = '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>';
                    break;
                case 'error':
                    icon = '<i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>';
                    break;
                case 'info':
                    icon = '<i class="fas fa-info-circle" style="margin-right: 8px;"></i>';
                    break;
                default:
                    icon = '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>';
            }
            
            toast.innerHTML = icon + msg;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast.innerHTML === icon + msg) {
                        toast.innerHTML = '';
                    }
                }, 300);
            }, 3000);
        }

    document.getElementById('citeABNT').onclick = () => {
        navigator.clipboard.writeText("ARAÚJO, Andressa Barbosa Carvalho; ABIB, Matheus Bilitardo; CARVALHO, Luciano Gonçalves de. ENTRE A TECNOLOGIA E O CUIDADO: análise comparativa estruturada de chatbots na saúde digital. 2025.");
        showToast('Citação ABNT copiada');
    };

    const citeABNTFooter = document.getElementById('citeABNTFooter');
    if (citeABNTFooter) {
        citeABNTFooter.onclick = () => {
            navigator.clipboard.writeText("ARAÚJO, Andressa Barbosa Carvalho; ABIB, Matheus Bilitardo; CARVALHO, Luciano Gonçalves de. ENTRE A TECNOLOGIA E O CUIDADO: análise comparativa estruturada de chatbots na saúde digital. 2025.");
            showToast('Citação ABNT copiada');
        };
    }
    document.getElementById('citeAPA').onclick = () => {
        navigator.clipboard.writeText("Araújo, A. B. C., Abib, M. B., & Carvalho, L. G. (2025). Entre a tecnologia e o cuidado: análise comparativa estruturada de chatbots na saúde digital.");
        showToast('Citação APA copiada');
    };

    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').slice(1);
            const el = document.getElementById(target);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const later = () => {
            clearTimeout(timeout);
            func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

if (langSelectFixed) {
    langSelectFixed.value = currentLang;
}

renderFullArticle();
initProgressBar();

const debouncedUpdateToc = debounce(updateTocActive, 10);
window.addEventListener('scroll', debouncedUpdateToc);
window.addEventListener('resize', debouncedUpdateToc);
setTimeout(() => updateTocActive(), 150);