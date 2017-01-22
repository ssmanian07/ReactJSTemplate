import {Enum} from 'enumify';

class DataTypes extends Enum {};
DataTypes.initEnum(['integer', 'float', 'date', 'datetime', 'string', 'boolean', 'array']);

class ControlTypes extends Enum {};
ControlTypes.initEnum(['label', 'textbox', 'radiolist', 'checkbox', 'checkboxlist', 'datepicker', 'datetimepicker']);

class FieldStatus extends Enum {};
FieldStatus.initEnum(['ok', 'errors']);

export {DataTypes, ControlTypes, FieldStatus};