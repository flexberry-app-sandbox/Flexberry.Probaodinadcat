import {
  defineNamespace,
  defineProjections,
  Model as РегистрацВходаMixin
} from '../mixins/regenerated/models/i-i-s-probaodinadcat-регистрац-входа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрацВходаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
