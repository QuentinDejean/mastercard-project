'use strict';

angular.module('mastercard')
    .config([ 'Mapping', '$stateProvider', function (Mapping, $stateProvider) {

        Mapping.page.setup = {};
        Mapping.page.setup.init = '/setup';
        Mapping.page.setup.complete = '/setup/complete';

        $stateProvider.state('app.setup-init', {
            url: Mapping.page.setup.init,
            views: {
                'menuContent': {
                    templateUrl: 'components/setup/init/setup.init.html',
                    controller: 'SetupCtrl'
                }
            }
        })
        .state('app.setup-complete', {
            url: Mapping.page.setup.complete,
            views: {
                'menuContent': {
                    templateUrl: 'components/setup/complete/setup.complete.html',
                    controller: 'SetupSummaryCtrl'
                }
            }
        });

    }]);