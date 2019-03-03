angular.module('tmm').component('map', {
  bindings: { map: '<' },  
  templateUrl:  'templates/views/map.html',
  controller: 'mapsController',
  controllerAs: 'mapsCtrl', function() {
 
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


    mapsCtrl.toggleGreeting = function() {
      mapsCtrl.greeting = (mapsCtrl.greeting == 'TMM charts') ? 'charts' :  'charts';
    };
  }


  // ,
  // resolve: {
  //   map: function (mapsService, $transition) {
  //     return mapsService.getMap($transition.params().mapId);
  //   }
  // }


});
 
 