'use strict';

angular.module('mastercard')
.controller('MealSummaryCtrl', ['$state', '$scope', function ($state, $scope) {

        $scope.proceed = function () {
            $state.go('app.meal-scan');
        };

        $scope.mealSummary = [{
            title: 'Breakfast',
            color: 'balanced',
            ingredients: ['Eggs and Bacon', 'Toast', 'Pancakes']
        },{
            title: 'Lunch',
            color: 'calm',
            ingredients: ['Salad', 'Sandwich', 'Burger']
        },{
            title: 'Dinner',
            color: 'energized',
            ingredients: ['Pizza', 'Paella', 'Dumplings']
        }];

        $scope.removeIngdt = function (summary, index) {
            summary.ingredients.splice(index, 1);
        };

}]);