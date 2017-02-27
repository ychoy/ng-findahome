var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ListingSchema = new Schema({
  type: String,
  bedrooms: Number,
  bathrooms: Number,
  leaseLength: String,
  squareFeet: String,
  parkingType: String,
  clothesWasher: String,
  clothesDryer: String,
  laundryRoomAndFacility: String,
  listingName: String,
  address: String,
  propertyContactName: String,
  propertyContactPhoneNumber: String,
  propertyContactEmail: String,
  propertyContactWebsite: String,
  speakSpanish: String,
  speakVietnamese: String,
  acceptsSection8: String,
  taxCreditProperty: String,
  subsidizedRentOk: String,
  seniorsOnly: String,
  cats: String,
  dogs: String,
  securityDeposit: String,
  applicationFee: String,
  dateAvailable: String,
  image: String,
  incomeBasedRent: String,
  rentAmount: String,
  latitude: Number,
  longitude: Number

});

var Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
