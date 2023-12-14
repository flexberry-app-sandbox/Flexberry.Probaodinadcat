import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-probaodinadcat-гость', { inverse: null, async: false }),
  регистрацВхода: DS.belongsTo('i-i-s-probaodinadcat-регистрац-входа', { inverse: 'входГостя', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-probaodinadcat-вход-гостя.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрацВхода: {
    descriptionKey: 'models.i-i-s-probaodinadcat-вход-гостя.validations.регистрацВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходГостяE', 'i-i-s-probaodinadcat-вход-гостя', {
    гость: belongsTo('i-i-s-probaodinadcat-гость', 'Гость', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      карта: belongsTo('i-i-s-probaodinadcat-карта', '', {
        кодКарты: attr('Номер карты', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
