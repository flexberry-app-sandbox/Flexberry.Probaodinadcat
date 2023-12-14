import { Serializer as КомнатаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probaodinadcat-комната';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КомнатаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
