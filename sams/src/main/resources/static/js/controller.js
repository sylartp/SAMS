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
        $scope.user = {email: '', password: ''};
        var email = $scope.user.email;
        var pwd = $scope.user.password;
        $scope.submit = function (path) {
            window.location = 'views/' + path + '.html';
        }
    })
    .controller("register", function ($scope, $http) {
        $scope.user = {email: '', pwd1: '', pwd2: ''};
        $scope.judgement = false;
        var email = $scope.user.email;
        judge = function () {
            var pwd1 = $scope.user.pwd1;
            var pwd2 = $scope.user.pwd2;
            if ((pwd1 !== pwd2) && pwd2 !== null && pwd2 !== undefined && pwd2 !== "") {
                $scope.judgement = true;
            }else {
                $scope.judgement = false;
            }
        };
        $scope.$watch('user.pwd2', judge);
    });


