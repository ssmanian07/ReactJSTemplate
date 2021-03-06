// lableType  default is plain
export default
    [
        {
            id: "sectionHeaderPI",
            label: "Proposed Insured",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGgyPjxpIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLWFkanVzdCI+PC9pPiBQcm9wb3NlZCBJbnN1cmVkPC9oMj4=",
            placeHolder: "",
            displaySettings:
            {
                row: 1,
                column: 1,
                ordinal: 1,
                filter: "",
                hideLabel: false, //Check Null for label instead
            },
        },
        {
            id: "regionalHeaderPersonalDetails",
            label: "Personal Details",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGg0PlBlcnNvbmFsIERldGFpbHM8L2g0Pg==",
            placeHolder: "",
            displaySettings:
            {
                row: 2,
                column: 1,
                ordinal: 2,
                filter: ""
            },
        },
        {
            id: "firstName",
            label: "First Name",
            dataType: "string",
            controlType: "textbox",
            helpText: "Your First Name",
            value: "Natarajan",
            placeHolder: "First Name",
            displaySettings:
            {
                row: 3,
                column: 1,
                ordinal: 3,
                filter: "",
                labelType: "field",
            },
        },
        {
            id: "lastName",
            label: "Last Name",
            dataType: "string",
            controlType: "textbox",
            helpText: "Your Last Name",
            value: "Sivasubramanian",
            placeHolder: "Last Name",
            displaySettings:
            {
                row: 3,
                column: 3,
                ordinal: 4,
                filter: ""
            },
        },
        {
            id: "middleInitial",
            label: "Middle Initial",
            dataType: "string",
            controlType: "textbox",
            helpText: "Your Middle Initial",
            value: "",
            placeHolder: "MI",
            displaySettings:
            {
                row: 3,
                column: 2,
                ordinal: 5,
                width: "120px",
                filter: ""
            },
        },
        {
            id: "gender",
            label: "Gender",
            dataType: "string",
            controlType: "dropdown",
            helpText: "Your Gender",
            value: "M",
            placeHolder: "",
            displaySettings:
            {
                row: 4,
                column: 1,
                ordinal: 6,
                width: "120px",
                filter: ""
            },
            enumValues: [{ key: 'M', value: 'Male' }, { key: 'F', value: 'Female' },]
        },
        {
            id: "dateofbirth",
            label: "Birth Date",
            dataType: "date",
            controlType: "datepicker",
            helpText: "Your Date Of Birth",
            value: "05/04/1981",
            placeHolder: "MM/DD/YYYY",
            displaySettings:
            {
                row: 4,
                column: 2,
                ordinal: 7,
                width: "150px",
                filter: ""
            },
        },
        {
            id: "placeofbirth",
            label: "Place of Birth",
            dataType: "string",
            controlType: "textbox",
            helpText: "City where born",
            value: "",
            placeHolder: "City",
            displaySettings:
            {
                row: 4,
                column: 3,
                ordinal: 8,
                width: "180px",
                filter: ""
            },
        },
        {
            id: "stateofbirth",
            label: "Birth State",
            dataType: "string",
            controlType: "dropdown",
            helpText: "State where born",
            value: "TX",
            placeHolder: "",
            displaySettings:
            {
                row: 4,
                column: 4,
                ordinal: 9,
                width: "150px",
                filter: ""
            },
            enumValues: [{ key: '-1', value: 'Not Selected' }, { key: 'CT', value: 'Connecticut' }, { key: 'TX', value: 'Texas' }, { key: 'NY', value: 'NewYork' }]
        },
        {
            id: "gcholder",
            label: "Are the Insured US Citizen or Permenant Resident (Green Card Holder?)",
            dataType: "string",
            controlType: "radiolist",
            helpText: "Insured Nationality",
            value: "Y",
            placeHolder: "",
            displaySettings:
            {
                row: 5,
                column: 1,
                ordinal: 10,
                filter: "",
                labelType: "question",
            },
            enumValues: [{ key: 'Y', value: 'Yes' }, { key: 'N', value: 'No' },]
        },
        {
            id: "hline1",
            label: "ruler",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGhyPg==",
            placeHolder: "",
            displaySettings:
            {
                row: 6,
                column: 1,
                ordinal: 11,
                filter: ""
            },
        },
        {
            id: "regionalHeaderAddress",
            label: "Address",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGg0PkFkZHJlc3M8L2g0Pg==",
            placeHolder: "",
            displaySettings:
            {
                row: 7,
                column: 1,
                ordinal: 12,
                filter: ""
            },
        },
        {
            id: "address1",
            label: "Street Address",
            dataType: "string",
            controlType: "textbox",
            helpText: "Address1",
            value: "",
            placeHolder: "Street Address",
            displaySettings:
            {
                row: 8,
                column: 1,
                ordinal: 13,
                width: "450px",
                filter: "",
                hideLabel: true,
            },
        },
        {
            id: "address2",
            label: "Address2",
            dataType: "string",
            controlType: "textbox",
            helpText: "Address2",
            value: "",
            placeHolder: "Address 2",
            displaySettings:
            {
                row: 9,
                column: 1,
                ordinal: 14,
                width: "450px",
                filter: "",
                hideLabel: true,
            },
        },
        {
            id: "addressCity",
            label: "Address City",
            dataType: "string",
            controlType: "textbox",
            helpText: "City",
            value: "",
            placeHolder: "City",
            displaySettings:
            {
                row: 10,
                column: 1,
                ordinal: 15,
                width: "180px",
                filter: "",
                hideLabel: true,
            },
        },
        {
            id: "addressState",
            label: "Address State",
            dataType: "string",
            controlType: "dropdown",
            helpText: "State",
            value: "",
            placeHolder: "",
            displaySettings:
            {
                row: 10,
                column: 2,
                ordinal: 16,
                width: "100px",
                filter: "",
                hideLabel: true,
            },
            enumValues: [{ key: null, value: null }, { key: 'CT', value: 'Connecticut' }, { key: 'TX', value: 'Texas' }, { key: 'NY', value: 'NewYork' }]
        },
        {
            id: "addressZipCode",
            label: "Address ZipCode",
            dataType: "string",
            controlType: "textbox",
            helpText: "Zipcode",
            value: "",
            placeHolder: "ZipCode",
            displaySettings:
            {
                row: 10,
                column: 3,
                ordinal: 17,
                width: "100px",
                filter: "",
                hideLabel: true,
            },
        },
        {
            id: "hline2",
            label: "Gender",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGhyPg==",
            placeHolder: "",
            displaySettings:
            {
                row: 11,
                column: 1,
                ordinal: 18,
                filter: ""
            },
        },
        {
            id: "regionalPhoneAndEmail",
            label: "PhoneAndEmail",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGg0PlBob25lICYgRW1haWw8L2g0Pg==",
            placeHolder: "",
            displaySettings:
            {
                row: 12,
                column: 1,
                ordinal: 19,
                filter: ""
            },
        },
        {
            id: "piPrimaryPhone",
            label: "Primary Phone #",
            dataType: "string",
            controlType: "maskedtextbox",
            helpText: "Primay Phone Number",
            value: "8605072874",
            placeHolder: "",
            mask: "+1-999-999-9999",
            displaySettings:
            {
                row: 13,
                column: 1,
                ordinal: 20,
                width: "180px",
                filter: "",
            },
        },
        {
            id: "piPrimaryEmail",
            label: "Email Address",
            dataType: "string",
            controlType: "textbox",
            helpText: "Primay Phone Number",
            value: "",
            placeHolder: "Email Address",
            mask: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$",
            displaySettings:
            {
                row: 14,
                column: 1,
                ordinal: 21,
                width: "400px",
                filter: "",
            },
        },
        {
            id: "hline3",
            label: "horizontal ruler",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGhyPg==",
            placeHolder: "",
            displaySettings:
            {
                row: 15,
                column: 1,
                ordinal: 22,
                filter: ""
            },
        },
        {
            id: "regionalDriversLicenceDetails",
            label: "PhoneAndEmail",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGg0PkRyaXZlcidzIExpY2Vuc2UgRGV0YWlsczwvaDQ+",
            placeHolder: "",
            displaySettings:
            {
                row: 16,
                column: 1,
                ordinal: 23,
                filter: ""
            },
        },
        {
            id: "pihasDriverLicence",
            label: "Driver's Licence",
            dataType: "boolean",
            controlType: "booleantoggle",
            helpText: "Does the primary insured have driver's licence?",
            value: 'true',
            placeHolder: "",
            displaySettings:
            {
                row: 17,
                column: 1,
                ordinal: 24,
                filter: "",
                labelType: "question",
            },
            enumValues: [{ key: true, value: 'Yes' }, { key: false, value: 'No' }]
        },
        {
            id: "piDriverLicenceNumber",
            label: "Driver's Licence #",
            dataType: "string",
            controlType: "textbox",
            helpText: "Primary insured driver's licence number",
            value: "",
            placeHolder: "",
            displaySettings:
            {
                row: 18,
                column: 1,
                ordinal: 25,
                displayFilter: "((field.id == 'pihasDriverLicence') && (field.value == 'true'))",
            },
            enumValues: [{ key: 'Y', value: 'Yes' }, { key: 'N', value: 'No' },]
        },
        {
            id: "piDriverLicenceState",
            label: "Licence State",
            dataType: "string",
            controlType: "dropdown",
            helpText: "Primary insured driver's licence state",
            value: "",
            placeHolder: "",
            displaySettings:
            {
                row: 18,
                column: 2,
                ordinal: 26,
                width: "150px",
                displayFilter: "((field.id == 'pihasDriverLicence') && (field.value == 'true'))",
            },
            enumValues: [{ key: null, value: null }, { key: 'CT', value: 'Connecticut' }, { key: 'TX', value: 'Texas' }, { key: 'NY', value: 'NewYork' }]
        },
        {
            id: "piOver16NoLicence",
            label: "If over age of 16 and no licence, please explain",
            dataType: "string",
            controlType: "textbox",
            helpText: "",
            value: "",
            placeHolder: "",
            displaySettings:
            {
                row: 19,
                column: 1,
                ordinal: 27,
                displayFilter: "((field.id == 'dateofbirth') && ((new Date()).getFullYear() - (new Date(field.value)).getFullYear() ==2016))",
                labelType: "question",
            },
        },
        {
            id: "hline4",
            label: "horizontal ruler",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGhyPg==",
            placeHolder: "",
            displaySettings:
            {
                row: 20,
                column: 1,
                ordinal: 28,
                filter: ""
            },
        },
        {
            id: "piProperties",
            label: "Select the properties the primary insured currently owned",
            dataType: "array",
            controlType: "checkboxlist",
            helpText: "Properties the primary insured currently owned",
            value: ['1', '2'],
            placeHolder: "",
            displaySettings:
            {
                row: 21,
                column: 1,
                ordinal: 28,
                labelType: "question",
            },
            enumValues: [{ key: '1', value: 'House' }, { key: '2', value: 'Car' }, { key: '3', value: 'Boat' }]
        },
        {
            id: "hline5",
            label: "horizontal ruler",
            dataType: "html",
            controlType: "statichtmlcontent",
            helpText: "",
            value: "PGhyPg==",
            placeHolder: "",
            displaySettings:
            {
                row: 22,
                column: 1,
                ordinal: 29,
            },
        }
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
