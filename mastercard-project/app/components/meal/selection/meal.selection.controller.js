'use strict';

angular.module('mastercard')
    .controller('MealSelectionCtrl', ['$state', '$scope', function ($state, $scope) {

        $scope.mealSelection = [
            {
                number: 2,
                value: 'Breakfast'
            },
            {
                number: 2,
                value: 'Lunch'
            },
            {
                number: 3,
                value: 'Dinner'
            }
        ];


        $scope.decreaseSelection = function (selection) {
            selection.number = selection.number - 1 >= 0 ? selection.number - 1 : 0;
        };

        $scope.increaseSelection = function (selection) {
            selection.number = selection.number + 1;
        };

        $scope.proceed = function () {
            $state.go('app.meal-summary');
        };
    }]);