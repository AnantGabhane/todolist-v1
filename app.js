const express = require("express");
const bodyParser = require("body-parser");
const { name } = require("ejs");
//const request = require("request");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
//array created for adding all the items at once

app.set("view engine", "ejs");
//add the views in ejs

app.use(express.static("public"));
//to add styling to ejs

app.use(bodyParser.urlencoded({ extended: true }));
//load up the elements

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { ListTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
//console.log(req.body);
  if (req.body.list === "work") {
    workitems.push(item);
    res.redirect("/work");

  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { ListTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function () {
  console.log("server is running");
});
