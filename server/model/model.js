const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema(
  {
    name: { type: String, required: true },
    dateTime: { type: String, required: true },
    trailhead: { type: Object, required: true },
    description: { type: String, required: true },
    owner: { type: String, ref: "User" },
  },
  { timestamps: true }
);

const UserSchema = new Schema(
  {
    userId: { type: String, required: true },
    trips: [{ type: String, ref: "Trip" }],
    closet: [{ type: String, ref: "Item" }],
  },
  {
    timestamps: true,
  }
);

const ItemSchema = new ItemSchema(
  {
    owner: { type: String, ref: "User", required: true },
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    quantity: { type: Number, required: true },
    consumable: { type: Boolean, requried: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", TripSchema);
const User = mongoose.model("User", UserSchema);
const Item = mongoose.model("Item", ItemSchema);

module.exports = {
  Trip: Trip,
  User: User,
  Item: Item,
};
