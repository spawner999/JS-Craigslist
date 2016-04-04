import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      city: this.store.findRecord('city', params.city_id),
      categories: this.store.findAll('category')

    });
    }
});
