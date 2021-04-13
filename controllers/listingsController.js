const mongoose = require("mongoose");
const Listing = mongoose.model("listings");

module.exports = {
  // create a listing
  async create(req, res) {
    try {
      const {
        title,
        compensation,
        benefits,
        jobType,
        category,
        description,
      } = req.body;
      const listing = await new Listing({
        publisher_id: req.user._id,
        title,
        compensation,
        benefits,
        jobType,
        category,
        description,
        dateCreated: Date.now(),
        status: "Active",
        new: true,
      }).save();
      if (listing) {
        return res.send(listing);
      }
      return res.status(500).send({ error: "Listing Not Created." });
    } catch (error) {
      throw error;
    }
  },
  // delete a particular listing by its id
  async deleteById(req, res) {
    try {
      const { listingId } = req.params;
      const deletedListing = await Listing.findByIdAndDelete(listingId);
      if (deletedListing) {
        return res.send(deletedListing);
      }
      return res
        .status(500)
        .send({ error: "Something went wrong with listing deletion" });
    } catch (error) {
      throw error;
    }
  },
  // delete all of the listings created by this user
  async deleteMany(req, res) {
    const { userId } = req.query;
    const deletedListings = await Listing.remove({
      publisher_id: { $in: [userId] },
    });
    res.send(deletedListings);
  },
  // retrieve one particular listing by its id
  async getById(req, res) {
    try {
      const { listingId } = req.params;
      const matchedListing = await Listing.findById(listingId);
      if (matchedListing) {
        return res.send(matchedListing);
      }
      return res.status(404).send({ error: "User Not Found" });
    } catch (error) {
      throw error;
    }
  },

  async filterListings(req, res) {
    try {
      const filter = { ...req.query };
      const matchedListings = await Listing.find(filter);
      if (matchedListings.length > 0) {
        return res.send(matchedListings);
      }
      return res.status(404).send({ error: "No Listings captured by filter" });
    } catch (error) {
      throw error;
    }
  },

  async updateOne(req, res) {
    try {
      const updateDetails = { ...req.body };
      const { listingId } = req.params;
      const updatedListing = await Listing.findByIdAndUpdate(
        listingId,
        updateDetails
      );
      if (updatedListing) {
        return res.send(updatedListing);
      }
      return res.status(500).send({ error: "Could not update job listing." });
    } catch (error) {
      throw error;
    }
  },
};
