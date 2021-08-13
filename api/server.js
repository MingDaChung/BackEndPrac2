var express = require("express");
var cors = require("cors");
var app = express();

var answer = require("./answer");

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.get("/", function(req, res) {
  let word = { ans: answer.answer(req.query.word) };
  res.send(JSON.stringify(word));
});
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
