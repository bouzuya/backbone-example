/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.SearchBarView = Backbone.View.extend({

        template: JST['app/scripts/templates/search_bar.ejs'],

        initialize: function() {
          this.$el.html(this.template());
        }

    });

})();
