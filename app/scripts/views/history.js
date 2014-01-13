/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.HistoryView = Backbone.View.extend({

        template: JST['app/scripts/templates/history.ejs'],

        initialize: function() {
          this.$el.html(this.template());
        }

    });

})();
