angular
  .module('findahomeApp')
  .controller('ListingsIndexController', ListingsIndexController);

  ListingsIndexController.$inject = ['$http'];

  function ListingsIndexController ($http) {
    var vm = this;
    vm.newListing = {};
    vm.listings = [];

      $http({
        method: 'GET',
        url: '/api/listings'
      }).then(function successCallback(response) {
        vm.listings = response.data;
        console.log(response)
      }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
      });


  }
