const passport = require("passport");

module.exports = {
  // user clicks on a sign in button
  // google oauth flow is started
  // if employer redirect to the billing then
  // on the callback redirect to profile
  createUser(req, res) {},

  localAuth(req, res) {
    res.send("done");
  },

  postGoogleAuth(req, res) {
    req.user && res.send(req.user);
  },
};
