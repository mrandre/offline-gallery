import Ember from 'ember';
const { Component, get, set } = Ember;

export default Component.extend({
  photo: null,

  didInsertElement() {
    let fileInput = document.getElementById('photoUpload');
    let ember = this;
    fileInput.addEventListener('change', (evt) => {
      let file = evt.target.files[0];
      let reader = new FileReader();
      reader.onload = ((theFile) => {
        return function(e) {
          // Render thumbnail.
          get(ember, 'photo.photos').addObject(Ember.Object.create({
            name: theFile.name,
            content_type: 'image/jpg',
            data: e.target.result
          }));
        };
      })(file);
      reader.readAsDataURL(file);
    }, false);
  }
});
