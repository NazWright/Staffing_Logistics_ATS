const applicationController = require("../controllers/applicationController");

module.exports = (app) => {
  app.post(
    "/api/applications/step/1",
    applicationController.submitJobPreferences
  );

  app.post(
    "/api/applications/step/2",
    applicationController.submitPolicySignatures
  );

  app.get("/api/user_signatures", applicationController.getPolicySignatures);

  app.get("/api/references", applicationController.getReferences);

  app.get("/api/personal_info", applicationController.getPersonalInfo);

  app.post("/api/personal_info", applicationController.submitPersonalInfo);
};
