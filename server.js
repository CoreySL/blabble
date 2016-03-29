var express = require('express');
var bodyParser = require('body-parser');
var Person = require('./person.js');
var jsonParser = bodyParser.json();
var app = express();

var cookieParser = require('cookie-parser');

var people = [];

function Tweet(tweet) {
  this.tweet = tweet;
}

var tweetsArray1 = [];
var tweetsArray2 = [];
var tweetsArray3 = [];
var tweetsArray4 = [];
var tweetsArray5 = [];
var tweetsArray6 = [];
//
var tweet1 = new Tweet('hello');
var tweet2 = new Tweet('bye');
var tweet3 = new Tweet('yes');
var tweet4 = new Tweet('what');
var tweet5 = new Tweet('asdf');
tweetsArray1.push(tweet1, tweet2, tweet3, tweet4, tweet5);

tweetsArray2.push(new Tweet('why hello there'));
tweetsArray2.push(new Tweet('whats up doc'));
tweetsArray2.push(new Tweet('whats going on'));

tweetsArray3.push(new Tweet('why hello there'));
tweetsArray3.push(new Tweet('i am hungry'));

tweetsArray4.push(new Tweet('why hello there'));
tweetsArray4.push(new Tweet('i am hungry'));

tweetsArray5.push(new Tweet('why hello there'));
tweetsArray5.push(new Tweet('i am hungry'));

var user1 = new Person('hi','hi','George Lucas', 10, 'Los Angeles');
var user2 = new Person('santadude','hello','Santa Claus', 200, 'North Pole');
var user3 = new Person('ronalddude','hello','Ronald Mcdonald', 100, 'Mcdonalds');
var user4 = new Person('johnlocke', 'hello', 'John Locke', 40, 'Orange County');
var user5 = new Person('bugsbunny','hello','Bugs Bunny', 252, 'Rabbit Hole');
var user6 = new Person('daffyduck','hello','Daffy Duck', 252,'Trees');

user1.tweets = tweetsArray1;
user2.tweets = tweetsArray2;
user3.tweets = tweetsArray3;
user4.tweets = tweetsArray4;
user5.tweets = tweetsArray5;
user6.tweets = tweetsArray6;

people.push(user1, user2, user3, user4, user5, user6);

// function addFollowing(x) {
//   this.following = x;
// }

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
  console.log(people);

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
  people.push(new Person(newUser.username, newUser.password, 'User', 500, 'Los Angeles'));
})

app.get('/logout', cookieParser(), function(req, res) {
  res.clearCookie('session');
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/tweets', function(req, res) {
  res.json(people);
})


app.listen(8080, function() {
  console.log("listening on port 8080");
});
