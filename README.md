# todoListApi

# requirements

## Mongodb

```
docker run --name mongodb -p 0.0.0.0:27017:27017 mongo
```

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
# Running in Openshift

Considering you have a openshift cluster running eg: `oc cluster up `

```
oc new-app --name=todolist --template=nodejs-mongo-persistent \
--param SOURCE_REPOSITORY_URL=https://github.com/renatoppuccini/todoListApi.git \
--param SOURCE_REPOSITORY_REF=master \
--param DATABASE_SERVICE_NAME=mongodb \
--param DATABASE_USER=redhat \
--param DATABASE_PASSWORD=redhat \
--param DATABASE_NAME=Tododb \
--param DATABASE_ADMIN_PASSWORD=redhat
```

And remove the default healthchecks. To do it, go in web console > Deployments > nodejs-mongo-persistent > Actions > Edit Health Checks > Remove readiness and Remove probiness


## testando
