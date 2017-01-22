import React, { Component } from 'react';

class ToggleButtonInput extends Component {
    
    constructor (props) 
    {
        super(props);
        this.state = 
        {
            value : this.props.controlInfo.currentValue == null ? false : this.props.controlInfo.currentValue
        };
    }

    componentWillMount()
    {

    }

    handleOnChange(event)
    {
        if ((event != null) && (event.target != null))
        {
            let currentState = event.target.getAttribute("data-key");

            if (currentState)
            {
                $("#" + this.props.controlInfo.id + '_false').removeClass('active');
                $("#" + this.props.controlInfo.id + '_true').addClass('active');
            }
            else
            {
                $("#" + this.props.controlInfo.id + '_false').addClass('active');
                $("#" + this.props.controlInfo.id + '_true').removeClass('active');
            }
            
            this.setState({ value : currentState });
            this.props.onComponentModified(
                {
                    fieldId             : this.props.controlInfo.id,
                    fieldValue          : currentState,
                    //Do Not Use 'triggerFieldUpdated' setting If the Field is a composite control as this fieldValue is what will be used send a FieldUpdated Input
                    triggerFieldUpdated : true    
                });
        }
    }

    getToggleButton()
    {
        if (this.props.controlInfo.enumValues.length != 2)
        {
            return (
                    <div> ToggleButton Input requires 2 enumeration values </div>
                );
        }

        let trueState = (isActive) => {
            let trueElement = this.props.controlInfo.enumValues.filter((e) => e.key)[0];
            if (trueElement)
            {
                let className = "btn btn-success" + ( isActive ? " active" : "" );
                return ( <label id={this.props.controlInfo.id + '_true'} data-key={trueElement.key} className={className}> {trueElement.value} </label>);
            }
        };

        let falseState = (isActive) => {
           let falseElement = this.props.controlInfo.enumValues.filter((e) => !e.key)[0];
           if (falseElement)
           {
                let className = "btn btn-default" + ( !isActive ? " active" : "" );
                return ( <label id={this.props.controlInfo.id + '_false'} data-key={falseElement.key} className={className}> {falseElement.value} </label>);
           }
        };

        return (
            <div className="btn-group" onClick={this.handleOnChange.bind(this)}>
                {trueState(this.state.value)}
                {falseState(this.state.value)}
            </div>
        ) 
    }
    
    render()
    {
        let inputStyle = 
        {
            "marginLeft" : "5px",
        };

        return(
                <div style={inputStyle}> {this.getToggleButton()} </div>
            );
    }
}

export default ToggleButtonInput;