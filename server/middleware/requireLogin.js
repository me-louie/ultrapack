const jwt = require("jsonwebtoken");
const { User } = require("../model/model");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === Bearer TOKEN
  if (!authorization) {
    return res.status(401).json({ error: "User must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SIGNIN_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized user" });
    }
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
