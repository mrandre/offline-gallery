import DS from 'ember-data';
import { Model } from 'ember-pouch';
const { attr } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  photos: attr('attachments', {
    defaultValue: function() {
      return [];
    }
  })
});
