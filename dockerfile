FROM node:18-alpine

WORKDIR /app

# Copiamos package.json primero
COPY package*.json ./

# ¡IMPORTANTE! Instalamos TODAS las dependencias (incluyendo devDependencies como @types/node)
# Quitamos --production para que instale todo lo necesario para el build
RUN npm install

# Copiamos el resto del código
COPY . .

# Compilamos la app (esto usa TypeScript y necesita los @types)
RUN npm run build

EXPOSE 8080

CMD ["node", "server.js"]
