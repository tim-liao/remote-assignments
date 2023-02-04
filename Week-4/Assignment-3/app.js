// const express = require("express");
import express from "express";
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

// const apiRoutes = require("./routes/api");
// const mainRoutes = require("./routes/index");
import apiRoutes from "./routes/api.js";
import mainRoutes from "./routes/index.js";

//測試next的用法以及了解middleware的功用
// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//   console.log(req.requestTime);
//   next();
// };
// app.use(requestTime);

app.use(apiRoutes);
app.use(mainRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(3000, () => {
  console.log("THe application is running on localhost:3000");
});
