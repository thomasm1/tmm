var app = angular.module("app", []);

app.controller('emp', ['$scope', 'calcFactory', function($scope, calcFactory) {
    $scope.a = 10;
    $scope.b = 20;
    
    $scope.doSum = function() {
        calcFactory.getSum($scope.a, $scope.b, function(r){
            $scope.sum = r;
});
    };
}]);

app.factory('calcFactory', ['$http', '$log', function($http, $log) {
    $log.log("instantiating calcFactory..");
    var oCalcService = {};

    oCalcService.getSum = function(a, b, cb) {
        var s = parseInt(a) + parsInt(b);
        cb(s);
    };
    return oCalcService;

}]);
