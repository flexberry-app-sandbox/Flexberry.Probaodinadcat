import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидКартыEnum from '../enums/i-i-s-probaodinadcat-вид-карты';

export default FlexberryEnum.extend({
  enum: ВидКартыEnum,
  sourceType: 'IIS.Probaodinadcat.ВидКарты'
});
