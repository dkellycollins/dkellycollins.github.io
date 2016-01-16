angular.module('app.views')
    .controller('FrameCtrl', ['$scope', 'src', function($scope, src) {
        $scope.src = src;
    }]);