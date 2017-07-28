(function() {

 angular
    .module('uglyGoat')
    .controller('oneGoatController', oneGoatController);

 function oneGoatController($stateParams, $http) {
    const vm = this;


   vm.$onInit = function() {

     // console.log(“Edit Post controller. ID: “, $stateParams.id);
      vm.postId = $stateParams.id;


      $http.get("http://localhost:5000/api/goats/" + $stateParams.id)

      .then(function(response) {
        console.log("Goat ", response.data[0])
        vm.goat = response.data[0];
      }, function(error) {
        // error
        // console.log(“Error getting record”, error);
      });
   }
  }

})();
