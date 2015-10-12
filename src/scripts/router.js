import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import {
  Listings
}
from './models';

import ListingsView from './views/homeview';

class Router extends Backbone.Router {

  initialize() {
    this.listings = new Listings();
  }

  get routes() {
    return {
      '': 'index'
    };
  }

  index() {
    const listingView = new ListingsView({
      model: this.listings
    });

    this.listings.fetch().then(() => {
      $('.content').html(listingView.render());
    });
  }
};

export default Router;
