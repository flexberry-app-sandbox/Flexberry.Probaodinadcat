import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрацВходаMixin
} from '../mixins/regenerated/models/i-i-s-probaodinadcat-регистрац-входа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрацВходаMixin, Validations, {
});

defineProjections(Model);

export default Model;
