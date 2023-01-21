const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.get("/public", function (req, res) {
//   res.sendFile(path.join(__dirname, "/sum.html"));
// });
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
// app.set("view engine", "pug");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});
app.get("/data", (req, res) => {
  const { number } = req.query;
  // const { id } = req.params;
  if (!number) {
    return res.send("Lack of Parameter");
  } else if (isNaN(number) === true) {
    //用typeof()無法判別是否為數字，typeof('a') =='number‘
    return res.send("Wrong Parameter");
  } else if (isNaN(number) === false) {
    // if (Number(number) > 20000) {
    //   //(A2--Optional) Think about what will happen when N is very large.
    //   return res.send(`number must smaller than 20000`);
    // }
    let message = 0;
    for (let i = 0; i <= Number(number); i++) {
      message = message + i;
    }
    return res.send(`${message}`);
  }
});
app.get("/myName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    return res.send(name);
  } else {
    return res.render("nonamepage");
  }
});
app.get("/trackName", (req, res) => {
  const { name } = req.query;
  if (name) {
    res.cookie("username", name);
  }
  res.redirect("/myName");
});
app.post("/myName", (req, res) => {
  res.redirect(`trackName?name=${req.body.username}`);

  //res.cookie("username", req.body.username);
  //res.redirect("/myName");
});
app.listen(3000, () => {
  console.log("THe application is running on localhost:3000");
});
