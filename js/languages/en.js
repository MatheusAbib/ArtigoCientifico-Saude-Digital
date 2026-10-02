const en = {
    translations: {
    logo: "Chatbots in Digital Health",
    hero: {
        titulo: "Between technology and care:<br>structured comparative analysis of chatbots in digital health",
        subtitulo: "Ada Health · Molly (Sensely) · Symptomate — diagnostic accuracy, LGPD, usability and natural language.",
        badge: "Scientific Article",
        status: "Accepted by the academic journal of FATEC Itapetininga",
        verRevista: "View Journal"
    },
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
    byline: {
        autor1: "Andressa Barbosa Carvalho Araújo",
        autor2: "Matheus Bilitardo Abib",
        autor3: "Luciano Gonçalves de Carvalho",
        tempoLeitura: "18",
        minLeitura: "minutes read",
        instituicao: "FATEC Mogi das Cruzes · 2025"
    },
    buttons: {
        citarABNT: "Cite ABNT",
        citarAPA: "Cite APA",
        tema: "Theme",
        abrirPDF: "Open PDF",
        cartaAceite: "Acceptance Letter"
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
        referencias: "References",
        revistaPerspectiva: "View Journal"
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
        langChanged: "Language changed to ",
        citeABNTCopied: "ABNT citation copied",
        citeAPACopied: "APA citation copied",
        openingPDF: "Opening PDF in a new tab...",
        openingLetter: "Opening acceptance letter...",
        linkCopied: "Link copied!"
    }
},
    content: {
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
    }
};