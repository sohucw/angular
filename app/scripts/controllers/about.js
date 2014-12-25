'use strict';

/**
 * @ngdoc function
 * @name learangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learangularApp
 */
angular.module('learangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
