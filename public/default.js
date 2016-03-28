var formRow = document.getElementById("form-row");
var logout = document.getElementById('logout');
var login = document.getElementById('login');
var greetUser = document.getElementById('greet-user');
var landingPage = document.getElementById('landing-page');
var loginForm = document.getElementById('login-form');
var error = document.getElementById("error-message");
var homePage = document.getElementById('home-page');


function showLandingPage() {
  landingPage.classList.remove('hide');
}

function showLoginForm() {
  landingPage.classList.add('hide');
  loginForm.classList.remove('hide');
}

function showHomePage() {
  loginForm.classList.add('hide');
  landingPage.classList.add('hide');
  homePage.classList.remove('hide');
}

function showError() {
  error.classList.remove('hide');
}

var landingLogin = document.getElementById('landing-login');
landingLogin.addEventListener('click', function() {
  showLoginForm();
})

var loginBox = document.getElementById('login-box');
loginBox.addEventListener('submit', function() {
  event.preventDefault();
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;
  var userInfo = {
    username: username,
    password: password
  }
  var payload = JSON.stringify(userInfo);//
  var xhr = new XMLHttpRequest();
  xhr.open('POST','/login');
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.send(payload);
//
  xhr.addEventListener('load', function() {
    loginBox.reset();
    console.log(xhr.responseText);
    var response = JSON.parse(xhr.responseText);
    console.log(response);
//     // console.log(usernameResponse);
    if (response === username ) {
      showHomePage();
    }
  else {
      // showLoggedOut();
      showError();
    }
  });
});
//
var myPromise = new Promise(function(resolve,reject) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET','/check');
  xhr.send();
  console.log(xhr.responseText);

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
