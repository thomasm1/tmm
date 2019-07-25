(function () {

  angular.module('app')
    .controller('HomeController', ['$log', 'notifier', '$state', HomeController]);

  function HomeController($log, notifier, $state) {

    message = 'Sensor Controller';
    vm = this;
    vm.refresh = function () {

      $log.debug($state.current);
      $state.reload();

    };
 

  }
}());