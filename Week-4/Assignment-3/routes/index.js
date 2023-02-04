// const express = require("express");
import express from "express";
// const cookieParser = require("cookie-parser");
import cookieParser from "cookie-parser";
const route = express.Router();

route.use(cookieParser());
route.get("/", (req, res) => {
  const email = req.cookies.userEmail;
  if (email) {
    return res.redirect("/signinsuccess");
  }
  //   console.log(req.body);
  res.render("index", { message: "Please sign in or sign up" });
});
// route.get("/sign", (req, res) => {
//   //用其他方式進入這api位置會被導走
//   res.redirect("/");
// });
route.get("/signinsuccess", (req, res) => {
  const email = req.cookies.userEmail;
  if (email) {
    res.render("signinsuccess", { message: `Welcome Member : ${email}!!` });
  } else {
    res.redirect("/");
  }
});
route.post("/goodbye", (req, res) => {
  res.clearCookie("userEmail");
  res.redirect("/");
});

export default route;
