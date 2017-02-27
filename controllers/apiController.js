function index(req, res) {
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/ychoy/ng-findahome",
    base_url: "http://ng-findahome.herokuapp.com",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes available endpoints"
      },
      {
        method: "GET",
        path: "/api/listings",
        description: "Find all listings"
      },
      {
        method: "GET",
        path: "/api/listings/:id",
        description: "Get one listing by its id"
      },
      {
        method: "POST",
        path: "/api/listings/",
        description: "Create a new listing"
      },
      {
        method: "PUT",
        path: "/api/listings/:id/",
        description: "Update a listing"
      },
      {
        method: "DELETE",
        path: "/api/listings/:id/",
        description: "Delete a listing"
      }

    ]
  });
}



module.exports.index = index;
