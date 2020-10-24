var express = require("express");
var router = express.Router();
const UserContrl = require("../controllers/user-controller");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/users", UserContrl.getUsers);

module.exports = router;
