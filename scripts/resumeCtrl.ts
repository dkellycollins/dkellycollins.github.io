///<reference path="./lib/angularjs/angular.d.ts" />

interface IResumeScope extends ng.IScope {
    resumeData: any;
}

class ResumeCtrl {
    static $inject = ['$scope', '$http'];

    constructor(
        private $scope:IResumeScope,
        private $http: ng.IHttpService) {

        $http.get("resumeData.json")
            .success((data) => {
                $scope.resumeData = data;
            });
    }
}
