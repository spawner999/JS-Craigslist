import DS from 'ember-data';

export default DS.Model.extend({
  poster: DS.attr(),
  name: DS.attr(),
  img: DS.attr(),
  address: DS.attr(),
  city: DS.belongsTo('city', {async: true}),
  category: DS.belongsTo('category', {async: true}),
  text: DS.attr(),
  contact: DS.attr()
});
