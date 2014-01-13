/*global MyApp, Backbone*/

MyApp.Collections = MyApp.Collections || {};

(function () {
    'use strict';

    MyApp.Collections.SearchHistoryCollection = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('bouzuya_SPA_searchHistory')

    });

})();
