(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41744442-1', 'dkellycollins.github.io');
ga('send', 'pageview');
angular.module('app.config', []);
angular.module('app.filters', [
    'ui.router'
]);
angular.module('app.components', [
    'ngMaterial',
    'ui.router'
]);
angular.module('app.views', [
    'ngMaterial',
    'ngMdIcons',
    'app.components',
    'app.filters'
])
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
angular.module('app', [
    'ui.router',
    'app.routes'
]);
angular.module('app.components')
    .directive('toggleSidenav', ['$mdSidenav', function($mdSidenav) {
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs) {
                var sidenavId = $attrs.toggleSidenav;
                
                $element.on('click', function() {
                   $mdSidenav(sidenavId).toggle(); 
                });
            }
        }
    }]);
angular.module('app.filters')
    .filter('stateData', ['$state', function($state) {
        return function(property, defaultValue) {
            var currentState = $state.current;
            return _.get(currentState, 'data.' + property) || defaultValue;
        }
    }])
angular.module('app.components')
    .controller('SitemapCtrl', ['$scope', '$state', function($scope, $state) {
        var states = $state.get();
        
        $scope.groups = _.chain(states)
            .filter(function(state) {
                var hidden = _.result(state, 'data.siteMapHidden');
                return !hidden && !state.abstract;
            })
            .groupBy(function(state) {
                var group = _.result(state, 'data.group');
                return group;
            })
            .value();
    }])
    .directive('sitemap', [function() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/app/components/sitemap/sitemap.html',
            controller: 'SitemapCtrl'
        }
    }]);
angular.module('app.views')
    .controller('FrameCtrl', ['$scope', '$sce', 'src', function($scope, $sce, src) {
        $scope.src = $sce.trustAsResourceUrl(src);
    }]);