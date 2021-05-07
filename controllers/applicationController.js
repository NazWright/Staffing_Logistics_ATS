const talent = require("@google-cloud/talent").v4;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Application = mongoose.model("applications");
const Preferences = mongoose.model("preferences");
const Signatures = mongoose.model("signatures");
const References = mongoose.model("references");

module.exports = {
  async submitJobPreferences(req, res) {
    const {
      first,
      last,
      emp_type,
      job_id,
      availability,
      prefferedShift,
      startOfWork,
      eightTo12HrShifts,
      transportationType,
      geoArea,
      companyDepartureMessage,
      salaryReq,
    } = req.body;

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
      prefferedShift,
      availability,
      eightTo12HrShifts,
      transportationType,
      geoArea,
      companyDepartureReason: companyDepartureMessage,
      salary: salaryReq,
    }).save();

    if (!applicationPreferences.isNew) {
      return res.status(200).send(applicationPreferences);
    } else {
      return res.status(500).send({
        error:
          "Something went wrong, job application entries could not be saved.",
      });
    }
  },

  async getPolicySignatures(req, res) {
    try {
      if (!req.query || !req.query.applicationId) {
        return res.status(401).send({ error: "No application specified." });
      }
      const { applicationId } = req.query;
      const userSignatures = await Signatures.findOne({
        applicationId,
        userId: req.user._id,
      });
      if (userSignatures) {
        return res.status(200).send(userSignatures);
      } else {
        return res.status(404).send({ error: "No signatures for given user." });
      }
    } catch (error) {
      console.log(Object.keys(error));
      console.error(error);
    }
  },

  async submitPolicySignatures(req, res) {
    try {
      if (!req.query || !req.query.applicationId) {
        return res.status(401).send({ error: "No application specified." });
      }
      const { applicationId } = req.query;
      const {
        sexHarrasmentPolicy,
        noCallNoShowPolicy,
        weeklyCheckInPolicy,
      } = req.body;
      if (
        sexHarrasmentPolicy.signed &&
        noCallNoShowPolicy.signed &&
        weeklyCheckInPolicy.signed
      ) {
        const policies_signed = [
          sexHarrasmentPolicy,
          noCallNoShowPolicy,
          weeklyCheckInPolicy,
        ];
        const signedPolicies = await new Signatures({
          applicationId,
          userId: req.user._id,
          policies_signed,
        }).save();
        if (!signedPolicies.isNew) {
          return res.status(200).send(signedPolicies);
        } else {
          return res.status(500).send({
            error:
              "Something went wrong, signature submissions could not be saved.",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  },

  async getReferences(req, res) {
    var applicationId;
    if (!req.query || !req.query.applicationId) {
      return res
        .status(400)
        .send({ error: "applicationId param was not provided with request." });
    }
    ({ applicationId } = req.query);
    const matchedReferences = await References.findOne({
      applicationId,
      userId: req.user._id,
    });
    if (matchedReferences) {
      return res.status(200).send(matchedReferences);
    } else {
      return res.status(404).send({
        error:
          "references for given application and user combination not found.",
      });
    }
  },

  async submitReferences(req, res) {
    var applicationId;
    if (!req.query || !req.query.applicationId) {
      return res
        .status(400)
        .send({ error: "applicationId param was not provided with request." });
    }
    ({ applicationId } = req.query);
    try {
      var references;
      if (!req.body || !req.body.reference1) {
        return res
          .status(400)
          .send({ error: "Please enter an initial reference." });
      }
      if (!req.body.reference2) {
        references = [req.body.reference1];
      } else {
        references = [
          req.body.reference1,
          req.body.reference2,
          req.body.reference3,
        ];
      }
      const userReferences = await new References({
        applicationId,
        userId: req.user._id,
        references,
      }).save();
      if (!userReferences.isNew) {
        return res.status.send(userReferences);
      } else {
        return res.status(500).send({
          error: "Something went wrong, references could not be saved.",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
};
