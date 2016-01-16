angular.module('app.components')
    .directive('toggleSidenav', ['$mdSidenav', function($mdSidenav) {
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs) {
                var sidenavId = $attrs.toggleSidenav;
                
                $element.on('click', function() {
                   $mdSidenav.toggle(sidenavId); 
                });
            }
        }
    }]);