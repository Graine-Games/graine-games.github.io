// La langue du site. Le français est écrit dans le HTML et lu au chargement ; l'anglais et
// l'espagnol vivent ici, sous les clefs des attributs data-i18n (texte) et data-i18n-alt.
(function () {
  var MAIL = '<a href="mailto:contact.graine.games@gmail.com">contact.graine.games@gmail.com</a>';
  var GOOGLE = '<a href="https://policies.google.com/privacy">policies.google.com/privacy</a>';
  var OFL = 'fonts/OFL.txt';

  var T = {
    en: {
      titre: 'HARENA',
      evitement: 'Skip to content',
      sousTitre: 'Forge Your Glory',
      accroche: 'Found your house, recruit your gladiators and forge your glory in the sand of the colosseum.',
      cta: 'Become a tester',
      arenaSousTitre: 'GLADIATORS',
      son: 'Arena music',
      mention: 'On Android · in testing',
      epigraphe: '<span class="minium">The crowd roars.</span> Your banner flies above the sand. Your gladiators step into the arena.',
      jeuTitre: 'What awaits you',
      maisonTitre: 'Found your <span class="minium">house</span> of gladiators',
      maisonTexte: 'Choose its name and starting province, and design your own banner: partitions, colours, emblem. It is your own identity you are creating, and it will fly wherever your gladiators fight.',
      routeTitre: 'From Africa to <span class="minium">Rome</span>',
      routeTexte: 'Travel through many provinces around the Mediterranean, from Mauretania all the way to Rome. Each colosseum has its own fights, its rival houses and its champion. Win the crowd’s heart by beating the champion, and open the road to glory.',
      gladiateursTitre: 'Dozens of <span class="minium">gladiators</span> await you',
      gladiateursTexte: 'Recruit them, level them up and choose the abilities that will make them excel in battle. Each has a style, a people and a story of their own.',
      cercleTitre: '<span class="minium">Four</span> kinds of gladiators',
      cercleTexte: 'Shield, Blade, Lancer, Pursuit: each family beats another. Read the enemy team, build yours, and turn the fight in your favour.',
      combatTitre: 'Every turn, <span class="minium">defy</span> the odds',
      combatTexte: 'Choose every action, manage stamina, set the right gladiator against the right foe. A mistake costs you; a good read will fill your purse with gold.',
      libreTitre: 'A game that <span class="minium">grows</span>',
      libreTexte: 'HARENA is in testing and grows with every version, shaped by its testers. Available in English, French and Spanish.',
      galerieTitre: 'Inside the arena',
      capTitre: 'Title screen',
      capEtendard: 'The banner',
      capCampagne: 'The campaign',
      capGladiateur: 'A gladiator',
      capEquipe: 'The team',
      capCombat: 'Combat',
      testeurTitre: 'Become a tester',
      testeurTexte1: 'HARENA is in testing: your feedback shapes what comes next.',
      testeurTexte2: 'To join the testers, simply write to the studio.',
      testeurBouton: 'Write to the studio',
      infos: 'Important information',
      retour: 'Back to HARENA',
      infosTitre: 'Important information — HARENA',
      pcTitre: 'Privacy policy',
      pcDate: 'Last updated: 9 October 2026',
      pcIntro: 'This page explains what personal data HARENA, its testing programme and this website process, why, for how long, and how to exercise your rights. It applies the General Data Protection Regulation (GDPR) and the French Data Protection Act (loi Informatique et Libertés). It exists in French, English and Spanish; if the versions differ, the French version prevails.',
      pcBrefTitre: 'In short',
      pcBrefListe: '<li>The game collects nothing: no account, no ads, no analytics, no network connection.</li><li>If you become a tester, the studio knows your Gmail address and whatever you choose to write to it.</li><li>This website sets no cookies and does not measure its audience.</li><li>Nothing is sold, nothing is used for advertising.</li><li>You can ask at any time to see your data or to have it deleted: ' + MAIL + '.</li>',
      pcRespTitre: 'Who is responsible',
      pcRespTexte: 'HARENA is published by Graine Games, an independent studio run by one person, Bastien Merceron, with no registered legal entity to date, based in France. This person is the controller of your data. For any question about your data: ' + MAIL + '.',
      pcJeuTitre: 'The game: nothing leaves your device',
      pcJeuTexte: 'HARENA works offline. It asks for no account and no sensitive permission, shows no ads and contains no third-party analytics or crash-reporting tool. Your progress and settings are stored only on your device, and uninstalling the game erases them. The studio never receives them.',
      pcSauvegardeTexte: 'If Android backup is turned on on your device, Android may back up the game data to your Google account. This is an encrypted Google feature that you can turn off in your phone settings; the studio has no access to this copy.',
      pcTestTitre: 'Becoming a tester',
      pcTestTexte: 'HARENA is distributed in testing on Google Play (internal testing and closed testing). To take part, you give your Gmail address: the studio adds it to the testers list in the Google Play Console, or approves your request to join the Google group harena-testers@googlegroups.com. Without this address, Google Play cannot give you access to the test.',
      pcConsoleTexte: 'In the Play Console, the studio also sees aggregated install statistics, anonymised crash reports (Android vitals) and the feedback you choose to send through Google Play. These statistics and reports do not allow it to identify you.',
      pcMailTitre: 'Emails you send to the studio',
      pcMailTexte: 'If you write to the studio, to become a tester, ask a question or share your feedback, it receives your address, the name shown by your email service and your message. It uses them to reply to you and to improve the game. Your feedback may be noted in the studio’s working documents in pseudonymised form: an initial or a nickname, never your address.',
      pcSiteTitre: 'This website',
      pcSiteTexte: 'This website is static: no cookies, no analytics, no forms, and no font or script loaded from a third-party service. When you choose a language, that choice is remembered in your browser’s local storage, on your device only: it is sent to no one, and you can erase it by clearing this site’s data in your browser. This storage only serves to display the language you asked for; it is therefore exempt from consent (article 82 of the French Data Protection Act).',
      pcHebergeurTexte: 'The website is hosted by GitHub Pages. Like any host, GitHub receives visitors’ IP addresses and may log them, in particular for security; the studio has no access to these logs. GitHub processes them under its own privacy statement: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">docs.github.com</a>.',
      pcBasesTitre: 'Why, and on what legal basis',
      pcBasesIntro: 'Any processing of data must rest on one of the legal bases in article 6 of the GDPR. These are the studio’s:',
      pcBasesListe: '<li><strong>Managing your participation in the test</strong> (your Gmail address in the testers list or the group): carrying out your request to take part (article 6(1)(b)). You are the one asking to test, and access cannot be given to you without your address.</li><li><strong>Replying to you</strong>: the studio’s legitimate interest in replying to people who write to it (article 6(1)(f)), which is what you expect when you write.</li><li><strong>Improving the game</strong> from your feedback and from Play Console statistics: the studio’s legitimate interest in fixing and improving its game (article 6(1)(f)). It is limited to what you choose to send and to aggregated data, your feedback is noted under a pseudonym, and you can object at any time.</li><li><strong>Protecting the website</strong> (GitHub logs): legitimate interest in protecting the website against abuse (article 6(1)(f)); GitHub carries out this processing on its own behalf.</li>',
      pcBasesFin: 'No processing relies on your consent today. The studio makes no automated decision about you, does no profiling, sells no data and does not use it for advertising.',
      pcDestTitre: 'Who can see your data',
      pcDestIntro: 'Within the studio, only the person running it has access. Outside the studio, your data goes through these services, each subject to its own terms and its own privacy policy:',
      pcDestListe: '<li><strong>Google</strong> (Google Ireland Limited for European users, and Google LLC): Google Play and its Play Console, Google Groups, and Gmail, which hosts the studio’s mailbox. For Google Play and Google Groups, Google acts as the controller of its own processing. Its policy: ' + GOOGLE + '.</li><li><strong>GitHub</strong> (GitHub, Inc.), host of this website, controller of its own logs.</li>',
      pcDestFin: 'The studio passes your data to no one else, except where required by law, for example at the request of a judicial authority.',
      pcTransfertsTitre: 'Transfers outside the European Union',
      pcTransfertsTexte: 'Google and GitHub may process this data in the United States. These transfers rely on the European Commission’s adequacy decision of 10 July 2023 on the EU–US Data Privacy Framework, under which Google LLC and GitHub, Inc. are certified, and, where applicable, on the standard contractual clauses adopted by the European Commission.',
      pcDureesTitre: 'How long',
      pcDureesListe: '<li><strong>Your tester address</strong>: as long as you take part in the test. It is removed from the testers list and the group no later than one month after you ask to leave, and no later than three months after the testing programme ends.</li><li><strong>Your emails</strong>: three years after your last exchange with the studio, then deleted.</li><li><strong>Your feedback noted under a pseudonym</strong>: as long as it serves the game’s development; you can ask at any time for it to be removed.</li><li><strong>Play Console statistics and reports</strong>: kept by Google under its own rules.</li><li><strong>Your language on this website</strong>: until you clear this site’s data in your browser.</li><li><strong>GitHub logs</strong>: as set out in GitHub’s privacy statement.</li>',
      pcDroitsTitre: 'Your rights',
      pcDroitsTexte: 'Regarding your data, you have the right of access, rectification, erasure, restriction of processing, portability in the cases provided for by the GDPR, and objection, in particular to processing based on legitimate interest. Where processing relies on your consent, you can withdraw it at any time. You can also set instructions on what happens to your data after your death (article 85 of the French Data Protection Act).',
      pcExercerTexte: 'To exercise these rights, write to ’ + MAIL + ’. It is free. The studio replies within one month; for a complex request this period may be extended by two months, in which case it tells you within the first month. It only asks you to prove your identity if there is reasonable doubt. For data that Google or GitHub process on their own behalf, contact them directly.',
      pcQuitterTexte: 'You can also leave the test yourself, from the test participation page on Google Play or by leaving the Google group.',
      pcCnilTitre: 'Complaints',
      pcCnilTexte: 'You can lodge a complaint at any time with the French data protection authority, the Commission nationale de l’informatique et des libertés (CNIL): <a href="https://www.cnil.fr">www.cnil.fr</a>, or with the data protection authority of the European Union country where you live.',
      pcEnfantsTitre: 'Minors',
      pcEnfantsTexte: 'HARENA is not directed at children under 13. In France, a minor can only consent alone to the processing of their data by an online service from the age of 15: if you are under 15, only ask to become a tester with the agreement of a holder of parental authority, usually a parent, who can write to the studio with you. If the studio learns that it holds the data of a child under 13, or of a minor under 15 without that agreement, it deletes it.',
      pcSecuriteTitre: 'Security',
      pcSecuriteTexte: 'The studio keeps as little data as possible and gives no one else access to it. Addresses and messages stay in its Google accounts, protected by 2-Step Verification.',
      pcEvolTitre: 'What will change',
      pcEvolTexte: 'HARENA is growing. Upcoming versions will bring a player account, friends, player-versus-player fights and the collection of game data (how fights unfold, how the app is used) to balance and improve the game. Before each of them ships, this policy will be updated to state exactly what is collected, why, on what legal basis, how long it is kept, who receives it and how to have it deleted. The release notes will announce it, HARENA’s “Data safety” section on Google Play will be updated at the same time, and nothing will be collected without you being informed.',
      pcMajTexte: 'Each update of this policy is dated at the top of the page. The previous version is sent to you on request.',
      mlTitre: 'Legal notice',
      mlIntro: 'Pursuant to French law no. 2004-575 of 21 June 2004 on confidence in the digital economy (LCEN):',
      editeurTitre: 'Publisher',
      editeurTexte: 'Graine Games, an independent studio run by one person, Bastien Merceron, with no registered legal entity to date  (no SIREN number), publishing on a non-professional basis: in accordance with the French law on confidence in the digital economy, his personal contact details have been provided to the host, France. Contact: ' + MAIL + '.',
      mlDirTitre: 'Publication director',
      mlDirTexte: 'Bastien Merceron. Contact: ' + MAIL + '.',
      mlHebTitre: 'Host',
      mlHebTexte: 'GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States<!-- A COMPLETER PAR LE PORTEUR : telephone de l’hebergeur -->. Website: <a href="https://github.com">github.com</a>.',
      creditsTitre: 'Credits',
      creditsTexte: 'Heading typeface: Cinzel, © The Cinzel Project Authors, under the SIL Open Font License 1.1 (<a href="' + OFL + '">licence text</a>). The Android robot is reproduced or modified from work created and shared by Google and used according to terms described in the Creative Commons 3.0 Attribution License. Music: composed for HARENA, © Graine Games.',
    },
    es: {
      titre: 'HARENA',
      evitement: 'Ir al contenido',
      sousTitre: 'Forja tu gloria',
      accroche: 'Funda tu casa, recluta a tus gladiadores y forja tu gloria en la arena del coliseo.',
      cta: 'Hazte probador',
      arenaSousTitre: 'GLADIADORES',
      son: 'Música de la arena',
      mention: 'En Android · en pruebas',
      epigraphe: '<span class="minium">La multitud ruge.</span> Tu estandarte ondea sobre la arena. Tus gladiadores entran en la arena.',
      jeuTitre: 'Lo que te espera',
      maisonTitre: 'Funda tu <span class="minium">casa</span> de gladiadores',
      maisonTexte: 'Elige su nombre, su provincia de origen y diseña tu propio estandarte: particiones, colores, emblema. Es tu propia identidad la que creas, y ondeará allí donde luchen tus gladiadores.',
      routeTitre: 'De África a <span class="minium">Roma</span>',
      routeTexte: 'Recorre numerosas provincias alrededor del Mediterráneo, de Mauritania hasta Roma. Cada coliseo tiene sus propios combates, sus casas rivales y su campeón. Gánate el corazón del público venciendo al campeón y abre el camino hacia la gloria.',
      gladiateursTitre: 'Decenas de <span class="minium">gladiadores</span> te esperan',
      gladiateursTexte: 'Reclútalos, súbelos de nivel y elige las habilidades que los harán brillar en combate. Cada uno tiene su estilo, su pueblo y su historia.',
      cercleTitre: '<span class="minium">Cuatro</span> tipos de gladiadores',
      cercleTexte: 'Escudo, Hoja, Lancero, Acoso: cada familia domina a otra. Lee al equipo rival, forma el tuyo y dale la vuelta al combate a tu favor.',
      combatTitre: 'En cada turno, <span class="minium">desafía</span> las certezas',
      combatTexte: 'Elige cada acción, administra la resistencia, enfrenta al gladiador adecuado con el rival adecuado. Un error se paga; una buena lectura llenará tu bolsa de oro.',
      libreTitre: 'Un juego que <span class="minium">crece</span>',
      libreTexte: 'HARENA está en pruebas y crece con cada versión, guiado por sus testers. Disponible en español, francés e inglés.',
      galerieTitre: 'En la arena',
      capTitre: 'Pantalla de título',
      capEtendard: 'El estandarte',
      capCampagne: 'La campaña',
      capGladiateur: 'Un gladiador',
      capEquipe: 'El equipo',
      capCombat: 'El combate',
      testeurTitre: 'Hazte probador',
      testeurTexte1: 'HARENA está en pruebas: tu opinión da forma a lo que viene.',
      testeurTexte2: 'Para unirte a los probadores, escribe al estudio.',
      testeurBouton: 'Escribir al estudio',
      infos: 'Información importante',
      retour: 'Volver a HARENA',
      infosTitre: 'Información importante — HARENA',
      pcTitre: 'Política de privacidad',
      pcDate: 'Última actualización: 9 de octubre de 2026',
      pcIntro: 'Esta página explica qué datos personales tratan HARENA, su programa de pruebas y este sitio, por qué, durante cuánto tiempo y cómo ejercer tus derechos. Aplica el Reglamento General de Protección de Datos (RGPD) y la ley francesa de protección de datos (loi Informatique et Libertés). Existe en francés, inglés y español; en caso de diferencia, prevalece la versión francesa.',
      pcBrefTitre: 'En resumen',
      pcBrefListe: '<li>El juego no recoge nada: ninguna cuenta, ningún anuncio, ninguna medición de audiencia, ninguna conexión de red.</li><li>Si te haces probador, el estudio conoce tu dirección de Gmail y lo que decidas escribirle.</li><li>Este sitio no instala ninguna cookie y no mide su audiencia.</li><li>No se vende nada, nada se usa para publicidad.</li><li>Puedes pedir en cualquier momento ver tus datos o que se supriman: ' + MAIL + '.</li>',
      pcRespTitre: 'Quién es el responsable',
      pcRespTexte: 'HARENA está editado por Graine Games, un estudio independiente dirigido por una sola persona, Bastien Merceron, sin estructura jurídica declarada hasta la fecha, establecido en Francia. Esta persona es la responsable del tratamiento de tus datos. Para cualquier pregunta sobre tus datos: ' + MAIL + '.',
      pcJeuTitre: 'El juego: nada sale de tu dispositivo',
      pcJeuTexte: 'HARENA funciona sin conexión. No pide ninguna cuenta ni ningún permiso sensible, no muestra anuncios y no contiene ninguna herramienta de terceros de medición de audiencia ni de informes de fallos. Tu progreso y tus ajustes se guardan solo en tu dispositivo, y desinstalar el juego los borra. El estudio nunca los recibe.',
      pcSauvegardeTexte: 'Si la copia de seguridad de Android está activada en tu dispositivo, Android puede guardar los datos del juego en tu cuenta de Google. Es una función de Google, cifrada, que puedes desactivar en los ajustes de tu teléfono; el estudio no tiene ningún acceso a esa copia.',
      pcTestTitre: 'Hacerse probador',
      pcTestTexte: 'HARENA se distribuye en pruebas en Google Play (prueba interna y prueba cerrada). Para participar, das tu dirección de Gmail: el estudio la añade a la lista de probadores en Google Play Console, o acepta tu solicitud para unirte al grupo de Google harena-testers@googlegroups.com. Sin esta dirección, Google Play no puede darte acceso a la prueba.',
      pcConsoleTexte: 'En Play Console, el estudio ve también estadísticas de instalación agregadas, informes de fallos anonimizados (Android vitals) y los comentarios que decidas enviar a través de Google Play. Estas estadísticas e informes no le permiten identificarte.',
      pcMailTitre: 'Los correos que envías al estudio',
      pcMailTexte: 'Si escribes al estudio, para hacerte probador, hacer una pregunta o darle tu opinión, recibe tu dirección, el nombre que muestra tu servicio de correo y tu mensaje. Los usa para responderte y para mejorar el juego. Tus comentarios pueden anotarse en los documentos de trabajo del estudio de forma seudonimizada: una inicial o un apodo, nunca tu dirección.',
      pcSiteTitre: 'Este sitio',
      pcSiteTexte: 'Este sitio es estático: ninguna cookie, ninguna medición de audiencia, ningún formulario, y ninguna fuente ni ningún script cargado desde un servicio de terceros. Cuando eliges un idioma, esa elección se guarda en el almacenamiento local de tu navegador, solo en tu dispositivo: no se transmite a nadie, y puedes borrarla eliminando los datos del sitio en tu navegador. Este almacenamiento solo sirve para mostrar el idioma que has pedido; por eso está exento de consentimiento (artículo 82 de la ley francesa de protección de datos).',
      pcHebergeurTexte: 'El sitio está alojado en GitHub Pages. Como cualquier proveedor de alojamiento, GitHub recibe la dirección IP de los visitantes y puede registrarla, en particular por seguridad; el estudio no tiene acceso a esos registros. GitHub los trata según su propia declaración de privacidad: <a href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement">docs.github.com</a>.',
      pcBasesTitre: 'Por qué, y con qué base jurídica',
      pcBasesIntro: 'Todo tratamiento de datos debe basarse en una de las bases jurídicas del artículo 6 del RGPD. Estas son las del estudio:',
      pcBasesListe: '<li><strong>Gestionar tu participación en la prueba</strong> (tu dirección de Gmail en la lista de probadores o en el grupo): ejecución de tu solicitud de participación (artículo 6.1.b). Eres tú quien pide probar, y no se te puede dar acceso sin tu dirección.</li><li><strong>Responderte</strong>: interés legítimo del estudio en responder a las personas que le escriben (artículo 6.1.f), que es lo que esperas al escribirle.</li><li><strong>Mejorar el juego</strong> a partir de tus comentarios y de las estadísticas de Play Console: interés legítimo del estudio en corregir y mejorar su juego (artículo 6.1.f). Se limita a lo que decides enviar y a datos agregados, tus comentarios se anotan con seudónimo, y puedes oponerte en cualquier momento.</li><li><strong>Proteger el sitio</strong> (registros de GitHub): interés legítimo en proteger el sitio contra abusos (artículo 6.1.f); GitHub realiza este tratamiento por cuenta propia.</li>',
      pcBasesFin: 'Hoy ningún tratamiento se basa en tu consentimiento. El estudio no toma ninguna decisión automatizada sobre ti, no elabora perfiles, no vende ningún dato y no los usa para publicidad.',
      pcDestTitre: 'Quién puede ver tus datos',
      pcDestIntro: 'En el estudio, solo su responsable tiene acceso. Fuera del estudio, tus datos pasan por estos servicios, cada uno sujeto a sus propias condiciones y a su propia política de privacidad:',
      pcDestListe: '<li><strong>Google</strong> (Google Ireland Limited para los usuarios europeos, y Google LLC): Google Play y su Play Console, Grupos de Google, y Gmail, que aloja el correo del estudio. Para Google Play y Grupos de Google, Google actúa como responsable de sus propios tratamientos. Su política: ' + GOOGLE + '.</li><li><strong>GitHub</strong> (GitHub, Inc.), proveedor de alojamiento de este sitio, responsable de sus propios registros.</li>',
      pcDestFin: 'El estudio no transmite tus datos a nadie más, salvo obligación legal, por ejemplo a requerimiento de una autoridad judicial.',
      pcTransfertsTitre: 'Transferencias fuera de la Unión Europea',
      pcTransfertsTexte: 'Google y GitHub pueden tratar estos datos en Estados Unidos. Estas transferencias se basan en la decisión de adecuación de la Comisión Europea de 10 de julio de 2023 relativa al Marco de Privacidad de Datos UE-EE. UU. (Data Privacy Framework), en el que Google LLC y GitHub, Inc. están certificadas, y, en su caso, en las cláusulas contractuales tipo adoptadas por la Comisión Europea.',
      pcDureesTitre: 'Durante cuánto tiempo',
      pcDureesListe: '<li><strong>Tu dirección de probador</strong>: mientras participes en la prueba. Se retira de la lista de probadores y del grupo como máximo un mes después de que pidas salir, y como máximo tres meses después del fin del programa de pruebas.</li><li><strong>Tus correos</strong>: tres años después de tu último intercambio con el estudio; después se suprimen.</li><li><strong>Tus comentarios anotados con seudónimo</strong>: mientras sirvan al desarrollo del juego; puedes pedir en cualquier momento que se retiren.</li><li><strong>Estadísticas e informes de Play Console</strong>: conservados por Google según sus propias normas.</li><li><strong>Tu idioma en este sitio</strong>: hasta que borres los datos del sitio en tu navegador.</li><li><strong>Registros de GitHub</strong>: según la declaración de privacidad de GitHub.</li>',
      pcDroitsTitre: 'Tus derechos',
      pcDroitsTexte: 'Sobre tus datos, tienes derecho de acceso, rectificación, supresión, limitación del tratamiento, portabilidad en los casos previstos por el RGPD, y oposición, en particular a los tratamientos basados en el interés legítimo. Cuando un tratamiento se basa en tu consentimiento, puedes retirarlo en cualquier momento. También puedes dar instrucciones sobre el destino de tus datos después de tu muerte (artículo 85 de la ley francesa de protección de datos).',
      pcExercerTexte: 'Para ejercer estos derechos, escribe a ’ + MAIL + ’. Es gratuito. El estudio te responde en el plazo de un mes; para una solicitud compleja, este plazo puede prorrogarse dos meses, y en ese caso te avisa dentro del primer mes. Solo te pide acreditar tu identidad si hay una duda razonable. Para los datos que Google o GitHub tratan por cuenta propia, dirígete directamente a ellos.',
      pcQuitterTexte: 'También puedes salir de la prueba por tu cuenta, desde la página de participación en la prueba de Google Play o abandonando el grupo de Google.',
      pcCnilTitre: 'Reclamaciones',
      pcCnilTexte: 'Puedes presentar en cualquier momento una reclamación ante la autoridad francesa de protección de datos, la Commission nationale de l’informatique et des libertés (CNIL): <a href="https://www.cnil.fr">www.cnil.fr</a>, o ante la autoridad de protección de datos del país de la Unión Europea en el que residas.',
      pcEnfantsTitre: 'Menores',
      pcEnfantsTexte: 'HARENA no está dirigido a menores de 13 años. En Francia, un menor solo puede consentir por sí solo el tratamiento de sus datos por un servicio en línea a partir de los 15 años: si tienes menos de 15 años, pide hacerte probador solo con el acuerdo de un titular de la patria potestad, normalmente uno de tus padres, que puede escribir al estudio contigo. Si el estudio descubre que tiene datos de un menor de 13 años, o de un menor de 15 años sin ese acuerdo, los suprime.',
      pcSecuriteTitre: 'Seguridad',
      pcSecuriteTexte: 'El estudio guarda los menos datos posibles y no da acceso a ellos a nadie más. Las direcciones y los mensajes se quedan en sus cuentas de Google, protegidas por la verificación en dos pasos.',
      pcEvolTitre: 'Lo que va a cambiar',
      pcEvolTexte: 'HARENA crece. Las próximas versiones traerán una cuenta de jugador, amigos, combates entre jugadores y la recogida de datos de juego (desarrollo de los combates, uso de la aplicación) para equilibrar y mejorar el juego. Antes de la salida de cada una, esta política se actualizará para decir con precisión qué se recoge, por qué, con qué base jurídica, cuánto tiempo se conserva, quién lo recibe y cómo pedir su supresión. Las notas de versión lo anunciarán, la sección «Seguridad de los datos» de HARENA en Google Play se actualizará al mismo tiempo, y no se recogerá nada sin que estés informado.',
      pcMajTexte: 'Cada actualización de esta política lleva su fecha en la parte superior de la página. La versión anterior se te envía si la pides.',
      mlTitre: 'Aviso legal',
      mlIntro: 'En aplicación de la ley francesa n.º 2004-575, de 21 de junio de 2004, para la confianza en la economía digital (LCEN):',
      editeurTitre: 'Editor',
      editeurTexte: 'Graine Games, estudio independiente dirigido por una sola persona, Bastien Merceron, sin estructura jurídica declarada hasta la fecha  (sin número SIREN), editor a título no profesional: conforme a la ley francesa para la confianza en la economía digital, sus datos personales se han comunicado al proveedor de alojamiento, Francia. Contacto: ' + MAIL + '.',
      mlDirTitre: 'Director de la publicación',
      mlDirTexte: 'Bastien Merceron. Contacto: ' + MAIL + '.',
      mlHebTitre: 'Alojamiento',
      mlHebTexte: 'GitHub Pages, servicio de GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Estados Unidos<!-- A COMPLETER PAR LE PORTEUR : telephone de l’hebergeur -->. Sitio: <a href="https://github.com">github.com</a>.',
      creditsTitre: 'Créditos',
      creditsTexte: 'Tipografía de los títulos: Cinzel, © The Cinzel Project Authors, bajo licencia SIL Open Font License 1.1 (<a href="' + OFL + '">texto de la licencia</a>). El robot de Android se reproduce o modifica a partir de una obra creada y compartida por Google, y se usa según los términos de la licencia Creative Commons Atribución 3.0. Música: compuesta para HARENA, © Graine Games.',
    }
  };

  var textes = document.querySelectorAll('[data-i18n]');
  var alts = document.querySelectorAll('[data-i18n-alt]');
  var arias = document.querySelectorAll('[data-i18n-aria]');
  var boutons = document.querySelectorAll('.langues button');
  var fr = {};
  textes.forEach(function (n) { fr[n.dataset.i18n] = n.innerHTML; });
  alts.forEach(function (n) { fr['alt:' + n.dataset.i18nAlt] = n.alt; });
  arias.forEach(function (n) { fr['aria:' + n.dataset.i18nAria] = n.getAttribute('aria-label'); });

  function pose(langue) {
    var d = T[langue] || {};
    textes.forEach(function (n) { var k = n.dataset.i18n; n.innerHTML = d[k] || fr[k]; });
    alts.forEach(function (n) { var k = n.dataset.i18nAlt; n.alt = d[k] || fr['alt:' + k]; });
    arias.forEach(function (n) { var k = n.dataset.i18nAria; n.setAttribute('aria-label', d[k] || fr['aria:' + k]); });
    boutons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === langue)); });
    document.documentElement.lang = langue;
  }

  var langue = null;
  try { langue = localStorage.getItem('langue'); } catch (e) {}
  if (!/^(fr|en|es)$/.test(langue || '')) {
    langue = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    if (!/^(en|es)$/.test(langue)) langue = 'fr';
  }
  if (langue !== 'fr') pose(langue);

  boutons.forEach(function (b) {
    b.addEventListener('click', function () {
      pose(b.dataset.lang);
      try { localStorage.setItem('langue', b.dataset.lang); } catch (e) {}
    });
  });
})();
