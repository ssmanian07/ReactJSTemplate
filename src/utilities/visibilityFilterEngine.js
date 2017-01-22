export default (fieldsList) => {

    console.log('VisibilityFilterEngine execution started.');

    fieldsList.map((field, index, fieldsArray) => {

        if (field.displaySettings.displayFilter != null)
        {
            let expression = 'fieldsArray.filter((field) => ' + field.displaySettings.displayFilter + ')[0]';
            let expressionResult = eval(expression);

            console.log('Expression "' + expression + '" is evaluated with result : ' + expressionResult);

            if ((expressionResult == null) || (expressionResult == undefined))
            {
                field.visibility = false;
            }
            else
            {
                field.visibility = true;
            }
            
            console.log('Field "' + field.id + '" with value visibility set to : ' + field.visibility);
        }

    });

    console.log('VisibilityFilterEngine execution completed.');

    return fieldsList;
};