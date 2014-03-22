'use strict';

angular.module('LocalStorageModule').value('prefix', 'afg.rokjesweer');
angular.module('afg.rokjesweer.Controllers', []);
angular.module('afg.rokjesweer.Directives', []);
angular.module('afg.rokjesweer.Services', []);

var app = angular
/*************************************************************************
 SET UP MODULES & CONFIGURE THEM
 **************************************************************************/
    .module(
        'afg.rokjesweer',
        [
            'ngRoute',
            'ngAnimate',
            'ui.directives',
            'afg.rokjesweer.Controllers',
            'afg.rokjesweer.Directives',
            'afg.rokjesweer.Services',
            'LocalStorageModule'
        ]
    )
    //
    // Configure the modules in question
    //
    .config(
        ['$routeProvider','$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
            // CROSS DOMAIN CALLS OK
            $httpProvider.defaults.useXDomain = true;
            // DELETE REQUESTED WITH
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            /**************
             ROUTES SETUP
             **************/
            $routeProvider.when(
                '/', {
                    templateUrl:'views/Home.html',
                    controller:'afg.rokjesweer.Controllers.CtrlHome'
                });

        }]
    )
/*************************************************************************
 RUN THE APPLICATION
 **************************************************************************/
    .run(['$rootScope', '$timeout', '$location', 'localStorageService', '$route',
        function($rootScope, $timeout, $location, localStorageService, $route){
            // subtitle
            $rootScope.Subtitle = "Rokjesweer App";
        }
    ]);

