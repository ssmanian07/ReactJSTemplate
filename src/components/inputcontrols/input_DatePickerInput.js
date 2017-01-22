import React, { Component } from 'react';
import DatePicker from 'react-bootstrap-date-picker';

//DatePicker Documentation : https://github.com/quri/react-bootstrap-datetimepicker

class DatePickerInput extends Component {
    
    constructor (props) 
    {
        super(props);
        this.state = 
        {
            value : new Date(this.props.controlInfo.currentValue).toISOString()
        };
    }

    handleOnChange(value, formattedValue)
    {
        this.setState({ value : value });
        this.props.onComponentModified(
            {
                fieldId     : this.props.controlInfo.id,
                fieldValue  : formattedValue
            });
    }
    
    render()
    {
        let currentField = this.props.controlInfo;

        return(
                <DatePicker id={currentField.id} 
                            value={this.state.value} 
                            onChange={this.handleOnChange.bind(this)}
                            className="form-control"
                            placeholder={currentField.placeHolder} />
            );
    }
}

export default DatePickerInput;