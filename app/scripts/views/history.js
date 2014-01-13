/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.HistoryView = Backbone.View.extend({

        template: JST['app/scripts/templates/history.ejs'],

        events: {
          'click .btn_delete': 'removeHistory'
        },

        initialize: function() {

          _.bindAll(this);

          this.searches = this.options.searches;

          this.searches.fetch();
          this.render();

          MyApp.mediator.on('search', this.addHistory);

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

        render: function() {

          var tmpl = this.template({ history: this.searches.toJSON() });
          this.$el.html(tmpl);

        },

        _getHistory: function() {

          var $target = $(e.target).closest('.history');

          var history = {};
          history.id = $target.attr('data-id');
          history.service = $target.find('.service').text().replace(/^\(|\)$/g, '');
          history.query = $target.find('.query').text();

          return history;

        }

    });

})();
