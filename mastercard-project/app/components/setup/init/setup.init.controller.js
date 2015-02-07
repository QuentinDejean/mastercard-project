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

        $scope.number = 3;

        $scope.getNumber = function (num) {
            return new Array(num);
        };

        $scope.proceed = function () {
            $state.go('app.setup-complete');
        };

        $scope.isFormValid = function (isValid) {
            $scope.isValid = isValid;
        };

    }]);