import React, { Component } from 'react';
import Base64 from 'base-64';

class HtmlPanel extends Component 
{
    render()
    {
        let htmlStringContent = this.props.Content;

        try
        {
            if ((this.props.IsBase64Content != null) && (this.props.IsBase64Content))
            {
                htmlStringContent = Base64.decode(htmlStringContent);
            }
        }
        catch(err)
        {
            console.log(err);
            htmlStringContent = "<span>Error occured while processing HTML content</span>";
        }

        let htmlContent = 
        {
                  __html: htmlStringContent
        };

        return(
                    <div className={ (this.props.CSSClassName != null) ? this.props.CSSClassName : null } dangerouslySetInnerHTML={htmlContent} />
              );
    }
}

export default HtmlPanel;