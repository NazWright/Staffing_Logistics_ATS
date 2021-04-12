const usersController = require("../controllers/usersController");
const passport = require("passport");

module.exports = (app) => {
  app.post("/api/users", usersController.createUser);

  app.post(
    "/api/login",
    passport.authenticate("local", {
      failureRedirect: "/",
      successRedirect: "/",
      failureFlash: true,
    })
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    usersController.postGoogleAuth
  );
};
