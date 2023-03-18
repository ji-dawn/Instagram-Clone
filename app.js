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
  res.render("Jin/index"); /* Start path from /views/ */
});

/* Binding */

/* Bind and listen the connections on the specified host and port */
app.listen(PORT, () => {
  console.log(PORT + " is open!");
  console.log(`http://localhost:${PORT}`);
});
