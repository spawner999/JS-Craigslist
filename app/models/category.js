import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cities: DS.hasMany('city', {async: true}),
  listings: DS.hasMany('listing', {async: true})
});
