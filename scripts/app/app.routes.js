angular.module('app.routes', ['ui.router', 'app.views'])
    .config(['$stateProvider', '$routeProvider', function($stateProvider, $routeProvider) {
        $routeProvider.otherwise('/about/resume');
        $stateProvider
            .state('app.games.stf', {
                url: '/games/stf',
                template: 'scripts/app/views/frame/frame.html',
                controller: 'FrameCtrl',
                resolve: {
                    src: 'http://dkellycollins.github.io/STF/'
                },
                data: {
                    group: 'Games',
                    linkText: 'Secure the Future'
                }
            })
            .state('app.games.castle-crossing', {
                url: '/games/castlecrossing',
                template: 'scripts/app/views/frame/frame.html',
                controller: 'FrameCtrl',
                resolve: {
                    src: 'http://dkellycollins.github.io/castlecrossing/'
                },
                data: {
                    group: 'Games',
                    linkText: 'Castle Crossing'
                }
            })
            .state('app.about.resume', {
                url: '/about/resume',
                template: 'scripts/app/views/about/resume.html',
                data: {
                    Group: 'About Me',
                    linkText: 'Resume'
                }
            })
    }]);