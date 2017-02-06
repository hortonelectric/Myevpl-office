import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import _ from 'lodash'

import { cateredTo, venueType } from '../../../../lib/profileFieldList'
import { changeFilterisAllowedOutside, changeFilterisProvideOutside, insertFilterVeneuType, removeFilterVeneuType } from './action'

class Home extends Component {

	_handleIsAllowedOutsideChange = (value) => {
		this.props.dispatch(
			changeFilterisAllowedOutside(value)	
		)	
	}

	_handleIsProvideOutsideChange = (value) => {
		this.props.dispatch(
			changeFilterisProvideOutside(value)	
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

	_renderVenueTypCheckboxes = () => {
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
		console.log(this.props)
		return (
			<section>
				<h3>Venue Specific Filter</h3>
				<div>
					<h4>Venue Types</h4>
					{this._renderVenueTypCheckboxes()}
				</div>
				<div>
					<h4>Allow Outside Catering</h4>
					<Dropdown
						auto
						onChange={this._handleIsAllowedOutsideChange}
						source={isAllowedOutsideSource}
						value={this.props.isAllowedOutside}
					/>
				</div>
				<div>
					<h4>Provide Outside Catering</h4>
					<Dropdown
						auto
						onChange={this._handleIsProvideOutsideChange}
						source={isProvideOutsideSource}
						value={this.props.isProvideOutside}
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

const isAllowedOutsideSource = [
  { value: 'All', 	label: 'All' },
  { value: true, 	label: 'Yes'},
  { value: false, 	label: 'No' }
];

const isProvideOutsideSource = [
  { value: 'All', 	label: 'All' },
  { value: true, 	label: 'Yes'},
  { value: false, 	label: 'No' }
];

export default connect( state => ({
	isAllowedOutside : state.profile.filter.venue.isAllowedOutside,
	isProvideOutside : state.profile.filter.venue.isProvideOutside,
	venueType		 : state.profile.filter.venue.venueType
}) )(Home)
