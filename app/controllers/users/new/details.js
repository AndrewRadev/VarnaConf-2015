import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    prevStep: function() {
      this.transitionTo('users.new.name');
    },

    createUser: function() {
      this.get('model').save();
      this.transitionTo('users.index');
    },
  },
});
