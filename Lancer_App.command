#!/bin/bash
# On se place dans le dossier du script
cd "$(dirname "$0")"

echo "--- Démarrage de l'application ---"

# On s'assure que les ports sont libérés
killall node 2>/dev/null

# On utilise le chemin complet ou on force l'environnement
export PATH=$PATH:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

# On lance avec un log pour voir ce qui bloque si ça échoue
npm run dev -- --port 3008 &

echo "Attente du serveur sur le port 3008..."
sleep 5

# On ouvre l'URL
open "http://localhost:3008"

# On garde la fenêtre ouverte pour lire les messages d'erreur
echo "--- Serveur actif (ne pas fermer cette fenêtre) ---"
$SHELL