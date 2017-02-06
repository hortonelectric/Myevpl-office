import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'react-toolbox/lib/table'
import { Layout, Panel } from 'react-toolbox'

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
			<Layout>
				<Panel>
					<section style={{paddingTop: 25, paddingBottom: 25, paddingLeft: 50, paddingRight: 50}}>
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
				</Panel>
			</Layout>
	   )
	}
}

export default connect( state => ({
	profiles : state.admin.profile.list,
	filter : {
		profileType : state.profile.filter.profileType,
		cateredTo 	: state.profile.filter.cateredTo,
		venue : {
			isAllowedOutside : state.profile.filter.venue.isAllowedOutside,
			isProvideOutside : state.profile.filter.venue.isProvideOutside,
			venueType		 : state.profile.filter.venue.venueType
		}
	}
}) )(Home)
