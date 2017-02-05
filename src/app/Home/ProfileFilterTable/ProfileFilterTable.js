import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-toolbox/lib/dropdown'

import { cateredTo, venueType } from '../../../lib/profileFieldList'
import { changeFilterProfileType, changeFilterCateredTo } from './action'

class Home extends Component {

	_handleProfileTypeChange = (value) => {
		this.props.dispatch(
			changeFilterProfileType(value)	
		)	
	}

	_handleCateredToChange = (value) => {
		this.props.dispatch(
			changeFilterCateredTo(value)	
		)	
	}

    render() {
		return (
			<section>
				<div>
					<h4>Profile Type</h4>
					<Dropdown
						auto
						onChange={this._handleProfileTypeChange}
						source={profileTypeFilterModel}
						value={this.props.profileType}
					/>
				</div>
				<div>
					<h4>Events Catered To</h4>
					<Dropdown
						auto
						onChange={this._handleCateredToChange}
						source={cateredFilterModel}
						value={this.props.cateredTo}
					/>
				</div>
				<div>
					<h4></h4>
				</div>
			</section>
	   )
	}
}

const cateredFilterModel = [ { value: 'All', label: 'All'}, ...cateredTo  ]

const profileTypeFilterModel = [
  { value: 'All', 	label: 'All' },
  { value: 'Venue', label: 'Venue'},
  { value: 'Catering', 	label: 'Catering' }
];


export default connect( state => ({
	profileType : state.profile.filter.profileType,
	cateredTo 	: state.profile.filter.cateredTo
}) )(Home)
