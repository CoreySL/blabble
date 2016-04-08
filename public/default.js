var formRow = document.getElementById("form-row");
var logout = document.getElementById('logout');
var login = document.getElementById('login');
var greetUser = document.getElementById('greet-user');
var landingPage = document.getElementById('landing-page');
var loginDiv = document.getElementById('login-div');
var signUpDiv = document.getElementById('sign-up-div')
var error = document.getElementById("error-message");
var homePage = document.getElementById('home-page');
var loginForm = document.getElementById('login-form');
var signUpForm = document.getElementById('sign-up-form');
var homeButton = document.getElementById('home-button');
var profilePage = document.getElementById('profile-page');
var profileButton = document.getElementById('profile-button');
var tweetUl = document.getElementById('tweet-ul');
var followUl = document.getElementById('follow-ul');
var tweetForm = document.getElementById('tweet-form');
var tweetPanel = document.getElementById('tweet-panel');
var homeTab = document.getElementById('home-tab');
var homeNav = document.getElementById('home-navbar');
var favoritesTab = document.getElementById('favorites-tab');
var timelineTab = document.getElementById('timeline-tab');
var timelineCover = document.getElementById('timeline-cover');
var topNavbar = document.getElementById('top-navbar');
var tweetForm2 = document.getElementById('tweet-form2');
var dashboardCard = document.getElementById('dashboard-card');
var followPanel = document.getElementById('follow-panel');
var resultsSection = document.getElementById('results-section');
var followingRow = document.getElementById('following-row'); //from index.html
var followingPreviewRow = document.getElementById('following-preview-row');
var previewElement;
var notificationsTab = document.getElementById('notifications-tab');
var notifications = document.getElementById('notifications');
var followButtonLocation = document.getElementById('follow-button-location');
var messageButtonLocation = document.getElementById('message-button-location');
var messageHeader = document.getElementById('message-header');
var messageUl = document.getElementById('message-ul');
var timelineInfo = document.getElementById('timeline-info-tabs');
var chirpAway = document.getElementById('chirp-away');
var myChirp = document.getElementById('myChirp');



function changeCoverColor() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var randomNumber = randomNumber(1,4);
  var timelineCover = document.getElementById('timeline-cover');
  if (randomNumber == 1) {
    timelineCover.className = 'img-responsive blue-gradient';
  }
  if (randomNumber == 2) {
    timelineCover.className = 'img-responsive yellow-gradient';
  }
  if (randomNumber == 3) {
    timelineCover.className = 'img-responsive grey-gradient';
  }
  if (randomNumber == 4) {
    timelineCover.className = 'img-responsive green-gradient';
  }
}

var sortDates = function(date1, date2) {
  if (date1.date < date2.date) return 1;
  if (date1.date > date2.date) return -1;
  return 0;
};

var trendingList = document.getElementById('trending-list');
function createTrendingList(hashtag, count) {
  var trendingButton = document.createElement('button');
  // trendingButton.setAttribute('class','list-group-item');
  trendingButton.setAttribute('data-tag-type','hashtag');
  trendingButton.textContent = hashtag;
  trendingButton.setAttribute('class','list-group-item hashtag-bold');

  // var hashtagWord = document.createElement('span');
  // hashtagWord.setAttribute('class','hashtag-bold');
  // hashtagWord.textContent = hashtag;

  var hashtagCount = document.createElement('span');
  hashtagCount.setAttribute('class','grey');
  hashtagCount.textContent = " " + count + " " + "chirps";

  // trendingButton.appendChild(hashtagWord);
  trendingButton.appendChild(hashtagCount);
  trendingList.appendChild(trendingButton);
}

function convertMonth(monthNumber) {
  if (monthNumber == '01') {
    monthwithout0 = 1;
  }
  if (monthNumber == '02') {

    monthwithout0 = 2;
  }
  if (monthNumber == '03') {

    monthwithout0 = 3;
  }
  if (monthNumber == '04') {

    monthwithout0 = 4;
  }
  if (monthNumber == "5") {
    monthwithout0 = 5;
  }
  if (monthNumber == '06') {
    monthwithout0 = 6;
  }
  if (monthNumber == '07') {
    monthwithout0 = 7;
  }
  if (monthNumber == '08') {
    monthwithout0 = 8;
  }
  if (monthNumber == '09') {
    monthwithout0 = 9;
  }
  if (monthNumber == '10') {
    monthwithout0 = 10;
  }
  if (monthNumber == '11') {
    monthwithout0 = 11;
  }
  if (monthNumber == '12') {
    monthwithout0 = 12;
  }
  return monthwithout0;
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

function displayResults(image, searchInput, tweet, id, likes, status, name, username, month, day, year, repostStatus, repostCount, repostId) {
  var dashboardName = document.getElementById('dashboard-name');
  var dashboardUsername = document.getElementById('dashboard-username').textContent;
  var slicedUsername = dashboardUsername.slice(1);

  var tweetLi = document.createElement('li');
  tweetLi.setAttribute('class','list-group-item');
  var tweetMedia = document.createElement('div');
  tweetMedia.setAttribute('class','media');
  var tweetLeft = document.createElement('div');
  tweetLeft.setAttribute('class','media-left');
  var tweetA = document.createElement('div');
  var tweetImage = document.createElement('img');
  tweetImage.setAttribute('data-type-id', username);
  tweetImage.setAttribute('src', image);
  tweetImage.setAttribute('style','width:50px;');
  tweetImage.setAttribute('style','height:70px;');
  tweetImage.setAttribute('class','user-hover media-object img-circle');
  var tweetBody = document.createElement('div');
  tweetBody.setAttribute('class','media-body');
  var tweetContent = document.createElement('p');

  if (tweet.match('#') || tweet.match('@')) {
    var matchedTagsArray = [];
    var splitTweet = tweet.split(' ');
    for (var m = 0; m < splitTweet.length; m++) {
      if (splitTweet[m].match('#')) {

        var hashtagElement = document.createElement('span');
        if (splitTweet[m] == searchInput) {
          hashtagElement.setAttribute('style', 'font-weight: bold; color: blue;');
        }
        else {
          hashtagElement.setAttribute('style', 'color: #337ab7;');
        }
        hashtagElement.textContent = splitTweet[m];
        hashtagElement.setAttribute('class', 'hover-hashtag');
        hashtagElement.setAttribute('data-tag-type', 'hashtag');

        matchedTagsArray.push(hashtagElement);
      }
      if (splitTweet[m].match('@')) {

        var referenceElement = document.createElement('span');
        if (splitTweet[m] == searchInput) {
          referenceElement.setAttribute('style', 'font-weight: bold; color: blue;');
        }
        else {
          referenceElement.setAttribute('style', 'color: #337ab7;');
        }
        referenceElement.textContent = splitTweet[m];
        referenceElement.setAttribute('class','hover-hashtag');
        var removeAtSign = splitTweet[m].slice(1);
        referenceElement.setAttribute('data-type-id', removeAtSign);

        matchedTagsArray.push(referenceElement);
      }
      else {
        var regularWordElement = document.createElement('span');
        regularWordElement.textContent = splitTweet[m];
        matchedTagsArray.push(regularWordElement);
      }
    }

    for (var p = 0; p < splitTweet.length; p++) {
      for (var q = 0; q < matchedTagsArray.length; q++) {
        if (splitTweet[p] === matchedTagsArray[q].textContent) {
          var tag = matchedTagsArray[q];
          splitTweet.splice(p, 1, tag);
        }
      }
    }
    for (var z = 0; z < splitTweet.length; z++) {
      tweetContent.appendChild(splitTweet[z]);
      var spacerElement = document.createElement('span');
      spacerElement.textContent = ' ';
      tweetContent.appendChild(spacerElement);
    }
  }
  else {
    tweetContent.textContent = tweet;
  }

  if (repostStatus == 'reposted') {
    var userReposted = document.createElement('p');
    userReposted.textContent = "You reposted";
    userReposted.setAttribute('style','color: #777;');
    tweetBody.appendChild(userReposted);
    var userRepostedIcon = document.createElement('i');
    userRepostedIcon.setAttribute('class','fa fa-tweet icon-right');
    tweetLeft.appendChild(userRepostedIcon);
  }
  var tweetReactionsDiv = document.createElement('div');
  var tweetFavoriteCount = document.createElement('span');
  tweetFavoriteCount.setAttribute('class','favorites-padding');
  tweetFavoriteCount.setAttribute('data-id', id);
  tweetFavoriteCount.textContent = likes;
  var tweetFavoriteIcon = document.createElement('i');
  tweetFavoriteIcon.setAttribute('class','fa fa-heart hover');
  tweetFavoriteIcon.setAttribute('name','favorited-post');
  tweetFavoriteIcon.setAttribute('id', id);
  if (status == 'unliked') {
  tweetFavoriteIcon.setAttribute('style','color: #777;');
  }
  else {
    tweetFavoriteIcon.setAttribute('style','color:red;');
  }

  var tweetRepostCount = document.createElement('span');
  tweetRepostCount.setAttribute('data-count-id',id);
  tweetRepostCount.textContent = repostCount;
  tweetRepostCount.setAttribute('class','repost-padding');
  var tweetRepostIcon = document.createElement('i');
  tweetRepostIcon.setAttribute('class','fa fa-retweet hover');
  tweetRepostIcon.setAttribute('id', repostId);
  tweetRepostIcon.setAttribute('data-post-id', id);

  if (repostStatus === 'not-reposted') {
    if(username == slicedUsername) {
      tweetRepostIcon.setAttribute('style','color: #eee;');
    }
    else {
      tweetRepostIcon.setAttribute('style','color: #6b6b6b;');
    }
  }
  else {
    tweetRepostIcon.setAttribute('style','color: green;');
  }

  var tweetHeading = document.createElement('div');
  tweetHeading.setAttribute('class','media-heading');
  var tweetName = document.createElement('span');
  var tweetNameBold = document.createElement('b');
  tweetNameBold.textContent = name;
  var tweetUsername = document.createElement('span');
  tweetUsername.setAttribute('style','color: #777');
  tweetUsername.textContent = " " + "@" + username;
  var tweetDate = document.createElement('span');
  tweetDate.setAttribute('style','color: #777');
  tweetDate.textContent = "  " + month + " " + day + " " + year;
  tweetName.appendChild(tweetNameBold);
  tweetHeading.appendChild(tweetName);
  tweetHeading.appendChild(tweetUsername);
  tweetHeading.appendChild(tweetDate);
  tweetBody.appendChild(tweetHeading);
  tweetBody.appendChild(tweetContent);

  tweetReactionsDiv.appendChild(tweetFavoriteCount);
  tweetReactionsDiv.appendChild(tweetFavoriteIcon);

  tweetReactionsDiv.appendChild(tweetRepostCount);
  tweetReactionsDiv.appendChild(tweetRepostIcon);
  tweetBody.appendChild(tweetReactionsDiv);
  tweetA.appendChild(tweetImage);
  tweetLeft.appendChild(tweetA);
  tweetMedia.appendChild(tweetLeft);
  tweetMedia.appendChild(tweetBody);
  tweetLi.appendChild(tweetMedia);
  tweetUl.appendChild(tweetLi);
}

function displayFollowing(image, username, name, dashboardUsername) {
  var followingCol = document.createElement('div');
  followingCol.setAttribute('class','col-xs-12 col-md-6 col-lg-6');
  var followingPanel = document.createElement('div');
  followingPanel.setAttribute('class','panel panel-default text-center');
  // var followMedia = document.createElement('div');
  // followMedia.setAttribute('class','media');
  var followLeft = document.createElement('div');
  followLeft.setAttribute('class','media-left');
  var followA = document.createElement('a');
  var followImage = document.createElement('img');
  followImage.setAttribute('data-type-id', username);
  followImage.setAttribute('src', image);
  followImage.setAttribute('style','width:150px;');
  followImage.setAttribute('style','height:150px;');
  followImage.setAttribute('class','media-object img-rounded');
  var followBody = document.createElement('div');
  followBody.setAttribute('class','media-body');

  var followHeading = document.createElement('div');
  followHeading.setAttribute('class','panel-heading');

  var followName = document.createElement('h3');
  var followNameBold = document.createElement('b');
  followNameBold.textContent = name;
  var followUsername = document.createElement('h5');
  followUsername.textContent = " " + "@" + username;
  var followButton = document.createElement('button');
  followButton.setAttribute('class','follow-button');
  followButton.setAttribute('class','follow-button btn btn-default');
  followButton.textContent = 'Following';
  // followButton.setAttribute('id', d);
  followButton.setAttribute('value', username);

  var userFollowingCount = document.createElement('p');
  userFollowingCount.textContent = 'Following: 0';
  var userFollowerCount = document.createElement('p');
  userFollowerCount.textContent = 'Followers: 0';
  var userPostCount = document.createElement('p');
  userPostCount.textContent = 'Chirps: 0';
  var userCatchPhrase = document.createElement('p');
  userCatchPhrase.textContent = " 'To be or not to be. blah blah blah. something philsophical' ";

  followName.appendChild(followNameBold);

  followLeft.appendChild(followA);
  followHeading.appendChild(followLeft);
  followA.appendChild(followImage);
  followBody.appendChild(followName);
  followBody.appendChild(followUsername);
  followBody.appendChild(followButton);
  followHeading.appendChild(followBody);
  followingPanel.appendChild(followHeading);

  followingPanel.appendChild(userFollowingCount);
  followingPanel.appendChild(userFollowerCount);
  followingPanel.appendChild(userPostCount);
  followingPanel.appendChild(userCatchPhrase);

  followingCol.appendChild(followingPanel);

  followingRow.appendChild(followingCol);
}

function messageList(image, message, date, currentUser, username) {
  var messageLi = document.createElement('li');
  var mediaDiv = document.createElement('div');
  var mediaSide = document.createElement('div');
  var theImage = document.createElement('img');
  var mediaBody = document.createElement('div');
  // var h5 = document.createElement('p');
  var header = document.createElement('p');
  var theDate = document.createElement('span');
  messageLi.setAttribute('class','list-group-item');
  mediaDiv.setAttribute('class','media');
  mediaBody.setAttribute('class','media-body');

  theImage.setAttribute('class','media-object img-circle');
  theImage.src = image;
  theImage.setAttribute('style', 'width: 50px; height: 50px;');
  theDate.setAttribute('style', 'color: #777;');

  // h5.textContent = response[a].currentUser;
  header.textContent = message;

  // var tweetDate = date;
  console.log(date);
  var tweetDateArray = date.split('-');
  var year = tweetDateArray[0];
  var monthNumber = tweetDateArray[1];
  // var currentDate = Date.now(); //to add (1 hour ago, 30 min ago functionality later comparing time of post with current time)
  // var convertedCurrentTime = timeConverter(currentDate); //
  if (year == 2016) {
    year = "";
  }
  var monthwithout0 = convertMonth(monthNumber);
  var thirdString = tweetDateArray[2];
  var tIndex = thirdString.indexOf('T');
  var hour = thirdString.slice(tIndex + 1, tIndex + 3);
  console.log(hour);
  var ampm;
  if (hour > 12) {
    hour = hour - 12;
    ampm = 'PM';
  }
  else {
    ampm = 'AM';
  }
  var minute = thirdString.slice(tIndex + 4, tIndex + 6);
  var day = thirdString.slice(0, tIndex);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var correctMonth = months[monthwithout0-1];

  theDate.textContent = correctMonth + " " + day + " " + year + hour + ":" + minute + ampm;
  mediaSide.appendChild(theImage);

  if (currentUser == username) {
    mediaSide.setAttribute('class','media-left media-middle');
    mediaDiv.appendChild(mediaSide);
    mediaDiv.appendChild(mediaBody);
    // mediaBody.appendChild(h5);
    mediaBody.appendChild(header);
    mediaDiv.appendChild(theDate);
  }
  else {
    mediaSide.setAttribute('class','media-right media-middle');
    // h5.setAttribute('class','pull-right');
    header.setAttribute('class','pull-right');
    theDate.setAttribute('class','pull-right');

    mediaDiv.appendChild(mediaBody);
    mediaDiv.appendChild(mediaSide);
    // mediaBody.appendChild(h5);
    mediaBody.appendChild(header);
    mediaDiv.appendChild(theDate);
  }
  messageLi.appendChild(mediaDiv);
  messageUl.appendChild(messageLi);
}

function displayPotentialFollowers(image, username, name, tweets, following) {
  var dashboardUsername = document.getElementById('dashboard-username').textContent;
  var followLi = document.createElement('li');
  followLi.setAttribute('class','list-group-item');
  followLi.setAttribute('data-id', username);
  var followMedia = document.createElement('div');
  followMedia.setAttribute('class','media');
  var followLeft = document.createElement('div');
  followLeft.setAttribute('class','media-left');
  var followA = document.createElement('a');
  followA.setAttribute('href','#');
  var followImage = document.createElement('img');
  followImage.setAttribute('data-type-id', username);
  followImage.setAttribute('src', image);
  followImage.setAttribute('style','width:70px;');
  followImage.setAttribute('style','height:75px;');
  followImage.setAttribute('class','media-object img-circle');
  var followBody = document.createElement('div');
  followBody.setAttribute('class','media-body');
  var followHeading = document.createElement('div');
  followHeading.setAttribute('class','media-heading');
  var followName = document.createElement('span');
  var followNameBold = document.createElement('b');
  followNameBold.textContent = name;
  var followUsername = document.createElement('span');
  followUsername.textContent = " " + "@" + username;
  var followButton = document.createElement('button');

  followButton.setAttribute('class','btn btn-default');
  followButton.setAttribute('content', name);
  followButton.textContent = 'Follow';
  followButton.setAttribute('data-u-id', username);
  followButton.setAttribute('data-t-id', tweets.length);
  followButton.setAttribute('data-f-id', following.length);

  var messageButton = document.createElement('button');
  messageButton.setAttribute('class','message-padding btn btn-default');
  messageButton.setAttribute('data-toggle','modal');
  messageButton.setAttribute('data-target','#myMessages');
  messageButton.setAttribute('data-u-id', username);
  messageButton.textContent = "Message";

  var spanElement = document.createElement('span');
  spanElement.textContent = '';
  spanElement.setAttribute('id', username); //check if this causes problems later

  followName.appendChild(followNameBold);
  followHeading.appendChild(followName);
  followHeading.appendChild(followUsername);
  followBody.appendChild(followHeading);
  followBody.appendChild(followButton);
  followBody.appendChild(messageButton);

  followBody.appendChild(spanElement);

  followA.appendChild(followImage);
  followLeft.appendChild(followA);
  followMedia.appendChild(followLeft);
  followMedia.appendChild(followBody);
  followLi.appendChild(followMedia);
  followUl.appendChild(followLi);
}

function add(x,y) {
  return x + y;
}

function subtract(x,y) {
  return x - y;
}

function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function showLandingPage() {
  landingPage.classList.remove('hide');
}

function showLoginDiv() {
  landingPage.classList.add('hide');
  loginDiv.classList.remove('hide');
}

function showSignUpDiv() {
  landingPage.classList.add('hide');
  signUpDiv.classList.remove('hide');
}

function showHomePage() {
  clear(tweetUl);
  clear(followUl);
  homeNav.className = 'navbar navbar-default';
  topNavbar.className = 'hidden';

  loginDiv.classList.add('hide');
  landingPage.classList.add('hide');
  homePage.classList.remove('hide');

  var xhr = new XMLHttpRequest();
  xhr.open('GET','/userinfo');
  xhr.send();
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.responseText);
    var dashboardImage = document.getElementById('dashboard-image');
    dashboardImage.src = response[0].image;
    var dashboardName = document.getElementById('dashboard-name');
    dashboardName.textContent = response[0].name;
    var dashboardUsername = document.getElementById('dashboard-username');
    dashboardUsername.textContent = "@" + response[0].username;
    var chirpsCount = document.getElementById('chirps-count');
    chirpsCount.textContent = response[0].tweets.length;
    var favoritesCount = document.getElementById('favorites-count');
    favoritesCount.textContent = response[0].favorites.length;

    var following = (response[0].following);
    // console.log(following);
    var followingArray = [];
    var recommended = [];
    var notFollowing = [];

    for (var z = 0; z < following.length; z++) {
    // console.log(following[z].user);
    followingArray.push(following[z].user);
    }

    for (var p = 0; p < response.length; p++) {
      if (followingArray.indexOf(response[p].username) ==-1) {
        recommended.push(response[p]);
      }
    }

    var followingTweets = [];
    //WHO TO FOLLOW
    for (var s = 0; s < 8; s++) {
      if (recommended[s].username !== response[0].username) {
        displayPotentialFollowers(recommended[s].image, recommended[s].username ,recommended[s].name, recommended[s].tweets, recommended[s].following);
      }
    }
    //Following Count
    for (var n = 0; n < response.length; n++) {
      for (var j = 0; j < followingArray.length; j++) {
        if (response[n].username == followingArray[j]) {
          followingTweets.push(response[n]);
          var followingCount = document.getElementById('following-span');
          followingCount.textContent = followingArray.length;
        }
      }
    }
    // console.log(followingTweets);
    //following tweets forloop
    var allTweets = [];
    for (var k = 0; k < followingTweets.length; k++) {
      for (var c = 0; c < followingTweets[k].tweets.length; c++) {

        allTweets.push(followingTweets[k].tweets[c]);
      }
    }
    //user tweets forloop
    for (var n = 0; n < response[0].tweets.length; n++) {
      allTweets.push(response[0].tweets[n]);
    }


    allTweets.sort(sortDates);

    for (var x =0; x < allTweets.length; x++) {
      var tweetDate = allTweets[x].date;
      // console.log(tweetDate);
      var tweetDateArray = tweetDate.split('-');
      var year = tweetDateArray[0];
      var monthNumber = tweetDateArray[1];
      var currentDate = Date.now(); //to add (1 hour ago, 30 min ago functionality later)
      var convertedCurrentTime = timeConverter(currentDate); //
      if (year == 2016) {
        year = "";
      }
      var monthwithout0 = convertMonth(monthNumber);
      var thirdString = tweetDateArray[2];
      var tIndex = thirdString.indexOf('T');
      var day = thirdString.slice(0, tIndex);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var correctMonth = months[monthwithout0-1];
      displayResults(allTweets[x].image, '', allTweets[x].tweet, allTweets[x].id, allTweets[x].likes, allTweets[x].status, allTweets[x].name, allTweets[x].username, correctMonth, day, year, allTweets[x].repostStatus, allTweets[x].repostCount, allTweets[x].repostId);
    }
  })
  var xhr2 = new XMLHttpRequest();
  xhr2.open('GET', '/trending');
  xhr2.send();
  xhr2.addEventListener('load', function() {
    var response = JSON.parse(xhr2.responseText);
    var reverseResponse = response.reverse();
    clear(trendingList);

    for (var a = 0; a < reverseResponse.length; a++) {
      var responseWord = reverseResponse[a];
      createTrendingList(responseWord[0], reverseResponse[a].length);
    }
  })
  var xhr3 = new XMLHttpRequest();
  xhr3.open('GET', '/checknotifications');
  xhr3.send();
  xhr3.addEventListener('load', function() {
    if (xhr3.responseText !== 'nothing') {
      var response = JSON.parse(xhr3.responseText);
      console.log(response);
      notifications.setAttribute('style', 'color: green;');
      notifications.textContent = '';
      var notificationsText = document.createElement('span');
      notificationsText.setAttribute('id', 'notifications');
      notificationsText.textContent = 'New Notifications  ';
      var notificationsBadge = document.createElement('span');
      notificationsBadge.setAttribute('class','badge');
      notificationsBadge.setAttribute('style','background-color: green;');
      notificationsBadge.textContent = response.length;
      notifications.appendChild(notificationsText);
      notifications.appendChild(notificationsBadge);
    }
  })
}



document.body.addEventListener('mouseover', function() {
  if (event.target.hasAttribute('content')) {
    var target = event.target;
    var followId = event.target.getAttribute('data-u-id');
    var domUsername = followId;
    var nameValue = target.getAttribute('content');
    var postCountValue = target.getAttribute('data-t-id');
    var followingCountValue = target.getAttribute('data-f-id');
    var parentElement = target.parentNode;
    previewElement = parentElement.getElementsByTagName('span')[2];
    clear(previewElement);
    // previewElement.className = 'following-preview';

    var grandParent = parentElement.parentNode;

    var image = grandParent.getElementsByTagName('img')[0];
    var imageValue = image.src;

    var followingCol = document.createElement('div');
    followingCol.setAttribute('class','col-xs-12');
    var followingPanel = document.createElement('div');
    followingPanel.setAttribute('class','panel panel-default text-center');
    // var followMedia = document.createElement('div');
    // followMedia.setAttribute('class','media');
    var followLeft = document.createElement('div');
    followLeft.setAttribute('class','media-left');
    var followA = document.createElement('a');
    followA.setAttribute('href','#');
    var followImage = document.createElement('img');
    followImage.setAttribute('src', imageValue);
    followImage.setAttribute('style','width:150px;');
    followImage.setAttribute('style','height:150px;');
    followImage.setAttribute('class','media-object img-rounded');
    var followBody = document.createElement('div');
    followBody.setAttribute('class','media-body');

    var followHeading = document.createElement('div');
    followHeading.setAttribute('class','panel-heading');

    var followName = document.createElement('h4');
    var followNameBold = document.createElement('b');
    followNameBold.textContent = nameValue;
    var followUsername = document.createElement('h5');
    followUsername.textContent = " " + "@" + domUsername;
    var followButton = document.createElement('button');
    followButton.setAttribute('class','btn btn-default');
    followButton.textContent = 'Follow';
    followButton.setAttribute('id', domUsername);
    // followButton.setAttribute('value', dashboardUsername);

    var userFollowingCount = document.createElement('p');
    userFollowingCount.textContent = 'Following: ' + followingCountValue;
    var userFollowerCount = document.createElement('p');
    userFollowerCount.textContent = 'Followers: 0';
    var userPostCount = document.createElement('p');
    userPostCount.textContent = 'Chirps: ' + postCountValue;
    var userCatchPhrase = document.createElement('p');
    userCatchPhrase.textContent = " 'To be or not to be. blah blah blah. something philsophical' ";

    followName.appendChild(followNameBold);
    followLeft.appendChild(followA);
    followHeading.appendChild(followLeft);
    followA.appendChild(followImage);
    followBody.appendChild(followName);
    followBody.appendChild(followUsername);
    followBody.appendChild(followButton);
    followHeading.appendChild(followBody);
    followingPanel.appendChild(followHeading);
    followingPanel.appendChild(userFollowingCount);
    followingPanel.appendChild(userFollowerCount);
    followingPanel.appendChild(userPostCount);
    followingPanel.appendChild(userCatchPhrase);
    followingCol.appendChild(followingPanel);
    previewElement.appendChild(followingCol);
    followingCol.className = 'following-preview';

    previewElement.className = 'row';
  }

  if (event.target.textContent == 'Following') {
    var target = event.target;
    target.textContent = 'Unfollow';
    target.setAttribute('id', 'unfollow');
    var username = target.getAttribute('value');
    target.setAttribute('value', username);
  }
})

document.body.addEventListener('mouseout', function() {

  if (previewElement) {
    previewElement.className = 'hidden';
  }
  var unfollowButton = document.getElementById('unfollow');
  if (unfollowButton) {
    if (unfollowButton.textContent = 'Unfollow') {
      unfollowButton.textContent = 'Following';
      unfollowButton.setAttribute('id', 'following');
    }
  }
});


//event delegation
document.body.addEventListener('click', function() {
  var type = event.target.textContent;
  var targetId = event.target.id;
  var targetName = event.target.name;
  var target = event.target;
  var targetValue = event.target.content;

  if (type == 'Message') {
    var username = event.target.getAttribute('data-u-id');
    messageHeader.textContent = username;
    console.log(username);
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/getmessages/' + username);
    xhr.send();
    xhr.addEventListener('load', function() {
      console.log(xhr.responseText);
      if (xhr.responseText == 'nothing') {
        clear(messageUl);
        var startConversation = document.createElement('h2');
        startConversation.setAttribute('id','start-conversation');
        startConversation.setAttribute('class','text-center');

        startConversation.textContent = "Start a conversation...";
        messageUl.appendChild(startConversation);
      }
      else {
        var response = JSON.parse(xhr.responseText);
        response.sort(sortDates);
        response.reverse();
        clear(messageUl);

        for (var a = 0; a < response.length; a++) {
          messageList(response[a].image, response[a].message, response[a].date, response[a].currentUser, username);
        }
      }
    })
  }

  if (targetId == 'chirp-button') {
    myChirp.className = 'modal fade';
  }

  if (target.hasAttribute('data-tag-type')) { //click on a hashtag
    homeTab.className = "active";
    favoritesTab.className = "";
    clear(tweetUl);
    followingRow.className = 'hide row';
    tweetPanel.className = 'panel panel-default';
    timelineCover.className = 'hide img-responsive';
    dashboardCard.className = 'panel panel-default';
    followPanel.className ='panel panel-default';
    // topNavbar.className = 'navbar navbar-default';
    if (type.indexOf(' ') >= 0) {
      var indexOfSpace = type.indexOf(' ');
      type = type.slice(0, indexOfSpace);
    }
    var hashtag = type;
    var tagWithoutHash = type.slice(1);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/searchhashtag/' + tagWithoutHash);
    xhr.send();
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);
      response.sort(sortDates);

      for (var h = 0; h < response.length; h++) {
        var tweetDate = response[h].date;
        // console.log(tweetDate);
        var tweetDateArray = tweetDate.split('-');
        var year = tweetDateArray[0];
        var monthNumber = tweetDateArray[1];
        var currentDate = Date.now(); //to add (1 hour ago, 30 min ago functionality later)
        var convertedCurrentTime = timeConverter(currentDate); //
        if (year == 2016) {
          year = "";
        }
        var monthwithout0 = convertMonth(monthNumber);
        var thirdString = tweetDateArray[2];
        var tIndex = thirdString.indexOf('T');
        var day = thirdString.slice(0, tIndex);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var correctMonth = months[monthwithout0-1];
        displayResults(response[h].image, hashtag, response[h].tweet, response[h].id, response[h].likes, response[h].status, response[h].name, response[h].username, correctMonth, day, year, response[h].repostStatus, response[h].repostCount, response[h].repostId);
      }
    })
  }

  if (event.target.hasAttribute('data-type-id')) { //click on a username or user Image and view timeline
    var target = event.target;
    var targetUsername = target.getAttribute('data-type-id');
    tweetForm2.className = 'hidden';
    timelineInfo.className = 'nav nav-tabs';
    followButtonLocation.className = 'btn btn-default';
    messageButtonLocation.className = 'btn btn-default';
    tweetForm2.className = 'hidden';
    chirpAway.className = 'hidden';
    clear(tweetUl);
    followingRow.className = 'hide row';
    tweetPanel.className = 'panel panel-default';
    // followPanel.classList.add('follow-panel');
    var navId = document.getElementById('navid');
    dashboardCard.className = 'hide panel panel-default';
    timelineTab.className = '';
    homeTab.className = "";
    favoritesTab.className = "";
    changeCoverColor();
    // timelineCover.className = 'img-responsive';
    topNavbar.className = 'hide navbar navbar-default';
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/someonestimeline/' + targetUsername);
    xhr.send();
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);
      followButtonLocation.setAttribute('data-u-id', response[0].username);
      messageButtonLocation.setAttribute('data-u-id', response[0].username);
      console.log(response);
      var timelineImage = document.getElementById('timeline-image');
      var timelineUsername = document.getElementById('timeline-username');
      var timelineName = document.getElementById('timeline-name');
      timelineImage.src = response[0].image;
      timelineUsername.textContent = '@' + response[0].username;
      timelineName.textContent = response[0].name;

      var userTimelinePosts = [];
      var userTweets = response[0].tweets;
      var userReposts = response[0].reposts;
      // // console.log(userTimelinePosts);
      for (var z = 0; z < userTweets.length; z++) {
        userTimelinePosts.push(userTweets[z]);
      }
      for (var w = 0; w < userReposts.length; w++) {
        userTimelinePosts.push(userReposts[w]);
      }
      userTimelinePosts.sort(sortDates);
      for (var x = 0; x < userTimelinePosts.length; x++) {
        var tweetDate = userTimelinePosts[x].date;
        var tweetDateArray = tweetDate.split('-');
        var year = tweetDateArray[0];
        var monthNumber = tweetDateArray[1];
        if (year == 2016) {
          year = "";
        }
        var monthwithout0 = convertMonth(monthNumber);
        var thirdString = tweetDateArray[2];
        var tIndex = thirdString.indexOf('T');
        var day = thirdString.slice(0, tIndex);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var correctMonth = months[monthwithout0-1];
        // console.log(userTweets[x]);
        displayResults(userTimelinePosts[x].image,'', userTimelinePosts[x].tweet, userTimelinePosts[x].id, userTimelinePosts[x].likes, userTimelinePosts[x].status, userTimelinePosts[x].name, userTimelinePosts[x].username, correctMonth, day, year, userTimelinePosts[x].repostStatus, userTimelinePosts[x].repostCount, userTimelinePosts[x].repostId);
      }

      for (var s = 0; s < response[1].following.length; s++) {
        console.log(response[1].following[s].user);
        console.log(response[0].username);
        if (targetUsername == response[1].following[s].user) {
          followButtonLocation.textContent = 'Following';
          followButtonLocation.setAttribute('value', response[0].username);
        }
        if (targetUsername == response[1].username) {
          followButtonLocation.className = 'hidden';
        }
      }
    });
  }

  if (type == 'Unfollow') {
    var dashboardUsername = document.getElementById('dashboard-username').textContent;
    var slicedUsername = dashboardUsername.slice(1);
    // console.log(slicedUsername);

    var followingTarget = event.target;
    var followingName = followingTarget.getAttribute('value');
    // console.log(followingName);
    // var pageInfo = {
    //   username: slicedUsername,
    //   following: followingName
    // }
    // var payload = JSON.stringify(pageInfo);
    // console.log(followingName);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/unfollow/' + slicedUsername + '/' + followingName);
    // xhr.open('POST', '/unfollow');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    var target = event.target;
    // console.log(target);
    target.textContent = 'Follow Again';
    target.setAttribute('id', followingName);
    target.setAttribute('value', dashboardUsername);
    target.className = 'btn btn-default';

    var followingCount = document.getElementById('following-span');
    var followingCountValue = followingCount.textContent;

    var followingCountNumber = parseInt(followingCountValue);
    var updatedFollowingCount = subtract(followingCountNumber, 1);
    followingCount.textContent = updatedFollowingCount;
  }

  if (type == 'Follow Again') {
    var dashboardUsername = document.getElementById('dashboard-username').textContent;
    var slicedUsername = dashboardUsername.slice(1);

    var reFollowTarget = event.target;
    var reFollowName = reFollowTarget.getAttribute('id');
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/refollow/' + slicedUsername + '/' + reFollowName);
    xhr.send();

    var target = event.target;
    target.textContent = 'Following';
    target.className = 'follow-button btn btn-default';
    target.setAttribute('value', reFollowName);

    var followingCount = document.getElementById('following-span');
    var followingCountValue = followingCount.textContent;
    var followingCountNumber = parseInt(followingCountValue);
    var updatedFollowingCount = add(followingCountNumber, 1);
    followingCount.textContent = updatedFollowingCount;
  }

  var notificationUl = document.getElementById('notification-ul');
  if (targetId == 'notifications') {
    console.log('yes');
    clear(notificationUl);
    var target = event.target;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/checknotifications');
    xhr.send();
    xhr.addEventListener('load', function() {
      console.log(xhr.responseText);
      if (xhr.responseText == 'nothing') {
        var notificationLi = document.createElement('p');
        // notificationLi.setAttribute('class', 'list-group-item');
        notificationLi.textContent = 'You have no new notifications.';
        notificationUl.appendChild(notificationLi);
      }
      if (xhr.responseText !== 'nothing') {
        clear(notificationUl);
        var response = JSON.parse(xhr.responseText);
        console.log(response);

        for (var x = 0; x < response.length; x++) {
          // var responseDate = JSON.parse(response[x].date);
          // console.log(responseDate);
          var notificationLi = document.createElement('li');
          notificationLi.setAttribute('class', 'list-group-item');
          if (response[x].type == 'following') {
            console.log(response[x].sendingUser);
            var plusIcon = document.createElement('i');
            plusIcon.setAttribute('class','fa fa-user-plus');
            plusIcon.setAttribute('style', 'color: green;');
            var notificationContent = document.createElement('span');
            notificationContent.textContent = " " + response[x].sendingUser + " started following you.";
            notificationLi.appendChild(plusIcon);
            notificationLi.appendChild(notificationContent);
            notificationUl.appendChild(notificationLi);
          }
        }
      }
    })
    window.setTimeout(function() {
      var xhr4 = new XMLHttpRequest();
      xhr4.open('GET', '/clearnotifications');
      xhr4.send();
      xhr4.addEventListener('load', function() {
        clear(notifications); //clear the alert
        var noteIcon = document.createElement('i');
        noteIcon.setAttribute('class','fa fa-bell');
        notifications.setAttribute('style', 'color: #337ab7;');
        notifications.appendChild(noteIcon);
        var noteSpan = document.createElement('span');
        noteSpan.textContent = 'Notifications';
        notifications.appendChild(noteSpan);

        clear(notificationUl); //clear the modal
        var notificationLi = document.createElement('p');
        notificationLi.textContent = 'You have no new notifications.';
        notificationUl.appendChild(notificationLi);
        console.log('notifications cleared,');
      });
    }, 3000);
  }



  if (targetId == 'following-header') {
    clear(followingRow);

    // clear(tweetUl);
    tweetPanel.className = 'hide panel panel-default';
    followingRow.className = 'row;'

    var dashboardUsername = document.getElementById('dashboard-username').textContent;
    var userInfo = {
      dashboardUsername: dashboardUsername
    }
    var payload = JSON.stringify(userInfo);


    var xhr = new XMLHttpRequest();
    xhr.open('POST','/viewfollowing');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(payload);
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);

      for (var b = 0; b < response.length; b++) {
        displayFollowing(response[b].image, response[b].username, response[b].name, dashboardUsername);
      }
    });
  }

  if (targetId == "user-timeline") {

    changeCoverColor();
    clear(tweetUl);
    followingRow.className = 'hide row';
    tweetPanel.className = 'panel panel-default';
    followButtonLocation.className = 'hidden btn btn-default';
    messageButtonLocation.className = 'hidden btn btn-default';
    // followPanel.classList.add('follow-panel');
    var navId = document.getElementById('navid');
    dashboardCard.className = 'hide panel panel-default';
    timelineTab.className = 'active';
    homeTab.className = "";
    favoritesTab.className = "";
    // timelineCover.className = 'img-responsive';
    topNavbar.className = 'hide navbar navbar-default';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/timeline');
    xhr.send();
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);
      // console.log(response);
      var timelineImage = document.getElementById('timeline-image');
      var timelineUsername = document.getElementById('timeline-username');
      var timelineName = document.getElementById('timeline-name');
      timelineImage.src = response.image;
      timelineUsername.textContent = '@' + response.username;
      timelineName.textContent = response.name;

      var userTimelinePosts = [];
      var userTweets = response.tweets;
      var userReposts = response.reposts;
      // console.log(userTimelinePosts);
      for (var z = 0; z < userTweets.length; z++) {
        userTimelinePosts.push(userTweets[z]);
      }
      for (var w = 0; w < userReposts.length; w++) {
        userTimelinePosts.push(userReposts[w]);
      }


      userTimelinePosts.sort(sortDates);

      for (var x = 0; x < userTimelinePosts.length; x++) {

        var tweetDate = userTimelinePosts[x].date;
        var tweetDateArray = tweetDate.split('-');
        var year = tweetDateArray[0];
        var monthNumber = tweetDateArray[1];
        if (year == 2016) {
          year = "";
        }
        var monthwithout0 = convertMonth(monthNumber);
        var thirdString = tweetDateArray[2];
        var tIndex = thirdString.indexOf('T');
        var day = thirdString.slice(0, tIndex);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var correctMonth = months[monthwithout0-1];
        // console.log(userTweets[x]);
        displayResults(userTimelinePosts[x].image,'', userTimelinePosts[x].tweet, userTimelinePosts[x].id, userTimelinePosts[x].likes, userTimelinePosts[x].status, userTimelinePosts[x].name, userTimelinePosts[x].username, correctMonth, day, year, userTimelinePosts[x].repostStatus, userTimelinePosts[x].repostCount, userTimelinePosts[x].repostId);
      }
    });
  }

  if (targetId == "favorite-posts") {
    clear(tweetUl);
    // var homeTab = document.getElementById('home-tab');
    followingRow.className = 'hide row';
    homeTab.className = "";
    timelineTab.className = ('');
    followPanel.classList.remove('follow-panel');
    tweetPanel.className ='panel panel-default';
    timelineCover.className = 'hide img-responsive';
    dashboardCard.className = 'panel panel-default';
    favoritesTab.className = "active";
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/viewfavorites');
    xhr.send();
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);

      var favoritesCount = document.getElementById('favorites-count');
      favoritesCount.textContent = response.favorites.length;
      if (favoritesCount.textContent === '0') {
        var noFavorites = document.createElement('h3');
        noFavorites.textContent = "You don't any favorite chirps!";
        tweetUl.appendChild(noFavorites);
      }
      else {
        for (var q = 0; q < response.favorites.length; q++) {

          response.favorites.sort(sortDates);
          var tweetDate = response.favorites[q].date;
          var tweetDateArray = tweetDate.split('-');
          var year = tweetDateArray[0];
          var monthNumber = tweetDateArray[1];
          if (year == 2016) {
            year = "";
          }
          var monthwithout0 = convertMonth(monthNumber);
          var thirdString = tweetDateArray[2];
          var tIndex = thirdString.indexOf('T');
          var day = thirdString.slice(0, tIndex);
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var correctMonth = months[monthwithout0-1];
          displayResults(response.favorites[q].image,'', response.favorites[q].tweet, response.favorites[q].id, response.favorites[q].likes, response.favorites[q].status, response.favorites[q].name, response.favorites[q].username, correctMonth, day, year, response.favorites[q].repostStatus, response.favorites[q].repostCount, response.favorites[q].repostId);
        }
      }
    });
  }

  // console.log(targetId);
  if (type === "Follow") {
    console.log('over here');
    followPanel.classList.remove('follow-panel');
    homeTab.className = "active";
    dashboardCard.className = 'panel panel-default';
    timelineTab.className = "";
    timelineCover.className = 'hide img-responsive';
    favoritesTab.className = "";
    var followId = event.target.getAttribute('data-u-id');
    console.log(followId);
    var currentId = document.getElementById('dashboard-username').textContent;
    console.log(currentId);
    console.log(followId);
    var domUsername = followId;
    var parentElement = event.target.parentNode;
    var grandParent = parentElement.parentNode;
    var name = parentElement.getElementsByTagName('span')[0];
    if (name) {
      var nameValue = name.textContent;
    }
    var image = grandParent.getElementsByTagName('img')[0];
    if (image) {
      var imageValue = image.src;
      displayFollowing(imageValue, domUsername, nameValue, '');
    }

    var followInfo = {
      currentUser: currentId,
      followUser: followId
    }
    var payload = JSON.stringify(followInfo);
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/follow');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(payload);
    xhr.addEventListener('load', function() {
      if (xhr.status == 200) {
        showHomePage();
      }
    });
  }

  if (targetName === 'minified') {
    var tweetInput = document.getElementById('tweet-input');
    tweetInput.className = 'tweet-space form-control';
    tweetInput.setAttribute('name','maximized');

  }
  if (targetName === 'maximized') {
    var tweetInput = document.getElementById('tweet-input');
    tweetInput.className = 'tweet-preview form-control';
    tweetInput.setAttribute('name','minified');

  }

  var targetElement = document.getElementById(targetId);
  if (targetElement) {
    // console.log(targetElement);
    // var elementName = targetElement.getAttribute('name');
    var elementStyle = targetElement.getAttribute('style');

    if (elementStyle == 'color: #6b6b6b;') {
      // console.log('yes');
      // var repostCount = document.getElementById('repost-count'); //from js function
      // var repostCountValue = repostCount.textContent;
      // var repostCountNumber = parseInt(repostCountValue);
      // var updatedRepostCount = add(repostCountNumber, 1);
      // repostCount.textContent = updatedRepostCount;

      var repostElement = targetElement.parentNode;
      var repostCountElement = repostElement.getElementsByTagName('span')[1];

      var repostCountValue = repostCountElement.textContent;
      var repostCountNumber = parseInt(repostCountValue);
      var updatedRepostCount = add(repostCountNumber, 1);
      repostCountElement.textContent = updatedRepostCount;

      var username = document.getElementById('dashboard-username').textContent;
      targetElement.setAttribute('style','color:green;');
      targetElement.setAttribute('name','reposted');
      var repostDataId = targetElement.getAttribute('data-post-id');

      // console.log(targetElement);
      // console.log(targetId);
      var repostInfo = {
          id: repostDataId,
          username: username
      }
      // console.log(favoritePostInfo);
      var payload = JSON.stringify(repostInfo);
       var xhr = new XMLHttpRequest();
       xhr.open('POST','/repost');
       xhr.setRequestHeader('Content-Type','application/json');
       xhr.send(payload);
    }

    if (elementStyle == 'color: #777;') {
      var favoritesCount = document.getElementById('favorites-count'); //from index.html to update dashboard card info
      var favoritesCountValue = favoritesCount.textContent;
      var favoritesCountNumber = parseInt(favoritesCountValue);
      var updatedFavoritesCount = add(favoritesCountNumber, 1);
      favoritesCount.textContent = updatedFavoritesCount;

      var username = document.getElementById('dashboard-username').textContent;
      targetElement.setAttribute('style', 'color:red;');
      targetElement.setAttribute('name','favorited-post');
      // console.log(username);
      var postElement = targetElement.parentNode;
      var postCountElement = postElement.getElementsByTagName('span')[0];
      var postCountValue = postCountElement.textContent;
      var postCountNumber = parseInt(postCountValue);
      var updatedCount = add(postCountNumber, 1);
      postCountElement.textContent = updatedCount;
      var favoritePostInfo = {
          id: targetId,
          username: username
      }
      // console.log(favoritePostInfo);
      var payload = JSON.stringify(favoritePostInfo);
       var xhr = new XMLHttpRequest();
       xhr.open('POST','/favorite');
       xhr.setRequestHeader('Content-Type','application/json');
       xhr.send(payload);
    }

    if (elementStyle == 'color:red;') {
      var favoritesCount = document.getElementById('favorites-count');
      var favoritesCountValue = favoritesCount.textContent;
      var favoritesCountNumber = parseInt(favoritesCountValue);
      var updatedFavoritesCount = subtract(favoritesCountNumber, 1);
      favoritesCount.textContent = updatedFavoritesCount;
      var username = document.getElementById('dashboard-username').textContent;
      // console.log(elementStyle);
      // console.log('red');
      targetElement.setAttribute('style', 'color: #777;');
      targetElement.setAttribute('name','unfavorited-post');
      var postElement = targetElement.parentNode;
      var postCountElement = postElement.getElementsByTagName('span')[0];
      var postCountValue = postCountElement.textContent;
      var postCountNumber = parseInt(postCountValue);
      var updatedCount = subtract(postCountNumber, 1);
      postCountElement.textContent = updatedCount;
      var favoritePostInfo = {
          id: targetId,
          username: username
      }
        var payload = JSON.stringify(favoritePostInfo);
         var xhr = new XMLHttpRequest();
         xhr.open('POST','/unfavorite');
         xhr.setRequestHeader('Content-Type','application/json');
         xhr.send(payload);
    }
  }
});

function showError() {
  error.classList.remove('hide');
}

var landingLogin = document.getElementById('landing-login');
landingLogin.addEventListener('click', function() {
  showLoginDiv();
})

var landingSignUp = document.getElementById('landing-signup');
landingSignUp.addEventListener('click', function() {
  showSignUpDiv();
})

var messageForm = document.getElementById('message-form');
messageForm.addEventListener('submit', function() {
  event.preventDefault();
  var startConvo = document.getElementById('start-conversation');
  // clear(startConvo);
  var messageInput = document.getElementById('message-input').value;
  var currentUser = document.getElementById('dashboard-username').textContent;
  var currentImage = document.getElementById('dashboard-image').src;
  var messageHeader = document.getElementById('message-header').textContent;
  var date = Date.now();
  var theDate = {
    date: date
  }
  var payload = JSON.stringify(theDate);
  var xhr = new XMLHttpRequest();
  xhr.open('POST','/convertdate');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(payload);
  xhr.addEventListener('load', function() {
    console.log(xhr.responseText);
    var convertedDate = JSON.parse(xhr.responseText);
    messageList(currentImage, messageInput, convertedDate, currentUser, "");
  })
  var input = {
    input: messageInput,
    targetUser: messageHeader,
    date: date
  }
  var payload2 = JSON.stringify(input);
  var xhr2 = new XMLHttpRequest();
  xhr2.open('POST', '/updatemessages');
  xhr2.setRequestHeader('Content-Type','application/json');
  xhr2.send(payload2);
  xhr2.addEventListener('load', function() {
    console.log(xhr.responseText);
  })
  messageForm.reset();

})


var searchForm = document.getElementById('search');
searchForm.addEventListener('submit', function() {
  event.preventDefault();
  // var homeTab = document.getElementById('home-tab');
  homeTab.className = "active";
  // var favoritesTab = document.getElementById('favorites-tab');
  favoritesTab.className = "";
  clear(tweetUl);
  followingRow.className = 'hide row';
  tweetPanel.className = 'panel panel-default';
  timelineCover.className = 'hide img-responsive';
  dashboardCard.className = 'panel panel-default';
  followPanel.className ='panel panel-default';

  var searchInput = document.getElementById('search-input').value;
  var currentUser = document.getElementById('dashboard-username').textContent;
  var searchInfo = {
    currentUser: currentUser,
    searchInput: searchInput
  }
  var payload = JSON.stringify(searchInfo);
  var xhr = new XMLHttpRequest();
  xhr.open('POST','/search');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(payload);
  xhr.addEventListener('load', function() {
    if (xhr.responseText == 'no matches found') {
      // console.log('error');
      var noMatches = document.createElement('h3');
      noMatches.textContent = 'no matches found.';
      tweetUl.appendChild(noMatches);
    }
    else {

      var response = JSON.parse(xhr.responseText);

      var tweetLi = document.createElement('h4');
      if (response.length === 1) {
        tweetLi.textContent = response.length + ' '+ 'match found for ' + '"' + searchInput + '"' + ".";

      }
      else {
      tweetLi.textContent = response.length + ' '+ 'matches found for ' + searchInput + ".";
      }
      tweetUl.appendChild(tweetLi);

      for (var b = 0; b < response.length; b++) {

        response.sort(sortDates);
        var tweetDate = response[b].date;
        var tweetDateArray = tweetDate.split('-');
        var year = tweetDateArray[0];
        var monthNumber = tweetDateArray[1];
        if (year == 2016) {
          year = "";
        }
        var monthwithout0 = convertMonth(monthNumber);
        var thirdString = tweetDateArray[2];
        var tIndex = thirdString.indexOf('T');
        var day = thirdString.slice(0, tIndex);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var correctMonth = months[monthwithout0-1];
        displayResults(response[b].image, searchInput, response[b].tweet, response[b].id, response[b].likes, response[b].status, response[b].name, response[b].username, correctMonth, day, year, response[b].repostStatus, response[b].repostCount, response[b].repostId);
      }
    }
  })
});

var submitTweet2 = document.getElementById('submit-tweet2');
submitTweet2.addEventListener('click', function() {
  myChirp.className = 'hide';
  clear(tweetUl);
  followPanel.classList.remove('follow-panel');
  dashboardCard.className = 'panel panel-default';
  timelineTab.className = '';
  homeTab.className = "active";
  favoritesTab.className = "";
  timelineCover.className = 'hide img-responsive';
  topNavbar.className = 'hide navbar navbar-default';

  var tweetInput2 = document.getElementById('tweet-input2');
  tweetInput2.className = 'tweet-preview form-control';
  tweetInput2.setAttribute('name','minified');
  var chirpsCount = document.getElementById('chirps-count');
  var chirpsCountValue = chirpsCount.textContent;
  var chirpsCountNumber = parseInt(chirpsCountValue);
  var updatedChirpsCount = add(chirpsCountNumber, 1);
  chirpsCount.textContent = updatedChirpsCount;
  event.preventDefault();
  var username = document.getElementById('dashboard-username').textContent;
  var name = document.getElementById('dashboard-name').textContent;
  var tweet2 = document.getElementById('tweet-input2').value;
  var date = Date.now();
  // var time = timeConverter(date);
  // console.log(time);
  // // console.log(tweet);
  // console.log(date);
  var tweetInfo = {
    username: username,
    name: name,
    tweet: tweet2,
    date: date
  }
  var payload = JSON.stringify(tweetInfo);
  // console.log(payload);
  var xhrChirp = new XMLHttpRequest();
  xhrChirp.open('POST','/newtweet');
  xhrChirp.setRequestHeader('Content-Type', 'application/json');
  xhrChirp.send(payload);
  tweetForm2.reset();

  xhrChirp.addEventListener('load', function() {
    if (xhrChirp.status == 200) {
      showHomePage();
    }
  });
});

var submitTweet = document.getElementById('submit-tweet');
submitTweet.addEventListener('click', function() {
  myChirp.className = 'hide';
  clear(tweetUl);
  followPanel.classList.remove('follow-panel');
  dashboardCard.className = 'panel panel-default';
  timelineTab.className = '';
  homeTab.className = "active";
  favoritesTab.className = "";
  timelineCover.className = 'hide img-responsive';
  topNavbar.className = 'hide navbar navbar-default';

  var tweetInput = document.getElementById('tweet-input');
  tweetInput.className = 'tweet-preview form-control';
  tweetInput.setAttribute('name','minified');
  var chirpsCount = document.getElementById('chirps-count');
  var chirpsCountValue = chirpsCount.textContent;
  var chirpsCountNumber = parseInt(chirpsCountValue);
  var updatedChirpsCount = add(chirpsCountNumber, 1);
  chirpsCount.textContent = updatedChirpsCount;
  event.preventDefault();
  var username = document.getElementById('dashboard-username').textContent;
  var name = document.getElementById('dashboard-name').textContent;
  var tweet = document.getElementById('tweet-input').value;
  var date = Date.now();
  // var time = timeConverter(date);
  // console.log(time);
  // // console.log(tweet);
  // console.log(date);
  var tweetInfo = {
    username: username,
    name: name,
    tweet: tweet,
    date: date
  }
  var payload = JSON.stringify(tweetInfo);
  // console.log(payload);
  var xhrChirp = new XMLHttpRequest();
  xhrChirp.open('POST','/newtweet');
  xhrChirp.setRequestHeader('Content-Type', 'application/json');
  xhrChirp.send(payload);
  tweetForm.reset();
  xhrChirp.addEventListener('load', function() {
    if (xhrChirp.status == 200) {
      showHomePage();
    }
  });
});

signUpForm.addEventListener('submit', function() {
  event.preventDefault();
  var username = document.getElementById('new-username').value;
  var password = document.getElementById('new-password').value;
  var newUserInfo = {
    username: username,
    password: password
  }
  var userPayload = JSON.stringify(newUserInfo);
  var xhr = new XMLHttpRequest();
  xhr.open('POST','/signup');
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.send(userPayload);

  var signUpMessage = document.getElementById('sign-up-message');
  signUpMessage.textContent = "Thank you for signin up!";
  window.setTimeout(function() {
    loginDiv.classList.remove('hide');
    signUpDiv.classList.add('hide');
  }, 2000);
})

loginForm.addEventListener('submit', function() {
  event.preventDefault();
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;
  var userInfo = {
    username: username,
    password: password
  }
  var payload = JSON.stringify(userInfo);
  var xhr = new XMLHttpRequest();
  xhr.open('POST','/login');
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.send(payload);
//
  xhr.addEventListener('load', function() {
    loginForm.reset();
    var response = JSON.parse(xhr.responseText);

    for (var x = 0; x < response.length; x++) {
      if (response[x].username === username ) {
        showHomePage();
      }
      else {
        showError();
      }
    }
  });
});

var myPromise = new Promise(function(resolve,reject) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET','/check');
  xhr.send();
  // console.log(xhr.responseText);

  xhr.addEventListener('load', function() {
    if (xhr.status == 200) {
      resolve();
    }
    else {
      reject();
    }
  });
});

myPromise.then(function() {
  showHomePage();
})
.catch(function() {
  showLandingPage();
});
