(function() {
  'use strict';

  angular.module('uglyGoat')
    .controller('allGoatsController', allGoatsController)

    function allGoatsController($http) {
      $http.get("http://localhost:5000/api/goats/")
        .then(function (goats) {
          console.log(goats);
        })
    }

}());
