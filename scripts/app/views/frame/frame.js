angular.module('app.views')
    .controller('FrameCtrl', ['$scope', '$sce', 'src', function($scope, $sce, src) {
        $scope.src = $sce.trustAsResourceUrl(src);
    }]);