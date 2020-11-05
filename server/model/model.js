const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema(
  {
    name: { type: String, required: true },
    dateTime: { type: String, required: true },
    trailhead: { type: Object, required: true },
    description: { type: String, required: true },
    ownerId: { type: String, ref: "User" },
    packingList: [{ type: Object, ref: "Item" }],
  },
  { timestamps: true }
);

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, requried: true },
    password: { type: String },
    trips: [{ type: Object, ref: "Trip" }],
    closet: [{ type: String, ref: "Item" }],
  },
  {
    timestamps: true,
  }
);

const ItemSchema = new Schema(
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
