#!/bin/bash

# Script pour démarrer le portfolio en mode développement
# Accessible depuis le réseau local (téléphone, tablette, etc.)

echo "🚀 Démarrage du portfolio en mode développement..."
echo "📱 Accessible depuis votre téléphone !"
echo ""

# Vérifier si le port 3000 est libre
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Le port 3000 est déjà utilisé. Arrêt du processus..."
    kill -9 $(lsof -ti:3000) 2>/dev/null || true
    sleep 2
fi

# Obtenir l'adresse IP locale
LOCAL_IP=$(hostname -I | awk '{print $1}')

echo "🌐 Le site sera accessible sur :"
echo "   - Local:   http://localhost:3000"
echo "   - Réseau:  http://$LOCAL_IP:3000"
echo ""
echo "📱 Sur votre téléphone, utilisez : http://$LOCAL_IP:3000"
echo ""

# Démarrer Next.js avec turbopack
npm run dev
