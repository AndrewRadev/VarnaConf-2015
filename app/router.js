import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('slider');
  this.resource('users', function() {
    this.route('new');
  });
});

export default Router;
