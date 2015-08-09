import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postComment: function() {
      console.log([
        this.get('email'),
        this.get('body')
      ]);
    }
  }
});
