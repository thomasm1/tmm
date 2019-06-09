angular.module('app').component('sandbox', {
  templateUrl:  'templates/sandbox.html',
  controller: function() {

    this.dag = 'Directed Acyclic Graph'; 
    this.toggleGreeting = function() {
      this.dag = (this.dag == 'TMM') ? 'DAG' :  'JSON DAG TOOL';
    }
  }
}) 