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
var favoritesTab = document.getElementById('favorites-tab');
var timelineTab = document.getElementById('timeline-tab');
var timelineCover = document.getElementById('timeline-cover');
var topNavbar = document.getElementById('top-navbar');
var timelineImage = document.getElementById('timeline-image');
var dashboardCard = document.getElementById('dashboard-card');
var followPanel = document.getElementById('follow-panel');

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

function displayResults(image, searchInput, tweet, id, likes, status, name, username, month, day, year, repostStatus, repostCount) {
  var tweetLi = document.createElement('li');
  tweetLi.setAttribute('class','list-group-item');
  var tweetMedia = document.createElement('div');
  tweetMedia.setAttribute('class','media');
  var tweetLeft = document.createElement('div');
  tweetLeft.setAttribute('class','media-left');
  var tweetA = document.createElement('a');
  tweetA.setAttribute('href','#');
  var tweetImage = document.createElement('img');
  tweetImage.setAttribute('src', image);
  tweetImage.setAttribute('style','width:50px;');
  tweetImage.setAttribute('style','height:70px;');
  tweetImage.setAttribute('class','media-object img-circle');
  var tweetBody = document.createElement('div');
  tweetBody.setAttribute('class','media-body');
  var tweetContent = document.createElement('p');
  // tweetContent.textContent = tweet;

  // var beforeStringElement = document.createElement('span');
  // var targetStringBold = document.createElement('span');
  // var afterStringElement = document.createElement('span');
  if (searchInput !== "") {
    var indexOfWord = tweet.indexOf(searchInput);
    console.log(indexOfWord);
    if (indexOfWord !== -1) {
    var beforeStringElement = document.createElement('span');
    var targetStringBold = document.createElement('span');
    var afterStringElement = document.createElement('span');
    var beforeString = tweet.slice(0, indexOfWord);
    var searchInputLength = searchInput.length;
    var targetString = tweet.slice(indexOfWord, indexOfWord + searchInputLength);
    console.log(targetStringBold);
    targetStringBold.setAttribute('style','font-weight: bold; color: blue;');
    targetStringBold.textContent = targetString;
    beforeStringElement.textContent = beforeString;
    var afterString = tweet.slice((indexOfWord + searchInputLength), tweet.length);
    afterStringElement.textContent = afterString;
    tweetContent.appendChild(beforeStringElement);
    tweetContent.appendChild(targetStringBold);
    tweetContent.appendChild(afterStringElement);
    }
    else {
      tweetContent.textContent = tweet;
    }
  }
  else {
    tweetContent.textContent = tweet;
  }



  var tweetReactionsDiv = document.createElement('div');
  // tweetReactionsDiv.setAttribute('class','btn-group');
  // tweetReactionsDiv.setAttribute('data-toggle', 'buttons');
  // var tweetFavoriteDiv = document.createElement('div');
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
  tweetRepostCount.setAttribute('id','repost-count');
  tweetRepostCount.textContent = repostCount;
  tweetRepostCount.setAttribute('class','repost-padding');
  var tweetRepostIcon = document.createElement('i');
  tweetRepostIcon.setAttribute('class','fa fa-share hover');
  tweetRepostIcon.setAttribute('id', 'repost-icon');
  tweetRepostIcon.setAttribute('data-post-id', id);

  if (repostStatus === 'not-reposted') {
    tweetRepostIcon.setAttribute('style','color: #6b6b6b;');

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


  // tweetContent.appendChild(beforeStringElement);
  // tweetContent.appendChild(targetStringBold);
  // tweetContent.appendChild(afterStringElement);



  tweetBody.appendChild(tweetContent);

  tweetReactionsDiv.appendChild(tweetFavoriteCount);
  tweetReactionsDiv.appendChild(tweetFavoriteIcon);

  tweetReactionsDiv.appendChild(tweetRepostCount);
  tweetReactionsDiv.appendChild(tweetRepostIcon);
  // tweetReactionsDiv.appendChild(tweetFavoriteDiv);
  tweetBody.appendChild(tweetReactionsDiv);
  tweetA.appendChild(tweetImage);
  tweetLeft.appendChild(tweetA);
  tweetMedia.appendChild(tweetLeft);
  tweetMedia.appendChild(tweetBody);
  tweetLi.appendChild(tweetMedia);
  tweetUl.appendChild(tweetLi);
}

function displayPotentialFollowers(image, username, name) {
  var dashboardUsername = document.getElementById('dashboard-username').textContent;
  var followLi = document.createElement('li');
  followLi.setAttribute('class','list-group-item');
  var followMedia = document.createElement('div');
  followMedia.setAttribute('class','media');
  var followLeft = document.createElement('div');
  followLeft.setAttribute('class','media-left');
  var followA = document.createElement('a');
  followA.setAttribute('href','#');
  var followImage = document.createElement('img');
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
  followButton.textContent = 'Follow';
  followButton.setAttribute('id', username);
  followButton.setAttribute('value', dashboardUsername);
  followName.appendChild(followNameBold);
  followHeading.appendChild(followName);
  followHeading.appendChild(followUsername);
  followBody.appendChild(followHeading);
  followBody.appendChild(followButton);
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

  loginDiv.classList.add('hide');
  landingPage.classList.add('hide');
  homePage.classList.remove('hide');

  var xhr = new XMLHttpRequest();
  xhr.open('GET','/userinfo');
  xhr.send();
  xhr.addEventListener('load', function() {
    // console.log(xhr.responseText);
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
    for (var s = 0; s < recommended.length; s++) {
      if (recommended[s].username !== response[0].username) {
        displayPotentialFollowers(recommended[s].image, recommended[s].username ,recommended[s].name);
      }
    }
    //Following Count
    for (var n = 0; n < response.length; n++) {
      for (var j = 0; j < followingArray.length; j++) {
        if (response[n].username == followingArray[j]) {
          console.log(response[n]);
          followingTweets.push(response[n]);
          console.log(followingTweets);
          var followingCount = document.getElementById('following');
          followingCount.textContent = 'Following: ' + followingArray.length;
        }
      }
    }
    // console.log(followingTweets);
    //following tweets forloop
    console.log(followingTweets.length);
    var allTweets = [];
    for (var k = 0; k < followingTweets.length; k++) {
      for (var c = 0; c < followingTweets[k].tweets.length; c++) {
        console.log(followingTweets[k].tweets[c]);
        console.log(allTweets);
        allTweets.push(followingTweets[k].tweets[c]);
      }
    }
    //user tweets forloop
    for (var n = 0; n < response[0].tweets.length; n++) {
      allTweets.push(response[0].tweets[n]);
    }
    // console.log(allTweets);
    var sortDates = function(date1, date2) {
      if (date1.date < date2.date) return 1;
      if (date1.date > date2.date) return -1;
      return 0;
    };
    console.log(allTweets);
    allTweets.sort(sortDates);

    for (var x =0; x < allTweets.length; x++) {
      var tweetDate = allTweets[x].date;
      // console.log(tweetDate);
      var tweetDateArray = tweetDate.split('-');
      var year = tweetDateArray[0];
      var monthNumber = tweetDateArray[1];
      var currentDate = Date.now(); //to add (1 hour ago, 30 min ago functionality later)
      var convertedCurrentTime = timeConverter(currentDate); //
      console.log(convertedCurrentTime); //
      if (year == 2016) {
        year = "";
      }
      var monthwithout0 = convertMonth(monthNumber);
      var thirdString = tweetDateArray[2];
      var tIndex = thirdString.indexOf('T');
      var day = thirdString.slice(0, tIndex);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var correctMonth = months[monthwithout0-1];
      displayResults(allTweets[x].image, '', allTweets[x].tweet, allTweets[x].id, allTweets[x].likes, allTweets[x].status, allTweets[x].name, allTweets[x].username, correctMonth, day, year, allTweets[x].repostStatus, allTweets[x].repostCount);
    }
  })
}

  var searchForm = document.getElementById('search');
  searchForm.addEventListener('submit', function() {
    event.preventDefault();
    // var homeTab = document.getElementById('home-tab');
    homeTab.className = "active";
    // var favoritesTab = document.getElementById('favorites-tab');
    favoritesTab.className = "";
    clear(tweetUl);
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
        console.log('error');
        var noMatches = document.createElement('h3');
        noMatches.textContent = 'no matches found.';
        tweetUl.appendChild(noMatches);
      }
      else {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        for (var b = 0; b < response.length; b++) {
          var sortDates = function(date1, date2) {
            if (date1.date < date2.date) return 1;
            if (date1.date > date2.date) return-1;
            return 0;
          };
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
          displayResults(response[b].image, searchInput, response[b].tweet, response[b].id, response[b].likes, response[b].status, response[b].name, response[b].username, correctMonth, day, year, response[b].repostStatus, response[b].repostCount);
        }
      }
    })
  });

//event delegation
document.body.addEventListener('click', function() {
  var type = event.target.textContent;
  var targetId = event.target.id;
  var targetName = event.target.name;

  if (targetId == "user-timeline") {
    clear(tweetUl);
    followPanel.classList.add('follow-panel');
    var navId = document.getElementById('navid');
    dashboardCard.className = 'hide panel panel-default';
    timelineTab.className = 'active';
    homeTab.className = "";
    favoritesTab.className = "";
    timelineCover.className = 'img-responsive';
    topNavbar.className = 'hide navbar navbar-default';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/timeline');
    xhr.send();
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);
      // console.log(response);
      timelineImage.src = response.image;
      var sortDates = function(date1, date2) {
        if (date1.date < date2.date) return 1;
        if (date1.date > date2.date) return -1;
        return 0;
      };

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
      console.log(userTimelinePosts);

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
        displayResults(userTimelinePosts[x].image,'', userTimelinePosts[x].tweet, userTimelinePosts[x].id, userTimelinePosts[x].likes, userTimelinePosts[x].status, userTimelinePosts[x].name, userTimelinePosts[x].username, correctMonth, day, year, userTimelinePosts[x].repostStatus, userTimelinePosts[x].repostCount);
      }
    });
  }

  if (targetId == "favorite-posts") {
    clear(tweetUl);
    // var homeTab = document.getElementById('home-tab');
    homeTab.className = "";
    timelineTab.className = ('');
    followPanel.classList.remove('follow-panel');

    topNavbar.className = 'navbar navbar-default';
    timelineCover.className = 'hide img-responsive';
    dashboardCard.className = 'panel panel-default';
    favoritesTab.className = "active";
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/viewfavorites');
    xhr.send();
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      var favoritesCount = document.getElementById('favorites-count');
      favoritesCount.textContent = response.favorites.length;
      if (favoritesCount.textContent === '0') {
        var noFavorites = document.createElement('h3');
        noFavorites.textContent = "You don't any favorite chirps!";
        tweetUl.appendChild(noFavorites);
      }
      else {
        for (var q = 0; q < response.favorites.length; q++) {
          var sortDates = function(date1, date2) {
            if (date1.date < date2.date) return 1;
            if (date1.date > date2.date) return-1;
            return 0;
          };
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
          displayResults(response.favorites[q].image,'', response.favorites[q].tweet, response.favorites[q].id, response.favorites[q].likes, response.favorites[q].status, response.favorites[q].name, response.favorites[q].username, correctMonth, day, year, response.favorites[q].repostStatus, response.favorites[q].repostCount);
        }
      }
    });
  }

  // console.log(targetId);
  if (type === "Follow") {
    // console.log('yes');
    // var homeTab = document.getElementById('home-tab');
    followPanel.classList.remove('follow-panel');
    homeTab.className = "active";
    dashboardCard.className = 'panel panel-default';
    timelineTab.className = "";
    timelineCover.className = 'hide img-responsive';
    favoritesTab.className = "";
    var followId = event.target.id;
    var currentId = event.target.value;
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
      var repostCount = document.getElementById('repost-count'); //from js function
      var repostCountValue = repostCount.textContent;
      var repostCountNumber = parseInt(repostCountValue);
      var updatedRepostCount = add(repostCountNumber, 1);
      repostCount.textContent = updatedRepostCount;

      var username = document.getElementById('dashboard-username').textContent;
      console.log(username);
      targetElement.setAttribute('style','color:green;');
      targetElement.setAttribute('name','reposted');
      var repostId = targetElement.getAttribute('data-post-id');
      console.log(repostId);

      // console.log(targetElement);
      // console.log(targetId);
      var repostInfo = {
          id: repostId,
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
      console.log('yes');
      var favoritesCount = document.getElementById('favorites-count'); //from index.html
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

tweetForm.addEventListener('submit', function() {
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
