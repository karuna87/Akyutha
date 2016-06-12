
var app = angular.module('myapp',['ui.grid']);
    app.controller('MyCtrl', function ($scope, $http) {
        $http.get("/Home/getGridData")
        .then(function (response) {
            debugger;
            $scope.myData = [{ empid: response.data[0].empid, empname: response.data[0].empname, empage: response.data[0].empage }]
            debugger;
            $scope.gridOptions = { data: 'myData' };
        }, function () {
            debugger;
            alert("No Data found");
        });
    });
