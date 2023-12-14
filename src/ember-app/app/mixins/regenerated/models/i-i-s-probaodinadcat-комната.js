import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количествоМест: DS.attr('number'),
  номерКомнаты: DS.attr('number'),
  этаж: DS.attr('number')
});

export let ValidationRules = {
  количествоМест: {
    descriptionKey: 'models.i-i-s-probaodinadcat-комната.validations.количествоМест.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-probaodinadcat-комната.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-probaodinadcat-комната.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-probaodinadcat-комната', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    количествоМест: attr('Количество мест', { index: 2 })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-probaodinadcat-комната', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    количествоМест: attr('Количество мест', { index: 2 })
  });
};
