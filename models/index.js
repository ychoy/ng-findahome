var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/ng-findahome");

var Listing = require('./listing');

module.exports.Listing = Listing;
