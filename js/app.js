var App = angular.module('sgsRecorder', ['ngMaterial', 'ngAnimate']);

App.controller('main',['$scope',
  function($scope) {

    $scope.def=[30, 24, 12, 9, 5, 5, 3, 6, 5, 1, 3, 1, 4, 2, 2, 3, 2, 7, 3, 2, 6];
    $scope.card = [];

    $scope.refresh = function(index) {
      if (index == -1) {
        for (i=0; i<21; i++) {
          $scope.card[i] = $scope.def[i];
        }
        return;
      }

      if ($scope.card[index] > 0) {
        $scope.card[index]--;
      }
    }

    $scope.refresh(-1);

  }]);
