import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postComment: function() {
      var self = this;
      // just pretend we save this somewhere...
      setTimeout(function() {
        self.set('model', {});
        self.set('commentMessage', "You've posted a comment!");
      }, 500);
    },

    removeMessage: function() {
      this.set('commentMessage', null);
    },
  }
});
