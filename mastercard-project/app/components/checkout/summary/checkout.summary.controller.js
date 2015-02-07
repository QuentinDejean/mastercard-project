'use strict';

angular.module('mastercard')
.controller('CheckoutSummaryCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.proceed = function () {
        $state.go('app.checkout-complete');
    }


}]);