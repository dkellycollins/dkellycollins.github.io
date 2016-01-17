angular.module('app.routes', ['ui.router', 'app.views'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/games/stf');
        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'scripts/app/views/main.html',
                url: '/',
            })
            .state('app.games', {
                abstract: true,
                url: 'games/',
                template: '<div ui-view style="height:100%;"></div>',
                data: {
                    group: 'Games'
                }
            })
            .state('app.games.stf', {
                url: 'stf',
                templateUrl: 'scripts/app/views/frame/frame.html',
                controller: 'FrameCtrl',
                resolve: {
                    src: function() {return 'https://dkellycollins.github.io/STF/';}
                },
                data: {
                    title: 'Secure the Future',
                    linkText: 'Secure the Future'
                }
            })
            .state('app.games.castle-crossing', {
                url: 'castlecrossing',
                templateUrl: 'scripts/app/views/frame/frame.html',
                controller: 'FrameCtrl',
                resolve: {
                    src: function() {return 'https://dkellycollins.github.io/CastleCrossing/';}
                },
                data: {
                    title: 'Castle Crossing',
                    linkText: 'Castle Crossing'
                }
            })
            .state('app.about', {
                abstract: true,
                template: '<div ui-view style="height:100%;"></div>',
                url: 'about/',
                data: {
                    group: 'About'
                }
            })
            .state('app.about.resume', {
                url: 'resume',
                templateUrl: 'scripts/app/views/frame/frame.html',
                controller: 'FrameCtrl',
                resolve: {
                    src: function() {return 'assets/Resume.pdf';}
                },
                data: {
                    title: 'Resume',
                    linkText: 'Resume'
                }
            });
    }]);