export default (fieldInfo) => 
{
    console.log('Field Updated Action Received');

    return (dispatch, getState) => 
    {
        let state = getState();

        dispatch (
          {
              type: 'FIELD_UPDATED',
              payLoad: fieldInfo
          });
    };
}