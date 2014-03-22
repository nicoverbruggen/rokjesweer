(function(){

    'use strict';

    // Add to global controllers
    var controllers = angular.module('afg.rokjesweer.Controllers');

    // Set up as CtrlCampusPicker
    controllers.controller('afg.rokjesweer.Controllers.CtrlHome',
        ['$scope', '$rootScope', '$http', 'localStorageService', '$timeout', '$location',
            function($scope, $rootScope, $http, localStorageService, $timeout, $location)
            {

                if (localStorageService.get('gender') == null){
                    $location.path("/step1");
                }else{
                    $rootScope.gender = localStorageService.get('gender');
                    $scope.gender = $rootScope.gender;
                }

                $scope.getMyLocation = function(){
                    $location.path("/step2");
                }

                $scope.switchGender = function(){
                    $location.path("/step1");
                }

            }])
})()