import React, { Component } from 'react';
import CheckBoxList from 'react-checkbox-list';

class CheckBoxOptionsInput extends Component {
    
    constructor (props) 
    {
        super(props);

        this.state = 
        {
            value : this.props.controlInfo.currentValue
        };

    }

    handleOnChange(selectedValues)
    {
        if (selectedValues != null)
        {
            this.setState({ value : selectedValues });
            this.props.onComponentModified(
                {
                    fieldId             : this.props.controlInfo.id,
                    fieldValue          : selectedValues,
                });
        }
    }

    getCheckBoxList()
    {
        let dataOptions = [];

        let optionToAdd = {};

        let selectedValues = (this.props.controlInfo.currentValue != null) ? this.props.controlInfo.currentValue : [];

        this.props.controlInfo.enumValues.forEach((option) => {
            optionToAdd = {};
            optionToAdd['value'] = option.key;
            optionToAdd['label'] = option.value;
            optionToAdd['checked'] = (selectedValues.filter((item) => item.toLowerCase()==option.key.toLowerCase())[0] != null);
            dataOptions.push(optionToAdd);
        });
        
        return (
             <CheckBoxList id={this.props.controlInfo.id} ref="chkboxList" defaultData={dataOptions} onChange={this.handleOnChange.bind(this)} />
        ) 
    }
    
    render()
    {
        let inputStyle = 
        {
            "marginLeft" : "5px",
        };

        

        return(
                <div style={inputStyle}> {this.getCheckBoxList()} </div>
            );
    }
}

export default CheckBoxOptionsInput;