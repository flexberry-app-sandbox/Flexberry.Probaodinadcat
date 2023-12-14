import {
  defineNamespace,
  defineProjections,
  Model as ГостьMixin
} from '../mixins/regenerated/models/i-i-s-probaodinadcat-гость';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГостьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
