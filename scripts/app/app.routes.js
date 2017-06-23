angular.module('app.routes', ['ui.router', 'app.views'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about/resume');
    $stateProvider
        .state('admin', {
          abstract: true,
          url: '/admin',
          template: '<div ui-view></div>'
        })
        .state('admin.resume', {
          url: '/resume',
          controller: 'ResumeCtrl',
          templateUrl: 'scripts/app/views/resume.html'
        })
        .state('app', {
          abstract: true,
          url: '/',
          templateUrl: 'scripts/app/views/main.html',
          controller: 'MainCtrl'
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
            src: function () { return 'https://dkellycollins.github.io/STF/'; }
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
            src: function () { return 'https://dkellycollins.github.io/CastleCrossing/Web.unity3d'; }
          },
          data: {
            title: 'Castle Crossing',
            linkText: 'Castle Crossing'
          }
        })
        .state('app.about', {
          abstract: true,
          template: '<div ui-view></div>',
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