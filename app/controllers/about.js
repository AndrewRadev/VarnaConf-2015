import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postComment: function() {
      var comment = {
        email: this.get('email'),
        body:  this.get('body')
      };

      var self = this;
      $.post('http://localhost:4567/comments', comment, function() {
        self.set('commentMessage', "You've posted a comment!");
        self.set('email', null);
        self.set('body', null);
      });
    },

    removeMessage: function() {
      this.set('commentMessage', null);
    },
  }
});
