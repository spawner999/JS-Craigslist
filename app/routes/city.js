import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    this.store.findRecord('city', params.city_id);
  }
});
