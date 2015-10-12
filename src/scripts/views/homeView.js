import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Listings from '../models';

var ListingsView = Backbone.View.extend({
  tagName: 'li',
  listingTpl: _.template('#listings-template'),
  render: function () {
    $('.content').html(this.template(this.model.attributes))
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  }
});

var listingsView = new ListingsView();
