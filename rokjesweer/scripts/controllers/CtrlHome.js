(function(){

    'use strict';

    // Add to global controllers
    var controllers = angular.module('afg.rokjesweer.Controllers');

    // Set up as CtrlCampusPicker
    controllers.controller('afg.rokjesweer.Controllers.CtrlHome',
        ['$scope', '$rootScope', '$http', 'localStorageService', '$timeout', '$location',
            function($scope, $rootScope, $http, localStorageService, $timeout, $location)
            {

                // lokale scope aanspreken
                $scope.Title = "";

                // rootscope aanspreken
                $rootScope.Title = "";

                // functie
                $scope.doSomething = function(){

                }

            }])
})()