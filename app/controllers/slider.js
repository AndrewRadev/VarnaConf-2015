import Ember from 'ember';

export default Ember.Controller.extend({
  numberOfItems: 5,

  numbers: function() {
    return _.range(0, this.get('numberOfItems'));
  }.property('numberOfItems'),

  isMaxNumberOfItems: function() {
    return (this.get('numberOfItems') === '10');
  }.property('numberOfItems'),

  isMinNumberOfItems: function() {
    return (this.get('numberOfItems') === '0');
  }.property('numberOfItems'),
});
