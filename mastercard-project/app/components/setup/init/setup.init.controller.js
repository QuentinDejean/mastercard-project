'use strict';

angular.module('mastercard')
    .controller('SetupCtrl', ['$scope', '$state', function ($scope, $state) {

        $scope.data = {};
        $scope.isValid = false;

        $scope.options = [
            {label: 'Vegetarian', value: 1},
            {label: 'Vegan', value: 2},
            {label: 'Gluten Free', value: 3},
            {label: 'None', value: 4}
        ];


        $scope.data.option = $scope.options[3];

        $scope.symbols = [
            {value: '$', isActive: false},
            {value: '$$', isActive: false},
            {value: '$$$', isActive: false}
        ];


        $scope.proceed = function () {
            $state.go('app.setup-complete');
        };



        $scope.setNewBudget = function (symbol) {
            //$scope.symbol.forEach( function (key) {
            //    $scope.symbol[key].isActive = false;
            //});

            //symbol.isActve = true;

        };

        $scope.isFormValid = function (isValid) {
            $scope.isValid = isValid;
        };

    }]);