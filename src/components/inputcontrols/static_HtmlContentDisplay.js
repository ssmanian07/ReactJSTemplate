import React, { Component } from 'react';
import HtmlPanel from '../HtmlPanel';

class HtmlContentDisplay extends Component {

    render()
    {
        let currentField = this.props.controlInfo;
        
        return(
                <HtmlPanel Content={currentField.value} IsBase64Content={true}  />
            );
    }
}

export default HtmlContentDisplay;