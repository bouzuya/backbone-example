/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.TabsView = Backbone.View.extend({

        template: JST['app/scripts/templates/tabs.ejs'],

        events: {
          'click #tab>li': 'changeTab'
        },

        initialize: function() {

          this.$el.html(this.template());

          this.twitters = new MyApp.Views.SearchResultView({
              el: this.$el.find('#twitter_list'),
              template: JST['app/scripts/templates/search_result_twitter.ejs'],
              collections: new MyApp.Collections.TwitterCollection(),
              service: 'twitter'
          });

          this.hotpeppers = new MyApp.Views.SearchResultView({
              el: this.$el.find('#hotpepper_list'),
              template: JST['app/scripts/templates/search_result_hotpepper.ejs'],
              collections: new MyApp.Collections.HotpepperCollection(),
              service: 'hotpepper'
          });

          MyApp.mediator.on('search', this.selectTab);
          MyApp.mediator.on('historySearch', this.selectTab);

        },

        selectTab: function(search) {
          $('a[href^=#' + search.service + ']').tab('show');
        },

        changeTab: function(e) {

          var service = this._getService(e.currentTarget);
          MyApp.mediator.trigger('changeTab', service);

        },

        _getService: function(tab) {
          return $(tab).data('service');
        }



    });

})();
