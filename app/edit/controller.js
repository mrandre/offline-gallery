import Ember from 'ember';
const { Controller, get } = Ember;

export default Controller.extend({

  actions: {
    submit() {
      get(this, 'model').save().then((photo) => {
        this.transitionToRoute('photo', photo.id);
      }); 
    }
  }
});
