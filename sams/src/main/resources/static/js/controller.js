/**
 * Created by tppppp on 2017/3/16.
 */
indexApp
    .controller("login", function ($scope, $http, $log, $state) {
        $scope.user = {};
        $scope.submit = function () {
            $log.log($scope.user);
            $http({
                method: 'post',
                url: 'login',
                data: {
                    email: $scope.user.email,
                    password: $scope.user.password
                }
            }).then(function (resp) {
                console.log(resp.data);
                if (resp.data) {
                    alert("登陆成功");
                    $state.go('main', {username: resp.data.username});
                } else {
                    alert("用户名、密码不存在");
                }
            }, function (resp) {
                console.log(resp.status);
                alert(resp.status);
            });
        }
    })
    .controller("register", function ($scope, $http, $log) {
        /*
         *  checkAccount true means ID exist
         * */
        $scope.user = {checkAccount: false};
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
        $scope.focus = function () {
            if ($scope.user.checkAccount) {
                $scope.user.checkAccount = false;
            }
        };
        // $scope.$watch('user.email',focus);
        $scope.logon = function () {
            $log.log("注册前" + $scope.user);
            $http({
                method: 'post',
                url: 'register',
                data: {
                    email: $scope.user.email,
                    password: $scope.user.password,
                    name: $scope.user.name
                }
            }).success(function successCallback(data) {
                $log.log(data);
                if (data) {
                    alert("注册成功！");
                    window.location = 'index.html';
                }
                else {
                    $scope.user.checkAccount = true;
                }
            }).error(function error(data) {
                $log.log(data);
                window.location = 'views/error.html';
            });
        };
    });


indexApp.controller("stuInfoCtrl", function ($stateParams, $scope, stuValue, $http, $q) {
    $scope.user = {};
    var username = $stateParams.username;
    console.log("+++++++" + username);
    var editStuInfo = function (username) {
        var user;
        var promise = stuValue.queryStuInfo($http, $q, username);
        promise.then(function success(result) {
            user = result.data;
            $scope.user = user;
        });
    };
    editStuInfo(username);
});

indexApp.controller("info", function ($http, $q, $location, $scope, stuService, stuValue) {
    $scope.user = {};
    var path = $location.path();
    var name = stuService.dealPath(path);
    var show = function (name) {
        var user;
        var promise = stuValue.queryStuInfo($http, $q, name);
        promise.then(function (result) {
            user = result.data;
            console.log(user);
            $scope.user = user;
            $scope.user.gender = stuService.checkGender(user.gender);
        });
    };
    show(name);
});

indexApp.controller("edit", function ($http, $q, $location, stuService, stuValue, $scope, $state) {
    $scope.user = {};
    var path = $location.path();
    var name = stuService.dealPath(path);
    var show = function (name) {
        var user;
        var promise = stuValue.queryStuInfo($http, $q, name);
        promise.then(function (result) {
            user = result.data;
            $scope.user = user;
            $scope.user.gender = stuService.checkGender(user.gender);
        })
    };
    show(name);
    $scope.edit = function () {
        console.log($scope.user);
        var promise = stuValue.editStuInfo($http, $q, $scope.user);
        promise.then(function (result) {
            if (result.data) {
                $state.go('main.info');
            }
        })
    }
});

indexApp.controller("clubInfo", function ($http, $q, $scope, $state,$location, stuValue,stuService) {
    var find = function () {
        var clubs = {};
        var promise = stuValue.findClubInfo($http, $q);
        promise.then(function (result) {
            clubs = result.data;
            console.log(clubs);
            $scope.clubs = clubs;
        })
    };
    find();
    $scope.add = function (club) {
        console.log(club.id);
        console.log(club.presentNum);
        var username =stuService.dealPath($location.path());
            $http({
                method: 'post',
                url: 'addClub',
                data: {
                    clubId: club.id,
                    username:username,
                    presentNum:club.presentNum
                }
            }).then(function (result) {
                if (result) {
                    $state.go("main",{username:username});
                }
            })
    }
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