export default (failedFieldInfo) => 
{
    console.log('Field Validation Failed Action Received');

    return (dispatch, getState) => 
    {
        const { JsonFormReducer } = getState();

        dispatch (
          {
              type: 'FIELD_VALIDATION_FAILED',
              payLoad: failedFieldInfo
          });
    };
}