import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    print(){
      var categories = this.get('city').get('categories');    }
  }
});
