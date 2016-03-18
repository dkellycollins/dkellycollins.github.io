angular.module('app.views')
    .controller('MainCtrl', ['$scope', '$state', '$mdSidenav', function ($scope, $state, $mdSidenav) {
       function getTitle() {
          var currentState = $state.current;
          return _.get(currentState, 'data.title') || 'Home';
       }

       $scope.$watch(getTitle, function (title) {
          $scope.title = title;
       });

       $scope.$on('$stateChangeSuccess', function() {
          $mdSidenav('left').close();
       });
    }]);