import React,{Component} from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

const type = [
  { value: 'Church', 				label: 'Church' },
  { value: 'Resort', 				label: 'Resort'},
  { value: 'Hotel', 				label: 'Hotel' },
  { value: 'Event Hall/Ballroom', 	label: 'Event Hall/Ballroom'},
  { value: 'Club/Bar', 				label: 'Club/Bar'},
  { value: 'Recreation', 			label: 'Recreation'},
  { value: 'Kids', 					label: 'Kids'},
  { value: 'Restaurant', 			label: 'Restaurant'},
  { value: 'Garden/Tent', 			label: 'Garden/Tent'},
  { value: 'Museum/Zoo', 			label: 'Museum/Zoo'},
  { value: 'Other', 				label: 'Other'}
];

const cateredTo = [
  { value: 'Wedding Ceremony', 		label: 'Wedding Ceremony' },
  { value: 'Wedding Reception', 	label: 'Wedding Reception'},
  { value: 'Corporate Events', 		label: 'Corporate Events' },
  { value: 'Adult Birthdays', 		label: 'Adult Birthdays'},
  { value: 'Children Birthdays', 	label: 'Children Birthdays'},
  { value: 'Bachelor Parties', 		label: 'Bachelor Parties'},
  { value: 'Bachelorette Parties', 	label: 'Bachelorette Parties'},
  { value: 'Dinner Parties', 		label: 'Dinner Parties'},
  { value: 'Baby Showers', 			label: 'Baby Showers'},
  { value: 'Honey Moon', 			label: 'Honey Moon'},
  { value: 'Concert', 				label: 'Concert'},
  { value: 'Private Parties', 		label: 'Private Parties'}
];


export const renderVenueType = (field) => {

	return (
		<Dropdown
			auto
			onChange={field.input.onChange}
			source={type}
			value={field.input.value}
		/>
	)
}

export const renderCateredTo = (field) => {

	return (
		<Dropdown
			auto
			onChange={field.input.onChange}
			source={cateredTo}
			value={field.input.value}
		/>
	)
}


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
