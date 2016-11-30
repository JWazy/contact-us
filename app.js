var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// this is to serve the css and js from the public folder to your app
// it's a little magical, but essentially you put files in there and link
// to them in you head of your files with css/styles.css
app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));

// this is setting the template engine to use ejs
app.set('view engine', 'ejs');

// setting your view folder
app.set('views', __dirname+'/views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.render('pages/index');
});

app.listen(8080, function(){
  console.log('Application running on localhost on port 8080');
});
