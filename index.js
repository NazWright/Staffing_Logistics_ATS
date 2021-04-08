const express = require("express");

const app = express();

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App listening"));

module.exports = app;
