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
		const mapping = (public,index) => {
			return (
				<tr 
					className={`default-row-hover ${this.props.profile && this.props.profile._id  == public._id ? 'default-row-active' : ''}`}
					key={index}
					value={public.id}
					onClick={this.handleClick.bind(null, public._id)}
				>
					<td>{public.user.name}</td>
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
	publics 	: state.public.list,
	online 		: state.public.online,
	loader 		: state.public.loader.table,
	profile 	: state.public.selected ? 
		state.public.list.find(public => public._id == state.public.selected) : null,
	filter 		: state.public.filter
}))(PublicTable)
