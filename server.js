var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');
var assert = require('assert');
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://redhat:redhat@' + process.env.MONGO_PORT_27017_TCP_ADDR + ':' + process.env.MONGO_PORT_27017_TCP_PORT || '/Tododb', function(err, db) {
//mongoose.connect('mongodb://' + process.env.DATABASE_SERVICE_NAME +'_MONGODB_USER' +':'+ process.env.DATABASE_SERVICE_NAMEMONGODB_PASSWORD +'@'+  process.env.MONGODB_SERVICE_HOST + ':' + process.env.MONGODB_SERVICE_PORT_MONGODB || '/Tododb', function(err, db) {
 mongoose.connect('mongodb://' +  process.env.MONGODB_SERVICE_HOST + ':' + process.env.MONGODB_SERVICE_PORT_MONGODB || '/Tododb', function(err, db) {
  //  if (err) {
   //     console.error(err);
  //      throw err;
  //  }
     if(err){
        return res.send('err');
      }
      return res.send('success');
     
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    //db.close();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
