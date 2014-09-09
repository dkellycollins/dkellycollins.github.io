///<reference path="./lib/angularjs/angular.d.ts" />

var ResumeCtrl = (function () {
    function ResumeCtrl($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;
        $http.get("resumeData.json").success(function (data) {
            $scope.resumeData = data;
        });
    }
    ResumeCtrl.$inject = ['$scope', '$http'];
    return ResumeCtrl;
})();
