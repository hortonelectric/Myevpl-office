import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'react-toolbox/lib/table'

import { listProfiles } from '../Admin/Content/Profile/middleware/middleware'
import ProfileFilterTable from './ProfileFilterTable/ProfileFilterTable'
import filter from './ProfileFilterTable/filter'

const ProfileModel = {
	name			: { type: 'string' },
	type			: { type: 'string' },
	contactNumber	: { type: 'string' },
	email			: { type: 'string' },
	city			: { type: 'string' },
	country			: { type: 'string' }
}

class Home extends Component {

	_fitlerTable = () => {
		return filter(this.props.profiles, this.props.filter)	
	}

	componentWillMount() {
		this.props.dispatch(
			listProfiles()	
		)	
	}

    render() {
		return (
			<section>
				<div>
					<h1>Profile List</h1>
				</div>
				<Table
					className="p25"
					selectable={false}
					model={ProfileModel}
					source={this._fitlerTable()}
				/>		
				<br />
				<br />
				<h2>Filters</h2>
				<ProfileFilterTable />
			</section>
	   )
	}
}

export default connect( state => ({
	profiles : state.admin.profile.list,
	filter : {
		profileType : state.profile.filter.profileType,
		cateredTo 	: state.profile.filter.cateredTo
	}
}) )(Home)
