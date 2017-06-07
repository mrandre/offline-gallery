import Ember from 'ember';
const { Route, inject : { service } } = Ember;

export default Route.extend({
 beforeModel() {
   this._super(...arguments);
 }
});
