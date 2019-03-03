var app = angular.module("app", []);

app.controller('emp', function($scope, calcService) {
    calcService.doSum();

});

app.provider('calcService', function() {
    
    var baseUrl = '';
    this.config = function(url){
        baseUrl = url;

    };
    this.$get = function() {
        var oCalcService = {};
        oCalcService.doSum = function(){

        };
        return oCalcService;
    };
app.config(["calcServiceProvider", function(calcServiceProvider) {
    calcServiceProvider.config('http://localhost:5005/posts');
}]);
    //var oCalcService = {};
    //oCalcService.doSum = function() {
    //return oCalcService;
    // };
});