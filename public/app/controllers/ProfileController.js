(function () {

    angular.module('app')
        .controller('ProfileController', ['profileService',  '$q', '$log',   '$state',   ProfileController]);

    function ProfileController(profileService,  $q, $log,  $state) {
     
 

        var vm = this; 
            
// vm.togParagraph = document.querySelector('#tog-paragraph'); 
// vm.togState = false;

// vm.tog = function () {
//   togState = !togState;
//   if (togState) {
//     togParagraph.textContent = "including AngularJS/2+, React, HTML5/CSS3-SASS/ES6+/XSLT. My Cloud proficiency includes AWS, GCP, MongoDB Atlas, and Firebase. </p><p>My data-app focus includes AJAX, REST API, MEAN/MERN full-stack, Angular-Django, and Linux-Apache-MySQL-Python skills. In sum, I'm a team player whether Linux Bash or DOS, I learn fast and I work with passion."
//   } else {
//     togParagraph.textContent = ''; // TOGGLE OPEN
//   } 
// };
        profileService.getAll().then(function(response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function(response) {
            $log.error('profileService returns ...' + response.statusText);
            return $q.reject('here, reject');
        })
 
    }

}());
 