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
                    window.location = 'views/main.html';
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
        /*
        *  checkAccount true means ID exist
        * */
        $scope.user = {checkAccount:false};
        // $scope.judgement = false;
        // var judge = function () {
        //     var pwd1 = $scope.user.pwd1;
        //     var pwd2 = $scope.user.pwd2;
        //     if ((pwd1 !== pwd2) && pwd2 !== null && pwd2 !== undefined && pwd2 !== "") {
        //         $scope.user.judgement = true;
        //     } else {
        //         $scope.user.judgement = false;
        //     }
        // };
        // $scope.$watch('user.pwd2', judge);
        $scope.focus = function(){
          if($scope.user.checkAccount){
              $scope.user.checkAccount=false;
          }
        };
        // $scope.$watch('user.email',focus);
        $scope.logon = function(){
            $log.log("注册前"+$scope.user);
            $http({
                method : 'post',
                url : 'register',
                data : {
                    email : $scope.user.email,
                    password : $scope.user.password,
                    name : $scope.user.name
                }
            }).success(function successCallback(data){
                $log.log(data);
                if(data) {
                    alert("注册成功！");
                    window.location = 'index.html';
                }
                else {
                    $scope.user.checkAccount = true;
                }
            }).error(function error(data){
                $log.log(data);
                window.location = 'views/error.html';
            });
        };
    });


// mainApp.controller("sidebarCtr",function($scope){
//     $scope.collapse = "nav nav-second-level collapse";
//     $scope.a = function () {
//         if($scope.collapse == "nav nav-second-level collapse"){
//             $scope.collapse = "nav nav-second-level collapse in";
//         }
//         else{
//             $scope.collapse = "nav nav-second-level collapse";
//         }
//     }
// });