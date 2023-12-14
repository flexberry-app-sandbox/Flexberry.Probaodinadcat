import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probaodinadcat-карта', 'Unit | Serializer | i-i-s-probaodinadcat-карта', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probaodinadcat-карта',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probaodinadcat-вид-карты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
