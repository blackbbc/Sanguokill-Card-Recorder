var phonecatApp = angular.module('phonecatApp', ['ngMaterial']);

phonecatApp.controller('PhoneListCtrl',['$scope', '$http',
    function($scope, $http) {

        $scope.name = "sweet";

    }]);
