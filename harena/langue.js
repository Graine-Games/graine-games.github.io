// La langue du site. Le français est écrit dans le HTML et lu au chargement ; l'anglais et
// l'espagnol vivent ici, sous les clefs des attributs data-i18n (texte) et data-i18n-alt.
(function () {
  var MAIL = '<a href="mailto:contact.graine.games@gmail.com">contact.graine.games@gmail.com</a>';
  var GOOGLE = '<a href="https://policies.google.com/privacy">policies.google.com/privacy</a>';
  var OFL = 'fonts/OFL.txt';

  var T = {
    en: {
      titre: 'HARENA — Forge Your Glory',
      evitement: 'Skip to content',
      sousTitre: 'Forge Your Glory',
      accroche: 'Found your house, recruit your gladiators and forge your glory in the sand of the colosseum.',
      cta: 'Become a tester',
      mention: 'On Android · in testing',
      epigraphe: 'The crowd roars. Your banner flies above the sand. Your house of gladiators steps into the arena.',
      jeuTitre: 'What awaits you',
      maisonTitre: 'Found your house',
      maisonTexte: 'Pick your name and your province, then design your banner: partitions, colours, emblem. It flies wherever your gladiators fight.',
      routeTitre: 'From Africa to Rome',
      routeTexte: 'Twenty-four provinces around the Mediterranean, from Mauretania all the way to Rome. Every colosseum has its fights, its rival houses and its champion. Earn laurels, beat the champion, open the road.',
      gladiateursTitre: 'Sixty-seven gladiators',
      gladiateursTexte: 'Recruit them, level them up and choose the abilities they bring into battle. Each has a face, a people and a story of their own.',
      cercleTitre: 'Four families, one circle',
      cercleTexte: 'Shield, Blade, Lancer, Pursuit: each family beats another. Read the enemy team, build yours, and turn the fight around.',
      combatTitre: 'Turn-based combat',
      combatTexte: 'Choose every action, manage stamina, set the right gladiator against the right foe. Mistakes cost you, good reads show.',
      libreTitre: 'A game that grows',
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
      pcAucuneTitre: 'No data collected',
      pcAucuneTexte: 'HARENA does not collect, transmit or share any personal data. The game contains no ads, asks for no account and uses no network connection.',
      pcLocalTitre: 'Everything stays on your device',
      pcLocalTexte: 'Your progress and settings are stored only on your device, and uninstalling the game erases them. If Android backup is turned on, the system may keep a copy in your own Google account; the studio never has access to it.',
      pcMailTitre: 'Emails you send us',
      pcMailTexte: 'If you write to the studio, to become a tester or to share your feedback, your address and your message are used only to reply to you and to improve the game. They are never sold or shared.',
      pcPlayTitre: 'Google Play',
      pcPlayTexte: 'The game is distributed through Google Play, which may collect its own data under its privacy policy: ' + GOOGLE + '.',
      pcEnfantsTitre: 'Children',
      pcEnfantsTexte: 'HARENA is not directed at children under 13.',
      pcEvolTitre: 'Changes',
      pcEvolTexte: 'Should a future version ever collect any data, this policy would be updated before its release, along with its date.',
      pcContactTitre: 'A question?',
      pcContactTexte: 'Write to the studio: ' + MAIL + '.',
      editeurTitre: 'Publisher',
      editeurTexte: 'HARENA is published by Graine Games. Contact: ' + MAIL + '.',
      creditsTitre: 'Credits',
      creditsTexte: 'Heading typeface: Cinzel, © The Cinzel Project Authors, under the SIL Open Font License 1.1 (<a href="' + OFL + '">licence text</a>).'
    },
    es: {
      titre: 'HARENA — Forja tu gloria',
      evitement: 'Ir al contenido',
      sousTitre: 'Forja tu gloria',
      accroche: 'Funda tu casa, recluta a tus gladiadores y forja tu gloria en la arena del coliseo.',
      cta: 'Hazte probador',
      mention: 'En Android · en pruebas',
      epigraphe: 'La multitud ruge. Tu estandarte ondea sobre la arena. Tu casa de gladiadores entra en el combate.',
      jeuTitre: 'Lo que te espera',
      maisonTitre: 'Funda tu casa',
      maisonTexte: 'Elige tu nombre y tu provincia, y diseña tu estandarte: particiones, colores, emblema. Ondea allí donde luchan tus gladiadores.',
      routeTitre: 'De África a Roma',
      routeTexte: 'Veinticuatro provincias alrededor del Mediterráneo, de Mauritania hasta Roma. Cada coliseo tiene sus combates, sus casas rivales y su campeón. Gana laureles, vence al campeón, abre el camino.',
      gladiateursTitre: 'Sesenta y siete gladiadores',
      gladiateursTexte: 'Reclútalos, súbelos de nivel y elige las habilidades que llevan al combate. Cada uno tiene su rostro, su pueblo y su historia.',
      cercleTitre: 'Cuatro familias, un círculo',
      cercleTexte: 'Escudo, Hoja, Lancero, Acoso: cada familia domina a otra. Lee al equipo rival, forma el tuyo y dale la vuelta al combate.',
      combatTitre: 'Combate por turnos',
      combatTexte: 'Elige cada acción, administra la resistencia, enfrenta al gladiador adecuado con el rival adecuado. Los errores se pagan, las buenas lecturas se notan.',
      libreTitre: 'Un juego que crece',
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
      pcAucuneTitre: 'Ningún dato recogido',
      pcAucuneTexte: 'HARENA no recoge, transmite ni comparte ningún dato personal. El juego no contiene anuncios, no pide ninguna cuenta y no usa ninguna conexión de red.',
      pcLocalTitre: 'Todo se queda en tu dispositivo',
      pcLocalTexte: 'Tu progreso y tus ajustes se guardan solo en tu dispositivo, y desinstalar el juego los borra. Si la copia de seguridad de Android está activada, el sistema puede guardar una copia en tu propia cuenta de Google; el estudio nunca tiene acceso a ella.',
      pcMailTitre: 'Los correos que nos envías',
      pcMailTexte: 'Si escribes al estudio, para hacerte probador o darnos tu opinión, tu dirección y tu mensaje solo sirven para responderte y mejorar el juego. Nunca se venden ni se comparten.',
      pcPlayTitre: 'Google Play',
      pcPlayTexte: 'El juego se distribuye a través de Google Play, que puede recoger sus propios datos según su política de privacidad: ' + GOOGLE + '.',
      pcEnfantsTitre: 'Menores',
      pcEnfantsTexte: 'HARENA no está dirigido a menores de 13 años.',
      pcEvolTitre: 'Cambios',
      pcEvolTexte: 'Si una versión futura llegara a recoger algún dato, esta política se actualizaría antes de su publicación, junto con su fecha.',
      pcContactTitre: '¿Alguna pregunta?',
      pcContactTexte: 'Escribe al estudio: ' + MAIL + '.',
      editeurTitre: 'Editor',
      editeurTexte: 'HARENA está editado por Graine Games. Contacto: ' + MAIL + '.',
      creditsTitre: 'Créditos',
      creditsTexte: 'Tipografía de los títulos: Cinzel, © The Cinzel Project Authors, bajo licencia SIL Open Font License 1.1 (<a href="' + OFL + '">texto de la licencia</a>).'
    }
  };

  var textes = document.querySelectorAll('[data-i18n]');
  var alts = document.querySelectorAll('[data-i18n-alt]');
  var boutons = document.querySelectorAll('.langues button');
  var fr = {};
  textes.forEach(function (n) { fr[n.dataset.i18n] = n.innerHTML; });
  alts.forEach(function (n) { fr['alt:' + n.dataset.i18nAlt] = n.alt; });

  function pose(langue) {
    var d = T[langue] || {};
    textes.forEach(function (n) { var k = n.dataset.i18n; n.innerHTML = d[k] || fr[k]; });
    alts.forEach(function (n) { var k = n.dataset.i18nAlt; n.alt = d[k] || fr['alt:' + k]; });
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
