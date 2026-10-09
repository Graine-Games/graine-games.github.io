// node verifie.mjs — échoue si une clef data-i18n manque en anglais ou en espagnol,
// si un chemin local référencé n'existe pas (hors captures, déposées plus tard), ou si un chemin est absolu.
import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';

const src = readFileSync('langue.js', 'utf8');
let T;
const ctx = { document: { querySelectorAll: () => [], documentElement: {} }, navigator: {}, localStorage: { getItem: () => null } };
vm.runInNewContext(src.replace('var textes', 'globalThis.__T = T; var textes'), ctx);
T = ctx.__T;

const erreurs = [];
for (const page of ['index.html', 'confidentialite.html']) {
  const html = readFileSync(page, 'utf8');
  for (const [, k] of html.matchAll(/data-i18n(?:-alt)?="([^"]+)"/g))
    for (const l of ['en', 'es']) if (!T[l][k]) erreurs.push(`${page} : « ${k} » manque en ${l}`);
  for (const [, p] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (/^(https?:|mailto:)/.test(p)) continue;
    if (p.startsWith('/')) erreurs.push(`${page} : chemin absolu ${p}`);
    // ?v=… force les navigateurs a recharger la feuille et le script apres chaque envoi.
    else if (!existsSync(p.split('?')[0])) erreurs.push(`${page} : ${p} introuvable`);
  }
}
if (erreurs.length) { console.error(erreurs.join('\n')); process.exit(1); }
console.log('site vérifié');
