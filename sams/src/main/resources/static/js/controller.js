/**
 * Created by tppppp on 2017/3/16.
 */
indexApp.controller("indexCtrl",function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

registerApp.controller("registerCtrl", function ($scope,$routeParams) {
    $scope.params = $routeParams;
    $scope.name01 = "123";
});
