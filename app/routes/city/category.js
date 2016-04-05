import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      category: this.store.findRecord('category', params.category_id),
      city: this.modelFor('city'),
      listings: this.store.findAll('listing')
    });
  },
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var city = params.city;
      var category = params.category;
      newListing.save().then(function() {
        city.get('listings').addObject(newListing);
        category.get('listings').addObject(newListing);
        city.save();
        return category.save();
      });
    }
  }
});
