angular.module('app.filters')
    .filter('stateData', ['$state', function($state) {
        return function(property, defaultValue) {
            var currentState = $state.current;
            return _.get(currentState, 'data.' + property) || defaultValue;
        }
    }])