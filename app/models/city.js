import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  state: DS.attr(),
  categories: DS.hasMany('category', {async: true})
});
