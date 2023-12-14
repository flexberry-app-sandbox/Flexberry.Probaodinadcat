import { Serializer as ВходСотрудникаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probaodinadcat-вход-сотрудника';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВходСотрудникаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
