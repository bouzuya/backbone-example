/*global MyApp, Backbone, JST*/

MyApp.Views = MyApp.Views || {};

(function () {
    'use strict';

    MyApp.Views.SearchBarView = Backbone.View.extend({

        template: JST['app/scripts/templates/search_bar.ejs'],

        events: {
          'click #btn_search': 'search'
        },

        initialize: function() {
          this.$el.html(this.template());
        },

        search: function (e) {

          var $checked = this.$el.find('input[type=radio]:checked');
          var query = $('#query').val();
          var service = $checked.val();
          var search = {};

          e.preventDefault();

          search.query = query;
          search.service = service;

          MyApp.mediator.trigger('search', search);
          MyApp.mediator.trigger('search:' + service, search);

        }

    });

})();
