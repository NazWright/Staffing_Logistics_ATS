const passport = require("passport");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const checkValidId = require("../helpers/checkValidId");

module.exports = {
  async createUser(req, res, next) {
    const { familyName, givenName, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      familyName,
      givenName,
      email,
      password: hashedPassword,
      role,
      isAdmin: false,
    }).save(userNotCreatedErrorHandler);

    function userNotCreatedErrorHandler(err, user) {
      if (err) {
        next(err);
      } else if (!user) {
        next(new Error("Something went wrong with user creation"));
      } else {
        res.send(user);
      }
    }
  },

  localAuth(req, res) {
    res.send("done");
  },

  postGoogleAuth(req, res) {
    req.user && res.send(req.user);
  },

  success(req, res) {
    res.send("success!");
    // redirect to their dashboard
  },

  failure(req, res) {
    res.send("failure!");
  },

  async getById(req, res) {
    const { userId } = req.params;
    if (checkValidId(userId)) {
      const matchedUser = await User.findById(userId);
      if (matchedUser) {
        return res.send(matchedUser);
      }
      return res.status(404).send({ error: "User not found." });
    }
    return res.status(400).send({ error: "Invalid User Id" });
  },

  async getMatchedUsers(req, res) {
    const filter = { ...req.query };
    const matchedUsers = await User.find(filter);
    if (matchedUsers.length > 0) {
      return res.send(matchedUsers);
    }
    return res
      .status(400)
      .send({ error: "Filter did not capture any matches" });
  },

  async updateOneUser(req, res) {
    const updateDetails = { ...req.body };
    if (updateDetails.password) {
      updateDetails.password = await bcrypt.hash(updateDetails.password, 10);
    }
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(userId, updateDetails);
    if (updatedUser) {
      return res.send(updatedUser);
    }
    return res.status(404).send({ error: "User not found." });
  },

  async deleteUserById(req, res) {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (deletedUser) {
      return res.send({ message: "User successfully deleted." });
    }
    return res.send({ error: "Something went wrong with user deletion." });
  },
};
