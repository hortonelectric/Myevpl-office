import React,{Component} from 'react'
import { Field } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

import { cateredTo } from '../../../../../../lib/cateredToList'

export default class Catering extends Component {

    render() {
        return (
			<div>
				<div className="panel-body p25">
					<h3>Venue Form</h3>
					<div className="section row">
						<div className="col-xs-4">
							<p>Events Catered To</p>
							<Field name="cateredTo" component={renderCateredTo}/>
						</div>
						<div className="col-xs-4">
							<p>Cuisine Names</p>
							<Field name="cuisines" component={renderCuisines}/>
						</div>
						<div className="col-xs-4">
							<p>Travel Distance</p>
							<Field name="travelDistance" component={renderTravelDistance}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-3">
							<p>Avereage Cost Per Plate</p>
							<Field name="averageCostPerPlateMin" component={renderAverageCostPerPlateMin}/>
						</div>
						<div className="col-xs-3">
							<br />
							<Field name="averageCostPerPlateMax" component={renderAverageCostPerPlateMax}/>
						</div>
						<div className="col-xs-3">
							<p>Capacity</p>
							<Field name="capacityMin" component={renderCapacityMin}/>
						</div>
						<div className="col-xs-3">
							<br />
							<Field name="capacityMax" component={renderCapacityMax}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-12">
							<Field name="menu" component={renderMenu}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-12">
							<Field name="package" component={renderPackage}/>
						</div>
					</div>
				</div>
			</div>
        )
    }
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


export const renderCuisines = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='ex. Italian, American, etc' 
		/>
	)
}

export const renderTravelDistance = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='distance' 
		/>
	)
}

export const renderAverageCostPerPlateMin = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Min' 
		/>
	)
}

export const renderAverageCostPerPlateMax = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Max' 
		/>
	)
}

export const renderCapacityMin = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Min' 
		/>
	)
}

export const renderCapacityMax = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Max' 
		/>
	)
}

export const renderMenu = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			multiline={true}
			label='Menu Details' 
		/>
	)
}

export const renderPackage = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			multiline={true}
			label='Package Details' 
		/>
	)
}
