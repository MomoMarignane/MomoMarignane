#!/bin/bash

# Script de déploiement Docker pour le portfolio

# Assurer que les erreurs arrêtent le script
set -e

echo "===== Déploiement du portfolio avec Docker ====="

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "Docker n'est pas installé. Veuillez installer Docker et réessayer."
    exit 1
fi

# Vérifier si Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose n'est pas installé. Veuillez installer Docker Compose et réessayer."
    exit 1
fi

# Demander à l'utilisateur quel environnement il souhaite
echo "Quel environnement souhaitez-vous déployer ?"
echo "1) Développement (avec rechargement à chaud)"
echo "2) Production"
read -p "Votre choix (1/2): " choice

case $choice in
    1)
        echo "Reconstruction et démarrage de l'environnement de développement..."
        docker-compose build portfolio-dev
        docker-compose up portfolio-dev
        ;;
    2)
        echo "Démarrage de l'environnement de production..."
        docker-compose build portfolio
        docker-compose up -d portfolio
        echo "L'application est maintenant accessible à l'adresse: http://localhost:3000"
        ;;
    *)
        echo "Choix invalide"
        exit 1
        ;;
esac
