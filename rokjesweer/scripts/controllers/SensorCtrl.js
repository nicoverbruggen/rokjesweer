/**
 * Created by Bjorn on 22/03/14.
 */
(function(){

    'use strict';

    // Add to global controllers
    var controllers = angular.module('afg.rokjesweer.Controllers');

    // Set up as CtrlCampusPicker
    controllers.controller('afg.rokjesweer.Controllers.SensorCtrl',
        ['$scope', '$rootScope', '$http', 'localStorageService', '$timeout', '$location',
            function($scope, $rootScope, $http, localStorageService, $timeout, $location)
            {
                $scope.sensor = null;

                // Get data from sensor hacketlon
                $scope.getSensorData = function(){

                    var userId = 'cab2b73044d0663c0144d0680766003f';
                    var userToken = '54dae6797421a3f692f16ba02b6df446';
                    var sensor = '31a1967c-5a49-465c-a59d-7ef08f368b61';

                    $http.get('http://in.sensolus.com:8080/server/rest/connectednodes/'+ sensor +'/data/lastvalues?owner_id='+ userId +'&token=' + userToken)
                        .success(function(returned_data){
                            if (returned_data !== ""){
                                $scope.sensor = returned_data;
                                console.log($scope.sensor);
                                $scope.getTemperature($scope.sensor);
                                $scope.getHumidity($scope.sensor);

                            }else{
                                console.log = "I have no idea.";
                            }
                        });
                }

                // Store data
                if($scope.sensor == null){
                    $scope.getSensorData();
                }

                // Get temperature
                $scope.getTemperature = function(){
                    var temperature = JSON.parse($scope.sensor['ir_temperature']['content']);
                    $scope.temperature = temperature['ambient_temperature'];
                }

                // Get temperature
                $scope.getHumidity = function(){
                    var temperature = JSON.parse($scope.sensor['humidity']['content']);
                    $scope.humidity = temperature['value'];
                }





            }])
})()
