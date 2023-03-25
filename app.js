/* Using Express */
const express = require("express");
const app = express();

/* Settings for port number */
const PORT = 8000;

/* Settings for port number */
app.set("view engine", "ejs");
app.set("/views", "views");
/* Settings for static directory */
app.use("/static", express.static(__dirname + "/static"));

/* Shuffle images every page refresh */

const randomId = []; /* Index from 0 to 99*/
for (let i = 0; i < 8; ++i) {
  randomId.push(i);
}

function shuffle(array) {
  /* Get numbers in -0.5 ~ 0.5 range becomes index of sort() */
  array.sort(() => Math.random() - 0.5);
}
shuffle(randomId);

/* Routing */
app.get("/", (req, res) => {
  res.render("index", { randomId: randomId }); /* Start path from /views/ */
});

/* Binding */
app.get("/contents", (req, res) => {
  res.render("shin/contents");
});
app.get("/header", (req, res) => {
  res.render("shin/header");
});
app.get("/tagged", (req, res) => {
  res.render("shin/tagged");
});
app.get("/saved", (req, res) => {
  res.render("shin/saved");
});
app.get("/common", (req, res) => {
  res.render("shin/common");
});
app.get("/clickp", (req, res) => {
  res.render("shin/click-profile");
});
app.get("/follow", (req, res) => {
  res.render("shin/follow");
});
app.get("/follower", (req, res) => {
  res.render("shin/follower");
});
app.get("/main", (req, res) => {
  res.render("main");
});

for (let i = 0; i < 8; ++i) {
  app.get(`/story/:${i}`, (req, res, next) => {
    res.render("jihyo/story", { imageNum: req.params });
  });
}

/* Bind and listen the connections on the specified host and port */
app.listen(PORT, () => {
  console.log(`localhost:${PORT} is open!`);
});
