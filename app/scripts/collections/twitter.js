/*global MyApp, Backbone*/

MyApp.Collections = MyApp.Collections || {};

(function () {
    'use strict';

    MyApp.Collections.TwitterCollection = Backbone.Collection.extend({

        model: MyApp.Models.TwitterModel,

        search: function(params) {
          // this.fetch
          this.reset();
          var twitter = new MyApp.Models.TwitterModel({
              from_user: 'bouzuya',
              id_str: 'bouzuya',
              text_linked: params.query
          });
          this.add(twitter);
        }

    });

})();
