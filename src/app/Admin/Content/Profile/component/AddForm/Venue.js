import React,{Component} from 'react'
import { Field,	FieldArray  } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

import { cateredTo } from '../../../../../../lib/cateredToList'

export default class Venue extends Component {

    render() {
        return (
			<div>
				<div className="panel-body p25">
					<h3>Venue Form</h3>
					<br />
					<FieldArray name="cateredTo" component={renderCateredToFieldArray} />
					<br />
					<div className="section row">
						<div className="col-xs-6">
							<p>Venue Type</p>
							<Field name="venuetype" component={renderVenueType}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-4">
							<Field name="isAllowedOutside" component={renderIsAllowedOutside}/>
						</div>
						<div className="col-xs-4">
							<Field name="isProvideOutside" component={renderIsProvideOutside}/>
						</div>
						<div className="col-xs-4">
							<Field name="areaQuantity" component={renderAreaQuantity}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-12">
							<Field name="details" component={renderDetails}/>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

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

// export const renderCateredTo = (field) => {
//
// 	return (
// 		<Dropdown
// 			auto
// 			onChange={field.input.onChange}
// 			source={cateredTo}
// 			value={field.input.value}
// 		/>
// 	)
// }


export const renderIsAllowedOutside = (field) => {

	return (
		<Checkbox
			label="Allow Outside Catering"
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
		/>
	)
}

export const renderCateredToFieldArray = (member, index, fields) => {

	return (
		<div className="section row">
			<div className="col-xs-12">
				<p>Venue Type</p>
			</div>
			<div className="col-xs-4">
				<Field name={`${member}.Wedding Ceremony`} component={renderCateredTo} label="Wedding Ceremony"/>
			</div>
			<div className="col-xs-4">
				<Field name={`${member}.Wedding Reception`} component={renderCateredTo} label="Wedding Reception"/>
			</div>
			<div className="col-xs-4">
				<Field name={`${member}.Corporate Events`} component={renderCateredTo} label="Corporate Events"/>
			</div>
		</div>
	)
}

export const renderCateredTo = (field) => {

	return (
		<Checkbox
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
			label={field.label}
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
