angular.module('tmm').component('maps', {
  templateUrl:  'views/maps.html',
  controller: function() {

    this.greeting = 'TMM';
  
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'TMM') ? 'Our Daily Tech Post' :  'TMM';
    } 
  }
})
 