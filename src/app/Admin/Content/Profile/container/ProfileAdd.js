import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import { connect } from 'react-redux'

import { changeAddProfileFormType } from '../action/action'
// import { hideProfileAddVenueModal } from '../action/modalAction'
// import { addOperator } from '../middleware/middleware'

import Personal from '../component/AddForm/Personal'
import Venue from '../component/AddForm/Venue'
import Catering from '../component/AddForm/Catering'

class ProfileAdd extends Component {

    handleHide = () => {
    //     this.props.dispatch(hideProfileAddVenueModal())
    }

    handleSubmitForm = (e) => {
    //     e.preventDefault()
	// 	if(!this.props.loader){
	// 		this.props.dispatch(addOperator(formatFields(this.props.values)))
	// 	}
    }
	
    _handleChangeType = (value) => {
		this.props.dispatch(
			changeAddProfileFormType(value)
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

    render () {
        return (
			<section>
				<form>
					<Personal {...this.props} />				
					<hr />	
					<div>
						<Dropdown
							auto
							onChange={this._handleChangeType}
							source={type}
							value={this.props.addProfileFormType}
						/>
					</div>
					{ this._renderProfileType() }	
				</form>
			</section>	
		)
    }
}

const type = [
  { value: 'Venue', 	label: 'Venue' },
  { value: 'Catering', 	label: 'Catering'}
];

// const formatFields = (data) => {
//     return {
//         account : {
//             first 		: data.first 	|| undefined,
//             middle 		: data.middle 	|| undefined,
//             last 		: data.last 	|| undefined,
//             company 		: data.company 	|| undefined,
//             position 	: data.position || undefined,
//             email  		: data.email 	|| undefined,
//             phone 		: data.phone 	|| undefined,
// 			address			: data.address  || undefined
//         },
//         user : {
//             username 		        : data.username,
//             email			        : data.email,
//             password 		        : data.password,
//             password_confirmation   : data.password_confirmation
//         }
//     }
// }

ProfileAdd = connect( state => ({
	profileType: state.admin.profile.addProfileFormType	
}) )(ProfileAdd)

ProfileAdd = reduxForm({
	form: 'AddProfileForm'
})(ProfileAdd)

export default ProfileAdd
