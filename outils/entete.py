"""Produit les fonds de l'en-tete de HARENA a partir de la capture de l'ecran titre du jeu.

    python outils/entete.py <harena>/docs/store/captures/1-titre.png

La capture est la source (1080 x 2400, emulateur) ; les deux JPEG sont des produits.
"""
import pathlib
import sys

from PIL import Image, ImageDraw

FOND = (0x14, 0x10, 0x0F)
SORTIE = pathlib.Path(__file__).resolve().parents[1] / "harena/img"

titre = Image.open(sys.argv[1]).convert("RGB")
# La porte, son gladiateur et les deux etendards, de la devise au sable.
scene = titre.crop((0, 1250, 1080, 2150))  # au-dessus de « Touche pour entrer »

# Telephone : la scene entiere, posee en bas de l'en-tete sur toute la largeur.
scene.resize((900, 750), Image.LANCZOS).save(SORTIE / "entete-mobile.jpg", quality=84, optimize=True, progressive=True)

# Ecran large : la scene seule, fondue dans la nuit sur son quart gauche ; la page la pose a droite.
large = scene.resize((1296, 1080), Image.LANCZOS)
masque = Image.new("L", large.size, 0)
d = ImageDraw.Draw(masque)
for x in range(324):
    d.line([(x, 0), (x, 1080)], fill=255 - round(255 * (x / 324) ** 0.7))
large = Image.composite(Image.new("RGB", large.size, FOND), large, masque)
large.save(SORTIE / "entete-large.jpg", quality=84, optimize=True, progressive=True)
print("entete-mobile.jpg et entete-large.jpg produits dans", SORTIE)
