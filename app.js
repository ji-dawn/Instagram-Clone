const express = require("express");
const app = express();
const PORT = 8000;
// static & views 설정
app.set("view engine", "ejs");
app.set("/views", "views");
app.use("/static", express.static(__dirname + "/static"));
app.get("/", (req, res) => {
  res.render("common");
});
app.get("/contents", (req, res) => {
  res.render("contents")
})
app.get("/header", (req, res) => {
  res.render("header")
})
app.get("/tagged", (req, res) => {
  res.render("tagged")
})
app.get("/saved", (req, res) => {
  res.render("saved")
})
app.get("/common/tagged", (req, res) => {
  res.render("tagged")
})


/* 나중에 라우팅될 코드 get 요청 이용해서 작성 */
// 포트 열기
app.listen(PORT, () => {
  console.log(PORT + " is open!");
  console.log(`http://localhost:${PORT}`);
});
