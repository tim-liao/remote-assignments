const catchAPI = (email, password, inOrUp) => {
  var xhrr = new XMLHttpRequest();
  xhrr.onreadystatechange = function () {
    if (xhrr.status === 200 && xhrr.readyState === 4) {
      if (xhrr.responseText == "success") {
        return window.location.replace("/signinsuccess");
      }
      document.getElementById("wrongMessage").innerHTML = xhrr.responseText;
    }
  };
  ///sign?inOrUp=in&email=1010&password=456456
  xhrr.open(
    "POST",
    `sign?email=${email}&password=${password}&inOrUp=${inOrUp}`
  );
  xhrr.send();
};

document.getElementById("sign-in-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-sign-in").value;
  const password = document.getElementById("password-sign-in").value;
  const inOrUp = "in";
  catchAPI(email, password, inOrUp);
});
document.getElementById("sign-up-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-sign-up").value;
  const password = document.getElementById("password-sign-up").value;
  const inOrUp = "up";
  catchAPI(email, password, inOrUp);
});
