var express = require("express");
var router = express.Router();
const UserContrl = require("../controllers/user-controller");
const requireLogin = require("../middleware/requireLogin");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/users", UserContrl.getUsers);

router.post("/createtrip", requireLogin, UserContrl.createTrip);
router.get("/alltrips", requireLogin, UserContrl.getTrips);



module.exports = router;
