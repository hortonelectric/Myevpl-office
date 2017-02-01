import React,{Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'
import Input from 'react-toolbox/lib/input'

import * as component from './VenueForm'

class AddFormVenue extends Component {

	handleOnSubmit = (data) => {
		console.log(data)
		console.log('foo')
	}

    render() {
		const { 
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
								<p>Venue Type</p>
								<Field name="type" component={component.renderType}/>
							</div>
							<div className="col-xs-6">
								<p>Events Catered To</p>
								<Field name="cateredTo" component={component.renderCateredTo}/>
							</div>
						</div>
						<br/>
						<div className="section row">
							<div className="col-xs-4">
								<Field name="isAllowedOutside" component={component.renderIsAllowedOutside}/>
							</div>
							<div className="col-xs-4">
								<Field name="isProvideOutside" component={component.renderIsProvideOutside}/>
							</div>
							<div className="col-xs-4">
								<Field name="areaQuantity" component={component.renderAreaQuantity}/>
							</div>
						</div>
						<br/>
						<div className="section row">
							<div className="col-xs-12">
								<Field name="details" component={component.renderDetails}/>
							</div>
						</div>

					</div>

					<div className="panel-footer text-center">
						<button type="button" className="button btn-default" onClick={this.props.handleSubmit(data => this.handleOnSubmit(data))}>Submit</button>
						<button type="button" className="button btn-default" onClick={this.props.handleHide}>Close</button>
					</div>

				</form>
        )

    }
}


export default AddFormVenue = reduxForm({
	form: 'addFormVenue'
})(AddFormVenue)

