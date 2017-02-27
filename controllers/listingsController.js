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
  db.Album.findById(req.params.listingId, function(err, foundListing) {
    if(err) { console.log('listingsController.show error', err); }
    console.log('listingsController.show responding with', foundListing);
    res.json(foundListing);
  });
}

// export public methods here
module.exports = {
  index: index,
  show: show,
};
