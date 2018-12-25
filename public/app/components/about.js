angular.module('app').component('about', {
  templateUrl:  'templates/views/about.html',
  controller: 'aboutController', function () {
    aboutController.greeting = 'About TMM';
    
 
    aboutController.toggleAbout = function() {
      aboutController.greeting = (aboutController.greeting == 'About TMM') ? 'Our Daily Tech Post' :  'TMM';
    };
  }
});
 