const catchAPI = (email, password, inOrUp) => {
  // var account = { email: email, password: password, inOrUp: inOrUp };
  // var data = JSON.stringify(account);
  // 將 JSON 轉為 文字
  var xhrr = new XMLHttpRequest();

  ///sign?inOrUp=in&email=1010&password=456456
  // xhrr.open(
  //   "POST",
  //   `sign?email=${email}&password=${password}&inOrUp=${inOrUp}`
  // );
  // xhrr.send();
  xhrr.open("post", "sign", true);
  xhrr.onreadystatechange = function () {
    if (xhrr.status === 200 && xhrr.readyState === 4) {
      if (xhrr.responseText == "success") {
        return window.location.replace("/signinsuccess");
      }
      document.getElementById("wrongMessage").innerHTML = xhrr.responseText;
    }
  };
  xhrr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhrr.send(`email=${email}&password=${password}&inOrUp=${inOrUp}`);
  // xhrr.send(data);
  // 傳送文字資料
};

document.getElementById("sign-in-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-sign-in").value;
  const password = document.getElementById("password-sign-in").value;
  const inOrUp = "in";
  // console.log(email, password, inOrUp);
  catchAPI(email, password, inOrUp);
});
document.getElementById("sign-up-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-sign-up").value;
  const password = document.getElementById("password-sign-up").value;
  const inOrUp = "up";
  catchAPI(email, password, inOrUp);
});
