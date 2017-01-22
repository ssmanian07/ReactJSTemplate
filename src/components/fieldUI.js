import React, { Component } from 'react';

class FieldUI extends Component {

    componentDidMount()
    {
       this.setToolTip();
    }

    componentDidUpdate()
    {
        this.setToolTip();
    }

    setToolTip()
    {
        $(function () 
            {
                $('[data-toggle="tooltip"]').tooltip()
            });
    }

    onBlur(e) 
    {
        //https://gist.github.com/andru255/40460f892de99d3d55ee6aca4bbad792
        let currentTarget = e.currentTarget;

        if (!currentTarget.contains(document.activeElement)) 
        {
            if (this.props.fieldInfo.initialValue != this.props.fieldInfo.currentValue) 
            {
                console.log('component value modified');
                this.props.onFieldUpdated(
                {
                    fieldId     : this.props.fieldInfo.id,
                    fieldValue  : this.props.fieldInfo.currentValue
                });
            }
        }
    }

    renderField(fieldInfo, DynamicControl)
    {

        let styleSettings = 
        {
            width : (fieldInfo.displaySettings.width == null) ? "100%" : fieldInfo.displaySettings.width
        };

        let hideLabel = (fieldInfo.displaySettings.hideLabel == null) ? false : fieldInfo.displaySettings.hideLabel;

        if (hideLabel)
        {
            return ( 
                <div style={styleSettings} >
                    <fieldset> 
                        <DynamicControl onComponentModified={this.props.onDynamicComponentModified}  controlInfo={fieldInfo} />
                    </fieldset> 
                </div>
                );
        }

        let staticHtmlContentField = (fieldInfo.controlType == "statichtmlcontent");

        if (staticHtmlContentField)
        {
            return ( 
                <div style={styleSettings} > 
                    <DynamicControl onComponentModified={this.props.onDynamicComponentModified}  controlInfo={fieldInfo} /> 
                </div>
            );
        }

        if (fieldInfo.displaySettings.labelType == null)
        {
            fieldInfo.displaySettings.labelType = "field";
        }

        let fieldSetMode = (fieldInfo.displaySettings.labelType == "field");

        if (fieldSetMode)
        {
            let dataFieldStyleSettings = {
                marginTop : "-10px"
            };

            return ( 
                <div style={styleSettings} > 
                    <fieldset>
                        <legend>{fieldInfo.label}</legend>
                        <div style={dataFieldStyleSettings} >
                            <DynamicControl onComponentModified={this.props.onDynamicComponentModified}  controlInfo={fieldInfo} />
                        </div>
                    </fieldset> 
                </div>
            );
        }
        else
        {
            return ( 
                <div style={styleSettings} > 
                    <div>
                        <label htmlFor={fieldInfo.id}>{fieldInfo.label}</label> &nbsp;
                        <span className="glyphicon glyphicon-exclamation-sign" data-toggle="tooltip" data-placement="top" title={fieldInfo.helpText} aria-hidden="true"></span>
                    </div>
                    <DynamicControl onComponentModified={this.props.onDynamicComponentModified}  controlInfo={fieldInfo} /> 
                </div>
            );
        }

    }

    render()
    {
        let fieldInfo = this.props.fieldInfo;
        const DynamicControl = this.props.mappedControl;

        if ((DynamicControl == null) || (!fieldInfo.visibility))
        {
            return <div />;
        }

        return( 
                <div className="form-group" onBlur={this.onBlur.bind(this)}>
                    {this.renderField(fieldInfo, DynamicControl)}
                </div>
            ); 
    }
}

export default FieldUI;