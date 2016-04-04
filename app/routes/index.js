import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      categories: this.store.findAll('category')

    });
  },
  actions: {
    goToCity(id){
      if(id) {
        this.transitionTo('city', id);
      } else {
        alert("city not found, try another search");
      }
    }
}
});
