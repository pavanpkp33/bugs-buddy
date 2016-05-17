/**
 * Created by Pkp on 5/15/2016.
 */

angular.module('issueTracker')
    .controller('searchIncident',['$scope', '$window', 'httpService',  function($scope, $window, httpService) {

                $scope.searchbyId = function(incidentId){
                    $("#loader").show();
                    var url = "/api/incident/incident-detail";
                    $scope.incidentData = {};
                    httpService.callRestApi({incidentID : incidentId}, url, "POST")
                        .then(function(response){
                            if(response.data.incidentID != undefined) {
                                $("#loader").hide();
                                $scope.incidentData = response.data;
                                $scope.incidentResult = true;
                            }else{
                                $("#loader").hide();
                                $("#danger-alert").show();
                            }
                        } ,
                        function(reason){
                            $("#loader").hide();
                            alert("Internal Server Error");

                        });
                }


        //$scope.searchByDate = function(dateObj){
        //    $("#loader").show();
        //    var url = "/api/search/search-range";
        //    $scope.data = {};
        //    httpService.callRestApi(dateObj, url, "POST")
        //        .then(function(response){
        //
        //            if(response.data.length > 0) {
        //                $("#loader").hide();
        //                $scope.$scope.data  = response.data;
        //                $scope.dateRangeResult = true;
        //            }else{
        //                $("#loader").hide();
        //                $("#danger-alert").show();
        //            }
        //        } ,
        //        function(reason){
        //            $("#loader").hide();
        //            alert("Internal Server Error");
        //
        //        });
        //}

        //$scope.searchByAppln = function(app){
        //    if(app != undefined) {
        //        $("#loader").show();
        //        var url = "/api/search/search-application";
        //        $scope.data = {};
        //        httpService.callRestApi({application: app.application}, url, "POST")
        //            .then(function (response) {
        //                console.log(response.data);
        //                if (response.data.length > 0) {
        //                    $("#loader").hide();
        //                    $scope.$scope.data  = response.data;
        //                    $scope.searchApplnResult = true;
        //                } else {
        //                    $("#loader").hide();
        //                    $("#danger-alert").show();
        //                }
        //            },
        //            function (reason) {
        //                $("#loader").hide();
        //                alert("Internal Server Error");
        //
        //            });
        //    }else{
        //        alert("Please select an application.");
        //    }
        //}


        }]);
