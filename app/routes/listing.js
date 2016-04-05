import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return Ember.RSVP.hash({
        listings: this.store.findAll('listing'),
        cities: this.store.findRecord('city', params.city_id)
    });
  }
});
