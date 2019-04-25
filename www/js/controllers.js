// Importante No ELIMINAR
angular.module('starter.controllers', [])

// Vista Principal Controller
.controller('vistaCtrl', function($scope, $state) {
  // Funcion para ir a la vista del ADN
  $scope.irAdn = function() {
    $state.go("ADN");
  }
  // Funcion para ir a la vista del Video
  $scope.irvideo = function(){
    $state.go("video");
  }
})

// ADN Controller
.controller('adnCtrl', function($scope,$state) {

})

// Video Controller
.controller("videoCtrl", function($scope,$state) {

});
