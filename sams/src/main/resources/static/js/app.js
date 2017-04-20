/**
 * Created by tppppp on 2017/3/16.
 */
'use strict';
var indexApp = angular.module("indexApp",['ngRoute']);
indexApp.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider.when('/login',{
        templateUrl: 'views/login.html'
    }).when('/register',{
        templateUrl: 'views/register.html',
        controller: 'register'
    }).when('/forget',{
        templateUrl: 'view/forget.html'
    }).when('/main',{
        templateUrl:'views/main.html'
    }).otherwise({redirectTo:'/login'});
    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
    });
}]);