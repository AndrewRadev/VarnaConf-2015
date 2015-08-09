import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postComment: function() {
      var comment = {
        email: this.get('email'),
        body:  this.get('body')
      };

      var controller = this;
      $.post('http://localhost:4567/comments', comment, function() {
        controller.set('commentMessage', "You've posted a comment!");
      });
    }
  }
});
