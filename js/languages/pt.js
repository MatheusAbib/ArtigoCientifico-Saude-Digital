const pt = {
    translations: {
        logo: "Chatbots na Saúde Digital",
        hero: {
            titulo: "Entre a tecnologia e o cuidado:<br>análise comparativa estruturada de chatbots na saúde digital",
            subtitulo: "Ada Health · Molly (Sensely) · Symptomate — precisão diagnóstica, LGPD, usabilidade e linguagem natural.",
            badge: "Artigo Científico",
            status: "Aceito na revista da FATEC Itapetininga",
            verRevista: "Ver Revista"
        },
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
        byline: {
            autor1: "Andressa Barbosa Carvalho Araújo",
            autor2: "Matheus Bilitardo Abib",
            autor3: "Luciano Gonçalves de Carvalho",
            tempoLeitura: "18",
            minLeitura: "minutos de leitura",
            instituicao: "FATEC Mogi das Cruzes · 2025"
        },
        buttons: {
            citarABNT: "Citar ABNT",
            citarAPA: "Citar APA",
            tema: "Tema",
            abrirPDF: "Abrir PDF",
            cartaAceite: "Carta de Aceite"
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
            referencias: "Referências",
            revistaPerspectiva: "Ver Revista"
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
            langChanged: "Idioma alterado para ",
            citeABNTCopied: "Citação ABNT copiada",
            citeAPACopied: "Citação APA copiada",
            openingPDF: "Abrindo PDF em nova aba...",
            openingLetter: "Abrindo carta de aceite...",
            linkCopied: "Link copiado!"
        }
    },
    content: {
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
    <tr><td rowspan="2">Ada Health</td><td>Computador</td><td>96</td><td>98</td><td>93</td><td>100</td><td class="cwv-cell"><strong>LCP:</strong> 1.6s<br><strong>INP:</strong> 51ms<br><strong>CLS:</strong> 0.11</td></tr>
    <tr><td>Celular</td><td>96</td><td>79</td><td>100</td><td>100</td><td class="cwv-cell"><strong>LCP:</strong> 2.2s<br><strong>INP:</strong> 130ms<br><strong>CLS:</strong> 0.09</td></tr>
    <tr><td rowspan="2">Molly (Sensely)</td><td>Computador</td><td>76</td><td>75</td><td>100</td><td>77</td><td class="cwv-cell"><strong>LCP:</strong> 3.2s<br><strong>INP:</strong> 79ms<br><strong>CLS:</strong> 0.01</td></tr>
    <tr><td>Celular</td><td>79</td><td>71</td><td>100</td><td>77</td><td class="cwv-cell"><strong>LCP:</strong> 3.2s<br><strong>INP:</strong> 271ms<br><strong>CLS:</strong> 0.08</td></tr>
    <tr><td rowspan="2">Symptomate</td><td>Computador</td><td>65</td><td>90</td><td>100</td><td>92</td><td class="cwv-cell"><strong>LCP:</strong> 3.4s<br><strong>INP:</strong> 76ms<br><strong>CLS:</strong> 0.05</td></tr>
    <tr><td>Celular</td><td>60</td><td>90</td><td>100</td><td>92</td><td class="cwv-cell"><strong>LCP:</strong> 4s<br><strong>INP:</strong> 195ms<br><strong>CLS:</strong> 0.32</td></tr>
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
    }
};