const ListingsController = require("../controllers/listingsController");
module.exports = (app) => {
  app.delete("/api/listings/:listingId", ListingsController.deleteById);

  app.delete("/api/listings", ListingsController.deleteMany);

  app.get("/api/listings", ListingsController.filterListings);

  app.put("/api/listings/:listingId", ListingsController.updateOne);

  app.get("/api/listings/:listingId", ListingsController.getById);

  app.post("/api/listings", ListingsController.create);
};
