var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ng-findahome");

var Listing = require('./listing');

module.exports.Listing = Listing;
