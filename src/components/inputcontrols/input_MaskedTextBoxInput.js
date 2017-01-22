import React, { Component } from 'react';
import InputElement from 'react-input-mask';

class MaskedTextBoxInput extends Component {
    
    constructor (props) 
    {
        super(props);
        this.state = 
        {
            value   : this.props.controlInfo.currentValue,
            mask    : this.props.controlInfo.mask
        };
    }

    handleOnChange(event)
    {
        if (event != null)
        {

            var value = event.target.value;
            var newState = 
            {
                    mask: this.props.controlInfo.mask,
                    value: value
            }
            if (/^3[47]/.test(value)) 
            {
               newState.mask = this.props.controlInfo.mask;
            }
            
            this.setState(newState);

            this.props.onComponentModified(
                {
                    fieldId     : this.props.controlInfo.id,
                    fieldValue  : value
                });
        }
    }
    
    render()
    {
        let currentField = this.props.controlInfo;
        
        return(
                <InputElement       type='text'
                                    mask={this.state.mask}
                                    id={currentField.id}
                                    onChange={this.handleOnChange.bind(this)}
                                    value={this.state.value}
                                    className="form-control"
                                    placeholder={currentField.placeHolder}
                                    alwaysShowMask={true} />
            );
    }
}

export default MaskedTextBoxInput;