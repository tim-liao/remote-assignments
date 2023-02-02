//這是一個api，負責檢查首頁 (index) 丟過來的帳號密碼是否有在database中
//如果錯誤會丟錯誤訊息回來
//如果正確會到會員頁面
const express = require("express");
const mysql = require("mysql2");
const api = express.Router();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "assignment",
  password: "root",
});
api.post("/sign", (req, res) => {
  //   console.dir(req.query);

  const { inOrUp } = req.query;
  const { password } = req.query;
  const { email } = req.query;
  const emailReplace = email.replace(/\s+/g, "");
  const passwordReplace = password.replace(/\s+/g, "");
  if (inOrUp == "up" || inOrUp == "in") {
  } else {
    //如果不是訪問up或是in的話，會丟回首頁
    res.redirect("/");
  }
  if (!passwordReplace || !emailReplace) {
    //如果email或是password空白則回傳此訊息
    return res.send("Your email and password are not completely entered");
  }

  connection.query(
    `SELECT * FROM user WHERE email ="${emailReplace}"`,
    //檢查email有無在database;
    function (err, results, fields) {
      //   console.log(results);
      if (results.length == 1) {
        //email有在database
        if (inOrUp == "up") {
          //註冊的狀況：email有在database
          //停在首頁並說錯誤訊息
          //這邊顯示錯誤訊息後，交給ajax來接住
          //http://localhost:3000/sign/a@gmail.com/0000?inOrUp=up
          return res.send("This email have already signed up.");
        } else if (inOrUp == "in") {
          if (passwordReplace == results[0].password) {
            //登錄的狀況：email有在database且密碼正確
            //轉到會員頁面並說歡迎(done)
            res.cookie("userEmail", email);
            //因為要在記錄訪問到success的時候都是有登錄的，不然無法阻擋非會員訪問會員頁面，所以用cookie紀錄
            return res.send("success");
          } else {
            //登錄的狀況：雖然email對但是密碼不對
            //停在首頁回傳錯誤訊息
            return res.send("Your password is not correct.");
          }
        }
      } else {
        //email沒在database
        if (inOrUp == "up") {
          connection.query(
            `INSERT INTO user (email, password) VALUES ("${emailReplace}", "${passwordReplace}")`,
            //註冊狀況：email無在database
            //加到database後跳轉回傳成功訊息
            function (err, results, fields) {
              //console.log(results);
              //要記錄：訪問到success的時候都是有登錄的，不然無法阻擋非會員訪問會員頁面，所以用cookie紀錄
              res.cookie("userEmail", email);

              return res.send("success");
            }
          );
        } else if (inOrUp == "in") {
          //登錄狀況：email無在database
          //停在首頁回傳錯誤訊息
          return res.send("Your email is not sign up.Please join as a member.");
        }
      }
    }
  );
});

module.exports = api;
