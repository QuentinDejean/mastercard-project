'use strict';

angular.module('mastercard')
    .config(['Mapping', '$stateProvider', function (Mapping, $stateProvider) {

        Mapping.page.checkout = {};
        Mapping.page.checkout.summary = '/checkout';
        Mapping.page.checkout.payment = '/checkout/payment';
        Mapping.page.checkout.complete = '/checkout/complete';


        $stateProvider.state('app.checkout-summary', {
            url: Mapping.page.checkout.summary,
            views: {
                'menuContent': {
                    templateUrl: 'components/checkout/summary/checkout.summary.html',
                    controller: 'CheckoutSummaryCtrl'
                }
            }
        })
        .state('app.checkout-complete', {
            url: Mapping.page.checkout.complete,
            views: {
                'menuContent': {
                    templateUrl: 'components/checkout/complete/checkout.complete.html'
                }
            }
        });

    }]);