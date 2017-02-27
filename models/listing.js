var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ListingSchema = new Schema({
  Type: String,
  Bedrooms: Number,
  Bathrooms: Number,
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
  speakSpanish: Boolean,
  speakVietnamese: Boolean,
  acceptsSection8: Boolean,
  taxCreditProperty: Boolean,
  subsidizedRentOk: Boolean,
  seniorsOnly: Boolean,
  cats: Boolean,
  dogs: Boolean,
  securityDeposit: String,
  applicationFee: String,
  dateAvailable: String,
  image: String,
  incomeBasedRent: Boolean,
  rentAmount: String,
  latitude: Number,
  longitude: Number

});

var Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
