module.exports = (app) => {
  // delegate app to routes in this folder.
  app.get("/api/login", (req, res) => {
    res.send("HI");
  });

  app.get("/", (req, res) => {
    res.send("hello");
  });
};
