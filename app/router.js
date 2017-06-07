import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('photos', function() { });
  this.route('photo', { path: '/photo/:id' }, function() { });
  this.route('edit', { path: '/edit/:id'}, function() { });
  this.route('add');
});

export default Router;
