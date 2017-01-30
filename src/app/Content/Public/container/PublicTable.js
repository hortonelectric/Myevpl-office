import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectPublic } from '../action/action'
import _ from 'lodash'

import  Table from '../component/Table'

class PublicTable extends Component {

    handleClick = (id) => {
        this.props.dispatch(selectPublic(id))
    }

	_createRows = () => {
		const filteredRow = this.props.publics ? this._filterRows(this.props.publics) : this.props.publics

		const mapping = (this.props.publicMap, index) => {
			return (
				<tr 
					className={`default-row-hover ${this.props.profile && this.props.profile._id  == publicMap._id ? 'default-row-active' : ''}`}
					key={index}
					value={publicMap.id}
					onClick={this.handleClick.bind(null, publicMap._id)}
				>
					<td>{publicMap.name}</td>
				</tr>
			)
		}
		return _.map(this.props.publics, mapping)
	}

    render() {
        return <Table rows={this._createRows()} loader={this.props.loader}/>
    }
}

export default connect( state => ({ 
	publics 	: state.publicState.list,
	loader 		: state.publicState.loader.table,
	profile 	: state.publicState.selected ? 
		state.publicState.list.find(publicState => publicState._id == state.publicState.selected) : null,
	filter 		: state.publicState.filter
}))(PublicTable)
