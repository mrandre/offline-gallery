import Ember from 'ember';
const { Component, get } = Ember;

export default Component.extend({
  photo: null,

  didInsertElement() {
    let fileInput = document.getElementById('photoUpload');
    fileInput.addEventListener('change', (evt) => {
      let file = evt.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        get(this, 'photo.photos').addObject(Ember.Object.create({
          name: file.name,
          content_type: 'image/jpg',
          data: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }, false);
  }
});
