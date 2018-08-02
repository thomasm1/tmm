 
 
var tmm = angular.module('tmm', []);
 
tmm.controller('tmmController', function tmmController($scope) {
  $scope.posts = [
    {
      did:"08-01-18",title:"Vogue1"
    }, {
      did:"08-04-18",title:"Vogue3"
    }, {
      did:"08-05-18",title:"Vogue4"
    }
  ];
});