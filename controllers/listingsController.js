/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Listing.find({}, function(err, allListings) {
    res.json(allListings);
  });
}

function show(req, res) {
  db.Listing.findById(req.params.listingId, function(err, foundListing) {
    if(err) { console.log('listingsController.show error', err); }
    console.log('listingsController.show responding with', foundListing);
    res.json(foundListing);
  });
}

function create(req, res) {

  db.Listing.create(req.body, function(err, listing) {
    if (err) { console.log('error', err); }
    console.log(listing);
    res.json(listing);
  });
}
// export public methods here
module.exports = {
  index: index,
  show: show,
  create: create
};
