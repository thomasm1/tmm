(function() {

    var app = angular.module('app', ['ui.router', 'd3']);

    app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $urlRouterProvider) {

        $logProvider.debugEnabled(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: '/app/templates/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home',
                        'columnOne@home': {
                            template: 'This Col'
                        },
                        'columnTwo@home': {
                            // templateUrl: 'app/templates/chlor.html',
                            controller: function($scope) {
                                $scope.titles = ['title-A', 'title-B', 'title-C'];
                            }
                        }
                    },
                }
            })
            .state('register', {
                url: '/register',
                templateUrl: '/app/templates/register.html',
                controller: 'registerController'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '/app/templates/profile.html',
                controller: 'ProfileController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/templates/about.html',
                controller: 'AboutController'
            })
            .state('chlor', {
                url: '/chloropleth',
                templateUrl: 'app/templates/chlor.html',
                controller: 'ChlorController'
                    // controller: function($scope) {
                    //     $scope.titles = ['title-A', 'title-B', 'title-C'];
                    // }
            })
             .state('ownership', {
                url: '/chloropleth-world',
                templateUrl: 'app/templates/ownership.html',
                controller: 'ChlorOwnerController'
                    // controller: function($scope) {
                    //     $scope.titles = ['title-A', 'title-B', 'title-C'];
                    // }
            })
            .state('globe', {
                url: '/globe',
                templateUrl: 'app/templates/globe.html',
                controller: 'GlobeController'
            })
            .state('codePlayer', {
                url: '/codePlayer',
                templateUrl: 'app/templates/codePlayer.html'
            })
            .state('planets', {
                url: '/planets',
                templateUrl: 'app/templates/planets.html',
                controller: 'PlanetsController'
            })
            .state('dendro', {
                url: '/dendrogram',
                templateUrl: 'app/templates/dendrogram.html'
            })
            .state({
                name: 'maps',
                url: '/maps',
                component: 'maps'
            });

    }]);


    app.run(['$rootScope', '$log', function($rootScope, $log) {

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

            $log.debug('successfully changed states');
            $log.debug('event', event);
            console.log(event);
            $log.debug('toState', toState);
            console.log(toState);
            $log.debug('toParams', toParams);
            console.log(toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });

        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {

            $log.error('The requested state was not found: ', unfoundState);

        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

            $log.error('An error occurred while changing states: ', error);

            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });
    }]);

}());