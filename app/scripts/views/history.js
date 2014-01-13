/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.HistoryView = Backbone.View.extend({

        template: JST['app/scripts/templates/history.ejs'],

        events: {
          'click .btn_delete': 'removeHistory',
          'click .history_contents': 'searchHistory'
        },

        initialize: function() {

          this.searches = this.options.searches;

          this.searches.fetch();
          this.render();

          MyApp.mediator.on('search', this.addHistory, this);
          MyApp.mediator.on('changeTab', this.searchCurrentHistory, this);

          this.listenTo(this.searches, 'add remove', this.render);

        },

        addHistory: function(search) {

          search.id = +new Date();
          this.searches.create(search);

        },

        removeHistory: function(e) {

          var id = this._getHistory(e).id;
          var search = this.searches.get(id);
          search.destroy();

        },

        searchHistory: function(e) {

          var history = this._getHistory(e);
          MyApp.mediator.trigger('historySearch', history);
          MyApp.mediator.trigger('historySearch:' + history.service, history);

        },

        render: function() {

          var tmpl = this.template({ history: this.searches.toJSON() });
          this.$el.html(tmpl);

        },

        _getHistory: function(e) {

          var $target = $(e.target).closest('.history');

          var history = {};
          history.id = $target.attr('data-id');
          history.service = $target.find('.service').text().replace(/^\(|\)$/g, '');
          history.query = $target.find('.query').text();

          return history;

        },

        searchCurrentHistory: function(service) {

          var histories = this.searches.where({
              service: service
          });

          var history;

          if (histories.length > 0) {

            history = histories[0].attributes;
            MyApp.mediator.trigger('historySearch', history);
            MyApp.mediator.trigger('historySearch:' + history.service, history);

          }


        }


    });

})();
