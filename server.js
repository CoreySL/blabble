var express = require('express');
var bodyParser = require('body-parser');
var Person = require('./person.js');
var jsonParser = bodyParser.json();
var app = express();

var cookieParser = require('cookie-parser');

var people = [];

people.push(new Person('hi','hi','George', 10, 'Los Angeles'));
people.push(new Person('santadude','hello','Santa', 200, 'North Pole'));
people.push(new Person('ronalddude','hello','Ronald', 100, 'Mcdonalds'));
people.push(new Person('johnwayne', 'hello', 'John', 40, 'Orange County'));
people.push(new Person('bugsbunny','hello','Bugs', 252, 'Rabbit Hole'));
people.push(new Person('daffyduck','hello','Daffy', 252,'Trees'));

app.use(cookieParser());
app.use(express.static('./public/'));

app.get('/check', cookieParser(), function(req, res) {
    if (req.cookies.session) {
      res.sendStatus(200);
    }
    else {
      res.sendStatus(401);
    }
});

app.get('/userinfo', function(req, res) {
  var userArray = [];
  console.log(req.cookies.session);
  for (var i = 0; i < people.length; i++) {
    if (req.cookies.session === people[i].username) {
      userArray.push(people[i]);
      console.log(userArray);
    }
  }
  for (var x = 0; x < people.length; x++) {
    if (people[x].username !== req.cookies.session) {
      userArray.push(people[x]);
    }
  }
  res.send(userArray);
})

app.post('/login', jsonParser, function(req, res) {
  var userInfo = req.body;
  var successArray = [];
  for (var i = 0; i < people.length; i++) {
    // console.log(people[i].username);
    // console.log(people[i].password);
    if (userInfo.username === people[i].username && userInfo.password == people[i].password) {
    successArray.push(people[i]);
    // console.log(people);
    // console.log(successArray);
    }
  }
  if (successArray.length > 0) {
    res.cookie('session', successArray[0].username);
    res.json(people);
  }
  else {
    res.json('login: failed');
  }
});

app.post('/signup', jsonParser, function(req, res) {
  var newUser = req.body;
  people.push(new Person(req.body.username, req.body.password, 'User', 500, 'Los Angeles'));
})

app.get('/logout', cookieParser(), function(req, res) {
  res.clearCookie('session');
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/follow', jsonParser, function(req, res) {
  var userToFollow = req.body.username;
  for (var g = 0; g < people.length; g++) {
    if (userToFollow === people[g].username) {
      res.json(people[g]);
    }
  }
});

app.listen(8080, function() {
  console.log("listening on port 8080");
});
