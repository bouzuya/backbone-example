/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.SearchResultView = Backbone.View.extend({

        initialize: function() {
          this.$el.html(this.options.template());
        }

    });

})();
