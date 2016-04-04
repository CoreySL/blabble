var express = require('express');
var bodyParser = require('body-parser');
var Person = require('./person.js');
var jsonParser = bodyParser.json();
var app = express();
var _ = require('underscore');
var faker = require('faker');
var cookieParser = require('cookie-parser');

var people = [];

var count = 0;
getUsers();
function getUsers() {
  var tweetsArray = [];
  var randomName = faker.name.findName();
  var randomUsername = faker.internet.userName();
  var randomPassword = faker.internet.password();
  var randomImage = faker.image.avatar();
  var randomSentence = faker.lorem.sentence();
  var randomDate = faker.date.recent();
  var id = randomNumber(50, 999999999999);
  var likes = randomNumber(0, 10);
  var date = new Date(randomDate);
  var repostStatus = 'not-reposted';
  var repostCount = randomNumber (0, 20);
  var repostId = randomNumber (50, 999999990);
  //      function Tweet(name, username, tweet, id, likes, status, image, date, repostStatus, repostCount) {
  var tweet = new Tweet(randomName, randomUsername, randomSentence, id, likes, 'unliked', randomImage, date, repostStatus, repostCount, repostId);
  tweetsArray.push(tweet);
  //           function(username, password, name, age, location, tweets, following, image, favorites, reposts) {
  var user = new Person(randomUsername, 'hello', randomName, 25, 'LA', tweetsArray, "", randomImage, "", "");
  people.push(user);
  count ++;
  if (count < 10) {
    getUsers();
  }
}

function Tweet(name, username, tweet, id, likes, status, image, date, repostStatus, repostCount, repostId) {
  this.name = name;
  this.username = username;
  this.tweet = tweet;
  this.id = id;
  this.likes = likes;
  this.status = status;
  this.image = image;
  this.date = date;
  this.repostStatus = repostStatus;
  this.repostCount = repostCount;
  this.repostId = repostId;

}

function Favorite(x) {
  Tweet.call(this, x.name, x.username, x.tweet, x.id, x.likes, x.status, x.image, x.date, x.repostStatus, x.repostCount, x.repostId);
}

function Repost(x) {
  Tweet.call(this, x.name, x.username, x.tweet, x.id, x.likes, x.status, x.image, x.date, x.repostStatus, x.repostCount, x.repostId);
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

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function timeConverter(UNIX_timestamp){
  var x = new Date(UNIX_timestamp);
  var month = x.getMonth();
  var year = x.getFullYear();
  var date = x.getDate();
  var hour = x.getHours();
  var min = x.getMinutes();
  var sec = x.getSeconds();
  var time = {
    month: month,
    date: date,
    year: year,
    hour: hour,
    min: min,
    sec: sec
  };
  return time;
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

var repostArray1 = [];
var repostArray2 = [];
var repostArray3 = [];
var repostArray4 = [];
var repostArray5 = [];
var repostArray6 = [];
var repostArray7 = [];
var repostArray8 = [];
var repostArray9 = [];

var tweet1 = new Tweet('Corey Lin','hi','santadude', 12305949305849, 23, 'unliked', "images/CL_2.jpg", new Date('December 18, 2015 03:24:00'), 'not-reposted', 0, 23529203692062);
var tweet2 = new Tweet('Corey Lin','hi','bye', 25949593040, 23, 'unliked', "images/CL_2.jpg", new Date('December 19, 2015 03:24:00'), 'not-reposted', 0, 2352032960302);
var tweet3 = new Tweet('Corey Lin','hi','yes', 330594958, 52, 'unliked',"images/CL_2.jpg", new Date('December 21, 2015 03:24:00'), 'not-reposted', 0, 22233344455);
var tweet4 = new Tweet('Corey Lin','hi','what', 43940058493, 25, 'unliked', "images/CL_2.jpg", new Date('December 25, 2015 03:24:00'), 'not-reposted', 0, 2352352362443);
var tweet5 = new Tweet('Corey Lin','hi','asdf', 530433020492920, 34, 'unliked', "images/CL_2.jpg", new Date('December 22, 2015 03:24:00'), 'not-reposted', 0, 3343565534);

// var favorite = new Favorite(tweet1);
// console.log(favorite);


tweetsArray1.push(tweet1, tweet2, tweet3, tweet4, tweet5);

tweetsArray2.push(new Tweet('Santa Claus','santadude','guys im real!!! yall are stupid! #onlykidsknow #onlykidsaresmart ', 1103948712098, 34, 'unliked', 'images/santa.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 23523224222));
tweetsArray2.push(new Tweet('Santa Claus','santadude','@toothfairy help me out here!', 2392487204985, 23, 'unliked', 'images/santa.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 2234234234223));
tweetsArray2.push(new Tweet('Santa Claus','santadude','yall are going on my naughty list fsho! #coal #scrooges #morepresentsforme #toobad', 3230252035, 24, 'unliked', 'images/santa.jpg', new Date('January 14, 2016 03:24:00'), 'not-reposted', 0, 3325233523));

tweetsArray3.push(new Tweet('Ronald Mcdonald','ronalddude','i love to see you smile!', 120359230, 42, 'unliked', 'images/mcdonalds.png', new Date('February 01, 2016 03:24:00'), 'not-reposted', 0, 22342333463234));
tweetsArray3.push(new Tweet('Ronald Mcdonald','ronalddude',"i'm lovin it!", 22039523206285, 1, 'unliked', 'images/mcdonalds.png', new Date('December 19, 2015 03:24:00'), 'not-reposted', 0, 23422541476));

tweetsArray4.push(new Tweet('Donald Trump','mrtrump', 'hello', 1235029024, 23, 'unliked', 'images/trump.jpg', new Date('March 22, 2016 03:24:00'), 'not-reposted', 0, 34566883222164));
tweetsArray4.push(new Tweet('Donald Trump','mrtrump','i am hungry', 22039203589, 34, 'unliked', 'images/trump.jpg', new Date('April 01, 2016 03:24:00'), 'not-reposted', 0, 345357163653));

tweetsArray5.push(new Tweet('Bugs Bunny','bugsbunny','why hello there', 1109841805, 0, 'unliked', 'images/bugsbunny.jpg', new Date('January 06, 2016 03:24:00'), 'not-reposted', 0, 25347346214));
tweetsArray5.push(new Tweet('Bugs Bunny','bugsbunny','i am hungry', 21029410, 9, 'unliked', 'images/bugsbunny.jpg', new Date('February 10, 2016 03:24:00'), 'not-reposted', 0, 2352367315));

tweetsArray6.push(new Tweet('Daffy Duck','daffyduck','why hello there', 110210505930, 0, 'unliked', 'images/daffy.jpg', new Date('January 15, 2016 03:24:00'), 'not-reposted', 0, 235423423511));
tweetsArray7.push(new Tweet('Chuck Norris','chucknorris','why hello there', 10308204821, 0, 'unliked', 'images/default-profile.jpg', new Date('January 25, 2016 03:24:00'), 'not-reposted', 0, 23246313422262114));
tweetsArray8.push(new Tweet('Bob Builder','bobthebuilder','why hello there', 1550403959, 0, 'unliked', 'images/default-profile.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 345348943798210));
tweetsArray9.push(new Tweet('Steph Curry','stephcurry','why hello there', 12128591839, 0, 'unliked', 'images/curry.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 2342830128011));
tweetsArray9.push(new Tweet('Steph Curry','stephcurry','ball is life #basketball #warriors #back2back', 1302949, 0, 'unliked', 'images/curry.jpg', new Date('January 20, 2016 03:24:00'), 'not-reposted', 0, 2304923092093021644));

var user1 = new Person('hi','hi','Corey Lin', 23, 'Los Angeles', tweetsArray1, followingArray1, 'images/CL_2.jpg', favoritesArray1, repostArray1);
var user2 = new Person('santadude','hello','Santa Claus', 200, 'North Pole', tweetsArray2, followingArray2,'images/santa.jpg', favoritesArray1, repostArray2);
var user3 = new Person('ronalddude','hello','Ronald Mcdonald', 100, 'Mcdonalds',tweetsArray3, followingArray3, 'images/mcdonalds.png', favoritesArray1, repostArray3);
var user4 = new Person('johnlocke', 'hello', 'John Locke', 40, 'Orange County', tweetsArray4, followingArray4, 'images/CL_2.jpg', favoritesArray1, repostArray4);
var user5 = new Person('bugsbunny','hello','Bugs Bunny', 252, 'Rabbit Hole', tweetsArray5, followingArray5, 'images/bugsbunny.jpg', favoritesArray1, repostArray5);
var user6 = new Person('daffyduck','hello','Daffy Duck', 252,'Trees', tweetsArray6, followingArray6, 'images/daffy.jpg', favoritesArray1, repostArray6);
var user7 = new Person('chucknorris','hello','Chuck Norris', 235235, 'Washington', tweetsArray7, followingArray7, 'images/default-profile.jpg', favoritesArray1, repostArray7);
var user8 = new Person('bobthebuilder','hello','Bob Builder', 23423, 'Wyoming', tweetsArray8, followingArray8, 'images/default-profile.jpg', favoritesArray1, repostArray8);
var user9 = new Person('stephcurry','hello','Steph Curry', 23523,'North Carolina', tweetsArray9, followingArray9, 'images/curry.jpg', favoritesArray1, repostArray9);

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

app.get('/timeline', function(req, res) {
  // console.log(req.cookies.session);
  var targetPerson = _.find(people, {username: req.cookies.session});
  // console.log(targetPerson);
  res.send(targetPerson);
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
  var newRepostArray = [];
  people.push(new Person(newUser.username, newUser.password, 'User', 500, 'Los Angeles', newTweetsArray, newFollowingArray, 'images/default-profile.jpg', newFavoritesArray, newRepostArray));
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
  var slicedUsername = userClient.slice(1);
  // console.log(req.body);
  // console.log(userToFollow);
  // console.log(userClient);
  for (var g = 0; g < people.length; g++) {
    if (userToFollow === people[g].username) {
      // console.log('WHY YES OH YES');
      // console.log(people[g]);
      for (var x = 0; x < people.length; x++) {
        if (slicedUsername === people[x].username)   {
          people[x].following.push(new Following(people[g].username));
          console.log(people[g]);
        }
      }
      res.sendStatus(200);
    }
  }
});

app.post('/newtweet', jsonParser, function(req, res) {
  var tweet = req.body.tweet;
  var username = req.body.username;
  var name = req.body.name;
  var date = req.body.date;
  var newDate = timeConverter(date);
  var slicedUsername = username.slice(1);
  var repostStatus = 'not-reposted';
  // console.log(slicedUsername);
  var targetPerson = _.find(people, {username: slicedUsername});
  // console.log(targetPerson);
  var userImage = targetPerson.image;
  for (var j = 0; j < people.length; j++) {
    if (slicedUsername == people[j].username) {
      var x = randomNumber(50, 999999999999);
      var repostId = randomNumber(50, 99999999999);
      var newTweet = new Tweet(name, slicedUsername, tweet, x, 0, 'unliked', userImage, new Date(newDate.year, newDate.month, newDate.date, newDate.hour, newDate.min, newDate.sec), repostStatus, 0, repostId);
      people[j].tweets.push(newTweet);
      // console.log(newTweet);
    }
  }
  res.sendStatus(200);
})

app.post('/favorite', jsonParser, function(req, res) {
  var username = req.body.username;
  var slicedUsername = username.slice(1);
  // console.log(slicedUsername);
  var particularTweet;// console.log(username);
  // var particularTweetArray = [];
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
        particularTweet = people[j].tweets[y];
        var favorite = new Favorite(particularTweet);
        // console.log(favorite);
        // particularTweetArray.push(favorite);
        // console.log(particularTweetArray);
        console.log(people);
      }
    }
  }
  for (var a = 0; a < people.length; a++) {
    if (slicedUsername === people[a].username) {
      var targetPerson = people[a];
    }
  }
  // console.log(targetPerson.favorites);
  targetPerson.favorites.push(favorite);
  console.log(targetPerson);
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

app.post('/repost', jsonParser, function(req, res) {
  var username = req.body.username;
  var tweetId = req.body.id;
  var slicedUsername = username.slice(1);
  var targetPerson = _.find(people, {username: slicedUsername});
  var particularPost;
  // console.log(targetPerson);

  for (var q = 0; q < people.length; q++) {
    for (var t = 0; t < people[q].tweets.length; t++) {
      if (tweetId == people[q].tweets[t].id) {
        // console.log('yes');
        var oldRepostCountString = people[q].tweets[t].repostCount;
        console.log('yes');
        console.log(oldRepostCountString);
        oldRepostCountNumber = parseInt(oldRepostCountString);
        var newRepostCountNumber = add(oldRepostCountNumber, 1);
        console.log(newRepostCountNumber);
        people[q].tweets[t].repostCount = newRepostCountNumber;
        people[q].tweets[t].repostStatus = 'reposted';
        particularPost = people[q].tweets[t];
        var repost = new Repost(particularPost);
        console.log(repost);
      }
    }
  }

  targetPerson.reposts.push(repost);
  console.log(targetPerson);
});

app.get('/viewfavorites', cookieParser(), function(req, res) {
  console.log(req.cookies.session);
  var username = req.cookies.session;
  for (var t = 0; t < people.length; t++) {
    if (username == people[t].username) {
      console.log(people[t].favorites);
      res.send(people[t]);
    }
  }
});

app.post('/search', jsonParser, function(req, res) {
  // console.log(req.body);
  var matchedKeywordArray = [];
  var matchedUsernameArray = [];
  var totalMatchedArray = [];

  var searchInput = req.body.searchInput;
  for (var s = 0; s < people.length; s++) {
    for (var k = 0; k < people[s].tweets.length; k++) {
      if (people[s].tweets[k].tweet.match(searchInput.toLowerCase())) {
        // console.log(people[s].tweets[k].tweet);
        totalMatchedArray.push(people[s].tweets[k]);
      }
    }
    var emptyUsername = people[s].username;
    var referenceUsername = "@" + emptyUsername;
    if (referenceUsername.toLowerCase().match(searchInput.toLowerCase())) {
      for (var p = 0; p < people[s].tweets.length; p++) {
        totalMatchedArray.push(people[s].tweets[p]);
      }
    }
  }
  // totalMatchedArray.push(matchedKeywordArray);
  // totalMatchedArray.push(matchedUsernameArray);
  // console.log(totalMatchedArray);
  if (totalMatchedArray.length > 0) {
    // console.log(matchedArray.length);
    // console.log(matchedArray);
    res.send(totalMatchedArray);
  }
  if (totalMatchedArray = [ [], [] ]) {
    // console.log('no matches found');
    res.send('no matches found');
    }
})

app.post('/viewfollowing', jsonParser, function(req, res) {
  var username = req.body.dashboardUsername;
  var slicedUsername = username.slice(1);
  var users = [];
  var targetPerson = _.find(people, {username: slicedUsername});
  followingNames = targetPerson.following;
  // console.log(followingNames);
  for (var p = 0; p < followingNames.length; p++) {
  var targetPerson = _.find(people, {username: followingNames[p].user});
  users.push(targetPerson);
  }
  res.send(users);
})


app.listen(8080, function() {
  console.log("listening on port 8080");
});
