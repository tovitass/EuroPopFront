const EPF_ORGANIZATION_LABELS = {
    en: { fullName: "European Popular Front", shortName: "EPF", logoAlt: "EPF Logo" },
    de: { fullName: "Europäische Volksfront", shortName: "EVF", logoAlt: "EVF Logo" },
    es: { fullName: "Frente Popular Europeo", shortName: "FPE", logoAlt: "FPE Logo" },
    fr: { fullName: "Front Populaire Européen", shortName: "FPE", logoAlt: "FPE Logo" },
    it: { fullName: "Fronte Popolare Europeo", shortName: "FPE", logoAlt: "FPE Logo" },
    pl: { fullName: "Europejski Front Ludowy", shortName: "EFL", logoAlt: "EFL Logo" },
    ru: { fullName: "Европейский Народный Фронт", shortName: "ЕНФ", logoAlt: "ЕНФ Logo" },
    uk: { fullName: "Європейський Народний Фронт", shortName: "ЄНФ", logoAlt: "ЄНФ Logo" },
    bg: { fullName: "Европейски Народен Фронт", shortName: "ЕНФ", logoAlt: "ЕНФ Logo" },
    pt: { fullName: "Frente Popular Europeia", shortName: "FPE", logoAlt: "FPE Logo" },
    sc: { fullName: "Europska Popularna Fronta", shortName: "EPF", logoAlt: "EPF Logo" },
    nl: { fullName: "Europees Volksfront", shortName: "EVF", logoAlt: "EVF Logo" },
    ee: { fullName: "Euroopa Rahvarinne", shortName: "EPF", logoAlt: "EPF Logo" }
};

// Toolkit copy is kept alongside the portal language table so embedded pages
// receive the same language selection as the main site.
const EPF_TOOLKIT_TRANSLATIONS = {
    en: { tkGuideLabel: "EPF // VISUAL GUIDE", tkTitle: "EPF Visual Identity", tkIntro: "A practical reference for the colours, type, symbols, and poster styles that make EPF materials feel like they belong together.", tkTagline: "<strong>Clear, consistent, recognisably EPF.</strong> Use these building blocks across posters, social graphics, and presentations.", tkSlide1: "A shared visual language", tkSlide2: "EPF colour palette", tkSlide3: "EPF type", tkSlide4: "EPF symbols", tkSlide5: "Poster examples", tkDownload: "Download", tkPrev: "← PREV", tkNext: "NEXT →", tkSlide2Desc: "Use the exact hex values to keep colours consistent between design tools and screens.", tkSlide3Desc: "These three fonts are already used across the site. Keep their roles consistent when making new material.", tkSlide4Desc: "These are the official EPF flags and marks. Download the version that fits your design and use the original file so its colour and shape stay crisp.", tkSlide5Desc: "These community posters show how EPF colours, symbols, and messages can work together across different formats. Use them as inspiration, or share the designs as they are: print them as posters or stickers, post them on social media, or display them at meetings and events!" },
    de: { tkGuideLabel: "EVF // VISUELLER LEITFADEN", tkTitle: "Visuelle Identität der EVF", tkIntro: "Ein praktischer Leitfaden zu Farben, Schrift, Symbolen und Plakatstilen, die EVF-Materialien als zusammengehörig erkennbar machen.", tkTagline: "<strong>Klar, einheitlich, unverkennbar EVF.</strong> Nutze diese Grundlagen für Plakate, Grafiken und Präsentationen.", tkSlide1: "Eine gemeinsame Bildsprache", tkSlide2: "Farbpalette der EVF", tkSlide3: "Schriftarten der EVF", tkSlide4: "Symbole der EVF", tkSlide5: "Plakatbeispiele", tkDownload: "Herunterladen", tkPrev: "← ZURÜCK", tkNext: "WEITER →", tkSlide2Desc: "Nutze die genauen Hex-Werte, damit Farben in Designprogrammen und auf Bildschirmen gleich aussehen.", tkSlide3Desc: "Diese drei Schriftarten werden bereits auf der Website verwendet. Verwende sie auch in neuen Materialien mit denselben Aufgaben.", tkSlide4Desc: "Dies sind die offiziellen Flaggen und Zeichen der EVF. Lade die passende Version herunter und nutze die Originaldatei, damit Farbe und Form erhalten bleiben.", tkSlide5Desc: "Diese Plakate zeigen, wie Farben, Symbole und Botschaften der EVF in verschiedenen Formaten zusammenwirken. Lass dich inspirieren oder teile die Motive: Drucke sie als Plakate oder Sticker, poste sie in sozialen Medien oder zeige sie bei Treffen und Veranstaltungen!" },
    es: { tkGuideLabel: "FPE // GUÍA VISUAL", tkTitle: "Identidad visual del FPE", tkIntro: "Una guía práctica sobre los colores, la tipografía, los símbolos y los estilos de cartel que dan unidad a los materiales del FPE.", tkTagline: "<strong>Claridad, coherencia e identidad FPE.</strong> Usa estos elementos en carteles, gráficos y presentaciones.", tkSlide1: "Un lenguaje visual compartido", tkSlide2: "Paleta de colores del FPE", tkSlide3: "Tipografía del FPE", tkSlide4: "Símbolos del FPE", tkSlide5: "Ejemplos de carteles", tkDownload: "Descargar", tkPrev: "← ANTERIOR", tkNext: "SIGUIENTE →", tkSlide2Desc: "Usa los valores hexadecimales exactos para mantener los colores coherentes entre herramientas y pantallas.", tkSlide3Desc: "Estas tres tipografías ya se usan en el sitio. Mantén sus funciones al crear nuevos materiales.", tkSlide4Desc: "Estas son las banderas y marcas oficiales del FPE. Descarga la versión adecuada y usa el archivo original para conservar su color y forma.", tkSlide5Desc: "Estos carteles comunitarios muestran cómo combinar los colores, símbolos y mensajes del FPE en distintos formatos. Úsalos como inspiración o compártelos: imprímelos como carteles o pegatinas, publícalos en redes o muéstralos en reuniones y eventos." },
    fr: { tkGuideLabel: "FPE // GUIDE VISUEL", tkTitle: "Identité visuelle du FPE", tkIntro: "Un guide pratique des couleurs, des polices, des symboles et des styles d’affiche qui donnent une unité aux supports du FPE.", tkTagline: "<strong>Clair, cohérent, reconnaissable.</strong> Utilisez ces éléments pour vos affiches, visuels et présentations.", tkSlide1: "Un langage visuel commun", tkSlide2: "Palette de couleurs du FPE", tkSlide3: "Typographie du FPE", tkSlide4: "Symboles du FPE", tkSlide5: "Exemples d’affiches", tkDownload: "Télécharger", tkPrev: "← PRÉCÉDENT", tkNext: "SUIVANT →", tkSlide2Desc: "Utilisez les valeurs hexadécimales exactes pour assurer la cohérence des couleurs entre outils et écrans.", tkSlide3Desc: "Ces trois polices sont déjà utilisées sur le site. Gardez leurs rôles pour vos nouveaux supports.", tkSlide4Desc: "Voici les drapeaux et emblèmes officiels du FPE. Téléchargez la version adaptée et utilisez le fichier original pour préserver les couleurs et les formes.", tkSlide5Desc: "Ces affiches montrent comment associer les couleurs, symboles et messages du FPE dans différents formats. Inspirez-vous-en ou partagez-les : imprimez-les en affiches ou autocollants, publiez-les sur les réseaux sociaux ou présentez-les lors de réunions et d’événements." },
    it: { tkGuideLabel: "FPE // GUIDA VISIVA", tkTitle: "Identità visiva dell’FPE", tkIntro: "Una guida pratica a colori, caratteri, simboli e stili di poster che rendono riconoscibili i materiali dell’FPE.", tkTagline: "<strong>Chiaro, coerente, riconoscibilmente FPE.</strong> Usa questi elementi per poster, grafiche e presentazioni.", tkSlide1: "Un linguaggio visivo condiviso", tkSlide2: "Palette colori dell’FPE", tkSlide3: "Tipografia dell’FPE", tkSlide4: "Simboli dell’FPE", tkSlide5: "Esempi di poster", tkDownload: "Scarica", tkPrev: "← PRECEDENTE", tkNext: "AVANTI →", tkSlide2Desc: "Usa i valori esadecimali esatti per mantenere coerenti i colori tra strumenti di design e schermi.", tkSlide3Desc: "Questi tre caratteri sono già usati nel sito. Mantieni i loro ruoli nei nuovi materiali.", tkSlide4Desc: "Queste sono le bandiere e i simboli ufficiali dell’FPE. Scarica la versione adatta e usa il file originale per preservarne colori e forma.", tkSlide5Desc: "Questi poster mostrano come colori, simboli e messaggi dell’FPE possano funzionare insieme in diversi formati. Usali come ispirazione o condividili: stampali come poster o adesivi, pubblicali sui social o mostrali a riunioni ed eventi." },
    pl: { tkGuideLabel: "EFL // PRZEWODNIK WIZUALNY", tkTitle: "Identyfikacja wizualna EFL", tkIntro: "Praktyczny przewodnik po kolorach, krojach pisma, symbolach i stylach plakatów, które tworzą spójne materiały EFL.", tkTagline: "<strong>Jasno, spójnie, rozpoznawalnie.</strong> Wykorzystuj te elementy na plakatach, grafikach i prezentacjach.", tkSlide1: "Wspólny język wizualny", tkSlide2: "Paleta kolorów EFL", tkSlide3: "Typografia EFL", tkSlide4: "Symbole EFL", tkSlide5: "Przykłady plakatów", tkDownload: "Pobierz", tkPrev: "← POPRZEDNIA", tkNext: "NASTĘPNA →", tkSlide2Desc: "Używaj dokładnych wartości HEX, aby zachować spójne kolory w programach graficznych i na ekranach.", tkSlide3Desc: "Te trzy kroje pisma są już używane na stronie. Zachowaj ich role w nowych materiałach.", tkSlide4Desc: "To oficjalne flagi i symbole EFL. Pobierz odpowiednią wersję i używaj oryginalnego pliku, by zachować kolory i kształty.", tkSlide5Desc: "Te plakaty pokazują, jak łączyć kolory, symbole i przekaz EFL w różnych formatach. Wykorzystaj je jako inspirację lub udostępnij: drukuj jako plakaty lub naklejki, publikuj w mediach społecznościowych albo pokazuj na spotkaniach i wydarzeniach." },
    ru: { tkGuideLabel: "ЕНФ // ВИЗУАЛЬНОЕ РУКОВОДСТВО", tkTitle: "Визуальный стиль ЕНФ", tkIntro: "Практическое руководство по цветам, шрифтам, символам и стилям плакатов, объединяющим материалы ЕНФ.", tkTagline: "<strong>Ясно, последовательно, узнаваемо.</strong> Используйте эти элементы в плакатах, графике и презентациях.", tkSlide1: "Общий визуальный язык", tkSlide2: "Цветовая палитра ЕНФ", tkSlide3: "Шрифты ЕНФ", tkSlide4: "Символы ЕНФ", tkSlide5: "Примеры плакатов", tkDownload: "Скачать", tkPrev: "← НАЗАД", tkNext: "ДАЛЕЕ →", tkSlide2Desc: "Используйте точные HEX-коды, чтобы цвета совпадали в графических редакторах и на экранах.", tkSlide3Desc: "Эти три шрифта уже используются на сайте. Сохраняйте их назначение в новых материалах.", tkSlide4Desc: "Это официальные флаги и символы ЕНФ. Скачайте подходящую версию и используйте оригинал, чтобы сохранить цвет и форму.", tkSlide5Desc: "Эти плакаты показывают, как сочетать цвета, символы и идеи ЕНФ в разных форматах. Используйте их как пример или делитесь ими: печатайте как плакаты и наклейки, публикуйте в соцсетях или показывайте на встречах и мероприятиях." },
    uk: { tkGuideLabel: "ЄНФ // ВІЗУАЛЬНИЙ ПОСІБНИК", tkTitle: "Візуальна айдентика ЄНФ", tkIntro: "Практичний посібник із кольорів, шрифтів, символів і стилів плакатів, що об’єднують матеріали ЄНФ.", tkTagline: "<strong>Чітко, послідовно, впізнавано.</strong> Використовуйте ці елементи в плакатах, графіці та презентаціях.", tkSlide1: "Спільна візуальна мова", tkSlide2: "Палітра кольорів ЄНФ", tkSlide3: "Шрифти ЄНФ", tkSlide4: "Символи ЄНФ", tkSlide5: "Приклади плакатів", tkDownload: "Завантажити", tkPrev: "← НАЗАД", tkNext: "ДАЛІ →", tkSlide2Desc: "Використовуйте точні HEX-коди, щоб кольори були однаковими в редакторах і на екранах.", tkSlide3Desc: "Ці три шрифти вже використовуються на сайті. Зберігайте їхні ролі в нових матеріалах.", tkSlide4Desc: "Це офіційні прапори та символи ЄНФ. Завантажте потрібну версію й використовуйте оригінал, щоб зберегти колір і форму.", tkSlide5Desc: "Ці плакати показують, як поєднувати кольори, символи й повідомлення ЄНФ у різних форматах. Використовуйте їх для натхнення або поширюйте: друкуйте як плакати чи наліпки, публікуйте в соцмережах або показуйте на зустрічах і подіях." },
    bg: { tkGuideLabel: "ЕНФ // ВИЗУАЛЕН НАРЪЧНИК", tkTitle: "Визуална идентичност на ЕНФ", tkIntro: "Практическо ръководство за цветовете, шрифтовете, символите и стиловете на плакатите, които обединяват материалите на ЕНФ.", tkTagline: "<strong>Ясно, последователно, разпознаваемо.</strong> Използвайте тези елементи в плакати, графики и презентации.", tkSlide1: "Общ визуален език", tkSlide2: "Цветова палитра на ЕНФ", tkSlide3: "Шрифтове на ЕНФ", tkSlide4: "Символи на ЕНФ", tkSlide5: "Примери за плакати", tkDownload: "Изтегляне", tkPrev: "← НАЗАД", tkNext: "НАПРЕД →", tkSlide2Desc: "Използвайте точните HEX стойности за еднакви цветове в дизайнерските програми и на екраните.", tkSlide3Desc: "Тези три шрифта вече се използват в сайта. Запазвайте ролите им в новите материали.", tkSlide4Desc: "Това са официалните знамена и символи на ЕНФ. Изтеглете подходящата версия и използвайте оригиналния файл.", tkSlide5Desc: "Тези плакати показват как цветовете, символите и посланията на ЕНФ работят заедно в различни формати. Използвайте ги за вдъхновение или ги споделяйте: отпечатвайте ги, публикувайте ги в социалните мрежи или ги показвайте на срещи и събития." },
    pt: { tkGuideLabel: "FPE // GUIA VISUAL", tkTitle: "Identidade visual da FPE", tkIntro: "Um guia prático sobre cores, tipos de letra, símbolos e estilos de cartaz que dão unidade aos materiais da FPE.", tkTagline: "<strong>Clara, coerente e reconhecível.</strong> Usa estes elementos em cartazes, gráficos e apresentações.", tkSlide1: "Uma linguagem visual comum", tkSlide2: "Paleta de cores da FPE", tkSlide3: "Tipografia da FPE", tkSlide4: "Símbolos da FPE", tkSlide5: "Exemplos de cartazes", tkDownload: "Transferir", tkPrev: "← ANTERIOR", tkNext: "SEGUINTE →", tkSlide2Desc: "Usa os valores hexadecimais exatos para manter as cores consistentes entre ferramentas e ecrãs.", tkSlide3Desc: "Estes três tipos de letra já são usados no site. Mantém as suas funções nos novos materiais.", tkSlide4Desc: "Estas são as bandeiras e marcas oficiais da FPE. Transfere a versão adequada e usa o ficheiro original para preservar a cor e a forma.", tkSlide5Desc: "Estes cartazes mostram como as cores, os símbolos e as mensagens da FPE podem funcionar em vários formatos. Usa-os como inspiração ou partilha-os: imprime-os, publica-os nas redes sociais ou mostra-os em reuniões e eventos." },
    sc: { tkGuideLabel: "EPF // VIZUALNI VODIČ", tkTitle: "Vizualni identitet EPF-a", tkIntro: "Praktični vodič kroz boje, tipografiju, simbole i stilove plakata koji povezuju materijale EPF-a.", tkTagline: "<strong>Jasno, dosljedno, prepoznatljivo.</strong> Koristite ove elemente za plakate, grafike i prezentacije.", tkSlide1: "Zajednički vizualni jezik", tkSlide2: "Paleta boja EPF-a", tkSlide3: "Tipografija EPF-a", tkSlide4: "Simboli EPF-a", tkSlide5: "Primjeri plakata", tkDownload: "Preuzmi", tkPrev: "← PRETHODNO", tkNext: "SLJEDEĆE →", tkSlide2Desc: "Koristite tačne HEX vrijednosti kako bi boje bile ujednačene u dizajnerskim alatima i na ekranima.", tkSlide3Desc: "Ova tri fonta već se koriste na stranici. Zadržite njihove uloge u novim materijalima.", tkSlide4Desc: "Ovo su službene zastave i simboli EPF-a. Preuzmite odgovarajuću verziju i koristite izvornu datoteku kako bi boje i oblik ostali jasni.", tkSlide5Desc: "Ovi plakati pokazuju kako boje, simboli i poruke EPF-a mogu djelovati zajedno u različitim formatima. Iskoristite ih kao inspiraciju ili ih podijelite: ispišite ih, objavite na društvenim mrežama ili pokažite na sastancima i događajima." },
    nl: { tkGuideLabel: "EVF // VISUELE GIDS", tkTitle: "Visuele identiteit van het EVF", tkIntro: "Een praktische gids voor kleuren, lettertypes, symbolen en posterstijlen die EVF-materiaal herkenbaar samenbrengen.", tkTagline: "<strong>Duidelijk, samenhangend, herkenbaar.</strong> Gebruik deze bouwstenen voor posters, afbeeldingen en presentaties.", tkSlide1: "Een gedeelde beeldtaal", tkSlide2: "Kleurenpalet van het EVF", tkSlide3: "Typografie van het EVF", tkSlide4: "Symbolen van het EVF", tkSlide5: "Voorbeelden van posters", tkDownload: "Downloaden", tkPrev: "← VORIGE", tkNext: "VOLGENDE →", tkSlide2Desc: "Gebruik de exacte hexwaarden om kleuren consistent te houden tussen ontwerpprogramma’s en schermen.", tkSlide3Desc: "Deze drie lettertypes worden al op de website gebruikt. Behoud hun rol in nieuw materiaal.", tkSlide4Desc: "Dit zijn de officiële vlaggen en symbolen van het EVF. Download de juiste versie en gebruik het originele bestand om kleur en vorm scherp te houden.", tkSlide5Desc: "Deze posters laten zien hoe EVF-kleuren, symbolen en boodschappen samenkomen in verschillende formaten. Gebruik ze als inspiratie of deel ze: druk ze af, plaats ze op sociale media of toon ze tijdens bijeenkomsten en evenementen." },
    ee: { tkGuideLabel: "EPF // VISUAALJUHEND", tkTitle: "EPF-i visuaalne identiteet", tkIntro: "Praktiline juhend värvide, kirjatüüpide, sümbolite ja plakatistiilide kohta, mis seovad EPF-i materjalid ühtseks tervikuks.", tkTagline: "<strong>Selge, sidus ja äratuntav EPF.</strong> Kasuta neid elemente plakatitel, graafikas ja esitlustes.", tkSlide1: "Ühine visuaalne keel", tkSlide2: "EPF-i värvipalett", tkSlide3: "EPF-i kirjatüübid", tkSlide4: "EPF-i sümbolid", tkSlide5: "Plakatite näited", tkDownload: "Laadi alla", tkPrev: "← EELMINE", tkNext: "JÄRGMINE →", tkSlide2Desc: "Kasuta täpseid HEX-väärtusi, et värvid oleksid kujundustarkvaras ja ekraanidel ühtsed.", tkSlide3Desc: "Neid kolme kirjatüüpi kasutatakse juba veebilehel. Hoia nende rollid uues materjalis samad.", tkSlide4Desc: "Need on EPF-i ametlikud lipud ja märgid. Laadi alla sobiv versioon ning kasuta originaalfaili, et säilitada värv ja kuju.", tkSlide5Desc: "Need plakatid näitavad, kuidas EPF-i värvid, sümbolid ja sõnumid eri formaatides koos toimivad. Kasuta neid inspiratsioonina või jaga edasi: prindi plakatiteks või kleepsudeks, postita sotsiaalmeedias või näita kohtumistel ja üritustel." }
};

function applyOrganizationTokens(value, lang) {
    const activeLang = getLanguage(lang);
    const labels = EPF_ORGANIZATION_LABELS[activeLang] || EPF_ORGANIZATION_LABELS.en;
    let transformed = String(value);

    Object.values(EPF_ORGANIZATION_LABELS).forEach(({ fullName, shortName }) => {
        transformed = transformed.split(fullName).join(labels.fullName);
        transformed = transformed.split(shortName).join(labels.shortName);
    });

    return transformed
        .replace(/\{\{orgFullName\}\}/g, labels.fullName)
        .replace(/\{\{orgShortName\}\}/g, labels.shortName)
        .replace(/\{\{orgLogoAlt\}\}/g, labels.logoAlt);
}

function applyOrganizationTokensToTextNodes(root, lang) {
    const walker = root.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || parent.matches("script,style,template")) {
                    return NodeFilter.FILTER_REJECT;
                }

                if (parent.closest("[data-i18n],[data-i18n-html],[data-i18n-attr],[data-i18n-repeat]")) {
                    return NodeFilter.FILTER_REJECT;
                }

                return node.nodeValue && node.nodeValue.includes("{{")
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_SKIP;
            }
        }
    );

    let currentNode;
    while ((currentNode = walker.nextNode())) {
        const originalValue = currentNode.nodeValue || "";
        const updatedValue = applyOrganizationTokens(originalValue, lang);
        if (updatedValue !== originalValue) {
            currentNode.nodeValue = updatedValue;
        }
    }
}

const EPF_TRANSLATIONS = {
    // Big dictionary of words. If a key is missing, English politely kicks the door in.
    en: {
        languageName: "EN",
        translationCredits: "Tovitas",
        orgFullName: "European Popular Front",
        orgShortName: "EPF",
        orgLogoAlt: "EPF Logo",
        siteTitle: "EPF | European Popular Front | Official Portal",
        home: "HOME",
        heroTitle: 'UNITED WE <span>BARGAIN.</span> DIVIDED WE <span>BEG.</span>',
        heroSupportOne: "Working together gives people across Europe a stronger voice.",
        heroSupportTwo: "Organise across borders. Build a fairer, more united Europe.",
        joinTitle: "JOIN THE FRONT",
        joinCopy: "Organise internationally. Reject nationalism. Build European power.",
        signUp: "SIGN UP",
        aboutTitle: "ABOUT US",
        aboutCopy: "The EPF brings together Left-wing Europeans with the shared vision of a more United Europe.",
        valuesTitle: "OUR VALUES",
        valueAntiFascism: "Anti-Fascism",
        valueEconomicDemocracy: "Economic Democracy",
        valueAntiAuthoritarianism: "Anti-Authoritarianism",
        valueWorkersRights: "Workers' Rights",
        valueEnvironmentalJustice: "Environmental Justice",
        valueFederalism: "Pan-European Federalism",
        valueSolidarity: "Transnational Solidarity",
        valueFairEconomics: "Fair Economics",
        coalitionTitle: "A DIVERSE COALITION",
        manyOthers: "...and many others!",
        policyTitle: "POLICY AND PAPERS",
        charter: "01. THE EUROPEAN POPULAR FRONT CHARTER (English)",
        policyPaper: "02. THE EUROPEAN POPULAR FRONT POLICY PAPER (English)",
        socials: "SOCIALS",
        manifestoCode: "MANIFESTO // 01",
        aboutFrontTitle: "ABOUT THE FRONT",
        aboutP1: "The <strong>European Popular Front (EPF)</strong> is a broad, big-tent pan-European community bringing together democratic socialists, social democrats, eco-socialists, trade unionists, and progressive left currents. We provide a collaborative space to engage across different traditions, cultivate a genuine pan-European political culture, and work toward a common European future.",
        aboutP2: "At its core, the EPF deepens European integration through a leftist, Eurofederalist lens. Continental challenges like economic inequality, climate change, and authoritarianism cannot be solved through nationalism—they require trans-border cooperation, democratic institutions at scale, and solidarity over austerity.",
        aboutP3: "The EPF is explicitly anti-fascist, anti-racist, anti-authoritarian, and anti-exclusionary. We reject chauvinism, xenophobia, and reactionary politics in all forms. As both a think-tank and strategic forum, we value intellectual openness and rigorous analysis to build realistic alternatives.",
        aboutP4: "<strong>The EPF is ultimately a project of hope: that another Europe is possible, and building it requires a left capable of thinking and acting beyond borders.</strong>",
        returnTerminal: "← RETURN TO TERMINAL",
        welcomeTitle: "WHO IS WELCOME",
        welcomeP1: 'The EPF rejects sectarian gatekeeping. Capital and reaction operate smoothly across borders; our resistance must be equally vast and interconnected. We provide a strategic harbour for <span class="highlight-box">all left-wingers</span> who share a core baseline of <span class="highlight-box">Pan-Europeanism.</span>',
        welcomeP2: '<strong>We do not demand uniformity of thought; we demand comradely, constructive engagement in good faith. Our differences are the critical source materials for a resilient, creative political imagination. If your vision for Europe is defined by human dignity, social justice, and the relentless defence of collective freedom against corporate greed; <span class="highlight-box">you belong here.</span></strong>',
        tendencyTradeUnionists: "Trade Unionists",
        tendencyFederalists: "Pan-European Federalists",
        tendencyGreenLeftists: "Green Leftists",
        tendencyConfederalists: "Democratic Confederalists",
        tendencyMunicipalists: "Municipalists",
        tendencyAntiFascists: "Anti-Fascists",
        tendencyEcoSocialists: "Eco-Socialists",
        tendencyLabourOrganizers: "Labour Organizers",
        tendencySocialDemocrats: "Social Democrats",
        tendencySocialists: "Socialists",
        tendencyNonsectarian: "Nonsectarian Leftists",
        tendencyMarketSocialists: "Market Socialists",
        tendencyEurocommunists: "Eurocommunists",
        tendencyAnarchoCommunists: "Anarcho-Communists",
        tendencyNeoMarxists: "Neo-Marxists",
        tendencyLeftCentrists: "Left-Centrists",
        tendencyProgressives: "Progressives",
        tendencyReformists: "Reformist Socialists",
        tendencyDemocraticSocialists: "Democratic Socialists",
        tendencyPopulists: "Left-Wing Populists",
        tendencySyndicalists: "Labour Syndicalists",
        tendencyAccelerationists: "Left Accelerationists",
        errorTitle: 'PAGE <span>LOST</span>',
        errorCopy: "The page you were looking for is not in the portal. Return to the front page and continue from there! :D",
        returnHome: "RETURN HOME",
        joinDiscord: "JOIN DISCORD"
    },
    de: {
        languageName: "DE",
        translationCredits: "Tovitas",
        orgFullName: "Europäische Volksfront",
        orgShortName: "EVF",
        orgLogoAlt: "EVF Logo",
        siteTitle: "EVF | Europäische Volksfront | Offizielles Portal",
        home: "STARTSEITE",
        heroTitle: 'VEREINT <span>HANDELN WIR.</span> GETRENNT <span>BETTELN WIR.</span>',
        heroSupportOne: "Gemeinsam geben wir den Menschen in Europa eine stärkere Stimme.",
        heroSupportTwo: "Organisiert euch über Grenzen hinweg. Gestaltet ein gerechteres, geeinteres Europa.",
        joinTitle: "SCHLIESSE DICH DER FRONT AN",
        joinCopy: "Organisiere dich international. Verwirf den Nationalismus. Baue europäische Macht auf.",
        signUp: "TRITT BEI",
        aboutTitle: "ÜBER UNS",
        aboutCopy: "Die EVF vereint linke Europäerinnen und Europäer mit der gemeinsamen Vision eines geeinteren Europas.",
        valuesTitle: "UNSERE WERTE",
        valueAntiFascism: "Antifaschismus",
        valueEconomicDemocracy: "Wirtschaftsdemokratie",
        valueAntiAuthoritarianism: "Antiautoritarismus",
        valueWorkersRights: "Arbeitnehmerrechte",
        valueEnvironmentalJustice: "Ökologische Gerechtigkeit",
        valueFederalism: "Eurpäischer Internationalismus",
        valueSolidarity: "Transnationale Solidarität",
        valueFairEconomics: "Gerechte Wirtschaft",
        coalitionTitle: "EINE VIELFÄLTIGE KOALITION",
        manyOthers: "...und viele mehr!",
        policyTitle: "POLITIK & PAPIERE",
        charter: "01. CHARTA DER EVF (auf Englisch)",
        policyPaper: "02. GRUNDSATZPROGRAMM DER EVF (auf Englisch)",
        socials: "SOCIAL MEDIA",
        manifestoCode: "MANIFEST // 01",
        aboutFrontTitle: "ÜBER DIE FRONT",
        aboutP1: "Die <strong>Europäische Volksfront (EPF)</strong> ist eine breite, offene paneuropäische Gemeinschaft, die demokratische Sozialistinnen, Sozialdemokraten, Ökosozialistinnen, Gewerkschafter und progressive linke Strömungen zusammenbringt. Wir bieten einen Raum zur Zusammenarbeit, um über Traditionen hinweg zu wirken, eine echte paneuropäische politische Kultur zu kultivieren und gemeinsam an einer europäischen Zukunft zu arbeiten.",
        aboutP2: "Im Kern vertieft die EPF die europäische Integration durch eine linke, euroföderalistische Brille. Kontinentale Herausforderungen wie wirtschaftliche Ungleichheit, Klimawandel und Autoritarismus lassen sich nicht durch Nationalismus lösen, sie erfordern grenzüberschreitende Zusammenarbeit, demokratische Institutionen im großen Maßstab und Solidarität statt Sparpolitik.",
        aboutP3: "Die EPF ist explizit antifaschistisch, antirassistisch, antiautoritär und gegen jede Form von Ausgrenzung. Wir lehnen Chauvinismus, Fremdenfeindlichkeit und reaktionäre Politik in jeglicher Form ab. Als Think-Tank und strategisches Forum setzen wir auf intellektuelle Offenheit und fundierte Analysen, um realistische Alternativen zu schaffen.",
        aboutP4: "<strong>Die EPF ist letztlich ein Projekt der Hoffnung: Die Überzeugung, dass ein anderes Europa möglich ist und dass sein Aufbau eine Linke erfordert, die fähig ist, über Grenzen hinweg zu denken und zu handeln.</strong>",
        returnTerminal: "← ZURÜCK ZUM TERMINAL",
        welcomeTitle: "WER IST WILLKOMMEN?",
        welcomeP1: 'Die EPF lehnt sektiererische Ausgrenzung ab. Kapital und Reaktion agieren nahtlos über Grenzen hinweg; unser Widerstand muss ebenso umfassend und vernetzt sein. Wir bieten einen strategischen Hafen für <span class="highlight-box">alle Linken</span>, die die Grundidee des <span class="highlight-box">Paneuropäismus</span> teilen.',
        welcomeP2: '<strong>Wir fordern keine Gleichschaltung des Denkens; wir fordern kameradschaftliches, konstruktives Engagement nach bestem Wissen und Gewissen. Unsere Unterschiede sind der entscheidende Rohstoff für eine widerstandsfähige, kreative politische Vorstellungskraft. Wenn deine Vision für Europa von menschlicher Würde, sozialer Gerechtigkeit und der unnachgiebigen Verteidigung kollektiver Freiheit gegen die Gier von Konzernen geprägt ist; <span class="highlight-box">dann gehörst du hierher.</span></strong>',
        tendencyTradeUnionists: "Gewerkschafter",
        tendencyFederalists: "Paneuropäische Föderalisten",
        tendencyGreenLeftists: "Grüne Linke",
        tendencyConfederalists: "Demokratische Konföderalisten",
        tendencyMunicipalists: "Kommunalpolitiker",
        tendencyAntiFascists: "Antifaschisten",
        tendencyEcoSocialists: "Ökosozialisten",
        tendencyLabourOrganizers: "Arbeitsorganisatoren",
        tendencySocialDemocrats: "Sozialdemokraten",
        tendencySocialists: "Sozialisten",
        tendencyNonsectarian: "Nicht-sektiererische Linke",
        tendencyMarketSocialists: "Marktsozialisten",
        tendencyEurocommunists: "Eurokommunisten",
        tendencyAnarchoCommunists: "Anarchokommunisten",
        tendencyNeoMarxists: "Neomarxisten",
        tendencyLeftCentrists: "Linke Zentristen",
        tendencyProgressives: "Progressive",
        tendencyReformists: "Reformsozialisten",
        tendencyDemocraticSocialists: "Demokratische Sozialisten",
        tendencyPopulists: "Linkspopulisten",
        tendencySyndicalists: "Syndikalisten",
        tendencyAccelerationists: "Linke Akzelerationisten",
        errorTitle: 'SEITE <span>NICHT GEFUNDEN</span>',
        errorCopy: "Die gesuchte Seite existiert nicht auf diesem Portal. Geh zurück zur Startseite und mache von dort aus weiter! :D",
        returnHome: "ZURÜCK ZUR STARTSEITE",
        joinDiscord: "DISCORD BEITRETEN"
    },
    es: {
        languageName: "ES",
        translationCredits: "sky_is_here",
        orgFullName: "Frente Popular Europeo",
        orgShortName: "FPE",
        orgLogoAlt: "FPE Logo",
        siteTitle: "FRENTE POPULAR EUROPEO | Portal Oficial",
        home: "INICIO",
        heroTitle: 'UNIDOS <span>NEGOCIAMOS.</span>  DIVIDIDOS <span> SUPLICAMOS.</span>',
        heroSupportOne: "Juntas, las personas de Europa tienen una voz más fuerte.",
        heroSupportTwo: "Organícense más allá de las fronteras. Construyan una Europa más justa y unida.",
        joinTitle: "¡ÚNETE AL FRENTE!",
        joinCopy: "Organízate internacionalmente. Reniega del nacionalismo. Construye el poder europeo.",
        signUp: "ÚNETE",
        aboutTitle: "SOBRE NOSOTROS",
        aboutCopy: "El FPE es una organización de izquierdas de frente amplio que busca aunar europeos de izquierdas que compartan una visión por una Europa más unida.",
        valuesTitle: "NUESTROS VALORES",
        valueAntiFascism: "Antifascismo",
        valueEconomicDemocracy: "Democracia económica",
        valueAntiAuthoritarianism: "Antiautoritarismo",
        valueWorkersRights: "Derechos Para los Trabajadores",
        valueEnvironmentalJustice: "Justicia Medioambiental",
        valueFederalism: "Federalismo Paneuropeo",
        valueSolidarity: "Solidaridad Transnacional",
        valueFairEconomics: "Economía Justa",
        coalitionTitle: "UNA COALICIÓN DIVERSA",
        manyOthers: "...y mucho más!",
        policyTitle: "Documentos y políticas",
        charter: "01. ESTATUTOS DEL FPE (en inglés)",
        policyPaper: "02. DOCUMENTO POLÍTICO DEL FPE (en inglés)",
        socials: "SOCIALES",
        manifestoCode: "MANIFIESTO // 01",
        aboutFrontTitle: "SOBRE EL FRENTE",
        aboutP1: "El <strong>Frente Popular Europeo (FPE en castellano, EPF en inglés.)</strong> es una organización de izquierdas de frente amplio, paneuropea, que agrupa socialistas democráticos, social demócratas, ecosocialistas, sindicalistas y corrientes progresistas de izquierdas. Proveemos un espacio de colaboración para que las distintas posiciones puedan interactuar, cultivar una verdadera cultura política paneuropea y trabajar en pos de un futuro europeo común.",
        aboutP2: "En esencia, el FPE existe para expandir la integración europea a través de una vía de izquierdas y eurofederalista. Creemos que los retos continentales que enfrentamos, tales como la desigualdad económica, el cambio climático y el creciente autoritarismo, no pueden ser enfrentados a través del nacionalismo. Estas requieren cooperación transnacional, instituciones democráticas capaces y una visión basada en la solidaridad antes que la austeridad.",
        aboutP3: "El FPE es explÍcitamente antifascista, antirracista, antiautoritario, y contrario a la exclusión social. Rechazamos el chovinismo, la xenofobia, y las políticas reaccionarias en todas sus formas. Operando tanto como think-tank como en forma de foro para la cooperación. Valoramos la apertura intelectual y  el análisis riguroso para construir una alternativa realista capaz de influenciar y mejorar el continente.",
        aboutP4: "<strong>El Frente Popular Europeo es, en definitiva, un proyecto de esperanza: la creencia de que otra Europa es posible, y que construirla requiere de una izquierda capaz de pensar y actuar más allá de las fronteras.</strong>",
        returnTerminal: "← VOLVER A LA TERMINAL",
        welcomeTitle: "¿QUIÉN ES BIENVENIDO?",
        welcomeP1: 'El Frente Popular Europeo rechaza el exclusionismo sectario. El capital y la reacción operan libremente y con impunidad a través de las fronteras, sin comprobar la pureza ideológica. Nuestra resistencia debe ser igual de vasta e interconectada. Proveemos un puerto seguro, para <span class="highlight-box">todas las personas de izquierdas</span> que compartan una línea básica común en el <span class="highlight-box">paneuropeísmo.</span>',
        welcomeP2: '<strong>No pedimos uniformidad de pensamiento: pedimos camaradería, trabajo constructivo y de buena fe. Nuestras diferencias son la materia fuente para conseguir una imaginación política resiliente y creativa. Si tu visión para Europa se basa en la dignidad humana, la justicia social, y la defensa continua de nuestra libertad colectiva frente a la codicia de las grandes empresas: <span class="highlight-box">este es tu sitio.</span></strong>',
        tendencyTradeUnionists: "Sindicalistas",
        tendencyFederalists: "Federalistas Europeos",
        tendencyGreenLeftists: "Izquierda verde",
        tendencyConfederalists: "Confederalistas",
        tendencyMunicipalists: "Municipalistas",
        tendencyAntiFascists: "Antifascistas",
        tendencyEcoSocialists: "Ecosocialistas",
        tendencyLabourOrganizers: "Militantes sindicales",
        tendencySocialDemocrats: "Socialdemócratas",
        tendencySocialists: "Socialistas",
        tendencyNonsectarian: "Izquierdistas no sectarios",
        tendencyMarketSocialists: "Socialistas de mercado",
        tendencyEurocommunists: "Eurocomunistas",
        tendencyAnarchoCommunists: "Anarcocomunistas",
        tendencyNeoMarxists: "Neo-Marxistas",
        tendencyLeftCentrists: "Centristas de izquierdas",
        tendencyProgressives: "Progresistas",
        tendencyReformists: "Socialistas reformistas",
        tendencyDemocraticSocialists: "Socialistas democráticos",
        tendencyPopulists: "Populistas de izquierdas",
        tendencySyndicalists: "Sindicalistas de izquierdas",
        tendencyAccelerationists: "Aceleracionistas",
        errorTitle: 'PÁGINA <span>NO ENCONTRADA</span>',
        errorCopy: "La página que estabas buscando no se encuentra aquí. ¡Vuelve a la página principal y continúa desde ahí! :D",
        returnHome: "VOLVER AL INICIO",
        joinDiscord: "UNIRSE AL DISCORD"
    },
    fr: {
        languageName: "FR",
        translationCredits: "zangdfil3712",
        orgFullName: "Front Populaire Européen",
        orgShortName: "FPE",
        orgLogoAlt: "FPE Logo",
        siteTitle: "FPE | Front Populaire Européen | Portail Officiel",
        home: "Accueil",
        heroTitle: 'ENSEMBLE ON <span>TIENS TÊTE.</span> DIVISE ON <span>SUPPLIE.</span>',
        heroSupportOne: "Ensemble, les peuples d’Europe font entendre une voix plus forte.",
        heroSupportTwo: "Organisons-nous au-delà des frontières pour une Europe plus juste et plus unie.",
        joinTitle: "REJOINS LE COMBAT",
        joinCopy: "Organiser l'internationalisme. Rejeter le nationalisme. Batir une puissance Européenne.",
        signUp: "S'ENREGISTRER",
        aboutTitle: "A PROPOS",
        aboutCopy: "La FPE regroupe de nombreux européens de gauche avec une vision commune pour une Europe plus unie.",
        valuesTitle: "NOS VALEURS",
        valueAntiFascism: "Anti fascisme",
        valueEconomicDemocracy: "Démocratie au travail",
        valueAntiAuthoritarianism: "Anti autoritarisme",
        valueWorkersRights: "Droits des travailleurs",
        valueEnvironmentalJustice: "Justice Environnementale",
        valueFederalism: "Pan-European Federalism",
        valueSolidarity: "Solidarité Internationale",
        valueFairEconomics: "Une économie plus juste",
        coalitionTitle: "UNE COALITION DIVERSE",
        manyOthers: "...ET BIEN D'AUTRES!",
        policyTitle: "CHARTES ET BLOG",
        charter: "01. LA CHARTE DU FPE (en anglais)",
        policyPaper: "02. LE BLOG DU FPE (en anglais)",
        socials: "Réseaux Sociaux",
        manifestoCode: "MANIFESTO // 01",
        aboutFrontTitle: "A PROPOS DE NOUS",
        aboutP1: "Le <strong>Front Populaire Européen</strong> est une communauté paneuropéenne rassemblant socialistes démocratiques, éco-socialistes, syndicaliste, et autres militants de gauche au sein d'un grand espace de discussion et d'actions. Nous fournissons un espace collaboratif ou chacun peut cultiver une culture politique pan-européen authentique et véritable afin de travailler vers une future européen partagé et à gauche!",
        aboutP2: "L'objectif principal de la FPE est de renforcer l'intégration européenne par une vision eurofédéraliste de gauche. Les défis continentaux comme l'inégalité économique, le changement climatique et l'autoritarisme ne peuvent pas être résolus au niveau national—ils exigent coopération internationaliste, institutions démocratiques capables d'agir, et solidarité plutôt qu'austérité.",
        aboutP3: "Le Front Populaire Européen est un mouvement anti-fasciste, anti-raciste, anti-autoritaire, et anti-bigoterie. Nous rejetons le chauvinisme, la xénophobie, et les politiques réactionnaires sous toutes leurs formes. En agissant comme forum stratégique et groupe de réflexion, nous mettons en valeur l'ouverture intellectuelle et l'analyse rigoureuse pour construire des alternatives réalistes capables de définir une meilleure vision pour l'Europe.",
        aboutP4: "<strong>La FPE est avant tout un projet d'espoir: qu'une autre Europe est possible, et qu'une gauche capable de penser et agir par delà les frontières est essentielle pour la construire.</strong>",
        returnTerminal: "← RETOUR AU TERMINAL",
        welcomeTitle: "QUI EST BIENVENU",
        welcomeP1: "La FPE rejette tout sectarisme idéologique. Le capital et les forces réactionnaires opèrent internationalement; notre action doit être aussi vaste et interconnectée. Nous fournissons un point d'ancrage stratégique pour <span class=\"highlight-box\">toutes personnes de gauche</span> qui partagent la valeur commune de <span class=\"highlight-box\">pan-européanisme.</span>",
        welcomeP2: "<strong>Nous ne voulons pas d'uniformité de pensée; nous voulons de la camaraderie et un engagement constructif et de bonne foi. Nos différences sont essentiel pour maintenir une imagination politique créative et durable. Si ta vision de l'Europe se défini par la dignité humaine, la justice sociale, et la défense de nos liberté communes face aux prédations corporatives; <span class=\"highlight-box\">tu es des nôtres.</span></strong>",
        tendencyTradeUnionists: "Syndiqués",
        tendencyFederalists: "Fédéralistes Pan-Européen",
        tendencyGreenLeftists: "Ecologistes",
        tendencyConfederalists: "Confédéralistes Démocratique",
        tendencyMunicipalists: "Communalistes",
        tendencyAntiFascists: "Antifascistes",
        tendencyEcoSocialists: "Eco-Socialistes",
        tendencyLabourOrganizers: "Délégués Syndicaux",
        tendencySocialDemocrats: "Social Démocrates",
        tendencySocialists: "Socialistes",
        tendencyNonsectarian: "De gauche sans étiquettes",
        tendencyMarketSocialists: "Socialistes",
        tendencyEurocommunists: "Eurocommunistes",
        tendencyAnarchoCommunists: "Anarcho-Communistes",
        tendencyNeoMarxists: "Neo-Marxistes",
        tendencyLeftCentrists: "De Centre-gauche",
        tendencyProgressives: "Progressistes",
        tendencyReformists: "Réformistes",
        tendencyDemocraticSocialists: "Socialistes Démocratique",
        tendencyPopulists: "Populistes de gauche",
        tendencySyndicalists: "Syndicalistes",
        tendencyAccelerationists: "Accelerationistes de gauche",
        errorTitle: 'PAGE <span>MANQUANTE</span>',
        errorCopy: "La page que tu cherche n'est pas disponible, retourne sur l'accueil et continue depuis la bas! :D",
        returnHome: "RETOUR A L'ACCUEIL",
        joinDiscord: "REJOINS LE DISCORD"
    },
    it: {
        languageName: "IT",
        translationCredits: "boh9889",
        orgFullName: "Fronte Popolare Europeo",
        orgShortName: "FPE",
        orgLogoAlt: "FPE Logo",
        siteTitle: "FPE | Fronte Popolare Europeo | Portale Ufficiale",
        home: "HOME",
        heroTitle: 'UNITI <span>TRATTIAMO.</span> DIVISI <span>ELEMOSINIAMO.</span>',
        heroSupportOne: "Insieme, le persone in Europa hanno una voce più forte.",
        heroSupportTwo: "Organizziamoci oltre i confini per un’Europa più giusta e unita.",
        joinTitle: "UNISCITI AL FRONTE",
        joinCopy: "Organizzati a livello internazionale. Rifiuta il nazionalismo. Costruisci potere europeo.",
        signUp: "ISCRIVITI",
        aboutTitle: "CHI SIAMO",
        aboutCopy: "La FPE è una grande coalizione che riunisce europei di sinistra con la visione condivisa di un'Europa più unita.",
        valuesTitle: "I NOSTRI VALORI",
        valueAntiFascism: "Antifascismo",
        valueEconomicDemocracy: "Democrazia Economica",
        valueAntiAuthoritarianism: "Antiautoritarismo",
        valueWorkersRights: "Diritti dei Lavoratori",
        valueEnvironmentalJustice: "Giustizia Ambientale",
        valueFederalism: "Federalismo Paneuropeo",
        valueSolidarity: "Solidarietà Transnazionale",
        valueFairEconomics: "Economia Equa",
        coalitionTitle: "UNA COALIZIONE DIVERSIFICATA",
        manyOthers: "...e molti altri!",
        policyTitle: "POLITICA E DOCUMENTI",
        charter: "01. LA CARTA DEL FPE (in inglese)",
        policyPaper: "02. IL DOCUMENTO POLITICO DEL FPE (in inglese)",
        socials: "SOCIAL",
        manifestoCode: "MANIFESTO // 01",
        aboutFrontTitle: "SUL FRONTE",
        aboutP1: "Il <strong>Fronte Popolare Europeo (FPE)</strong> è una comunità paneuropea ampia che riunisce socialisti democratici, socialdemocratici, ecosocialisti, sindacalisti e correnti progressiste di sinistra. Offriamo uno spazio collaborativo per confrontarsi tra tradizioni diverse, coltivare una vera cultura politica paneuropea e lavorare per un futuro europeo comune.",
        aboutP2: "Nel suo nucleo, la FPE approfondisce l'integrazione europea da una prospettiva di sinistra ed eurofederalista. Le sfide continentali come disuguaglianza economica, cambiamento climatico e autoritarismo non possono essere risolte con il nazionalismo—richiedono cooperazione transfrontaliera, istituzioni democratiche capaci di agire su scala, e solidarietà piuttosto che austerità.",
        aboutP3: "La FPE è esplicitamente antifascista, antirazzista, antiautoritaria e contraria all'esclusione. Rifiutiamo sciovinismo, xenofobia e politica reazionaria in ogni forma. Come think tank e forum strategico, valorizziamo apertura intellettuale e analisi rigorosa.",
        aboutP4: "<strong>La FPE è in definitiva un progetto di speranza: che un'altra Europa sia possibile e che costruirla richieda una sinistra capace di pensare e agire oltre i confini.</strong>",
        returnTerminal: "← TORNA AL TERMINALE",
        welcomeTitle: "CHI È BENVENUTO",
        welcomeP1: 'La FPE rifiuta il gatekeeping settario. Il capitale e la reazione operano senza problemi oltre i confini; la nostra resistenza deve essere altrettanto ampia e interconnessa. Offriamo un porto strategico per <span class="highlight-box">tutte le persone di sinistra</span> che condividono una base comune di <span class="highlight-box">paneuropeismo.</span>',
        welcomeP2: '<strong>Non chiediamo uniformita di pensiero; chiediamo un impegno solidale, costruttivo e in buona fede. Le nostre differenze sono materiali critici per un\'immaginazione politica resiliente e creativa. Se la tua visione dell\'Europa è definita da dignita umana, giustizia sociale e difesa incessante della liberta collettiva contro l\'avidita corporativa, <span class="highlight-box">qui hai un posto.</span></strong>',
        tendencyTradeUnionists: "Sindacalisti",
        tendencyFederalists: "Federalisti Paneuropei",
        tendencyGreenLeftists: "Sinistra Verde",
        tendencyConfederalists: "Confederalisti Democratici",
        tendencyMunicipalists: "Municipalisti",
        tendencyAntiFascists: "Antifascisti",
        tendencyEcoSocialists: "Ecosocialisti",
        tendencyLabourOrganizers: "Organizzatori del Lavoro",
        tendencySocialDemocrats: "Socialdemocratici",
        tendencySocialists: "Socialisti",
        tendencyNonsectarian: "Sinistra Non Settaria",
        tendencyMarketSocialists: "Socialisti di Mercato",
        tendencyEurocommunists: "Eurocomunisti",
        tendencyAnarchoCommunists: "Anarco-comunisti",
        tendencyNeoMarxists: "Neomarxisti",
        tendencyLeftCentrists: "Centro-sinistra",
        tendencyProgressives: "Progressisti",
        tendencyReformists: "Socialisti Riformisti",
        tendencyDemocraticSocialists: "Socialisti Democratici",
        tendencyPopulists: "Populisti di Sinistra",
        tendencySyndicalists: "Sindacalisti del Lavoro",
        tendencyAccelerationists: "Accelerazionisti di Sinistra",
        errorTitle: 'PAGINA <span>PERSA</span>',
        errorCopy: "La pagina che cercavi non è nel portale. Torna alla home e continua da li! :D",
        returnHome: "TORNA HOME",
        joinDiscord: "UNISCITI AL DISCORD"
    },
    pl: {
        languageName: "PL",
        translationCredits: "oleksandr_antonenko, matrix223 ",
        orgFullName: "Europejski Front Ludowy",
        orgShortName: "EFL",
        orgLogoAlt: "EFL Logo",
        siteTitle: "EFL | Europejski Front Ludowy | Oficjalny Portal",
        home: "START",
        heroTitle: 'ZJEDNOCZENI <span>NEGOCJUJEMY.</span> PODZIELENI <span>PROSIMY.</span>',
        heroSupportOne: "Wspólne działanie daje mieszkańcom Europy silniejszy głos.",
        heroSupportTwo: "Organizujmy się ponad granicami i budujmy sprawiedliwszą, bardziej zjednoczoną Europę.",
        joinTitle: "DOLACZ DO FRONTU",
        joinCopy: "Organizuj się międzynarodowo. Odrzuć nacjonalizm. Buduj europejską siłę.",
        signUp: "ZAPISZ SIĘ",
        aboutTitle: "O NAS",
        aboutCopy: "EFL jest szerokim frontem skupiającym lewicowych Europejczyków ze wspólną wizją bardziej zjednoczonej Europy.",
        valuesTitle: "NASZE WARTOSCI",
        valueAntiFascism: "Antyfaszyzm",
        valueEconomicDemocracy: "Demokracja Ekonomiczna",
        valueAntiAuthoritarianism: "Antyautorytaryzm",
        valueWorkersRights: "Prawa Pracownicze",
        valueEnvironmentalJustice: "Sprawiedliwosc Klimatyczna",
        valueFederalism: "Paneuropejski Federalizm",
        valueSolidarity: "Solidarnosc Transnarodowa",
        valueFairEconomics: "Uczciwa Gospodarka",
        coalitionTitle: "ROZNORODNA KOALICJA",
        manyOthers: "...i wielu innych!",
        policyTitle: "POLITYKA I DOKUMENTY",
        charter: "01. KARTA EFL (w języku angielskim)",
        policyPaper: "02. DOKUMENT POLITYCZNY EFL (w języku angielskim)",
        socials: "MEDIA",
        manifestoCode: "MANIFEST // 01",
        aboutFrontTitle: "O FRONCIE",
        aboutP1: "<strong>Europejski Front Ludowy (EFL)</strong> to szeroka paneuropejska wspólnota łącząca demokratycznych socjalistów, socjaldemokratów, ekosocjalistów, związkowców i progresywne nurty lewicy. Tworzymy przestrzeń współpracy ponad różnymi tradycjami, rozwijamy autentyczną paneuropejską kulturę polityczną i pracujemy na rzecz wspólnej europejskiej przyszłości.",
        aboutP2: "U podstaw Europejskiego Frontu Ludowego leży dążenie do pogłębiania integracji europejskiej z lewicowej, eurofederalistycznej perspektywy. Wierzymy, że wyzwań kontynentalnych, takich jak nierówności ekonomiczne, zmiana klimatu i narastający autorytaryzm, nie da się rozwiązać nacjonalizmem. Wymagają one współpracy ponad granicami, demokratycznych instytucji zdolnych działać w odpowiedniej skali oraz wizji opartej na solidarności, a nie austerity.",
        aboutP3: "EFL jest wyraźnie antyfaszystowski, antyrasistowski, antyautorytarny i przeciwny wykluczeniu. Odrzucamy szowinizm, ksenofobię i reakcyjną politykę w każdej formie. Jako think tank i forum strategiczne cenimy otwartość intelektu alną i rzetelną analizę.",
        aboutP4: "<strong>Europejski Front Ludowy jest ostatecznie projektem nadziei: wiara, że inna Europa jest możliwa i że jej budowa wymaga lewicy zdolnej myślić i działać ponad granicami.</strong>",
        returnTerminal: "← POWROT DO TERMINALA",
        welcomeTitle: "KTO JEST MILE WIDZIANY",
        welcomeP1: 'EFL odrzuca sekciarskie pilnowanie bram. Kapi tał i reakcja działają płynnie ponad granicami; nasz opór musi być równie rozległy i powiązany. Tworzymy strategiczną przystań dla <span class="highlight-box">wszystkich lewicowców</span>, którzy dzielą podstawową zasadę <span class="highlight-box">paneuropeizmu.</span>',
        welcomeP2: '<strong>Nie wymagamy jednolitosci myslenia; wymagamy kolezenskiego, konstruktywnego zaangazowania w dobrej wierze. Nasze roznice sa waznym materialem dla odpornej, kreatywnej wyobrazni politycznej. Jesli twoja wizja Europy opiera sie na godnosci czlowieka, sprawiedliwosci spolecznej i nieustannej obronie zbiorowej wolnosci przed korporacyjna chciwoscia, <span class="highlight-box">jestes u siebie.</span></strong>',
        tendencyTradeUnionists: "Zwiazkowcy",
        tendencyFederalists: "Paneuropejscy Federalisci",
        tendencyGreenLeftists: "Zielona Lewica",
        tendencyConfederalists: "Demokratyczni Konfederalisci",
        tendencyMunicipalists: "Municypalisci",
        tendencyAntiFascists: "Antyfaszysci",
        tendencyEcoSocialists: "Ekosocjalisci",
        tendencyLabourOrganizers: "Organizatorzy Pracy",
        tendencySocialDemocrats: "Socjaldemokraci",
        tendencySocialists: "Socjalisci",
        tendencyNonsectarian: "Lewica Niesekciarska",
        tendencyMarketSocialists: "Socjalisci Rynkowi",
        tendencyEurocommunists: "Eurokomunisci",
        tendencyAnarchoCommunists: "Anarchokomunisci",
        tendencyNeoMarxists: "Neomarksisci",
        tendencyLeftCentrists: "Lewicowi Centrysci",
        tendencyProgressives: "Progresywni",
        tendencyReformists: "Socjalisci Reformistyczni",
        tendencyDemocraticSocialists: "Demokratyczni Socjalisci",
        tendencyPopulists: "Lewicowi Populisci",
        tendencySyndicalists: "Syndykalisci Pracowniczy",
        tendencyAccelerationists: "Lewicowi Akceleracjonisci",
        errorTitle: 'STRONA <span>ZGUBIONA</span>',
        errorCopy: "Strony, ktorej szukasz, nie ma w portalu. Wroc na strone startowa i kontynuuj stamtad! :D",
        returnHome: "POWROT NA START",
        joinDiscord: "DOLACZ DO DISCORDA"
    },
    ru: {
        languageName: "RU",
        translationCredits: "jansanja_50329",
        orgFullName: "Европейский Народный Фронт",
        orgShortName: "ЕНФ",
        orgLogoAlt: "ЕНФ Logo",
        siteTitle: "ЕНФ | Европейский Народный Фронт | Официальный портал",
        home: "ГЛАВНАЯ",
        heroTitle: 'ЕДИНЫ МЫ <span>ДИКТУЕМ УСЛОВИЯ.</span> РАЗЪЕДИНЕНЫ МЫ <span>МОЛИМ О ПОЩАДЕ.</span>',
        heroSupportOne: "Действуя вместе, жители Европы звучат громче.",
        heroSupportTwo: "Объединяйтесь через границы ради более справедливой и единой Европы.",
        joinTitle: "ПРИСОЕДИНЯЙСЯ",
        joinCopy: "Организуйтесь международно. Отвергайте национализм. Стройте европейскую силу.",
        signUp: "ВСТУПИТЬ",
        aboutTitle: "О НАС",
        aboutCopy: "ЕНФ — это широкая коалиция левых европейцев, объединенных общей мечтой о более единой Европе.",
        valuesTitle: "НАШИ ЦЕННОСТИ",
        valueAntiFascism: "Антифашизм",
        valueEconomicDemocracy: "Экономическая демократия",
        valueAntiAuthoritarianism: "Антиавторитаризм",
        valueWorkersRights: "Права трудящихся",
        valueEnvironmentalJustice: "Экологическая справедливость",
        valueFederalism: "Всеевропейский федерализм",
        valueSolidarity: "Транснациональная солидарность",
        valueFairEconomics: "Справедливая экономика",
        coalitionTitle: "РАЗНООБРАЗНАЯ КОАЛИЦИЯ",
        manyOthers: "...и многие другие!",
        policyTitle: "ПОЛИТИКА И ДОКУМЕНТЫ",
        charter: "01. ХАРТИЯ ЕНФ (на английском)",
        policyPaper: "02. ПОЛИТИЧЕСКИЙ ДОКУМЕНТ ЕНФ (на английском)",
        socials: "СОЦСЕТИ",
        manifestoCode: "МАНИФЕСТ // 01",
        aboutFrontTitle: "О ФРОНТЕ",
        aboutP1: "<strong>Европейский Народный Фронт (ЕНФ)</strong> — это широкое всеевропейское сообщество, объединяющее демократических социалистов, социал-демократов, экосоциалистов, профсоюзных активистов и прогрессивные левые течения. Мы создаем пространство для сотрудничества между разными традициями, развиваем подлинно всеевропейскую политическую культуру и работаем ради общего европейского будущего.",
        aboutP2: "В своей основе ЕНФ стремится углублять европейскую интеграцию с левой, еврофедералистской точки зрения. Мы считаем, что континентальные вызовы, такие как экономическое неравенство, климатический кризис и рост авторитаризма, нельзя решить национализмом. Они требуют трансграничного сотрудничества, демократических институтов, способных действовать в масштабе, и видения, основанного на солидарности, а не на жесткой экономии.",
        aboutP3: "ЕНФ последовательно выступает против фашизма, расизма, авторитаризма и исключения. Мы отвергаем шовинизм, ксенофобию и реакционную политику во всех формах. Как аналитическое и стратегическое пространство, мы ценим интеллектуальную открытость и строгий анализ, чтобы создавать реалистичные альтернативы, способные менять континент.",
        aboutP4: "<strong>ЕНФ в конечном счете является проектом надежды: Что другая Европа возможна и что для ее построения нужна левая сила, способная мыслить и действовать за пределами границ.</strong>",
        returnTerminal: "← ВЕРНУТЬСЯ В ТЕРМИНАЛ",
        welcomeTitle: "КТО ЗДЕСЬ ПРИВЕТСТВУЕТСЯ",
        welcomeP1: 'Европейский Народный Фронт отвергает сектантский контроль входа. Капитал и реакция свободно действуют через границы, не проверяя идеологические нюансы; наше сопротивление должно быть таким же широким и взаимосвязанным. Мы предлагаем стратегическую гавань для <span class="highlight-box">всех левых</span>, разделяющих базовую приверженность <span class="highlight-box">всеевропеизму.</span>',
        welcomeP2: '<strong>Мы не требуем единообразия мысли; мы требуем товарищеского, конструктивного и добросовестного участия. Наши различия — это важный материал для устойчивого и творческого политического воображения. Если ваше видение Европы основано на человеческом достоинстве, социальной справедливости и решительной защите коллективной свободы от корпоративной жадности, <span class="highlight-box">вам здесь место.</span></strong>',
        tendencyTradeUnionists: "Профсоюзные активисты",
        tendencyFederalists: "Всеевропейские федералисты",
        tendencyGreenLeftists: "Зеленые левые",
        tendencyConfederalists: "Демократические конфедералисты",
        tendencyMunicipalists: "Муниципалисты",
        tendencyAntiFascists: "Антифашисты",
        tendencyEcoSocialists: "Экосоциалисты",
        tendencyLabourOrganizers: "Организаторы труда",
        tendencySocialDemocrats: "Социал-демократы",
        tendencySocialists: "Социалисты",
        tendencyNonsectarian: "Несектантские левые",
        tendencyMarketSocialists: "Рыночные социалисты",
        tendencyEurocommunists: "Еврокоммунисты",
        tendencyAnarchoCommunists: "Анархо-коммунисты",
        tendencyNeoMarxists: "Неомарксисты",
        tendencyLeftCentrists: "Левоцентристы",
        tendencyProgressives: "Прогрессисты",
        tendencyReformists: "Реформистские социалисты",
        tendencyDemocraticSocialists: "Демократические социалисты",
        tendencyPopulists: "Левые популисты",
        tendencySyndicalists: "Трудовые синдикалисты",
        tendencyAccelerationists: "Левые акселерационисты",
        errorTitle: 'СТРАНИЦА <span>ПОТЕРЯНА</span>',
        errorCopy: "Страница, которую вы искали, не находится в портале. Вернитесь на главную и продолжайте оттуда! :D",
        returnHome: "НА ГЛАВНУЮ",
        joinDiscord: "ВСТУПИТЬ В DISCORD"
    },
    uk: {
        languageName: "UK",
        translationCredits: "mushroomborscht",
        orgFullName: "Європейський Народний Фронт",
        orgShortName: "ЄНФ",
        orgLogoAlt: "ЄНФ Logo",
        siteTitle: "ЄНФ | Європейський Народний Фронт | Офіціальний Портал",
        home: "ГОЛОВНА",
        heroTitle: 'З\'ЄДНАНИМИ МИ <span>ДОМОВЛЯЄМОСЯ.</span> РОЗДІЛЕНИМИ — <span>БЛАГАЄМО.</span>',
        heroSupportOne: "Разом люди Європи мають сильніший голос.",
        heroSupportTwo: "Об’єднуймося через кордони заради справедливішої та згуртованішої Європи.",
        joinTitle: "ПРИЄДНУЙСЯ ДО ФРОНТУ",
        joinCopy: "Організовуйся міжнародно. Відмовся від націоналізму. Будуй європейську потужність.",
        signUp: "ЗАРЕЄСТРУВАТИСЯ",
        aboutTitle: "ПРО НАС",
        aboutCopy: "Європейський Народний Фронт — парасолькова партія, котра об'єднує європейську лівицю зі спільною мрією більш об'єднаної Європи.",
        valuesTitle: "НАШІ ЦІННОСТІ",
        valueAntiFascism: "Антифашизм",
        valueEconomicDemocracy: "Економічна Демократія",
        valueAntiAuthoritarianism: "Антиавторитаризм",
        valueWorkersRights: "Права Трудящих",
        valueEnvironmentalJustice: "Справедливість для довкілля",
        valueFederalism: "Пан-Європейський Федералізм",
        valueSolidarity: "Міжнародна Солідарність",
        valueFairEconomics: "Справедлива економіка",
        coalitionTitle: "РІЗНОМАНІТТЯ У КОАЛІЦІЇ",
        manyOthers: "...та багато чого іншого!",
        policyTitle: "ПОЛІТИКА ТА ДОКУМЕНТИ",
        charter: "01. ХАРТІЯ ЄНФ (англійською)",
        policyPaper: "02. ПОЛІТИЧНИЙ ДОКУМЕНТ ЄНФ (англійською)",
        socials: "СОЦІАЛЬНІ МЕДІЯ",
        manifestoCode: "МАНІФЕСТ // 01",
        aboutFrontTitle: "ПРО ФРОНТ",
        aboutP1: "<strong>Європейський Народний Фронт (ЄНФ, англ. EPF)</strong> – це широка, масштабна загальноєвропейська спільнота, що об’єднує демократичних соціалістів, соціал-демократів, екосоціалістів, профспілкових діячів та прогресивну лівицю. Ми надаємо простір для співпраці, щоб взаємодіяти з різними традиціями, культивувати справжню загальноєвропейську політичну культуру та працювати над спільним європейським майбутнім.",
        aboutP2: "ЄНФ існує для поглиблення європейської інтеграції крізь ліву, єврофедералістську призму. Ми вважаємо, що континентальні проблеми (такі як економічна нерівність, зміна клімату та зростання авторитаризму) не можуть бути вирішені за допомогою націоналізму. Ми вимагаємо міжнародної співпраці, демократичних інститутів, що діють масштабно, та бачення, заснованого на солідарності, а не на політиці жорсткої економії.",
        aboutP3: "ЄФП є відверто антифашистською, антирасистською, антиавторитарною та антиексклюзивною організацією. Ми відмовляємося та протиставляємо себе шовінізмові, ксенофобії та реакційній політиці в усіх її проявах. Працюючи одночасно як аналітичний центр і стратегічний форум, ми цінуємо інтелектуальну відкритість та ретельний аналіз для побудови реалістичних альтернатив, здатних змінити континент.",
        aboutP4: "<strong>Європейський народний фронт — це, зрештою, проект надії: віра в те, що інша Європа можлива, і що її побудова вимагає лівих сил, здатних мислити та діяти поза кордонами.</strong>",
        returnTerminal: "← ПОВЕРНУТИСЯ ДО ТЕРМІНАЛУ",
        welcomeTitle: "КОГО ПРИЙМАЄМО?",
        welcomeP1: 'Європейський народний фронт відмовляється від сектантства. Капітал і реакція безперешкодно діють через кордони, не перевіряючи ідеологічні нюанси; наш опір має бути однаково масштабним і взаємопов\'язаним. Ми надаємо стратегічну платформу для <span class="highlight-box">усєї лівиці</span> котра поділяє базову ідею <span class="highlight-box">Пан-Європейськості.</span>',
        welcomeP2: '<strong>Ми не вимагаємо єдності мислення; ми вимагаємо товариської, конструктивної взаємодії у добрій волі. Наші розбіжності є критично важливими джерелами для стійкої, творчої політичної уяви. Якщо ваше бачення Європи визначається людською гідністю, соціальною справедливістю та невпинним захистом колективної свободи від корпоративної жадібності; <span class="highlight-box">ваше місце — тут.</span></strong>',
        tendencyTradeUnionists: "Профспілківці",
        tendencyFederalists: "Пан-Європейські Федералісти",
        tendencyGreenLeftists: "Зелена Лівиця",
        tendencyConfederalists: "Демократичні Конфедералісти",
        tendencyMunicipalists: "Муніципалісти",
        tendencyAntiFascists: "Антифашисти",
        tendencyEcoSocialists: "Еко-Соціалісти",
        tendencyLabourOrganizers: "Організатори Трудящих",
        tendencySocialDemocrats: "Соціал-демократи",
        tendencySocialists: "Соціалісти",
        tendencyNonsectarian: "Незалежна лівиця",
        tendencyMarketSocialists: "Ринкові Соціалісти",
        tendencyEurocommunists: "Єврокомуністи",
        tendencyAnarchoCommunists: "Анархо-комуністи",
        tendencyNeoMarxists: "Нео-Марксисти",
        tendencyLeftCentrists: "Ліві Центристи",
        tendencyProgressives: "Прогресивні",
        tendencyReformists: "Соціалісти-Реформісти",
        tendencyDemocraticSocialists: "Демократичні Соціалісти",
        tendencyPopulists: "Ліві Популісти",
        tendencySyndicalists: "Синдікалісти",
        tendencyAccelerationists: "Ліві Акселераціоністи",
        errorTitle: 'СТОРІНКУ <span>ЗАГУБЛЕНО</span>',
        errorCopy: "Сторінка, котру ви шукаєте, не існує на порталі. Поверніться до головної сторінки та продовжуйте звідти! :D",
        returnHome: "ДОДОМУ",
        joinDiscord: "ПРИЄДНАТИСЯ ДО DISCORD"
    },
    bg: {
        languageName: "BG",
        translationCredits: "bogothebulgarian",
        orgFullName: "Европейски Народен Фронт",
        orgShortName: "ЕНФ",
        orgLogoAlt: "ЕНФ Logo",
        siteTitle: "ЕНФ | Европейски Народен Фронт | Официален Портал",
        home: "НАЧАЛНА СТРАНИЦА",
        heroTitle: 'Обединени <span>преговаряме.</span> Разделени <span>се молим.</span>',
        heroSupportOne: "Заедно хората в Европа имат по-силен глас.",
        heroSupportTwo: "Организирайте се отвъд границите. Изградете по-справедлива и обединена Европа.",
        joinTitle: "ПРИСЪЕДИНИ СЕ КЪМ ФРОНТА",
        joinCopy: "Организирайте се международно, отвъд националните граници. Постройте европейската сила.",
        signUp: "ПРИСЪЕДИНЕТЕ СЕ",
        aboutTitle: "ЗА НАС",
        aboutCopy: "Европейски Народен Фронт е широкообхватна организация, която приема всеки човек с леви убеждения, който копнее за обединена Европа",
        valuesTitle: "НАШИТЕ ЦЕННОСТИ",
        valueAntiFascism: "Анти-Нацизъм",
        valueEconomicDemocracy: "Демокрация на работното място",
        valueAntiAuthoritarianism: "Анти-тоталитаризъм",
        valueWorkersRights: "Работнически права",
        valueEnvironmentalJustice: "Еко законни",
        valueFederalism: "Европейски федерализъм",
        valueSolidarity: "Международно сътрудничество",
        valueFairEconomics: "Честна икономика",
        coalitionTitle: "РАЗНООБРАЗНА КОАЛИЦИЯ",
        manyOthers: "…и много други!",
        policyTitle: "ПОЛИТИЧЕСКИ ПРОГРАМИ И ДОКУМЕНТИ",
        charter: "01. ХАРТА НА ЕНФ (на английски)",
        policyPaper: "02. ПОЛИТИКА НА ЕНФ (на английски)",
        socials: "МЕДИИ",
        manifestoCode: "МАНИФЕСТ // 01",
        aboutFrontTitle: "ЗА ФРОНТА",
        aboutP1: " <strong>Европейски Народен Фронт (ЕНФ)</strong> е голяма широкообхватна пан-европейска организация, събираща заедно: демократични социалисти, социал демократи, еко-социалисти, синдикалисти и прогресивни. Ние предлагаме място където можеш да срещнеш хора с различни култури и наистина да видиш пан-европейската политическа култура, както и да работиш за обща цел за осъществяване на пан-европейско бъдеще.",
        aboutP2: "В основата си, Европейски Народен Фронт съществува, за да подпомогне европейското обединяване, чрез ляв, евро-федералистки поглед над нещата. Вярваме, че кризи като икономическо неравенство, глобалното затопляне и увеличаващото се ниво на тоталитаризма, не могат да бъдат спряни, чрез международни междуособици. Така че, трябва да има междудържавни сътрудничества, които действат, като обединителен фактор.",
        aboutP3: "Европейски Народен Фронт е анти-нацистки, анти-расистки и анти-тоталитарен. Ние отхвърляме реакционните идеи и ценим отвореността.",
        aboutP4: "<strong>Европейски Народен Фронт е най-вече и надежда, че една друга Европа е възможна, която се нуждае от пан-европейска взаимопомощ.</strong>",
        returnTerminal: "← ВЪРНИ СЕ КЪМ НАЧАЛНАТА СТРАНИЦА",
        welcomeTitle: "КАКВО ОТХВЪРЛЯМЕ И ПРИЕМАМ",
        welcomeP1: 'ЕНФ отхвърля политическото разделение между левицата и смята, че няма значение от малките незначителни разлики в идеологиите; ние приемаме <span class="highlight-box">всеки човек, който се мисли за ляв</span> и приема идеята за <span class="highlight-box">пан-европейска държава.</span>',
        welcomeP2: '<strong>На нас не ни трябва една "партийна линия", която да се следва, а хора, които вярват в човешкото достойнство, социалните права и непрестанната защита на общата свобода, срещу алчността на корпорациите.</span></strong>',
        tendencyTradeUnionists: "Синдикалисти",
        tendencyFederalists: "Пан-европейски федералисти",
        tendencyGreenLeftists: "Еко-комунисити",
        tendencyConfederalists: "Демократични конфедералисти",
        tendencyMunicipalists: "муниципалисти",
        tendencyAntiFascists: "Анти-нацисти",
        tendencyEcoSocialists: "Еко-социалисти",
        tendencyLabourOrganizers: "Организатори на труда",
        tendencySocialDemocrats: "Социал демократи",
        tendencySocialists: "Социалисти",
        tendencyNonsectarian: "Лева без сектаризъм",
        tendencyMarketSocialists: "Пазарни социалисти",
        tendencyEurocommunists: "Еврокомунисти",
        tendencyAnarchoCommunists: "Анархо-комунисти",
        tendencyNeoMarxists: "Нео-марксисти",
        tendencyLeftCentrists: "Ляво-центристи",
        tendencyProgressives: "Прогресивисти",
        tendencyReformists: "Реформистки социалисти",
        tendencyDemocraticSocialists: "Демократични социалисти",
        tendencyPopulists: "Ляви популисти",
        tendencySyndicalists: "Трудови синдикалисти",
        tendencyAccelerationists: "Леви акселерационисти",
        errorTitle: 'СТРАНИЦАТА <span>НЕ СЪЩЕСТВУВА</span>',
        errorCopy: "Страницата за, която търсите не е тука, върнете се в началната страница и започнете от там :D!",
        returnHome: "ВЪРНЕТЕ СЕ В НАЧАЛНАТА СТРАНИЦА",
        joinDiscord: "ПРИСЪДЕНИТЕ СЕ В ДИСКОРДА"
    },
    pt: {
        languageName: "PT",
        translationCredits: "camilleshark y o_grande_v ",
        orgFullName: "Frente Popular Europeia",
        orgShortName: "FPE",
        orgLogoAlt: "FPE Logo",
        siteTitle: "FPE | Frente Popular Europeia | Portal Oficial",
        home: "HOME",
        heroTitle: 'JUNTOS <span> NEGOCIAMOS.</span> DIVIDIDOS <span>IMPLORAMOS.</span>',
        heroSupportOne: "Juntas, as pessoas da Europa têm uma voz mais forte.",
        heroSupportTwo: "Organizem-se além das fronteiras. Construam uma Europa mais justa e unida.",
        joinTitle: "JUNTA-TE À FRENTE POPULAR",
        joinCopy: "Organiza Internacionalmente. Rejeita nacionalismos. Criar Poder Europeu.",
        signUp: "JUNTA-TE",
        aboutTitle: "SOBRE NÓS",
        aboutCopy: "A FPE é uma organização abrangente para toda a esquerda europeia que compartilha a visão de uma Europa mais unida.",
        valuesTitle: "NOSSOS VALORES",
        valueAntiFascism: "Anti-Fascismo",
        valueEconomicDemocracy: "Democracia Económica",
        valueAntiAuthoritarianism: "Antiautoritarismo",
        valueWorkersRights: "Direitos dos Trabalhadores",
        valueEnvironmentalJustice: "Justiça do Ambiente",
        valueFederalism: "Federalismo Pan-Europeu",
        valueSolidarity: "Solidariedade Transnacional",
        valueFairEconomics: "Economia Justa",
        coalitionTitle: "UMA COLIGAÇÃO DIVERSA",
        manyOthers: "...e muito mais!",
        policyTitle: "DOCUMENTOS E POLÍTICAS",
        charter: "01. CARTA DA FRENTE POPULAR EUROPEIA (em inglês)",
        policyPaper: "02. DOCUMENTOS DE POLÍTICA DA FRENTE POPULAR EUROPEIA (em inglês)",
        socials: "SOCIAIS",
        manifestoCode: "MANIFESTO // 01",
        aboutFrontTitle: "SOBRE A FRENTE",
        aboutP1: "A <strong>Frente Popular Europeia (FPE)</strong> é uma comunidade de socialistas pan-Europeia trazendo para si, socialistas democratas, social democratas, eco-socialistas, sindicalistas, e correntes da esquerda progressista. Nós fornecemos um espaço colaborativo para que todas as tradições possam interagir, cultivar uma cultura política pan-Europeia, e trabalhar para um futuro europeu compartilhado.",
        aboutP2: "Na sua essência, a Frente Popular Europeia existe para expandir a integração Europeia através de uma perspectiva de esquerda e Eurofederalista. Acreditamos que crises e problemas continentais (como a desigualdade económica, mudanças climáticas, e o crescimento do autoritarismo) não podem ser resolvidos através do nacionalismo. É preciso cooperação transnacionais, instituições democráticas capazes, e uma visão assentada na solidariedade e não na austeridade.",
        aboutP3: "A FPE é explicitamente anti-fascista, anti-racista, antiautoritária e contra exclusão social. Rejeitamos o chauvinismo, xenofobia e políticas reacionárias. Como think tank e espaço de cooperação, valorizamos abertura intelectual e análise rigorosa.",
        aboutP4: "<strong>A FPE é, por fim, um projeto de esperança: que outra Europa é possível e sua construção requer uma esquerda capaz de pensar e agir fora de fronteiras.</strong>",
        returnTerminal: "← VOLTAR AO TERMINAL",
        welcomeTitle: "QUEM É BEM-VINDO",
        welcomeP1: 'A Frente Popular Europeia REJEITA gatekeeping sectário. O capital e a reação agem livremente sem o sectarismo; a nossa resistência tem de ser vasta e interconectada. Nós damos porto seguro para <span class="highlight-box">todas as pessoas de esquerda</span> que compartilhem a linha base de <span class="highlight-box">pan-europeísmo.</span>',
        welcomeP2: '<strong>Nós não pedimos por uniformidade de pensamento; pedimos por camaradismo, trabalho construtivo e em boa fé. As nossas diferenças são e materials para uma resiliente e criativa imaginação política. Se a tua visão para a Europa é definida por dignidade humana, justiça social, e a defesa continua das nossas liberdades coletivas contra a ganância corporativa ; <span class="highlight-box">Tu és parte daqui.</span></strong>',
        tendencyTradeUnionists: "Trabalhistas",
        tendencyFederalists: "Federalistas Pan-Europeus",
        tendencyGreenLeftists: "Esquerdistas Verdes",
        tendencyConfederalists: "Democratas Confederalistas",
        tendencyMunicipalists: "Municipalistas",
        tendencyAntiFascists: "Anti-Fascistas",
        tendencyEcoSocialists: "Eco-Socialistas",
        tendencyLabourOrganizers: "Organizadores de sindicatos",
        tendencySocialDemocrats: "Social Democratas",
        tendencySocialists: "Socialistas",
        tendencyNonsectarian: "Esquerdistas Não-Sectários",
        tendencyMarketSocialists: "Socialistas de Mercado",
        tendencyEurocommunists: "Eurocomunistas",
        tendencyAnarchoCommunists: "Anarco-Comunistas",
        tendencyNeoMarxists: "Neo-Marxistas",
        tendencyLeftCentrists: "Centristas de Esquerda",
        tendencyProgressives: "Progressistas",
        tendencyReformists: "Reformista Socialistas",
        tendencyDemocraticSocialists: "Socialistas Democráticos",
        tendencyPopulists: "Populistas de Esquerda",
        tendencySyndicalists: "Sindicalistas",
        tendencyAccelerationists: "Aceleracionistas de Esquerda",
        errorTitle: 'PÁGINA <span>PERDIDA</span>',
        errorCopy: "A página que procuraste não se encontra no portal. Volta para a página principal e continua a partir daí! :D",
        returnHome: "VOLTAR AO INÍCIO",
        joinDiscord: "JUNTAR-TE AO DISCORD"
    },
    sc: {
        languageName: "SC",
        translationCredits: "insanityeu",
        orgFullName: "Europska Popularna Fronta",
        orgShortName: "EPF",
        orgLogoAlt: "EPF Logo",
        siteTitle: "EPF | Europska Popularna Fronta | Službeni Portal",
        home: "HOME",
        heroTitle: 'ZAJEDNO <span>ZAHTJEVAMO.</span> ODVOJENI <span>PREKLINJEMO.</span>',
        heroSupportOne: "Zajedničkim djelovanjem ljudi Europe imaju snažniji glas.",
        heroSupportTwo: "Organizirajmo se preko granica i gradimo pravedniju, ujedinjeniju Europu.",
        joinTitle: "PRIDRUŽI SE FRONTI",
        joinCopy: "Organiziraj se internacionalno. Napusti nacionalizam. Gradi Europsku moć.",
        signUp: "PRIDRUŽI SE",
        aboutTitle: "O NAMA",
        aboutCopy: "Europska Popularna Fronta je opširna Europska zajednica velikog šatora unutar koje se ujedinjuju demokratski socijalisti, socijalni demokrati, eko-socijalisti, sindikalisti i drugi progresivni ljevičari. Cilj nam je pružiti prostor za suradnju između različitih ljevičarskih smjerova, kultivirati istinski pan-Europsku političku kulturu i krenuti prema zajedničkoj budućnosti Europe.",
        valuesTitle: "NAŠE VRIJEDNOSTI",
        valueAntiFascism: "Anti-Fašizam",
        valueEconomicDemocracy: "Ekonomska Demokracija",
        valueAntiAuthoritarianism: "Anti-Autoritativnost",
        valueWorkersRights: "Radnička Prava",
        valueEnvironmentalJustice: "Ekološka Pravda",
        valueFederalism: "Europski Federalizam",
        valueSolidarity: "Nadnacionalna Solidarnost",
        valueFairEconomics: "Pravedna Ekonomija",
        coalitionTitle: "INKLUZIVNA KOALICIJA",
        manyOthers: "...i mnogo drugih!",
        policyTitle: "POLITIKA I IZJAVE",
        charter: "01. POVELJA EUROPSKE POPULARNE FRONTE (na engleskom)",
        policyPaper: "02. POLITIKA EUROPSKE POPULARNE FRONTE (na engleskom)",
        socials: "DRUŠTVENE MEDIJE",
        manifestoCode: "MANIFESTO // 01",
        aboutFrontTitle: "O FRONTI",
        aboutP1: "Europska Popularna Fronta je opširna Europska zajednica velikog šatora unutar koje se ujedinjuju demokratski socijalisti, socijalni demokrati, eko-socijalisti, sindikalisti i drugi progresivni ljevičari. Cilj nam je pružiti prostor za suradnju između različitih ljevičarskih smjerova, kultivirati istinski pan-Europsku političku kulturu i krenuti prema zajedničkoj budućnosti Europe.",
        aboutP2: "Temelj EPF-a jest poboljšanje Europske integracije kroz ljevičarsku, Eurofederalnu viziju. Vjerujemo da se kontinentalni izazovi poput ekonomske nejednakosti, globalnog zatopljenja i autoritativnih tendencija ne mogu razriješiti nacionalnim putem. Za njih je potrebna suradnja preko granica, demokratske institucije koje rade na većoj skali i vizija prizemljena u solidarnosti, a ne \"štednji\".",
        aboutP3: "EPF je izravno anti-fašistički, anti-rasistički, anti-autoritativan i anti-ekskluzivan pokret. Odbijamo šovinizam, ksenofobiju i reakcionarnu politiku u bilo kojem obliku. Funkcionirajući kao istraživački centar i strateški forum, cijenimo intelektualnu otvorenost i rigoroznu analizu kako bismo izradili realistične alternative koje su sposobne oblikovati kontinent na bolje.",
        aboutP4: "<strong>Europska Popularna Fronta je u konačnici projekt nade: uvjerenje da je drugačija Europa moguća, i da njena izgradnja zahtijeva ljevicu sposobnu misliti i djelovati preko granica.</strong>",
        returnTerminal: "← VRATI SE NA TERMINAL",
        welcomeTitle: "TKO JE DOBRODOŠAO",
        welcomeP1: 'Europska Popularna Fronta odbija sektarijanske prepirke. Kapital i reakcije rade izvan granica i ne provjeravaju ideološke nuanse svojih pratitelja; naša oporba mora biti jednako široka i povezana. <span class="highlight-box">Svim ljevičarima</span> koji dijele temeljnu osnovu <span class="highlight-box">Ujedinjene Europe</span> dajemo prostor za stratešku organizaciju.',
        welcomeP2: '<strong>Ne zahtijevamo jednolično razmišljanje; zahtijevamo bratstvo i konstruktivne argumente dobre savjesti. Naše nas razlike čine snažnijima, važan su izvor kreativne političke mašte koja nam je nužna za napredak. Ako je tvoja vizija Europe definirana dostojanstvom, društvenom pravdom i borbom protiv korporativne pohlepe; <span class="highlight-box">pripadaš ovdje.</span></strong>',
        tendencyTradeUnionists: "Sindikalisti",
        tendencyFederalists: "Europski Federalisti",
        tendencyGreenLeftists: "Zelena Ljevica",
        tendencyConfederalists: "Demokratski Konfederalisti",
        tendencyMunicipalists: "Municipalisti",
        tendencyAntiFascists: "Anti-Fašisti",
        tendencyEcoSocialists: "Eko-Socijalisti",
        tendencyLabourOrganizers: "Organizatori Radnika",
        tendencySocialDemocrats: "Socijalni Demokrati",
        tendencySocialists: "Socijalisti",
        tendencyNonsectarian: "Ljevičari bez opredjeljenja",
        tendencyMarketSocialists: "Tržišni Socijalisti",
        tendencyEurocommunists: "Eurokomunisti",
        tendencyAnarchoCommunists: "Anarho-komunisti",
        tendencyNeoMarxists: "Neo-Marksisti",
        tendencyLeftCentrists: "Ljudi s ljevog centra",
        tendencyProgressives: "Progresivi",
        tendencyReformists: "Reformistički Socijalisti",
        tendencyDemocraticSocialists: "Demokratski Socijalisti",
        tendencyPopulists: "Populisti-ljevičari",
        tendencySyndicalists: "Radnički Sindikalisti",
        tendencyAccelerationists: "Ljevičarski akceleracionisti",
        errorTitle: 'STRANICA <span>NIJE PRONAĐENA</span>',
        errorCopy: "Stranica koju tražite nije na portalu. Vratite se na glavnu stranicu i tamo nastavite! :D",
        returnHome: "VRATI SE",
        joinDiscord: "PRIDRUŽI SE DISCORD SERVERU"
    },
    nl: {
        languageName: "NL",
        translationCredits: "kasperusmauw",
        orgFullName: "Europees Volksfront",
        orgShortName: "EVF",
        orgLogoAlt: "EVF Logo",
        siteTitle: "Europees Volksfront | Official Portal",
        home: "STARTPAGINA",
        heroTitle: 'VERENIGD <span>ONDERHANDELEN.</span> VERDEELD <span>SMEKEN.</span>',
        heroSupportOne: "Samen hebben mensen in Europa een sterkere stem.",
        heroSupportTwo: "Organiseer over grenzen heen. Bouw aan een eerlijker en meer verenigd Europa.",
        joinTitle: "SLUIT JE AAN BIJ HET FRONT",
        joinCopy: "Organiseer internationaal. Verwerp nationalisme. Bouw Europese macht op.",
        signUp: "AANMELDEN",
        aboutTitle: "OVER ONS",
        aboutCopy: "Het EVF is een brede beweging die linkse Europeanen samenbrengt met de gedeelde visie van een meer verenigd Europa.",
        valuesTitle: "ONZE WAARDEN",
        valueAntiFascism: "Anti-Fascisme",
        valueEconomicDemocracy: "Economische Democratie",
        valueAntiAuthoritarianism: "Anti-Authoritarisme",
        valueWorkersRights: "Arbeidersrechten",
        valueEnvironmentalJustice: "Milieurechtvaardigheid",
        valueFederalism: "Pan-Europees Federalisme",
        valueSolidarity: "Transnationale Solidariteit",
        valueFairEconomics: "Eerlijke Economie",
        coalitionTitle: "EEN DIVERSE COALITIE",
        manyOthers: "...en vele anderen!",
        policyTitle: "BELEID EN DOCUMENTEN",
        charter: "01. HET HANDVEST VAN HET EUROPEES VOLKSFRONT (in het Engels)",
        policyPaper: "02. HET BELEIDSDOCUMENT VAN HET EUROPEES VOLKSFRONT (in het Engels)",
        socials: "SOCIALE MEDIA",
        manifestoCode: "MANIFEST // 01",
        aboutFrontTitle: "OVER HET FRONT",
        aboutP1: "Het <strong>Europees Volksfront (EVF)</strong> is een brede, pan-Europese gemeenschap die democratische socialisten, sociaaldemocraten, ecosocialisten, vakbondsleden en progressieve linkse stromingen samenbrengt. Wij bieden een samenwerkingsruimte om verschillende tradities te verbinden, een echte pan-Europese politieke cultuur te ontwikkelen en te werken aan een gezamenlijke Europese toekomst.",
        aboutP2: "In de kern bestaat het EVF om Europese integratie te verdiepen vanuit een links en Eurofederalistisch perspectief. Wij geloven dat continentale uitdagingen (zoals economische ongelijkheid, klimaatverandering en opkomend autoritarisme) niet door nationalisme kunnen worden opgelost. Ze vereisen grensoverschrijdende samenwerking, democratische instellingen die op grote schaal handelen en een visie gebaseerd op solidariteit in plaats van bezuinigingen.",
        aboutP3: "Het EVF is expliciet antifascistisch, antiracistisch, anti-autoritaristisch en tegen uitsluiting. Wij verwerpen chauvinisme, xenofobie en reactionaire politiek in alle vormen. Als denktank en strategisch forum waarderen wij intellectuele openheid en grondige analyse om realistische alternatieven te bouwen die het continent kunnen vormgeven.",
        aboutP4: "<strong>Het Europees Volksfront is uiteindelijk een project van hoop: het geloof dat een ander Europa mogelijk is, en dat het bouwen daarvan een links vereist dat buiten grenzen kan denken en handelen.</strong>",
        returnTerminal: "← TERUG NAAR TERMINAL",
        welcomeTitle: "WIE IS WELKOM",
        welcomeP1: 'Het Europees Volksfront verwerpt sektarische uitsluiting. Kapitaal en reactie bewegen soepel over grenzen heen zonder ideologische nuances te controleren; ons verzet moet even groot en verbonden zijn. Wij bieden een strategische haven voor <span class="highlight-box">alle linkse mensen</span> die een gedeelde basis van <span class="highlight-box">pan-Europeanisme</span> delen.',
        welcomeP2: '<strong>Wij eisen geen eenvormigheid van gedachten; wij eisen kameraadschappelijke, constructieve betrokkenheid te goeder trouw. Onze verschillen zijn de essentiële grondstoffen voor een veerkrachtige, creatieve politieke verbeelding. Als jouw visie voor Europa wordt bepaald door menselijke waardigheid, sociale rechtvaardigheid en de voortdurende verdediging van collectieve vrijheid tegen hebzucht van bedrijven; <span class="highlight-box">hoor je hier thuis.</span></strong>',
        tendencyTradeUnionists: "Vakbondsleden",
        tendencyFederalists: "Pan-Europese Federalisten",
        tendencyGreenLeftists: "Groene Linksen",
        tendencyConfederalists: "Democratische Confederalisten",
        tendencyMunicipalists: "Municipalisten",
        tendencyAntiFascists: "Antifascisten",
        tendencyEcoSocialists: "Ecosocialisten",
        tendencyLabourOrganizers: "Arbeidsorganisatoren",
        tendencySocialDemocrats: "Sociaaldemocraten",
        tendencySocialists: "Socialisten",
        tendencyNonsectarian: "Niet-sektarische Linksen",
        tendencyMarketSocialists: "Marktsocialisten",
        tendencyEurocommunists: "Eurocommunisten",
        tendencyAnarchoCommunists: "Anarchocommunisten",
        tendencyNeoMarxists: "Neomarxisten",
        tendencyLeftCentrists: "Linkse Centristen",
        tendencyProgressives: "Progressieven",
        tendencyReformists: "Hervormingsgezinde Socialisten",
        tendencyDemocraticSocialists: "Democratische Socialisten",
        tendencyPopulists: "Linkse Populisten",
        tendencySyndicalists: "Arbeidssyndicalisten",
        tendencyAccelerationists: "Linkse Accelerationisten",
        errorTitle: 'PAGINA <span>VERLOREN</span>',
        errorCopy: "De pagina die je zocht bevindt zich niet in het portaal. Ga terug naar de hoofdpagina en ga vanaf daar verder! :D",
        returnHome: "TERUG NAAR STARTPAGINA",
        joinDiscord: "WORD LID VAN DISCORD"
    },

ee: {
        languageName: "EE",
        translationCredits: "mushroomborscht",
        orgFullName: "Euroopa Rahvarinne",
        orgShortName: "EPF",
        orgLogoAlt: "EPF Logo",
        siteTitle: "Euroopa Rahvarinne | Ametlik Portaal",
        home: "KODULEHT",
        heroTitle: 'ÜHESKOOS ME <span>TEHIME.</span> JAGATUNA ME <span>ANUME.</span>',
        heroSupportOne: "Koos on Euroopa inimestel tugevam hääl.",
        heroSupportTwo: "Organiseeruge üle piiride. Ehitage õiglasem ja ühtsem Euroopa.",
        joinTitle: "LIITU RINNAGA",
        joinCopy: "Organiseeru rahvusvaheliselt. Hülga natsionalism. Ehita üles Euroopa tugevus.",
        signUp: "REGISTREERI",
        aboutTitle: "MEIE KOHTA",
        aboutCopy: "EPF on laiapõhjaline liikumine, mis ühendab vasakpoolseid Eurooplasi, kellel on ühine nägemus ühtsemast Euroopast.",
        valuesTitle: "MEIE VÄÄRTUSED",
        valueAntiFascism: "Antifašism",
        valueEconomicDemocracy: "Majandusdemokraatia",
        valueAntiAuthoritarianism: "Antiautoritaarsus",
        valueWorkersRights: "Tööõigused",
        valueEnvironmentalJustice: "Keskkonnaõiglus",
        valueFederalism: "Paneuroopa Föderalism",
        valueSolidarity: "Rahvusvaheline Solidaarsus",
        valueFairEconomics: "Õiglane Majanduspoliitika",
        coalitionTitle: "MITMEKESINE KOALITSIOON",
        manyOthers: "...ja palju muud!",
        policyTitle: "POLIITIKA JA DOKUMENDID",
        charter: "01. EPF-i HARTA",
        policyPaper: "02. EPF-i POLIITIKADOKUMENT",
        socials: "SOTSIAALMEEDIA",
        manifestoCode: "MANIFEST // 01",
        aboutFrontTitle: "RAHVARINNA KOHTA",
        aboutP1: "<strong>Euroopa Rahvarinne (EPF)</strong> on lai ja suur üleeuroopaline kogukond, mis ühendab demokraatlikke sotsialiste, sotsiaaldemokraate, ökosotsialiste, ametiühingutegelasi ja progressiivseid vasakpoolseid. Pakume koostöökeskkonda traditsioonideüleseks suhtluseks, tõeliselt üleeuroopalise poliitilise kultuuri edendamiseks ja ühise Euroopa tuleviku nimel töötamiseks.",
        aboutP2: "EPF-i eesmärk on süvendada Euroopa integratsiooni vasakpoolse, euroföderalistliku vaatenurga kaudu. Usume, et üleeuroopalisi väljakutseid (nagu majanduslik ebavõrdsus, kliimamuutused ja kasvav autoritaarsus) ei saa lahendada natsionalismi abil. Need nõuavad piiriülest koostööd, piiriüleselt tegutsevaid demokraatlikke institutsioone ja visiooni, mis põhineb solidaarsusel, mitte kokkuhoiul.",
        aboutP3: "EPF on otseselt antifašistlik, antirassistlik, antiautoritaarne ja kaasav. Me lükkame tagasi šovinismi, ksenofoobia ja reaktsioonilise poliitika mis tahes vormis. Tegutsedes nii mõttekoja kui ka strateegilise foorumina, väärtustame intellektuaalset avatust ja ranget analüüsi, et luua realistlikke alternatiive, mis on võimelised mandrit kujundama.",
        aboutP4: "<strong>Euroopa Rahvarinne on lõppkokkuvõttes lootuse projekt: usk, et teistsugune Euroopa on võimalik ja et selle ehitamiseks on vaja vasakpoolseid, kes on võimelised mõtlema ja tegutsema piirideüleselt.</strong>",
        returnTerminal: "← TAGASI TERMINALI",
        welcomeTitle: "MEIL ON TERETULNUD",
        welcomeP1: 'Euroopa Rahvarinne lükkab tagasi sektantliku väljajätmise. Kapital ja reaktsioon toimivad sujuvalt üle piiride ilma ideoloogilisi nüansse kontrollimata; meie vastupanu peab olema võrdselt ulatuslik ja omavahel seotud. Pakume strateegilist sadamat <span class="highlight-box">kõigile vasakpoolsetele</span>, kes jagavad <span class="highlight-box">paneuroopalikkuse</span> põhialust.',
        welcomeP2: '<strong>Me ei nõua üksmeelsust; me ootame seltsimehelikku, konstruktiivset ja heas usus tegutsemist. Meie erimeelsused on vastupidava ja loomingulise poliitilise kujutlusvõime kriitiliseks lähtematerjaliks. Kui teie nägemust Euroopast määratlevad inimväärikus, sotsiaalne õiglus ja kollektiivse vabaduse järeleandmatu kaitsmine ettevõtete ahnuse vastu, siis <span class="highlight-box">teie kuulute siia.</span></strong>',
        tendencyTradeUnionists: "Ametiühingutegelased",
        tendencyFederalists: "Pan-Euroopa Föderalistid",
        tendencyGreenLeftists: "Rohelised Vasakpoolsed",
        tendencyConfederalists: "Demokraatlikud Konföderalistid",
        tendencyMunicipalists: "Munitsipalistid",
        tendencyAntiFascists: "Anti-Fašistid",
        tendencyEcoSocialists: "Ökosotsialistid",
        tendencyLabourOrganizers: "Tööliikumise organiseerijad",
        tendencySocialDemocrats: "Sotsiaaldemokraadid",
        tendencySocialists: "Sotsialistid",
        tendencyNonsectarian: "Mittesektantlikud Vasakpoolsed",
        tendencyMarketSocialists: "Turusotsialistid",
        tendencyEurocommunists: "Eurokommunistid",
        tendencyAnarchoCommunists: "Anarhokommunistid",
        tendencyNeoMarxists: "Neo-Marksistid",
        tendencyLeftCentrists: "Vasaktsentristid",
        tendencyProgressives: "Progressiivsed",
        tendencyReformists: "Reformistlikud sotsialistid",
        tendencyDemocraticSocialists: "Demokraatilised Sotsialistid",
        tendencyPopulists: "Vasakpoolsed Populistid",
        tendencySyndicalists: "Töölissündikalistid",
        tendencyAccelerationists: "Vasakpoolsed akseleratsionistid",
        errorTitle: 'LEHEKÜLG <span>KADUNUD</span>',
        errorCopy: "Lehekülge, mida otsisid, ei leitud. Mine tagasi kodulehele ja jätka sealt! :D",
        returnHome: "TAGASI KODULEHELE",
        joinDiscord: "LIITU DISCORDIGA"
    }   
};

const EPF_TOOLKIT_SLIDE_COPY = {
    en: {
        tkSlide1Body: `<h2>A shared visual language</h2><ul><li>Start with one clear subject and a strong visual hierarchy.</li><li>Use the palette and type choices on the next slides as your foundation.</li><li>Give the EPF mark room to breathe and keep supporting details readable.</li></ul><div class="identity-notes"><section><h3>Repeat the essentials</h3><p>Repeat the accent colour, type choices, and EPF symbol so every piece feels part of one family.</p></section><section><h3>Set a clear hierarchy</h3><p>Make the main heading easiest to notice. Use size, weight, and spacing to guide the reader.</p></section><section><h3>Keep the mark intact</h3><p>Use the supplied artwork in its original proportions, with clear space and enough contrast.</p></section><section><h3>Adapt the layout</h3><p>Adjust the arrangement for each format while keeping the same visual elements.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>EPF pink-red</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Warm white</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Ink</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Black</strong><br>#000000</div></div><ul><li>Use #ff0052 for accents, rules, and emphasis.</li><li>Use warm white for open backgrounds and ink for comfortable reading.</li><li>Keep contrast high, especially for small text.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — headings, titles, and short labels. Use bold weights.</li><li><strong>Inter</strong> — paragraphs, captions, and longer information.</li><li><strong>JetBrains Mono</strong> — codes, small technical labels, and occasional emphasis.</li><li>Use uppercase for short headings; keep longer text in sentence case.</li></ul><div class="font-specimens" aria-label="EPF font samples"><div class="font-specimen oswald"><strong>Oswald / Display</strong><span>BUILD<br>TOGETHER</span></div><div class="font-specimen inter"><strong>Inter / Reading</strong><span>Clear words<br>for everyone.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Label</strong><span>EPF // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Choose the right version</h3><p>Use the full flag when there is room. The standalone mark suits smaller or tighter layouts.</p></section><section><h3>Give it contrast</h3><p>Choose a calm background where the shape is easy to see. Use the transparent mark on solid colours.</p></section><section><h3>Keep its proportions</h3><p>Scale the artwork evenly. Do not stretch, crop, or redraw the flag or flower.</p></section><section><h3>Leave clear space</h3><p>Keep text and other graphics away from the mark so it stays distinct.</p></section>`
    },
    de: {
        tkSlide1Body: `<h2>Eine gemeinsame Bildsprache</h2><ul><li>Wähle ein klares Motiv und eine deutliche visuelle Hierarchie.</li><li>Nutze die Farbpalette und Schriftwahl der nächsten Folien als Grundlage.</li><li>Gib dem EVF-Zeichen Raum und halte Zusatzinformationen lesbar.</li></ul><div class="identity-notes"><section><h3>Das Wesentliche wiederholen</h3><p>Wiederhole Akzentfarbe, Schriftwahl und EVF-Zeichen, damit alle Materialien zusammengehören.</p></section><section><h3>Klare Hierarchie schaffen</h3><p>Die Hauptüberschrift soll zuerst auffallen. Größe, Stärke und Abstände führen durch den Text.</p></section><section><h3>Zeichen unverändert lassen</h3><p>Nutze das Original im richtigen Seitenverhältnis, mit Freiraum und ausreichendem Kontrast.</p></section><section><h3>Layout anpassen</h3><p>Passe die Anordnung an jedes Format an und behalte die visuellen Elemente bei.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>EVF Pinkrot</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Warmweiß</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Schwarzgrau</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Schwarz</strong><br>#000000</div></div><ul><li>Nutze #ff0052 für Akzente, Linien und Hervorhebungen.</li><li>Warmweiß eignet sich für offene Hintergründe, dunkle Schrift für angenehmes Lesen.</li><li>Achte besonders bei kleiner Schrift auf starken Kontrast.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — Überschriften, Titel und kurze Beschriftungen. Nutze fette Schnitte.</li><li><strong>Inter</strong> — Absätze, Bildunterschriften und längere Texte.</li><li><strong>JetBrains Mono</strong> — Codes, technische Kurzlabels und gelegentliche Akzente.</li><li>Kurze Überschriften in Großbuchstaben; längere Texte in Satzschreibung.</li></ul><div class="font-specimens" aria-label="EVF-Schriftmuster"><div class="font-specimen oswald"><strong>Oswald / Anzeige</strong><span>GEMEINSAM<br>STARK</span></div><div class="font-specimen inter"><strong>Inter / Lesetext</strong><span>Klare Worte<br>für alle.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Label</strong><span>EVF // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Die passende Version wählen</h3><p>Nutze die ganze Flagge, wenn genug Platz ist. Das einzelne Zeichen passt besser in kleine oder enge Layouts.</p></section><section><h3>Für Kontrast sorgen</h3><p>Wähle einen ruhigen Hintergrund. Das transparente Zeichen eignet sich für einfarbige Flächen.</p></section><section><h3>Proportionen bewahren</h3><p>Skaliere das Motiv gleichmäßig. Flagge oder Blüte nicht strecken, zuschneiden oder nachzeichnen.</p></section><section><h3>Freiraum lassen</h3><p>Halte Text und andere Grafiken fern, damit das EVF-Zeichen klar erkennbar bleibt.</p></section>`
    },
    es: {
        tkSlide1Body: `<h2>Un lenguaje visual compartido</h2><ul><li>Parte de un tema claro y una jerarquía visual sólida.</li><li>Usa la paleta y las tipografías de las siguientes diapositivas como base.</li><li>Deja espacio para la marca del FPE y mantén legibles los detalles.</li></ul><div class="identity-notes"><section><h3>Repite lo esencial</h3><p>Repite el color de acento, las tipografías y el símbolo para dar unidad a cada pieza.</p></section><section><h3>Define una jerarquía clara</h3><p>Haz que destaque el título principal. Usa tamaño, grosor y espacio para guiar la lectura.</p></section><section><h3>Conserva la marca</h3><p>Usa el diseño original, sin alterar sus proporciones, con espacio y contraste suficientes.</p></section><section><h3>Adapta el diseño</h3><p>Ajusta la composición a cada formato y conserva los mismos elementos visuales.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Rojo rosado FPE</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Blanco cálido</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Tinta</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Negro</strong><br>#000000</div></div><ul><li>Usa #ff0052 para acentos, líneas y énfasis.</li><li>Usa blanco cálido en fondos y tinta para facilitar la lectura.</li><li>Mantén un contraste alto, sobre todo en textos pequeños.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — títulos y etiquetas breves. Usa pesos gruesos.</li><li><strong>Inter</strong> — párrafos, pies de foto e información extensa.</li><li><strong>JetBrains Mono</strong> — códigos, etiquetas técnicas y algún énfasis.</li><li>Usa mayúsculas en títulos breves y escritura normal en textos largos.</li></ul><div class="font-specimens" aria-label="Muestras tipográficas del FPE"><div class="font-specimen oswald"><strong>Oswald / Títulos</strong><span>UNIDAS<br>AVANZAMOS</span></div><div class="font-specimen inter"><strong>Inter / Lectura</strong><span>Palabras claras<br>para todas.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Etiqueta</strong><span>FPE // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Elige la versión adecuada</h3><p>Usa la bandera completa si hay espacio. La marca sola funciona mejor en diseños pequeños o estrechos.</p></section><section><h3>Asegura el contraste</h3><p>Elige un fondo tranquilo. La marca transparente sirve sobre colores lisos.</p></section><section><h3>Conserva las proporciones</h3><p>Escala la imagen de manera uniforme. No estires, recortes ni redibujes la bandera o el hibisco.</p></section><section><h3>Deja espacio libre</h3><p>Separa el texto y otros gráficos para que la marca se distinga bien.</p></section>`
    },
    fr: {
        tkSlide1Body: `<h2>Un langage visuel commun</h2><ul><li>Choisissez un sujet clair et une hiérarchie visuelle forte.</li><li>Appuyez-vous sur les couleurs et les polices des diapositives suivantes.</li><li>Laissez respirer le symbole du FPE et gardez les détails lisibles.</li></ul><div class="identity-notes"><section><h3>Répéter l’essentiel</h3><p>Répétez la couleur d’accent, les polices et le symbole pour créer une identité commune.</p></section><section><h3>Établir une hiérarchie claire</h3><p>Faites ressortir le titre principal. Utilisez taille, graisse et espacement pour guider la lecture.</p></section><section><h3>Préserver le symbole</h3><p>Utilisez le visuel original, sans modifier ses proportions, avec assez d’espace et de contraste.</p></section><section><h3>Adapter la mise en page</h3><p>Adaptez la composition à chaque format tout en gardant les mêmes éléments visuels.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Rose-rouge FPE</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Blanc chaud</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Encre</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Noir</strong><br>#000000</div></div><ul><li>Utilisez #ff0052 pour les accents, les lignes et les mises en évidence.</li><li>Choisissez le blanc chaud pour les fonds et l’encre pour faciliter la lecture.</li><li>Gardez un contraste élevé, surtout pour les petits textes.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — titres et courtes étiquettes. Choisissez des graisses fortes.</li><li><strong>Inter</strong> — paragraphes, légendes et textes longs.</li><li><strong>JetBrains Mono</strong> — codes, repères techniques et accents ponctuels.</li><li>Réservez les majuscules aux titres courts et gardez la casse normale pour les textes longs.</li></ul><div class="font-specimens" aria-label="Exemples de polices du FPE"><div class="font-specimen oswald"><strong>Oswald / Titres</strong><span>ENSEMBLE<br>PLUS FORTS</span></div><div class="font-specimen inter"><strong>Inter / Lecture</strong><span>Des mots clairs<br>pour toutes et tous.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Repère</strong><span>FPE // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Choisir la bonne version</h3><p>Utilisez le drapeau complet si vous avez de la place. Le symbole seul convient aux formats réduits.</p></section><section><h3>Assurer le contraste</h3><p>Choisissez un fond sobre. Le symbole transparent convient aux fonds unis.</p></section><section><h3>Respecter les proportions</h3><p>Redimensionnez uniformément. Ne déformez, ne recadrez et ne redessinez pas le drapeau ou la fleur.</p></section><section><h3>Garder un espace libre</h3><p>Éloignez textes et autres graphismes pour préserver la lisibilité du symbole.</p></section>`
    },
    it: {
        tkSlide1Body: `<h2>Un linguaggio visivo condiviso</h2><ul><li>Scegli un soggetto chiaro e una gerarchia visiva forte.</li><li>Usa palette e caratteri delle prossime diapositive come base.</li><li>Lascia spazio al simbolo FPE e mantieni leggibili i dettagli.</li></ul><div class="identity-notes"><section><h3>Ripeti gli elementi essenziali</h3><p>Ripeti colore d’accento, caratteri e simbolo per dare unità a ogni contenuto.</p></section><section><h3>Crea una gerarchia chiara</h3><p>Metti in risalto il titolo principale. Usa dimensione, peso e spaziatura per guidare la lettura.</p></section><section><h3>Non alterare il simbolo</h3><p>Usa l’immagine originale, senza modificarne le proporzioni, con spazio e contrasto adeguati.</p></section><section><h3>Adatta il layout</h3><p>Adatta la composizione a ogni formato mantenendo gli stessi elementi visivi.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Rosso-rosa FPE</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Bianco caldo</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Inchiostro</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Nero</strong><br>#000000</div></div><ul><li>Usa #ff0052 per accenti, linee e risalto.</li><li>Usa il bianco caldo per gli sfondi e l’inchiostro per leggere comodamente.</li><li>Mantieni un contrasto elevato, soprattutto nei testi piccoli.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — titoli e brevi etichette. Usa pesi marcati.</li><li><strong>Inter</strong> — paragrafi, didascalie e testi lunghi.</li><li><strong>JetBrains Mono</strong> — codici, etichette tecniche e qualche enfasi.</li><li>Usa le maiuscole per titoli brevi; mantieni la normale capitalizzazione nei testi lunghi.</li></ul><div class="font-specimens" aria-label="Esempi di caratteri FPE"><div class="font-specimen oswald"><strong>Oswald / Titoli</strong><span>INSIEME<br>PIÙ FORTI</span></div><div class="font-specimen inter"><strong>Inter / Lettura</strong><span>Parole chiare<br>per tutte e tutti.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Etichetta</strong><span>FPE // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Scegli la versione giusta</h3><p>Usa la bandiera completa se c’è spazio. Il simbolo isolato è adatto ai formati più piccoli.</p></section><section><h3>Garantisci contrasto</h3><p>Scegli uno sfondo semplice. Il simbolo trasparente funziona sui colori uniformi.</p></section><section><h3>Rispetta le proporzioni</h3><p>Ridimensiona in modo uniforme. Non deformare, ritagliare o ridisegnare bandiera o fiore.</p></section><section><h3>Lascia spazio libero</h3><p>Tieni testi e altre grafiche a distanza per far risaltare il simbolo.</p></section>`
    },
    pl: {
        tkSlide1Body: `<h2>Wspólny język wizualny</h2><ul><li>Wybierz jeden czytelny motyw i wyraźną hierarchię wizualną.</li><li>Oprzyj się na palecie i krojach pisma z kolejnych slajdów.</li><li>Zapewnij znakowi EFL przestrzeń, a szczegóły pozostaw czytelne.</li></ul><div class="identity-notes"><section><h3>Powtarzaj to, co ważne</h3><p>Powtarzaj kolor akcentu, kroje pisma i symbol, by materiały tworzyły całość.</p></section><section><h3>Ustal hierarchię</h3><p>Wyróżnij główny nagłówek. Rozmiarem, grubością i odstępami prowadź czytelnika.</p></section><section><h3>Nie zmieniaj znaku</h3><p>Używaj oryginalnej grafiki i proporcji, zostawiając wokół niej miejsce i kontrast.</p></section><section><h3>Dostosuj układ</h3><p>Dopasuj kompozycję do formatu, zachowując te same elementy wizualne.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Różowo-czerwony EFL</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Ciepła biel</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Tusz</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Czerń</strong><br>#000000</div></div><ul><li>Używaj #ff0052 do akcentów, linii i wyróżnień.</li><li>Ciepła biel sprawdzi się w tle, a tusz ułatwi czytanie.</li><li>Zachowuj wysoki kontrast, zwłaszcza przy małym tekście.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — nagłówki, tytuły i krótkie etykiety. Używaj pogrubień.</li><li><strong>Inter</strong> — akapity, podpisy i dłuższe treści.</li><li><strong>JetBrains Mono</strong> — kody, krótkie etykiety techniczne i akcenty.</li><li>Krótkie nagłówki zapisuj wielkimi literami, dłuższy tekst zwyczajnie.</li></ul><div class="font-specimens" aria-label="Przykładowe kroje EFL"><div class="font-specimen oswald"><strong>Oswald / Nagłówki</strong><span>RAZEM<br>SILNIEJSI</span></div><div class="font-specimen inter"><strong>Inter / Czytanie</strong><span>Jasne słowa<br>dla wszystkich.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Etykieta</strong><span>EFL // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Wybierz właściwą wersję</h3><p>Użyj pełnej flagi, gdy jest miejsce. Sam symbol lepiej sprawdza się w małych formatach.</p></section><section><h3>Zadbaj o kontrast</h3><p>Wybierz spokojne tło. Przezroczysty symbol pasuje do jednolitych kolorów.</p></section><section><h3>Zachowaj proporcje</h3><p>Skaluj równomiernie. Nie rozciągaj, nie przycinaj ani nie przerysowuj flagi czy kwiatu.</p></section><section><h3>Zostaw wolne miejsce</h3><p>Odsuń tekst i inne grafiki, aby symbol pozostał czytelny.</p></section>`
    },
    ru: {
        tkSlide1Body: `<h2>Общий визуальный язык</h2><ul><li>Выберите ясную тему и чёткую визуальную иерархию.</li><li>Возьмите палитру и шрифты со следующих слайдов за основу.</li><li>Оставьте символу ЕНФ свободное место, а детали сделайте читаемыми.</li></ul><div class="identity-notes"><section><h3>Повторяйте главное</h3><p>Повторяйте акцентный цвет, шрифты и символ, чтобы материалы были едиными.</p></section><section><h3>Задайте иерархию</h3><p>Выделите главный заголовок. Размер, насыщенность и интервалы направят чтение.</p></section><section><h3>Не меняйте символ</h3><p>Используйте оригинал с исходными пропорциями, свободным местом и контрастом.</p></section><section><h3>Адаптируйте макет</h3><p>Меняйте композицию под формат, сохраняя общие визуальные элементы.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Розово-красный ЕНФ</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Тёплый белый</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Чернила</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Чёрный</strong><br>#000000</div></div><ul><li>Используйте #ff0052 для акцентов, линий и выделения.</li><li>Тёплый белый подходит для фона, а тёмный текст удобен для чтения.</li><li>Сохраняйте высокий контраст, особенно в мелком тексте.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — заголовки и короткие подписи. Используйте жирное начертание.</li><li><strong>Inter</strong> — абзацы, подписи и длинные тексты.</li><li><strong>JetBrains Mono</strong> — коды, короткие технические метки и акценты.</li><li>Короткие заголовки пишите прописными, длинный текст — обычным регистром.</li></ul><div class="font-specimens" aria-label="Образцы шрифтов ЕНФ"><div class="font-specimen oswald"><strong>Oswald / Заголовки</strong><span>ВМЕСТЕ<br>СИЛЬНЕЕ</span></div><div class="font-specimen inter"><strong>Inter / Чтение</strong><span>Ясные слова<br>для всех.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Метка</strong><span>ЕНФ // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Выберите подходящий вариант</h3><p>Используйте полный флаг, если есть место. Отдельный знак лучше подходит для малого формата.</p></section><section><h3>Сохраните контраст</h3><p>Выберите спокойный фон. Прозрачный знак подходит для однотонных цветов.</p></section><section><h3>Соблюдайте пропорции</h3><p>Меняйте размер равномерно. Не растягивайте, не обрезайте и не перерисовывайте флаг или цветок.</p></section><section><h3>Оставьте свободное место</h3><p>Отодвиньте текст и графику, чтобы символ оставался заметным.</p></section>`
    },
    uk: {
        tkSlide1Body: `<h2>Спільна візуальна мова</h2><ul><li>Оберіть зрозумілу тему та виразну візуальну ієрархію.</li><li>Візьміть палітру й шрифти з наступних слайдів за основу.</li><li>Залиште символу ЄНФ простір, а допоміжний текст зробіть читабельним.</li></ul><div class="identity-notes"><section><h3>Повторюйте головне</h3><p>Повторюйте акцентний колір, шрифти й символ, щоб матеріали були цілісними.</p></section><section><h3>Визначте ієрархію</h3><p>Виділіть головний заголовок. Розмір, насиченість і відступи допоможуть читанню.</p></section><section><h3>Не змінюйте символ</h3><p>Використовуйте оригінал із правильними пропорціями, простором і контрастом.</p></section><section><h3>Адаптуйте макет</h3><p>Змінюйте композицію для кожного формату, зберігаючи спільні елементи.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Рожево-червоний ЄНФ</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Теплий білий</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Чорнильний</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Чорний</strong><br>#000000</div></div><ul><li>Використовуйте #ff0052 для акцентів, ліній і виділення.</li><li>Теплий білий пасує для фону, а темний текст зручний для читання.</li><li>Зберігайте високий контраст, особливо для дрібного тексту.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — заголовки й короткі підписи. Використовуйте жирне накреслення.</li><li><strong>Inter</strong> — абзаци, підписи та довші тексти.</li><li><strong>JetBrains Mono</strong> — коди, короткі технічні мітки й акценти.</li><li>Короткі заголовки пишіть великими літерами, довший текст — звичайно.</li></ul><div class="font-specimens" aria-label="Зразки шрифтів ЄНФ"><div class="font-specimen oswald"><strong>Oswald / Заголовки</strong><span>РАЗОМ<br>СИЛЬНІШІ</span></div><div class="font-specimen inter"><strong>Inter / Читання</strong><span>Зрозумілі слова<br>для всіх.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Мітка</strong><span>ЄНФ // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Оберіть потрібну версію</h3><p>Використовуйте повний прапор, якщо є місце. Окремий знак краще пасує малим форматам.</p></section><section><h3>Забезпечте контраст</h3><p>Оберіть спокійне тло. Прозорий знак добре виглядає на суцільному кольорі.</p></section><section><h3>Зберігайте пропорції</h3><p>Масштабуйте рівномірно. Не розтягуйте, не обрізайте й не перемальовуйте прапор або квітку.</p></section><section><h3>Залишайте вільний простір</h3><p>Відсуньте текст та іншу графіку, щоб символ залишався виразним.</p></section>`
    },
    bg: {
        tkSlide1Body: `<h2>Общ визуален език</h2><ul><li>Изберете ясен мотив и силна визуална йерархия.</li><li>Използвайте палитрата и шрифтовете от следващите слайдове за основа.</li><li>Оставете място около символа на ЕНФ и запазете детайлите четливи.</li></ul><div class="identity-notes"><section><h3>Повтаряйте основното</h3><p>Повтаряйте акцентния цвят, шрифтовете и символа за единен вид на материалите.</p></section><section><h3>Подредете йерархията</h3><p>Изведете главното заглавие напред. Размерът, плътността и разстоянията водят читателя.</p></section><section><h3>Запазете символа</h3><p>Използвайте оригиналния знак с правилни пропорции, свободно място и контраст.</p></section><section><h3>Адаптирайте оформлението</h3><p>Променяйте подредбата според формата, като запазвате общите елементи.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Розово-червено на ЕНФ</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Топло бяло</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Мастилено</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Черно</strong><br>#000000</div></div><ul><li>Използвайте #ff0052 за акценти, линии и подчертаване.</li><li>Топлото бяло е подходящо за фон, а тъмният текст — за четене.</li><li>Поддържайте силен контраст, особено при дребен текст.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — заглавия и кратки етикети. Използвайте удебелен шрифт.</li><li><strong>Inter</strong> — абзаци, надписи и по-дълъг текст.</li><li><strong>JetBrains Mono</strong> — кодове, технически етикети и акценти.</li><li>Кратките заглавия са с главни букви; дългият текст е с обичаен регистър.</li></ul><div class="font-specimens" aria-label="Примери за шрифтове на ЕНФ"><div class="font-specimen oswald"><strong>Oswald / Заглавия</strong><span>ЗАЕДНО<br>ПО-СИЛНИ</span></div><div class="font-specimen inter"><strong>Inter / Четене</strong><span>Ясни думи<br>за всички.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Етикет</strong><span>ЕНФ // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Изберете подходящата версия</h3><p>Използвайте цялото знаме, когато има място. Самостоятелният знак е по-подходящ за малки формати.</p></section><section><h3>Осигурете контраст</h3><p>Изберете спокоен фон. Прозрачният знак е подходящ върху плътни цветове.</p></section><section><h3>Запазете пропорциите</h3><p>Оразмерявайте равномерно. Не разтягайте, изрязвайте или прерисувайте знамето или цветето.</p></section><section><h3>Оставете свободно място</h3><p>Дръжте текста и графиките настрана, за да се откроява символът.</p></section>`
    },
    pt: {
        tkSlide1Body: `<h2>Uma linguagem visual comum</h2><ul><li>Começa com um tema claro e uma hierarquia visual forte.</li><li>Usa a paleta e os tipos de letra dos próximos diapositivos como base.</li><li>Deixa espaço para o símbolo da FPE e mantém os detalhes legíveis.</li></ul><div class="identity-notes"><section><h3>Repete o essencial</h3><p>Repete a cor de destaque, os tipos de letra e o símbolo para dar unidade aos materiais.</p></section><section><h3>Define uma hierarquia clara</h3><p>Destaca o título principal. Usa tamanho, peso e espaçamento para orientar a leitura.</p></section><section><h3>Preserva o símbolo</h3><p>Usa o grafismo original, com as proporções certas, espaço livre e contraste suficiente.</p></section><section><h3>Adapta o esquema</h3><p>Ajusta a composição a cada formato e mantém os mesmos elementos visuais.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Rosa-vermelho FPE</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Branco quente</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Tinta</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Preto</strong><br>#000000</div></div><ul><li>Usa #ff0052 para destaques, linhas e ênfase.</li><li>Usa branco quente nos fundos e tinta para uma leitura confortável.</li><li>Garante contraste elevado, sobretudo no texto pequeno.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — títulos e etiquetas curtas. Usa pesos fortes.</li><li><strong>Inter</strong> — parágrafos, legendas e informação mais longa.</li><li><strong>JetBrains Mono</strong> — códigos, etiquetas técnicas e ênfase ocasional.</li><li>Usa maiúsculas em títulos curtos; mantém a escrita normal em textos longos.</li></ul><div class="font-specimens" aria-label="Exemplos de tipos de letra da FPE"><div class="font-specimen oswald"><strong>Oswald / Títulos</strong><span>JUNTOS<br>MAIS FORTES</span></div><div class="font-specimen inter"><strong>Inter / Leitura</strong><span>Palavras claras<br>para todos.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Etiqueta</strong><span>FPE // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Escolhe a versão certa</h3><p>Usa a bandeira completa se houver espaço. O símbolo isolado resulta melhor em formatos pequenos.</p></section><section><h3>Garante contraste</h3><p>Escolhe um fundo simples. O símbolo transparente funciona em cores sólidas.</p></section><section><h3>Mantém as proporções</h3><p>Redimensiona uniformemente. Não estiques, recortes ou redesenhes a bandeira ou a flor.</p></section><section><h3>Deixa espaço livre</h3><p>Mantém o texto e outros grafismos afastados para destacar o símbolo.</p></section>`
    },
    sc: {
        tkSlide1Body: `<h2>Zajednički vizualni jezik</h2><ul><li>Odaberite jasan motiv i snažnu vizualnu hijerarhiju.</li><li>Koristite paletu i tipografiju s narednih slajdova kao osnovu.</li><li>Ostavite prostora za simbol EPF-a i zadržite čitljive detalje.</li></ul><div class="identity-notes"><section><h3>Ponavljajte bitno</h3><p>Ponavljajte boju za naglaske, tipografiju i simbol kako bi materijali bili povezani.</p></section><section><h3>Postavite jasnu hijerarhiju</h3><p>Istaknite glavni naslov. Veličinom, debljinom i razmacima usmjerite čitanje.</p></section><section><h3>Sačuvajte simbol</h3><p>Koristite izvorni crtež i omjere, uz dovoljno prostora i kontrasta.</p></section><section><h3>Prilagodite raspored</h3><p>Prilagodite kompoziciju formatu i zadržite iste vizualne elemente.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>Ružičasto-crvena EPF-a</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Topla bijela</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Tinta</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Crna</strong><br>#000000</div></div><ul><li>Koristite #ff0052 za naglaske, linije i isticanje.</li><li>Topla bijela je za pozadinu, a tinta za ugodno čitanje.</li><li>Održavajte visok kontrast, posebno kod sitnog teksta.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — naslovi i kratke oznake. Koristite podebljane rezove.</li><li><strong>Inter</strong> — odlomci, opisi i duže informacije.</li><li><strong>JetBrains Mono</strong> — kodovi, tehničke oznake i povremeni naglasci.</li><li>Kratke naslove pišite velikim slovima, a duži tekst u uobičajenom obliku.</li></ul><div class="font-specimens" aria-label="Primjeri tipografije EPF-a"><div class="font-specimen oswald"><strong>Oswald / Naslovi</strong><span>ZAJEDNO<br>SMO JAČI</span></div><div class="font-specimen inter"><strong>Inter / Čitanje</strong><span>Jasne riječi<br>za sve.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Oznaka</strong><span>EPF // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Odaberite pravu verziju</h3><p>Koristite cijelu zastavu ako ima mjesta. Samostalni simbol bolje pristaje manjim formatima.</p></section><section><h3>Osigurajte kontrast</h3><p>Odaberite mirnu pozadinu. Prozirni simbol dobro radi na punim bojama.</p></section><section><h3>Sačuvajte proporcije</h3><p>Ravnomjerno mijenjajte veličinu. Ne rastežite, izrezujte ni prerađujte zastavu ili cvijet.</p></section><section><h3>Ostavite slobodan prostor</h3><p>Odmaknite tekst i grafiku kako bi simbol ostao prepoznatljiv.</p></section>`
    },
    nl: {
        tkSlide1Body: `<h2>Een gedeelde beeldtaal</h2><ul><li>Begin met één duidelijk onderwerp en een sterke visuele hiërarchie.</li><li>Gebruik het kleurenpalet en de lettertypes van de volgende dia’s als basis.</li><li>Geef het EVF-teken ruimte en houd aanvullende details leesbaar.</li></ul><div class="identity-notes"><section><h3>Herhaal de kern</h3><p>Herhaal accentkleur, lettertypes en EVF-symbool zodat alle uitingen bij elkaar horen.</p></section><section><h3>Breng hiërarchie aan</h3><p>Laat de hoofdkop opvallen. Gebruik grootte, gewicht en ruimte om de lezer te leiden.</p></section><section><h3>Behoud het teken</h3><p>Gebruik het originele ontwerp met de juiste verhoudingen, ruimte en voldoende contrast.</p></section><section><h3>Pas de indeling aan</h3><p>Pas de compositie per formaat aan en behoud dezelfde visuele elementen.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>EVF roze-rood</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Warm wit</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Inkt</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Zwart</strong><br>#000000</div></div><ul><li>Gebruik #ff0052 voor accenten, lijnen en nadruk.</li><li>Gebruik warm wit voor achtergronden en inkt voor prettig leeswerk.</li><li>Houd het contrast hoog, vooral bij kleine tekst.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — koppen, titels en korte labels. Gebruik vetgedrukte stijlen.</li><li><strong>Inter</strong> — alinea’s, bijschriften en langere teksten.</li><li><strong>JetBrains Mono</strong> — codes, technische labels en af en toe nadruk.</li><li>Gebruik hoofdletters voor korte koppen; schrijf langere tekst normaal.</li></ul><div class="font-specimens" aria-label="EVF-lettertypevoorbeelden"><div class="font-specimen oswald"><strong>Oswald / Koppen</strong><span>SAMEN<br>STERKER</span></div><div class="font-specimen inter"><strong>Inter / Leestekst</strong><span>Duidelijke woorden<br>voor iedereen.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Label</strong><span>EVF // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Kies de juiste versie</h3><p>Gebruik de volledige vlag als er ruimte is. Het losse teken past beter in kleine formaten.</p></section><section><h3>Zorg voor contrast</h3><p>Kies een rustige achtergrond. Het transparante teken past op effen kleuren.</p></section><section><h3>Behoud de verhoudingen</h3><p>Schaal gelijkmatig. Rek, snijd of teken de vlag of bloem niet opnieuw.</p></section><section><h3>Laat ruimte vrij</h3><p>Houd tekst en andere afbeeldingen op afstand zodat het symbool herkenbaar blijft.</p></section>`
    },
    ee: {
        tkSlide1Body: `<h2>Ühine visuaalne keel</h2><ul><li>Alusta ühest selgest teemast ja tugevast visuaalsest hierarhiast.</li><li>Kasuta järgmiste slaidide värvipaletti ja kirjatüüpe alusena.</li><li>Jäta EPF-i märgile ruumi ning hoia lisateave loetav.</li></ul><div class="identity-notes"><section><h3>Korda olulist</h3><p>Korda aktsentvärvi, kirjatüüpe ja EPF-i sümbolit, et materjalid moodustaksid terviku.</p></section><section><h3>Loo selge hierarhia</h3><p>Tõsta pealkiri esile. Suurus, paksus ja vahed aitavad lugemist suunata.</p></section><section><h3>Säilita märk muutmata</h3><p>Kasuta originaali õigete proportsioonidega ning jäta sellele ruumi ja kontrasti.</p></section><section><h3>Kohanda paigutust</h3><p>Kohanda kujundust formaadile, säilitades samad visuaalsed elemendid.</p></section></div>`,
        tkSlide2Body: `<div class="swatch-row"><div class="swatch"><div class="swatch-swatch" style="background:#ff0052"></div><strong>EPF-i roosakaspunane</strong><br>#ff0052</div><div class="swatch"><div class="swatch-swatch" style="background:#fffffd"></div><strong>Soe valge</strong><br>#fffffd</div><div class="swatch"><div class="swatch-swatch" style="background:#171717"></div><strong>Tint</strong><br>#171717</div><div class="swatch"><div class="swatch-swatch" style="background:#000000"></div><strong>Must</strong><br>#000000</div></div><ul><li>Kasuta #ff0052 aktsentide, joonte ja rõhutuste jaoks.</li><li>Soe valge sobib taustaks ja tume tekst mugavaks lugemiseks.</li><li>Hoia kontrast tugev, eriti väikese kirja puhul.</li></ul>`,
        tkSlide3Body: `<ul><li><strong>Oswald</strong> — pealkirjad ja lühisildid. Kasuta pakse kirju.</li><li><strong>Inter</strong> — lõigud, allkirjad ja pikem teave.</li><li><strong>JetBrains Mono</strong> — koodid, tehnilised sildid ja rõhutused.</li><li>Kasuta lühikestes pealkirjades suurtähti, pikemas tekstis tavakirja.</li></ul><div class="font-specimens" aria-label="EPF-i kirjatüüpide näited"><div class="font-specimen oswald"><strong>Oswald / Pealkiri</strong><span>KOOS<br>TUGEVAMAD</span></div><div class="font-specimen inter"><strong>Inter / Lugemine</strong><span>Selged sõnad<br>kõigile.</span></div><div class="font-specimen mono"><strong>JetBrains Mono / Silt</strong><span>EPF // 2026</span></div></div>`,
        tkSlide4Body: `<section><h3>Vali sobiv versioon</h3><p>Kasuta tervet lippu, kui ruumi jätkub. Üksik märk sobib paremini väikesesse kujundusse.</p></section><section><h3>Hoia kontrast selge</h3><p>Vali rahulik taust. Läbipaistev märk sobib ühevärvilisele pinnale.</p></section><section><h3>Säilita proportsioonid</h3><p>Muuda suurust ühtlaselt. Ära venita, lõika ega joonista lippu või lille ümber.</p></section><section><h3>Jäta vaba ruumi</h3><p>Hoia tekst ja muu graafika märgist eemal, et see jääks selgelt nähtavaks.</p></section>`
    }
};

const EPF_TOOLKIT_SYMBOL_LABELS = {
    en: "EPF flag · stars|EPF flag · hibiscus|EPF mark · colour|EPF mark · transparent|EPF QR code|EPF flower · white",
    de: "EVF-Flagge · Sterne|EVF-Flagge · Hibiskus|EVF-Zeichen · Farbe|EVF-Zeichen · transparent|EVF-QR-Code|EVF-Blüte · weiß",
    es: "Bandera del FPE · estrellas|Bandera del FPE · hibisco|Símbolo del FPE · color|Símbolo del FPE · transparente|Código QR del FPE|Flor del FPE · blanca",
    fr: "Drapeau du FPE · étoiles|Drapeau du FPE · hibiscus|Emblème du FPE · couleur|Emblème du FPE · transparent|Code QR du FPE|Fleur du FPE · blanche",
    it: "Bandiera FPE · stelle|Bandiera FPE · ibisco|Simbolo FPE · a colori|Simbolo FPE · trasparente|Codice QR FPE|Fiore FPE · bianco",
    pl: "Flaga EFL · gwiazdy|Flaga EFL · hibiskus|Znak EFL · kolorowy|Znak EFL · przezroczysty|Kod QR EFL|Kwiat EFL · biały",
    ru: "Флаг ЕНФ · звёзды|Флаг ЕНФ · гибискус|Знак ЕНФ · цветной|Знак ЕНФ · прозрачный|QR-код ЕНФ|Цветок ЕНФ · белый",
    uk: "Прапор ЄНФ · зірки|Прапор ЄНФ · гібіскус|Знак ЄНФ · кольоровий|Знак ЄНФ · прозорий|QR-код ЄНФ|Квітка ЄНФ · біла",
    bg: "Знаме на ЕНФ · звезди|Знаме на ЕНФ · хибискус|Знак на ЕНФ · цветен|Знак на ЕНФ · прозрачен|QR код на ЕНФ|Цвете на ЕНФ · бяло",
    pt: "Bandeira da FPE · estrelas|Bandeira da FPE · hibisco|Símbolo da FPE · colorido|Símbolo da FPE · transparente|Código QR da FPE|Flor da FPE · branca",
    sc: "Zastava EPF-a · zvijezde|Zastava EPF-a · hibiskus|Znak EPF-a · u boji|Znak EPF-a · proziran|QR kod EPF-a|Cvijet EPF-a · bijeli",
    nl: "EVF-vlag · sterren|EVF-vlag · hibiscus|EVF-teken · kleur|EVF-teken · transparant|EVF-QR-code|EVF-bloem · wit",
    ee: "EPF-i lipp · tähed|EPF-i lipp · hibiskus|EPF-i märk · värviline|EPF-i märk · läbipaistev|EPF-i QR-kood|EPF-i lill · valge"
};

const EPF_TOOLKIT_ACCESSIBILITY = {
    en: ["Downloadable EPF symbols", "Previous symbols", "Next symbols", "EPF poster examples", "Previous posters", "Next posters", "Previous slide", "Next slide", "EPF font samples"],
    de: ["EVF-Symbole zum Herunterladen", "Vorherige Symbole", "Nächste Symbole", "EVF-Plakatbeispiele", "Vorherige Plakate", "Nächste Plakate", "Vorherige Folie", "Nächste Folie", "EVF-Schriftmuster"],
    es: ["Símbolos del FPE para descargar", "Símbolos anteriores", "Símbolos siguientes", "Ejemplos de carteles del FPE", "Carteles anteriores", "Carteles siguientes", "Diapositiva anterior", "Diapositiva siguiente", "Muestras tipográficas del FPE"],
    fr: ["Symboles du FPE à télécharger", "Symboles précédents", "Symboles suivants", "Exemples d’affiches du FPE", "Affiches précédentes", "Affiches suivantes", "Diapositive précédente", "Diapositive suivante", "Exemples de polices du FPE"],
    it: ["Simboli FPE da scaricare", "Simboli precedenti", "Simboli successivi", "Esempi di poster FPE", "Poster precedenti", "Poster successivi", "Diapositiva precedente", "Diapositiva successiva", "Esempi di caratteri FPE"],
    pl: ["Symbole EFL do pobrania", "Poprzednie symbole", "Następne symbole", "Przykłady plakatów EFL", "Poprzednie plakaty", "Następne plakaty", "Poprzedni slajd", "Następny slajd", "Przykładowe kroje EFL"],
    ru: ["Символы ЕНФ для скачивания", "Предыдущие символы", "Следующие символы", "Примеры плакатов ЕНФ", "Предыдущие плакаты", "Следующие плакаты", "Предыдущий слайд", "Следующий слайд", "Образцы шрифтов ЕНФ"],
    uk: ["Символи ЄНФ для завантаження", "Попередні символи", "Наступні символи", "Приклади плакатів ЄНФ", "Попередні плакати", "Наступні плакати", "Попередній слайд", "Наступний слайд", "Зразки шрифтів ЄНФ"],
    bg: ["Символи на ЕНФ за изтегляне", "Предишни символи", "Следващи символи", "Примери за плакати на ЕНФ", "Предишни плакати", "Следващи плакати", "Предишен слайд", "Следващ слайд", "Примери за шрифтове на ЕНФ"],
    pt: ["Símbolos da FPE para transferir", "Símbolos anteriores", "Símbolos seguintes", "Exemplos de cartazes da FPE", "Cartazes anteriores", "Cartazes seguintes", "Diapositivo anterior", "Diapositivo seguinte", "Exemplos de tipos de letra da FPE"],
    sc: ["Simboli EPF-a za preuzimanje", "Prethodni simboli", "Sljedeći simboli", "Primjeri plakata EPF-a", "Prethodni plakati", "Sljedeći plakati", "Prethodni slajd", "Sljedeći slajd", "Primjeri tipografije EPF-a"],
    nl: ["EVF-symbolen om te downloaden", "Vorige symbolen", "Volgende symbolen", "EVF-postervoorbeelden", "Vorige posters", "Volgende posters", "Vorige dia", "Volgende dia", "EVF-lettertypevoorbeelden"],
    ee: ["Allalaaditavad EPF-i sümbolid", "Eelmised sümbolid", "Järgmised sümbolid", "EPF-i plakatite näited", "Eelmised plakatid", "Järgmised plakatid", "Eelmine slaid", "Järgmine slaid", "EPF-i kirjatüüpide näited"]
};

const EPF_TOOLKIT_BUTTON_LABELS = {
    en: ["MINMAX PROGRAM (ENGLISH ONLY FOR NOW)", "EPF TOOLKIT"],
    de: ["MINMAX-PROGRAMM (VORERST NUR AUF ENGLISCH)", "EVF-TOOLKIT"],
    es: ["PROGRAMA MINMAX (POR AHORA SOLO EN INGLÉS)", "KIT DE HERRAMIENTAS DEL FPE"],
    fr: ["PROGRAMME MINMAX (EN ANGLAIS POUR LE MOMENT)", "BOÎTE À OUTILS DU FPE"],
    it: ["PROGRAMMA MINMAX (PER ORA SOLO IN INGLESE)", "KIT DI STRUMENTI FPE"],
    pl: ["PROGRAM MINMAX (NA RAZIE TYLKO PO ANGIELSKU)", "ZESTAW NARZĘDZI EFL"],
    ru: ["ПРОГРАММА MINMAX (ПОКА ТОЛЬКО НА АНГЛИЙСКОМ)", "ИНСТРУМЕНТАРИЙ ЕНФ"],
    uk: ["ПРОГРАМА MINMAX (ПОКИ ЩО ЛИШЕ АНГЛІЙСЬКОЮ)", "ІНСТРУМЕНТАРІЙ ЄНФ"],
    bg: ["ПРОГРАМА MINMAX (ЗАСЕГА САМО НА АНГЛИЙСКИ)", "ИНСТРУМЕНТИ НА ЕНФ"],
    pt: ["PROGRAMA MINMAX (POR AGORA SÓ EM INGLÊS)", "FERRAMENTAS DA FPE"],
    sc: ["MINMAX PROGRAM (ZA SADA SAMO NA ENGLESKOM)", "ALATI EPF-A"],
    nl: ["MINMAX-PROGRAMMA (VOORLOPIG ALLEEN IN HET ENGELS)", "EVF-TOOLKIT"],
    ee: ["MINMAXI PROGRAMM (PRAEGU AINULT INGLISE KEELES)", "EPF-I TÖÖRIISTAD"]
};

Object.entries(EPF_TOOLKIT_BUTTON_LABELS).forEach(([lang, [minmaxLabel, toolkitLabel]]) => {
    EPF_TOOLKIT_TRANSLATIONS[lang].minmaxLabel = minmaxLabel;
    EPF_TOOLKIT_TRANSLATIONS[lang].toolkitLabel = toolkitLabel;
});

Object.entries(EPF_TOOLKIT_ACCESSIBILITY).forEach(([lang, values]) => {
    ["tkSymbolsAria", "tkPrevSymbols", "tkNextSymbols", "tkPostersAria", "tkPrevPosters", "tkNextPosters", "tkPrevSlideAria", "tkNextSlideAria", "tkFontsAria"].forEach((key, index) => {
        EPF_TOOLKIT_TRANSLATIONS[lang][key] = values[index];
    });
});

Object.entries(EPF_TOOLKIT_SYMBOL_LABELS).forEach(([lang, labels]) => {
    labels.split("|").forEach((label, index) => {
        EPF_TOOLKIT_TRANSLATIONS[lang][`tkCaption${index + 1}`] = label;
        EPF_TOOLKIT_TRANSLATIONS[lang][`tkAlt${index + 1}`] = label;
    });
});

Object.entries(EPF_TOOLKIT_SLIDE_COPY).forEach(([lang, values]) => {
    Object.assign(EPF_TOOLKIT_TRANSLATIONS[lang], values);
});

Object.entries(EPF_TOOLKIT_TRANSLATIONS).forEach(([lang, values]) => {
    Object.assign(EPF_TRANSLATIONS[lang], values);
});

const EPF_TENDENCY_KEYS = [
    "tendencyTradeUnionists",
    "tendencyFederalists",
    "tendencyGreenLeftists",
    "tendencyConfederalists",
    "tendencyMunicipalists",
    "tendencyAntiFascists",
    "tendencyEcoSocialists",
    "tendencyLabourOrganizers",
    "tendencySocialDemocrats",
    "tendencySocialists",
    "tendencyNonsectarian",
    "tendencyMarketSocialists",
    "tendencyEurocommunists",
    "tendencyAnarchoCommunists",
    "tendencyNeoMarxists",
    "tendencyLeftCentrists",
    "tendencyProgressives",
    "tendencyReformists",
    "tendencyDemocraticSocialists",
    "tendencyPopulists",
    "tendencySyndicalists",
    "tendencyAccelerationists"
];

const EPF_LANGUAGE_DISPLAY_NAMES = {
    en: "English",
    de: "German/Deutsch",
    es: "Spanish/Español",
    fr: "French/Français",
    it: "Italian/Italiano",
    pl: "Polish/Polski",
    ru: "Russian/русский",
    uk: "Ukrainian/українська",
    bg: "Bulgarian/български",
    pt: "Portuguese/Português",
    sc: "Serbocroatian/српскохрватски",
    nl: "Dutch/Nederlands",
    ee: "Estonian/Eesti"
};

const EPF_LANGUAGE_KEY = "epf-selected-language";
const EPF_THEME_KEY = "epf-selected-theme";

// If the language code is cursed, we just go back to English and pretend nothing happened.
function getLanguage(lang) {
    if (EPF_TRANSLATIONS[lang]) {
        return lang;
    }
    return "en";
}

// Fetches translated text. Probably the closest thing here to a vending machine.
function translateValue(lang, key) {
    var activeLang = getLanguage(lang);
    var active = EPF_TRANSLATIONS[activeLang];
    var text = "";

    if (active && active[key]) {
        text = active[key];
    } else {
        text = EPF_TRANSLATIONS.en[key] || "";
    }

    return applyOrganizationTokens(text, lang);
}

// LocalStorage remembers the language, unless the browser is being dramatic.
function getSavedLanguage() {
    return getLanguage(localStorage.getItem(EPF_LANGUAGE_KEY) || "en");
}

// Walks through the page replacing text. This is DOM surgery with a butter knife.
function getTranslationCredit(lang) {
    const active = EPF_TRANSLATIONS[getLanguage(lang)];
    return active?.translationCredits || "EPF";
}

function applyLanguage(lang = getSavedLanguage(), root = document) {
    var activeLang = getLanguage(lang);

    root.documentElement.lang = activeLang;
    if (root.title) {
        root.title = applyOrganizationTokens(root.title, activeLang);
    }

    var allTranslated = root.querySelectorAll("[data-i18n]");
    for (var i = 0; i < allTranslated.length; i++) {
        var element = allTranslated[i];
        element.textContent = translateValue(activeLang, element.dataset.i18n);
    }

    var htmlItems = root.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlItems.length; j++) {
        var htmlItem = htmlItems[j];
        htmlItem.innerHTML = translateValue(activeLang, htmlItem.dataset.i18nHtml);
    }

    var attrItems = root.querySelectorAll("[data-i18n-attr]");
    for (var k = 0; k < attrItems.length; k++) {
        var attrItem = attrItems[k];
        var entries = attrItem.dataset.i18nAttr.split(",");
        for (var m = 0; m < entries.length; m++) {
            var entry = entries[m];
            var parts = entry.split(":");
            var attribute = parts[0];
            var key = parts[1];
            if (attribute && key) {
                attrItem.setAttribute(attribute.trim(), translateValue(activeLang, key.trim()));
            }
        }
    }

    var repeatItems = root.querySelectorAll("[data-i18n-repeat]");
    for (var n = 0; n < repeatItems.length; n++) {
        var container = repeatItems[n];
        var copies = Number(container.dataset.i18nRepeat) || 1;
        var itemClass = container.dataset.i18nRepeatClass || "";
        container.innerHTML = "";

        for (var copy = 0; copy < copies; copy++) {
            for (var p = 0; p < EPF_TENDENCY_KEYS.length; p++) {
                var key = EPF_TENDENCY_KEYS[p];
                var item = root.createElement(container.dataset.i18nRepeatTag || "li");
                item.className = itemClass;
                item.textContent = translateValue(activeLang, key);
                container.appendChild(item);
            }
        }
    }

    applyOrganizationTokensToTextNodes(root, activeLang);

    var languageCurrent = root.querySelectorAll("[data-language-current]");
    for (var q = 0; q < languageCurrent.length; q++) {
        var currentItem = languageCurrent[q];
        currentItem.textContent = translateValue(activeLang, "languageName");
    }

    var translationCredits = root.querySelectorAll("[data-translation-credit]");
    for (var r = 0; r < translationCredits.length; r++) {
        var creditItem = translationCredits[r];
        creditItem.textContent = `Translation by ${getTranslationCredit(activeLang)}`;
    }

    if (root === document) {
        renderLanguageMenu(activeLang);
        setTimeout(fitHeroTitle, 0);
    }
}

// Fits the localized title beside a square emblem whose side matches the title height.
function fitHeroTitle() {
    const title = document.querySelector(".hero-title");
    if (!title) return;

    title.style.whiteSpace = "normal";
    title.style.overflowWrap = "normal";
    title.style.wordBreak = "keep-all";
    title.style.display = "inline-block";
    title.style.maxWidth = "100%";

    const targetLines = 2;
    const panel = title.closest(".hero-panel");
    if (!panel) return;

    let low = 12;
    let high = 120;
    let best = low;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        title.style.fontSize = `${mid}px`;

        // Reserve a square as tall as the two-line title before checking its width.
        const lineHeightGuess = mid * 1.05;
        panel.style.setProperty("--hero-title-height", `${lineHeightGuess * targetLines}px`);
        const availableWidth = title.getBoundingClientRect().width;
        if (!availableWidth) return;

        const computed = window.getComputedStyle(title);
        const lineHeightValue = parseFloat(computed.lineHeight);
        const lineHeight = computed.lineHeight.includes("px")
            ? lineHeightValue
            : lineHeightValue * mid;

        const height = title.getBoundingClientRect().height;
        const currentLines = Math.round(height / lineHeight);

        if (currentLines <= targetLines && height <= lineHeightGuess * targetLines + 2) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    title.style.fontSize = `${best}px`;
    panel.style.setProperty("--hero-title-height", `${title.getBoundingClientRect().height}px`);
}

// Theme picker. Dark mode wins by vibes if the browser says so.
function getSavedTheme() {
    const savedTheme = localStorage.getItem(EPF_THEME_KEY);
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Tells the iframe to translate too, because one document was not annoying enough.
function applyLanguageToFrame(lang) {
    const frame = document.querySelector("[data-translatable-frame]");
    if (!frame || !frame.contentWindow) return;

    try {
        frame.contentWindow.EPFTranslations?.applyLanguage(lang);
    } catch (error) {
        console.warn("Could not translate frame yet.", error);
    }
}

// Flips CSS variables by setting one tiny attribute. Alarming amount of power, honestly.
function applyTheme(theme = getSavedTheme(), root = document) {
    const activeTheme = theme === "dark" ? "dark" : "light";

    root.documentElement.dataset.theme = activeTheme;
    root.querySelectorAll("[data-theme-toggle]").forEach((button) => {
        const isDark = activeTheme === "dark";
        button.setAttribute("aria-pressed", String(isDark));
        button.querySelector("[data-theme-icon]").textContent = isDark ? "☀" : "◐";
        button.querySelector("[data-theme-label]").textContent = isDark ? "LIGHT" : "DARK";
    });
}

// Same iframe nonsense, but for colors. Cross-document politeness, I guess.
function applyThemeToFrame(theme) {
    const frame = document.querySelector("[data-translatable-frame]");
    if (!frame || !frame.contentWindow) return;

    try {
        frame.contentWindow.EPFTheme?.applyTheme(theme);
    } catch (error) {
        console.warn("Could not theme frame yet.", error);
    }
}

// Wires up the theme button. Click rectangle, invert universe, easy.
function initThemeControls() {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
    applyThemeToFrame(savedTheme);

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
            const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
            localStorage.setItem(EPF_THEME_KEY, nextTheme);
            applyTheme(nextTheme);
            applyThemeToFrame(nextTheme);
        });
    });
}

function renderLanguageMenu(activeLang) {
    var menuList = document.querySelector(".language-menu-list");
    if (!menuList) return;

    menuList.innerHTML = "";

    var pinnedLanguages = ["de", "en", "fr"];
    var orderedEntries = [];

    for (var i = 0; i < pinnedLanguages.length; i++) {
        var code = pinnedLanguages[i];
        if (EPF_TRANSLATIONS[code]) {
            orderedEntries.push([code, EPF_TRANSLATIONS[code]]);
        }
    }

    var otherEntries = [];
    var translationCodes = Object.keys(EPF_TRANSLATIONS);
    for (var j = 0; j < translationCodes.length; j++) {
        var otherCode = translationCodes[j];
        if (!pinnedLanguages.includes(otherCode)) {
            otherEntries.push([otherCode, EPF_TRANSLATIONS[otherCode]]);
        }
    }

    otherEntries.sort(function (a, b) {
        return a[0].localeCompare(b[0], undefined, { sensitivity: "base" });
    });

    for (var k = 0; k < otherEntries.length; k++) {
        orderedEntries.push(otherEntries[k]);
    }

    for (var l = 0; l < orderedEntries.length; l++) {
        var entry = orderedEntries[l];
        var buttonCode = entry[0];
        var data = entry[1];
        var button = document.createElement("button");
        button.type = "button";
        button.dataset.languageOption = buttonCode;
        var displayName = EPF_LANGUAGE_DISPLAY_NAMES[buttonCode] || data.languageName || buttonCode.toUpperCase();
        button.textContent = `${buttonCode.toUpperCase()} - ${displayName}`;
        button.className = buttonCode === activeLang ? "is-active" : "";
        button.setAttribute("aria-pressed", String(buttonCode === activeLang));
        menuList.appendChild(button);
    }
}

function filterLanguageMenu(query) {
    const normalized = query.trim().toLowerCase();
    const menuList = document.querySelector(".language-menu-list");
    if (!menuList) return;

    menuList.querySelectorAll("button").forEach((button) => {
        const visible = !normalized || button.textContent.toLowerCase().includes(normalized);
        button.hidden = !visible;
    });
}

// Wires up language buttons and closes the menu when people click elsewhere. Somehow this is UI engineering.
function initLanguageControls() {
    const savedLanguage = getSavedLanguage();
    renderLanguageMenu(savedLanguage);
    applyLanguage(savedLanguage);
    applyLanguageToFrame(savedLanguage);

    document.querySelectorAll("[data-language-toggle]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const picker = toggle.closest("[data-language-picker]");
            if (!picker) return;
            const isOpen = picker.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            if (isOpen) {
                picker.querySelector("[data-language-search]")?.focus();
                filterLanguageMenu("");
            }
        });
    });

    const menuList = document.querySelector(".language-menu-list");
    if (menuList) {
        menuList.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-language-option]");
            if (!button) return;

            const nextLanguage = getLanguage(button.dataset.languageOption);
            localStorage.setItem(EPF_LANGUAGE_KEY, nextLanguage);
            applyLanguage(nextLanguage);
            applyLanguageToFrame(nextLanguage);

            const picker = button.closest("[data-language-picker]");
            if (picker) {
                picker.classList.remove("is-open");
                picker.querySelector("[data-language-toggle]")?.setAttribute("aria-expanded", "false");
            }
        });
    }

    const searchInput = document.querySelector("[data-language-search]");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            filterLanguageMenu(searchInput.value);
        });
    }

    document.addEventListener("click", (event) => {
        document.querySelectorAll("[data-language-picker]").forEach((picker) => {
            if (!picker.contains(event.target)) {
                picker.classList.remove("is-open");
                picker.querySelector("[data-language-toggle]")?.setAttribute("aria-expanded", "false");
            }
        });
    });

    const frame = document.querySelector("[data-translatable-frame]");
    if (frame) {
        frame.addEventListener("load", () => {
            applyLanguageToFrame(getSavedLanguage());
            applyThemeToFrame(getSavedTheme());
        });
    }
}

window.EPFTranslations = {
    applyLanguage,
    languages: EPF_TRANSLATIONS
};

window.EPFTheme = {
    applyTheme
};

document.addEventListener("DOMContentLoaded", () => {
    initThemeControls();
    initLanguageControls();
    fitHeroTitle();
});

window.addEventListener("resize", debounce(fitHeroTitle, 120));
if (document.fonts?.ready) document.fonts.ready.then(fitHeroTitle);
