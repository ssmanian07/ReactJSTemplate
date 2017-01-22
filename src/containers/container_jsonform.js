import { connect } from 'react-redux';
import JsonFormActions from '../actions'
import JsonForm from '../components/JSONForm'

const mapStateToProps = (state) => 
{
  return(
        {
            formData : state.fieldList
        });
}

const JsonFormContainer = connect(
  mapStateToProps
)(JsonForm)

export default JsonFormContainer;