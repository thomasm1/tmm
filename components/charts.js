angular.module('tmm').component('charts', {
  bindings: { charts: '<' },  
  templateUrl:  'views/charts.html',
  controller: 'chartsController',
  controllerAs: 'chartsCtrl', function() {
 
    // mapsCtrl.xMaps = function(mapsList, $state, $location) {
    //   if (mapsCtrl.id)
    //   $location.url("/xMaps/" + mapsCtrl.id)
    //   else 
    //   $location.url("/xMaps")
    // }
    // mapsCtrl.reloadData = function () {
    //   $state.reload();
    // }
    // mapsCtrl.maps = mapsList;


    chartsCtrl.toggleGreeting = function() {
      chartsCtrl.greeting = (chartsCtrl.greeting == 'TMM charts') ? 'charts' :  'charts';
    };
  }


  // ,
  // resolve: {
  //   map: function (mapsService, $transition) {
  //     return mapsService.getMap($transition.params().mapId);
  //   }
  // }


});
 
 