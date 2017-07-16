/**
 * Created by tppppp on 2017/3/16.
 */
'use strict';
var indexApp = angular.module("indexApp", ['ui.router']);
indexApp.config(function ($stateProvider,$urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state('login', {
        url:'/login',
        templateUrl: 'views/login.html'
    }).state('register', {
        url:'/register',
        templateUrl: 'views/register.html',
        controller: 'register'
    // }).when('/forget', {
    //     templateUrl: 'view/forget.html'
    }).state('main',{
        url:'/main/:username',
        templateUrl: 'views/main.html',
        controller:'stuInfoCtrl',
        params:{username:{}}
    }).state('main.show',{
        url:'/show',
        templateUrl:'views/Test.html'
    }).state('main.info',{
        url:'/info',
        templateUrl:'views/info.html'
    }).state('main.edit',{
        url:'/edit',
        templateUrl:'views/edit.html'
    }).state('main.test',{
        url:'/test',
        templateUrl:'views/tdd.html'
    }).state('main.clubInfo',{
        url:'/clubInfo',
        templateUrl:'views/clubInfo.html'
    });
    $locationProvider.html5Mode({
        enabled:true,
        requireBase:true
    });
});

