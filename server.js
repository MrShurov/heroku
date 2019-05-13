const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public"), { maxAge: 86400000 }));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
