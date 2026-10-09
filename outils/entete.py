"""Produit l'image de l'en-tete de HARENA : l'ecran titre du jeu, tel que le joueur le voit.

    python outils/entete.py <harena>/docs/store/captures/1-titre.png

La capture (1080 x 2400, emulateur) est la source ; le JPEG est un produit. On coupe sous le
sable, avant « Touche pour entrer » : sur le site, c'est le bouton « Devenir testeur » qui invite.
"""
import pathlib
import sys

from PIL import Image

SORTIE = pathlib.Path(__file__).resolve().parents[1] / "harena/img/entete-titre.jpg"
Image.open(sys.argv[1]).convert("RGB").crop((0, 0, 1080, 2150)).save(
    SORTIE, quality=84, optimize=True, progressive=True)
print("Produit :", SORTIE)
