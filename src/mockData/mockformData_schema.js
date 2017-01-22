// lableType  default is plain
export default
    {
        "schema":
        {
            "$schema": "http://json-schema.org/draft-04/schema#",

            "definitions":
            {
                "htmlruler":
                {
                    "type": "object",
                    "properties":
                    {
                        "type": "string",
                        "title": "Horizontal Ruler",
                        "description": "HTML Horizontal Ruler",
                        "default": "PGhyPg=="
                    },
                },
                "htmlsectionheader":
                {
                    "type": "object",
                    "properties":
                    {
                        "type": "string",
                        "title": "HTML Section Header",
                        "description": "HTML Section Header using H3 tag",
                    },
                },
                "htmlregionalheader":
                {
                    "type": "object",
                    "properties":
                    {
                        "type": "string",
                        "title": "HTML Regional Header",
                        "description": "HTML Section Header using H2 tag",
                    },
                }
            },

            "title": "page1",
            "type": "object",
            "properties":
            {
                "sectionHeaderPI": { "$ref": "#/definitions/htmlsectionheader" },
                "regionalHeaderPersonalDetails": { "$ref": "#/definitions/htmlregionalheader" },
                "firstName": { "type": "string", "title": "First Name" },
                "lastName": { "type": "string", "title": "Last Name" },
                "mi": { "type": "string", "title": "Middle Initial" },
                "gender": { "type": "string", "title": "Gender", "enum": [null, 'M', 'F'] },
                "dob": { "type": "string", "title": "Date Of Birth" },
                "birthPlace": { "type": "string", "title": "Place Of Birth" },
                "birthState": { "type": "string", "title": "State Of Birth" },
                "isUSCitizen": { "type": "string", "title": "Are the Insured US Citizen or Permenant Resident (Green Card Holder?)", "enum": [null, 'Y', 'N'] },
                "ruler1": { "$ref": "#/definitions/htmlruler" },
            },
            "required":
            [
                "firstName"
            ]
        },
        "uiSchema":
        {
            "properties":
            {
                "sectionHeaderPI":
                {
                    "widget": "statichtmlcontent",
                    "label_type": null, //[null],Field,Question
                    "label_hide": true,
                    "layout_row": 1,
                    "layout_column": 1,
                    "helpText": null,
                    "placeHolder": null,
                    "inputMask": null,
                    "inputWidth": null,
                    "value_content_type": "html", //[null],plain,html
                    "expressions":
                    {
                        "visible": null,
                    },
                    "validations":
                    [
                        {
                            "name": "maxLength",
                            "type": "enforce", //enforce, check, doublecheck
                            "value": 5,
                            "valueType": "number", //valid javascript type
                            "message": "Length can't be more than 5."
                        }
                    ]
                },
            },
        },
        "formData":
        {
            "page1":
            {
                "sectionHeaderPI": "PGgyPjxpIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLWFkanVzdCI+PC9pPiBQcm9wb3NlZCBJbnN1cmVkPC9oMj4=",
                "regionalHeaderPersonalDetails": "PGg0PlBlcnNvbmFsIERldGFpbHM8L2g0Pg==",
                "firstName": "Natarajan",
                "lastName": "Sivasubramanian",
                "mi": null,
                "gender": 'M',
                "dob": "12/21/2000",
                "birthPlace": "bristol",
                "birthState": "CT",
                "isUSCitizen": "Y",
                "ruler1": "PGhyPg==",
            }
        }
    };
