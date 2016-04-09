
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.submit = function(){
	$http({
         method : "POST",
         url : "/backhand",
    	data : {
			"username" : $scope.username,
			"pas" : $scope.pas,
			"aditya" : $scope.aditya,
			"dhiraj" : $scope.dhiraj,
			"saurab" : $scope.saurab
		}
  }).success(function (response) {
	  	  $scope.item = response.whitepasta;
	  	  $scope.item1 = response.redpasta;
	  	  $scope.item2 = response.pasta;
	  	  $scope.item3 = response.pizza;
	  	  $scope.item4 = response.samose;
	  
	  	  
	      $scope.myWelcome = "Total amount:" + response.naam;
  });
	};
	
});