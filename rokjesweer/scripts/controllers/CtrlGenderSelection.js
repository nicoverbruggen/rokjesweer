(function(){

    'use strict';

    // Add to global controllers
    var controllers = angular.module('afg.rokjesweer.Controllers');

    // Set up as CtrlCampusPicker
    controllers.controller('afg.rokjesweer.Controllers.CtrlGenderSelection',
        ['$scope', '$rootScope', '$http', 'localStorageService', '$timeout', '$location',
            function($scope, $rootScope, $http, localStorageService, $timeout, $location)
            {

                /** In case our person is a male and presses the male button */
                $scope.amMale = function(){

                    $rootScope.gender = "male";
                    localStorageService.add('gender', $rootScope.gender);
                    $location.path("/");

                }

                /** In case our person is a female and presses the female button */
                $scope.amFemale = function(){

                    $rootScope.gender = "female";
                    localStorageService.add('gender', $rootScope.gender);
                    $location.path("/");

                }

            }])
})()