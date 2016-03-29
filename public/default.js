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

// function showTweets() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET','/tweets');
//   xhr.send();
//   xhr.addEventListener('load', function() {
//     console.log(xhr.responseText);
//     var people = xhr.responseText;
//   })
//   for (var x = 0; x < people.length) {
//
//   }
// }

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
  loginDiv.classList.add('hide');
  landingPage.classList.add('hide');
  homePage.classList.remove('hide');

  var xhr = new XMLHttpRequest();
  xhr.open('GET','/userinfo');
  xhr.send();
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.responseText);

    var dashboardName = document.getElementById('dashboard-name');
    dashboardName.textContent = response[0].name;
    var dashboardUsername = document.getElementById('dashboard-username');
    dashboardUsername.textContent = "@" + response[0].username;

    var following = (response[0].following);
    // console.log(following);
    var followingArray = [];
    var recommended = [];
    var notFollowing = [];


      for (var z = 0; z < following.length; z++) {
      // console.log(following[z].user);
      followingArray.push(following[z].user);
      }

      console.log(followingArray[0]); // santadude
      console.log(response[1].username); // santadude

      for (var p = 0; p < response.length; p++) {
        if (followingArray.indexOf(response[p].username) ==-1) {
          recommended.push(response[p]);
        }
      }

      console.log(recommended);

      for (var s = 0; s < recommended.length; s++) {
        if (recommended[s].username !== response[0].username) {
          var followUl = document.getElementById('follow-ul');
          var followLi = document.createElement('li');
          followLi.setAttribute('class','list-group-item');
          var followMedia = document.createElement('div');
          followMedia.setAttribute('class','media');
          var followLeft = document.createElement('div');
          followLeft.setAttribute('class','media-left');
          var followA = document.createElement('a');
          followA.setAttribute('href','#');
          var followImage = document.createElement('img');
          followImage.setAttribute('src','images/default-profile.jpg');
          followImage.setAttribute('style','width:50px;');
          followImage.setAttribute('style','height:70px;');
          followImage.setAttribute('class','media-object');
          var followBody = document.createElement('div');
          followBody.setAttribute('class','media-body');
          var followHeading = document.createElement('div');
          followHeading.setAttribute('class','media-heading');
          var followName = document.createElement('span');
          var followNameBold = document.createElement('b');
          followNameBold.textContent = recommended[s].name;
          var followUsername = document.createElement('span');
          followUsername.textContent = " " + "@" + recommended[s].username;
          var followButton = document.createElement('button');
          followButton.setAttribute('class','btn btn-default');
          followButton.textContent = "Follow";
          followButton.setAttribute('id',recommended[s].username);
          followButton.setAttribute('value', recommended[0].username);
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
      }



      // for (var j = 0; j < response[z].tweets.length; j++) {
      //   if (response[z].username !== response[0].username) {
      //     var tweetUl = document.getElementById('tweet-ul');
      //     var tweetLi = document.createElement('li');
      //     tweetLi.setAttribute('class','list-group-item');
      //     var tweetMedia = document.createElement('div');
      //     tweetMedia.setAttribute('class','media');
      //     var tweetLeft = document.createElement('div');
      //     tweetLeft.setAttribute('class','media-left');
      //     var tweetA = document.createElement('a');
      //     tweetA.setAttribute('href','#');
      //     var tweetImage = document.createElement('img');
      //     tweetImage.setAttribute('src','images/default-profile.jpg');
      //     tweetImage.setAttribute('style','width:50px;');
      //     tweetImage.setAttribute('style','height:70px;');
      //     tweetImage.setAttribute('class','media-object');
      //     var tweetBody = document.createElement('div');
      //     tweetBody.setAttribute('class','media-body');
      //     var tweetContent = document.createElement('p');
      //     tweetContent.textContent = response[z].tweets[j].tweet;
      //     var tweetHeading = document.createElement('div');
      //     tweetHeading.setAttribute('class','media-heading');
      //     var tweetName = document.createElement('span');
      //     var tweetNameBold = document.createElement('b');
      //     tweetNameBold.textContent = response[z].name;
      //     var tweetUsername = document.createElement('span');
      //     tweetUsername.textContent = " " + "@" + response[z].username;
      //     tweetName.appendChild(tweetNameBold);
      //     tweetHeading.appendChild(tweetName);
      //     tweetHeading.appendChild(tweetUsername);
      //     tweetBody.appendChild(tweetHeading);
      //     tweetBody.appendChild(tweetContent);
      //     tweetA.appendChild(tweetImage);
      //     tweetLeft.appendChild(tweetA);
      //     tweetMedia.appendChild(tweetLeft);
      //     tweetMedia.appendChild(tweetBody);
      //     tweetLi.appendChild(tweetMedia);
      //     tweetUl.appendChild(tweetLi);
      //   }
      // }
  })
}

document.body.addEventListener('click', function() {
  var type = event.target.textContent;
  if (type === "Follow") {
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
      var followResponse = xhr.responseText;
      console.log(xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      console.log(response);
    });
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

// var quotes = document.getElementById('quotes-button');


//   var quotexhr = new XMLHttpRequest();
//   quotexhr.open('GET','http://quotes.rest/qod.json', false);
//   quotexhr.send();
//   quotexhr.addEventListener('load', function() {
//     var quoteResponse = quotexhr.responseText;
//     var parsedResponse = JSON.parse(quoteResponse);
//     console.log(parsedResponse);
// });
// var profileTab = document.getElementById('profile-tab');
// var homeTab = document.getElementById('home-tab');

// profileButton.addEventListener('click', function() {
//   profilePage.classList.remove('hide');
//   homePage.classList.add('hide');
// })

homeButton.addEventListener('click', function() {
  profilePage.classList.add('hide');
  homePage.classList.remove('hide');
})
