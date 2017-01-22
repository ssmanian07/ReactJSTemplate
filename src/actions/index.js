import FieldsReceived from './action_fields_received';
import FieldUpdated from './action_field_updated';
import FieldValidationFailed from './action_field_validation_failed';
import DynamicComponentModified from './action_dynamic_component_modified';

export default class JsonFormActions
{
  static onFieldsReceived(fieldsListInfo) {
      return FieldsReceived(fieldsListInfo);
  };

  static onFieldUpdated(fieldInfo) {
      return FieldUpdated(fieldInfo);
  };

  static onFieldValidationFailed(failedFieldInfo) {
      return FieldValidationFailed(failedFieldInfo);
  };

  static onDynamicComponentModified(dynamicComponentInfo) {
      return DynamicComponentModified(dynamicComponentInfo);
  };

}