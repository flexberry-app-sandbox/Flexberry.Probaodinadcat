import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВходСотрудникаMixin
} from '../mixins/regenerated/models/i-i-s-probaodinadcat-вход-сотрудника';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВходСотрудникаMixin, Validations, {
});

defineProjections(Model);

export default Model;
