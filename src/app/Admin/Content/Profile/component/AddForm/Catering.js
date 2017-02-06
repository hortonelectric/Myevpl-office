import React,{Component} from 'react'
import { Field } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

import { cateredTo } from '../../../../../../lib/profileFieldList'

export default class Catering extends Component {

    render() {
        return (
			<div>
				<div className="panel-body p25">
					<h3>Catering Form</h3>
					<div className="section row">
						<div className="col-xs-4">
							<div className="col-xs-12">
								<p>Events Catered To</p>
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
							<p>Menu Details</p>
							<Field name="menu" component={renderMenu}/>
						</div>
					</div>
					<br/>
					<div className="section row">
						<div className="col-xs-12">
							<p>Package Details</p>
							<Field name="package" component={renderPackage}/>
						</div>
					</div>
				</div>
			</div>
        )
    }
}


const renderCheckboxes = (field) => {
	return (
		<Checkbox
			label={field.label}
			onChange={field.input.onChange}
			checked={field.input.value ? true : false}
		/>
	)

}

const renderCateredTo = (field) => {

	return (
		<Dropdown
			auto
			onChange={field.input.onChange}
			source={cateredTo}
			value={field.input.value}
		/>
	)
}


const renderCuisines = (field) => {

	return (
		<Input 
			type='text' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='ex. Italian, American, etc' 
		/>
	)
}

const renderTravelDistance = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='distance' 
		/>
	)
}

const renderAverageCostPerPlateMin = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Min' 
		/>
	)
}

const renderAverageCostPerPlateMax = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Max' 
		/>
	)
}

const renderCapacityMin = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Min' 
		/>
	)
}

const renderCapacityMax = (field) => {

	return (
		<Input 
			type='number' 
			value={field.input.value}
			onChange={field.input.onChange}
			label='Max' 
		/>
	)
}

const renderMenu = (field) => {

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

const renderPackage = (field) => {

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
