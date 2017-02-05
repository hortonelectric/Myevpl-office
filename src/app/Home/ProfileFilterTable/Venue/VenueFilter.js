
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'react-toolbox/lib/table'

import { listProfiles } from '../Admin/Content/Profile/middleware/middleware'

const ProfileModel = {
	name			: { type: 'string' },
	type			: { type: 'string' },
	cateredTo		: { type: 'string' },
	contactNumber	: { type: 'string' },
	email			: { type: 'string' },
	city			: { type: 'string' },
	country			: { type: 'string' }
}

class Home extends Component {

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
				source={this.props.profiles}
			/>		
			</section>
	   )
	}
}

export default connect( state => ({
	profiles : state.admin.profile.list
}) )(Home)
