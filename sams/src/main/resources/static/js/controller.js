/**
 * Created by tppppp on 2017/3/16.
 */
indexApp
    .controller("indexCtrl", function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })
    .controller("login", function ($scope, $http,$log) {
        $scope.user = {};
        $scope.submit = function () {
            $log.log($scope.user);
            $http({
                method : 'post',
                url : 'login',
                data : {
                    email : $scope.user.email,
                    password : $scope.user.password
                }
            }).then(function(resp){
                console.log(resp.data);
                if(resp.data) {
                    alert("登陆成功");
                    window.location = 'views/success.html';
                }else {
                    alert("用户名、密码不存在");
                }
            },function(resp){
                console.log(resp.status);
                alert(resp.status);
            });
        }
    })
    .controller("register",function($scope, $http,$log) {
        var user = $scope.user = {};
        $scope.judgement = false;
        var judge = function () {
            var pwd1 = $scope.user.pwd1;
            var pwd2 = $scope.user.pwd2;
            if ((pwd1 !== pwd2) && pwd2 !== null && pwd2 !== undefined && pwd2 !== "") {
                $scope.user.judgement = true;
            } else {
                $scope.user.judgement = false;
            }
        };
        $scope.$watch('user.pwd2', judge);
        $scope.logon = function(){
            $log.log($scope.user);
            $http({
                method : 'post',
                url : 'register',
                data : {
                    email : $scope.user.email,
                    password : $scope.user.pwd2,
                    name : $scope.user.name
                }
            }).success(function successCallback(data,status){
                $log.log(data);
                $log.log(status);
                if(data) {
                    window.location = 'index.html';
                }
            }).error(function error(data){
                $log.log(data);
                window.location = 'views/success.html';
            });
        };
    });


