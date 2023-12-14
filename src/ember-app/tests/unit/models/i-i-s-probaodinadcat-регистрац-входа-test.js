import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probaodinadcat-регистрац-входа', 'Unit | Model | i-i-s-probaodinadcat-регистрац-входа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probaodinadcat-вход-гостя',
    'model:i-i-s-probaodinadcat-вход-сотрудника',
    'model:i-i-s-probaodinadcat-гость',
    'model:i-i-s-probaodinadcat-должности',
    'model:i-i-s-probaodinadcat-карта',
    'model:i-i-s-probaodinadcat-комната',
    'model:i-i-s-probaodinadcat-регистрац-входа',
    'model:i-i-s-probaodinadcat-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
