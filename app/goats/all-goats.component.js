(function() {
  'use strict';

  angular.module('uglyGoat')
    .component('goats', {
      controller: "allGoatsController",
      templateUrl: "app/goats/all-goats.template.html"
    })
}());
