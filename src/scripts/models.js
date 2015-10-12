import Backbone from 'backbone';

export class Listings extends Backbone.Model {
  get url() {
    return `https://openapi.etsy.com/v2/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&callback=?`;
  }
};
