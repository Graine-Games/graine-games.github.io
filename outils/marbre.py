# -*- coding: utf-8 -*-
"""Genere la dalle de marbre du site : harena/img/marbre.webp, une tuile qui se repete sans couture.

    python outils/marbre.py

**La recette est celle du jeu** (harena/tools/pierre/marbre.py, marbre LUNI, le blanc gris de Carrare
retenu par le porteur) : filons larges, filons fins, capillaires et grain, tires de `feTurbulence
type="turbulence"`. Trois ecarts, et aucun n'est decoratif :

- **La tuile se repete.** `stitchTiles="stitch"` et des filtres calés sur la tuile entiere : ses bords
  se raccordent, la dalle couvre une section entiere sans couture ni image geante.
- **Le fond est uni.** Le degrade haut/bas de la barre du jeu ferait une marche a chaque tuile ; on
  garde son ton haut, celui que la barre montre le plus.
- **Pas de pointilles.** La turbulence est nulle aux noeuds de sa grille, a toutes les octaves a la fois : le
  seuil y faisait des points alignes (la dalle du jeu en a aussi, plus espaces). Les veines sont donc tordues par
  un champ lisse apres le rendu : les points quittent la grille, les filons ondulent. Le champ est une somme de
  sinus a nombre entier de periodes par tuile, lu en boucle : la torsion ne cree aucune couture.
- **Les frequences sont en px CSS.** La dalle du jeu (1080 unites) s'etale sur un telephone de ~400 px :
  ses frequences sont multipliees par 2,7 pour que les veines aient ici la meme taille a l oeil.

Le SVG est rendu par Chrome sans tete a DEUX fois la taille utile (le trait net vient de la reduction,
comme dans le jeu), puis enregistre en WebP. On modifie ce script, jamais l'image.
"""

import os
import pathlib
import subprocess
import tempfile

import numpy as np

from PIL import Image

TUILE = 512                 # la tuile, en px CSS (affichee avec background-size: 512px)
RENDU = 2                   # rendue a deux fois, gardee a deux fois : nette sur un ecran de densite 2
CHROME = r'C:/Program Files/Google/Chrome/Application/chrome.exe'
SORTIE = pathlib.Path(__file__).resolve().parents[1] / 'harena/img/marbre.webp'

# Luni (jeu) : haut, veine fine, veine large, graine. L'echelle : 780/1080 (jeu) x 2,7 (telephone -> px CSS).
FOND, FINE, LARGE, GRAINE = '#F7F6F2', '#8C8D88', '#B4B5AF', 3
TORSION = 9                 # px CSS : de combien le champ deplace les veines, au plus
E = 780.0 / 1080 * 2.7


def svg():
    f = lambda v: '%.5f' % (v * E)
    tour = 'x="0" y="0" width="100%" height="100%"'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{TUILE}" height="{TUILE}" viewBox="0 0 {TUILE} {TUILE}">
  <!-- GENERE PAR outils/marbre.py - ne pas retoucher a la main. -->
  <defs>
    <filter id="larges" {tour}>
      <feTurbulence type="turbulence" baseFrequency="{f(.0022)} {f(.0048)}" numOctaves="3" seed="{GRAINE + 50}" stitchTiles="stitch" result="t"/>
      <feColorMatrix in="t" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -6.5 0 0 0 0.95" result="m"/>
      <feGaussianBlur in="m" stdDeviation="0.9" result="d"/>
      <feFlood flood-color="{LARGE}" result="c"/><feComposite in="c" in2="d" operator="in"/>
    </filter>
    <filter id="fins" {tour}>
      <feTurbulence type="turbulence" baseFrequency="{f(.0055)} {f(.0115)}" numOctaves="4" seed="{GRAINE}" stitchTiles="stitch" result="t"/>
      <feColorMatrix in="t" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -12.5 0 0 0 1.06" result="m"/>
      <feGaussianBlur in="m" stdDeviation="0.22" result="d"/>
      <feFlood flood-color="{FINE}" result="c"/><feComposite in="c" in2="d" operator="in"/>
    </filter>
    <filter id="capillaires" {tour}>
      <feTurbulence type="turbulence" baseFrequency="{f(.014)} {f(.030)}" numOctaves="5" seed="{GRAINE + 130}" stitchTiles="stitch" result="t"/>
      <feColorMatrix in="t" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -19 0 0 0 1.04" result="m"/>
      <feFlood flood-color="{FINE}" result="c"/><feComposite in="c" in2="m" operator="in"/>
    </filter>
    <filter id="grain" {tour}>
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="{GRAINE + 9}" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .10 0"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="{FOND}"/>
  <rect width="100%" height="100%" filter="url(#larges)" opacity="0.30"/>
  <rect width="100%" height="100%" filter="url(#fins)" opacity="0.80"/>
  <rect width="100%" height="100%" filter="url(#capillaires)" opacity="0.5"/>
  <rect width="100%" height="100%" filter="url(#grain)"/>
</svg>
'''


def tordre(im):
    """Deplace chaque pixel selon un champ periodique sur la tuile (lecture bilineaire, en boucle)."""
    a = np.asarray(im, dtype=np.float32)
    n = a.shape[0]
    y, x = np.mgrid[0:n, 0:n].astype(np.float32) * (2 * np.pi / n)
    alea = np.random.default_rng(GRAINE)
    champ = []
    for _ in range(2):
        c = np.zeros((n, n), np.float32)
        for _ in range(6):                                    # des ondes de 1 a 4 periodes par tuile
            m, k = alea.integers(-4, 5, size=2)
            c += alea.uniform(.4, 1) * np.sin(m * x + k * y + alea.uniform(0, 2 * np.pi))
        champ.append(c / np.abs(c).max() * TORSION * RENDU)
    sx, sy = (np.arange(n)[None, :] + champ[0]) % n, (np.arange(n)[:, None] + champ[1]) % n
    x0, y0 = np.floor(sx).astype(int), np.floor(sy).astype(int)
    fx, fy = (sx - x0)[..., None], (sy - y0)[..., None]
    x1, y1 = (x0 + 1) % n, (y0 + 1) % n
    b = (a[y0, x0] * (1 - fx) + a[y0, x1] * fx) * (1 - fy) + (a[y1, x0] * (1 - fx) + a[y1, x1] * fx) * fy
    return Image.fromarray(np.clip(b + .5, 0, 255).astype(np.uint8))


if __name__ == '__main__':
    with tempfile.TemporaryDirectory() as tmp:
        source, png = os.path.join(tmp, 'marbre.svg'), os.path.join(tmp, 'marbre.png')
        pathlib.Path(source).write_text(svg(), encoding='utf-8')
        subprocess.run([CHROME, '--headless=new', '--user-data-dir=' + os.path.join(tmp, 'profil'), '--hide-scrollbars',
                        f'--force-device-scale-factor={RENDU}', f'--window-size={TUILE},{TUILE}', '--screenshot=' + png,
                        pathlib.Path(source).as_uri()], check=True, capture_output=True)
        im = tordre(Image.open(png).convert('RGB').crop((0, 0, TUILE * RENDU, TUILE * RENDU)))
        im.save(SORTIE, 'WEBP', quality=82, method=6)
    print('Produit :', SORTIE, os.path.getsize(SORTIE), 'octets')
