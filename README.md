# todoListApi
## The following steps are for using it on your laptop.

## Install nodemon
```sh
npm install --save-dev nodemon
```

## Install express
```sh
npm install express --save
```

## install
```sh
npm run start 
```

## Install mongoose
```sh
npm install mongoose --save
```
# Using containers, you just need to have the following on your Dockerfile:
## Dockerfile
```
FROM docker.io/node:6.9-slim
# replace this with your application's default port

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app 

EXPOSE 8081

CMD ["npm","start"]
```
