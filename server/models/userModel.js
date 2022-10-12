const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: true
    
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;