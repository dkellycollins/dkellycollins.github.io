var ResumeCtrl = (function () {
   function ResumeCtrl($scope, $http) {
      this.$scope = $scope;
      this.$http = $http;
      $http.get("assets/resumeData.json").success(function (data) {
         $scope.resumeData = data;
      });
   }
   ResumeCtrl.$inject = ['$scope', '$http'];
   return ResumeCtrl;
})();

angular.module('app.views')
   .controller('ResumeCtrl', ResumeCtrl);