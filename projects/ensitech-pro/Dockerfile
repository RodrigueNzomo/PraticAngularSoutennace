# Étape 1: Utiliser une image Node.js pour installer les dépendances et construire l'application Angular
FROM node:18-alpine AS builder

# Créer le répertoire de travail et définir comme répertoire actuel
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur

COPY package.json package-lock.json ./
COPY angular.json tsconfig*.json ./
COPY src/ ./src/

# Installer les dépendances
RUN npm install

# Construire l'application Angular
RUN npm run build --prod

# Étape 2: Utiliser une image Nginx pour servir l'application construite
FROM nginx:alpine

# Copier le contenu de la construction de l'application Angular dans Nginx
COPY --from=builder /app/dist/ensitechPro /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Lancer Nginx en mode détaché
CMD ["nginx", "-g", "daemon off;"]
