import React,{Component} from 'react'
import { Field } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

export default class Personal extends Component {

    render() {
        return (
			<div>
				<div className="panel-body p25">
					<h1>Personal Form</h1>
					<div className="section row">
						<div className="col-xs-4">
							<Field name="name" component={renderName}/>
						</div>
						<div className="col-xs-4">
							<Field name="contactNumber" component={renderContactNumber}/>
						</div>
						<div className="col-xs-4">
							<Field name="email" component={renderEmail}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-8">
							<Field name="address" component={renderAddress}/>
						</div>
						<div className="col-xs-4">
							<Field name="city" component={renderCity}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-6">
							<Field name="country" component={renderCountry}/>
						</div>
						<div className="col-xs-6">
							<Field name="website" component={renderWebsite}/>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

const renderName = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Profile Name' 
		/>
	)
}

const renderContactNumber = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Contact Number' 
		/>
	)
}

const renderEmail = (field) => {

	return (
		<Input 
			type='email' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Email Address' 
		/>
	)
}

const renderAddress = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Address' 
		/>
	)
}

const renderCity = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='City' 
		/>
	)
}

const renderCountry = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Country' 
		/>
	)
}

const renderWebsite = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Website' 
		/>
	)
}
