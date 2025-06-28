#!/bin/bash

# Script de déploiement automatique en mode production

echo "===== Déploiement du portfolio en mode PRODUCTION avec Docker ====="
echo "Démarrage de l'environnement de production..."

docker-compose up --build -d portfolio

echo "L'application est maintenant accessible à l'adresse: http://localhost:3000"
echo "(ou http://[IP_DU_SERVEUR]:3000 si hébergé à distance)"
