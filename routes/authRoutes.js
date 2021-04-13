const usersController = require("../controllers/usersController");
const passport = require("passport");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/signup", usersController.createUser);

  app.post(
    "/api/login",
    passport.authenticate("local", {
      successRedirect: "/auth/success",
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

  app.get("/auth/success", usersController.success);

  app.get("/auth/failure", usersController.failure);

  app.get("/api/current_user", requireLogin, (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/users", requireLogin, usersController.getMatchedUsers);
  app.get("/api/users/:userId", requireLogin, usersController.getById);
  app.put("/api/users/:userId", requireLogin, usersController.updateOneUser);
  app.delete(
    "/api/users/:userId",
    requireLogin,
    usersController.deleteUserById
  );
};
