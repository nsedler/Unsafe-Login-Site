//JavaScript Document

console.log("if you are reading this then u r hax");

function setLoginInfo() {

  userNameStr = document.getElementById('username').value;
  pwStr = document.getElementById('password').value;
  expmins = 2;
  setCookie("user", userNameStr, expmins);
  setCookie("password", pwStr, expmins);
}


function setCookie(cname, cvalue, exmins) {
  var d = new Date();
  d.setTime(d.getTime() + (exmins * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("user");
  var pass = getCookie("password");
  if (user != "") {
    document.getElementById('username').value = user;
    document.getElementById('password').value = pass;
  }
}


function checkLogin() {

  var user = getCookie("user");
  var pass = getCookie("password");

  if ((user == "rick") && (pass == "rolled")) {
    window.location.href = ("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}
