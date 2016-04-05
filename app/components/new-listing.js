import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    submitListing() {
      var params = {
        poster: this.get('poster'),
        name: this.get('name'),
        img: this.get('img') ?this.get('img'): "https://www.fillmurray.com/g/200/300",
        address: this.get('address'),
        text: this.get('text'),
        contact: this.get('contact'),
        category: this.get('category'),
        city: this.get('city')
      };
      this.sendAction('sendListing', params);
      this.set('isSelected', false);
    },

    showForm() {
      this.set('isSelected', true);
    }

  }
});
