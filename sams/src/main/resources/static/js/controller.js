/**
 * Created by tppppp on 2017/3/16.
 */
indexApp
    .controller("indexCtrl", function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })
    .controller("login", function ($scope, $http) {
        $scope.submit = function (path) {

            window.location = 'views/' + path + '.html';
        }
    })
    .controller("register", function ($scope, $http) {
        $scope.judgement = false;
        var pwd1 = $scope.pwd1;
        var pwd2 = $scope.pwd2;
        if (pwd1 !== pwd2) {
            $scope.judgement = true;
        }

    });


