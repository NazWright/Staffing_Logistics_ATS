const talent = require("@google-cloud/talent").v4;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Company = mongoose.model("companies");

const client = new talent.CompanyServiceClient({
  projectId: "peoplecount-prod",
});
const parent = "projects/peoplecount-prod";

module.exports = {
  async getCompanies(req, res) {
    try {
      const responses = await client.listCompanies({ parent });
      const resources = responses[0];
      res.send(resources);
    } catch (error) {
      console.error(error);
    }
  },

  getCompanyById(req, res) {},

  async createCompany(req, res) {
    try {
      const { displayName, headquartersAddress, size } = req.body;
      const internalCompany = new Company({
        displayName,
        employerId: req.user._id,
        size,
        address: headquartersAddress,
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
      const responses = await client.createCompany(request);
      const result = responses[0];
      console.log("Display Name: ", result.displayName);
      req.user.org_name = result.name;
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

  createJob(req, res) {},
};
