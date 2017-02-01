import React,{Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'

import { renderIsAllowedOutside, renderIsProvideOutside, renderAreaQuantity, renderDetails } from './VenueForm'

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

class AddFormVenue extends Component {

    // shouldComponentUpdate(nextProps) {
    //     return  this.props.type  	    	!== nextProps.type  			||
	// 			this.props.cateredTo       	!== nextProps.cateredTo 		||
	// 			this.props.isAllowedUnit    !== nextProps.isAllowedUnit   	||
    //             this.props.isProvideOutside !== nextProps.isProvideOutside	||
    //             this.props.details   		!== nextProps.details;
    // }

    render() {
		const { 
			fields: { 
				type,
				cateredTo,
				isAllowedOutside,
				isProvideOutside,
				areaQuantity,
				details
			}, 
			handleSubmit, 
			onSubmit 
		} = this.props

        // const {
		// 	fields: { 
		// 		type,
		// 		cateredTo,
		// 		isAllowedUnit,
		// 		isProvideOutside,
		// 		areaQuantity,
		// 		details
		// 	}
		// } = this.props;
        //
		// const SubmitButton = () => {
		// 	if(this.props.loader){
		// 		return	(
		// 			<button type="submit" className="button btn-primary ml10" disabled> 
		// 				<i className="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading
		// 			</button>
		// 		)
		// 	}else{
		// 		return (
		// 			<button type="submit" className="button btn-primary ml10"> 
		// 				<span className="">Submit</span>
		// 			</button>
		// 		)	
		// 	}
		// }

        return (

				<form onSubmit={handleSubmit}>

					<div className="panel-body p25">
						<div className="section row">
							<div className="col-xs-6">
							</div>
							<div className="col-xs-6">
							</div>
						</div>
						<div className="section row">
							<div className="col-xs-4">
								<Field name="isAllowedOutside" component={renderIsAllowedOutside} {...isAllowedOutside}/>
							</div>
							<div className="col-xs-4">
								<Field name="isProvideOutside" component={renderIsProvideOutside} {...isProvideOutside}/>
							</div>
							<div className="col-xs-4">
								<Field name="areaQuantity" component={renderAreaQuantity} {...areaQuantity}/>
							</div>
						</div>

						<div className="section row">
							<div className="col-xs-12">
								<Field name="details" component={renderDetails} {...details}/>
							</div>
						</div>

					</div>

					<div className="panel-footer text-center">
						<button type="button" className="button btn-default" onClick={this.props.handleHide}>Close</button>
					</div>

				</form>
        )

    }
}


export default AddFormVenue = reduxForm({
	form: 'addFormVenue',
    fields: [
        'type',
        'cateredTo',
        'isAllowedOutside',
		'isProvideOutside',
		'areaQuantity',
        'details'
	]
})(AddFormVenue)

