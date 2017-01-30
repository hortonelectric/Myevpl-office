import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectProfile } from '../action/action'
import _ from 'lodash'

import  Table from '../component/Table'

class ProfileTable extends Component {

    handleClick = (id) => {
        this.props.dispatch(selectProfile(id))
    }

	_createRows = () => {
		const filteredRow = this.props.profiles ? this._filterRows(this.props.profiles) : this.props.profiles

		const mapping = (profileMap, index) => {
			return (
				<tr
					className={`default-row-hover ${this.props.profile && this.props.profile._id  == profileMap._id ? 'default-row-active' : ''}`}
					key={index}
					value={profileMap.id}
					onClick={this.handleClick.bind(null, profileMap._id)}
				>
					<td>{profileMap.name}</td>
				</tr>
			)
		}
		return _.map(this.props.profiles, mapping)
	}

    render() {
        return <Table rows={this._createRows()} loader={this.props.loader}/>
    }
}

export default connect( state => ({
	profiles 	: state.profileState.list,
	loader 		: state.profileState.loader.table,
	profile 	: state.profileState.selected ?
		state.profileState.list.find(profileState => profileState._id == state.profileState.selected) : null,
	filter 		: state.profileState.filter
}))(ProfileTable)
