import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postComment: function() {
      var controller = this;
      Ember.$.post('http://localhost:4567/comments', this.get('model'), function() {
        controller.set('model', {});
        controller.set('commentMessage', "You've posted a comment!");

        setTimeout(function() { controller.set('commentMessage', null); }, 2000);
      });
    }
  }
});
