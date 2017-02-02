import React,{Component} from 'react'
import { Field } from 'redux-form'
import * as component from './VenueForm'

export default class Catering extends Component {

    render() {
        return (
			<div>
				<h1>Venue Form</h1>
				<div className="panel-body p25">
					<div className="section row">
						<div className="col-xs-6">
							<p>Venue Type</p>
							<Field name="venueType" component={component.renderVenueType}/>
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
			</div>
        )
    }
}
