(function(){

    'use strict';

    // Add to global controllers
    var controllers = angular.module('afg.rokjesweer.Controllers');

    // Set up as CtrlCampusPicker
    controllers.controller('afg.rokjesweer.Controllers.CtrlLocationPicker',
        ['$scope', '$rootScope', '$http', 'localStorageService', '$timeout', '$location',
            function($scope, $rootScope, $http, localStorageService, $timeout, $location)
            {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(success, error);
                } else {
                    error('not supported');
                }

                function success(position){
                    $scope.lat = position.coords.latitude;
                    $scope.long = position.coords.longitude;
                    alert($scope.lat);
                    alert($scope.long);
                    $rootScope.location = {
                        "latitude": $scope.lat,
                        "longitude": $scope.long
                    }
                    $location.path("/");
                }

                function error(){
                    alert("boom shakalaka error");
                    $rootScope.location = null;
                }

            }])
})()