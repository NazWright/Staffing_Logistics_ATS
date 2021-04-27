module.exports = (app) => {
  require("./authRoutes")(app);
  require("./listingRoutes")(app);
  require("./applicationRoutes")(app);
  require("./jobRoutes")(app);
};
