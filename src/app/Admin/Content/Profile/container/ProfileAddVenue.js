import React, {Component} from 'react'
import { reduxForm } from 'redux-form'

// import { hideProfileAddVenueModal } from '../action/modalAction'
// import { addOperator } from '../middleware/middleware'

import AddFormVenue from '../component/AddFormVenue'

class ProfileAddVenue extends Component {

    handleHide = () => {
    //     this.props.dispatch(hideProfileAddVenueModal())
    }

    handleSubmitForm = (e) => {
    //     e.preventDefault()
	// 	if(!this.props.loader){
	// 		this.props.dispatch(addOperator(formatFields(this.props.values)))
	// 	}
    }

    render () {
        return <AddFormVenue 
					handleHide={this.handleHide}
                    handleSubmitForm={this.handleSubmitForm}
                    {...this.props}
        />
    }
}

// const formatFields = (data) => {
//     return {
//         account : {
//             first 		: data.first 	|| undefined,
//             middle 		: data.middle 	|| undefined,
//             last 		: data.last 	|| undefined,
//             company 	: data.company 	|| undefined,
//             position 	: data.position || undefined,
//             email  		: data.email 	|| undefined,
//             phone 		: data.phone 	|| undefined,
// 			address		: data.address  || undefined
//         },
//         user : {
//             username 		        : data.username,
//             email			        : data.email,
//             password 		        : data.password,
//             password_confirmation   : data.password_confirmation
//         }
//     }
// }

ProfileAddVenue = reduxForm({
    form: 'approverAdd',
    fields: [
        'type',
        'cateredTo',
        'isAllowedOutside',
		'isProvideOutside',
		'areaQuantity',
        'details'
    ]} )(ProfileAddVenue)

export default ProfileAddVenue
