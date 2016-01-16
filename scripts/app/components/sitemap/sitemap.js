angular.module('app.components')
    .controller('SitemapCtrl', ['$scope', '$state', function($scope, $state) {
        var states = $state.get();
        
        $scope.groups = _.groupBy(states, function (state) {
            return state.data.group;
        });
    }])
    .directive('sitemap', [function() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/app/components/sitemap/sitemap.html',
            controller: 'SitemapCtrl'
        }
    }]);