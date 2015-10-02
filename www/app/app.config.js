(function () {
    'use strict';

    angular.module('app')
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

    function configuration($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.forwardCache(true);
        $urlRouterProvider.otherwise("/app/login");
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/shared/nav/nav.html'
            })
            .state('app.login', {
                url: '/login',
                views: {
                    menuContent: {
                        templateUrl: 'app/components/login/login.html'
                    }
                }
            });
    }
})();