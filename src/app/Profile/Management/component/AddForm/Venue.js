import React,{Component} from 'react'
import { Field,	FieldArray  } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'
import _ from 'lodash'

import { cateredTo } from '../../../../../lib/profileFieldList'

export default class Venue extends Component {

    render() {
        return (
			<div>
				<div className="panel-body p25">
					<h1>Venue Form</h1>
					<br />
					<div className="section row">
						<div className="col-xs-12">
							<p>Events Catered To</p>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Wedding Ceremony" component={renderCheckboxes} label="Wedding Ceremony"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Wedding Reception" component={renderCheckboxes} label="Wedding Reception"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Corporate Events" component={renderCheckboxes} label="Corporate Events"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Adult Birthdays" component={renderCheckboxes} label="Adult Birthdays"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Children Birthdays" component={renderCheckboxes} label="Children Birthdays"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Bachelor Parties" component={renderCheckboxes} label="Bachelor Parties"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Bachelorette Parties" component={renderCheckboxes} label="Bachelorette Parties"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Dinner Parties" component={renderCheckboxes} label="Dinner Parties"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Baby Showers" component={renderCheckboxes} label="Baby Showers"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Honey Moon" component={renderCheckboxes} label="Honey Moon"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Concert" component={renderCheckboxes} label="Concert"/>
						</div>
						<div className="col-xs-4">
							<Field name="cateredTo.Private Parties" component={renderCheckboxes} label="Private Parties"/>
						</div>
					</div>
					<br />
					<div className="section row">
						<div className="col-xs-12">
							<p>Venue Type</p>
							<div className="col-xs-4">
								<Field name="venueType.Church" component={renderCheckboxes} label="Church"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Resort" component={renderCheckboxes} label="Resort"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Hotel" component={renderCheckboxes} label="Hotel"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Event Hall/Ballroom" component={renderCheckboxes} label="Event Hall/Ballroom"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Club/Bar" component={renderCheckboxes} label="Club/Bar"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Recreation" component={renderCheckboxes} label="Recreation"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Kids" component={renderCheckboxes} label="Kids"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Restaurant" component={renderCheckboxes} label="Restaurant"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Garden/Tent" component={renderCheckboxes} label="Garden/Tent"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Museum/Zoo" component={renderCheckboxes} label="Museum/Zoo"/>
							</div>
							<div className="col-xs-4">
								<Field name="venueType.Other" component={renderCheckboxes} label="Other"/>
							</div>
						</div>
					</div>
					<br/>
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

const renderCheckboxes = (field) => {
	return (
		<Checkbox
			label={field.label}
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
		/>
	)

}

// export const renderCateredToArray = (props) => {
//
// 	return _.map(cateredTo, (data, index) => {
// 		return (
// 			<div className="col-xs-4" key={index}>
// 				<Field name={`cateredTo.${data.value}`} component={renderCheckboxes} label={data.label}/>
// 			</div>
// 		)	
// 	})	
// }

// export const renderVenueTypeArray = (props) => {
//
// 	return _.map(type, (data, index) => {
// 		return (
// 			<div className="col-xs-4" key={index}>
// 				<Field name={`venueType.${data.value}`} component={renderCheckboxes} label={data.label}/>
// 			</div>
// 		)	
// 	})	
// }

// export const renderVenueType = (field) => {
//
// 	return (
// 		<Dropdown
// 			auto
// 			onChange={field.input.onChange}
// 			source={type}
// 			value={field.input.value}
// 		/>
// 	)
// }

// export const renderCateredToFieldArray = (props) => {
//
// 	const checkValueIfDeclared = () => {
// 		return props.value ? true : false	
// 	}
//
// 	const checkValueIntoArray = (value) => {
// 		return checkValueIfDeclared() ?  _.find(props.value.cateredTo, data => data === value) : false
// 	}
//
// 	const handleOnChange = (index, value) => {
// 		return checkValueIntoArray(value) ? props.array.remove('cateredTo', index) : props.array.insert('cateredTo', index, value) 
// 	
// 	}
//
// 	const renderDropdowns = () => {
// 		return _.map(cateredTo, (data, index) => {
// 			return (
// 				<div className="col-xs-4" key={index}>
// 					<Checkbox
// 						onChange={() => handleOnChange(index, data.value)}
// 						checked={ checkValueIntoArray(data.value) ? true : false }
// 						label={ data.value }
// 					/>
// 				</div>
// 			)	
// 		})	
// 	}
//
// 	return (
// 		<div className="section row">
// 			<div className="col-xs-12">
// 				<p>Venue Type</p>
// 			</div>
// 			{renderDropdowns()}
// 		</div>
// 	)
// }

const renderIsAllowedOutside = (field) => {

	return (
		<Checkbox
			label="Allow Outside Catering"
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
		/>
	)
}

const renderIsProvideOutside = (field) => {

	return (
		<Checkbox
			label="Provide Outside Catering"
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
		/>
	)
}

const renderAreaQuantity = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Number of Event Areas' 
		/>
	)
}

const renderDetails = (field) => {

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
