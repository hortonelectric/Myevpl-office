import React,{Component} from 'react'

export default class Basic extends Component {

    shouldComponentUpdate(nextProps) {
        return  this.props.type  	    	!== nextProps.type  			||
				this.props.cateredTo       	!== nextProps.cateredTo 		||
				this.props.isAllowedUnit    !== nextProps.isAllowedUnit   	||
                this.props.isProvideOutside !== nextProps.isProvideOutside	||
                this.props.details   		!== nextProps.details;
    }

    errorDescription(input) {
        return this.props.ajaxErrors[input] ?
            this.props.ajaxErrors[input].map(function(error){
                return <em className="state-error" key="">{error}</em>
            }) : ''
    }

    render() {
        return (
            <div className="section">

                <div className="section row">
                    <div className="col-xs-12 col-md-4">
                        <label htmlFor="first"
						    className={`field prepend-icon ${this.props.ajaxErrors.first ? 'state-error': ''}`}
                        >
                            <input type="text"
                                   name="first"
                                   id="first"
                                   className="gui-input"
                                   placeholder="First Name"
									{...this.props.first}

                            />
                            <label htmlFor="first" className="field-icon">
                                <i className="fa fa-user" />
                            </label>
                        </label>
                        { this.errorDescription('first') }
                    </div>
                    <div className="col-md-12 col-md-4">
                        <label htmlFor="middle"
						    className={`field prepend-icon ${this.props.ajaxErrors.middle ? 'state-error': ''}`}
                        >
                            <input type="text"
                                   name="middle"
                                   id="middle"
                                   className="gui-input"
                                   placeholder="Middle Name"
									{...this.props.middle}

                            />
							<label htmlFor="middle" className="field-icon">
								<i className="fa fa-user" />
							</label>
                        </label>
                        { this.errorDescription('middle') }
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <label htmlFor="last"
						    className={`field prepend-icon ${this.props.ajaxErrors.last ? 'state-error': ''}`}
                        >
                            <input type="text"
                                   name="last"
                                   id="last"
                                   className="gui-input"
                                   placeholder="Last Name"
									{...this.props.last}
                            />
							<label htmlFor="last" className="field-icon">
								<i className="fa fa-user" />
							</label>
                        </label>
                        { this.errorDescription('last') }
                    </div>
                </div>

            </div>
        )
    }
}
