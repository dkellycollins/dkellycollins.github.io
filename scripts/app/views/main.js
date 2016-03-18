angular.module('app.views')
    .controller('MainCtrl', ['$scope', '$state', '$mdSidenav', '$mdMedia', function ($scope, $state, $mdSidenav, $mdMedia) {
       function getTitle() {
          var currentState = $state.current;
          return _.get(currentState, 'data.title') || 'Home';
       }

       function getIsLockedOpen() {
          return $mdMedia('min-width: 1200px');
       }

       $scope.$watch(getTitle, function (title) {
          $scope.title = title;
       });

       $scope.$watch(getIsLockedOpen, function(isLockedOpen) {
          $scope.isLockedOpen = isLockedOpen;
       });

       $scope.$on('$stateChangeSuccess', function() {
          $mdSidenav('left').close();
       });
    }]);