import TextInputBox from '../components/inputcontrols/input_TextBoxInput'
import MaskedTextInputBox from '../components/inputcontrols/input_MaskedTextBoxInput'
import DatePickerInput from '../components/inputcontrols/input_DatePickerInput'
import RadioOptionsInput from '../components/inputcontrols/input_RadioOptionsInput'
import ToggleButtonInput from '../components/inputcontrols/input_ToggleButtonInput'
import CheckBoxOptionsInput from '../components/inputcontrols/input_CheckBoxOptionsInput'
import DropDownInput from '../components/inputcontrols/input_DropDownInput'
import HtmlContentDisplay from '../components/inputcontrols/static_HtmlContentDisplay'
import GridArrayInput from '../components/inputcontrols/input_GridArray'

export default 
[
    {
        ControlType    :    "label",
        Control        :    null,   
    },
    {
        ControlType    :    "textbox",
        Control        :    TextInputBox,   
    },
    {
        ControlType    :    "maskedtextbox",
        Control        :    MaskedTextInputBox,   
    },
    {
        ControlType    :    "radiolist",
        Control        :    RadioOptionsInput,   
    },
    {
        ControlType    :    "booleantoggle",
        Control        :    ToggleButtonInput,   
    },
    {
        ControlType    :    "checkbox",
        Control        :    null,   
    },
    {
        ControlType    :    "checkboxlist",
        Control        :    CheckBoxOptionsInput,   
    },
    {
        ControlType    :    "dropdown",
        Control        :    DropDownInput,   
    },
    {
        ControlType    :    "datepicker",
        Control        :    DatePickerInput,   
    },
    {
        ControlType    :    "datetimepicker",
        Control        :    null,   
    },
    {
        ControlType    :    "gridarray",
        Control        :    GridArrayInput,   
    },
    {
        ControlType    :    "statichtmlcontent",
        Control        :    HtmlContentDisplay,   
    },
];