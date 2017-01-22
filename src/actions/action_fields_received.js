export default (fieldsListInfo) => 
{
    console.log('Fields Received Action Received');

    return (dispatch, getState) => 
    {
        const { JsonFormReducer } = getState();

        console.log('Dispatch Action FIELDS_RECEIVED');

        dispatch (
          {
              type: 'FIELDS_RECEIVED',
              payLoad: fieldsListInfo
          });
    };
}