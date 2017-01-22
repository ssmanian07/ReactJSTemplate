import React, { Component } from 'react';
import {DataTypes} from '../utilities/enums';
import FieldUI from './fieldUI';
import FieldContainer from '../containers/container_fieldui'

class JsonForm extends Component {

    getRowData(displayMarix, rowIndex)
    {
        let requestedRow = displayMarix.filter( (row) => row.index==rowIndex )[0];

        if (requestedRow == null)
        {
            requestedRow = 
            {
                index   : rowIndex,
                columns : []
            }

            displayMarix.push(requestedRow);
        }

        return requestedRow;
    }

    generateJsonForm()
    {
        let displayMarix = [];

        let tabOrderedList = this.props.formData.sort((field) => field.displaySettings.ordinal);
        for(var i=0;i<=tabOrderedList.length-1;i++)
        {
            let currentField = tabOrderedList[i];
            
            let rowData = this.getRowData(displayMarix, (currentField.displaySettings.row == null) ? currentField.displaySettings.ordinal : currentField.displaySettings.row);

            let columnData = {
                index   :   (currentField.displaySettings.column == null) ?  1 : currentField.displaySettings.column,
                field   :   currentField
            };

            rowData.columns.push(columnData);
        }

        let orderedRows = displayMarix.sort((row) => parseInt(row.index));

        let formToDisplay = orderedRows.map((row) => {

            let orderedColumns = row.columns.sort((column) => parseInt(column.index));

            let columnData = orderedColumns.map((column, index, params) => {

                let fieldStyle = {
                    margin : "3px"
                };

                let bootStrapClassName = ( params.length > 1 ) ? "pull-left" : null;

                return ( <div key={column.field.id} style={fieldStyle} className={bootStrapClassName}> <FieldContainer id={column.field.id} controlType={column.field.controlType} /> </div> );
            });

            return ( <div key={row.index} className="row"> <div className="col-sm-12"> {columnData} </div> </div> );
        });

        return ( <div> {formToDisplay} </div> );
    }

    render()
    {
        //<JSONTree data={this.getFormDataForDisplay().bind(this)} />
        return( 
                <div className="panel panel-primary">
                    <div className="panel-heading">JsonForm Editor</div>
                    <div className="panel-body">
                        {this.generateJsonForm()}
                    </div>
                </div>
            ); 
    }
}

export default JsonForm;