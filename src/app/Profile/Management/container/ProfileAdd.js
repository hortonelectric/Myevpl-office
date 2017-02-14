import React, {Component} from 'react'
import { FieldArray, Field, reduxForm, getFormValues  } from 'redux-form'
import { connect } from 'react-redux'
import Dropdown from 'react-toolbox/lib/dropdown'
import Button from 'react-toolbox/lib/button'
import Layout from 'react-toolbox/lib/layout'
import Input from 'react-toolbox/lib/input'

import { addProfile } from '../middleware/middleware'
import { changeAddProfileFormType,changeAddProfilePage, changeAddProfileVenueEventAreas } from '../action'

import Personal from '../component/AddForm/Personal'
import Venue from '../component/AddForm/Venue'
import Catering from '../component/AddForm/Catering'

class ProfileAdd extends Component {

    _handleSubmitForm = (value) => {
		const payload = Object.assign({}, value, { type: this.props.profileType })
		this.props.dispatch(
			addProfile(payload)	
		)
    }
	
    _handleChangeType = (value) => {
		this.props.dispatch(
			changeAddProfileFormType(value)
		)
    }

    _handleProfileTypeButton = (type, page) => {
		this.props.dispatch(
			changeAddProfileFormType(type)
		)
		this.props.dispatch(
			changeAddProfilePage(page)
		)
    }

    _handlePageChange = (value) => {
		this.props.dispatch(
			changeAddProfilePage(value)
		)
    }

	_handleChangeVenueAreaEvents = (value) => {
		this.props.dispatch(
			changeAddProfileVenueEventAreas(value)	
		)
	}

	_renderProfileType = () => {
		const handleVenueAreaEvents = () => {
			this._handleChangeVenueAreaEvents(0)
			this._handlePageChange('eventAreaVenue')
		}
		if(this.props.profileType === 'Catering'){
			return ( 
				<div>
					<Catering  {...this.props} /> 
					<br/>
					<Button primary raised type="button" onClick={() => this._handlePageChange('personalForm')} style={{ marginRight: 25 }}>Back</Button>
					<Button primary raised type="button" onClick={this.props.handleSubmit(values => this._handleSubmitForm(values))}>Submit</Button>
				</div>
			)	
		}	
		if(this.props.profileType === 'Venue'){
			return ( 
				<div>
					<Venue  {...this.props} /> 
					<br/>
					<Button primary raised type="button" onClick={() => this._handlePageChange('personalForm')} style={{ marginRight: 25 }}>Back</Button>
					<Button primary raised type="button" onClick={handleVenueAreaEvents}>Next</Button>
				</div>
			)	
		}	
	}

	_renderEventAreas = () => {
		const quantity = this.props.value.areaQuantity
		const current = this.props.profileVenueEventAreas
		for( var i = 0; i < quantity; i++ ){
			if( current === i){
				return (
					<div>
						<Field name={`eventAreaDetails[${current}].capacity`} 		component={renderInputField}/>
						<Field name={`eventAreaDetails[${current}].dailyRate`} 		component={renderInputField}/>
						<Field name={`eventAreaDetails[${current}].profilePhoto`} 	component={renderInputField}/>
						<Field name={`eventAreaDetails[${current}].eventAreaPhoto`} component={renderInputField}/>
						<Field name={`eventAreaDetails[${current}].eventType1`} 	component={renderInputField}/>
						<Field name={`eventAreaDetails[${current}].eventType2`} 	component={renderInputField}/>
						<FieldArray name={`eventAreaDetails[${current}].amenities`} component={renderInputField}/>
						<Button primary raised type="button" onClick={() => this._handleChangeVenueAreaEvents(i - 1)} style={{ marginRight: 25 }}>Back</Button>
						<Button primary raised type="button" onClick={() => this._handleChangeVenueAreaEvents(i + 1)}>Next</Button>
					</div>
				)
			}
		}

	}

	_renderPage = () => {
		if(this.props.page === 'selectTypeForm'){
			return (
				<div className="p25">
					<h1>Select Profile Type</h1>
					<Button primary raised type="button" onClick={() => this._handleProfileTypeButton('Venue', 'personalForm')} style={{ marginRight: 25 }}>Venue</Button>
					<Button primary raised type="button" onClick={() => this._handleProfileTypeButton('Catering', 'personalForm')}>Catering</Button>
				</div>
			)
		}

		if(this.props.page === 'personalForm'){
			return (
				<div>
					<Personal {...this.props} />		
					<br/>
					<Button primary raised type="button" onClick={() => this._handlePageChange('selectTypeForm')} style={{ marginRight: 25 }}>Back</Button>
					<Button primary raised type="button" onClick={() => this._handlePageChange('detailsForm')}>Next</Button>
				</div>
			)				
		}
		
		if(this.props.page === 'detailsForm'){
			return (
				<div>
					{ this._renderProfileType() }		
				</div>
			)				
		}

		// if(this.props.page === 'detailsForm'){
		// 	return (
		// 		<div>
		// 			{ this._renderProfileType() }		
		// 			<br/>
		// 			<Button primary raised type="button" onClick={() => this._handlePageChange('personalForm')} style={{ marginRight: 25 }}>Back</Button>
		// 			<Button primary raised type="button" onClick={this.props.handleSubmit(values => this._handleSubmitForm(values))}>Submit</Button>
		// 		</div>
		// 	)				
		// }

		if(this.props.page === 'eventAreaVenue'){
			return this._renderEventAreas()
		}

	}

    render () {
        return (
			<section>
				<form>
					{this._renderPage()}
				</form>
			</section>	
		)
    }
}

const renderInputField = (field) => {
	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label={field.label} 
		/>
	)
}

const type = [
  { value: 'Venue', 	label: 'Venue' },
  { value: 'Catering', 	label: 'Catering'}
];

ProfileAdd = reduxForm({
	form : 'AddProfileForm',
	initialValues : {
		areaQuantity : 1	
	}
})(ProfileAdd)

ProfileAdd = connect( state => ({
	profileType				: state.profile.add.profileType,
	page 					: state.profile.add.profilePage,
	profileVenueEventAreas	: state.profile.add.profileVenueEventAreas,
	value					: getFormValues('AddProfileForm')(state)
}) )(ProfileAdd)

export default ProfileAdd
