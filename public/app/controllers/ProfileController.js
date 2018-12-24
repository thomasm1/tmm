(function () {

    angular.module('app')
        .controller('ProfileController', ['profileService',   '$state',   ProfileController]);

    function ProfileController(profileService, $state) {

        var vm = this; 
        profileService.getAll().then(function(response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function(response) {
            $log.error('Er' + response.statusText);
            return $q.reject('ererreceject');
        })
    }

}());