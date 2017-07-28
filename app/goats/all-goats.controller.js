(function() {
  'use strict';

  angular.module('uglyGoat')
    .controller('allGoatsController', allGoatsController)

    function allGoatsController($http) {
      const vm = this;

      $http.get("http://localhost:5000/api/goats/")
        .then(function (goats) {
          console.log(goats);
          vm.goats = goats.data

        })
    }

}());
