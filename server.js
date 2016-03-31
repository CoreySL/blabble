var express = require('express');
var bodyParser = require('body-parser');
var Person = require('./person.js');
var jsonParser = bodyParser.json();
var app = express();

var cookieParser = require('cookie-parser');

var people = [];

function Tweet(name, username, tweet, id, likes, status) {
  this.name = name;
  this.username = username;
  this.tweet = tweet;
  this.id = id;
  this.likes = likes;
  this.status = status;
}

function Following(person) {
  this.user = person;
}

function add(x,y) {
  return x + y;
}

function subtract(x,y) {
  return x - y;
}

var followingArray1 = [];
var followingArray2 = [];
var followingArray3 = [];
var followingArray4 = [];
var followingArray5 = [];
var followingArray6 = [];
var followingArray7 = [];
var followingArray8 = [];
var followingArray9 = [];

followingArray1.push(new Following('santadude'));
followingArray1.push(new Following('ronalddude'));
followingArray1.push(new Following('johnlocke'));
followingArray1.push(new Following('bugsbunny'));

var tweetsArray1 = [];
var tweetsArray2 = [];
var tweetsArray3 = [];
var tweetsArray4 = [];
var tweetsArray5 = [];
var tweetsArray6 = [];
var tweetsArray7 = [];
var tweetsArray8 = [];
var tweetsArray9 = [];

var favoritesArray1 = [];
var favoritesArray2 = [];
var favoritesArray3 = [];
var favoritesArray4 = [];
var favoritesArray5 = [];
var favoritesArray6 = [];
var favoritesArray7 = [];
var favoritesArray8 = [];
var favoritesArray9 = [];

var tweet1 = new Tweet('Corey Lin','hi','hello', 12305949305849, 23, 'unliked');
var tweet2 = new Tweet('Corey Lin','hi','bye', 25949593040, 23, 'unliked');
var tweet3 = new Tweet('Corey Lin','hi','yes', 330594958, 52, 'unliked');
var tweet4 = new Tweet('Corey Lin','hi','what', 43940058493, 25, 'unliked');
var tweet5 = new Tweet('Corey Lin','hi','asdf', 530433020492920, 34, 'unliked');

tweetsArray1.push(tweet1, tweet2, tweet3, tweet4, tweet5);

tweetsArray2.push(new Tweet('Santa Claus','santadude','why hello there', 1103948712098, 34, 'unliked'));
tweetsArray2.push(new Tweet('Santa Claus','santadude','whats up doc', 2392487204985, 23, 'unliked'));
tweetsArray2.push(new Tweet('Santa Claus','santadude','whats going on', 3230252035, 24, 'unliked'));

tweetsArray3.push(new Tweet('Ronald Mcdonald','ronalddude','why hello there', 120359230, 42, 'unliked'));
tweetsArray3.push(new Tweet('Ronald Mcdonald','ronalddude','i am hungry', 22039523206285, 1, 'unliked'));

tweetsArray4.push(new Tweet('John Locke','johnlocke','why hello there', 1235029024, 23, 'unliked'));
tweetsArray4.push(new Tweet('John Locke','johnlocke','i am hungry', 22039203589, 34, 'unliked'));

tweetsArray5.push(new Tweet('Bugs Bunny','bugsbunny','why hello there', 1109841805, 0, 'unliked'));
tweetsArray5.push(new Tweet('Bugs Bunny','bugsbunny','i am hungry', 21029410, 9, 'unliked'));

tweetsArray6.push(new Tweet('Daffy Duck','daffyduck','why hello there', 110210505930, 0, 'unliked'));
tweetsArray7.push(new Tweet('Chuck Norris','chucknorris','why hello there', 10308204821, 0, 'unliked'));
tweetsArray8.push(new Tweet('Bob Builder','bobthebuilder','why hello there', 1550403959, 0, 'unliked'));
tweetsArray9.push(new Tweet('Steph Curry','stephcurry','why hello there', 1302949, 0, 'unliked'));

var user1 = new Person('hi','hi','Corey Lin', 23, 'Los Angeles', tweetsArray1, followingArray1, 'images/CL_2.jpg', favoritesArray1);
var user2 = new Person('santadude','hello','Santa Claus', 200, 'North Pole', tweetsArray2, followingArray2,'images/CL_2.jpg', favoritesArray1 );
var user3 = new Person('ronalddude','hello','Ronald Mcdonald', 100, 'Mcdonalds',tweetsArray3, followingArray3, 'images/CL_2.jpg', favoritesArray1);
var user4 = new Person('johnlocke', 'hello', 'John Locke', 40, 'Orange County', tweetsArray4, followingArray4, 'images/CL_2.jpg', favoritesArray1);
var user5 = new Person('bugsbunny','hello','Bugs Bunny', 252, 'Rabbit Hole', tweetsArray5, followingArray5, 'images/CL_2.jpg', favoritesArray1);
var user6 = new Person('daffyduck','hello','Daffy Duck', 252,'Trees', tweetsArray6, followingArray6, 'images/CL_2.jpg', favoritesArray1);
var user7 = new Person('chucknorris','hello','Chuck Norris', 235235, 'Washington', tweetsArray7, followingArray7, 'images/CL_2.jpg', favoritesArray1);
var user8 = new Person('bobthebuilder','hello','Bob Builder', 23423, 'Wyoming', tweetsArray8, followingArray8, 'images/CL_2.jpg', favoritesArray1);
var user9 = new Person('stephcurry','hello','Steph Curry', 23523,'North Carolina', tweetsArray9, followingArray9, 'images/CL_2.jpg', favoritesArray1);

people.push(user1, user2, user3, user4, user5, user6, user7, user8, user9);

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
  // console.log(req.cookies.session);
  for (var i = 0; i < people.length; i++) {
    if (req.cookies.session === people[i].username) {
      userArray.push(people[i]);
      // console.log(userArray);
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
  // console.log(people);

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
  var newTweetsArray = [];

  var newFollowingArray = [];
  var newFavoritesArray = [];
  people.push(new Person(newUser.username, newUser.password, 'User', 500, 'Los Angeles', newTweetsArray, newFollowingArray, 'images/CL_2.jpg', newFavoritesArray));
})

app.get('/logout', cookieParser(), function(req, res) {
  res.clearCookie('session');
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/tweets', function(req, res) {
  res.json(people);
})

app.post('/follow', jsonParser, function(req, res) {
  // console.log(req.body);
  var userClient = req.body.currentUser;
  var userToFollow = req.body.followUser;
  // console.log(userToFollow);
  // console.log(userClient);
  for (var g = 0; g < people.length; g++) {
    if (userToFollow === people[g].username) {
      for (var x = 0; x < people.length; x++) {
        if (userClient === people[x].username)   {
          people[x].following.push(new Following(people[g].username));
          // console.log(people[x]);
        }
      }
      res.sendStatus(200);
    }
  }
});

function randomNumber(min, max) {
  return Math.random() * (max - min);
}

app.post('/newtweet', jsonParser, function(req, res) {
  var tweet = req.body.tweet;
  var username = req.body.username;
  var name = req.body.name;
  var slicedUsername = username.slice(1);
  for (var j = 0; j < people.length; j++) {
    if (slicedUsername == people[j].username) {
      var x = randomNumber(50, 999999999999);
      var newTweet = new Tweet(name, slicedUsername, tweet, x, 0, 'unliked');
      people[j].tweets.push(newTweet);
      // console.log(people[j].tweets);
    }
  }
  res.sendStatus(200);
})


app.post('/favorite', jsonParser, function(req, res) {
  var username = req.body.username;
  var slicedUsername = username.slice(1);

  for (var j = 0; j < people.length; j++) {
    // console.log(people[j].tweets);
    for (var y = 0; y < people[j].tweets.length; y++) {
      if (req.body.id == people[j].tweets[y].id) {
        var oldCountString = people[j].tweets[y].likes;
        oldCountNumber = parseInt(oldCountString);
        var newCountNumber = add(oldCountNumber, 1);
        // console.log(newCountNumber);
        people[j].tweets[y].likes = newCountNumber;
        // console.log(people[j].tweets[y].likes);
        people[j].tweets[y].status = 'liked';

        for (var a = 0; a < people.length; a++) {
          if (slicedUsername == people[a].username) {
            people[a].favorites.push(people[j].tweets[y]);
            console.log(people[a].favorites);

          }
        }
      }
    }
  }
})

app.post('/unfavorite', jsonParser, function(req, res) {
  var username = req.body.username;
  var tweetId = req.body.id;
  var slicedUsername = username.slice(1);
  for (var j = 0; j < people.length; j++) {
    // console.log(people[j].tweets);
    for (var y = 0; y < people[j].tweets.length; y++) {
      if (req.body.id == people[j].tweets[y].id) {
        var oldCountString = people[j].tweets[y].likes;
        oldCountNumber = parseInt(oldCountString);
        var newCountNumber = subtract(oldCountNumber, 1);
        // console.log(newCountNumber);
        people[j].tweets[y].likes = newCountNumber;
        // console.log(people[j].tweets[y].likes);
        people[j].tweets[y].status = 'unliked';

        for (var a = 0; a < people.length; a++) {
          if (slicedUsername == people[a].username) {
            for (i = 0; i < people[a].favorites.length; i++) {
              if (people[a].favorites[i].id == tweetId) {
                people[a].favorites.splice(i,1);
                console.log(people[a].favorites);
              }
            }
          }
        }

      }
    }
  }
})

app.get('/viewfavorites', cookieParser(), function(req, res) {
  console.log(req.cookies.session);
  var username = req.cookies.session;
  for (var t = 0; t < people.length; t++) {
    if (username == people[t].username) {
      res.send(people[t]);
    }
  }
});


app.listen(8080, function() {
  console.log("listening on port 8080");
});
