(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.message = "";
  $scope.lunches = "";


  $scope.displayMessage = function () {
    console.log($scope.lunches);
    var counter = countLunches($scope.lunches);
    if (!counter) {
      $scope.message = "Please enter data first";
    }
    else {
      if (counter <= 3) {
        $scope.message = 'Enjoy!';
      }
      else if (counter > 3) {
        $scope.message = 'Too Much!';
      }
    }
  };


  var countLunches = function (string) {
      $scope.lunches.trim();
      if(string.length === 0)
        return 0;
      var lunchArray = string.split(',');
      return lunchArray.length;
  };
}


})();
