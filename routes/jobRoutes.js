const jobsController = require("../controllers/jobsController");
const queryParamExists = require("../middlewares/queryParamExists");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  // create a company
  // only employers should be able to do this.
  app.post("/api/companies", requireLogin, jobsController.createCompany);

  app.get("/api/companies/all", jobsController.getCompaniesList);

  // all employers and recruiters and super admin
  app.get("/api/companies/me", jobsController.retrieveCompany);

  // all employers and recruiters , super admin
  app.post("/api/jobs", requireLogin, jobsController.createJob);

  app.get(
    "/api/jobs/me",
    requireLogin,
    queryParamExists(["jobName"]),
    jobsController.retrieveJob
  );

  app.get("/api/jobs/list", jobsController.retrieveJobsList);

  app.put(
    "/api/jobs",
    requireLogin,
    queryParamExists(["jobId"]),
    jobsController.updateJobById
  );

  app.get("/api/jobs/search", jobsController.searchJobs);
};
