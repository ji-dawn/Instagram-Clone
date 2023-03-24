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

/* Routing */
app.get("/", (req, res) => {
  res.render("index"); /* Start path from /views/ */
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
app.get("/main", (req, res) => {
  res.render("main");
});

/* Bind and listen the connections on the specified host and port */
<<<<<<< HEAD
=======
/* 나중에 라우팅될 코드 get 요청 이용해서 작성 */
// 포트 열기
app.get("/main", (req, res) => {
  res.render("main");
});
>>>>>>> 177804772262b42b79f8fca7bdf76d95d1a1ab27
app.listen(PORT, () => {
  console.log(`localhost:${PORT} is open!`);
});
