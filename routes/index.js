var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Node Server Template" });
  res.sendFile(__dirname + "/../public/test/index.html");
});
router.get("/test", function (req, res, next) {
  // res.render("index", { title: "Node Server Template" });
  res.sendFile(__dirname + "/../public/test/index.html");
});

module.exports = router;
