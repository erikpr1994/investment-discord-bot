FROM node:14

RUN apt update && apt install vim inotify-tools -y

RUN npm i -g nodemon

EXPOSE 49153

WORKDIR  /home/node

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .