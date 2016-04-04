import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findCity(){
      var query = this.get('city');
      var selectedCity = this.get('cities').filter(function(city){
        return city.get('name') === query;
      });
      this.sendAction('goToCity', selectedCity[0].id)
    }
  }
});
