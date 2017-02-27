angular
  .module('findahomeApp', ['ngRoute'])
  .config(config)
config.$inject = ['$routeProvider', '$locationProvider'];

function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/listings-index',
      controllerAs: 'listingsIndexCtrl',
      controller: 'ListingsIndexController'
    })
    .when('/listings', {
      templateUrl: '/templates/listings-index',
      controllerAs: 'listingsIndexCtrl',
      controller: 'ListingsIndexController'
    })

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
