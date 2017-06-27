   
            var app = angular.module("clockApp",[]);
            app.controller("TimeCtrl",TimeCtrl);
            
            function TimeCtrl($scope){
                var currentDate = new Date();
                $scope.timeString = currentDate.toTimeString();
                $scope.updateTime = function updateTime(){
                    var currentDate = new Date();
                    $scope.timeString = currentDate.toTimeString();
                }                
            }

            