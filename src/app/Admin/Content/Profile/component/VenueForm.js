import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

export const renderIsAllowedOutside = (field) => {

	return (
		<Checkbox
			label="Allow Outside Catering"
			{...field.input}
		/>
	)
}

export const renderIsProvideOutside = (field) => {

	return (
		<Checkbox
			label="Provide Outside Catering"
			{...field.input}
		/>
	)
}

export const renderAreaQuantity = (field) => {

	return (
		<Input 
			type='number' 
			label='Number of Event Areas' 
			{...field.input}
		/>
	)
}

export const renderDetails = (field) => {

	return (
		<Input 
			type='text' 
			multiline={true}
			label='Event Areas Details' 
			{...field.input}
		/>
	)
}
