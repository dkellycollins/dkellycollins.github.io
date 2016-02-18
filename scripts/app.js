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
                templateUrl: 'scripts/app/views/unity/unityWebPlayer.html',
                controller: 'UnityWebPlayerCtrl',
                resolve: {
                    src: function() {return 'https://dkellycollins.github.io/CastleCrossing/Web.unity3d';}
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
                templateUrl: 'scripts/app/views/resume/resume.html',
                controller: 'ResumeCtrl',
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
var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
if (document.location.protocol == 'https:')
   unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');

angular.module('app.components')
    .directive('unityWebPlayer', [function () {
       var config = {
          width: 960,
          height: 600,
          params: {
             enableDebugging: '1',
             disableContextMenu: true
          }
       };

       function init(src, $element) {
          var $missingScreen = $element.find('.missing');
          var $brokenScreen = $element.find('.broken');
          $missingScreen.hide();
          $brokenScreen.hide();

          var u = new UnityObject2(config);
          u.observeProgress(function (progress) {
             switch (progress.pluginStatus) {
                case "broken":
                {
                   $brokenScreen.find("a").click(function (e) {
                      e.stopPropagation();
                      e.preventDefault();
                      u.installPlugin();

                      return false;
                   });
                   $brokenScreen.show();
                }
                   break;
                case "missing":
                {
                   $missingScreen.find("a").click(function (e) {
                      e.stopPropagation();
                      e.preventDefault();
                      u.installPlugin();
                      return false;
                   });
                   $missingScreen.show();
                }
                   break;
                case "installed":
                {
                   $missingScreen.remove();
                }
                   break;
                case "first":
                {

                }
                   break;
             }
          });

          u.initPlugin($element, src);
       }

       return {
          restrict: 'EA',
          link: function ($scope, $element, $attr) {
             $scope.$watch($attr.unityWebPlayer, function(src) {
                if(!src) {
                   return;
                }

                init(src, $element);
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
var ResumeCtrl = (function () {
   function ResumeCtrl($scope, $http) {
      this.$scope = $scope;
      this.$http = $http;
      $http.get("scripts/app/views/resume/resumeData.json").success(function (data) {
         $scope.resumeData = data;
      });
   }
   ResumeCtrl.$inject = ['$scope', '$http'];
   return ResumeCtrl;
})();

angular.module('app.views')
   .controller('ResumeCtrl', ResumeCtrl);
angular.module('app.views')
    .controller('UnityWebPlayerCtrl', ['$scope', '$sce', 'src', function($scope, $sce, src) {
        $scope.src = $sce.trustAsResourceUrl(src);
    }]);