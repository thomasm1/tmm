angular.module('tmm').component('home', {
  templateUrl:  'views/home.html',
  controller: function() {
    this.greeting = 'hello';
  
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
    }
  }
})
 