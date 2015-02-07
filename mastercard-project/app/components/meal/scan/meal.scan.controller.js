'use strict';

angular.module('mastercard')
.controller('MealScanCtrl', ['$state', '$scope', '$cordovaBarcodeScanner', '$ionicPlatform', '$cordovaCamera',
        function ($state, $scope, $cordovaBarcodeScanner, $ionicPlatform, $cordovaCamera) {

        $scope.proceed = function () {
            $state.go('app.checkout-summary');
        };

        $scope.mealScan = [{
            title: 'Aisle 1',
            products: [{
                color: 'stable',
                price: '$2.80',
                description: '12 dozen eggs',
                icon: 'close-round'
            },{
                color: 'balanced',
                price: '$1.95',
                description: 'Thickened cream',
                icon: 'checkmark-round'
            },{
                color: 'balanced',
                price: '$1.50',
                description: '1 litre milk',
                icon: 'checkmark-round'
            }]
        },{
            title: 'Aisle 2',
            products: [{
                color: 'stable',
                price: '$2.10',
                description: 'Canned corn kernals',
                icon: 'camera'
            },{
                color: 'stable',
                price: '$3.80',
                description: 'Coconut milk',
                icon: 'camera'
            },{
                color: 'energized',
                price: '$1.50',
                description: '1 litre milk',
                icon: 'loop'
            }]
        }];



}]);