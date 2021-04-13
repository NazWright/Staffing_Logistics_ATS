module.exports = (app) => {
  require("./authRoutes")(app);
  require("./listingRoutes")(app);
};
