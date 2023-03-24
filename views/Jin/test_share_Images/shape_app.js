/* Adjust .ejs files' relative paht */

app.get("/ha", (req, res) => {
  res.render("ha");
});

for (let i = 0; i < 5; ++i) {
  app.get(`/sw${i}`, (req, res) => {
    // 렌더링 views 경로 안의 index.ejs 불러오기
    // 초기설정 했기 때문에 ejs라는 확장자 안붙임
    res.render("sw", { imgNum: `${i}` });
  });
}
