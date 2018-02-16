angular.module("itsItinerary").controller("itineraryController", function ($scope, $http) {
    //Define Functions
    $scope.itineraries = []


    $scope.init = function () {
        $scope.itineraries = [
            {
                CurrentPassengers: 1,
                DropOffLocation: "Sheffield Train Station",
                ID: 101,
                PassengerName: "Jane",
                PickupLocation: "Penistone",
                VehicleId: 901
            },
        ];
    };

    $scope.add = function () {
        var itineraryDetails = {
            id: $scope.itineraries.length,
            itiName: $scope.itineraryName,
            destination: $scope.itineraryDestination,
            purpose: $scope.itineraryPurpose,
            startDate: new Date($scope.itineraryStartDate),
            endDate: new Date($scope.itineraryEndDate)
        };
        $scope.itineraries.push($scope.itineraryDetails);
        $scope.isEditing = false;
    };


    $scope.beginEditing = function () {
        $scope.isEditing = true;
    };

    $scope.cancelAddition = function () {
        $scope.isEditing = false;
        $scope.itineraryName = "";
    };

    $scope.remove = function (emma) {
        var itineraryToRemove = $scope.itineraries.indexOf(emma);
        $scope.itineraries.splice(itineraryToRemove, 1);
    }

    //Function Invocation
    $scope.init();
});