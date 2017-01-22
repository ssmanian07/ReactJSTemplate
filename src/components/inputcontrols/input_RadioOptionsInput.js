import React, { Component } from 'react';

class RadioOptionsInput extends Component {
    
    constructor (props) 
    {
        super(props);
        this.state = 
        {
            value : this.props.controlInfo.currentValue
        };
        this.generateRadioOption = this.generateRadioOption.bind(this);
    }

    handleOnChange(event)
    {
        if ((event != null) && (event.target.checked))
        {
            this.setState({ value : event.target.value });
            this.props.onComponentModified(
                {
                    fieldId             : this.props.controlInfo.id,
                    fieldValue          : event.target.value,
                    //Do Not Use 'triggerFieldUpdated' setting If the Field is a composite control as this fieldValue is what will be used send a FieldUpdated Input
                    triggerFieldUpdated : true    
                });
        }
    }

    generateRadioOption(item)
    {
        return (
                <label key={item.key} className="radio-inline">
                    <input  type="radio" 
                            id={this.props.controlInfo.id + '_' + item.key}
                            onChange={this.handleOnChange.bind(this)}
                            checked = { this.state.value==item.key }
                            name={this.props.controlInfo.id} 
                            value={item.key} /> {item.value} 
                </label>
            );
    }

    getRadioButtonList()
    {
        let options = this.props.controlInfo.enumValues.map((item) => 
            {
                return (this.generateRadioOption(item))
            });

        return (
            <div> {options} </div>
        ) 
    }
    
    render()
    {
        let inputStyle = 
        {
            "marginLeft" : "5px",
        };

        return(
                <div style={inputStyle}> {this.getRadioButtonList()} </div>
            );
    }
}

export default RadioOptionsInput;