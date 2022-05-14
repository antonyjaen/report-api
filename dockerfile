FROM node:15-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 
EXPOSE 2000

RUN npm run prisma


CMD [ "npm", "run", "dev" ]