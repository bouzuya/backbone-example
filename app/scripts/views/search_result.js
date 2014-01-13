/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.SearchResultView = Backbone.View.extend({

        initialize: function() {

          this.collections = this.options.collections;
          this.template = this.options.template;
          this.service = this.options.service;

          MyApp.mediator.on('search:' + this.service, this.search, this);
          MyApp.mediator.on('historySearch:' + this.service, this.search, this);

          this.listenTo(this.collections, 'add', this.render);
          this.listenTo(this.collections, 'remove', this.render);

        },

        search: function(search) {
          this.collections.search(search);
        },

        render: function() {

          console.log(this.collections.toJSON());
          var tmpl = this.template({ models: this.collections.toJSON() });
          this.$el.html(tmpl);

        }


    });

})();
