import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('slider');
  this.resource('users', function() {
    this.route('new', function() {
      this.route('login-info');
      this.route('name');
      this.route('details');
    });
  });
});

export default Router;
