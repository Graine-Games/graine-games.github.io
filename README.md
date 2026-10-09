# Graine Games — site du studio
Servi par GitHub Pages à https://graine-games.github.io/. Un dossier par jeu, pour que ses adresses ne bougent jamais : `harena/` (vitrine, `confidentialite.html` exigée par Google Play, textes FR/EN/ES dans `langue.js`).
Les captures de `harena/img/captures/` sont produites depuis `harena/docs/store/captures/` du dépôt du jeu ; `node harena/verifie.mjs` contrôle traductions et chemins avant tout envoi.
L'en-tête de `harena/` est l'arène de l'écran titre, dessinée en direct par `harena/arene.js` (portage de `harena/docs/maquettes/lancement.html`) : aucune image à produire.
La dalle de marbre des pages (`harena/img/marbre.webp`, tuile sans couture) est produite par `python outils/marbre.py` (recette du marbre Luni du jeu) : on modifie le script, jamais l'image.
