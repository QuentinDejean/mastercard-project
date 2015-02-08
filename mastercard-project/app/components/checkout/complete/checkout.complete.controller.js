'use strict';

angular.module('mastercard')
.controller('CheckoutCompleteCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.proceed = function () {
        $state.go('app.main-page');
    }

}]);