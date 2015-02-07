'use strict';

angular.module('mastercard')
    .controller('SetupSummaryCtrl', ['$scope', '$state', function ($scope, $state) {

        $scope.proceed = function () {
            $state.go('app.meal-selection');
        }

    }]);