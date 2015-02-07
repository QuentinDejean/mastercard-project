'use strict';

angular.module('mastercard')
.controller('MealScanCtrl', ['$state', '$scope', '$cordovaBarcodeScanner', '$ionicPlatform', '$cordovaCamera',
        function ($state, $scope, $cordovaBarcodeScanner, $ionicPlatform, $cordovaCamera) {

        $scope.mealScan = [{
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

        console.log($cordovaBarcodeScanner);

        $ionicPlatform.ready(function() {

            //$cordovaBarcodeScanner
            //    .scan()
            //    .then(function(barcodeData) {
            //        // Success! Barcode data is here
            //    }, function(error) {
            //        // An error occurred
            //    });
            //
            //
            //// NOTE: encoding not functioning yet
            //$cordovaBarcodeScanner
            //    .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
            //    .then(function(success) {
            //        // Success!
            //    }, function(error) {
            //        // An error occurred
            //    });

            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // error
            });
        });


}]);