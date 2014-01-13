/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.TabsView = Backbone.View.extend({

        template: JST['app/scripts/templates/tabs.ejs'],

        initialize: function() {

          this.$el.html(this.template());

          this.twitters = new MyApp.Views.SearchResultView({
              el: this.$el.find('#twitter_list'),
              template: JST['app/scripts/templates/search_result_twitter.ejs']
          });

          this.hotpepper = new MyApp.Views.SearchResultView({
              el: this.$el.find('#hotpepper_list'),
              template: JST['app/scripts/templates/search_result_hotpepper.ejs']
          });

        }

    });

})();
