/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.FooterView = Backbone.View.extend({

        template: JST['app/scripts/templates/footer.ejs'],

        initialize: function() {
          this.$el.html(this.template());
        }

    });

})();
