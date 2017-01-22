// lableType  default is plain
export default
    [
        {
            id: "numberOfChild",
            label: "How many child do you have?",
            dataType: "int",
            controlType: "textbox",
            helpText: "Number of Kids",
            value: "",
            placeHolder: "",
            displaySettings:
            {
                row: 1,
                column: 1,
                ordinal: 1,
                filter: "",
                width: "250px",
                labelType: "question",
            },
        },
        {
            id: "childInfo",
            label: "Please provide your child details",
            dataType: "array",
            controlType: "gridarray",
            helpText: "",
            value:
            [
                {
                    "id": 1,
                    "name": "Adam Smith",
                    "dateOfBirth": "1723-06-16",
                    "age": 292,
                    "major": "economy",
                    "alive": false,
                    "country": "UK"
                }, {
                    "id": 2,
                    "name": "Bill Gates",
                    "dateOfBirth": "1955-10-28",
                    "age": 60,
                    "major": "computer science",
                    "alive": true,
                    "country": "USA"
                },
            ],
            placeHolder: "",
            displaySettings:
            {
                row: 2,
                column: 1,
                ordinal: 2,
                filter: "",
                labelType: "question",
            },
            columnSettings:
            [
                {
                    "name": "id",
                    "type": "Number",
                }, 
                {
                    "name": "name",
                    "type": "String"
                }, 
                {
                    "name": "dateOfBirth",
                    "type": "String",
                    "subtype": "date"
                }, 
                {
                    "name": "age",
                    "type": "Number"
                }, 
                {
                    "name": "major",
                    "type": "String",
                    "subtype": "select",
                    "values": ["economy", "computer science", "physics"]
                },
                {
                    "name": "country",
                    "type": "String",
                    "subtype": "datalist",
                    "values": ["USA", "UK", "Taiwan"]
                }, 
                {
                    "name": "alive",
                    "type": "Boolean"
                }
            ]
        },
    ];

/*
        properties  :
        {
            maxLength : 10,
            minLength : 5,
            mask      : null,
            toolTip   : "First Name"
        }
displayFilter  : "(((field.id == 'pihasDriverLicence') && (field.value == 'true')) && ((field.id == 'dateofbirth') && (now().getFullYear() - Date.parse(field.value).getFullYear() >= 16)))",
*/
