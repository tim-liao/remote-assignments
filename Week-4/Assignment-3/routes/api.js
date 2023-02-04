//這是一個api，負責檢查首頁 (index) 丟過來的帳號密碼是否有在database中
//如果錯誤會丟錯誤訊息回來
//如果正確會到會員頁面
import express from "express";

import { getUser, createUser } from "./db.js";

const api = express.Router();

api.post("/sign", express.urlencoded({ extended: false }), async (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  const { inOrUp } = obj;
  const { password } = obj;
  const { email } = obj;
  // console.log(req.query);
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
  const userStatus = await getUser(emailReplace);
  if (userStatus) {
    //email有在database(userStatus不是空值)
    if (inOrUp == "up") {
      //註冊的狀況：email有在database
      //停在首頁並說錯誤訊息
      //這邊顯示錯誤訊息後，交給ajax來接住
      //http://localhost:3000/sign/a@gmail.com/0000?inOrUp=up
      return res.send("This email have already signed up.");
    } else if (inOrUp == "in") {
      if (passwordReplace == userStatus.password) {
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
      const userSignUP = await createUser(emailReplace, passwordReplace);
      //註冊狀況：email無在database
      //加到database後跳轉回傳成功訊息
      //要記錄：訪問到success的時候都是有登錄的，不然無法阻擋非會員訪問會員頁面，所以用cookie紀錄
      res.cookie("userEmail", userSignUP.email);
      return res.send("success");
    } else if (inOrUp == "in") {
      //登錄狀況：email無在database
      //停在首頁回傳錯誤訊息
      return res.send("Your email is not sign up.Please join as a member.");
    }
  }
});

export default api;
