const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");
const flash = require("req-flash");
const app = express();

require("./models");
require("./services/passport");

// test env rules
if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(keys.mongoURI)
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.error("Error: Failed to connect to database.", error);
    });
}

// production env rules
if (process.env.NODE_ENV === "production") {
  // making sure express will serve up production assets
  app.use(express.static("frontend/build"));
  // express will serve up index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(flash());

require("./routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App listening"));

module.exports = app;

// google maps request format
//  https://maps.googleapis.com/maps/api/geocode/json?key={API_KEY}&address={user.address}
