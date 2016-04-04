import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.set('isSelected', true);
    },
    submitCategory(){
      var params = {
        name: this.get('name')? this.get('name'): 'category' + Math.floor(Math.random() * 10)
      };
      this.set('isSelected', false);
      this.set('name', '');
      this.sendAction('sendCategory', params);
    }
  }
});
