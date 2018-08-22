angular.module('tmm').component('home', {
  templateUrl:  'views/home.html',
  controller: function() {
    this.greeting = 'TMM';
  
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'TMM') ? 'Our Daily Tech Post' :  'TMM';
    }
  }
})
 