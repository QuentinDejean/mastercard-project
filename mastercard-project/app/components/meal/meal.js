'use strict';

angular.module('mastercard')
    .config(['$stateProvider', 'Mapping', function ($stateProvider, Mapping) {

        Mapping.page.meal = {};
        Mapping.page.meal.selection = '/meal/selection';
        Mapping.page.meal.summary = '/meal/summary';
        Mapping.page.meal.scan = '/meal/scan';

        $stateProvider.state('app.meal-selection', {
            url: Mapping.page.meal.selection,
            views: {
                'menuContent': {
                    templateUrl: 'components/meal/selection/meal.selection.html',
                    controller: 'MealSelectionCtrl'
                }
            }
        })
        .state('app.meal-summary', {
            url: Mapping.page.meal.summary,
            views: {
                'menuContent': {
                    templateUrl: 'components/meal/summary/meal.summary.html',
                    controller: 'MealSummaryCtrl'
                }
            }
        })
        .state('app.meal-scan', {
            url: Mapping.page.meal.scan,
            views: {
                'menuContent': {
                    templateUrl: 'components/meal/scan/meal.scan.html',
                    controller: 'MealScanCtrl'
                }
            }
        });
    }]);