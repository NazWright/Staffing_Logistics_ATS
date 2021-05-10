const talent = require("@google-cloud/talent").v4;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Company = mongoose.model("companies");
const User = mongoose.model("users");
const Job = mongoose.model("jobs");

const companyClient = new talent.CompanyServiceClient({
  projectId: "peoplecount-prod",
});

const jobClient = new talent.JobServiceClient();

const parent = "projects/peoplecount-prod";

module.exports = {
  async getCompaniesList(req, res) {
    try {
      const responses = await companyClient.listCompanies({ parent });
      const resources = responses[0];
      res.send(resources);
    } catch (error) {
      console.error(error);
    }
  },

  async retrieveCompany(req, res) {
    try {
      const responses = await companyClient.getCompany({
        name: req.user.org.googleCompanyName,
      });
      const resources = responses[0];
      res.send(resources);
    } catch (error) {
      console.error(error);
    }
  },

  async getCompanyById(req, res) {
    try {
      const { companyId } = req.query;
      const matchedCompany = await Company.findById(companyId);
      if (matchedCompany) {
        res.send(matchedCompany);
      } else {
        res.status(404).send({ error: "Company not found." });
      }
    } catch (error) {
      console.error(error);
    }
  },

  async addUserToCompany(req, res) {
    try {
      // user adding this user must be authorized role
      const { userId } = req.query;
    } catch (error) {
      console.error(error);
    }
  },

  async createCompany(req, res) {
    try {
      const { displayName, headquartersAddress, size } = req.body;
      const internalCompany = new Company({
        employerId: req.user._id,
      });
      const company = {
        displayName: displayName,
        externalId: internalCompany._id,
        headquartersAddress,
        size,
      };
      const request = {
        parent,
        company,
      };
      const responses = await companyClient.createCompany(request);
      const result = responses[0];
      console.log("Display Name: ", result.displayName);
      req.user.org = {
        googleCompanyName: result.name,
        name: result.displayName,
        owner: true,
        companyId: internalCompany._id,
      };
      await req.user.save();
      internalCompany.googleCompanyName = result.name;
      const savedCompany = await internalCompany.save();
      res.send(savedCompany);
    } catch (error) {
      console.error(error);
    }
  },

  deleteCompany(req, res) {},

  updateCompany(req, res) {},

  async createJob(req, res) {
    try {
      const { title, description, jobUrl, addressOne, skills } = req.body;
      const languageCode = "en-US";
      const uris = [jobUrl];
      const applicationInfo = {
        uris,
      };
      const addresses = [addressOne];

      const internalJob = new Job({
        userId: req.user._id,
        companyId: req.user.org.companyId,
      });

      // create google job
      const googleCloudJob = {
        company: req.user.org.googleCompanyName,
        requisitionId: internalJob._id,
        title,
        description,
        applicationInfo,
        addresses,
        languageCode,
      };

      const request = {
        parent,
        job: googleCloudJob,
      };

      const responses = await jobClient.createJob(request);
      const result = responses[0];

      console.log(`Created Google Cloud Job: ${result.name}`);
      if (result && result.name) {
        internalJob.googleJobName = result.name;
        const savedJob = await internalJob.save();
        res.send(savedJob);
      } else {
        res.status(500).send({ error: "Could not create internal job info." });
      }
    } catch (error) {
      console.error(error);
    }
  },

  retrieveJob(req, res) {},

  retrieveJobsList(req, res) {},
};
