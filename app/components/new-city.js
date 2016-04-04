import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.set('isSelected', true);
    },
    submitCity(){
      var params = {
        name: this.get('name')? this.get('name'): 'city' + Math.floor(Math.random() * 10),
        state: this.get('state')? this.get('state'): 'state' + Math.floor(Math.random() * 10)
      };
      this.set('isSelected', false);
      this.set('city', '');
      this.set('state', '');
      this.sendAction('sendCity', params);
    }
  }
});
