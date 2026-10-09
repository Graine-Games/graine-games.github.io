// L'en-tete du site : l'ecran titre de HARENA, vivant, sur toute la largeur.
// Portage de harena/docs/maquettes/lancement.html (l'ecran titre valide par le porteur) : memes calques,
// memes couleurs, memes mouvements, meme graine. Le prototype est fige en 360 x 780 ; ici la scene prend la
// forme de l'en-tete. Sa hauteur logique HL vaut 780, ou davantage quand l'accroche et le bouton demandent
// du sable sous la porte ; sa largeur logique L = HL x largeur / hauteur (au moins 360). La porte, le
// guerrier et la plaque restent au centre (L / 2) ; les gradins, la foule, le sable et le ciel se prolongent
// sur les cotes : l'arene vue plus large, jamais une image etiree ni recadree.
// Le titre HARENA est du SVG fixe dans index.html (lisible sans script) ; ce fichier n'anime que son eclat.
(function () {
  'use strict';
  const entete = document.querySelector('.entete');
  const scene = entete && entete.querySelector('.arene');
  const accroche = entete && entete.querySelector('.appel .accroche');
  if (!scene || !accroche || !window.Path2D) return;

  const DEVISE = 'MORITVRI · TE · SALVTANT';   // gravure romaine, V pour U, points medians (ADR 021)
  const DECALE = 45;                           // le decor descend de 45 : un ciel degage autour du titre
  const SOUS_LA_PORTE = 618 + DECALE + 40;     // le pied de la porte, et l'air laisse avant l'accroche
  const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lisse = (a, b, x) => { const u = clamp((x - a) / (b - a)); return u * u * (3 - 2 * u); };
  let graine = 1;
  const alea = () => (graine = (graine * 16807) % 2147483647) / 2147483647;
  const melanger = (h, k, f) => { const a = parseInt(h.slice(1), 16), b = parseInt(k.slice(1), 16); return '#' + [16, 8, 0].map(s => Math.round(((a >> s) & 255) * (1 - f) + ((b >> s) & 255) * f).toString(16).padStart(2, '0')).join(''); };
  const arrondi = Path2D.prototype.roundRect ? (c, x, y, w, h, r) => c.roundRect(x, y, w, h, r) : (c, x, y, w, h) => c.rect(x, y, w, h);
  const HAUT = { attique: [236, 30], summa: [274, 28], mur1: [333, 22], media: [341, 21], mur2: [403, 16], ima: [412, 15], parapet: [463, 12], podium: [475, 11] };

  // ---------------------------------------------------------------- le guerrier dans la porte
  // Une ombre d'homme, de face, a contre-jour : un seul contour en courbes. Les pieds a l'origine, 150 unites
  // jusqu'au sommet du casque. La moitie droite est decrite ; la gauche en est le miroir, parcourue a rebours.
  const C = (c1x, c1y, c2x, c2y, x, y) => ({ c1: [c1x, c1y], c2: [c2x, c2y], p: [x, y] });
  const Lg = (x, y) => ({ p: [x, y] });
  const DEPART = [0, -160.6];
  const DROITE = [
    C(1.1, -160.9, 2.3, -160.5, 2.5, -159), C(2.3, -155, 1.6, -150.8, 1.2, -147.5), C(5.6, -147.6, 8.6, -145, 8.7, -140),
    C(8.8, -136, 8.6, -132, 8.2, -128.6), C(8, -127, 7.6, -126, 7, -125.4), C(6.8, -125, 6.6, -124.6, 6.8, -124),
    C(10.6, -123.6, 14.8, -123, 18, -121.2), C(22.4, -120.2, 25, -116.6, 24.6, -111.8),
    C(27, -110, 29, -106, 28.8, -101.4), C(28.6, -97.8, 28.2, -95, 28.6, -91.2),
    C(29.2, -88, 30.6, -85.8, 31, -82.6), C(31.4, -79, 30.4, -74.6, 29.6, -71),
    C(31.4, -70, 31.8, -66, 30.6, -63), C(29.6, -60.8, 26.4, -60.9, 25.4, -63), C(24.7, -64.8, 24.6, -67.8, 24.6, -70.4),
    C(24, -74.2, 22.6, -78.6, 22.7, -83), C(22.8, -86.2, 22.8, -88.6, 22.3, -90.8),
    C(21.4, -94.4, 20.2, -98.2, 20.4, -101.6), C(20.5, -104, 20.2, -105.8, 19.4, -106.8),
    C(19.2, -102.6, 18.4, -98.4, 16.8, -94.4), C(15, -90.6, 13.4, -88.6, 13.2, -86.4),
    C(15.2, -83.6, 16.4, -80.4, 17.2, -77), C(18.2, -72, 19.2, -68, 19.6, -63.8),
    Lg(17.2, -62.4), Lg(16.8, -64.4), Lg(14, -62.8), Lg(13.7, -64.6), Lg(10.6, -63.1), Lg(10.3, -64.8), Lg(7.2, -63.4), Lg(17.2, -62.6),
    C(20.2, -57, 20.8, -49, 19, -43), C(18.2, -40.4, 17, -39, 17, -37), C(17, -35.6, 16.8, -34.6, 17, -33.4),
    C(19.8, -29, 20.2, -21, 18, -15.4), C(17, -11.6, 16.2, -8.6, 16.4, -5.8), C(19.8, -4.6, 21.2, -1.8, 20.6, 0), Lg(11, 0),
    C(10.9, -2.5, 11.6, -4.5, 12.1, -6.2), C(11.4, -10.6, 9.6, -17.6, 9.8, -25),
    C(9.9, -29.6, 11.4, -32.6, 11.2, -35.4), C(11, -38, 10.6, -40, 10.2, -42.4),
    C(9.2, -48.6, 7.6, -55, 6.4, -58.8), C(5.8, -61, 5.3, -62.2, 5, -63.2), Lg(3, -62.6), Lg(2.8, -64.4), Lg(0, -62.2)];
  const SOUFFLE = 4.4;                                                // les epaules montent de 4,4 unites
  const f2 = q => `${q[0].toFixed(2)} ${q[1].toFixed(2)}`;
  const respirer = (q, b) => {                                        // la cage se souleve, la tete suit a 27 %
    const [x, y] = q;
    if (y > -64) return q;
    if (Math.abs(x) > 19.5 && y > -112) return [x + Math.sign(x) * .3 * b, y - SOUFFLE * .9 * b];
    const w = y < -124 ? .27 : y < -112 ? .27 + .73 * lisse(-124, -115, y) : lisse(-64, -112, y);
    return [x * (1 + .028 * b * Math.exp(-(((y + 100) / 16) ** 2))), y - SOUFFLE * w * b];
  };
  const posture = ([x, y]) => {                                       // bras pres du corps, pieds a largeur d'epaules
    if (Math.abs(x) > 19.5 && y > -112 && y < -58) return [x - Math.sign(x) * 2 * lisse(-108, -88, y), y];
    if (y > -62) return [x - Math.sign(x) * 3.4 * lisse(-62, -2, y), y];
    return [x, y];
  };
  const appui = ([x, y]) => {                                         // la hanche d'appui, apres le miroir
    let dx = 0, dy = 0;
    const bassin = y > -95 ? (y < -62 ? lisse(-95, -75, y) : 1 - lisse(-62, -4, y)) : 0;
    dy += 1.5 * clamp(x / 18, -1, 1) * bassin;
    if (Math.abs(x) > 19.5 && y > -112 && y < -55) dy -= .7 * Math.sign(x);
    else if (y < -95 && y > -124) dy -= .7 * clamp(x / 24, -1, 1) * lisse(-95, -110, y);
    if (x > 0 && y > -52 && y < -18) { const k = Math.exp(-(((y + 36) / 9) ** 2)); dx -= 1.3 * k; dy += .5 * k; }
    return [x + dx, y + dy];
  };
  const contour = b => {
    const Dr = q => appui(respirer(posture(q), b)), Ga = q => { const r = respirer(posture(q), b); return appui([-r[0], r[1]]); };
    let d = `M${f2(Dr(DEPART))}`;
    for (const s of DROITE) d += s.c1 ? ` C${f2(Dr(s.c1))} ${f2(Dr(s.c2))} ${f2(Dr(s.p))}` : ` L${f2(Dr(s.p))}`;
    for (let i = DROITE.length - 1; i >= 0; i--) {
      const s = DROITE[i], avant = i ? DROITE[i - 1].p : DEPART;
      d += s.c1 ? ` C${f2(Ga(s.c2))} ${f2(Ga(s.c1))} ${f2(Ga(avant))}` : ` L${f2(Ga(avant))}`;
    }
    return d + 'Z';
  };
  // les lames : de sous le poing, vers le bas et un peu en dehors
  const LB = [25.8, -61.2], LT = [33.2, -23], L0 = Math.hypot(LT[0] - LB[0], LT[1] - LB[1]);
  const LU = [(LT[0] - LB[0]) / L0, (LT[1] - LB[1]) / L0], LN = [-LU[1], LU[0]];
  const lp = (k, l) => `${(LB[0] + LN[0] * k + LU[0] * l).toFixed(2)} ${(LB[1] + LN[1] * k + LU[1] * l).toFixed(2)}`;
  const EPEE = `<path d="M${lp(4.6, -.6)} L${lp(-4.6, -.6)} L${lp(-4.2, 1.1)} L${lp(4.2, 1.1)}Z" fill="#1d140d"/>
    <path d="M${lp(1.7, 1)} L${lp(1.35, L0 * .8)} L${LT[0]} ${LT[1]} L${lp(-1.35, L0 * .8)} L${lp(-1.7, 1)}Z" fill="url(#gLame)"/>
    <path d="M${lp(-1.7, 1)} L${lp(-1.35, L0 * .8)} L${LT[0]} ${LT[1]}" fill="none" stroke="#ffe0a8" stroke-width=".45" opacity=".75"/>
    <path d="M${lp(1.7, 1)} L${lp(1.35, L0 * .8)}" fill="none" stroke="#ffe0a8" stroke-width=".3" opacity=".3"/>`;
  const souffle = t => { const f = (((t % 4.5) + 4.5) % 4.5) / 4.5; return f < .4 ? lisse(0, .4, f) : 1 - lisse(.4, 1, f); };

  // ---------------------------------------------------------------- les etendards du jeu, au mur
  // Fideles a lib/ui/presentation/banniere.dart : etoffe de 0 a 1,7 W, partitions sur W x 1,3 W, icone a
  // 0,60 W, plis a cinq arrets, ombre portee, clou / cordelette / traverse de bronze. La Thrace (gonfanon)
  // a gauche, Rome (oriflamme) a droite ; au mur de l'ecran titre, tous deux portent le liseré d'or.
  const ICONES = {
    casque: '<g transform="translate(2.843 3.241) scale(0.9112)"><path d="M20 9 C25 2.5 39 2.5 44 9 L37.5 15.5 L26.5 15.5 Z"/><path d="M13 30 C13 18 21.5 12 32 12 C42.5 12 51 18 51 30 L51 50 C51 55 48 58 43 59 L36 59 L36 38.5 L44 38.5 L44 31.5 L20 31.5 L20 38.5 L28 38.5 L28 59 L21 59 C16 58 13 55 13 50 Z"/></g>',
    aigle: '<g transform="translate(6.194 6.597) scale(0.8065)"><path d="M29 25 L22 19 L13 13 L4 6 L6 15 L1 18 L8 24 L3 28 L11 32 L8 36 L17 38 L23 39 L29 40 Z"/><path d="M35 25 L42 19 L51 13 L60 6 L58 15 L63 18 L56 24 L61 28 L53 32 L56 36 L47 38 L41 39 L35 40 Z"/><path d="M26 16 A6 6 0 1 1 38 16 A6 6 0 1 1 26 16Z"/><path d="M36 12 L44 16 L36.5 20 Z"/><path d="M25.5 24 C25.5 20 29 18.5 32 18.5 C35 18.5 38.5 20 38.5 24 L37.5 44 L26.5 44 Z"/><path d="M27 42 L37 42 L43 57 L32 53 L21 57 Z"/></g>',
  };
  const FORMES = {
    gonfanon: 'M0 0 H1 V1.56 A.14 .14 0 0 1 .72 1.56 V1.36 H.64 V1.56 A.14 .14 0 0 1 .36 1.56 V1.36 H.28 V1.56 A.14 .14 0 0 1 0 1.56 Z',
    oriflamme: 'M0 0H1V1C1 1.25 .95 1.45 .84 1.7C.8 1.48 .66 1.3 .5 1.18C.34 1.3 .2 1.48 .16 1.7C.05 1.45 0 1.25 0 1Z',
  };
  const MAISONS = [
    { id: 'thrace', forme: 'gonfanon', partition: 'tranche', principale: '#B3261E', secondaire: '#17140F', icone: 'casque' },
    { id: 'rome', forme: 'oriflamme', partition: 'ecartele', principale: '#6E1423', secondaire: '#E3B53B', icone: 'aigle' }];
  const EW = 64, EH = 1.7 * EW, EY0 = .28 * EW;                       // le clou a l'origine, la traverse a EY0
  const EBX = -.8 * EW, EBY = -4, EBW = 1.6 * EW, EBH = EY0 + EH + .2 * EW + 8;
  const textures = {};                                                // par suréchantillonnage : { thrace, rome }
  const teinter = (src, coul) => { const c = document.createElement('canvas'); c.width = src.width; c.height = src.height; const k = c.getContext('2d'); k.drawImage(src, 0, 0); k.globalCompositeOperation = 'source-in'; k.fillStyle = coul; k.fillRect(0, 0, c.width, c.height); return c; };
  function texturer(SC, fini) {
    if (textures[SC]) return textures[SC];
    const jeu = textures[SC] = {};
    for (const m of MAISONS) {
      const x0 = -EW / 2, unite = `translate(${x0} ${EY0}) scale(${EW})`;
      const c = [.5, .585], n = Math.hypot(.5, .585), P = 6;
      const u = v => [v[0] / n, v[1] / n], pt = v => `${(c[0] + v[0] * P).toFixed(3)} ${(c[1] + v[1] * P).toFixed(3)}`;
      const HAU = [0, -1], BA = [0, 1], G = [-1, 0], D = [1, 0], HG = u([-.5, -.585]), BD = [-HG[0], -HG[1]];
      const eventails = m.partition === 'tranche' ? [[HG, HAU, D, BD]] : [[G, HAU], [D, BA]];
      const lignes = m.partition === 'tranche' ? [HG, BD] : [HAU, BA, G, D];
      const principale = eventails.map(e => `M${c[0]} ${c[1]} ` + e.map(v => 'L' + pt(v)).join(' ') + 'Z').join(' ');
      const filets = lignes.map(v => `M${c[0]} ${c[1]} L${pt(v)}`).join(' ');
      const contenu = `<defs>
          <clipPath id="f"><path d="${FORMES[m.forme]}" transform="${unite}"/></clipPath>
          <linearGradient id="p" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".16"/><stop offset=".25" stop-color="#fff" stop-opacity=".07"/><stop offset=".5" stop-color="#000" stop-opacity=".09"/><stop offset=".75" stop-color="#fff" stop-opacity=".07"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>
          <filter id="o" x="-20%" y="-10%" width="140%" height="130%"><feGaussianBlur stdDeviation="${EW * .05}"/></filter>
        </defs>
        <path d="${FORMES[m.forme]}" transform="translate(${x0 + EW * .035} ${EY0 + EW * .06}) scale(${EW})" fill="#000" opacity=".45" filter="url(#o)"/>
        <g clip-path="url(#f)"><g transform="${unite}">
          <rect width="1" height="1.7" fill="${m.secondaire}"/>
          <path d="${principale}" fill="${m.principale}"/>
          <path d="${filets}" stroke="#17140F" stroke-width="${.5 / EW}" fill="none"/>
          <rect width="1" height="1.7" fill="url(#p)"/>
          <g transform="translate(${c[0] - .3} ${c[1] - .3}) scale(${.6 / 64})" fill="#F4F1E8">${ICONES[m.icone]}</g>
        </g></g>
        <path d="${FORMES[m.forme]}" transform="${unite}" fill="none" stroke="#C9A24A" stroke-width="${1.5 / EW}"/>
        <path d="M0 0 L${-.42 * EW} ${EY0} M0 0 L${.42 * EW} ${EY0}" stroke="#2A2116" stroke-width="${Math.max(.7, .02 * EW)}"/>
        <rect x="${-.58 * EW}" y="${EY0 - .035 * EW}" width="${1.16 * EW}" height="${.07 * EW}" rx="${.035 * EW}" fill="#6B5420"/>
        <rect x="${-.58 * EW}" y="${EY0 - .035 * EW}" width="${1.16 * EW}" height="${.028 * EW}" rx="${.0175 * EW}" fill="#C9A24A" opacity=".55"/>
        <circle cx="${-.58 * EW}" cy="${EY0}" r="${.055 * EW}" fill="#C9A24A"/><circle cx="${.58 * EW}" cy="${EY0}" r="${.055 * EW}" fill="#C9A24A"/>
        <circle cx="0" cy="0" r="${.04 * EW}" fill="#2A2622" stroke="#000" stroke-opacity=".4" stroke-width=".5"/>`;
      const im = new Image();
      im.onload = () => {
        const tx = document.createElement('canvas'); tx.width = Math.round(EBW * SC); tx.height = Math.round(EBH * SC);
        tx.getContext('2d').drawImage(im, 0, 0, tx.width, tx.height);
        jeu[m.id] = { tex: tx, sombre: teinter(tx, '#000'), clair: teinter(tx, '#fff') };
        fini();
      };
      im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(EBW * SC)}" height="${Math.round(EBH * SC)}" viewBox="${EBX} ${EBY} ${EBW} ${EBH}">${contenu}</svg>`);
    }
    return jeu;
  }
  // le vent : des rafales lentes et irregulieres, deux etendards jamais ensemble
  const rafale = (tr, ph) => .55 + .45 * (.5 + .5 * Math.sin(tr * .23 + ph)) * (.6 + .4 * Math.sin(tr * .071 + ph * 1.7));

  // ---------------------------------------------------------------- la scene, construite pour un format
  let couv = 0;                                                       // la couverture du soleil, de 0 a 1
  function construire(W, H, T) {
    const HL = Math.max(780, SOUS_LA_PORTE / (1 - clamp(T / H, 0, .55)), 360 * H / W);
    const s = H / HL, L = W / s, cx = L / 2, dx = cx - 180;
    // La courbure des gradins : celle du prototype jusqu'a ~ 2 x 360 ; au-dela elle s'etale, pour que les
    // bords d'un ecran tres large descendent d'au plus 2,6 fois la fleche du centre.
    const N = Math.max(180, L / 3.2);
    const Y = (y0, c, x) => y0 - c * ((x - cx) / N) ** 2;
    const SABLE = x => Y(612, -8, x);
    const K = s * Math.min(2, window.devicePixelRatio || 1);   // px de canvas par unite : la densite de l'ecran, plafonnee a 2
    const BAS = HL - DECALE + 10;
    entete.style.setProperty('--s', s.toFixed(4));
    graine = 20261008;

    const xs = []; { const n = Math.ceil((L + 20) / 10); for (let i = 0; i <= n; i++) xs.push(-10 + (L + 20) * i / n); }
    const ligne = (fy, liste = xs) => liste.map((x, i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${fy(x).toFixed(1)}`).join('');
    const courbe = a => ligne(x => Y(a[0], a[1], x));
    const retour = a => xs.slice().reverse().map(x => `L${x.toFixed(1)} ${Y(a[0], a[1], x).toFixed(1)}`).join('');
    const bande = (a, b, fill) => `<path d="${courbe(a)}${retour(b)}Z" fill="${fill}"/>`;
    const trait = (a, stroke, w, op = 1) => `<path d="${courbe(a)}" fill="none" stroke="${stroke}" stroke-width="${w}" opacity="${op}"/>`;

    // --- le fond : l'attique et ses fenetres, les fonds des trois etages de gradins
    let f = `<defs><linearGradient id="kAttique" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f1e7"/><stop offset="1" stop-color="#e5dacb"/></linearGradient></defs>`;
    f += bande(HAUT.attique, HAUT.summa, 'url(#kAttique)');
    for (let x = ((cx - 174) % 24) - 24; x < L + 10; x += 24) {
      const y = Y(246, 29.4, x).toFixed(1);
      f += `<rect x="${(x - 4).toFixed(1)}" y="${y}" width="8" height="15" rx="1" fill="#9a8a7c"/><rect x="${(x - 4).toFixed(1)}" y="${y}" width="8" height="4" fill="#7e6d60"/>`;
    }
    f += trait(HAUT.attique, '#d8ccbc', 1.2) + trait([240.5, 30], '#8f8173', 3.2, .22);
    f += bande(HAUT.summa, HAUT.mur1, '#d6cab9') + bande(HAUT.media, HAUT.mur2, '#e0d5c5') + bande(HAUT.ima, HAUT.parapet, '#e4d9c9');

    // --- le milieu : murs de circulation, parapet, podium, et le couloir derriere la porte
    let m = `<defs>
      <linearGradient id="kBrume" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef3f6" stop-opacity=".34"/><stop offset="1" stop-color="#f6efe4" stop-opacity="0"/></linearGradient>
      <linearGradient id="kPodium" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8ded0"/><stop offset=".5" stop-color="#f4eee4"/><stop offset="1" stop-color="#e8ded0"/></linearGradient>
      <radialGradient id="kCouloir" cx="180" cy="580" r="110" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe7ad"/><stop offset=".22" stop-color="#e6a35a"/><stop offset=".55" stop-color="#6a3a1c"/><stop offset="1" stop-color="#1e110a"/></radialGradient>
      <radialGradient id="kFond" cx="180" cy="566" r="34" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fffaea"/><stop offset=".6" stop-color="#ffe2a0"/><stop offset="1" stop-color="#f3b964"/></radialGradient>
    </defs><path d="${courbe([276, 28])}${retour(HAUT.parapet)}Z" fill="url(#kBrume)"/>`;
    m += bande(HAUT.mur1, HAUT.media, '#f2ebdf') + trait(HAUT.mur1, '#fffbf4', 1.4) + trait([341.5, 21], '#b3a493', 1, .5);
    m += bande(HAUT.mur2, HAUT.ima, '#f2ebdf') + trait(HAUT.mur2, '#fffbf4', 1.4) + trait([412.5, 15], '#b3a493', 1, .5);
    m += bande(HAUT.parapet, HAUT.podium, '#faf5ec') + trait(HAUT.parapet, '#fffaf0', 1.2) + trait([475.5, 11], '#b8a999', 1.2, .7);
    m += `<path d="${courbe(HAUT.podium)}${xs.slice().reverse().map(x => `L${x.toFixed(1)} ${SABLE(x).toFixed(1)}`).join('')}Z" fill="url(#kPodium)"/>`;
    m += `<g transform="translate(${dx.toFixed(2)} 0)"><rect x="120" y="440" width="120" height="176" fill="url(#kCouloir)"/>
      <path d="M126 446 L162 530 L162 600 L126 616Z" fill="#2a170c" opacity=".62"/><path d="M234 446 L198 530 L198 600 L234 616Z" fill="#2a170c" opacity=".62"/>
      <path d="M162 600 V546 A18 18 0 0 1 198 546 V600Z" fill="url(#kFond)"/>
      <path d="M126 616 L162 600 L198 600 L234 616Z" fill="#9a6235" opacity=".55"/></g>`;

    // --- la face : le sable, la porte monumentale, la herse levee, la plaque de la devise
    const rb = 240 * Math.max(1, L / 360);
    let a = `<defs>
      <linearGradient id="kPierre" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ebe2d5"/><stop offset=".5" stop-color="#f6f0e6"/><stop offset="1" stop-color="#ebe2d5"/></linearGradient>
      <linearGradient id="kSable" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8c48a"/><stop offset=".45" stop-color="#ddb276"/><stop offset="1" stop-color="#c79a5e"/></linearGradient>
      <linearGradient id="kOmbreAvant" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3420" stop-opacity="0"/><stop offset="1" stop-color="#4a2a18" stop-opacity=".42"/></linearGradient>
      <linearGradient id="kCone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe2a2" stop-opacity=".55"/><stop offset="1" stop-color="#ffe2a2" stop-opacity="0"/></linearGradient>
      <linearGradient id="kPlaque" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9b25a"/><stop offset=".5" stop-color="#b98d3a"/><stop offset="1" stop-color="#94702a"/></linearGradient>
      <filter id="kFlou" x="-30%" y="-10%" width="160%" height="130%"><feGaussianBlur stdDeviation="9"/></filter>
      <filter id="kFlouPetit" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.5"/></filter>
      <filter id="kGrain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".95" numOctaves="2" seed="5"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .27  0 0 0 0 .13  1.7 0 0 0 -.82"/></filter>
      <filter id="kGrainClair" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed="9"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 .95  0 0 0 0 .82  -1.8 0 0 0 .78"/></filter>
      <filter id="kNuances" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".011 .035" numOctaves="2" seed="13"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .32  0 0 0 0 .15  1.3 0 0 0 -.45"/></filter>
      <radialGradient id="kBords" cx="${cx.toFixed(1)}" cy="640" r="${rb.toFixed(1)}" gradientUnits="userSpaceOnUse" gradientTransform="translate(${cx.toFixed(1)} 640) scale(1 ${(132 / rb).toFixed(4)}) translate(${(-cx).toFixed(1)} -640)"><stop offset=".35" stop-color="#7a4a22" stop-opacity="0"/><stop offset="1" stop-color="#7a4a22" stop-opacity=".3"/></radialGradient>
      <clipPath id="kOuverture"><path d="M126 616 V500 A54 54 0 0 1 234 500 V616Z"/></clipPath>
    </defs>`;
    const sab = ligne(SABLE), sol = `${sab}L${(L + 10).toFixed(1)} ${BAS} L-10 ${BAS}Z`, large = `x="-10" width="${(L + 20).toFixed(1)}"`;
    a += `<path d="${sol}" fill="url(#kSable)"/><clipPath id="kSableClip"><path d="${sol}"/></clipPath><g clip-path="url(#kSableClip)">
      <rect ${large} y="600" height="${BAS - 600}" filter="url(#kNuances)" opacity=".75"/>
      <rect ${large} y="600" height="${BAS - 600}" filter="url(#kGrain)" opacity=".34"/>
      <rect ${large} y="600" height="${BAS - 600}" filter="url(#kGrainClair)" opacity=".24"/>`;
    for (let k = 0; 636 + k * 13 < BAS - 20; k++) {                  // les rides laissees par le vent
      const y0 = 636 + k * 13 + (k % 2) * 4, amp = 1.2 + Math.min(k, 10) * .25, xr = [];
      for (let x = -10; x <= L + 18; x += 8) xr.push(x);
      const r = ligne(x => y0 + amp * Math.sin((x - dx) * .045 + k * 1.7) + ((x - cx) / N) ** 2 * 8, xr);
      a += `<path d="${r}" fill="none" stroke="#a87a44" stroke-width=".8" opacity="${Math.min(.34, .22 + k * .02).toFixed(3)}"/><path d="${r}" fill="none" stroke="#f6dfae" stroke-width=".7" opacity=".16" transform="translate(0 1.1)"/>`;
    }
    for (let k = 0; k < 9; k++) {                                     // des traces de pas, qui sortent de la porte
      const u = k / 8, x = cx + (k % 2 ? 3.5 : -3.5) * (1 + u), y = 628 + 80 * u, e = .6 + .8 * u;
      a += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(2.2 * e).toFixed(2)}" ry="${(1 * e).toFixed(2)}" fill="#8f6033" opacity=".22" transform="rotate(${(k % 2 ? 8 : -8)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    }
    const cailloux = Math.round(34 * L / 360 * (BAS - 626) / 164);
    for (let k = 0; k < cailloux; k++) {                              // de petits cailloux epars, plus gros vers nous
      const x = alea() * L, y = 626 + alea() * (BAS - 626), r = .5 + Math.min(1.4, (y - 620) / 160) * 1.1 * (.5 + alea());
      a += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${r.toFixed(2)}" ry="${(r * .7).toFixed(2)}" fill="#7d5532" opacity=".55"/><ellipse cx="${(x - r * .3).toFixed(1)}" cy="${(y - r * .3).toFixed(1)}" rx="${(r * .45).toFixed(2)}" ry="${(r * .3).toFixed(2)}" fill="#fbe7c0" opacity=".5"/>`;
    }
    a += `<rect ${large} y="600" height="${BAS - 600}" fill="url(#kBords)"/></g>`;
    a += `<path d="${sab}" fill="none" stroke="#6a4424" stroke-width="2.5" opacity=".25"/>`;
    let h = ''; for (let x = 132; x <= 228; x += 12) h += `M${x} 430 V470 l-2.4 0 l2.4 6 l2.4 -6 l-2.4 0`;
    a += `<g transform="translate(${dx.toFixed(2)} 0)">
      <path d="M126 616 L234 616 L318 790 L42 790Z" fill="url(#kCone)" filter="url(#kFlou)"/>
      <g clip-path="url(#kOuverture)"><g transform="translate(0 -16)"><path d="${h}" stroke="#2b1d14" stroke-width="3.2" fill="#2b1d14"/><path d="M126 455 H234 M126 467 H234" stroke="#2b1d14" stroke-width="3"/><path d="M126 454 H234" stroke="#8a6a48" stroke-width=".8" opacity=".5"/></g></g>
      <path d="M88 402 H272 V618 H88Z M126 618 V500 A54 54 0 0 1 234 500 V618Z" fill="url(#kPierre)" fill-rule="evenodd"/>
      <path d="M84 398 H276 V406 H84Z" fill="#fbf6ee"/><path d="M84 407 H276 V413 H84Z" fill="#6e5c4c" opacity=".16"/><path d="M84 406 H276" stroke="#b9aa9a" stroke-width="1.2"/>
      <path d="M88 440 H272" stroke="#c4b5a4" stroke-width="1"/><path d="M88 441.2 H272" stroke="#fffaf3" stroke-width=".8"/>
      <rect x="98" y="412" width="164" height="22" rx="1.5" fill="url(#kPlaque)" stroke="#5e4416" stroke-width="1"/><rect x="101" y="415" width="158" height="16" rx="1" fill="none" stroke="#e8c870" stroke-width=".8"/>
      <g font-family="Cinzel, serif" font-weight="700" font-size="9" text-anchor="middle">
        <text x="180" y="426.9" textLength="148" lengthAdjust="spacing" fill="#f7df92" opacity=".9">${DEVISE}</text>
        <text x="180" y="425.7" textLength="148" lengthAdjust="spacing" fill="#3a280c" opacity=".85">${DEVISE}</text>
        <text x="180" y="426.3" textLength="148" lengthAdjust="spacing" fill="#6e5019">${DEVISE}</text>
      </g>
      <path d="M116 500 A64 64 0 0 1 244 500 L234 500 A54 54 0 0 0 126 500Z" fill="#f3ece1"/>`;
    for (let k = 1; k < 12; k++) { const th = Math.PI * (1 - k / 12), c = Math.cos(th), sn = Math.sin(th); a += `<path d="M${(180 + 54 * c).toFixed(2)} ${(500 - 54 * sn).toFixed(2)} L${(180 + 64 * c).toFixed(2)} ${(500 - 64 * sn).toFixed(2)}" stroke="#cbbdac" stroke-width=".9"/>`; }
    a += `<path d="M175 444 L185 444 L187 434 L173 434Z" fill="#fffaf3" stroke="#cbbdac" stroke-width=".9"/>
      <path d="M126 500 A54 54 0 0 1 234 500" fill="none" stroke="#8a7666" stroke-width="1.6" opacity=".6"/>`;
    for (const x of [98, 242]) {                                      // pilastres : la meme pierre, une lumiere de face
      a += `<rect x="${x}" y="452" width="20" height="150" fill="#f1e9dd"/><rect x="${x - 2}" y="446" width="24" height="6" fill="#f1e9dd" stroke="#c4b5a4" stroke-width=".6"/><rect x="${x - 2}" y="602" width="24" height="8" fill="#f1e9dd" stroke="#c4b5a4" stroke-width=".6"/>`;
      for (const d of [5, 10, 15]) a += `<path d="M${x + d} 455 V599" stroke="#c0b09e" stroke-width=".6" opacity=".45"/>`;
    }
    a += `<rect x="118" y="610" width="124" height="8" fill="#e7ddcf"/><path d="M118 610 H242" stroke="#fffaf3" stroke-width=".8"/>
      <path d="M126 500 A54 54 0 0 1 234 500" fill="none" stroke="#5a4636" stroke-width="7" opacity=".22" filter="url(#kFlouPetit)"/></g>`;
    a += `<rect ${large} y="660" height="${BAS - 660}" fill="url(#kOmbreAvant)"/>`;

    // --- le guerrier, a contre-jour dans la porte
    const gs = `<defs>
      <linearGradient id="gCorps" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#20160f"/><stop offset=".55" stop-color="#1a120c"/><stop offset="1" stop-color="#140d08"/></linearGradient>
      <linearGradient id="gLame" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2c2a27"/><stop offset=".5" stop-color="#5d5a54"/><stop offset="1" stop-color="#24221f"/></linearGradient>
      <linearGradient id="gBord" x1="0" y1="-160.6" x2="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".42" stop-color="#fff" stop-opacity=".75"/><stop offset=".62" stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <mask id="gMasqueBord" maskUnits="userSpaceOnUse" x="-60" y="-170" width="120" height="175"><rect x="-60" y="-170" width="120" height="175" fill="url(#gBord)"/></mask>
      <radialGradient id="gOeil"><stop offset="0" stop-color="#ff5a3a" stop-opacity=".95"/><stop offset=".4" stop-color="#d8261a" stop-opacity=".35"/><stop offset="1" stop-color="#b01a10" stop-opacity="0"/></radialGradient>
      <filter id="gAureole" x="-40%" y="-20%" width="180%" height="140%"><feGaussianBlur stdDeviation="3.4"/></filter>
      <filter id="gDoux" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation=".45"/></filter>
      <filter id="gFlouOeil" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation=".8"/></filter>
      <filter id="gFlouReflet" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation=".6"/></filter>
      <path id="gOmbre" d="${contour(0)}"/>
    </defs>
    <g transform="translate(${cx.toFixed(2)} 606) scale(.8)">
      <ellipse cx="0" cy="1" rx="34" ry="3" fill="#0a0604" opacity=".5"/>
      <use href="#gOmbre" fill="#ffb661" opacity=".5" filter="url(#gAureole)"/>
      <g id="gEpees"><g transform="translate(0 -.7)">${EPEE}</g><g transform="translate(0 .7) scale(-1 1)">${EPEE}</g>
        <g id="gReflet" filter="url(#gFlouReflet)" opacity="0"><path id="gRefletTrait" d="M0 0 L5 0" stroke="#fff6dc" stroke-width="1.2" stroke-linecap="round"/></g></g>
      <use href="#gOmbre" fill="url(#gCorps)"/>
      <use href="#gOmbre" fill="none" stroke="#ffd08a" stroke-width="1.1" mask="url(#gMasqueBord)" filter="url(#gDoux)" opacity=".85"/>
      <g id="gTete"><path d="M-2.5 -159 C-2.3 -160.5 -1.1 -160.9 0 -160.6 C1.1 -160.9 2.3 -160.5 2.5 -159 C2.3 -155 1.6 -150.8 1.2 -147.7 L-1.2 -147.7 C-1.6 -150.8 -2.3 -155 -2.5 -159Z" fill="#6a160d" opacity=".3"/>
      <g id="gYeux">
        <clipPath id="gAmandes"><path d="M-1.1 -136.8 C-1.9 -138.6 -4.8 -138.7 -6.2 -136.6 C-5 -135 -2.4 -134.9 -1.1 -136.8Z M1.1 -136.8 C1.9 -138.6 4.8 -138.7 6.2 -136.6 C5 -135 2.4 -134.9 1.1 -136.8Z"/></clipPath>
        <path d="M-1.1 -136.8 C-1.9 -138.6 -4.8 -138.7 -6.2 -136.6 C-5 -135 -2.4 -134.9 -1.1 -136.8Z M1.1 -136.8 C1.9 -138.6 4.8 -138.7 6.2 -136.6 C5 -135 2.4 -134.9 1.1 -136.8Z" fill="#1a0705"/>
        <g clip-path="url(#gAmandes)"><circle cx="-3.6" cy="-136.8" r="3.2" fill="url(#gOeil)"/><circle cx="3.6" cy="-136.8" r="3.2" fill="url(#gOeil)"/></g>
        <circle cx="-3.6" cy="-136.8" r="4.4" fill="url(#gOeil)" opacity=".35"/><circle cx="3.6" cy="-136.8" r="4.4" fill="url(#gOeil)" opacity=".35"/>
        <g filter="url(#gFlouOeil)"><circle cx="-3.5" cy="-136.8" r=".8" fill="#ff6a48"/><circle cx="3.5" cy="-136.8" r=".8" fill="#ff6a48"/></g>
      </g></g>
    </g>`;

    // --- les calques, du fond vers l'avant (ceux du prototype, sans la mise en scene du lancement)
    const vb = `viewBox="0 ${-DECALE} ${L.toFixed(2)} ${HL.toFixed(2)}" preserveAspectRatio="none"`;
    scene.innerHTML = `<canvas class="ciel"></canvas><svg ${vb}>${f}</svg><canvas></canvas><svg ${vb}>${m}</svg><svg ${vb}>${gs}</svg><svg ${vb}>${a}</svg>
      <canvas></canvas><canvas class="ombres"></canvas><canvas class="rais"></canvas>
      <div class="lumiere voile"></div><div class="lumiere diffus"></div><div class="lumiere chaleur"></div>`;
    const [cvC, cvF, cvA, cvO, cvR] = scene.querySelectorAll('canvas');
    // Chaque canvas ne couvre que sa bande utile (y0 a y1, en unites de la scene) : moins de pixels a recomposer.
    const toile = (cv, y0, y1, k = K) => {
      cv.width = Math.ceil(L * k); cv.height = Math.ceil((y1 - y0) * k);
      cv.style.top = (y0 / HL * 100).toFixed(3) + '%'; cv.style.height = ((y1 - y0) / HL * 100).toFixed(3) + '%';
      return cv.getContext('2d');
    };
    const [voile, diffus, chaleur] = scene.querySelectorAll('.lumiere');

    // ------------------------------------------------------------ le ciel vivant
    // Des nuages en bruit fractal (Perlin), calcules sur une grille d'environ 3 px d'ecran puis agrandis avec
    // lissage, sans flou : le bord reste net. Ils sont eclaires depuis le soleil ; la couverture du soleil regle la
    // lumiere de toute la scene, les ombres des nuages sur les gradins et les rais quand il sort. Les grilles sont
    // bornees (60 000 cases de ciel, 5 000 de rais, 6 000 d'ombres) et le bruit se calcule en trois tranches.
    const ciel = (() => {
      const HC = 236 + DECALE + 19;                                   // jusque sous l'attique, au plus bas au centre
      const CASE = Math.max(2.5, 3 / s, Math.sqrt(L * HC / 60000)), GL = Math.ceil(L / CASE), GH = Math.ceil(HC / CASE);
      const SOL = [cx + 70, 15];
      const perm = new Uint8Array(512);
      { const p = [...Array(256).keys()]; for (let i = 255; i > 0; i--) { const j = (alea() * (i + 1)) | 0; [p[i], p[j]] = [p[j], p[i]]; } for (let i = 0; i < 512; i++) perm[i] = p[i & 255]; }
      const fondu = t => t * t * t * (t * (t * 6 - 15) + 10);
      const perlin = (x, y) => {
        const xi = Math.floor(x), yi = Math.floor(y), X = xi & 255, Yi = yi & 255; x -= xi; y -= yi;
        const u = fondu(x), v = fondu(y), g = (hh, p, q) => ((hh & 1) ? p : -p) + ((hh & 2) ? q : -q);
        const pa = perm[X] + Yi, pb = perm[X + 1] + Yi;
        const n0 = g(perm[pa], x, y) + u * (g(perm[pb], x - 1, y) - g(perm[pa], x, y));
        const n1 = g(perm[pa + 1], x, y - 1) + u * (g(perm[pb + 1], x - 1, y - 1) - g(perm[pa + 1], x, y - 1));
        return n0 + v * (n1 - n0);
      };
      const fbm = (x, y, oct) => { let sm = 0, am = .5, fr = 1; for (let o = 0; o < oct; o++) { sm += am * perlin(x * fr, y * fr); fr *= 2.03; am *= .5; } return sm; };
      const g = toile(cvC, 0, HC);
      const fond = g.createLinearGradient(0, 0, 0, 290);
      fond.addColorStop(0, '#1d5aa8'); fond.addColorStop(.55, '#3f86cc'); fond.addColorStop(.88, '#78acda'); fond.addColorStop(1, '#93badc');
      const bas = document.createElement('canvas'); bas.width = GL; bas.height = GH;
      const bg = bas.getContext('2d'), img = bg.createImageData(GL, GH);
      const dens = new Float32Array(GL * GH), alpha = new Float32Array(GL * GH);
      const RC = Math.max(8, Math.sqrt(L * HL / 5000)), RL = Math.ceil(L / RC), RH = Math.ceil(HL / RC);
      const gR = toile(cvR, 0, HL), rais = document.createElement('canvas'); rais.width = RL; rais.height = RH;
      const rg = rais.getContext('2d'), rimg = rg.createImageData(RL, RH);
      // les ombres ne tombent que sur les gradins : elles s'eteignent sur le parapet, au-dessus du mur du podium
      const OY = Math.floor(Y(236, 30, -10) + DECALE - 31), OB = HAUT.podium[0] + DECALE + 2;
      const OC = Math.max(8, Math.sqrt(L * (OB - OY) / 6000)), OL = Math.ceil(L / OC), OH = Math.ceil((OB - OY) / OC);
      const gO = toile(cvO, OY, OB), ombres = document.createElement('canvas'); ombres.width = OL; ombres.height = OH;
      const og = ombres.getContext('2d'), oimg = og.createImageData(OL, OH);
      const PAS = 6.8 / CASE, VOISIN = Math.max(1, Math.round(8 / CASE));
      let dernier = 0, lisseCouv = -1;

      function bruit(tr, j0, j1) {
        for (let j = j0; j < j1; j++) {
          const y = (j + .5) * CASE, hor = Math.min(1, y / 288);        // 0 au-dessus de nous, 1 a l'horizon
          for (let i = 0; i < GL; i++) {
            const x = (i + .5) * CASE - dx, k = j * GL + i;
            // cumulus : gros au-dessus de nous, plus petits et aplatis vers l'horizon
            const sx = 104 - 52 * hor, sy = 64 - 36 * hor, nc = fbm(x / sx + tr * .035, y / sy + tr * .004, 4);
            const rc = nc + .05 * hor - .075, dc = lisse(0, .11, rc);
            const nf = hor > .5 ? fbm(x / 80 + tr * .07 + 31, y / 40 + 4.7, 3) : 0, rf = nf - .24, df = lisse(0, .1, rf) * lisse(.5, .74, hor);
            const ni = fbm(x / 240 + tr * .01, y / 26 + 7.3, 3), di = lisse(.16, .5, ni) * .22 * (1 - hor);   // cirrus
            dens[k] = Math.max(Math.min(1, rc * 3.2) * dc, Math.min(1, rf * 3.4) * df);
            alpha[k] = 1 - (1 - dc) * (1 - df) * (1 - di);
          }
        }
      }
      function eclairer() {
        const d = img.data;
        const D = (i, j) => (i < 0 || j < 0 || i >= GL || j >= GH) ? 0 : dens[j * GL + i];
        for (let j = 0; j < GH; j++) for (let i = 0; i < GL; i++) {
          const k = j * GL + i, al = alpha[k], o = k * 4;
          if (al < .004) { d[o + 3] = 0; continue; }
          const x = (i + .5) * CASE, y = (j + .5) * CASE, vx = SOL[0] - x, vy = SOL[1] - y, dist = Math.hypot(vx, vy) || 1, ux = vx / dist, uy = vy / dist;
          let occl = 0; for (let st = 1; st <= 4; st++) occl += D(Math.round(i + ux * st * PAS), Math.round(j + uy * st * PAS));
          const lum = Math.exp(-.55 * occl), epais = dens[k], pres = Math.exp(-dist / 110);
          const dessous = Math.max(0, D(i, j - VOISIN) - D(i, j + VOISIN)), sommet = Math.max(0, D(i, j + VOISIN) - D(i, j - VOISIN));
          const om = clamp((1 - lum) * .95 + .4 * dessous - .3 * sommet + .18 * epais);
          let r = 255 + (122 - 255) * om, gg = 250 + (138 - 250) * om, b = 242 + (166 - 242) * om;
          r = r * (1 - .28 * pres) + 255 * .28 * pres; gg = gg * (1 - .28 * pres) + 224 * .28 * pres; b = b * (1 - .28 * pres) + 168 * .28 * pres;
          const lisere = 4 * epais * (1 - epais) * pres * lum;              // l'argent du bord pres du soleil
          d[o] = Math.min(255, r + 80 * lisere); d[o + 1] = Math.min(255, gg + 74 * lisere); d[o + 2] = Math.min(255, b + 60 * lisere); d[o + 3] = al * 255;
        }
        bg.putImageData(img, 0, 0);
      }
      function couverture() {
        const i0 = Math.round(SOL[0] / CASE - .5), j0 = Math.round(SOL[1] / CASE - .5); let sm = 0, n = 0;
        for (let dj = -2; dj <= 2; dj++) for (let di = -2; di <= 2; di++) {
          const i = i0 + di, j = j0 + dj; if (i < 0 || j < 0 || i >= GL || j >= GH) continue;
          const w = 1 / (1 + di * di + dj * dj); sm += alpha[j * GL + i] * w; n += w;
        }
        return sm / n;
      }
      function encombrement() {                                        // des nuages autour du soleil : sans eux, pas de rais
        let sm = 0, n = 0;
        for (let j = 0; j * CASE < 120; j++) for (let i = Math.floor((SOL[0] - 120) / CASE); i * CASE < SOL[0] + 120; i++) {
          const ddx = i * CASE - SOL[0], ddy = j * CASE - SOL[1];
          if (i >= 0 && i < GL && ddx * ddx + ddy * ddy < 14400) { sm += alpha[j * GL + i]; n++; }
        }
        return n ? sm / n : 0;
      }
      function dessinerRais(force) {
        gR.setTransform(K, 0, 0, K, 0, 0); gR.clearRect(0, 0, L, HL);
        cvR.style.visibility = force < .01 ? 'hidden' : '';         // sans rais, le calque ne se compose plus
        if (force < .01) return;
        const d = rimg.data, haut = GH * CASE - 2;
        const ouvert = (x, y) => {
          if (y < 0 || y >= haut || x < 0 || x >= L) return 0;
          const k = ((y / CASE) | 0) * GL + ((x / CASE) | 0), ddx = x - SOL[0], ddy = y - SOL[1];
          return (1 - alpha[k]) * Math.exp(-(ddx * ddx + ddy * ddy) / 18050);
        };
        for (let j = 0; j < RH; j++) for (let i = 0; i < RL; i++) {
          const x = (i + .5) * RC, y = (j + .5) * RC, sx = (SOL[0] - x) / 18, sy = (SOL[1] - y) / 18;
          let acc = 0, w = 1, px = x, py = y;
          for (let st = 0; st < 18; st++) { acc += ouvert(px, py) * w; w *= .94; px += sx; py += sy; }
          const v = Math.min(1, acc / 7 * force * (1 - .55 * clamp((y - 250) / 500))), o = (j * RL + i) * 4;
          d[o] = 255; d[o + 1] = 232; d[o + 2] = 178; d[o + 3] = v * 150;
        }
        rg.putImageData(rimg, 0, 0);
        gR.imageSmoothingQuality = 'high'; gR.drawImage(rais, 0, 0, RL * RC, RH * RC);
      }
      function dessinerOmbres(tr, force) {
        const d = oimg.data;
        for (let i = 0; i < OL; i++) {
          const x = (i + .5) * OC, haut = Y(236, 30, x) + DECALE - 31, parapet = Y(HAUT.parapet[0], HAUT.parapet[1], x) + DECALE;   // sous la corniche, jusqu'au parapet
          for (let j = 0; j < OH; j++) {
            const y = OY + (j + .5) * OC, prof = clamp((y - 250) / 530, 0, 1.3);   // la perspective du prototype, comptee depuis 250
            const n = fbm((x - dx) / (120 + 170 * prof) + tr * .035 + 3.7, (y - 250) / (42 + 95 * prof) + tr * .004 + 1.9, 4);
            const al = lisse(-.01, .09, n - .015) * force * lisse(haut, haut + 26, y) * (1 - lisse(parapet, parapet + 12, y)), o = (j * OL + i) * 4;
            d[o] = 58; d[o + 1] = 68; d[o + 2] = 96; d[o + 3] = al * 50;   // une ombre legere (le prototype : 128)
          }
        }
        og.putImageData(oimg, 0, 0);
        gO.setTransform(K, 0, 0, K, 0, -OY * K); gO.clearRect(0, OY, L, OB - OY);
        gO.imageSmoothingQuality = 'high'; gO.drawImage(ombres, 0, OY, OL * OC, OH * OC);
      }
      let pas = -1, etape = 7, trB = 0, forceRais = 0, forceOmbres = 1;
      const tranche = e => [Math.floor(GH * e / 4), Math.floor(GH * (e + 1) / 4)];
      return (tr, tout) => {
        // le ciel commence 25 s plus loin dans son histoire : l'arene arrive au soleil, le premier voile
        // tombe vers 20 s, le soleil ressort avec ses rais vers 46 s
        tr = calme ? 30 : tr + 25;
        // le bruit se recalcule 10 fois par seconde (les nuages derivent de moins d'une unite par pas) ; le travail
        // se repartit sur sept images : quatre tranches de bruit, la lumiere des nuages, les rais, les ombres
        const q = Math.floor(tr * 10);
        if (tout) { trB = tr; bruit(tr, 0, GH); composer(true); pas = q; etape = 7; return; }
        if (etape >= 7) { if (q === pas) return; pas = q; etape = 0; trB = tr; }
        if (etape < 4) bruit(trB, ...tranche(etape));
        else if (etape === 4) composer(false);
        else if (etape === 5) dessinerRais(forceRais);
        else dessinerOmbres(trB, forceOmbres);
        etape++;
      };
      function composer(tout) {
        const tr = trB;
        eclairer();
        const c = couverture(), dt = Math.max(0, tr - dernier); dernier = tr;
        lisseCouv = lisseCouv < 0 || calme ? c : lisseCouv + (c - lisseCouv) * Math.min(1, dt / .9);
        couv = lisseCouv;
        const soleil = 1 - couv;
        g.setTransform(K, 0, 0, K, 0, 0); g.fillStyle = fond; g.fillRect(0, 0, L, HC);
        const halo = g.createRadialGradient(SOL[0], SOL[1], 0, SOL[0], SOL[1], 150);
        halo.addColorStop(0, 'rgba(255,251,230,.95)'); halo.addColorStop(.08, `rgba(255,244,204,${(.85 * (.4 + .6 * soleil)).toFixed(3)})`);
        halo.addColorStop(.25, `rgba(255,233,176,${(.42 * (.3 + .7 * soleil)).toFixed(3)})`); halo.addColorStop(1, 'rgba(255,240,210,0)');
        g.fillStyle = halo; g.fillRect(0, 0, L, HC);
        g.fillStyle = '#fffdf4'; g.beginPath(); g.arc(SOL[0], SOL[1], 12, 0, 7); g.fill();
        g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
        g.filter = `blur(${(.35 * CASE * K).toFixed(2)}px)`;   // un tiers de case (~1 px) : efface les marches, garde le bord net
        g.drawImage(bas, 0, 0, GL * CASE, GH * CASE); g.filter = 'none';
        g.globalCompositeOperation = 'screen';
        const bloom = g.createRadialGradient(SOL[0], SOL[1], 0, SOL[0], SOL[1], 70);
        bloom.addColorStop(0, `rgba(255,246,214,${(.75 * soleil).toFixed(3)})`); bloom.addColorStop(1, 'rgba(255,246,214,0)');
        g.fillStyle = bloom; g.fillRect(0, 0, L, HC); g.globalCompositeOperation = 'source-over';
        // a l'ombre la scene est plus sombre, plus froide, plus diffuse ; au soleil, chaude
        for (const [el, o] of [[voile, couv], [diffus, couv * .28], [chaleur, soleil * .5]]) {   // un calque eteint ne se compose plus
          el.style.opacity = o.toFixed(3); el.style.visibility = o < .01 ? 'hidden' : '';
        }
        forceRais = calme ? 0 : soleil * Math.min(1, encombrement() * 2.2); forceOmbres = .25 + .75 * soleil;
        if (tout) { dessinerRais(forceRais); dessinerOmbres(tr, forceOmbres); }
      }
    })();

    // ------------------------------------------------------------ la foule
    // Rang par rang, du fond vers nous ; dans un rang, un seul trace par couleur (le prototype en faisait un
    // par spectateur : une arene large en compte plusieurs milliers).
    const etoffes = ['#a8321f', '#e9dcc4', '#c9a24a', '#3e5668', '#7a5a2e', '#8e2b22', '#d9c7a4', '#6b1d3a', '#efe6d2', '#5e7a58'];
    const peaux = ['#7a5236', '#9a6a44', '#5d3d28', '#b07c52'];
    const grouper = (gens, cle) => { const mp = new Map(); for (const p of gens) { if (!mp.has(p[cle])) mp.set(p[cle], []); mp.get(p[cle]).push(p); } return [...mp]; };
    const rangs = [];
    for (const [ha, hb, t, brume] of [[HAUT.summa, HAUT.mur1, 2.3, .5], [HAUT.media, HAUT.mur2, 3.1, .3], [HAUT.ima, HAUT.parapet, 4.0, .14]]) {
      for (let yb = ha[0] + t * 2.7; yb <= hb[0] + t; yb += t * 2.25) {
        const c = ha[1] + (hb[1] - ha[1]) * (yb - ha[0]) / (hb[0] - ha[0]), gens = [];
        for (let x = -6 + alea() * t * 2; x < L + 6; x += t * (2.05 + alea() * .5)) {
          const e = etoffes[(alea() * etoffes.length) | 0];
          gens.push({ x, yb, c, corps: melanger(melanger(e, '#c9a577', .22), '#f4e6cc', brume), tete: melanger(peaux[(alea() * 4) | 0], '#f0ddc0', brume),
            bras: alea() < .22, debout: alea() < .1, etendard: alea() < .05 ? (alea() < .9 - .8 * lisse(cx - 120, cx + 120, x) ? 'thrace' : 'rome') : null,   // la Thrace a gauche, Rome a droite
            ph: alea() * 6.283, vit: .7 + alea() * .6, y: 0 });
        }
        rangs.push({ s: t, rang: rangs.length, gens, corps: grouper(gens, 'corps'), tetes: grouper(gens, 'tete') });
      }
    }
    const hautF = Y(HAUT.summa[0], HAUT.summa[1], -10) + DECALE - 34, basF = HAUT.podium[0] + DECALE + 4;   // les gradins et les bras leves
    const gF = toile(cvF, hautF, basF);
    function foule(tr) {
      gF.setTransform(K, 0, 0, K, 0, (DECALE - hautF) * K); gF.clearRect(-10, hautF - DECALE, L + 20, basF - hautF);
      const elan = Math.exp(-(((tr - 1.7) / 1.4) ** 2));                // la foule se souleve a l'arrivee, puis une ferveur continue
      gF.lineCap = 'round';
      for (const R of rangs) {
        const sR = R.s;
        for (const p of R.gens) {
          const vague = Math.pow(.5 + .5 * Math.sin(tr * .62 - (p.x - dx) * .02 + R.rang * .5), 4);
          const leve = p.debout ? lisse(.55, .95, Math.sin(tr * .3 * p.vit + p.ph)) : 0;
          p.y = Y(p.yb, p.c, p.x) - vague * (1.1 + sR * .45) - (leve + elan * .7) * sR * 1.2 - .25 * Math.sin(tr * p.vit + p.ph);
        }
        for (const [coul, gens] of R.corps) {
          const ch = new Path2D(); for (const p of gens) arrondi(ch, p.x - .95 * sR, p.y - 2.3 * sR, 1.9 * sR, 2.7 * sR, .7 * sR);
          gF.fillStyle = coul; gF.fill(ch);
        }
        gF.lineWidth = .55 * sR;
        for (const [coul, gens] of R.corps) {                          // les bras montent par grappes de gradin
          let ch = null;
          for (const p of gens) {
            if (!p.bras) continue;
            const grappe = Math.floor((p.x - dx) / 34) * 1.9 + R.rang * .8;
            const br = Math.min(1, Math.pow(.5 + .5 * Math.sin(tr * .55 + grappe), 3) * (.7 + .3 * Math.sin(tr * 1.3 * p.vit + p.ph)) + elan);
            ch = ch || new Path2D(); ch.moveTo(p.x + .7 * sR, p.y - 1.9 * sR); ch.lineTo(p.x + (.8 + .2 * br) * sR, p.y - (1.9 + 2.1 * br) * sR);
          }
          if (ch) { gF.strokeStyle = coul; gF.stroke(ch); }
        }
        for (const [coul, gens] of R.tetes) {
          const ch = new Path2D(); for (const p of gens) { ch.moveTo(p.x + .62 * sR, p.y - 2.85 * sR); ch.arc(p.x, p.y - 2.85 * sR, .62 * sR, 0, 6.2832); }
          gF.fillStyle = coul; gF.fill(ch);
        }
        for (const p of R.gens) {
          if (!p.etendard) continue;                                    // une etoffe agitee au bout d'un baton, aux couleurs des deux maisons
          const bat = .55 + .45 * Math.sin(tr * (4.4 + p.vit * 1.6) + p.ph), hx = p.x - .8 * sR, hy = p.y - 6 * sR, fw = 2.6 * sR * bat, fh = 1.7 * sR;
          gF.strokeStyle = '#5a4030'; gF.lineWidth = .3 * sR; gF.beginPath(); gF.moveTo(p.x - .7 * sR, p.y - 1.6 * sR); gF.lineTo(hx, hy + fh); gF.stroke();
          if (p.etendard === 'thrace') {
            gF.fillStyle = '#17140F'; gF.fillRect(hx, hy, fw, fh);
            gF.fillStyle = '#B3261E'; gF.beginPath(); gF.moveTo(hx, hy); gF.lineTo(hx + fw, hy); gF.lineTo(hx + fw, hy + fh); gF.closePath(); gF.fill();
          } else {
            gF.fillStyle = '#E3B53B'; gF.fillRect(hx, hy, fw, fh);
            gF.fillStyle = '#6E1423'; gF.fillRect(hx, hy, fw / 2, fh / 2); gF.fillRect(hx + fw / 2, hy + fh / 2, fw / 2, fh / 2);
          }
        }
        gF.lineWidth = .55 * sR;
      }
    }

    // ------------------------------------------------------------ le guerrier : il respire, ses yeux luisent, une lame brille
    const ombre = scene.querySelector('#gOmbre'), epees = scene.querySelector('#gEpees'), tete = scene.querySelector('#gTete');
    const yeux = scene.querySelector('#gYeux'), reflet = scene.querySelector('#gReflet'), lueur = scene.querySelector('#gRefletTrait');
    function guerrier(tr) {
      const b = calme ? 0 : souffle(tr);
      ombre.setAttribute('d', contour(b));
      epees.setAttribute('transform', `translate(0 ${(-SOUFFLE * .9 * b).toFixed(2)})`);
      tete.setAttribute('transform', `translate(0 ${(-SOUFFLE * .27 * b).toFixed(2)})`);
      yeux.setAttribute('opacity', calme ? .8 : (.5 + .45 * (.5 - .5 * Math.cos(tr * 2 * Math.PI / 3.8))).toFixed(3));
      const k = Math.floor(tr / 7), v = (tr - k * 7) / 1.6;            // un reflet glisse le long d'une lame toutes les 7 s
      if (calme || v >= 1) { reflet.setAttribute('opacity', 0); return; }
      const sg = k % 2 ? -1 : 1, l = 3 + (L0 - 8) * v, x = sg * (LB[0] + LU[0] * l - LN[0] * .9), y = LB[1] + LU[1] * l - LN[1] * .9;
      lueur.setAttribute('d', `M${x.toFixed(2)} ${y.toFixed(2)} l${(sg * LU[0] * 4).toFixed(2)} ${(LU[1] * 4).toFixed(2)}`);
      reflet.setAttribute('opacity', Math.sin(Math.PI * v).toFixed(3));
    }

    // ------------------------------------------------------------ l'avant : etendards, torches, poussiere de la porte
    // Les deux etendards du jeu de part et d'autre de la porte ; quand la largeur le permet, deux torches plus loin
    // au mur du podium, a la place qu'aurait une seconde paire d'etendards.
    const murs = [[MAISONS[0], cx - 136, 0], [MAISONS[1], cx + 136, 2.3]].map(([m0, x, ph]) => ({ m: m0, x, ph, clou: Y(475, 11, x) - .7 }));
    const torches = cx - 436 < 70 ? [] : [[cx - 436, .7], [cx + 436, 2.9]].map(([x, ph]) => ({ x, ph, y: Y(475, 11, x) + 56,
      braises: Array.from({ length: 8 }, () => ({ u: alea(), v: alea(), vit: .7 + alea() * .6, ph: alea() * 6.28 })) }));
    const SC = Math.max(2, Math.ceil(K)), TORCHE = 1.5;             // l'echelle d'une torche
    const hautA = Math.min(...murs.map(e => e.clou), ...torches.map(t => t.y - 64 * TORCHE)) + DECALE - 8, basA = Math.max(706, ...murs.map(e => e.clou + EBH)) + DECALE + 4;
    // Une torche de bronze : platine rivetee, tige baguee, coupe a godrons ; une flamme qui vacille, quelques braises
    // qui montent, et sa lueur qui chauffe le marbre autour. Coordonnees : le bord de la coupe en (x, y).
    function torche(t, tr) {
      const { ph } = t, x = 0, y = 0;
      gA.save(); gA.translate(t.x, t.y); gA.scale(TORCHE, TORCHE);
      const v = calme ? 0 : .5 * Math.sin(tr * 13 + ph) + .3 * Math.sin(tr * 7.3 + ph * 1.7) + .2 * Math.sin(tr * 23 + ph * .3);   // le vacillement, de -1 a 1
      const pench = calme ? 0 : 1.4 * Math.sin(tr * 2.1 + ph) + .6 * v;
      const lueur = gA.createRadialGradient(x, y - 10, 0, x, y - 10, 42 * (1 + .04 * v));
      lueur.addColorStop(0, `rgba(255,170,84,${(.5 + .06 * v).toFixed(3)})`); lueur.addColorStop(.4, 'rgba(255,150,70,.2)'); lueur.addColorStop(1, 'rgba(255,140,60,0)');
      gA.fillStyle = lueur; gA.fillRect(x - 46, y - 54, 92, 92);
      const p = new Path2D(); arrondi(p, x - 3.2, y + 11, 6.4, 21, 1.2);                     // la platine, au mur
      gA.fillStyle = '#4a3714'; gA.fill(p); gA.strokeStyle = 'rgba(201,162,74,.55)'; gA.lineWidth = .5; gA.stroke(p);
      gA.fillStyle = '#c9a24a'; for (const dy of [14.5, 28.5]) { gA.beginPath(); gA.arc(x, y + dy, .9, 0, 7); gA.fill(); }
      gA.fillStyle = '#35260f'; gA.fillRect(x - 1.3, y + 5, 2.6, 7);                         // la tige et sa bague
      gA.fillStyle = '#b48a3a'; gA.fillRect(x - 2.3, y + 7.6, 4.6, 1.6);
      const coupe = gA.createLinearGradient(x - 8, 0, x + 8, 0);
      coupe.addColorStop(0, '#2c2112'); coupe.addColorStop(.38, '#8a6a2c'); coupe.addColorStop(.6, '#5a4219'); coupe.addColorStop(1, '#22190d');
      gA.fillStyle = coupe; gA.beginPath(); gA.moveTo(x - 8, y); gA.lineTo(x + 8, y);
      gA.quadraticCurveTo(x + 6.6, y + 5.6, x + 2.8, y + 6.6); gA.lineTo(x - 2.8, y + 6.6); gA.quadraticCurveTo(x - 6.6, y + 5.6, x - 8, y); gA.fill();
      gA.strokeStyle = 'rgba(20,12,4,.45)'; gA.lineWidth = .45; gA.beginPath();
      for (const d of [-4.6, -1.6, 1.6, 4.6]) { gA.moveTo(x + d, y + .8); gA.lineTo(x + d * .55, y + 6); }
      gA.stroke();
      gA.fillStyle = '#c9a24a'; gA.beginPath(); gA.ellipse(x, y, 8.6, 1.7, 0, 0, 7); gA.fill();             // le bord, et les braises dedans
      gA.fillStyle = '#3a1a08'; gA.beginPath(); gA.ellipse(x, y - .15, 7.1, 1.05, 0, 0, 7); gA.fill();
      gA.globalCompositeOperation = 'lighter';
      gA.fillStyle = 'rgba(255,120,40,.55)'; gA.beginPath(); gA.ellipse(x, y - .2, 5.5, .8, 0, 0, 7); gA.fill();
      const h = 21 * (1 + .14 * v), w = 9 * (1 - .05 * v);
      for (const [sc, coul, flou] of [[1, 'rgba(206,70,22,.72)', 8], [.72, 'rgba(255,142,44,.82)', 0], [.42, 'rgba(255,230,160,.95)', 0]]) {
        const hh = h * sc, ww = w * sc, px = x + pench * sc;
        gA.shadowBlur = flou * K; gA.shadowColor = 'rgba(255,120,30,.8)'; gA.fillStyle = coul; gA.beginPath();
        gA.moveTo(x - ww / 2, y - .5);
        gA.bezierCurveTo(x - ww * .62, y - hh * .45, px - ww * .14, y - hh * .76, px, y - hh);
        gA.bezierCurveTo(px + ww * .14, y - hh * .76, x + ww * .62, y - hh * .45, x + ww / 2, y - .5);
        gA.closePath(); gA.fill();
      }
      gA.shadowBlur = 0;
      if (!calme) for (const b of t.braises) {
        const k = (b.v + tr * b.vit * .45) % 1, by = y - 8 - k * 46, bx = x + pench * .4 + (b.u - .5) * 7 + 3.5 * Math.sin(tr * 1.7 * b.vit + b.ph) * k;
        gA.fillStyle = `rgba(255,196,110,${((1 - k) * (.6 + .4 * Math.sin(tr * 9 + b.ph))).toFixed(3)})`;
        gA.beginPath(); gA.arc(bx, by, .6 * (1 - .5 * k), 0, 7); gA.fill();
      }
      gA.restore();
    }
    const gA = toile(cvA, hautA, basA);
    const grains = Array.from({ length: 34 }, () => { const v = alea(); return { u: alea(), v, s: .6 + alea() * 1.1, ph: alea() * 6.28, vit: .5 + alea() }; });
    function avant(tr) {
      gA.setTransform(K, 0, 0, K, 0, (DECALE - hautA) * K); gA.clearRect(-10, hautA - DECALE, L + 20, basA - hautA);
      const jeu = textures[SC] || {};
      for (const e of murs) {
        const tx = jeu[e.m.id]; if (!tx) continue;
        const bx = e.x + EBX, by = e.clou + EBY, y0 = e.clou + EY0;
        const A = calme ? 0 : 3.2 * rafale(tr, e.ph), om = 2 * Math.PI / 2.6, rangsTx = tx.tex.height, tw = tx.tex.width;
        // au-dessus de la traverse rien ne bouge : un seul trait ; dessous, une bande par unite de la scene (SC lignes
        // de texture), chacune deplacee par l'onde qui descend de la traverse (d'une bande a l'autre, moins de 0,4 unite)
        const fixe = Math.max(0, Math.floor((y0 - by) * SC));
        gA.drawImage(tx.tex, 0, 0, tw, fixe, bx, by, EBW, fixe / SC);
        for (let r = fixe; r < rangsTx; r += SC) {
          const n = Math.min(SC, rangsTx - r), y = by + r / SC, hh = n / SC + 1.2 / K;   // un pixel d'ecran de recouvrement : aucune couture
          const u = clamp((y - y0) / EH), phase = 2 * Math.PI / 58 * (y - y0) - om * tr + e.ph;
          const ddx = u ? A * Math.pow(u, 1.35) * Math.sin(phase) + (calme ? 0 : .8 * u * Math.sin(tr * .4 + e.ph)) : 0;
          gA.drawImage(tx.tex, 0, r, tw, n, bx + ddx, y, EBW, hh);
          if (!u || calme) continue;
          const pli = Math.cos(phase) * Math.pow(u, .8) * (A / 3.2);
          // les plis, translucides, sans recouvrement (il doublerait leur teinte en rayures)
          if (pli < 0) { gA.globalAlpha = -pli * .2; gA.drawImage(tx.sombre, 0, r, tw, n, bx + ddx, y, EBW, n / SC); }
          else { gA.globalAlpha = pli * .1; gA.drawImage(tx.clair, 0, r, tw, n, bx + ddx, y, EBW, n / SC); }
          gA.globalAlpha = 1;
        }
      }
      for (const t of torches) torche(t, tr);
      if (calme) return;
      for (const gr of grains) {                                      // la poussiere doree qui flotte dans la lumiere de la porte
        const k = (gr.v + tr * .012 * gr.vit) % 1, y = 700 - k * 250, demi = 54 + (y - 470) * .55;
        const x = cx + (gr.u - .5) * 2 * demi + 5 * Math.sin(tr * .3 * gr.vit + gr.ph), al = Math.sin(Math.PI * k) * (.45 + .35 * Math.sin(tr * .8 + gr.ph));
        gA.fillStyle = `rgba(255,236,190,${al.toFixed(3)})`; gA.beginPath(); gA.arc(x, y, gr.s, 0, 7); gA.fill();
      }
    }

    texturer(SC, () => { if (!boucle) dessiner(true); });
    // La foule et le guerrier bougent lentement : le guerrier a 30 images par seconde, la foule aussi, ou a 20
    // quand elle depasse 4 000 spectateurs (ecran large) ; jamais sur la meme image.
    const rythme = rangs.reduce((n, R) => n + R.gens.length, 0) > 4000 ? 3 : 2;
    let image = 0;
    return (tr, tout) => {
      const t = calme ? 6 : tr; image++;
      ciel(t, tout); if (tout || image % rythme === 0) foule(t); if (tout || image % 2 === 1) guerrier(t); avant(t);
    };
  }

  // ---------------------------------------------------------------- l'eclat du titre, donne par le soleil
  // Un seul balayage de 2,8 s : a l'arrivee, puis chaque fois que le soleil ressort d'un nuage.
  const bandeEclat = entete.querySelector('.titre .eclat');
  let debut = -1, couvAvant = 0, premier = false, posEclat = '';
  function eclat(tr) {
    if (!bandeEclat) return;
    if (!calme) {
      if (!premier && tr >= 2.6) { premier = true; debut = tr; }
      else if (couvAvant > .3 && couv <= .3 && (debut < 0 || tr - debut > 3.4)) debut = tr;
    }
    couvAvant = couv;
    const v = debut < 0 || calme ? 1 : clamp((tr - debut - .45) / 2.8), pc = v < .5 ? 2 * v * v : 1 - 2 * (1 - v) * (1 - v);
    const pos = `translate(${(576 - 792 * pc).toFixed(1)} 0) rotate(-14 0 150)`;
    if (pos !== posEclat) { bandeEclat.setAttribute('transform', pos); posEclat = pos; }
  }

  // ---------------------------------------------------------------- l'horloge : ne tourne que si l'on regarde
  let rendu = null, tr = 0, dernier = 0, boucle = 0, visible = true, cle = '';
  function dessiner(tout) { if (rendu) { rendu(tr, tout); eclat(tr); } }
  const anime = () => !calme && visible && !document.hidden && !!rendu;
  function image(now) {
    tr += clamp((now - dernier) / 1000, 0, .1); dernier = now;      // au retour d'une pause, la scene reprend ou elle etait
    dessiner(false);
    boucle = anime() ? requestAnimationFrame(image) : 0;
  }
  function planifier() {
    if (anime() && !boucle) { dernier = performance.now(); boucle = requestAnimationFrame(image); }
    else if (!anime() && boucle) { cancelAnimationFrame(boucle); boucle = 0; }
  }
  function refaire() {
    const W = entete.clientWidth, H = entete.clientHeight;
    const T = entete.getBoundingClientRect().bottom - accroche.getBoundingClientRect().top;
    const k = `${W}x${H}x${Math.round(T)}`;
    if (!W || !H || k === cle) return;
    cle = k; rendu = construire(W, H, T); dessiner(true); planifier();
  }
  refaire();
  let attente = 0;
  const plusTard = () => { clearTimeout(attente); attente = setTimeout(refaire, 180); };
  if (window.ResizeObserver) { const ro = new ResizeObserver(plusTard); ro.observe(entete); ro.observe(accroche); }
  else addEventListener('resize', plusTard);
  if (window.IntersectionObserver) new IntersectionObserver(e => { visible = e[e.length - 1].isIntersecting; planifier(); }).observe(entete);
  document.addEventListener('visibilitychange', planifier);
})();

// La musique de l'ecran titre : coupee a chaque visite (jamais de son impose), elle ne se telecharge qu'au premier
// toucher du bouton. Elle monte en 2 s jusqu'a un volume discret, s'efface en 0,8 s, se tait quand l'onglet est
// cache et reprend au retour si elle jouait. (iOS ignore le volume d'un element audio : la elle part a plein.)
(function () {
  'use strict';
  const bouton = document.querySelector('.son'), audio = document.querySelector('audio.musique');
  if (!bouton || !audio) return;
  const VOLUME = .25;
  let veut = false, fondu = 0;
  const vers = (cible, ms, puis) => {
    clearInterval(fondu);
    const v0 = audio.volume, t0 = performance.now();
    fondu = setInterval(() => {
      const u = Math.min(1, (performance.now() - t0) / ms);
      audio.volume = v0 + (cible - v0) * u;
      if (u >= 1) { clearInterval(fondu); if (puis) puis(); }
    }, 40);
  };
  const jouer = ms => {
    audio.play().then(() => vers(VOLUME, ms)).catch(() => { veut = false; bouton.setAttribute('aria-pressed', 'false'); });
  };
  bouton.addEventListener('click', () => {
    veut = !veut;
    bouton.setAttribute('aria-pressed', String(veut));
    if (veut) { clearInterval(fondu); if (audio.paused) audio.volume = 0; jouer(2000); }
    else vers(0, 800, () => audio.pause());
  });
  document.addEventListener('visibilitychange', () => {
    if (!veut) return;
    if (document.hidden) { clearInterval(fondu); audio.pause(); }
    else { audio.volume = 0; jouer(1000); }
  });
})();
