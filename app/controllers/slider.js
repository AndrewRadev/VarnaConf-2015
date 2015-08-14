import Ember from 'ember';

export default Ember.Controller.extend({
  numberOfItems: 5,

  numbers: function() {
    return _.range(0, this.get('numberOfItems'));
  }.property('numberOfItems'),

  numberOfItemsMax: function() {
    console.log(this.get('numberOfItems'));
    return (this.get('numberOfItems') === '10');
  }.property('numberOfItems'),
});
