(function() {
  'use strict';

  angular
    .module('uglyGoat', ["ui.router"])
    .config(function ($stateProvider, $urlServiceProvider, $locationProvider) {

      $locationProvider.html5Mode(true)

      $stateProvider.state("goat", {
        url: "goat/:id/",
        component: "goat"
      })

      $stateProvider.state("home", {
        url: "/",
        templateUrl: "default.html"
      })

      // $urlServiceProvider.rules.otherwise("/");

    })

}());
