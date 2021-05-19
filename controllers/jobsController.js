const talent = require("@google-cloud/talent").v4;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Company = mongoose.model("companies");
const User = mongoose.model("users");

const companyClient = new talent.CompanyServiceClient({
  projectId: "peoplecount-prod",
});

const jobClient = new talent.JobServiceClient();

const parent = "projects/peoplecount-prod";

module.exports = {
  async addCompensation(req, res) {
    const { compensationType } = req.body;
  },
  async getCompaniesList(req, res) {
    try {
      const responses = await companyClient.listCompanies({ parent });
      const resources = responses[0];
      res.send(resources);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error });
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
      return res.status(500).send({ error });
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
      return res.status(500).send({ error });
    }
  },

  async addUserToCompany(req, res) {
    try {
      // user adding this user must be authorized role
      const { userId } = req.query;
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error });
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
      return res.status(500).send({ error });
    }
  },

  deleteCompany(req, res) {},

  updateCompany(req, res) {},

  createJob: require("./job/createJob"),

  async retrieveJob(req, res) {
    const { jobName } = req.query || false;
    if (!jobName) {
      return res.status(400).send({ error: `Expected param jobName` });
    }
    try {
      const responses = await jobClient.getJob({ name: jobName });
      const resource = responses[0] || false;
      if (resource) {
        return res.status(200).send(resource);
      }
      return res
        .status(404)
        .send({ error: `Job with name: ${jobName} is not found.` });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error });
    }
  },

  async retrieveJobsList(req, res) {
    const filter = `companyName="${
      req.user.org.googleCompanyName
    }" AND status="${req.query.status || "OPEN"}"`;
    const request = {
      parent,
      filter,
    };
    try {
      const responses = await jobClient.listJobs(request);
      const resources = responses[0];
      res.send(resources);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error });
    }
  },
};
