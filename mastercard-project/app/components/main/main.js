'use strict';

angular.module('mastercard')
    .config([ 'Mapping', '$stateProvider', function (Mapping, $stateProvider) {

        Mapping.page.main = '/main/main';

        $stateProvider.state('app.main-page', {
            url: Mapping.page.main,
            views: {
                'menuContent': {
                    templateUrl: 'components/main/main.html'
                }
            }
        });

    }]);