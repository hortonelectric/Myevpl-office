import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'react-toolbox/lib/table'

import { listProfiles } from '../Admin/Content/Profile/middleware/middleware'

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
					<h3>Profile List</h3>
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
