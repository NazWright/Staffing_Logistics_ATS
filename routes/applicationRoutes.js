const applicationController = require("../controllers/applicationController");

module.exports = (app) => {
  app.post(
    "/api/applications/job_preferences",
    applicationController.submitJobPreferences
  );

  app.get(
    "/api/applications/job_preferences",
    applicationController.getJobPreferences
  );

  app.post(
    "/api/applications/user_signatures",
    applicationController.submitPolicySignatures
  );

  app.get(
    "/api/applications/user_signatures",
    applicationController.getPolicySignatures
  );

  app.get("/api/applications/references", applicationController.getReferences);

  app.get(
    "/api/applications/personal_info",
    applicationController.getPersonalInfo
  );

  app.post(
    "/api/applications/personal_info",
    applicationController.submitPersonalInfo
  );

  app.get(
    "/api/applications/emergency_contact",
    applicationController.getEmergencyContact
  );

  app.post(
    "/api/applications/emergency_contact",
    applicationController.submitEmergencyContactInfo
  );

  app.post(
    "/api/applications/background_check",
    applicationController.submitBackgroundInfo
  );

  app.get(
    "/api/applications/background_check",
    applicationController.getBackgroundInfo
  );
};
