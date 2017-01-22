import {FieldStatus} from '../utilities/enums';
import DefaultState from './defaultState';
import RunVisibilityFilterEngine from '../utilities/visibilityFilterEngine';

export default (state = DefaultState, action) =>
{
    switch (action.type) 
    {
      case 'FIELDS_RECEIVED': 
      {
            console.log('Action FIELDS_RECEIVED processed on JsonForms Reducer');
            
            let newState = Object.assign({}, state);

            if (action.payLoad != null)
            {
                newState.fieldList = action.payLoad;

                newState.fieldList.map((field) => 
                {
                    field.initialValue = field.value,
                    field.currentValue = field.value,
                    field.status = FieldStatus.ok;
                    field.visibility = true;
                    field.ValidationErrors = [];
                });
            }

            newState.fieldList = RunVisibilityFilterEngine(newState.fieldList);
            
            return newState;
      }
      case 'DYNAMIC_COMPONENT_MODIFIED': 
      {
            console.log('Action DYNAMIC_COMPONENT_MODIFIED processed on JsonForms Reducer');
            
            let newState = Object.assign({}, state);

            if (action.payLoad != null)
            {
                let updatedField = newState.fieldList.filter((field) => field.id == action.payLoad.fieldId)[0];

                if (updatedField != null)
                {
                    updatedField.currentValue = action.payLoad.fieldValue;
                }
            }

            return newState;
      }
      case 'FIELD_UPDATED': 
      {
            console.log('Action FIELD_UPDATED processed on JsonForms Reducer');
            
            let newState = Object.assign({}, state);

            if (action.payLoad != null)
            {
                let updatedField = newState.fieldList.filter((field) => field.id == action.payLoad.fieldId)[0];

                if (updatedField != null)
                {
                    updatedField.initialValue = action.payLoad.fieldValue,
                    updatedField.value = action.payLoad.fieldValue;
                } 
            }

            newState.fieldList = RunVisibilityFilterEngine(newState.fieldList);

            return newState;
      }
      case 'FIELD_VALIDATION_FAILED': 
      {
            console.log('Action FIELD_VALIDATION_FAILED processed on JsonForms Reducer');
            
            let newState = Object.assign({}, state);

            if ((action.payLoad != null) && (action.payLoad.failedFieldInfo != null))
            {
                let fieldToUpdate = newState.fieldList.filter((field) => field.id == action.payLoad.failedFieldInfo.id)[0];

                if (fieldToUpdate != null)
                {
                    fieldToUpdate.status = FieldStatus.errors;
                    fieldToUpdate.ValidationErrors = action.payLoad.failedFieldInfo.errors;
                } 
            }

            return newState;
      }
      default:
      {
        return state;
      }
    }
}
