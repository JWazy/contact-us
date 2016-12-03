var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('views', __dirname+'/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./routes/index');

app.use('/', routes);

app.listen(8080, function(){
  console.log('Application running on localhost on port 8080');
});
