import Ember from 'ember';
const { Component, get } = Ember;

export default Component.extend({
  photo: null,

  didInsertElement() {
    let fileInput = document.getElementById('photoUpload');
    let ember = this;
    fileInput.addEventListener('change', function(evt) {
      let file = evt.target.files[0];
      let reader = new FileReader();
      reader.onload = ((theFile) => {
        return function(e) {
          // Render thumbnail.
          var div = document.getElementById('preview');
          let imageData = e.target.result;
          let photo = get(ember, 'photo');
          photo.get('photos').addObject(Ember.Object.create({
            'name': theFile.name,
            'content_type': 'image/jpg',
            'data': imageData // base64-encoded `String`, or a DOM `Blob`, or a `File`
          }));
          div.innerHTML = ['<img class="thumb" width="600" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
        };
      })(file);
      reader.readAsDataURL(file);
    }, false);
  }
});
