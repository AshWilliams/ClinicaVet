FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm ci --only=production

#RUN npm audit fix

ENV PORT=8080
ENV COSMOSDB_URI="prod-conn-string"
ENV COSMOS_EMULATOR="dev-conn-string"
# Bundle app source
COPY . .

EXPOSE 8080


CMD [ "node", "server.js" ]