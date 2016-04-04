import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      categories: this.store.findAll('category'),
      listings: this.store.findAll('listing')
    });
  },
  actions: {
    saveCity(params){
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('admin-panel');
    }
  }
});
