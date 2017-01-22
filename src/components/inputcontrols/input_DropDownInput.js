import React, { Component } from 'react';

class DropDownInput extends Component {
    
    constructor (props) 
    {
        super(props);
        this.state = 
        {
            value : this.props.controlInfo.currentValue
        };
    }

    handleOnChange(event)
    {
        if (event != null)
        {
            this.setState({ value : event.target.value });
            this.props.onComponentModified(
                {
                    fieldId     : this.props.controlInfo.id,
                    fieldValue  : event.target.value
                });
        }
    }
    
    render()
    {
        let currentField = this.props.controlInfo;

        let options = this.props.controlInfo.enumValues.map((item) => 
            {
                return (<option key={item.key} value={item.key}> {item.value} </option>)
            });
        
        return(
                <select id={currentField.id}
                        onChange={this.handleOnChange.bind(this)}
                        value={this.state.value}
                        className="form-control"
                        placeholder={currentField.placeHolder} >
                    {options}
                </select>
            );
    }
}

export default DropDownInput;