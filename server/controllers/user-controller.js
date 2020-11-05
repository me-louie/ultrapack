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

// Creates a new trip associated with the user
createTrip = (req, res) => {
  const { name, dateTime, trailhead, description } = req.body;
  if (!name || !dateTime || !trailhead || !description ) {
    return res.status(422).json({ error: "Please complete all trip fields" });
  }

  const trip = new Trip({
    name,
    dateTime,
    trailhead,
    description,
    ownerId: req.user._id,
  });

  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { trips: trip } },
    { new: true, upsert: true },
    (err, result) => {
      if (err) {
        return res
          .status(404)
          .json({ err, message: "Invalid create trip request" });
      }
      return res.status(200).json({ result });
    }
  );
};

getTrips = (req, res) => {
  User.findOne({ _id: req.user._id }, "trips", (err, result) => {
    if (err) {
      return res.status(400).json({ error: "Get trips request failed" });
    } else if (!result) {
      return res.status(404).json({ error: "User not found" });
    } else {
      return res.status(200).json({ result });
    }
  });
};

module.exports = {
  getUsers,
  createTrip,
  getTrips,
};
