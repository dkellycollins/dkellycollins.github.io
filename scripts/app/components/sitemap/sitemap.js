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