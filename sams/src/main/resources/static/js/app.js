/**
 * Created by tppppp on 2017/3/16.
 */
'use strict';
var indexApp = angular.module("indexApp",['ngRoute']);
var registerApp = angular.module("registerApp",[]);
indexApp.config(['$routeProvider',function ($routeProvider,$locationProvider) {
    $routeProvider.when('/login',{
        templateUrl: 'views/login.html'
    }).when('/register',{
        templateUrl: 'views/register.html',
        controller: 'test'
    }).otherwise({redirectTo:'/login'});
}]);
