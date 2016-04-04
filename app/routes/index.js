import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('city');
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
