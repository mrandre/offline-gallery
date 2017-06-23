import Ember from 'ember';
const { Controller, get } = Ember;

export default Controller.extend({

  actions: {
    cancel() {
      this.transitionToRoute('photo', get(this, 'model.id'));
    },

    submit() {
      get(this, 'model').save().then((photo) => {
        this.transitionToRoute('photo', photo.id);
      }); 
    }
  }
});
