import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'react-toolbox/lib/table'

import { listProfiles } from '../Admin/Content/Profile/middleware/middleware'

const ProfileModel = {
	name: 	{ type: 'string' },
	type: 	{ type: 'string' }
}

class Home extends Component {

	componentWillMount() {
		this.props.dispatch(
			listProfiles()	
		)	
	}

    render() {
		console.log(this.props)
		return (
			<div>
				<h1>HomeHome</h1>
			</div>
	   )
	}
}

export default connect( state => ({
	profiles : state.admin.profile.list
}) )(Home)
