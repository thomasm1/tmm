(function () {

    angular.module('app')
        .controller('ProfileController', [ '$q', '$log',   '$state',   ProfileController]);

    function ProfileController( $q, $log,  $state) {
        
        vm = this; 
        vm.demos = false; 
 
    }

}());
 