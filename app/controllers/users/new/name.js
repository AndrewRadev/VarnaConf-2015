import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    prevStep: function() {
      this.transitionTo('users.new.login-info');
    },

    nextStep: function() {
      this.transitionTo('users.new.details');
    },

    createUser: function() {
      this.get('model').save();
      this.transitionTo('users.index');
    },
  },
});
