var express = require("express");
var router = express.Router();
const authContrl = require("../controllers/auth-controller");
const requireLogin = require("../middleware/requireLogin");

router.post("/googlelogin", authContrl.googleLogin);

router.get("/protected", requireLogin, (req, res) => {
  res.send("hello user");
});

module.exports = router;
