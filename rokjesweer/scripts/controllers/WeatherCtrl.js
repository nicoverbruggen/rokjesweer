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

                $scope.weather = "";
                $scope.location = 'Ghent';
                $scope.weatherstates = [];

                // functie
                $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.location+',be')
                    .success(function(returned_data){
                        if (returned_data !== null){
                            $scope.weather =  returned_data;
                            $scope.setWeatherStates();
                            console.log($scope.weatherstates);
                        }else{
                            console.log = "I have no idea.";
                            return null;

                        }
                    });


                $scope.setWeatherStates = function(){
                    //weather condition
                    if($scope.weather["weather"][0]["id"] >= 200 && $scope.weather["weather"][0]["id"] <= 232){
                        $scope.weatherstates["condition"] = "thunderstorm";
                    }
                    else if($scope.weather["weather"][0]["id"] >= 300 && $scope.weather["weather"][0]["id"] <= 321){
                        $scope.weatherstates["condition"] = "drizzle";
                    }
                    else if($scope.weather["weather"][0]["id"] >= 500 && $scope.weather["weather"][0]["id"] <= 531){
                        $scope.weatherstates["condition"] = "rain";
                    }
                    else if($scope.weather["weather"][0]["id"] >= 600 && $scope.weather["weather"][0]["id"] <= 622){
                        $scope.weatherstates["condition"] = "snow";
                    }
                    else if($scope.weather["weather"][0]["id"] ==701){
                        $scope.weatherstates["condition"] = "mist";
                    }

                    //wind
                    $scope.weatherstates["wind"] = [];
                    $scope.weatherstates["wind"]["speed"] = $scope.weather["wind"]["speed"];
                    $scope.weatherstates["wind"]["deg"] = $scope.weather["wind"]["deg"];
                    $scope.weatherstates["day"] = [];
                    $scope.weatherstates["day"]["sunrise"] =  $scope.weather["sys"]["sunrise"];
                    $scope.weatherstates["day"]["sunset"] =  $scope.weather["sys"]["sunset"];
                };


            }])
})()
