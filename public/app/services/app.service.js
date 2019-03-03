var app = angular.module("app", []);

app.service('calcService', ['$http', '$log', function($http, $log) {
    $log.log("instantiating calcService..");
    var oCalcService = {};

    oCalcService.getSum = function(a, b, cb) { 
$http({ 
    url: 'http://localhost:5005/posts?a=' + a + '&b=' + b,
    method: 'GET'
}).then(function(resp){
    $log.log(resp.data);
    cb(resp.data);
},function(resp){
    $log.error("ERROR oops");
});
};
return oCalcService;
 
}]);
    //var oCalcService = {};
    //oCalcService.doSum = function() {
    //return oCalcService;
    // };
 