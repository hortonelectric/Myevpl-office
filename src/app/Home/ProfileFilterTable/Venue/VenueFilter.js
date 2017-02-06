import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import _ from 'lodash'

import { cateredTo, venueType } from '../../../lib/profileFieldList'
import { changeFilterisAllowedOutside, changeFilterisProvideOutside, insertFilterVeneuType, removeFilterVeneuType } from './action'

class Home extends Component {

	_handleProfileTypeChange = (value) => {
		this.props.dispatch(
			changeFilterProfileType(value)	
		)	
	}

	_handleVenueTypeChange = (field, value) => {
		if(value){
			this.props.dispatch(
				insertFilterVeneuType(field)
			)
		}
		if(!value){
			this.props.dispatch(
				removeFilterVeneuType(field)
			)
		}
	}

	_renderCateredToCheckboxes = () => {
		const checkCateredToFromState = (data) => {
			return _.find(this.props.venueType, value => value === data)	
		}

		const checkIfChecked = (data) => {
			return checkCateredToFromState(data) ? true : false
		}

		return _.map(venueTypeFilterModel, (data, index) => { return(
		        <Checkbox
					checked={checkIfChecked(data.value)}
			        label={data.label}
			        onChange={this._handleVenueTypeChange.bind(this, data.value)}
				/>	
			)
		})
	}

    render() {
		return (
			<section>
				<div>
					<h4>Venue Types</h4>
					{this._renderVenueTypCheckboxes()}
				</div>
				<div>
					<Checkbox
						checked={checkIfChecked(data.value)}
						label={data.label}
						onChange={this._handleVenueTypeChange.bind(this, data.value)}
					/>	
				</div>
				<div>
					<Checkbox
						checked={checkIfChecked(data.value)}
						label={data.label}
						onChange={this._handleVenueTypeChange.bind(this, data.value)}
					/>	
				</div>
			</section>
	   )
	}
}

const venueTypeFilterModel = [ { value: 'All', label: 'All'}, ...venueType  ]

const profileTypeFilterModel = [
  { value: 'All', 	label: 'All' },
  { value: 'Venue', label: 'Venue'},
  { value: 'Catering', 	label: 'Catering' }
];


export default connect( state => ({
	isAllowedOutside : state.profile.filter.venue.isAllowedOutside,
	isProvideOutside : state.profile.filter.venue.isProvideOutside,
	venueType		 : state.profile.filter.venue.venueType,=
}) )(Home)
