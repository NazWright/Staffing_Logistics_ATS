module.exports = (app) => {
    // delegate app to routes in this folder.
    app.get("/api/login", () => {
      res.send("HI");
    });
  };