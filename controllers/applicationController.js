const talent = require("@google-cloud/talent").v4;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Application = mongoose.model("applications");
const Preferences = mongoose.model("preferences");

module.exports = {
  async submitJobPreferences(req, res) {
    const {
      first,
      last,
      emp_type,
      job_id,
      availablity,
      startOfWork,
      eightTo12HrShifts,
      transportation,
      geoArea,
      companyDepartureMessage,
      salaryReq,
    };

    const createdApplication = await new Application({
      job_id,
      applicantId: req.user._id,
      date_created: Date.now(),
      completed: false,
    }).save();

    const applicationPreferences = await new Preferences({
      applicationId: createdApplication._id,
      givenName: first,
      familyName: last,
      employmentType: emp_type,
      startOfWork,
      prefferedShift: availablity,
      eightTo12HrShifts,
      transportationType: transportation,
      geoArea,
      companyDepartureReason: companyDepartureMessage,
      salary: salaryReq,
    }).save();

    res.send(applicationPreferences);
  },
};
