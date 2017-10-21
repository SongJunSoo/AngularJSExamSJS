'use strict';

/**
 * @ngdoc function
 * @name angularJsExamSjsApp.controller:SingupCtrl
 * @description
 * # SingupCtrl
 * Controller of the angularJsExamSjsApp
 */
angular.module('angularJsExamSjsApp')
  .controller('SignupCtrl', [
  "Data", "$scope", "$state",
   function (Data, $scope, $state) {
    this.awesomeThings = [ 
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 
    $scope.name = "";
    $scope.age = "";
    $scope.saveUserInfo = function() {
    	var dataPromise = Data.setData(
    		'http://172.16.2.11:52273/user',
    		'&name='+$scope.name+'&age='+$scope.age);
    	dataPromise.then(function(restuls){
    		$scope.name = "";
    		$scope.age = "";
    	},function(reason){},function(update){});
    };
 
  }]);