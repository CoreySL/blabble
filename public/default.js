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
    console.log(xhr.responseText);
    var response = JSON.parse(xhr.responseText);
    var dashboardUsername = document.getElementById('dashboard-username');
    dashboardUsername.textContent = "@" + response[0].username;
    for (var z = 0; z < response.length; z++) {
      if (response[z].username !== response[0].username) {
        var followUl = document.getElementById('follow-ul');
        var followLi = document.createElement('li');
        followLi.setAttribute('class','list-group-item');
        followLi.textContent = "@" + response[z].username;
        followUl.appendChild(followLi);
      }
    }
  })
}

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
        // var dashboardUsername = document.getElementById('dashboard-username');
        // dashboardUsername.textContent = "@" + response[x].username;
        // for (var z = 0; z < response.length; z++) {
        //   if (response[z].username !== username) {
        //     var followUl = document.getElementById('follow-ul');
        //     var followLi = document.createElement('li');
        //     followLi.setAttribute('class','list-group-item');
        //     followLi.textContent = "@" + response[z].username;
        //     followUl.appendChild(followLi);
        //   }
        // }
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
