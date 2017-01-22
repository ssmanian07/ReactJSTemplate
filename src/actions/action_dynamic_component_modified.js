
export default (dynamicComponentInfo) => 
{
    console.log('Dynamic Component Modified Action Received');

    return (dispatch, getState) => 
    {
        let state = getState();

        dispatch (
            {
                type: 'DYNAMIC_COMPONENT_MODIFIED',
                payLoad: dynamicComponentInfo
            });

        if ((dynamicComponentInfo.triggerFieldUpdated != null) && (dynamicComponentInfo.triggerFieldUpdated))
        {
            let fieldUpdatedParams = 
            {
                fieldId     : dynamicComponentInfo.fieldId,
                fieldValue  : dynamicComponentInfo.fieldValue
            };

            dispatch (
            {
                type: 'FIELD_UPDATED',
                payLoad: fieldUpdatedParams
            });
        }

    };
}