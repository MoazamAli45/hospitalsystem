const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please provide confirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password and confirm password are not same",
    },
  },
  role: {
    type: String,
    enum: ["HOD", "GSO", "DEP"],
    default: "DEP",
  },
  department: {
    type: String,
  },
});
// Password Hash
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // as when password it is modified so not run

    return next();
  }
  // console.log(this.password);
  this.password = await bcrypt.hash(this.password, 12);
  // console.log("Saving Password", this.password);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};
const User = mongoose.model("users", userSchema);
module.exports = User;
