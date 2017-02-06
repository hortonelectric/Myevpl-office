import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import _ from 'lodash'

import VenueFilter from './Venue/VenueFilter'

import { cateredTo, venueType } from '../../../lib/profileFieldList'
import { changeFilterProfileType, insertFilterCateredTo, removeFilterCateredTo } from './action'

class Home extends Component {

	_handleProfileTypeChange = (value) => {
		this.props.dispatch(
			changeFilterProfileType(value)	
		)	
	}

	_handleCateredToChange = (field, value) => {
		if(value){
			this.props.dispatch(
				insertFilterCateredTo(field)
			)
		}
		if(!value){
			this.props.dispatch(
				removeFilterCateredTo(field)
			)
		}
	}

	_renderCateredToCheckboxes = () => {
		const checkCateredToFromState = (data) => {
			return _.find(this.props.cateredTo, value => value === data)	
		}

		const checkIfChecked = (data) => {
			return checkCateredToFromState(data) ? true : false
		}

		return _.map(cateredFilterModel, (data, index) => {
			return(
		        <Checkbox
					checked={checkIfChecked(data.value)}
			        label={data.label}
			        onChange={this._handleCateredToChange.bind(this, data.value)}
				/>	
			)
		})
	}

	_renderProfileTypeSpecific = () => {
		if(this.props.profileType === "Venue")	{
			return <VenueFilter />	
		}
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
					{this._renderCateredToCheckboxes()}
				</div>
				<div>
					{this._renderProfileTypeSpecific()}				
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
