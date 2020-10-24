const mongoose = require("mongoose");
require("dotenv").config();

var dbname = "ultrapack";
var uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPW}@cluster0.tsqpq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true }).catch((e) => {
  console.log("Connection error: ", e.message);
});

const db = mongoose.connection;

module.exports = db;
