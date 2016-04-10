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
  var notificationsArray = [];
  var messagesArray = [];
  var randomName = faker.name.findName();
  var randomUsername = faker.internet.userName();
  var randomPassword = faker.internet.password();
  var randomImage = faker.image.avatar();
  var repostStatus = 'not-reposted';
  var randomPostNumber = randomNumber(5,20);
  for (var a = 0; a < randomPostNumber; a++) {
    var repostCount = randomNumber (0, 20);
    var repostId = randomNumber (50, 999999990);
    var randomSentence = faker.lorem.sentence();
    var id = randomNumber(50, 999999999999);
    var randomDate = faker.date.recent();
    var date = new Date(randomDate);
    var likes = randomNumber(0, 10);
    //      function Tweet(name, username, tweet, id, likes, status, image, date, repostStatus, repostCount) {
    var tweet = new Tweet(randomName, randomUsername, randomSentence, id, likes, 'unliked', randomImage, date, repostStatus, repostCount, repostId);
    tweetsArray.push(tweet);
  }

  //           function(username, password, name, age, location, tweets, following, image, favorites, reposts) {
  var user = new Person(randomUsername, 'hello', randomName, 25, 'LA', tweetsArray, "", randomImage, "", "", notificationsArray, messagesArray, '');
  people.push(user);
  count ++;
  if (count < 100) {
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

function Notifications(receivingUser, sendingUser, type, date) {
  this.receivingUser = receivingUser;
  this.sendingUser = sendingUser;
  this.type = type;
  this.date = date;
}

function Message(image, currentUser, targetUser, message, date) {
  this.image = image;
  this.currentUser = currentUser;
  this.targetUser = targetUser;
  this.message = message;
  this.date = date;
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

var notificationsArray1 = [];
var notificationsArray2 = [];
var notificationsArray3 = [];
var notificationsArray4 = [];
var notificationsArray5 = [];
var notificationsArray6 = [];
var notificationsArray7 = [];
var notificationsArray8 = [];
var notificationsArray9 = [];

var messagesArray1 = [];
var messagesArray2 = [];
var messagesArray3 = [];
var messagesArray4 = [];
var messagesArray5 = [];
var messagesArray6 = [];
var messagesArray7 = [];
var messagesArray8 = [];
var messagesArray9 = [];

notificationsArray1.push(new Notifications('hi', 'santadude', 'following', new Date('January 15, 2016 03:24:00')));
notificationsArray1.push(new Notifications('hi', 'daffyduck', 'following', new Date('April 7, 2016 03:24:00')));
notificationsArray1.push(new Notifications('hi', 'bugsbunny', 'following', new Date('April 6, 2016 03:24:00')));
notificationsArray1.push(new Notifications('hi', 'ronalddude', 'following', new Date('April 5, 2016 03:24:00')));
notificationsArray1.push(new Notifications('hi', 'mrtrump', 'following', new Date('April 6, 2016 03:24:00')));

followingArray1.push(new Following('santadude'));
followingArray1.push(new Following('ronalddude'));
followingArray1.push(new Following('daffyduck'));
followingArray1.push(new Following('bugsbunny'));
followingArray1.push(new Following('chucknorris'));
followingArray1.push(new Following('stephcurry'));
followingArray1.push(new Following('dog'));
followingArray1.push(new Following('lebronjames'));
followingArray1.push(new Following('mrtrump'));


followingArray2.push(new Following('hi'));
followingArray3.push(new Following('hi'));
followingArray5.push(new Following('hi'));
followingArray6.push(new Following('hi'));

messagesArray1.push(new Message('images/CL_2.jpg', 'hi', 'santadude', "What's up santa???", new Date('January 15, 2016 08:24:00')));
messagesArray1.push(new Message('images/CL_2.jpg', 'hi', 'santadude', "Hello???", new Date('January 17, 2016 09:24:00')));
messagesArray1.push(new Message('images/CL_2.jpg', 'hi', 'santadude', "Are you real???", new Date('January 19, 2016 10:24:00')));

messagesArray2.push(new Message('images/santa.jpg', 'santadude', 'hi', "What's up Corey???", new Date('January 16, 2016 11:24:00')));
messagesArray2.push(new Message('images/santa.jpg', 'santadude', 'hi', "Are you a good boy???", new Date('January 18, 2016 12:24:00')));
messagesArray2.push(new Message('images/santa.jpg', 'santadude', 'hi', "Want some coal???", new Date('January 20, 2016 05:24:00')));

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

var tweet1 = new Tweet('Corey Lin','hi','@santadude stop pretending to be santa!!!', 12305949305849, 23, 'unliked', "images/CL_2.jpg", new Date('April 1, 2015 03:24:00'), 'not-reposted', 0, 23529203692062);
var tweet2 = new Tweet('Corey Lin','hi','random post #random', 25949593040, 23, 'unliked', "images/CL_2.jpg", new Date('December 19, 2015 03:24:00'), 'not-reposted', 0, 2352032960302);
var tweet3 = new Tweet('Corey Lin','hi','if apple makes a car..will it have windows? #randomthoughts #apple #mindblown', 330594958, 52, 'unliked',"images/CL_2.jpg", new Date('April 5, 2015 03:24:00'), 'not-reposted', 0, 22233344455);
var tweet4 = new Tweet('Corey Lin','hi','i just saw the apple store get robbed...does that make me an iWitness? #randomthoughts', 43940058493, 25, 'unliked', "images/CL_2.jpg", new Date('March 25, 2015 03:24:00'), 'not-reposted', 0, 2352352362443);
var tweet5 = new Tweet('Corey Lin','hi','i asked @santadude for coal for christmas so what would he give me if im naughty?? #beatingthesystem #whatnow #christmas #mindblown', 530433020492920, 34, 'unliked', "images/CL_2.jpg", new Date('December 25, 2015 03:24:00'), 'not-reposted', 0, 3343565534);
var tweet6 = new Tweet('Corey Lin','hi',"#basketball #thegoodlife @santadude you don't exist sorry. @ronalddude you're creepy as hell #mickeyD's #i'mlovinit", 23408928093590, 10000, 'unliked', 'images/CL_2.jpg', new Date('April 4, 2016 3:55:00'), 'not-reposted', 123, 1395820980191024);
var tweet7 = new Tweet('Corey Lin','hi','#basketball', 23952095320, 23, 'unliked', "images/CL_2.jpg", new Date('April 1, 2016 03:24:00'), 'not-reposted', 34, 2093209680296);
var tweet8 = new Tweet('Corey Lin','hi','#FYI if you type in a hashtag it updates the trending hashtags #basketball #basketball #basketball', 0239847204987, 23, 'unliked', "images/CL_2.jpg", new Date('April 1, 2016 03:24:00'), 'not-reposted', 0, 404040444450325);
var tweet9 = new Tweet('Corey Lin','hi','#FYI when searching for a hashtag, all those hashtags will be returned bolded for you.', 232094862703, 23, 'unliked', "images/CL_2.jpg", new Date('April 4, 2016 03:24:00'), 'not-reposted', 0, 2049202840225333);
var tweet10 = new Tweet('Corey Lin','hi','#FYI if you posted something this year, the post will not show the year ', 293842094839, 23, 'unliked', "images/CL_2.jpg", new Date('April 7, 2016 03:24:00'), 'not-reposted', 0, 23092903862224502);
var tweet11 = new Tweet('Corey Lin','hi','#FYI if you view a timeline, the cover shows a random gradient', 029846829702, 23, 'unliked', "images/CL_2.jpg", new Date('April 8, 2016 03:24:00'), 'not-reposted', 0, 3049302212029);
var tweet12 = new Tweet('Corey Lin','hi','#FYI if you post something with a # or @ that word automatically becomes clickable', 394892804302, 23, 'unliked', "images/CL_2.jpg", new Date('April 3, 2016 03:24:00'), 'not-reposted', 0, 20935021111352);
var tweet13 = new Tweet('Corey Lin','hi',"#FYI You can't repost your own post silly.", 2308350820820283, 23, 'unliked', "images/CL_2.jpg", new Date('April 6, 2016 03:24:00'), 'not-reposted', 0, 3205823095829);

tweetsArray1.push(tweet1, tweet2, tweet3, tweet4, tweet5, tweet6, tweet7, tweet8, tweet9, tweet10, tweet11, tweet12, tweet13);

tweetsArray2.push(new Tweet('Santa Claus','santadude','guys im real!!! yall are stupid! #onlykidsknow #onlykidsaresmart ', 1103948712098, 34, 'liked', 'images/santa.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 23523224222));
tweetsArray2.push(new Tweet('Santa Claus','santadude',"@toothfairy help me out here! or else you'll be #naughty too", 2392487204985, 23, 'unliked', 'images/santa.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 2234234234223));
tweetsArray2.push(new Tweet('Santa Claus','santadude','yall are going on my naughty list fsho! #coal #scrooges #morepresentsforme #toobad', 3230252035, 24, 'unliked', 'images/santa.jpg', new Date('January 14, 2016 03:24:00'), 'not-reposted', 0, 3325233523));

tweetsArray3.push(new Tweet('Ronald Mcdonald','ronalddude','i #love to see you smile! #frenchfries', 120359230, 42, 'liked', 'images/mcdonalds.png', new Date('February 01, 2016 03:24:00'), 'not-reposted', 0, 22342333463234));
tweetsArray3.push(new Tweet('Ronald Mcdonald','ronalddude',"i'm lovin it! #frenchfries", 22039523206285, 1, 'unliked', 'images/mcdonalds.png', new Date('December 19, 2015 03:24:00'), 'not-reposted', 0, 23422541476));

tweetsArray4.push(new Tweet('Donald Trump','mrtrump', 'Make america great again!!!! i #love america! truly! #trump2016', 1235029024, 23, 'liked', 'images/trump.jpg', new Date('March 22, 2016 03:24:00'), 'not-reposted', 0, 34566883222164));
tweetsArray4.push(new Tweet('Donald Trump','mrtrump','TRUMP FOR PRES 2016 BOYS N GIRLS!!!! #trump2016 SORRY @presidentclinton', 22039203589, 34, 'unliked', 'images/trump.jpg', new Date('April 01, 2016 03:24:00'), 'not-reposted', 0, 345357163653));

tweetsArray5.push(new Tweet('Bugs Bunny','bugsbunny',"What's up doc???", 1109841805, 0, 'liked', 'images/bugsbunny.jpg', new Date('January 06, 2016 03:24:00'), 'not-reposted', 0, 25347346214));
tweetsArray5.push(new Tweet('Bugs Bunny','bugsbunny',"Anyone got some #carrots around here? I'm starvin!!! @santadude bring me something please! ", 21029410, 9, 'unliked', 'images/bugsbunny.jpg', new Date('February 10, 2016 03:24:00'), 'not-reposted', 0, 2352367315));

tweetsArray6.push(new Tweet('Daffy Duck','daffyduck',"It's #rabbit season. #eatrabbits #bunnies @bugsbunny", 110210505930, 0, 'liked', 'images/daffy.jpg', new Date('January 15, 2016 03:24:00'), 'not-reposted', 0, 235423423511));
tweetsArray7.push(new Tweet('Chuck Norris','chucknorris','why hello there. say no to #trump2016 please', 10308204821, 0, 'unliked', 'images/chucknorris.jpg', new Date('January 25, 2016 03:24:00'), 'not-reposted', 0, 23246313422262114));
tweetsArray8.push(new Tweet('Dog','dog','woof!', 1550403959, 0, 'unliked', 'images/dog.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 345348943798210));
tweetsArray8.push(new Tweet('Dog','dog','bark!', 1313819821, 0, 'unliked', 'images/dog.jpg', new Date('January 22, 2016 04:24:00'), 'not-reposted', 0, 235235232363));

tweetsArray9.push(new Tweet('Steph Curry','stephcurry','why hello there i play #basketball', 12128591839, 0, 'unliked', 'images/curry.jpg', new Date('January 21, 2016 03:24:00'), 'not-reposted', 0, 2342830128011));
tweetsArray9.push(new Tweet('Steph Curry','stephcurry','ball is life #basketball #warriors #back2back', 1302949, 0, 'unliked', 'images/curry.jpg', new Date('January 20, 2016 03:24:00'), 'not-reposted', 0, 2304923092093021644));

favoritesArray1.push(new Favorite(tweetsArray2[0]));
favoritesArray1.push(new Favorite(tweetsArray3[0]));
favoritesArray1.push(new Favorite(tweetsArray4[0]));
favoritesArray1.push(new Favorite(tweetsArray5[0]));
favoritesArray1.push(new Favorite(tweetsArray6[0]));

var user1 = new Person('hi','hi','Corey Lin', 23, 'Los Angeles', tweetsArray1, followingArray1, 'images/CL_2.jpg', favoritesArray1, repostArray1, notificationsArray1, messagesArray1, '"I am the creator."');
var user2 = new Person('santadude','hello','Santa Claus', 200, 'North Pole', tweetsArray2, followingArray2,'images/santa.jpg', favoritesArray1, repostArray2, notificationsArray2, messagesArray2, '"HO HO HO!"');
var user3 = new Person('ronalddude','hello','Ronald Mcdonald', 100, 'Mcdonalds',tweetsArray3, followingArray3, 'images/mcdonalds.png', favoritesArray1, repostArray3, notificationsArray3, messagesArray3, '"Try out our new yogurt parfait! Ba da da da da daaaa Im lovin it~"');
var user4 = new Person('mrtrump', 'hello', 'Donald Trump', 40, 'Orange County', tweetsArray4, followingArray4, 'images/trump.jpg', favoritesArray1, repostArray4, notificationsArray4, messagesArray4, '"Make America Great Again!!!"');
var user5 = new Person('bugsbunny','hello','Bugs Bunny', 252, 'Rabbit Hole', tweetsArray5, followingArray5, 'images/bugsbunny.jpg', favoritesArray1, repostArray5, notificationsArray5, messagesArray5, '"Whats up doc???"');
var user6 = new Person('daffyduck','hello','Daffy Duck', 252,'Trees', tweetsArray6, followingArray6, 'images/daffy.jpg', favoritesArray1, repostArray6, notificationsArray6, messagesArray6, '"Its always rabbit season!"');
var user7 = new Person('chucknorris','hello','Chuck Norris', 235235, 'Washington', tweetsArray7, followingArray7, 'images/chucknorris.jpg', favoritesArray1, repostArray7, notificationsArray7, messagesArray7, '"Jesus can walk on water. I can swim on land."');
var user8 = new Person('dog','hello','Dog', 23423, 'Wyoming', tweetsArray8, followingArray8, 'images/dog.jpg', favoritesArray1, repostArray8, notificationsArray8, messagesArray8, '"woooooooof"');
var user9 = new Person('stephcurry','hello','Steph Curry', 23523,'North Carolina', tweetsArray9, followingArray9, 'images/curry.jpg', favoritesArray1, repostArray9, notificationsArray9, messagesArray9, '"back to back baby"');
var user10 = new Person('lebronjames','hello', 'Lebron James', 30, 'Cleveland', '','','images/lebron.jpg', '','','','', "Gettin one for the land.");
people.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(people);
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

app.get('/checknotifications', cookieParser(), function(req, res) {
  var targetUser = _.find(people, {username: req.cookies.session});
  var notifications = targetUser.notifications;
  if (notifications.length > 0) {
    res.send(targetUser.notifications);
  }
  else {
    res.send('nothing');
  }
})

app.get('/clearnotifications', cookieParser(), function(req, res) {
  var targetUser = _.find(people, {username: req.cookies.session})
  var notifications = targetUser.notifications;
  for (var b = 0; b < notifications.length; b++) {
    console.log(notifications.length);
    notifications.splice(b, 100);
    console.log(notifications.length);
  }
  res.send('cleared notifications');
})

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

app.get('/trending', function(req, res) {
  var trendingPosts = [];
  var wordArray = [];
  var hashtags = [];
  for (var d = 0; d < people.length; d++) {
    for (var f = 0; f < people[d].tweets.length; f++) {
      if (people[d].tweets[f].tweet.match('#')) { //if a post has a hashtag push the post into trending posts
        trendingPosts.push(people[d].tweets[f].tweet);
      }
    }
  }

  var splitWords = [];
  for (var a = 0; a < trendingPosts.length; a++) {
    splitWords.push(trendingPosts[a].split(' ')); //separate into array for every space
  }

  var words = splitWords.join(','); //join into a string separated by ','

  var wordsArray = words.split(','); //split into array for every ','
  for (var w = 0; w < wordsArray.length; w++) { //locate all the words in the array that have a '#'
    if (wordsArray[w].match('#')) {
      hashtags.push(wordsArray[w]);
    }
  }

  var groups = _.groupBy(hashtags); // place matching hashtags into groups
  var shuffleGroups = _.shuffle(groups);
  function length(shuffleGroups) {
    return shuffleGroups.length;
  }

  var trendingHashtags = _.sortBy(shuffleGroups, length); //find the group that has the longest length

  var top5Hashtags = _.last(trendingHashtags, [10]);

  res.send(top5Hashtags);
})

app.post('/login', jsonParser, function(req, res) {
  // console.log(people);

  var userInfo = req.body;
  var successArray = [];
  for (var i = 0; i < people.length; i++) {
    if (userInfo.username === people[i].username && userInfo.password == people[i].password) {
    successArray.push(people[i]);
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

app.post('/convertdate', jsonParser, function(req, res) {
  var convertedDate = new Date(req.body.date);
  res.send(convertedDate);
})

app.post('/updatemessages', jsonParser, cookieParser(), function(req, res) {
  var input = req.body.input;
  var targetUser = req.body.targetUser;
  var date = req.body.date;
  var currentUsername = req.cookies.session;
  var currentUser = _.find(people, {username: currentUsername});
  currentUser.messages.push(new Message(currentUser.image, currentUser.username, targetUser, input, new Date(date)));
})



app.get('/getmessages/:username', cookieParser(), function(req, res) {
  var targetUsername = req.params.username;
  var currentUsername = req.cookies.session;
  var theTargetUser = _.find(people, {username: targetUsername});
  var theCurrentUser = _.find(people, {username: currentUsername});
  var correctMessages = [];

  for (var b = 0; b < theTargetUser.messages.length; b++) {
    if (theTargetUser.messages[b].targetUser == currentUsername) {
      correctMessages.push(theTargetUser.messages[b]);
    }
  }
  for (var a = 0; a < theCurrentUser.messages.length; a++) {
    if (theCurrentUser.messages[a].targetUser == targetUsername) {
      correctMessages.push(theCurrentUser.messages[a]);
    }
  }
  if (correctMessages.length > 0) {
    res.send(correctMessages);
  }
  else {
    res.send('nothing');
  }
})

app.get('/tweets', function(req, res) {
  res.json(people);
})

app.post('/follow', jsonParser, function(req, res) {
  var userClient = req.body.currentUser;
  var userToFollow = req.body.followUser;
  var slicedUsername = userClient.slice(1);

  var date = Date.now();
  var newDate = timeConverter(date);
  var newNotification = new Notifications(userToFollow, slicedUsername, 'following', newDate);
  for (var g = 0; g < people.length; g++) {
    if (userToFollow === people[g].username) {
      for (var x = 0; x < people.length; x++) {
        if (slicedUsername === people[x].username)   {
          people[g].notifications.push(newNotification);
          people[x].following.push(new Following(people[g].username));
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
  var targetPerson = _.find(people, {username: slicedUsername});
  var userImage = targetPerson.image;
  for (var j = 0; j < people.length; j++) {
    if (slicedUsername == people[j].username) {
      var x = randomNumber(50, 999999999999);
      var repostId = randomNumber(50, 99999999999);
      var newTweet = new Tweet(name, slicedUsername, tweet, x, 0, 'unliked', userImage, new Date(newDate.year, newDate.month, newDate.date, newDate.hour, newDate.min, newDate.sec), repostStatus, 0, repostId);
      people[j].tweets.push(newTweet);
    }
  }
  res.sendStatus(200);
})

app.post('/favorite', jsonParser, function(req, res) {
  var username = req.body.username;
  var slicedUsername = username.slice(1);
  var particularTweet;
  for (var j = 0; j < people.length; j++) {
    for (var y = 0; y < people[j].tweets.length; y++) {
      if (req.body.id == people[j].tweets[y].id) {
        var oldCountString = people[j].tweets[y].likes;
        oldCountNumber = parseInt(oldCountString);
        var newCountNumber = add(oldCountNumber, 1);

        people[j].tweets[y].likes = newCountNumber;

        people[j].tweets[y].status = 'liked';
        particularTweet = people[j].tweets[y];
        var favorite = new Favorite(particularTweet);
      }
    }
  }
  for (var a = 0; a < people.length; a++) {
    if (slicedUsername === people[a].username) {
      var targetPerson = people[a];
    }
  }
  targetPerson.favorites.push(favorite);

})

app.post('/unfavorite', jsonParser, function(req, res) {
  var username = req.body.username;
  var tweetId = req.body.id;
  var slicedUsername = username.slice(1);
  for (var j = 0; j < people.length; j++) {
    for (var y = 0; y < people[j].tweets.length; y++) {
      if (req.body.id == people[j].tweets[y].id) {
        var oldCountString = people[j].tweets[y].likes;
        oldCountNumber = parseInt(oldCountString);
        var newCountNumber = subtract(oldCountNumber, 1);
        people[j].tweets[y].likes = newCountNumber;
        people[j].tweets[y].status = 'unliked';

        for (var a = 0; a < people.length; a++) {
          if (slicedUsername == people[a].username) {
            for (i = 0; i < people[a].favorites.length; i++) {
              if (people[a].favorites[i].id == tweetId) {
                people[a].favorites.splice(i,1);

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

  for (var q = 0; q < people.length; q++) {
    for (var t = 0; t < people[q].tweets.length; t++) {
      if (tweetId == people[q].tweets[t].id) {
        var oldRepostCountString = people[q].tweets[t].repostCount;
        oldRepostCountNumber = parseInt(oldRepostCountString);
        var newRepostCountNumber = add(oldRepostCountNumber, 1);
        people[q].tweets[t].repostCount = newRepostCountNumber;
        people[q].tweets[t].repostStatus = 'reposted';
        particularPost = people[q].tweets[t];
        var repost = new Repost(particularPost);
      }
    }
  }

  targetPerson.reposts.push(repost);
});

app.get('/viewfavorites', cookieParser(), function(req, res) {
  var username = req.cookies.session;
  for (var t = 0; t < people.length; t++) {
    if (username == people[t].username) {
      res.send(people[t]);
    }
  }
});

app.post('/search', jsonParser, function(req, res) {
  var matchedKeywordArray = [];
  var matchedUsernameArray = [];
  var totalMatchedArray = [];

  var searchInput = req.body.searchInput;
  for (var s = 0; s < people.length; s++) {
    for (var k = 0; k < people[s].tweets.length; k++) {
      if (people[s].tweets[k].tweet.match(searchInput.toLowerCase())) {
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

  if (totalMatchedArray.length > 0) {
    res.send(totalMatchedArray);
  }
  else if (totalMatchedArray = [ [], [] ]) {
    res.send('no matches found');
    }
})

app.post('/viewfollowing', jsonParser, function(req, res) {
  var username = req.body.dashboardUsername;
  var slicedUsername = username.slice(1);
  var users = [];
  var targetPerson = _.find(people, {username: slicedUsername});
  followingNames = targetPerson.following;
  for (var p = 0; p < followingNames.length; p++) {
  var targetPerson = _.find(people, {username: followingNames[p].user});
  users.push(targetPerson);
  }
  res.send(users);
});

app.get('/unfollow/:slicedUsername/:followingName', function(req, res) {
  var user = _.find(people, {username: req.params.slicedUsername});
  var userFollowing = user.following;
  var following = _.find(people, {username: req.params.followingName});
  for (var c = 0; c < userFollowing.length; c++) {
    if (following.username == userFollowing[c].user) {
      userFollowing.splice(c,1);
    }
  }
  res.sendStatus(200);
});

app.get('/refollow/:slicedUsername/:reFollowName', function(req, res) {
  var user = _.find(people, {username: req.params.slicedUsername});
  var userFollowing = user.following;
  var following = _.find(people, {username: req.params.reFollowName});
  userFollowing.push(new Following(following.username));
  res.sendStatus(200);
});

app.get('/someonestimeline/:targetUsername', cookieParser(), function(req, res) {
  var resultArray = [];
  var targetUser;
  var targetUsername = req.params.targetUsername;
  var clientUsername = req.cookies.session;

  var clientUser = _.find(people, {username: req.cookies.session});

  for (var p = 0; p < people.length; p++) {
    if (people[p].username === targetUsername) {
      targetUser = people[p];
      resultArray.push(targetUser);
      resultArray.push(clientUser);
    }
  }

  res.send(resultArray);
});

app.get('/searchhashtag/:tagWithoutHash', function(req, res) {
  var hashtag = req.params.tagWithoutHash;
  var matchedHashtagArray = [];
  for (var w = 0; w < people.length; w++) {
    for (var k = 0; k < people[w].tweets.length; k++) {
      if (people[w].tweets[k].tweet.match(hashtag))  {
        matchedHashtagArray.push(people[w].tweets[k]);
      }
    }
  }
  for (var d = 0; d < matchedHashtagArray.length - 1; d++) {
    if (matchedHashtagArray[d].id == matchedHashtagArray[d+1].id) {
      matchedHashtagArray.slice(matchedHashtagArray[d]);
    }
  }

  res.send(matchedHashtagArray);
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("listening on port" + port);
});
