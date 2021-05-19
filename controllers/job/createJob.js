const mongoose = require("mongoose");
const Job = mongoose.model("jobs");
const Skills = mongoose.model("skills");
const talent = require("@google-cloud/talent").v4;
const jobClient = new talent.JobServiceClient();

const parent = "projects/peoplecount-prod";
module.exports = async (req, res) => {
  try {
    const {
      title,
      description,
      addresses,
      emails,
      instruction,
      uris,
      qualifications,
      employmentTypes,
      promotionValue,
      responsibilities,
      expireTime,
      compensationType,
      unitsPerYear,
      amountPerPayment,
    } = req.body;

    const company = req.user.org.googleCompanyName;
    const languageCode = "en-US";
    const internalJob = new Job({
      userId: req.user._id,
      companyId: req.user.org.companyId,
    });
    const requisitionId = internalJob._id;
    const applicationInfo = {
      emails,
      instruction,
      uris,
    };

    const compensationInfo = {
      entries: [
        {
          expectedUnitsPerYear: { value: unitsPerYear },
          unit: compensationType,
          amount: { currencyCode: "USD", units: amountPerPayment },
        },
      ],
    };
    const postingPublishTime = { value: Date.now() };
    const postingExpireTime = { value: expireTime };

    // create google job
    const googleCloudJob = {
      company,
      requisitionId,
      title,
      description,
      applicationInfo,
      addresses,
      languageCode,
      responsibilities,
      qualifications,
      postingPublishTime,
      postingExpireTime,
      employmentTypes,
      compensationInfo,
      promotionValue,
    };

    const request = {
      parent,
      job: googleCloudJob,
    };

    const responses = await jobClient.createJob(request);
    const result = responses[0];
    internalJob.googleJobName = result.name;
    const savedJob = await internalJob.save();
    res.send(savedJob);
  } catch (error) {
    console.error(error);
  }
};
