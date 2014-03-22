/**
 * Created by Bjorn on 22/03/14.
 */
(function(){

    'use strict';

    // Add to global controllers
    var controllers = angular.module('afg.rokjesweer.Controllers');

    // Set up as CtrlCampusPicker
    controllers.controller('afg.rokjesweer.Controllers.WeatherCtrl',
        ['$scope', '$rootScope', '$http', 'localStorageService', '$timeout', '$location',
            function($scope, $rootScope, $http, localStorageService, $timeout, $location)
            {
                $scope.weather = null;
                $scope.location = 'Ghent';

                // functie
                $scope.getWeather = function(){
                    $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.location+',be')
                        .success(function(returned_data){
                            if (returned_data !== ""){
                                console.log(returned_data);
                            }else{
                                console.log = "I have no idea.";
                            }
                        });
                }

                if($scope.weather == null){
                    $scope.getWeather();
                }

            }])
})()
