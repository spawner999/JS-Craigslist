import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    submitListing() {
      var params = {
        poster: this.get('poster')?this.get('poster'): 'poster' + Math.floor(Math.random() * 10),
        name: this.get('name')? this.get('name'): 'title' + Math.floor(Math.random() * 10),
        img: this.get('img') ?this.get('img'): "https://www.fillmurray.com/g/200/300",
        address: this.get('address')? this.get('address'): 'address' + Math.floor(Math.random() * 10),
        text: this.get('text')? this.get('text'): 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        contact: this.get('contact')? this.get('contact'): 'contact' + Math.floor(Math.random() * 10),
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
