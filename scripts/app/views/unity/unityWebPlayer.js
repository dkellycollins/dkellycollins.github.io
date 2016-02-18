angular.module('app.views')
    .controller('UnityWebPlayerCtrl', ['$scope', '$sce', 'src', function($scope, $sce, src) {
        $scope.src = $sce.trustAsResourceUrl(src);
    }]);