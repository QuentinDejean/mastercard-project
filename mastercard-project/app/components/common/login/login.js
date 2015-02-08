'use strict';

angular.module('mastercard')
    .config([ 'Mapping', '$stateProvider', function (Mapping, $stateProvider) {

        $stateProvider
        .state('login', {
            url: Mapping.page.login,
            views: {
                'menuContent': {
                    templateUrl: 'components/common/login/login.html',
                    controller: 'LoginCtrl'
                }
            }
        });


    }]);
