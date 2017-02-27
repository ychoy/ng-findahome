/************
 SERVER-SIDE JAVASCRIPT
 ************/

// Require express in our app
var express = require('express');
// Generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// Serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads from Angular
app.use(bodyParser.json());

// Serve jQuery and bootstrap from a local bower cache avoiding CDNs
// Place these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);
app.get('/api/listings', controllers.listings.index);
app.get('/api/listings/:listingId', controllers.listings.show);
app.post('/api/listings', controllers.listings.create);
/*
app.delete('/api/listings/:listingId', controllers.listings.destroy);
app.put('/api/listings/:listingId', controllers.listings.update);
*/

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
