const jobsController = require("../controllers/jobsController");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  // create a company
  // only employers should be able to do this.
  app.post("/api/companies", requireLogin, jobsController.createCompany);

  app.get("/api/companies", jobsController.getCompanies);
};
