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

                if ($rootScope.gender !== null && $rootScope.location !== null){
                    /** Send a request when gender and location are set */
                    $http(
                        // Send a http request
                        {
                            method: 'POST',
                            // We're sending a post request
                            url: '',
                            data: {

                            }
                        })
                        .
                        success(function(data, status, headers, config) {
                            // If it worked out:
                            console.log(data);              // Log all the data
                            processSearchJSONData(data);    // Process the JSON data
                        })
                        .
                        error(function(data, status, headers, config) {
                            alert("We could not contact the file");
                        });
                }

                function processSearchJSONData(data){

                }

            }])
})()