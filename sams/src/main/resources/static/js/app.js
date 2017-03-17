/**
 * Created by tppppp on 2017/3/16.
 */
'use strict';
var indexApp = angular.module("indexApp",['ngRoute']);
indexApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/login',{
        templateUrl: 'views/login.html'
    }).when('/register',{
        templateUrl: 'views/register.html',
        controller: 'registerCtrl'
    }).when('/forget',{
        templateUrl: 'view/forget.html'
    }).otherwise({redirectTo:'/login'});
}]);
