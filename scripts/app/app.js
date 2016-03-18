angular.module('app', [
       'ngUnity',
       'ui.router',
       'app.routes'
    ])
    .run(['$rootScope', function ($rootScope) {
       $rootScope.$on('$stateChangeSuccess', function($event, toState, toParams, fromState, fromParams) {
          ga('set', 'page', toState.name);
          ga('send', 'pageview');
       })
    }]);