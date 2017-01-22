import { connect } from 'react-redux';
import JsonFormActions from '../actions';
import {bindActionCreators} from 'redux';
import FieldUI from '../components/fieldUI';


const mapStateToProps = (state, ownProps) => 
{

  let requestedField = Object.assign({}, state.fieldList.filter((field) => field.id==ownProps.id)[0]);
  let requestedControl = state.controlRegistry.filter((control) => control.ControlType==ownProps.controlType)[0];
 
  return(
        {
            fieldInfo : requestedField,
            mappedControl : requestedControl.Control
        });
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { 
      onFieldUpdated              : JsonFormActions.onFieldUpdated,
      onFieldValidationFailed     : JsonFormActions.onFieldValidationFailed,
      onDynamicComponentModified  : JsonFormActions.onDynamicComponentModified,
    }, dispatch);
}


const FieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldUI)

export default FieldContainer;