(function () {

    'use strict';

    // Add to global controllers
    var controllers = angular.module('afg.rokjesweer.Controllers');

    // Set up as CtrlCampusPicker
    controllers.controller('afg.rokjesweer.Controllers.CtrlHome',
        ['$scope', '$rootScope', '$http', 'localStorageService', '$timeout', '$location',
            function ($scope, $rootScope, $http, localStorageService, $timeout, $location) {

                if (localStorageService.get('gender') == null) {
                    $location.path("/step1");
                } else {
                    $rootScope.gender = localStorageService.get('gender');
                    $scope.gender = $rootScope.gender;
                }

                $scope.getMyLocation = function () {
                    $location.path("/step2");
                }

                $scope.switchGender = function () {
                    $location.path("/step1");
                }

                if ($rootScope.gender !== null && $rootScope.location !== null) {
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
                        success(function (data, status, headers, config) {
                            // If it worked out:
                            console.log(data);              // Log all the data
                            processSearchJSONData(data);    // Process the JSON data
                        })
                        .
                        error(function (data, status, headers, config) {
                            alert("We could not contact the file");
                        });
                }

                function processSearchJSONData(data) {

                }


                // WEATHER
                $scope.weather = "";
                $scope.location = 'Ghent';
                $scope.weatherstates = [];

                // functie
                $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.location + ',be')
                    .success(function (returned_data) {
                        if (returned_data !== null) {
                            $scope.weather = returned_data;
                            $scope.setWeatherStates();
                        } else {
                            console.log = "I have no idea.";
                            return null;

                        }
                    });


                $scope.setWeatherStates = function () {
                    //weather condition
                    if ($scope.weather["weather"][0]["id"] >= 200 && $scope.weather["weather"][0]["id"] <= 232) {
                        $scope.weatherstates["condition"] = "thunderstorm";
                    }
                    else if ($scope.weather["weather"][0]["id"] >= 300 && $scope.weather["weather"][0]["id"] <= 321) {
                        $scope.weatherstates["condition"] = "drizzle";
                    }
                    else if ($scope.weather["weather"][0]["id"] >= 500 && $scope.weather["weather"][0]["id"] <= 531) {
                        $scope.weatherstates["condition"] = "rain";
                    }
                    else if ($scope.weather["weather"][0]["id"] >= 600 && $scope.weather["weather"][0]["id"] <= 622) {
                        $scope.weatherstates["condition"] = "snow";
                    }
                    else if ($scope.weather["weather"][0]["id"] == 701) {
                        $scope.weatherstates["condition"] = "mist";
                    }
                    else if ($scope.weather["weather"][0]["id"] == 800) {
                        $scope.weatherstates["condition"] = "sky is clear";
                    }
                    else if ($scope.weather["weather"][0]["id"] == 801) {
                        $scope.weatherstates["condition"] = "few clouds";
                    }
                    else if ($scope.weather["weather"][0]["id"] == 802) {
                        $scope.weatherstates["condition"] = "scattered clouds";
                    }
                    else if ($scope.weather["weather"][0]["id"] == 803) {
                        $scope.weatherstates["condition"] = "broken clouds";
                    }
                    else if ($scope.weather["weather"][0]["id"] == 804) {
                        $scope.weatherstates["condition"] = "overcast clouds";
                    }

                    //wind
                    $scope.weatherstates["wind"] = [];
                    $scope.weatherstates["wind"]["speed"] = $scope.weather["wind"]["speed"];
                    $scope.weatherstates["wind"]["deg"] = $scope.weather["wind"]["deg"];
                    $scope.weatherstates["day"] = [];
                    $scope.weatherstates["day"]["sunrise"] = moment.utc($scope.weather["sys"]["sunrise"], 'X').format('H:mm:ss')
                    $scope.weatherstates["day"]["sunset"] = moment.utc($scope.weather["sys"]["sunset"], 'X').format('H:mm:ss')
                };


            }])
})()