/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/app.ejs'],

        initialize: function() {

          MyApp.mediator = {};
          _.extend(MyApp.mediator, Backbone.Events);

          this.$el.html(this.template());

          this.history = new MyApp.Views.HistoryView({
              el: this.$el.find('#history_list'),
              searches: new MyApp.Collections.SearchHistoryCollection()
          });

          this.searchBar = new MyApp.Views.SearchBarView({
              el: this.$el.find('#header')
          });

          this.tabs = new MyApp.Views.TabsView({
              el: this.$el.find('#search_results')
          });

          this.footer = new MyApp.Views.FooterView({
              el: this.$el.find('#footer')
          });

        }

    });

})();
