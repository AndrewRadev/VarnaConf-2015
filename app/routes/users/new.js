import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },

  afterModel: function() {
    return this.transitionTo('users.new.login-info');
  }
});
