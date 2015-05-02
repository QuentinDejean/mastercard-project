'use strict';

angular.module('mastercard')
    .controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {

        $scope.proceed = function () {
            $state.go('app.setup-init');
        }


    }]);