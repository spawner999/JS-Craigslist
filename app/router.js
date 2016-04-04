import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin-panel');
  this.route('city', {path: '/city/:city_id'});
  this.route('listing');
});

export default Router;
