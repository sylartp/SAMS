/**
 * Created by tppppp on 2017/3/16.
 */
indexApp
    .controller("indexCtrl", function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })
    .controller("login", function ($scope, $http,$location) {
        $scope.user = {email: '', password: ''};
        var email = $scope.user.email;
        var pwd = $scope.user.password;
        $scope.submit = function (path) {
            $http({
                method : 'post',
                url : 'login',
                data : {

                }
            }).then(function(){

            }).then(function(){

            });
            $location = 'views/' + path + '.html';
        }
    })
    .controller("register", function ($scope, $http,$location) {
        $scope.user = {email: '', pwd1: '', pwd2: '', name: '',judgement: false};
        judge = function () {
            var pwd1 = $scope.user.pwd1;
            var pwd2 = $scope.user.pwd2;
            if ((pwd1 !== pwd2) && pwd2 !== null && pwd2 !== undefined && pwd2 !== "") {
                $scope.user.judgement = true;
            } else {
                $scope.user.judgement = false;
            }
        };
        $scope.$watch('user.pwd2', judge);
        $scope.register = function(){
            $http({
                method : 'post',
                url : '/register',
                data : {
                    email : $scope.user.email,
                    pwd : $scope.user.pwd2,
                    name : $scope.user.name
                }
            }).then(function success(){
                $location = 'index.html';
            }).then(function error(){
                $location = 'views/error.html';
            });
        };
    });


