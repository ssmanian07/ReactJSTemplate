import React, { Component } from 'react';

class TextBoxInput extends Component {
    
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
        
        return(
                <input  type="text" 
                        id={currentField.id}
                        onChange={this.handleOnChange.bind(this)}
                        value={this.state.value}   
                        className="form-control" 
                        placeholder={currentField.placeHolder} />
            );
    }
}

export default TextBoxInput;