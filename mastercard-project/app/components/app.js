'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('mastercard', ['ionic', 'ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .constant('Mapping', {
        page: {
            home: '/app'
        },
        service: {},
        event: {
            notification: 'notification'
        }
    })

    .constant('ENV', {name:'development',apiEndpoint:'http://dev.yoursite.com:10000/'})

    .config(function ($stateProvider, $urlRouterProvider, Mapping) {
        $stateProvider

            .state('app', {
                url: Mapping.page.home,
                abstract: true,
                templateUrl: 'components/common/menu/menu.html',
                controller: 'MenuCtrl'
            });



        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise(Mapping.page.home);
    });