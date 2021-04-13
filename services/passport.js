const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const bcrypt = require("bcrypt");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      const { id, name, emails } = profile;
      User.findOne({
        googleId: id,
        familyName: name.familyName,
        givenName: name.givenName,
        email: emails[0].value,
      }).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new record!
          new User({
            googleId: id,
            familyName: name.familyName,
            givenName: name.givenName,
            email: emails[0].value,
            role: "Default",
            isAdmin: false,
            parent: null,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async function (req, email, password, done) {
      let user;
      try {
        user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "No user with this email" });
        }
        if (bcrypt.compare(password, user.password)) {
          return done(null, user);
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);
