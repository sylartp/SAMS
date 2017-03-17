/**
 * Created by tppppp on 2017/3/16.
 */
indexApp
    .controller("indexCtrl",function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    })
    .controller("login",function($scope,$http){
        $scope.login = function(){

        }
    });


