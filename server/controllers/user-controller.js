const { User, Trip, Item } = require("../model/model");

// Returns a list of all users in the database
getUsers = async (req, res) => {
  User.find({}, (err, Users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: Users });
  });
};

module.exports = {
  getUsers,
};
