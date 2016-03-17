angular.module('app.views')
    .controller('MainCtrl', ['$scope', '$state', function($scope, $state) {
       function getTitle() {
          var currentState = $state.current;
          return _.get(currentState, 'data.title') || 'Home';
       }

       $scope.$watch(getTitle, function(title) {
          $scope.title = title;
       });
    }]);