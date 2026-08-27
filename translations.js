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
        heroTitle: 'UNITED WE <span>BARGAIN.</span><br>DIVIDED WE <span>BEG.</span>',
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
        heroTitle: 'VEREINT <span>HANDELN WIR.</span><br>GETRENNT <span>BETTELN WIR.</span>',
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
        heroTitle: 'UNIDOS <span>NEGOCIAMOS.</span><br> DIVIDIDOS <span> SUPLICAMOS.</span>',
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
        heroTitle: 'ENSEMBLE ON <span>TIENS TÊTE.</span><br>DIVISE ON <span>SUPPLIE.</span>',
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
        heroTitle: 'UNITI <span>TRATTIAMO.</span><br>DIVISI <span>ELEMOSINIAMO.</span>',
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
        heroTitle: 'ZJEDNOCZENI <span>NEGOCJUJEMY.</span><br>PODZIELENI <span>PROSIMY.</span>',
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
        heroTitle: 'ЕДИНЫ МЫ <span>ДИКТУЕМ УСЛОВИЯ.</span><br>РАЗЪЕДИНЕНЫ МЫ <span>МОЛИМ О ПОЩАДЕ.</span>',
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
        heroTitle: 'З\'ЄДНАНИМИ МИ <span>ДОМОВЛЯЄМОСЯ.</span><br>РОЗДІЛЕНИМИ — <span>БЛАГАЄМО.</span>',
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
        heroTitle: 'Обединени <span>преговаряме.</span><br>Разделени <span>се молим.</span>',
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
        heroTitle: 'JUNTOS <span> NEGOCIAMOS.</span><br>DIVIDIDOS <span>IMPLORAMOS.</span>',
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
        heroTitle: 'ZAJEDNO <span>ZAHTJEVAMO.</span><br>ODVOJENI <span>PREKLINJEMO.</span>',
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
        heroTitle: 'VERENIGD <span>ONDERHANDELEN.</span><br>VERDEELD <span>SMEKEN.</span>',
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
        heroTitle: 'ÜHESKOOS ME <span>TEHIME.</span><br>JAGATUNA ME <span>ANUME.</span>',
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

// Makes the hero title the largest possible size while keeping the text exactly two lines.
function fitHeroTitle() {
    const title = document.querySelector(".hero-title");
    if (!title) return;

    title.style.whiteSpace = "normal";
    title.style.overflowWrap = "normal";
    title.style.wordBreak = "keep-all";
    title.style.display = "inline-block";
    title.style.maxWidth = "100%";

    const targetLines = 2;
    const availableWidth = title.parentElement?.clientWidth || title.getBoundingClientRect().width;
    if (!availableWidth) return;

    let low = 24;
    let high = 120;
    let best = low;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        title.style.fontSize = `${mid}px`;

        const computed = window.getComputedStyle(title);
        const lineHeightValue = parseFloat(computed.lineHeight);
        const lineHeight = computed.lineHeight.includes("px")
            ? lineHeightValue
            : lineHeightValue * mid;

        const height = title.getBoundingClientRect().height;
        const currentLines = Math.round(height / lineHeight);

        if (currentLines <= targetLines) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    title.style.fontSize = `${best}px`;
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
