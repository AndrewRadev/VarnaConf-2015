import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postComment: function() {
      var self = this;
      Ember.$.post('http://localhost:4567/comments', this.get('model'), function() {
        self.set('model', {});
        self.set('commentMessage', "You've posted a comment!");
      });
    },

    removeMessage: function() {
      this.set('commentMessage', null);
    },
  }
});
