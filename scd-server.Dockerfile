# Utilisez une image de base Node.js
FROM node

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers de votre application dans le répertoire de travail
COPY server ./
COPY package*.json ./

# Installez les dépendances de l'application
RUN cd backend && npm install

RUN cd frontend && npm install


# Exposez le port que votre application utilisera pour écouter les connexions
EXPOSE 8000

# Définissez le script de démarrage de l'application
CMD ["npm", "start"]