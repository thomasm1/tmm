angular.module('tmm').component('home', {
  templateUrl:  'views/home.html',
  controller: 'homeController',
  controllerAs: 'homeCtrl', function() {
    homeCtrl.greeting = 'TMM';
  
    homeCtrl.toggleGreeting = function() {
      homeCtrl.greeting = (homeCtrl.greeting == 'TMM') ? 'Our Daily Tech Post' :  'TMM';
    }
  }
})
 