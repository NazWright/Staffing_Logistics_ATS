const talent = require("@google-cloud/talent").v4;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Application = mongoose.model("applications");
const Preferences = mongoose.model("preferences");
const Signatures = mongoose.model("signatures");
const References = mongoose.model("references");
const PersonalInfo = mongoose.model("personal_information");
const EmergencyContact = mongoose.model("emergency_contacts");
const BackgroundCheck = mongoose.model("background_checks");
const bycrpt = require("bcrypt");

module.exports = {
  /* 
    Retrieves preferences for a specified user.  
  */

  async getJobPreferences(req, res) {
    const { applicationId } = req.query;
    const userId = req.user._id;
    try {
      const matchedPreferences = await Preferences.findOne({
        applicationId,
        userId,
      });
      if (!matchedPreferences) {
        return res.status(404).send({
          error: "Preferences for given user and application is not found.",
        });
      }
      return res.status(200).send(matchedPreferences);
    } catch (error) {
      console.error(error);
    }
  },

  /* 
    Sumbits job detail preferences for the current user.  
  */
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
    }
    return res.status(500).send({
      error:
        "Something went wrong, job application entries could not be saved.",
    });
  },

  /* 
    Retreives policies signed by a specified user
  */
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
      }
      return res.status(404).send({ error: "No signatures for given user." });
    } catch (error) {
      console.log(Object.keys(error));
      console.error(error);
    }
  },

  /* 
    Records signed policies for current user. 
  */
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
        attendancePolicy,
      } = req.body;
      if (
        sexHarrasmentPolicy.signed &&
        noCallNoShowPolicy.signed &&
        weeklyCheckInPolicy.signed &&
        attendancePolicy.signed
      ) {
        const policies_signed = [
          sexHarrasmentPolicy,
          noCallNoShowPolicy,
          weeklyCheckInPolicy,
          attendancePolicy,
        ];
        const signedPolicies = await new Signatures({
          applicationId,
          userId: req.user._id,
          policies_signed,
        }).save();
        if (!signedPolicies.isNew) {
          //saveReferenceToApplication("backgroundCheck", matchedBackgroundCheck._id, applicationId);
          return res.status(200).send(signedPolicies);
        }
        return res.status(500).send({
          error:
            "Something went wrong, signature submissions could not be saved.",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },

  /* 
    Retrieves references for a specified user.  
  */
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

  /* 
    Sumbits references provided by applicant 
  */
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
        //saveReferenceToApplication("backgroundCheck", matchedBackgroundCheck._id, applicationId);
        return res.status(200).send(userReferences);
      }
      return res.status(500).send({
        error: "Something went wrong, references could not be saved.",
      });
    } catch (error) {
      console.error(error);
    }
  },

  /* 
    Sumbits the personal info provided by the user for job application 
  */
  async submitPersonalInfo(req, res) {
    const {
      familyName,
      givenName,
      middleName,
      address,
      phone,
      secPhone,
      email,
    } = req.body;
    const userId = req.user._id;
    const { applicationId } = req.query;
    try {
      const personalRecord = await new PersonalInfo({
        applicationId,
        userId,
        givenName,
        middleName,
        familyName,
        address,
        phone,
        secPhone,
        email,
      }).save();
      if (!personalRecord.isNew) {
        //saveReferenceToApplication("backgroundCheck", matchedBackgroundCheck._id, applicationId);
        return res.status(200).send(personalRecord);
      }
      return res
        .status(500)
        .send({ error: "Personal information could not be saved." });
    } catch (error) {
      console.error(error);
    }
  },

  /* 
    Retrieves the personal info provided by user for job application  
  */
  async getPersonalInfo(req, res) {
    const { applicationId } = req.query;
    const matchedPersonalInfo = await PersonalInfo.findOne({
      applicationId,
      userId: req.user._id,
    });
    if (!matchedPersonalInfo) {
      return res.status(404).send({
        error:
          "Personal information for this given user and application combination is not found.",
      });
    }
    return res.status(200).send(matchedPersonalInfo);
  },

  /* 
    Sumbits the emergency contact info for job application  
  */
  async submitEmergencyContactInfo(req, res) {
    const { applicationId } = req.query;
    const {
      familyName,
      givenName,
      middleName,
      address,
      phone,
      secPhone,
      email,
      relationshipToUser,
    } = req.body;
    const emergencyContact = await new EmergencyContact({
      applicationId,
      userId: req.user._id,
      familyName,
      middleName,
      givenName,
      address,
      phone,
      secPhone,
      email,
      relationshipToUser,
    }).save();
    if (!emergencyContact.isNew) {
      //saveReferenceToApplication("backgroundCheck", matchedBackgroundCheck._id, applicationId);
      return res.status(200).send(emergencyContact);
    }
    return res
      .staus(500)
      .send({ error: "Emergency contact could not be saved." });
  },

  /* 
    Retrieves the emergency contact info for job application for current user
  */
  async getEmergencyContactInfo(req, res) {
    const { applicationId } = req.query;
    const userId = req.user._id;
    try {
      const matchedEmergencyContact = await EmergencyContact.findOne({
        applicationId,
        userId,
      });
      if (!matchedEmergencyContact) {
        return res.status(404).send({
          error:
            "Emergency contact for given user and application is not found.",
        });
      }
      return res.status(200).send(matchedEmergencyContact);
    } catch (error) {
      console.error(error);
    }
  },

  /* 
    Sumbits the background check information for the current user. 
  */
  async submitBackgroundInfo(req, res) {
    const { applicationId } = req.query;
    const userId = req.user._id;
    const {
      givenName,
      familyName,
      middleName,
      socialSecurityNum,
      gender,
      dateOfBirth,
      driversLicenseNum,
      driverLicenseState,
      address,
      prevCities,
      hasCrime,
      crimes,
      backgroundSignature,
    } = req.body;
    try {
      const hashedSSN = await bycrpt.hash(socialSecurityNum, 10);
      const backgroundEntries = await new BackgroundCheck({
        applicationId,
        userId,
        givenName,
        middleName,
        familyName,
        socialSecurityNum: hashedSSN,
        gender,
        dateOfBirth,
        driversLicenseNum,
        driverLicenseState,
        address,
        prevCities,
        hasCrime,
        crimes: hasCrime ? crimes : null,
        backgroundSignature,
      }).save();
      if (!backgroundEntries.isNew) {
        //saveReferenceToApplication("backgroundCheck", matchedBackgroundCheck._id, applicationId);
        return res.status(200).send(backgroundEntries);
      }
      return res.status(500).send({
        error: "Something went wrong, cannot save background entries.",
      });
    } catch (error) {
      console.error(error);
    }
  },

  /* Retrieves the background check info for the specified user */
  async getBackgroundInfo(req, res) {
    const { applicationId } = req.query;
    const userId = req.user._id;
    try {
      const matchedBackgroundCheck = await BackgroundCheck.findOne({
        applicationId,
        userId,
      });
      if (!matchedBackgroundCheck) {
        return res.status(404).send({
          error:
            "Background check for given user and application is not found.",
        });
      }
      return res.status(200).send(matchedBackgroundCheck);
    } catch (error) {
      console.error(error);
    }
  },

  async submitApplication(req, res) {
    const { applicationId } = req.query;
    try {
      const completedApplication = await Application.findByIdAndUpdate(
        applicationId,
        { completed: true },
        { useFindAndModify: false }
      );
      if (completedApplication) {
        return res.status(200).send(completedApplication);
      }
      return res
        .status(500)
        .send({ error: "Could not successfully submit application" });
    } catch (error) {
      console.error(error);
    }
  },

  async updateApplication(req, res) {},

  async getApplicationById(req, res) {
    const { applicationId } = req.query;
    try {
      const matchedApplication = await Application.findById(
        applicationId
      ).populate(
        "references emergencyContact personalInfo preferences backgroundCheck"
      );
      res.send(matchedApplication);
    } catch (error) {
      console.error(error);
    }
  },
};

/* Saves a reference to the section of the application in the main application schema */
async function saveReferenceToApplication(
  property,
  referenceId,
  applicationId
) {
  const savedReference = await Application.findByIdAndUpdate(applicationId, {
    // referenceId must be of type ObjectId
    [property]: referenceId,
  });
}
