import React, {Component} from 'react'
import { Field, reduxForm, getFormValues  } from 'redux-form'
import { connect } from 'react-redux'
import Dropdown from 'react-toolbox/lib/dropdown'

import { addProfile } from '../middleware/middleware'
import { changeAddProfileFormType,changeAddProfilePage } from '../action/action'

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

    _handlePageChange = (value) => {
		this.props.dispatch(
			changeAddProfilePage(value)
		)
    }

	_renderProfileType = () => {
		if(this.props.profileType === 'Catering'){
			return <Catering  {...this.props} />	
		}	
		if(this.props.profileType === 'Venue'){
			return <Venue  {...this.props} />	
		}	
	}

	_renderPage = () => {
		if(this.props.page === 'selectTypeForm'){
			return (
				<div className="p25">
					<h3>Select Profile Type</h3>
					<div className="row">
						<div className="col-xs-6">
							<Dropdown
								auto
								onChange={this._handleChangeType}
								source={type}
								value={this.props.profileType}
							/>
						</div>
					</div>
					<button type="button" onClick={() => this._handlePageChange('personalForm')}>Next</button>
				</div>
			)
		}

		if(this.props.page === 'personalForm'){
			return (
				<div>
					<Personal {...this.props} />		
					<button type="button" onClick={() => this._handlePageChange('selectTypeForm')}>Back</button>
					<button type="button" onClick={() => this._handlePageChange('detailsForm')}>Next</button>
				</div>
			)				
		}

		if(this.props.page === 'detailsForm'){
			return (
				<div>
					{ this._renderProfileType() }		
					<button type="button" onClick={() => this._handlePageChange('personalForm')}>Back</button>
					<button type="button" onClick={this.props.handleSubmit(values => this._handleSubmitForm(values))}>Submit</button>
				</div>
			)				
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

const type = [
  { value: 'Venue', 	label: 'Venue' },
  { value: 'Catering', 	label: 'Catering'}
];

ProfileAdd = reduxForm({
	form: 'AddProfileForm'
})(ProfileAdd)

ProfileAdd = connect( state => ({
	profileType: state.admin.profile.addProfileFormType,
	value: getFormValues('AddProfileForm')(state),
	page : state.admin.profile.addProfilePage
}) )(ProfileAdd)

export default ProfileAdd
