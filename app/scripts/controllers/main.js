'use strict';

/**
 * @ngdoc function
 * @name learangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learangularApp
 */
angular.module('learangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
