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
      newCity.save().then();
      this.transitionTo('admin-panel');
    },
    saveCategory(params){
      var newCategory = this.store.createRecord('category', params);
      var cities = this.store.findAll('city');
      newCategory.save().then(function(){
        cities.map(function(city){
        city.get('categories').addObject(newCategory);
        newCategory.get('cities').addObject(city);
        newCategory.save();
        return city.save();
      });
    });
  }
  }
});
