FROM docker.io/node:6.9-slim

MAINTAINER Renato Puccini <renatoppuccini@gmail.com>

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app 

EXPOSE 8081

CMD ["npm","start"]
