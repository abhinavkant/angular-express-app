FROM node:18.15-alpine3.17

WORKDIR /usr/src/app
COPY ./API/package*.json ./
RUN npm install

COPY ./API .

EXPOSE 3000
CMD [ "node", "server.js" ]