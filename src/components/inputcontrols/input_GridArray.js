import React, { Component } from 'react';

/* Credit : https://github.com/jhuang78/react-dynamic-table/blob/master/src/DynamicTable.js */

class GridArrayInput extends Component {
    
    constructor (props) 
    {
        super(props);
        this.state = 
        {
            columns: this.props.controlInfo.columnSettings == null ? [] : this.props.controlInfo.columnSettings,
			data: this.props.controlInfo.currentValue == null ? [] : this.props.controlInfo.currentValue,
			newItem: {},
			showConfirmDelete: false,
        };
        this.bindEventHandlers();
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

    bindEventHandlers()
    {
        this.onClickRow = this.onClickRow.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
        this.onCancelRemove = this.onCancelRemove.bind(this);
        this.onConfirmRemove = this.onConfirmRemove.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickOk = this.onClickOk.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onDoubleClickRow = this.onDoubleClickRow.bind(this);
    }

    getData() 
    {
		return this.copyItem(this.state.data);
	}

    componentDidUpdate(prevProps, prevState) 
    {
		// get the column width to be use for the next render
		// to avoid input messing up column widht
		var ths = this.refs.headerRow.getDOMNode().children;
		this.widths = {};
		for(var i in ths) {
			if(this.state.columns[i])
				this.widths[this.state.columns[i].name] = ths[i].offsetWidth;
			else
				this[i] = '';
		}
		//console.log(this.widths);
	}

	//==============================
	//	Helper functions
	listener(meta, f) 
    {
		return function(event) 
        {
			f(event, meta);
		};
	}

	copyItem(item) 
    {
		return JSON.parse(JSON.stringify(item));
	}

	onClickRow(event, idx) 
    {
		if(idx == this.state.data.length) 
		    return;

		var item = this.copyItem(this.state.data[idx]);
        
        this.setState({selectedRow: idx});
	}

	onClickRemove(event, idx) 
    {
		this.setState({showConfirmDelete: true,	itemToDelete: idx});
	}	

	onCancelRemove(event) 
    {
		this.setState({showConfirmDelete: false});
	}

	onConfirmRemove(event) 
    {
		var idx = this.state.itemToDelete;
		var item = this.copyItem(this.state.data[idx]);

        this.setState({data: this.state.data.splice(idx, 1)});
	}

	onClickAdd(event) 
    {
		var item = this.copyItem(this.state.newItem);
		this.props.willStartCreatingItem(item, 
			/**
			 * @callback DynamicTable#willStartCreatingItemCallback
			 * @param  {boolean} error Will not start creating the item if set.
			 * @param  {item} item The item to start creating.
			 */
			(error, item) => {
				if(error)	
					return;
				this.setState({newItem: item,	editedRow: this.state.data.length}, () => {
					this.props.didStartCreatingItem(item);
				});	
		});
	}

	onClickEdit(event, idx) 
    {
		var item = this.copyItem(this.state.data[idx]);
		this.props.willStartEditingItem(idx, item, 
			/**
			 * @callback DynamicTable#willStartEditingItemCallback
			 * @param {boolean} error Will not start editing the item if set.
			 * @param {item} item The item to start editing.
			 */
			(error, item) => {
				if(error)
					return;
				var uneditedItem = this.state.data[idx];
				this.state.data[idx] = item;
				this.setState({
					data: this.state.data,
					uneditedItem: uneditedItem,
					editedRow: idx
				}, () => {
					this.props.didStartEditingItem(idx, item);
				});
			}	
		);
    }

	onClickOk(event, idx) 
    {
		var item = (idx < this.state.data.length) 
			? this.copyItem(this.state.data[idx])
			: this.copyItem(this.state.newItem);
		this.props.willFinishEditingItem(idx, item,
			/**
			 * @callback DynamicTable#willFinishEditingItemCallback
			 * @param {boolean} error Will not save the edited item if set.
			 * @param {item} item The item to be saved.
			 */
			(error, item) => {
				if(error) {
					if(idx < this.state.data.length)
						this.state.data[idx] = this.state.uneditedItem;
					else 
						this.state.newItem = {};
					this.setState({
						data: this.state.data, 
						newItem: this.state.newItem,
						editedRow: null
					});
					return;
				}

				if(idx < this.state.data.length) 
					this.state.data[idx] = item;
				else
					this.state.data.push(item);

				//console.log('abc');
				this.setState({
					data: this.state.data,
					newItem: {},
					selectedRow: idx,
					editedRow: null
				}, () => {
					this.props.didFinishEditingItem(idx, item);
				});
			}
		);
	}

	onClickCancel(event, idx) 
    {
		var item = (idx < this.state.data.length)
			? this.copyItem(this.state.data[idx])
			: this.copyItem(this.state.newItem);
		this.props.willCancelEditingItem(idx, item, 
			/**
			 * @callback DynamicTable#willCancelEditingItemCallback
			 * @param {boolean} error Will not cancel the editing if set.
			 */
			(error) => {
				if(error)
					return;
				if(idx < this.state.data.length)
					this.state.data[idx] = this.state.data.uneditedItem;
				else
					this.state.newItem = {};
				this.setState({
					data: this.state.data,
					newItem: this.state.newItem,
					selectedRow: idx,
					editedRow: null
				}, () => {
					this.props.didCancelEditingItem(idx, item);
				});
			}
		);
	}

	onInputChange(event, meta) 
    {
		var idx = meta.idx;
		var col = meta.col;
		var item = idx < this.state.data.length	? this.copyItem(this.state.data[idx]): this.copyItem(this.state.newItem);

		console.log(event.target.type, event.target.checked);

		var value = (event.target.type === 'checkbox')
			? event.target.checked
			: event.target.value;

		this.props.willEditItem(idx, item, col, value,
			/**
			 * @callback DynamicTable#willEditItemCallback
			 * @param {boolean} error Will not edit if set.
			 * @param {string|number|boolean} value The new value to set.
			 */
			(error, value) => {
				if(error) {
					return;
				}
				var item = idx < this.state.data.length
					? this.state.data[idx]
					: this.state.newItem;
				item[col] = value;
				this.setState({
					data: this.state.data,
					newItem: this.state.newItem
				}, () => {
					this.props.didEditItem(idx, item, col, value);
				});
			}
		);
	}

	onDoubleClickRow(event, idx) 
    {
		this.onClickRow(event, idx);
	}

    newGUID() 
    {
        function s4() 
        {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    
    render() 
    {
		//console.log('render', this.state);

		if(!this.state) {
			return (<div>No Data</div>);
		}
		
		var header = this.state.columns.map(function(column) {
			var options = '';
			if(column.values) {
				options = column.values.map(function(value) {
                    return (<option key={this.newGUID()} >{value}</option>);
				}.bind(this));
				options = (<datalist key={this.newGUID()} id={column.name + 'values'}>{options}</datalist>);
			}
			return (<th>{column.name}{options}</th>);
		}.bind(this));
		header.push(<th></th>);

		//console.log('this.props.widths', this.props.widths);

		var cellFor = function(item, idx, column, selected, edited) 
        {
			var value = item[column.name];
			//console.log(item, idx, column, selected, edited);
			//console.log('widths: ', this.props.widths);

			var tdStyle = {};
			if(this.widths) {
				tdStyle.width = this.widths[column.name];
				//console.log(tdStyle);
			}

			var inputStyle = {
				//'height': '100%',
				//'margin-left': -12,
				'padding-right': 0,
				//'padding-left': 0,
				//'margin-right': 0
			};

			//console.log(column);
			var inputType = 'text';
			if(column.subtype) {
				inputType = column.subtype;
			}

			var onInputChange = this.listener({idx: idx, col: column.name}, this.onInputChange);

			if(edited) {

				switch(column.type) {
					case 'Number':

						return (<td style={tdStyle} ><input 
							standalone
							type='number' 
							style={inputStyle}
							value={value} 
							onChange={onInputChange} /></td>);

					case 'Boolean':
						return (<td style={tdStyle}><input
							standalone
							type='checkbox'
							style={{'margin': 0}}
							checked={value}
							onChange={onInputChange} />	</td>);

					case 'String':
						if(inputType === 'select') {
							return (<td style={tdStyle}><input 
								standalone
								type={'select'}
								style={inputStyle}
								value={value} 
								onChange={onInputChange} >
									{column.values.map(function(value) {
										return (<option value={value}>{value}</option>);
									})}
								</input></td>);
						} else if(inputType === 'datalist') {
							return (<td style={tdStyle}><input 
								standalone
								type={'text'}
								list={column.name + 'values'}
								value={value} 
								style={inputStyle}
								onChange={onInputChange} ></input></td>);
						}
						return (<td style={tdStyle}><input 
							standalone
							type={inputType}
							value={value} 
							style={inputStyle}
							onChange={onInputChange} /></td>);
					default:
						return (<td style={tdStyle}>{value}</td>);
				
				}
			} else {
				switch(column.type) {
					case 'Boolean':
						return (<td style={tdStyle}>{value ? '√' : ''}</td>);
					default:
						return (<td style={tdStyle}>{value}</td>);
				}

				
			}
		}.bind(this);


		var actionCell = (idx) => {
			if(idx === this.state.editedRow) {
				return (
					<td>
						<button className='btn btn-success btn-xs' onClick={this.listener(idx, this.onClickOk)}>
							<span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
						</button>
						<span> </span>
						<button className='btn btn-danger btn-xs' onClick={this.listener(idx, this.onClickCancel)}>
                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
						</button>
					</td>
				);
				
			} else if(idx === this.state.data.length) {
				return (
					<td>
						<button className='btn btn-success btn-xs' onClick={this.onClickAdd}>
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
						</button>
					</td>
				);
			} else {
				return (
					<td>
						<button className='btn btn-warning btn-xs' onClick={this.listener(idx, this.onClickEdit)}>
                            <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
						</button>
						<span> </span>
						<button className='btn btn-danger btn-xs' onClick={this.listener(idx, this.onClickRemove)}>
                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
						</button>
					</td>
				);	
			}
		};

		var rows = this.state.data.map(function(item, idx) {
			var row = this.state.columns.map(function(column) {
				return cellFor(item, idx, column, this.state.selectedRow === idx, this.state.editedRow === idx);
			}.bind(this));
			
			var checked = (idx === this.state.selectedRow);
			row.push(actionCell(idx));
			//row.push(<td><Button data-idx={idx} bsSize='xsmall' bsStyle='danger' onClick={this.onClickDelete}><Glyphicon glyph='remove' /></Button></td>);
			return (<tr className={checked ? 'info' : ''} data-idx={idx} onClick={this.listener(idx, this.onClickRow)}>{row}</tr>);
		}.bind(this));

		var newItemRow = this.state.columns.map(function(column) {
			return cellFor(this.state.newItem, this.state.data.length, column, this.state.selectedRow === this.state.data.length, this.state.editedRow === this.state.data.length);
		}.bind(this));
		//newItemRow.unshift(<td></td>);
		newItemRow.push(actionCell(this.state.data.length));
		rows.push(<tr className='warning' onClick={this.listener(this.state.data.length, this.onClickRow)} >{newItemRow}</tr>);

		//console.log('before rendor return');
		return (
			<div>
				<table className="table table-bordered table-condensed table-hover">
					<thead>
						<tr ref='headerRow'>
							{header}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}

    /*
                <Modal
					show={this.state.showConfirmDelete}
					onHide={this.onCancelRemove}
					container={this}
					aria-labelledby='contained-modal-title'>
					<Modal.Header closeButton>
						<Modal.Title>Delete Confirmation</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Are you sure about deleting item {this.state.itemToDelete}?
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle='danger' onClick={this.onConfirmRemove}>Confirm</Button>
						<Button onClick={this.onCancelRemove}>Cancel</Button>
					</Modal.Footer>
				</Modal>
    */
}

GridArrayInput.defaultProps = {
    /**
     * @callback DynamicTable#willSelectItem
     * @param {number} index The index of the item to be selected.
     * @param {object} item A copy of the item to be selected.
     * @param {DynamicTable#willSelectItemCallback} cb Callback.
     */
    willSelectItem: (idx, item, cb) => cb(false),
    /**
     * @callback DynamicTable#didSelectItem
     * @param  {number} index The index of the selected item.
     * @param  {object} item A copy of the selected item.
     */
    didSelectItem: (idx, item) => null,
    /**
     * @callback DynamicTable#willRemoveItem
     * @param {number} index The index of the item to be removed.
     * @param {object} item A copy of the item to be removed.
     * @param {DynamicTable#willRemoveItemCallback} cb Callback.
     */
    willRemoveItem: (idx, item, cb) => cb(false),
    /**
     * @callback DynamicTable#didRemoveItem
     * @param  {number} index The index of the removed item.
     * @param  {object} item A copy of the removed item.
     */
    didRemoveItem: (idx, item) => null,
    /**
     * @callback DynamicTable#willStartCreatingItem
     * @param {object} item A copy of the item to be started to be created.
     * @param {DynamicTable#willStartCreatingItemCallback} cb Callback.
     */
    willStartCreatingItem: (item, cb) => cb(false, item),
    /**
     * @callback DynamicTable#didStartCreatingItem
     * @param  {object} item A copy of the item starting to be created.
     */
    didStartCreatingItem: (item) => null,
    /**
     * @callback DynamicTable#willStartEditingItem
     * @param {number} index The index of the item to be started to be edited.
     * @param {object} item A copy of the item to be started to be edited.
     * @param {DynamicTable#willStartEditingItemCallback} cb Callback.
     */
    willStartEditingItem: (idx, item, cb) => cb(false, item),
    /**
     * @callback DynamicTable#didStartEditingItem
     * @param {number} index The index of the item starting to be edited.
     * @param {object} item A copy of the item starting to be edited.
     */
    didStartEditingItem: (idx, item) => null,
    /**
     * @callback DynamicTable#willEditItem
     * @param {number} index The index of the item.
     * @param {object} item A copy of the item (containing the old value).
     * @param {string} field The edited field.
     * @param {number|boolean|string} value The new value.
     * @param {DynamicTable#willEditFieldCallback} cb Callback.
     */
    willEditItem: (idx, item, field, value, cb) => cb(false, value),
    /**
     * @callback DynamicTable#didEditItem
     * @param {number} index The index of the item.
     * @param {object} item A copy of the item.
     * @param {string} field The edited field.
     * @param {number|boolean|string} value The new value.
     */
    didEditItem: (idx, item, field, value) => null,
    /**
     * @callback DynamicTable#willFinishEditingItem
     * @param {number} index The index of the edited item.
     * @param {object} item A copy of the item.
     * @param {DynamicTable#willFinishEditingItemCallback} cb Callback.
     */
    willFinishEditingItem: (idx, item, cb) => cb(false, item),
    /**
     * @callback DynamicTable#didFinishEditingItem
     * @param {number} index The index of the edited item.
     * @param {object} item A copy of the item.
     */
    didFinishEditingItem: (idx, item) => null,
    /**
     * @callback DynamicTable#willCancelEditingItem
     * @param {number} index The index of the edited item.
     * @param {object} item A copy of the item.
     * @param {DynamicTable#willCancelEditingItemCallback} cb Callback.
     */
    willCancelEditing: (idx, item, cb) => cb(false),
    /**
     * @callback DynamicTable#didCancelEditingItem
     * @param {number} index The index of the edited item.
     * @param {object} item A copy of the item.
     */
    didCancelEditing: (idx, item) => null
};

export default GridArrayInput;