import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: Ember.computed('sortedlist', 'category', function() {
    var city = this.get('city');
    var category  = this.get('category');
    return this.get('sortedlist').filter(function(listing) {
      return listing.get('city').get('name') === city.get('name') && listing.get('category').get('name') === category.get('name');
    });
  }),
  sortedlist: Ember.computed.sort('listings','sorting'),
  sorting: ['date:desc'],
});
