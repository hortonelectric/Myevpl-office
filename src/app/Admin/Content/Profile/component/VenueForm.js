import React,{Component} from 'react'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

export const renderIsAllowedOutside = (field) => {

	return (
		<Checkbox
			label="Allow Outside Catering"
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
		/>
	)
}

export const renderIsProvideOutside = (field) => {

	console.log(field)
	return (
		<Checkbox
			label="Provide Outside Catering"
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
		/>
	)
}

export const renderAreaQuantity = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Number of Event Areas' 
		/>
	)
}

export const renderDetails = (field) => {

	return (
		<Input 
			type='text' 
			multiline={true}
			value={field.input.value}
			onChange={field.input.onChange}
			label='Event Areas Details' 
		/>
	)
}
